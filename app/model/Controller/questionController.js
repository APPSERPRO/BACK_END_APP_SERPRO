const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://saberProPoli:6sXyfujsZ55c4GF@cluster.75pse.mongodb.net/";
const questionController = {};

questionController.get = function(req, res) {
    MongoClient.connect(uri, (err, db) => {
        if (err) throw err;
        const dbo = db.db("SaberPro");
        const data = dbo.collection("Pregunta").find({ Modulo: 1 }).toArray().then(result => {
            res.json(result);
            return;
        }, err => {
            console.log("Ha ocurrido un error")
            throw err;
        });
    });

}

module.exports = questionController;