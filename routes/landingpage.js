

const path = require('path');
const express = require('express');
const authenticationController = require('../controller/authenticationController.js');

const questionsController = require('../controller/questionscontroller.js');
const answerscontroller = require('../controller/answerscontroller.js');
const router = express.Router();


router.post('/signup',authenticationController.signup);

router.post('/login',authenticationController.login);

router.get('/getquestions',questionsController.getlandingQuestions);///landingpage/getquestions

router.get('/getcurrentlandingquestion',questionsController.getcurrentquestion);

router.get('/getanswers',answerscontroller.getallanswers);


module.exports = router;
