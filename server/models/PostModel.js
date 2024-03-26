const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title:String,
    summary: String,
    content: String,
    cover: String,


},{
    timestamps: true,
})

const PostModel = mongoose.model('Post', postSchema)

module.exports= PostModel