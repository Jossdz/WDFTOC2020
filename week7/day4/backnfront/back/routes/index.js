const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('welcome to our projects REST API');
});

module.exports = router;
