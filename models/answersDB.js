const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const answerSchema = new Schema({
    answeredBy: {type:String},
    questionID: {type:mongoose.Schema.Types.ObjectId},
    answer: {type:String},


//{currentUser,currquestion,answer}
    

});



module.exports =mongoose.model('answersDB',answerSchema);