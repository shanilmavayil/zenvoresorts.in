/* Builds the resort cards from js/resorts-data.js */
(function () {
  var C = window.ZENVO_CONFIG || {};
  var list = window.ZENVO_RESORTS || [];
  var grid = document.getElementById("resort-grid");
  if (!grid) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var placeholder =
    '<svg class="ph-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10.5" r="1.8"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/></svg>';

  grid.innerHTML = list.map(function (r) {
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
  }).join("");
})();
