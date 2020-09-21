const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE TYPE_QUESTION COLLECTION
const questionTypeSchema = new Schema ({
    idType:Number,
    questionType: String
});

//exports.questionType =questionTypeSchema;
module.exports = mongoose.model('questions_type',questionTypeSchema);