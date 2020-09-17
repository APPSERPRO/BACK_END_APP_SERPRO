const router = require('express').Router();

//CONTROLLER LIST
const question = require('./Controller/question.controller');
const modulo = require('./Controller/icfesModule.controller');

//ADDRESSING LIST

//QUESTION 
router.get('/question', question.getAll);
router.get('/question/:icfesModule', question.getByIcfesModul);
router.post('/question', question.post);


router.get('/modulos', modulo.get);


module.exports = router;