const path = require('path');
const express = require('express');
const authenticationController = require('../controller/authenticationController.js');
const router = express.Router();

router.post('/signup',authenticationController.signup);

router.post('/login',authenticationController.login);


module.exports = router;
