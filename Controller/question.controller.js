require('../database/db.connection');
const { response } = require('express');
const mongoose = require('mongoose');
const Question = require('../model/question.model');


//CONTROLLER'S STATEMENT
const QuestionController = {};

//FIND AND RETURN ALL QUESTIONS
QuestionController.getAll = async function(req, res) {
   try{
        const questions = await Question.find();
        res.json(questions);

   }catch{
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
   }
};

//FIND AND RETURN ALL THE QUESTIONS OF A MODULE
QuestionController.getByIcfesModul = async function(req, res) {
    const icfesModule = req.params.icfesModule;

    try{
         const questions = await Question.find({"icfesModule":icfesModule});
         res.json(questions);
 
    }catch{
         console.log(err);
         res.status(500).send({
             message: 'some error ocurred'
         });
    }
 };

//CREATE A NEW QUESTION
QuestionController.post = async function(req,res){
    if(req.body){
        console.log(req.body);
        const question = new Question(req.body);
        question.save((err,response)=>{
            if(err){
                response.status(500).send({
                    message:'error insertando preguntas'
                });
            }
            res.send(response);
        });
    }else {
        res.status(500).send({
            message:'error, the body is empty'
        });
    }  
};

//SEARCH AND RETURN RANDOM QUESTIONS IN A DEFINED QUANTITY AND MODULE
QuestionController.getRandomByModule = async function(req, res) {
    const icfesModule = parseInt(req.params.icfesModule);
    const numberQuestions = parseInt(req.params.amount);

    try{
         const questions = await Question.aggregate(
             [
                {
                    $match: {icfesModule: icfesModule}
                }, 
                {
                   $sample: {size: numberQuestions}
                }
             ]
         );
         res.json(questions);
 
    }catch(err){
         console.log(err);
         res.status(500).send({
             message: 'some error ocurred'
         });
    }
 };

module.exports = QuestionController; 