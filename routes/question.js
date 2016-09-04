'use strict';

const express = require('express');
const router = express.Router();

const modelQuestions = require('./../models/questions');
const modelConcours = require('./../models/concours');

router.route('/question')
.get((req, res)=>{
    
    modelQuestions
    .find()
    .exec(function (err, concours) {
        if (err) return handleError(err);
        res.json({ concours });

    });


})
.post((req, res)=>{

    let data = req.body;

    if ( data.question ){

        modelConcours.findById(data._id)
        .exec(function (err, concours) {
            if (err) res.json( { code : "error" });
            
            var question = new modelQuestions({ question: data.question });
            // pour solutionner le probleme de portée
            req.concours = concours;
            question.save(function (err, question) {
                if (err) res.json( { code : err });   
                    req.concours.questions = [...req.concours.questions, question];
                    req.concours.save( (err)=>{
                        res.json( { code : "ok" });
                    })            
  
            });

        });     

    } else {
        res.json( { code : "error" });
    }
   
})
.put((req, res)=>{

    let data = req.body;

    if( data._id ){
        modelQuestions.findById(data._id)
        .exec(function (err, question) {
            if (err) res.json( { code : "error" });
            question.question = data.question;
            question.save();
            res.json( { code : "ok" });
        });
    } else {
        res.json( { code : "error" });
    }
});

router.route('/question/:id')
.delete(( req, res)=>{

    let data = req.body;

    if( data._id){
        modelQuestions.remove({ "_id" : req.params.id })
        .exec(function (err) {
            if (err) res.json( { code : "error" });
            res.json( { code : req.params.id });
        });


    } else {
        res.json( { code : "error" });
    }
    
    

});

module.exports = router;