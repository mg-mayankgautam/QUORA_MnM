const path = require('path');
const express = require('express');
const app= express();
const PORT = 4443;
const hbs = require('hbs');
const bodyparser = require('body-parser');//use with axios 
const mongoose = require('mongoose');

const { mongoConnect } = require('./database/database.js');

app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));





const authenticationRouter = require('./routes/authentication.js');
//hbs.registerPartials(__dirname + '/views/partials');
app.use('/authentication', authenticationRouter);









	
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => {console.error(err);});

// app.listen(PORT, () => {
//                 console.log(`http://localhost:` + PORT);
//              })

