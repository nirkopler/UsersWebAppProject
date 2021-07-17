const mongoose = require('mongoose');

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
    address: {
        street: {type: String, required: false, default: ''},
        city: {type: String, required: false, default: ''},
        zipcode: {type: Number, required: false, default: 0}
    },
    todos: [{type: todoSchema, required: false}],
    posts: [{type: postSchema, required: false}]
})


module.exports = mongoose.model('users', usersSchema);