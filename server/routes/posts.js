const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router

    .get('/', (req, res) => {
        res.send('We are on posts page');
    })

    .post('/', (req, res) => {
        try {
            const post = req.body;
            res.json(post);
        } catch (error) {
            console.error(error.message)
        }
    })

module.exports = router;