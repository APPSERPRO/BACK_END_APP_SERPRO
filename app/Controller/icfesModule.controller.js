require('../database/db.connection');
const IcfesModule = require('../model/icfesModule.model');

//CONTROLLER'S STATEMENT
const ModuloController = {};

ModuloController.get = async function(req,res){
    try{
        const data = await IcfesModule.find();
        res.json(data);
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }   
}

ModuloController.post = async function(req,res){

    if(req.body){
        console.log(req.body);
        const icfesModules = new IcfesModule(req.body);
        icfesModules.save((err,response)=>{
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

ModuloController.delete = async function(req,res){
    try{
        const delModul = await Modulo.remove();
        res.json(delModul);
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }
}

module.exports = ModuloController; 