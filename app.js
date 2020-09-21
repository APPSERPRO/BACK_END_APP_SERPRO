//DECLARATIONS
const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./router');
require('./database/db.connection');


//middlewears
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MAIN ROUTE
app.use('/', router);


app.listen(8082, () => {
    console.log("SERVER IS LISTEN ON PORT 8082")
});