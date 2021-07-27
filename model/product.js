// # 1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

// # 2
var ProductSchema = Schema ({
    name: String,
    description: String,
    size: Number,
    image: String,
    price: Number,
    user: Number,
    datePublished: Date,
    dateSelled: Date
})

// # 3
module.exports = mongoose.model('product',ProductSchema)