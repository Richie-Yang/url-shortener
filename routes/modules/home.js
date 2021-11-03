const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateRandomIndex = require('../../generate_random_index')


////// Routing Section Starts Here //////
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const original_URL = req.body.url

  return URL.findOne({ original_URL })
    .then(url => {
      if (!url) {
        const host = req.headers.host
        let shortened_URL = `
          https://${host}/${generateRandomIndex()}
        `

        URL.find()
          .then(urls => {
            while (urls.some(item => item.shortened_URL === shortened_URL)) {
              shortened_URL = `
                https://${host}/${generateRandomIndex()}
              `
            }
            return new URL({ original_URL, shortened_URL }).save()
          })
          .then(newURL => res.redirect(`/urls/${newURL.id}`))
          .catch(error => console.log(error))

      } else res.redirect(`/urls/${url.id}`)
    })
    .catch(error => console.log(error))
})
////// Routing Section Ends Here //////


module.exports = router