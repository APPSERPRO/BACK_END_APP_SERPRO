const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://saberProPoli:6sXyfujsZ55c4GF@cluster.75pse.mongodb.net/";
const QuestionController = {};

QuestionController.findQuestionByModule = function(req, res) {
    let modulo = req.params.modulo;
    MongoClient.connect(uri, (err, db) => {
        if (err) throw err;
        const dbo = db.db("SaberPro");
        dbo.collection("Pregunta").find({ Modulo: Number(modulo) }).toArray().then(result => {
            res.json(result);
            return;
        }, err => {
            console.log("Ha ocurrido un error")
            throw err;
        });
    });

}
QuestionController.saveQuestion = function(req, res) {
    let module = req.body.modulo;
    let question = req.body.question;
    let options = req.body.options;
    let observation = req.body.observation;
    let answer = req.body.answer;
    const questionObject = {
        modulo: module, //number
        pregunta: question, //String HTML
        opciones: options, // [{"string", boolenao}]
        retroalimentacion: observation
    };
    res.json({ 'Resultado': "Pregunta Guardada con Exito" })
        /*MongoClient.connect(uri, (err, db) => {
            if (err) throw err;
            const dbo = db.db("SaberPro");
            dbo.collection("Pregunta").insertOne(questionObject).then(result => {
                if (result.insertedCount == 1) {
                    res.json({ 'Resultado': "Pregunta Guardada con Exito" })
                    return;
                } else {
                    res.json({ 'Resultado': "Error Guardando la Pregunta" })
                    return;
                }
            }, err => {
                console.log("Ha ocurrido un error")
                throw err;
            }).catch(err => {
                console.log(err)
            });
        });*/
}

module.exports = QuestionController;