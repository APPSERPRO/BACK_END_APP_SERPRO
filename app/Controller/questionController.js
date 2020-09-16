require('../database/db.connection');

//CONTROLLER'S STATEMENT
const QuestionController = {};
//SIN CAMBIOS, AUN NO ESTA EN EL FORMATO DE MONGOOSE
QuestionController.get = function(req, res) {
    let modulo = req.params.modulo;
    MongoClient.connect(uri, (err, db) => {
        if (err) throw err;
        const dbo = db.db("SaberPro");
        const data = dbo.collection("Pregunta").find({ Modulo: modulo }).toArray().then(result => {
            res.json(result);
            return;
        }, err => {
            console.log("Ha ocurrido un error")
            throw err;
        });
    });

}

module.exports = QuestionController; 