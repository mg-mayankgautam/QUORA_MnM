//const userDB = require("../models/authenticationDB");
const userDB = require("../models/authenticationDB");


module.exports.signup = async (req,res)=>{
   
   
   const {username,password} = req.body
   
   let user = await userDB.findOne({username});

   if (user){return res.render('loginpage')}
   //console.log(req.session);

   let newuser = new userDB ({username,password});
   newuser.save()
    .then(()=>{
        console.log('user addes success');
        res.render('loginpage');
    })
    .catch(err =>{console.log(err);});
}

module.exports.login = async (req, res) => {
    console.log('idhar tak aya',req.body);
   const {username,password} = req.body

   let user = await userDB.findOne({username});

   if(!user){res.render('loginpage');}

   let verified = await userDB.findOne({
    username: username,
    password: password,
    
});

if(!verified){res.render('loginpage');}

else if(verified) {res.render('homepage');}

   // console.log(verified);

   //let passwordfromDB = await userDB.findOne({user}).then.get({password});
     
    
};