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

  
})

router.get('/',(req,res)=>{

  
})

app.use('/.netlify/functions/payment_requested',router)

module.exports.handler = serverless(app);
