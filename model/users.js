// # 1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

// # 2
var UsersSchema = Schema ({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

// # 3
module.exports = mongoose.model('users',UsersSchema)