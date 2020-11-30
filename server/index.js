require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send("I am going to live.");
    console.log('No you are not going to live');
    
})


//Create 
// app.get('/posts', (req, res) ={
//     try {
//         const post = req.body;

//         res.json(post);
//     } catch (error) {
//         console.error(error.message);
//     }
// })
//Read

//Update

//Delete

//Connect to db

mongoose.connect(
    process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Server is connected to database."));

app.listen(3000, () => console.log("Server is running on port 3000"));

