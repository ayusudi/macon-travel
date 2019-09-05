const router = require('express').Router()
const weather_routes = require('./weather_routes')
router.get('/',(req, res, next)=>{
    console.log('connected')
})

router.use('/weather' ,  weather_routes)

module.exports = router