const router = require('express').Router();

//CONTROLLER LIST
const question = require('./Controller/question.controller');
const icfesModule = require('./Controller/icfesModule.controller');

//ADDRESSING LIST

//QUESTION 
router.get('/question', question.getAll);
router.get('/question/:icfesModule', question.getByIcfesModul);
router.post('/question', question.post);

//MODULE
router.get('/module', icfesModule.get);
router.post('/module', icfesModule.post);


module.exports = router;