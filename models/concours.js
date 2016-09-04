
var mongoose = require('mongoose')
, Schema = mongoose.Schema;


var ConcoursSchema = new mongoose.Schema({
    titre : { type:String, required:true },
    questions : [{ type: Schema.Types.ObjectId, ref: 'Questions' }],
    participants : [{ type: Schema.Types.ObjectId, ref: 'Participants'}],
    enligne: { type:Boolean, default:false }
},
{
        timestamps: true
});

module.exports = mongoose.model('Concours', ConcoursSchema); 