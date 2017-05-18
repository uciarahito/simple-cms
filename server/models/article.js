const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article