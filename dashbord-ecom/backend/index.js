const express = require('express')
require('./db/config')
const user = require('./db/User')
const app =express()

app.get('/',(req,res)=>{
    res.send('req')
})
app.use(express.json())
// app.post('/register',(req,resp)=>{
//     // resp.send('api working..')
//     resp.send(req.body)
// })

app.listen(5000) 