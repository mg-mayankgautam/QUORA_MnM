const path = require('path');
const express = require('express');
const app= express();
const PORT = 4700;
const hbs = require('hbs');
const bodyparser = require('body-parser');//use with axios 
const mongoose = require('mongoose');

const { mongoConnect } = require('./database/database.js');
const session = require('express-session')
const MongoDBsession = require('connect-mongodb-session')(session);


// app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', express.static(path.join(__dirname, 'public')));

const store = new MongoDBsession({
    uri:'mongodb://127.0.0.1:27017/quoraMnM',
    collection: "mysessions"
});

app.use(
    session({
        secret:'key for cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);



const homepageRouter = require('./routes/homepage.js');

app.use('/homepage', homepageRouter);

const authenticationRouter = require('./routes/authentication.js');

//hbs.registerPartials(__dirname + '/views/partials');
app.use('/authentication', authenticationRouter);
//netstat -ano | findstr :5000
//taskkill /F /T /PID 12345








	
mongoose.connect('mongodb://127.0.0.1:27017/quoraMnM',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => {console.error(err);});

// app.listen(PORT, () => {
//                 console.log(`http://localhost:` + PORT);
//              })

