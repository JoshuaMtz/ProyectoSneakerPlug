const express = require('express');
const app = express();
const Product = require('../model/product');
const User = require('../model/users');
const OrderProduct = require('../model/product')
const verify = require("../middleware/verifyAccess");
var jwt = require("jsonwebtoken");

products = [
  {
    name: "Air Max 90",
    description: "Par Nuevo Air Max 90 Triple Black",
    size: 9.5,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/eafdaab2-a68a-48c6-8a26-616f255ecab9/calzado-air-max-90-se-G5q6XL.png",
    price: 3400,
    user: 12563,
    datePublished: Date.now(),
    dateSelled: Date.now()
  },
  {
    name: "Air Max 95",
    description: "Par Nuevo Air Max 90 Triple Black",
    size: 9.5,
    image: "https://media.revistagq.com/photos/609cfa6ba845decdd92aed19/master/w_1600%2Cc_limit/nike-air-max-95-smoke-1.jpeg",
    price: 3400,
    user: 12563,
    datePublished: Date.now(),
    dateSelled: Date.now()
  },
  {
    name: "Air Max 97",
    description: "Par Nuevo Air Max 90 Triple Black",
    size: 9.5,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7ad96490-1e18-4ceb-bc5b-349ba3711164/calzado-air-max-97-se-9ZlcBC.png",
    price: 3400,
    user: 12563,
    datePublished: Date.now(),
    dateSelled: Date.now()
  }
];

//Rutas get
app.get('/', async function(req,res){
    //var product = await Product.find();
  res.render('index')
});

app.get('/sell_product',verify, async function(req,res){
  //var product = await Product.find();
res.render('sell_Product')
});

app.get('/login', async function(req,res){
  //var product = await Product.find();
res.render('login')
});

app.post('/login', async function(req,res){
  var user_id = req.body.user_id;
  var password = req.body.password;
  //console.log(req.body)
  
  /*
    var {email,password} = req.body
  */
  var user = await User.findOne({user_id: user_id});
  //Si el usuario no existe
  if(!user){
    return res.status(404).send("El usuario no existe");
  }
  //Si existe, validad la constraseña
  else{
    var valid = await user.validatePassword(password);
    // si la contraseña es valida, crear un token
    if(valid)
    {
      var token = jwt.sign({id:user.user_id,permission:true},"abc1234",{expiresIn: "1h"});
      console.log(token);
      res.cookie("token",token,{httpOnly: true})
      res.redirect("/")
    }
    else{
      console.log("Password is not valid")
      res.redirect("/login")
    }
  }
  //console.log(user)
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
  console.log(products);
  res.render('product', {products})
});

app.post('/addUser',async function(req,res){
  var user = new User(req.body);
  user.password = user.encryptPassword(user.password);
  await user.save();
  console.log(req.body);
  res.redirect("/login");
});

//RUTA CHECKOUT GET
app.get('/checkout/:id', verify, async function (req, res,) {
  var id = req.params.id;
  var producto = await Product.findById(id);
  res.render('checkout',{producto})
});

app.get('/logoff',  async (req,res) =>{

  res.clearCookie("token");
  res.redirect("/");
})

module.exports = app;
