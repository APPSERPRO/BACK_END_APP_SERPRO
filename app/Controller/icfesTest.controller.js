require('../database/db.connection');
const IcfesTest = require('../model/icfesTest.model');

const icfesTestController = {};

icfesTestController.getAll = async function(req, res) {
    try{
         const tests = await IcfesTest.find();
         res.json(tests);
 
    }catch{
         console.log(err);
         res.status(500).send({
             message: 'some error ocurred'
         });
    }
};

icfesTestController.post = async function(req,res){

    if(req.body){
        console.log(req.body);
        const icfesTestController = new IcfesTest(req.body);
        icfesTestController.save((err,response)=>{
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

module.exports = icfesTestController;