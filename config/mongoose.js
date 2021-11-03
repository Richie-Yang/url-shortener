const mongoose = require('mongoose')

// Using Mongoose ODM to connect to MongoDB
mongoose.connect('mongodb://localhost/url-shortener')
const db = mongoose.connection

// Report any situation when connecting to DB
db.on('error', () => console.error('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))


// Export db constant as module
module.exports = db