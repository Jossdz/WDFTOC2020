const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    role: {
        type: String,
        enum: ['ADMIN', 'RESTAURANT', 'COMENSAL'],
        default: 'COMENSAL'
    },
    picture: { type: String, default: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' },
    facebookID: String,
    githubID: String,
}, {
    timestamps: true
})


module.exports = model("User", userSchema)