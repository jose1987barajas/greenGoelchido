const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    img: String,
    role: {
      type: String,
      enum: ['Asociacion', 'Cliente', 'Patrocinador', 'Proveedor', 'ADMIN'],
      default: 'Supplier'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model('User', userSchema)
