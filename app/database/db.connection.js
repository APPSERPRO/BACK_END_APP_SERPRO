const mongoose = require('mongoose')
const dbconfig = require('./db.config');
//no se logro conectar la configuracion de la base de datos con el uri de la base de datos
const uri = "mongodb+srv://saberProPoli:6sXyfujsZ55c4GF@cluster.75pse.mongodb.net/SaberPro";
const db = mongoose.connection;

//CONFIRMATION OF THE CONNECTION WITH THE DATABASE
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('WE ARE CONNECTED');
});

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


