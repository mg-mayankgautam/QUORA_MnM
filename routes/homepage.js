const path = require('path');
const express = require('express');
const homepagecontroller = require('../controller/homepagecontroller.js');
const questionscontroller = require('../controller/questionscontroller.js');
const authenticationController = require('../controller/authenticationController.js');
const answerscontroller = require('../controller/answerscontroller.js');

const router = express.Router();



router.get('/',homepagecontroller.loadhomepage);



router.post('/addquestion',questionscontroller.addquestion);
router.get('/getquestions',questionscontroller.getquestions);
router.post('/deletequestion',questionscontroller.deletequestion);
router.get('/getcurrentquestion',questionscontroller.getcurrentquestion);

//router.get('/getcurrentlandingquestion',homepagecontroller.getcurrentlandingquestion);



router.get('/getanswers',answerscontroller.getallanswers);
router.post('/addanswer',answerscontroller.addanswer);



router.get('/logout',authenticationController.logout);

module.exports = router;
