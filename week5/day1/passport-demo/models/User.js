const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: String,
    role: {
      type: String,
      enum: ["ELPADRINO", "EDITOR", "INVITADO"],
      default: "INVITADO"
    },
    googleID: String,
    slackID: String
  },
  {
    timestamps: true
  }
)

module.exports = model("User", userSchema)
