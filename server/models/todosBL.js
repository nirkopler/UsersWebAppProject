const users = require('./usersModel');

// POST a new todo by userId 💪
exports.postTodo = (userId ,newTodo) => {
    return new Promise((resolve, reject) => {
        users.findById(userId, (err, res) => {
            if(err) {reject(err)} else {
                res.todos.push(newTodo);
                res.save((err) => {
                    (err) ? reject(err) : resolve(`todo added to user: ${userId}`)
                })
            }
        })
    })
}

// PUT - update if todo is completed BY ID! 😁
exports.putUser = (todoId, todo) => {
    return new Promise((resolve, reject) => {
        users.findOne({'todos._id': todoId}, (err, res) => {
            if(err) {reject(err)} else {
                res.todos.id(todoId).set(todo);
                res.save((err) => {
                    (err) ? reject(err) : resolve(`todo - ${todoId} - updated!`)
                })
            }
        })
    })
}