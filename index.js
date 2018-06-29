const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./configuration/database');


mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Couldn\'t connect to databas', err);
    }
    else {
        console.log("Connected to database");
    }
});
const app = new express();
app.use(express.static(__dirname + '/Blog/dist/'));


app.get('**', (req, res) => {

    res.sendFile(path.join(__dirname, '/Blog/dist/index.html'));
});


// Configure Middlewares


// View Engine

// Configure Routes

app.listen(4000, () => console.log("Listening on Port 4000"));