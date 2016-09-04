'use strict';

const express = require('express');
const router = express.Router();
const modelConcours = require('./../models/concours');
const modelQuestions = require('./../models/questions');

router.route('/concours')
.get((req, res)=>{
    
    modelConcours
    .find()
    .populate('questions')
    .exec(function (err, concours) {
        if (err) return handleError(err);
        res.json({ concours });

    });

})
.post((req, res)=>{

    let data = req.body;

    if ( data.titre ){

        var concours = new modelConcours({ titre: data.titre });

        concours.save(function (err) {
            if (err) res.json( { code : err });

            res.json( { code : "ok" });
  
        });
        

    } else {
        res.json( { code : "error" })
    }
   
})
.put((req, res)=>{

    let data = req.body;

    if ( data.titre && data._id ){

        modelConcours.findOne({ _id: data._id }, function (err, concours){
            if (err) res.json( { code : err });
            concours.titre = data.titre;
            concours.save();
            res.json( { code : "ok" });
        });
        

    } else {
        res.json( { code : "error" })
    }
   
})

function handleError(err){
    // console.log
}

module.exports = router;