const mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}) // userSchema

let Article = mongoose.model('Article', articleSchema)
module.exports = Article