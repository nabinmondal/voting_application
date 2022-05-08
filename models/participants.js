const mongoose = require('mongoose');

const participantsSchema  = mongoose.Schema({
    PId : {
        type : String,
        required : true,
        unique : true
    },
    Pname : {
        type : String,
        required : true
    },
    Porg : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})
const pariticipants = mongoose.model('participants',participantsSchema);

module.exports = pariticipants;