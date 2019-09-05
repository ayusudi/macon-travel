const router = require('express').Router()
const wikiRouter = require('./wikiRouter')
router.get('/',(req, res, next)=>{
    res.send('hei')
    console.log('connected')
})
router.use('/wikipedia', wikiRouter)

module.exports = router