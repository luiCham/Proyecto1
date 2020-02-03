require('../models/sensors1');
require('../models/credentials');

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const credentials=mongoose.model('credentials');
const sensors = mongoose.model('sensors');

const auth=require('http-auth');
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});


router.post('/registration', 
[
  body('email')
    .isEmail()
    .withMessage('missing valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('missing a valid password (min 8 characters)'),
  body('name')
    .isLength({ min: 1})
    .withMessage('missing name')
],
(req, res) =>{
  const errors = validationResult(req);
    if(errors.isEmpty()){
      var registration=new credentials(req.body);
      registration.save()
        .then(()=>{
          res.send('Registered');
        })
        .catch(()=>{
          res.send('registration error');
        });
    }else{
      res.send('Baad credentials');
    }
  }
);

router.post('/login',
  [
    body('email')
        .isEmail()
        .withMessage('Please enter a name'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Please enter an email'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      credentials.findOne(req.body, function(err, isMatch) {
        if(isMatch==null) {
          res.send('Wrong credentials');
        } else {
          res.send('Logged in');
        }
      })
    } else {
        res.send('You are wrong-writting something');
    }
  }
);

router.post('/recieving',
[
  body('temp').isLength({min : 1}),
  body('hum').isLength({min : 1}),
  body('email').isLength({min : 1}),
  body('name').isLength({min : 1}),
], (req,res)=>{
  var errors=validationResult(req);
  if(errors.isEmpty()){
    var saving = new sensors(req.body);
  saving.save()
    .then(()=>{
      res.send("Saved");
    })
    .catch(()=>{
      res.send("Error");
    });
  }
});
  

router.post('/data',(req,res)=>{
  sensors.find({"email":req.body.email}, function(err, data){
    if(err){
      res.send("Error");
    }else{
      res.send(data);
    }
  });
});

module.exports=router;