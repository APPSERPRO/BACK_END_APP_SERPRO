const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEME OF THE QUESTION COLLECTION
const PreguntaSchema = new Schema ({
    modulo: Number,
    enunciado: String,
    imagen:[String],
    opciones:[Number], //arreglo
    respuesta:String,
    justificacion:String,
    tipo_pregunta:Number
});

module.exports = mongoose.model('Preguntas',PreguntaSchema);