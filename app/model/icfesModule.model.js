const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE MODULE COLLECTION
const icfesModuleSchema = new Schema ({
    icfesModule: Number,
    knowledgeArea: String,
    type: String,
    description: String,
    evaluate: String
});


module.exports = mongoose.model('icfes_modules',icfesModuleSchema);