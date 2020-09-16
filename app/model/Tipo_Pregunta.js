const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE TYPE_QUESTION COLLECTION
const Tipo_PreguntaSchema = new Schema ({
    identificador:Number,
    tipo_pregunta: String
});

module.exports = mongoose.model('Tipo_Preguntas',Tipo_PreguntaSchema);