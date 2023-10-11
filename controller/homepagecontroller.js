
const questionDB = require("../models/questionDB");


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

   // let currentuserDB = await questionDB.findOne({username: currentUser})
   //    .then(()=>{//let newquestion = 
      
   //       console.log(currentuserDB);
   //    })
      
   //console.log(question,currentUser);

   let newquestion = new questionDB ({currentUser,question});
   newquestion.save()
    .then(()=>{
        console.log('question added success');
        res.redirect('/homepage/getquestions');
    })
    .catch(err =>{console.log(err);});


  
}

module.exports.getquestions = async (req, res)=>{


   const currentUser =req.session.user.username;

 
   const allQuestions = await questionDB.find({}).select({ "question": 1, "_id": 0});
 

res.send(allQuestions);


};
