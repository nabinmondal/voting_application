const mongoose = require('mongoose');
const idSchema = mongoose.Schema({
    UserId : {
        type : String,
        required : true,
        unique : true
    },
    inUse : {
        type :Boolean,
        default : false
    }
});
const IDS = mongoose.model('IDS',idSchema);
module.exports = IDS;
