mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zc2R6IiwiYSI6ImNrMGR4cWk2djBhbWszY3F2b3N4bDBqZTUifQ.ByHk_m_uZOjYaruW6T8Wig"
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 13
})

// const marker = new mapboxgl.Marker()
//  .setLngLat([-99.1622182, 19.4211955])
//  .addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const center = [position.coords.longitude, position.coords.latitude]

    map.setCenter(center)

    new mapboxgl.Marker().setLngLat(center).addTo(map)
  })
}
