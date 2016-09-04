
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var QuestionsSchema = new mongoose.Schema({
    question : { type:String, required:true },
    reponses : [{ type: Schema.Types.ObjectId, ref: 'Reponses' }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Questions', QuestionsSchema); 