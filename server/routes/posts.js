const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router

    //creates and submits our post
    .post('/', async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        try {
            const savePost = await post.save();
            res.json(savePost);
        } catch (error) {
            res.json(error.message)
        }
    })

    // gets all the post from our database
    .get('/', async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            res.json(error.message);
        }
    })

    //get specific post
    .get('/:postId', async (req, res) => {
        try {
            const postId = req.params.postId;
            const post = await Post.findById(postId);
            res.json(post);
        } catch (error) {
            res.json(error.message)
        }
    })

    //Update a post
    .patch('/:postId', async (req, res) => {
        try {
            const updatePost = await Post.updateOne({_id : req.params.postId}, { $set: {title: req.body.title, content: req.body.content, author: req.body.author}});
            res.json(updatePost);
        } catch (error) {
            res.json(error.message);
        }
    })

    //delete a post by id
    .delete('/:postId', async (req, res) => {
        try {
            const deletePost = await Post.remove({_id: req.params.postId});
            res.json(deletePost);
        } catch (error) {
            res.json(error.message);
        }
    })



module.exports = router;