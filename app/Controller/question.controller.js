require('../database/db.connection');
const { response } = require('express');
const mongoose = require('mongoose');
const Question = require('../model/question.model');


//CONTROLLER'S STATEMENT
const QuestionController = {};

//FIND AND RETURN ALL QUESTIONS
QuestionController.getAll = async function(req, res) {
   try{
        const preguntas = await Question.find();
        res.json(preguntas);

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
         const preguntas = await Question.find({"icfesModule":icfesModule});
         res.json(preguntas);
 
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
   
}

module.exports = QuestionController; 