const { Router } = require('express');
const { signupViewComensal, signupViewRestaurant, signupProcessComensal, loginView, indexView, signupProcessRestaurant, loginProcess, profileView, profilePicture } = require('../controllers/authControllers');
const uploadPicture = require('../config/ cloudinary')

const router = Router()
router.get('/', indexView)
router.get('/signup-comensal', signupViewComensal);
router.get('/signup-restaurant', signupViewRestaurant)
router.post('/signup', signupProcessComensal)
router.post('/signup-restaurant', signupProcessRestaurant)
router.get('/login', loginView)
router.post('/login', loginProcess)
router.get('/profile', profileView)
router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
module.exports = router;