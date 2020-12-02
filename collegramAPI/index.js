const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


require('dotenv').config();

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB connection success!");
})

//USER ROUTES
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

//POST ROUTES
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);





app.get('/', (req,res) =>{
    res.send('You have made it to the API');
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



