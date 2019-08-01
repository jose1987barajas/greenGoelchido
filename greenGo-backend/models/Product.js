const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const productSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
    retailPrice: Number,
    minRetail: Number,
    wholePrice: Number,
    minWhole: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Product', productSchema)
