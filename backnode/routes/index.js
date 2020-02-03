require('../models/sensors1');

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const sensors = mongoose.model('sensors');

const auth=require('http-auth');
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});


router.get('/', (req,res)=>{
  res.redirect('/recibiendo');
});

router.get('/recibiendo', (req,res)=>{
  res.send("Manda loco");
});

router.post('/recibiendo',
[
  body('temp').isLength({min : 1}),
  body('hum').isLength({min : 1})
], (req,res)=>{
  var saving = new sensors(req.body);
  saving.save()
    .then(()=>{
      res.send("Saved");
    })
    .catch(()=>{
      res.send("Error");
    });
});


module.exports=router;