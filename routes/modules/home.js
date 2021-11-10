const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateRandomIndex = require('../../generate_random_index')


////// Routing Section Starts Here //////
// GET index page (Read in CRUD operation)
router.get('/', (req, res) => {
  res.render('index')
})

// GET to redirect (Read in CRUD operation)
router.get('/:redirect_index', (req, res) => {
  const redirectIndex = req.params.redirect_index

  // find corresponding original_URL and redirect
  return URL.findOne({ redirect_index: redirectIndex })
    .then(url => res.redirect(url.original_URL))
    .catch(error => {
      console.log(error)
      res.status(404).render('error', { 
        statusCode: '404', 
        message: 'Result not found, please try something else, or click Back button below.' 
      })
    })
})

// POST to both convert URL and save it to DB (Create in CRUD operation)
router.post('/', (req, res, next) => {
  const original_URL = req.body.url.trim()
  if (!original_URL.length) res.redirect('/')

  return URL.find()
    .then(urls => {
      const oldURL = urls.filter(item => item.original_URL === original_URL)[0]

      // if undefined (oldURL not found), following script will be run
      if (!oldURL) {
        const host = req.headers.host
        let redirect_index = generateRandomIndex()

        // trying to do loop check for redirect_index until no duplication found
        while (urls.some(item => item.redirect_index === redirect_index)) {
          redirect_index = generateRandomIndex()
        }
        const shortened_URL = `http://${host}/${redirect_index}`
        URL.create({ original_URL, shortened_URL, redirect_index })
          .then(newURL => res.redirect(`/urls/${newURL.id}`)) // redirect
          .catch(error => console.log(error))
      } else res.redirect(`/urls/${oldURL.id}`) // if defined, then redirect
    })
    .catch(next)
})
////// Routing Section Ends Here //////


module.exports = router