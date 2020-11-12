const express = require('express');
const { getAllMovies, viewMoviesCreate, createMovie, updateMovie, updateImage } = require('../controllers/movieControllers');
const router = express.Router();
const fileUploader = require('../config/cloudinary')


router.get('/', getAllMovies)
router.get('/create', viewMoviesCreate)
router.post('/create', fileUploader.single('image'), createMovie)
router.get('/:id/edit', updateMovie)
router.post('/:id/edit', fileUploader.single('image'), updateImage)

module.exports = router