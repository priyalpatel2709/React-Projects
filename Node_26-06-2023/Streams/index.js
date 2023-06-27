const http = require('http')
const fs= require('fs')
const server = http.createServer()

server.on("request",(req,res)=>{
    //normal way
    // fs.readFile("data.txt",'utf-8',(ree,data)=>{
    //     if (!ree) {
    //         res.write(data)
    //         res.end()
    //     }
    // })

    //Streams way
    // const rstrem =fs.createReadStream("data.txt","utf-8")
    // rstrem.on("data",(data)=>{
    //     res.write(data)
    // })
    // rstrem.on("end",()=>{
    //     res.end();
    // })
    // rstrem.on("error",(err)=>{
    //     console.log(err);
    //     res.end(`ja be ${err}`)
    // })

    //Pipes  way
    const rstrem =fs.createReadStream("data.txt","utf-8")
    rstrem.pipe(res)
})

server.listen(8000,(err)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log("8000 is on");
    }
})