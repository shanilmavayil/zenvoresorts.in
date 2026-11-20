/* ===== ALL RESORTS LIVE HERE =====
   To add a resort, copy one block, change the values and add a comma between blocks.
   "images": file names on Cloudflare (base link is set in js/config.js).
   "guests": [fewest, most] guests the resort takes.
   NOTE: only Hill View (5 to 15) comes from your design. The other guest numbers are SAMPLES, replace them with the real ones. */
window.ZENVO_RESORTS = [
  { id: "hill-view",          name: "HILL VIEW RESORT",       price: 1000, priceLabel: "per person for a night", guests: [5, 15], images: ["hillview-1.jpg"] },
  { id: "niagra-hillstation", name: "NIAGRA HILLSTATION",     price: 900,  priceLabel: "per head for a night",   guests: [2, 8],  images: ["niagra-1.jpg"] },
  { id: "table-top",          name: "TABLE TOP",              price: 800,  priceLabel: "per head for a night",   guests: [2, 10], images: ["tabletop-1.jpg"] },
  { id: "grand-family-suite", name: "The Grand Family Suite", price: 1000, priceLabel: "per head for a night",   guests: [4, 12], images: ["grandfamily-1.jpg"] },
  { id: "executive-suite",    name: "Executive Suite",        price: 700,  priceLabel: "per head for a night",   guests: [2, 4],  images: ["executive-1.jpg"] },
  { id: "grand-penthouse",    name: "The Grand Penthouse",    price: 1000, priceLabel: "per head for a night",   guests: [2, 6],  images: ["penthouse-1.jpg"] }
];
