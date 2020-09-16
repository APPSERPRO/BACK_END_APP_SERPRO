const router = require('express').Router();

//CONTROLLER LIST
const question = require('./Controller/questionController');
const modulo = require('./Controller/ModuloController');

//ADDRESSING LIST
router.get('/question/:modulo', question.get);
router.get('/modulos', modulo.get);


module.exports = router;