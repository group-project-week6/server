const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false
})

const Text = mongoose.model('Text', textSchema)

module.exports = Text