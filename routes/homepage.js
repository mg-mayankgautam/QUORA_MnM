const path = require('path');
const express = require('express');
const homepagecontroller = require('../controller/homepagecontroller.js');
const router = express.Router();



router.get('/',homepagecontroller.loadhomepage);

router.post('/addquestion',homepagecontroller.addquestion);

router.get('/getquestions',homepagecontroller.getquestions);

module.exports = router;
