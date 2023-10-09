//const userDB = require("../models/authenticationDB");
const userDB = require("../models/authenticationDB");


module.exports.signup = (req,res)=>{
    //res.render('addpost');
    console.log('idhar tak aya',req.body);
   const {username,password} = req.body
   //let newuser = new userDB(username,password);
   //newuser.save()

   
   let newuser = new userDB ({username,password});
   newuser.save()
    .then(()=>{
        console.log('user addes success')
    })
    .catch(err =>{console.log(err);});
}