const express = require('express');
const { sendMensajito } = require('../controllers');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/send-email', sendMensajito);

module.exports = router;