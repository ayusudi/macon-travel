const router = require('express').Router()
<<<<<<< HEAD
const weather_routes = require('./weather_routes')
=======
const wikiRouter = require('./wikiRouter')
>>>>>>> cefd20bb17f9fd3b4b884f0743b5d469b47289af
router.get('/',(req, res, next)=>{
    res.send('hei')
    console.log('connected')
})
router.use('/wikipedia', wikiRouter)

router.use('/weather' ,  weather_routes)

module.exports = router