const questionDB = require("../models/questionDB");
const answersDB = require("../models/answersDB");


module.exports.getallanswers= async (req, res) =>{

  const currQuestionID = req.query.id;
  console.log(currQuestionID);

  const answers = await answersDB.find({currquestion:currQuestionID })

  res.send(answers);
  //console.log(answers);
   
}

module.exports.addanswer = async (req, res) => {
   
    const {answer}= req.body;
    const currquestion= req.body.currquestionID;
    const currentUser = req.session.user.username;
    //console.log('currquestionID',currquestionID);
    let newanswer = new answersDB ({currentUser,currquestion,answer});
    newanswer.save()
     .then(()=>{
        // console.log('answer added success');
         res.redirect('/homepage/getquestions');
     })
     .catch(err =>{console.log(err);});
    
 }