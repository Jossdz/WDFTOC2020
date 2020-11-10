const Place = require("../models/Place")

exports.newPlaceForm = (req, res) => {
  res.render("new-place", {
    token: process.env.MAPBOX_TOKEN
  })
}

exports.addNewPlace = async (req, res) => {
  // 1.Obtener la info del form
  const { name, description, lat, lng } = req.body
  // 2. Crear el lugar
  const location = {
    type: "Point",
    coordinates: [lng, lat]
  }
  // 3. Crear registro
  await Place.create({
    name,
    description,
    location
  })
  // 4. redirigir
  res.redirect("/")
}

exports.detailPlaceView = async (req, res) => {
  const place = await Place.findById(req.params.placeId)
  res.render("place-detail", { token: process.env.MAPBOX_TOKEN, place })
}
