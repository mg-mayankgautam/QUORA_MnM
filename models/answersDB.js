const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const answerSchema = new Schema({
    currentUser: {type:String},
    question: {type:String},
    answer: {type:String},



    

});



module.exports =mongoose.model('answersDB',answerSchema);