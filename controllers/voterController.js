const voters = require('../models/voters');
const bcrypt = require('bcryptjs');
exports.createVoter = async function(req,res){
    const {name,UserId,Password} = req.body;
    try{
        const hash = await bcrypt.hash(Password,process.env.salt*1);
        const result = await voters.create({
            UserId,
            name,
            Password : hash
        })
        return res.status(200).json({
            status : "Success",
            data : {
                result
            }
        })
    }catch(error){
        if(error.code == 11000){
            return res.status(400).json({
                status : "error",
                error : "The userId already exists"
            })
        }
        else{
            return res.status(400).json({
                status : "error",
                error : error
            })
        }
    }
}
exports.getAllVoters = async function(req,res){
    try{
        const result = await voters.find();
        if(result.length == 0){
            return res.status(400).json({
                status : "error",
                error : "No voters found"
            })
        }
        else{
            return res.status(200).json({
                status : "success",
                result : result.length,
                data : {
                    result
                }
            })
        }
    }catch(error){
        return res.status(400).json({
            status : "error",
            error: { 
                error
            }
        })
    }
}
exports.deleteVoter = async function(req,res){
    const {_id} = req.body;
    try{
        const result = await  voters.deleteOne({_id});
        if(result.deletedCount == 0){
            return res.status(400).json({
                status : "error",
                error : "The voter not found"
            })
        }
        else{
            return res.status(200).json({
                status : "success",
                data : {
                    result
                }
            })
        }
    }catch(error){
        return res.status(400).json({
            status : "error",
            error : {
                error
            }
        })
    }
}
exports.updateVoter = async function(req,res){
    const _id = req.params.id;
    const updateQuery = req.body;
    try{
        const result = await voters.updateOne({_id},{
            $set : updateQuery
        })
        if(result.modifiedCount == 0){
            return res.status(400).json({
                status : "error",
                error : "the voter not found"
            })
        }
        else{
            return res.status(200).json({
                status : "success",
                data : {
                    result
                }
            })
        }
    }catch(error){
        return res.status(400).json({
            status : "error",
            error : {
                error
            }
        })
    }
}