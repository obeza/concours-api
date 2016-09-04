
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var ParticipantsSchema = new mongoose.Schema({
    prenom : { type:String, required:true },
    nom : { type:String, required:true },
    email : { type:String, required:true },
    tel : { type:String, required:true }
},
{
    timestamps: true
});

module.exports = mongoose.model('Participants', ParticipantsSchema); 