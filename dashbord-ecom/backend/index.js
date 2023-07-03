const express = require('express')
require('./db/config')
const User = require('./db/User')
const bodyParser = require('body-parser');
const app =express()
app.use(express.json())


app.post('/register',(req,resp)=>{
    let users = new User(req.body)
    let result = users.save()
    resp.send(result)
    // resp.end()
})

app.listen(5000) 