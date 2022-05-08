const mongoose = require('mongoose');
const voterSchema = mongoose.Schema({
    UserId : {
        type : String,
        required : true,
        unique : true
    },
    votingRight : {
        type : Boolean,
        default : false
    },
    Password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
});
const voters = mongoose.model('voterSchema',voterSchema);
module.exports = voters;