const router = require('express').Router();
const question = require('./model/Controller/questionController');

router.get('/question/:modulo', question.get);


module.exports = router;
