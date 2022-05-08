const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const  participants = require('../models/participants');

exports.createParticipant = async function(req,res){ 
    const  {PId,Pname,Porg,Password} = req.body;
    try{
        const hash = await bcrypt.hash(Password,process.env.salt*1);
        const result = await participants.create({
            PId,
            Pname,
            Porg,
            Password : hash
        })
        return res.status(201).json({
            status : "Success",
            data : {
                result
            }
        })
    }catch(error){
        if(error.code === 11000){
            return res.status(400).json({
                status : "error",
                error : "The Participants already exists"
            })
        }
        return res.status(400).json({
            status : "Error",
            error : {
                error
            }
        })
    }
}
exports.getAllParticipants = async function(req,res){
    try{
        const result = await participants.find();
        console.log(result);
        if(result.length==0){
            return res.status(400).json({
                status : "error",
                error : "No participants found"
            })
        }
        else{
            return res.status(200).json({
                status : "Success",
                count : result.length,
                data : {
                    result
                }
            })
        }
    }catch(error){
        return res.status(400).json({
            status : "error",
            data : {
                error
            }
        })
    }
}
exports.deleteParticipants = async function(req,res){
    const {_id} = req.body;
    try{
        const result = await participants.deleteOne({
            _id
        })
        if(result.deletedCount==0){
            return res.status(400).json({
                status : "error",
                error : "The Participants not found"
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
            error : error
        })
    }
}
exports.updateParticipants = async function(req,res){
    const _id = req.params.id;
    const updateQuery = req.body;
    try{
        const result = await participants.updateOne({
            _id
        },{
            $set : updateQuery
        })
        if(result.modifiedCount==0){
            return res.status(400).json({
                status : "error",
                error : "Participants not found"
                
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