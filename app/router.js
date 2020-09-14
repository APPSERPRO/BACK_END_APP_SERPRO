const router = require('express').Router();
const question = require('./model/Controller/QuestionController');
const modulo = require('./model/Controller/ModuloController');

router.get('/question/:modulo', question.get);
router.get('/modulos', modulo.get);


module.exports = router;