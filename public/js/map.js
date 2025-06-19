var map = L.map("map").setView(
  [listing.geometry.coordinates[1], listing.geometry.coordinates[0]],
  13
);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ABqB0wvH4g5FMgfnwM2R",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// console.log(coordinates);

L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]])
  .addTo(map)
  .bindPopup(
    `<h3>${listing.title}</h3><p>Exact Location will be provided after booking</p>`
  )
  .openPopup();
