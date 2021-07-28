const express = require('express');
const app = express();
const Product = require('../model/product');
const User = require('../model/users');

//Rutas get
app.get('/', async function(req,res){
    //var product = await Product.find();
  res.render('index')
});

app.get('/login', async function(req,res){
  //var product = await Product.find();
res.render('login')
});

app.get('/register', async function(req,res){
  //var product = await Product.find();
res.render('register')
});

app.get('/aboutUs', async function(req,res){
  //var product = await Product.find();
res.render('aboutUs')
});

app.get('/checkout', async function(req,res){
  //var product = await Product.find();
res.render('checkout')
});

app.get('/product', async function(req,res){
  //var product = await Product.find();
res.render('product')
});

app.post('/addUser',async function(req,res){
  var user = new User(req.body);
  user.password = user.encryptPassword(user.password);
  await user.save();
  console.log(req.body);
  res.redirect("/login");
});



module.exports = app;
