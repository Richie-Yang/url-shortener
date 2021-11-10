const express = require('express')
const router = express.Router()
const URL = require('../../models/url')


////// Routing Section Starts Here //////
// GET result page for specific URL record (Read in CRUD operation)
router.get('/:url_id', (req, res) => {
  const id = req.params.url_id

  // find corresponding object and render it
  return URL.findById(id)
    .lean()
    .then(url => res.render('result', { url }))
    .catch(error => {
      console.log(error)
      res.status(404).render('error', {
        statusCode: '404',
        message: 'Result not found, please try something else, or click Back button below.'
      })
    })
})
////// Routing Section Ends Here //////


module.exports = router