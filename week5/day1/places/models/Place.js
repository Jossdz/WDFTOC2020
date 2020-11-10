const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
  {
    name: String,
    description: String,
    location: {
      type: { type: String },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
)

placeSchema.index({ location: "2dsphere" })

module.exports = model("Place", placeSchema)
