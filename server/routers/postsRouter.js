const express = require('express');
const router = express.Router();
const bl = require('../models/postsBL');

// POST
router.route('/:userId')
    .post(async (req, res, next) => {
        return res.json(await bl.postNewPost(req.params.userId, req.body).catch(next));
    })

module.exports = router;