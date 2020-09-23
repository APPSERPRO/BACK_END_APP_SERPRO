const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
//const QuestionType = require('./questionType.model');
const IcfesModule = require('../model/icfesModule.model')
const { Schema } = mongoose;

//SCHEME OF THE QUESTION COLLECTION
const Answer = new Schema ({
    statement: String,
    grade : Number
})

const questionSchema = new Schema ({
    
    statement: String,
    icfesModuleId: {type:ObjectId, ref: IcfesModule},
    answers:[Answer], 
    feedback:String,
    questionType: String
});

module.exports = mongoose.model('questions',questionSchema);
