/* Resort cards: price + guest filters, sorting, and a Load more button */
(function () {
  var PAGE_SIZE = 9; // cards shown at first, and added with each "Load more" click

  var C = window.ZENVO_CONFIG || {};
  var list = window.ZENVO_RESORTS || [];
  var grid = document.getElementById("resort-grid");
  if (!grid) return;

  var priceEl = document.getElementById("price-range");
  var guestEl = document.getElementById("guest-count");
  var sortEl = document.getElementById("sort-by");
  var resetEl = document.getElementById("reset-filters");
  var countEl = document.getElementById("result-count");
  var emptyEl = document.getElementById("no-results");
  var moreEl = document.getElementById("load-more");

  var visible = PAGE_SIZE;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var placeholder =
    '<svg class="ph-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10.5" r="1.8"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/></svg>';

  function card(r) {
    var img = "";
    if (C.IMAGE_BASE_URL && r.images && r.images[0]) {
      img = '<img src="' + esc(C.IMAGE_BASE_URL + r.images[0]) + '" alt="' + esc(r.name) + '" loading="lazy" onerror="this.remove()">';
    }
    return (
      '<a class="resort-card" href="resort.html?id=' + encodeURIComponent(r.id) + '">' +
        '<div class="card-media">' + placeholder + img + '</div>' +
        '<div class="card-body">' +
          '<h2>' + esc(r.name) + '</h2>' +
          '<p>' + esc(r.price) + ' ' + esc(r.priceLabel) + '</p>' +
          '<span class="card-link">See details</span>' +
        '</div>' +
      '</a>'
    );
  }

  function matches() {
    var range = priceEl.value === "" ? [0, Infinity] : priceEl.value.split("-").map(Number);
    var min = range[0];
    var max = range[1];
    var guests = guestEl.value === "" ? null : Number(guestEl.value);

    var found = list.filter(function (r) {
      if (r.price < min || r.price > max) return false;
      if (guests !== null && r.guests && (guests < r.guests[0] || guests > r.guests[1])) return false;
      return true;
    });
    if (sortEl.value === "low") found.sort(function (a, b) { return a.price - b.price; });
    if (sortEl.value === "high") found.sort(function (a, b) { return b.price - a.price; });
    return found;
  }

  function render() {
    var found = matches();
    var shown = found.slice(0, visible);

    grid.innerHTML = shown.map(card).join("");
    emptyEl.hidden = found.length > 0;
    moreEl.hidden = shown.length >= found.length;
    countEl.textContent = "Showing " + shown.length + " of " + found.length + " resorts";
  }

  function filtersChanged() { visible = PAGE_SIZE; render(); }

  [priceEl, guestEl].forEach(function (el) { el.addEventListener("change", filtersChanged); });
  sortEl.addEventListener("change", filtersChanged);
  resetEl.addEventListener("click", function () {
    priceEl.value = ""; guestEl.value = ""; sortEl.value = "default";
    filtersChanged();
  });
  moreEl.addEventListener("click", function () { visible += PAGE_SIZE; render(); });

  render();
})();
