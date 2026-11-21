/* ===== ALL RESORTS LIVE HERE =====
   To add a resort, copy one block, change the values and add a comma between blocks.
   "images": file names on Cloudflare (base link is set in js/config.js).
   "guests": [fewest, most] guests the resort takes.
   NOTE: only Hill View (5 to 15) comes from your design. The other guest numbers are SAMPLES, replace them with the real ones. */
window.ZENVO_RESORTS = [
  { id: "hill-view",          name: "HILL VIEW RESORT",       price: 12000, priceLabel: "starting price", guests: [10], images: ["hillview-1.jpg"] },
  { id: "niagra-hillstation", name: "NIAGRA HILLSTATION",     price: 10000,  priceLabel: "starting price",   guests: [10],  images: ["niagra-1.jpg"] },
  { id: "table-top",          name: "TABLE TOP",              price: 15000,  priceLabel: "starting price",   guests: [12], images: ["tabletop-1.jpg"] },
  { id: "grand-family-suite", name: "The Grand Family Suite", price: 9000, priceLabel: "starting price",   guests: [8], images: ["grandfamily-1.jpg"] },
  { id: "executive-suite",    name: "Executive Suite",        price: 8000,  priceLabel: "starting price",   guests: [6],  images: ["executive-1.jpg"] },
  { id: "grand-penthouse",    name: "The Grand Penthouse",    price: 14000, priceLabel: "starting price",   guests: [12],  images: ["penthouse-1.jpg"] }
];
