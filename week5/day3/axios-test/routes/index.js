const express = require("express")
const router = express.Router()
const axios = require("axios")
const { characterList } = require("../controllers/characters")
/* GET home page */
router.get("/", (req, res, next) => {
  axios
    .get("https://swapi.dev/api/people/")
    .then(({ data }) => {
      console.log(data)
      res.render("index", { results: data.results })
    })
    .catch(err => console.log(err))
})

router.get("/characters/:page", characterList)
router.get("/ships", (req, res) => {
  res.render("ships")
})

router.get("/yolo", (req, res) => {
  // aqui accedes a la db y mandas eso como json
  res.json({
    yolo: true
  })
})

module.exports = router
