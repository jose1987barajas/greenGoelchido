const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const associationSchema = new Schema(
  {
    name: String,
    description: String,
    img: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

associationSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model('Association', associationSchema)
