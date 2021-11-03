const express = require('express')
const router = express.Router()


////// Routing Section Starts Here //////
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body.url)
  res.render('result', { result: req.body.url })
})
////// Routing Section Ends Here //////


module.exports = router