const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
// Import and directly run mongoose config
require('./config/mongoose')

// Initialize Express framework
const app = express()
const PORT = process.env.PORT || 3000

// Set template engine to Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)
// Handling all 500 errors here
app.use((err, req, res, next) => {
  res.status(500).render('error', { 
    title: '500', 
    description: 'Something went wrong, please try again later, or click Back button below.' 
  })
  next(err)
})


// Start Express server 
app.listen(PORT, () => {
  console.log(`Express server is listening on 127.0.0.1:${PORT}`)
})