require('../database/db.connection');
const Modulo = require('../model/icfesModule.model');

//CONTROLLER'S STATEMENT
const ModuloController = {};

ModuloController.get = async function(req,res){
    try{
        const data = await Modulo.find();
        res.json(data);
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }   
}

ModuloController.post = async function(req,res){

    if(!identificador){
        res.status(400).send('Por favor escribe un identificador')
    }else {
        const newModulo = new Modulo({
            identificador: req.body.identificador,
            area_conocimiento: req.body.area_conocimiento,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            evalua: req.body.evalua
        });
        console.log(newModulo);
        await newModulo.save();
        res.send('Ok')
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