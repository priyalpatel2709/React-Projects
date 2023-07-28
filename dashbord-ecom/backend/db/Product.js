const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price : String,
    category: String,
    userId: String,
    company: String,
    image: {
        data: Buffer,  // Store image data as a buffer
        contentType: String,  // Mime type of the image
    },
})

module.exports = mongoose.model("products",ProductSchema)