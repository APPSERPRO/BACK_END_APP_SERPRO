const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Questions = require('../model/question.model')
const {Schema} = mongoose;

//SCHEME OF THE TEST COLLECTION
const icfesTestSchema = new Schema ({
    module: Number,
    questions: [{type: ObjectId, ref: Questions}]
});

module.exports = mongoose.model('icfes_tests',icfesTestSchema);