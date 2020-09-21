const mongoose = require('mongoose');
//const QuestionType = require('./questionType.model');
const {Schema} = mongoose;

//SCHEME OF THE QUESTION COLLECTION
const Answer = new Schema ({
    statement: String,
    grade : Number
})

const questionSchema = new Schema ({
    icfesModule: Number,
    statement: String,
    answers:[Answer], 
    feedback:String,
    questionType: String
});

module.exports = mongoose.model('questions',questionSchema);
