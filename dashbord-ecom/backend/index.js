const express = require("express");
const cors = require("cors");
const Jwt = require('jsonwebtoken')
require("./db/config");
const User = require("./db/User");
const Product = require('./db/Product')
const app = express();
app.use(express.json());
app.use(cors());

const JwtKey = 'e-comm'

app.post("/register", async (req, resp) => {
  // console.log(req.body);
  let user = new User(req.body);
  
  if(user){
    Jwt.sign({user},JwtKey,async (err,token)=>{
        if(err){
          resp.send({result : `some thing went wrong  ${err}`})
        }else{
          let result = await user.save();
          result = result.toObject()
          delete result.password
          resp.send({user : result,auth: token});
        }
    })
  }

  
});

app.post("/login", async (req, resp) => {
  // resp.send(req.body)
  //   console.log(req.body);

  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({user},JwtKey,(err,token)=>{
        if(err){
          resp.send({result: `some thing went wrong  ${err}`});
        }else{
          resp.send({user,auth: token})
        }
      })
      
    } else {
      resp.send({ result: "user not found" });
    }
  } else {
    resp.send({ result: "user not found" });
  }
});

app.post('/add-product', async (req,resp)=>{
  const product=new Product(req.body)
  let result= await product.save()
  resp.send(result)

})

app.get('/products',async (req,resp)=>{
  let products = await Product.find()
  if(products.length > 0) {
    resp.send(products)
  }else {
    resp.send({ result :"data not found"})
  }
})

app.delete('/products/:id', async (req,resp)=>{
  // resp.send(req.params.id)
  const result = await Product.deleteOne({ _id : req.params.id})
  resp.send(result)
})

app.get('/products/:id', async (req,resp)=>{
  try {
    let result = await Product.findOne({ _id: req.params.id });

    if (result) {
      resp.send(result);
    } else {
      resp.status(404).send({ error: 'Record not found' });
    }
  } catch (error) {
    resp.status(500).send({ error: 'Internal Server Error' });
  }
})

app.put('/products/:id', async (req,resp)=>{
  let result = await Product.updateOne({
    _id : req.params.id
  },
  {
    $set: req.body
  })
  resp.send(result)
})

app.get('/search/:key',async (req,resp)=>{
  let result = await Product.find({
    "$or" : [
      { name : {$regex : req.params.key} },
      { category : {$regex : req.params.key} },
      { company : {$regex : req.params.key} },
    ]
  })
  resp.send(result) 
})

app.listen(5000, () => {
  console.log("Server is running on port http://127.0.0.1:5000");
});
