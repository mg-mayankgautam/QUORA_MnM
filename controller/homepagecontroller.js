
const questionDB = require("../models/questionDB");
const answersDB = require("../models/answersDB");



module.exports.loadhomepage =  (req,res)=>{
  // console.log('req.session.body',req.session.user.username);

  // res.render('homepage');

   if(req.session.authorised){
      //res.send(req.session.user.username)
   res.render('homepage',{
      username:req.session.user.username,

   });
}
    else{res.render('loginpage')}
 }

module.exports.addquestion = async (req,res)=>{

  // console.log('question',req.body.question)
   const question = req.body.newquestion;
   //console.log('username',req.session.user.username)
   const currentUser =req.session.user.username;

   

   let newquestion = new questionDB ({currentUser,question});
   newquestion.save()
    .then(()=>{
        console.log('question added success');
        res.redirect('/homepage/getquestions');
    })
    .catch(err =>{console.log(err);});


  
}

module.exports.getquestions = async (req, res)=>{


const currUser =req.session.user.username;

 
   const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
 
//    if(!currUser){res.send({allQuestions});
//   }

   // else(!currUser){
   //    }

      res.send({allQuestions,currUser});
};

module.exports.landingQuestions = async (req, res)=>{

   const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
 
//    if(!currUser){res.send({allQuestions});
//   }

   // else(!currUser){
   //    }

      res.send({allQuestions});
};

module.exports.deletequestion = async (req, res)=>{

   const {quesID} = req.body;
   //console.log(req.body);
   try{
   await questionDB.findByIdAndDelete(quesID);
   res.redirect('/homepage/getquestions');
   }
   catch(err){}


};

module.exports.getcurrentquestion = async (req,res) => {

  // console.log('jei',req.query);

   const {id}=req.query;

   const currquestion = await questionDB.findById(id);

   res.send(currquestion)




};

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

module.exports.getallquestions= async (req, res) =>{

  const currQuestionID = req.query.id;
  console.log(currQuestionID);

  const answers = await answersDB.find({currquestion:currQuestionID })

  res.send(answers);
  console.log(answers);
   
}