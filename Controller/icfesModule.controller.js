require('../database/db.connection');
const IcfesModule = require('../model/icfesModule.model');

//CONTROLLER'S STATEMENT
const ModuloController = {};

ModuloController.getAll = async function(req, res) {
    try {
        const data = await IcfesModule.find();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }
}

ModuloController.getModulesWithTests = async function(req, res) {
    try {
        const data = await IcfesModule.find();
        let modulesWithTest = [];
        for (let item of data) {
            let listTests = await IcfesModule.find({ module: item.icfesModule });
            modulesWithTest.push({
                _id: item._id,
                icfesModule: item.icfesModule,
                knowledgeArea: item.knowledgeArea,
                type: item.type,
                description: item.description,
                evaluate: item.evaluate,
                listTest: listTests
            })
        }
        res.json(modulesWithTest);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }
}

ModuloController.post = async function(req, res) {

    if (req.body) {
        console.log(req.body);
        const icfesModules = new IcfesModule(req.body);
        console.log(icfesModules)
        icfesModules.save((err, response) => {
            if (err) {
                response.status(500).send({
                    message: 'error insertando preguntas'
                });
            }
            res.send(response);
        });
    } else {
        res.status(500).send({
            message: 'error, the body is empty'
        });
    }
}

ModuloController.saveAll = async function(req, res) {

    if (req.body) {
        let Listresult = [];
        for (let item of req.body) {
            icfesModules = new IcfesModule(item);
            let result = await icfesModules.save();
            Listresult.push(result);
        }
        res.send(Listresult)


    } else {
        res.status(500).send({
            message: 'error, the body is empty'
        });
    }
}

ModuloController.delete = async function(req, res) {
    try {
        const delModul = await Modulo.remove();
        res.json(delModul);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'some error ocurred'
        });
    }
}

module.exports = ModuloController;