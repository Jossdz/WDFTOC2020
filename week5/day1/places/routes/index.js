const express = require("express")
const router = express.Router()
const {
  newPlaceForm,
  addNewPlace,
  detailPlaceView
} = require("../controllers/places")
const Place = require("../models/Place")
const { catchErrors } = require("../middlewares/index")
/* GET home page */
router.get("/", async (req, res, next) => {
  const places = await Place.find()
  res.render("index", { token: process.env.MAPBOX_TOKEN, places })
})

router.get("/place/add", newPlaceForm)
router.post("/place/add", catchErrors(addNewPlace))
router.get("/place/:placeId", catchErrors(detailPlaceView))

module.exports = router
