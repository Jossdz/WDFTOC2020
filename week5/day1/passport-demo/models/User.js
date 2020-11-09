const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["ELPADRINO", "EDITOR", "INVITADO"],
      default: "INVITADO"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("User", userSchema)
