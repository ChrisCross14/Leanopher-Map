const map = L.map("map").setView([20, 120], 3);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "&copy; OpenStreetMap"
  }
).addTo(map);


// MANILA
L.marker([14.5995, 120.9842])
  .addTo(map)
  .bindPopup(`
    <h3>Manila</h3>
    <p>Unsere Reise auf den Philippinen 🇵🇭</p>
  `);


// PUERTO PRINCESA
L.marker([9.7392, 118.7353])
  .addTo(map)
  .bindPopup(`
    <h3>Puerto Princesa</h3>
    <p>Palawan</p>
  `);


// EL NIDO
L.marker([11.1956, 119.4070])
  .addTo(map)
  .bindPopup(`
    <h3>El Nido</h3>
    <p>Island Hopping 🌴</p>
  `);


// CORON
L.marker([12.0004, 120.2040])
  .addTo(map)
  .bindPopup(`
    <h3>Coron</h3>
    <p>Kayangan Lake</p>
  `);