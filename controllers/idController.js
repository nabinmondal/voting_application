const IDS = require('../models/ids');

exports.createID = async function(req,res){
    const {UserId} = req.body;
    try{
        const result = await IDS.create({
            UserId
        })
        console.log(result);
        return res.status(201).json({
            status : "Success",
            data : {
                result
            }
        })
    }catch(error){
        if(error.code ===11000){
            return res.status(400).json({
                status : "error",
                error : "UserId already registered"
            })
        }
        else{
             return res.status(400).json({
                status : "error",
                error : {
                    error
                }
            })
        }
    }
}
exports.getAllIDS = async function(req,res){
    try{
        const result = await IDS.find();
        return res.status(200).json({
            status : "success",
            length : result.length,
            data : {
                result
            }
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            status : "error",
            error : {
                error
            }
        }) 
    }
}
exports.deleteID = async function(req,res){
    const {_id} = req.body;
    try{
        const result = await IDS.deleteOne({_id});
        if(result.deletedCount === 0){
            return res.status(400).json({
                status: "error",
                error : "the userId not found"
            })
        }
        else{
             return res.status(200).json({
                status : "Success",
                data : {
                    result
                }
            })
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "error",
            error : {
                error
            }
        })
    }
}
exports.updateID = async function(req,res){
    const {_id,UserId} = req.body;
    try {
        const result = await IDS.updateOne({
            _id
        },{
            UserId
        });
        if(result.modifiedCount === 0 ){
            return res.status(400).json({
                status : "error",
                error : "UserId not found"
            })
        }
        else{
            return res.json({
                status : "success",
                data : {
                    result
                }
            })
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({
            status : 'error',
            error : {
                    error
            }
        })
    }
}