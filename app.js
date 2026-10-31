const map = L.map("map").setView([20, 120], 3);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "&copy; OpenStreetMap"
  }
).addTo(map);



 L.marker([11.1956, 119.4070])
  .addTo(map)
  .bindPopup(`
    <h3>El Nido</h3>
    <img src="photos/IMG_1599.jpeg" width="220">
    <img src="photos/IMG_1768.jpeg" width="220">
    <img src="photos/IMG_6065.JPG" width="220">
    <img src="photos/IMG_8101.JPG" width="220">
  `);