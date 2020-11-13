const { Router } = require('express');
const uploadPicture = require('../config/ cloudinary');
const { viewCreateRestaurant, createRestaurant, restaurantsUser } = require('../controllers/restaurantControllers');
const router = Router()


router.get('/create', viewCreateRestaurant)
router.post('/create', uploadPicture.single('image'), createRestaurant)
router.get('/restaurants-user', restaurantsUser)

module.exports = router