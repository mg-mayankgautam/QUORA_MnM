const path = require('path');
const express = require('express');
const authenticationController = require('../controller/authenticationController.js');
const homepageController = require('../controller/homepagecontroller.js');
const router = express.Router();

router.post('/signup',authenticationController.signup);

router.post('/login',authenticationController.login);

router.get('/logout',authenticationController.logout);

router.get('/getquestions',homepageController.landingQuestions)

module.exports = router;

