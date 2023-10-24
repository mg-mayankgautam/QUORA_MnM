const questionDB = require("../models/questionDB");
const answersDB = require("../models/answersDB");


module.exports.getlandingQuestions = async (req, res)=>{

    const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
  
 //    if(!currUser){res.send({allQuestions});
 //   }
 
    // else(!currUser){
    //    }
      //  console.log({allQuestions});
       res.send({allQuestions});
 };



module.exports.getcurrentquestion = async (req,res) => {

  // console.log('jei',req.query);

   const {id}=req.query;

   const currquestion = await questionDB.findById(id);

   res.send(currquestion)




};

module.exports.getquestions = async (req, res)=>{


    const currUser =req.session.user.username;
    
     
       const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
     
    //    if(!currUser){res.send({allQuestions});
    //   }
    
       // else(!currUser){
       //    }
    
          res.send({allQuestions,currUser});
    };

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

module.exports.deletequestion = async (req, res)=>{

        const {quesID} = req.body;
        //console.log(req.body);
        try{
        await questionDB.findByIdAndDelete(quesID);
        res.redirect('/homepage/getquestions');
        }
        catch(err){}
     
     
     };