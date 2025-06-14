
const { name } = require('ejs');


const mongoose = require('mongoose')

const abayaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
})

const Abaya = mongoose.model('Abaya', abayaSchema)
module.exports = Abaya
