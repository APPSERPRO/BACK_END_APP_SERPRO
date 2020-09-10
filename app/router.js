const router = require('express').Router();
const question = require('./model/Controller/questionController');

router.get('/question', question.get);


module.exports = router;