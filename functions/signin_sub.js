'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

router.post('/',(req,res)=>{
var user = req.body.user;
var email_user = req.body.email_user;
var email_psw = req.body.email_psw;
if(user == "undefined"){
res.send("")
  
}
  else{
res.send("")
    
  }
  
})

router.get('/',(req,res)=>{

  
})

app.use('/.netlify/functions/signin',router)

module.exports.handler = serverless(app);
