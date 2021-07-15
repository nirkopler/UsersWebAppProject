const express = require('express');
const router = express.Router();
const bl = require('../models/usersBL');

// GET All
router.route('/')
    .get(async (req, res) => {
        return res.json(await bl.getAllUsers());
    })

// GET by ID
router.route('/:id')
    .get(async (req, res) => {
        return res.json(await bl.getUser(req.params.id));
    })

// POST
router.route('/')
    .post(async (req, res) => {
        return res.json(await bl.postUser(req.body));
    })

// PUT
router.route('/:id')
    .put(async (req, res) => {
        return res.json(await bl.putUser(req.params.id, req.body));
    })

// DELETE
router.route('/:id')
    .delete(async (req, res) => {
        return res.json(await bl.deleteUser(req.params.id));
    })

module.exports = router;