const router = require('express').Router();
const question = require('./model/Controller/QuestionController');
const modulo = require('./model/Controller/ModuloController');

router.get('/question/:modulo', question.findQuestionByModule);
router.post('/question', question.saveQuestion);
router.get('/modulos', modulo.get);


module.exports = router;