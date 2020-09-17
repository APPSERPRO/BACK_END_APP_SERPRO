const router = require('express').Router();

//CONTROLLER LIST
const question = require('./Controller/question.controller');
const modulo = require('./Controller/icfesModule.controller');

//ADDRESSING LIST
router.get('/question', question.get);
router.post('/question/add', question.post);
router.get('/modulos', modulo.get);


module.exports = router;