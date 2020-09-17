const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE MODULE COLLECTION
const icfesModuleSchema = new Schema ({
    identificador: Number,
    area_conocimiento: String,
    tipo: String,
    descripcion: String,
    evalua: String
});


module.exports = mongoose.model('icfes_modules',icfesModuleSchema);