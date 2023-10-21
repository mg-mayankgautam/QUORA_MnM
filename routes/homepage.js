const path = require('path');
const express = require('express');
const homepagecontroller = require('../controller/homepagecontroller.js');
const router = express.Router();



router.get('/',homepagecontroller.loadhomepage);

router.post('/addquestion',homepagecontroller.addquestion);

router.get('/getquestions',homepagecontroller.getquestions);

router.post('/deletequestion',homepagecontroller.deletequestion);

router.get('/getcurrentquestion',homepagecontroller.getcurrentquestion);

router.get('/getcurrentlandingquestion',homepagecontroller.getcurrentlandingquestion);



router.get('/getanswers',homepagecontroller.getallquestions);


router.post('/addanswer',homepagecontroller.addanswer);



module.exports = router;
