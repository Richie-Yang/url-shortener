const db = require('../../config/mongoose')
const URL = require('../url')


db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    URL.create({
      original_URL: `https://${i}`,
      shortened_URL: `https://localhost/${i}`
    })
  }
  console.log('done')
})