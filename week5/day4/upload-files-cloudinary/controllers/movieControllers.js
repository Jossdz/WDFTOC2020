const Movie = require('../models/Movie');


exports.getAllMovies = async(req, res) => {
    const movies = await Movie.find()
    res.render('movies-list', { movies })
}

exports.viewMoviesCreate = (req, res) => {
    res.render('movie-create')
}

exports.createMovie = async(req, res) => {
    const { title, description } = req.body;
    await Movie.create({ title, description, imageUrl: req.file.path })
    res.redirect('/movies')
}

exports.updateMovie = async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id)

    res.render('movie-edit', movie)

}

exports.updateImage = async(req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let imageUrl;
    console.log(req.file)
        //Esta condición evita que imageURL se guarde como un campo vacío 
    if (req.file) {
        imageUrl = req.file.path;
    } else {
        imageUrl = req.body.existingImage;
    }

    await Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
    res.redirect(`/movies`)
}