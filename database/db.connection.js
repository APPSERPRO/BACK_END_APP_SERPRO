const mongoose = require('mongoose')
const dbconfig = require('./db.config');
//no se logro conectar la configuracion de la base de datos con el uri de la base de datos
const devUrl = `mongodb+srv://${dbconfig.USER}:${dbconfig.PASSWORD}@${dbconfig.HOST}/${dbconfig.DB}`;
const uri = process.env.MONGODB_URI || devUrl;
//const uri = "mongodb://serpro-database:27017/SaberPro";
//mongodb://localhost:27017/SaberPro
const db = mongoose.connection;

//CONFIRMATION OF THE CONNECTION WITH THE DATABASE
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('WE ARE CONNECTED TO', uri);
});

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


