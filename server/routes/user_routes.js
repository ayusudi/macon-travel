const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller23')

router.post('/login'  , user_controller.LoginGoogle )


module.exports = router
