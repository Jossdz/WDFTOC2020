const Restaurant = require('../models/Restaurant')

exports.viewCreateRestaurant = (req, res) => res.render('restaurant/createRestaurant')

exports.createRestaurant = async(req, res) => {
    const { name, type, capacidad, horarioAp, horarioCi, slogan } = req.body
    const logo = req.file.path
    await Restaurant.create({ name, type, capacidad, horarioAp, horarioCi, slogan, logo })
    res.render('restaurant/restaurants-user')
}

exports.restaurantsUser = (req, res) => res.render('restaurant/restaurants-user')