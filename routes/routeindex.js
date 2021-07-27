const express = require('express');
const app = express();
const Product = require('../model/product');
const Users = require('../model/users');

app.get('/', async function(req,res){
    //var product = await Product.find();
  res.render('index')
});

module.exports = app;
