const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/url-shortener'

// Using Mongoose ODM to connect to MongoDB
mongoose.connect(MONGODB_URI)
const db = mongoose.connection

// Report any situation when connecting to DB
db.on('error', () => console.error('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))


// Export db constant as module
module.exports = db