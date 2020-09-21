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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER IS LISTEN ON PORT:" , PORT);
});