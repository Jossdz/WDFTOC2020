require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Artist = require("./models/Artist")
const Album = require("./models/Album")

mongoose
  .connect("mongodb://localhost/cd-collection", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to db 💾"))

const app = express()

app.use(express.static("public"))
app.set("views", `${__dirname}/views`)
app.set("view engine", `hbs`)
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
  const artists = await Artist.find()
  res.render("index", { artists })
})
//Mostrar el form para crear un artista
app.get("/artist/create", (req, res) => {
  res.render("artist/create")
})
//Recibir la informacion para crear un artista
app.post("/artist/create", async (req, res) => {
  const { name, genre, country } = req.body
  await Artist.create({ name, genre, country })
  res.redirect("/")
})

app.get("/artist/:artistId", async (req, res) => {
  const { artistId } = req.params
  const artist = await Artist.findById(artistId).populate("albums")
  console.log(artist)
  res.render("artist/detail", artist)
})

app.get("/artist/edit/:artistId", async (req, res) => {
  const artist = await Artist.findById(req.params.artistId)
  res.render("artist/update", artist)
})
app.post("/artist/update/:artistId", async (req, res) => {
  const { name, genre, country } = req.body
  const { artistId } = req.params
  await Artist.findByIdAndUpdate(artistId, { name, genre, country })
  res.redirect(`/artist/${artistId}`)
})

app.get("/artist/delete/:artistId", async (req, res) => {
  const { artistId } = req.params
  await Artist.findByIdAndDelete(artistId)
  res.redirect("/")
})
// ============ALBUM=============

app.get("/album/create", async (req, res) => {
  const artists = await Artist.find()
  res.render("album/create", { artists })
})

app.post("/album/create", async (req, res) => {
  //TODO: Generar las referencias
  const { title, description, artistId } = req.body
  //1. creamos el album
  const album = await Album.create({
    title,
    description,
    artist: artistId
  })
  //2. obtenemos el artista y le agregamos el id del album nuevo
  await Artist.findByIdAndUpdate(artistId, { $push: { albums: album._id } })
  res.redirect(`/artist/${artistId}`)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
