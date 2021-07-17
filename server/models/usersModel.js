const mongoose = require('mongoose');

// User Address SubSchema
const userAddressSchema = new mongoose.Schema({
    street: {type: String, required: true},
    city: {type: String, required: true},
    zipcode: {type: Number, required: true}
}, { _id : false })

// Task SubSchema
const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, required: true}
})

// Post SubSchema
const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
})

// ----- User Schema -----
const usersSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: userAddressSchema, required: false},
    todos: [{type: todoSchema, required: false}],
    posts: [{type: postSchema, required: false}]
})


module.exports = mongoose.model('users', usersSchema);