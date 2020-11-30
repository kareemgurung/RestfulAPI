require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoute = require('./routes/posts.js');

const app = express();


//Middleware
app.use(cors());//let us use our api on other domain
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/posts', postsRoute);

//Connection to mongodb using mongoose
mongoose.connect(
    process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Server is connected to database."));

app.listen(3000, () => console.log("Server is running on port 3000"));

