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

app.listen(5000,()=>{
    console.log("Server is running on port http://127.0.0.1:5000")
}) 