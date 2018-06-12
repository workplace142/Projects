//System library
const express = require('express');
var objId = require('mongoose').Types.ObjectId;

//User library
var userModel = require('../model/user');

const router = express.Router();

router.get('/user',(req,res)=>{
    userModel.find((err,doc)=>{
        if(!err) res.send(doc);
        else res.send({"msg":"Error 1 Gettting all the data"});
    });
});


router.get('/user/:id',(req,res)=>{
   if(!objId.isValid(req.params.id))
     return res.status(400).send({"msg":"Error 3 No User found"});
   userModel.findById(req.params.id,(err,doc)=>{
     if(!err) res.send(doc);
     else res.send({"msg":"Error 4 no user found"});
   });
});

router.post('/user',(req,res)=>{
         var user = new userModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone 
    });
    user.save((err,doc)=>{
        if(!err) res.send(doc);
        else res.send({"msg":"Error 2 cannot get the database"});
    });
    
        //post request
     /*   userModel.create(req.body,(err,doc)=>{
            if(!err) res.send(doc);
            else res.send({"msg":"Error 2 cannot add data to  the database"});
        });*/
});




router.get('/user/:id',(req,res)=>{
    if(!objId.isValid(req.params.id))
      return res.status(400).send({"msg":"Error 3 No User found"});
    userModel.findById(req.params.id,(err,doc)=>{
      if(!err) res.send(doc);
      else res.send({"msg":"Error 4 no user found"});
    });
 });
 
 router.post('/user',(req,res)=>{
          var user = new userModel({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password,
         phone:req.body.phone 
     });
     user.save((err,doc)=>{
         if(!err) res.send(doc);
         else res.send({"msg":"Error 2 cannot get the database"});
     });
     
         //post request
      /*   userModel.create(req.body,(err,doc)=>{
             if(!err) res.send(doc);
             else res.send({"msg":"Error 2 cannot add data to  the database"});
         });*/
 });
 
router.put('/usr/:id',(req,res)=>{
    if(!objId.isValid(req.params.id))
      return res.status(400).send({"msg":"Error 3 invalid User id"});
      var user = new userModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone 
      });
      userModel.findByIdAndUpdate(req.params.id, req.body,
         {new: true},(err,doc)=>{
        if(!err) res.send(doc);
        else res.send({"msg":"Error 5 cannot update data to the database"}); 
      });
    });


    router.put('/usr/:id',(req,res)=>{
        if(!objId.isValid(req.params.id))
          return res.status(400).send({"msg":"Error 3 invalid User id"});
        userModel.findByIdAndRemove(req.params.id,(err,doc)=>{
           if(!err) res.send(doc);
           else res.send({"msg":"Error 6 cannot delete data to the database"}); 
         });
       });
module.exports = router;
