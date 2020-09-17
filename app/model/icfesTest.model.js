const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE TEST COLLECTION
const icfesTestSchema = new Schema ({
    module: Number,
    questions: [String]
});

module.exports = mongoose.model('icfes_tests',icfesTestSchema);