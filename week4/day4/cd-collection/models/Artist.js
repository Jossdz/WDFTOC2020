const { Schema, model } = require("mongoose")

const artistSchema = new Schema({
  name: String,
  genre: {
    type: String,
    enum: [
      "Metal",
      "Cumbiones",
      "Kpop",
      "Bachata",
      "DeepHouse",
      "Tribal",
      "Corridos"
    ]
  },
  country: String,
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album"
    }
  ]
})

module.exports = model("Artist", artistSchema)
