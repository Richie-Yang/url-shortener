const mongoose = require('mongoose')
const { Schema } = mongoose


const urlSchema = new Schema({
    original_URL: {
      type: String,
      required: true,
    },
    shortened_URL: {
      type: String,
      required: true,
    },
    redirect_index: {
      type: String,
      require: true
    }
  }, 
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)


module.exports = mongoose.model('URL', urlSchema)