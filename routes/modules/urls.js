const express = require('express')
const router = express.Router()
const URL = require('../../models/url')


////// Routing Section Starts Here //////
router.get('/:url_id', (req, res) => {
  const id = req.params.url_id
  
  return URL.findById(id)
    .lean()
    .then(url => res.render('result', { url }))
    .catch(error => console.log(error))
})
////// Routing Section Ends Here //////


module.exports = router