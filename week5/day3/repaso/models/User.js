const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: {
        type: String,
        enum: ["ADMIN", "USUARIO"],
        default: "USUARIO"
    }
}, {
    timestamps: true
})


module.exports = model("User", userSchema)