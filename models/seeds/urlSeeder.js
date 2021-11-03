const db = require('../../config/mongoose')
const URL = require('../url')
const dummyData = require('../../sample_urls.json')
const generateRandomIndex = require('../../generate_random_index')


db.once('open', () => {
  // warning message
  console.log('Before running this script, please make sure no duplicated original_URL or shortened_URL records in database.')

  dummyData.forEach(data => {
    // execute script
    const redirect_index = generateRandomIndex()

    // import dummy data
    URL.create({
      original_URL: data,
      shortened_URL: `http://localhost:3000/${redirect_index}`,
      redirect_index
    })
  })

  console.log('Done')
})