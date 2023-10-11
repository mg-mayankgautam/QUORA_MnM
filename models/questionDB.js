const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const questionSchema = new Schema({
    currentUser: {type:String},
    question: {type:String},
    

});



module.exports =mongoose.model('questionsDB',questionSchema);