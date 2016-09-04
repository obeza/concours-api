
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var ReponsesSchema = new mongoose.Schema({
    reponse : { type:String, required:true }    
},
{
    timestamps: true
});

module.exports = mongoose.model('Reponses', ReponsesSchema); 