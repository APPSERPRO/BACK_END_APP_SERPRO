const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE TEST COLLECTION
const TestSchema = new Schema ({
    //FALTANTE
});

module.exports = mongoose.model('Tests',TestSchema);