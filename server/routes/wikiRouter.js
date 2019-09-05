const router = require('express').Router()
const WikiController = require('../controllers/wikiController')

router.get('/all/:country', WikiController.getAll)



module.exports = router