
const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const userSchema = new Schema({
    username: String,
    password: String

});

module.exports =mongoose.model('Users',userSchema);













// const { getDB } = require("../database/database.js");
// const collectionName = 'users';

// class users {

//     constructor(username,password) {
//         this.username = username;
//         this.password = password;
//     };

//     save(){
//         return getDB().collection(collectionName).insertOne(this);

//     }
// }

// module.exports = users;