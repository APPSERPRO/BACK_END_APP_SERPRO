const router = require('express').Router();

//CONTROLLER LIST
const question = require('./Controller/question.controller');
const icfesModule = require('./Controller/icfesModule.controller');
const icfesTest = require('./Controller/icfesTest.controller');

//ADDRESSING LIST

//QUESTION 
router.get('/question', question.getAll);
router.get('/question/:icfesModule', question.getByIcfesModul);
router.post('/question', question.post);

//MODULE
router.get('/module', icfesModule.getAll);
router.post('/module', icfesModule.post);

//ICFES TEST
router.get('/icfesTest',icfesTest.getAll);
router.post('/icfesTest', icfesTest.post);

module.exports = router;