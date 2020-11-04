const express = require("express")

const app = express()

app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

app.use(express.static("public"))

app.get("/", (req, res) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "<b>Ironhack Web Dev</b>",
    login: true
    // cities: [
    //   "Amsterdam",
    //   "Barcelona",
    //   "Berlin",
    //   "Lisbon",
    //   "Madrid",
    //   "Mexico City",
    //   "Miami",
    //   "Paris",
    //   "Sao Paulo"
    // ]
  }
  res.render("index", data)
})

app.get("/cat", (req, res) => {
  const pets = {
    cat: {
      name: "Garfield"
    },
    dog: {
      name: "Molly"
    }
  }
  res.render("cat", pets)
})

app.listen(3000, () => {
  console.log(`running on: http://localhost:3000`)
})
