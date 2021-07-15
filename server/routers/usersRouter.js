const express = require('express');
const router = express.Router();
const bl = require('../models/usersBL');

// GET All
router.route('/')
    .get(async (req, res, next) => {
        return res.json(await bl.getAllUsers().catch(next));
    })

// GET by ID
router.route('/:id')
    .get(async (req, res, next) => {
        return res.json(await bl.getUser(req.params.id).catch(next));
    })

// POST
router.route('/')
    .post(async (req, res, next) => {
        return res.json(await bl.postUser(req.body).catch(next));
    })

// PUT
router.route('/:id')
    .put(async (req, res, next) => {
        return res.json(await bl.putUser(req.params.id, req.body).catch(next));
    })

// DELETE
router.route('/:id')
    .delete(async (req, res, next) => {
        return res.json(await bl.deleteUser(req.params.id).catch(next));
    })

module.exports = router;