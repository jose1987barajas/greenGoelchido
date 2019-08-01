const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const sponsorSchema = new Schema(
  {
    name: String,
    img: String,
    description: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

sponsorSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model('Sponsor', sponsorSchema)
