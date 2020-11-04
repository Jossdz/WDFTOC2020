const { Schema, model } = require("mongoose")

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  color: {
    type: String,
    enum: ["black", "gray", "orange"]
  },
  age: {
    type: Number,
    default: 0
  }
})

module.exports = model("Cat", catSchema)
