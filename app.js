const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
// Import and directly run mongoose config
require('./config/mongoose')

// Initialize Express framework
const app = express()
const port = 3000

// Set template engine to Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)


// Start Express server 
app.listen(port, () => {
  console.log(`Express server is listening on 127.0.0.1:${port}`)
})