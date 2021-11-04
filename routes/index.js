const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const urls = require('./modules/urls')


////// Routing Section Starts Here //////
router.use('/urls', urls)
router.use('/', home)
////// Routing Section Ends Here //////


module.exports = router