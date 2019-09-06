const router = require('express').Router()
const weather_routes = require('./weather_routes')
const wikiRouter = require('./wikiRouter')
const user_routes = require('./user_routes')
router.get('/',(req, res, next)=>{
    res.send('hei')
    console.log('connected')
})
router.use('/wikipedia', wikiRouter);

router.use('/weather' ,  weather_routes);

router.use('/user' , user_routes);

module.exports = router