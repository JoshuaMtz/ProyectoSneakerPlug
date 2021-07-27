// # 1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

// # 2
var UsersSchema = Schema ({
    userID: String,
    userName: String,
    email: String,
    password: String, 
    boughtProducts: [],
    selledProducts: [],
    offeredProducts: []
})

// # 3
module.exports = mongoose.model('users',UsersSchema)