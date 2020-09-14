const cors = require('cors');
const express = require('express');
const router = require('./router');
const app = new express();

//middlewears
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/', router);

app.listen(8082, () => {
    console.log("SERVER IS LISTEN ON PORT 8082")
});