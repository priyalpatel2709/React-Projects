const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const app =express()
app.use(express.json())
app.use(cors())

app.post('/register',(req,resp)=>{
    let users = new User(req.body)
    let result = users.save()
    resp.send(result)
    resp.end()
})

app.listen(5000) 