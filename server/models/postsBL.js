const users = require('./usersModel');

// POST a new post by userId 💪
exports.postNewPost = (userId ,newPost) => {
    return new Promise((resolve, reject) => {
        users.findById(userId, (err, res) => {
            if(err) {reject(err)} else {
                res.posts.push(newPost);
                res.save((err, user) => {
                    (err) ? reject(err) : resolve(user.posts[user.posts.length - 1]);
                })
            }
        })
    })
}