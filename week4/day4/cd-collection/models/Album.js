const { Schema, model } = require("mongoose")

const albumSchema = new Schema({
  title: String,
  description: String,
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  }
})

module.exports = model("Album", albumSchema)
