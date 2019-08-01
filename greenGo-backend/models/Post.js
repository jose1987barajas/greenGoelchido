const { Schema, model } = require('mongoose')

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    img: String
  },
  {
    timestamps: {
      createdAt: 'createdAt'
    }
  }
)

module.exports = model('Post', PostSchema)
