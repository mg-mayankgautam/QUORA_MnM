//const userDB = require("../models/authenticationDB");
const userDB = require("../models/authenticationDB");


module.exports.signup = (req,res)=>{
    //res.render('addpost');
    console.log('idhar tak aya',req.body);
   const {username,password} = req.body
   
   //let newuser = new userDB(username,password);
   //newuser.save()

   console.log(req.session);

   let newuser = new userDB ({username,password});
   newuser.save()
    .then(()=>{
        console.log('user addes success');
        res.render('loginpage');
    })
    .catch(err =>{console.log(err);});
}