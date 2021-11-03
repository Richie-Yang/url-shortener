const express = require('express')
const exphbs = require('express-handlebars')

// Initialize Express framework
const app = express()
const port = 3000

// Set template engine to Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


////// Routing Section Starts Here //////
app.get('/', (req, res) => {
  res.render('index')
})
////// Routing Section Ends Here //////


// Start Express server 
app.listen(port, () => {
  console.log(`Express server is listening on 127.0.0.1:${port}`)
})