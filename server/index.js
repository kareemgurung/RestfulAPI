const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Routes

//Create 
app.get('/posts', (req, res) ={
    try {
        const post = req.body;

        res.json(post);
    } catch (error) {
        console.error(error.message);
    }
})
//Read

//Update

//Delete


app.listen(3000, () => console.log("Server is running on port 3000"));