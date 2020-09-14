const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://saberProPoli:6sXyfujsZ55c4GF@cluster.75pse.mongodb.net/";
const QuestionController = {};

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