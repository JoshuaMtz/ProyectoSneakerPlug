// # 1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

// # 2
var ProductSchema = Schema ({
    name: String,
    description: String,
    size: Number,
    price: Number,
    user: String,
    datePublished: Date,
    dateSelled: Date,
    img:
    {
        data: Buffer,
        contentType: String
    },
    selledStatus: {
        type:Boolean,
        default: false
    },
    userBought: String
})

// # 3
module.exports = mongoose.model('product',ProductSchema)