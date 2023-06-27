const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'content-type' : 'text /html' })
    fs.readFile('demo.html',(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write('not found')
            
        }else{
            console.log(req.url);
            if(req.url==="/contact"){
                res.write("contact")
            }else if(req.url==="/about"){
                res.write("about")
            }else{
                res.write(data)
            }
            
        }
        res.end()
    })
    // res.write(" hey there")
    
})

server.listen(3000,(err)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log("3000 is on");
    }
})

