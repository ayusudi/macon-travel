const express = require('express');
const router = express.Router();
const weather = require('../controllers/weather_controller')

router.get('/'  , weather.getWeather )


module.exports = router
