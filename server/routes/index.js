const router = require('express').Router()
const mapsRouter = require('./gmaps')
router.get('/',(req, res, next)=>{
    console.log('connected')
})
router.use('/maps', mapsRouter)

module.exports = router