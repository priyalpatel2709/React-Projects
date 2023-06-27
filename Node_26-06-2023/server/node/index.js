const http = require("http")
const fs = require("fs")


const data=fs.readFileSync('./data.json','utf-8')
let obj= JSON.parse(data)
// console.log(data);

const server = http.createServer((req,res)=>{
    res.writeHead(200, { 'content-type' : 'text /html' })
    // const data= fs.readFileSync("demo.json",'utf-8')
    // let obj=JSON.parse(data)
    console.log(obj);
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
            }
            else if(req.url==="/title"){
                res.write(obj[0].title)
            }
            else{
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

