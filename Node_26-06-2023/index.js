// const { error } = require("console")
const fs = require("fs");
const os = require("os");

// fs.writeFileSync("demo.txt","h r u ?")

// fs.appendFileSync("demo.txt", " fine thank u")

// const data = fs.readFileSync("demo.txt").toString()

// console.log(data);

// fs.renameSync("demo.txt","nodeDemo.txt")

//  fs.mkdirSync("pen")

// fs.writeFileSync('./pen/demo.txt',"hi")

// fs.appendFileSync('./pen/demo.txt', " fine")

// const data=fs.readFileSync('./pen/demo.txt').toString()
// console.log(data);

// fs.unlinkSync("pen")

// fs.rmdirSync("./pen")

// fs.writeFile("demo.txt", "hii h r u?", (err) => {
//   console.log(err);
// });


// fs.appendFile("demo.txt"," nice", (err)=>{
//     console.log('done :)');
// })

// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(!err){
//         console.log(data);
//     }else{
//         throw err
//     }
// })

// fs.mkdir('demo',(err)=>{console.log(err);})
// fs.writeFile("./demo/demo.txt","nice to meet yuo",(err)=>{console.log(err);})

// fs.appendFile('./demo/demo.txt',' good to see you',(err)=>{console.log(err);})

// fs.rename('./demo/demo.txt','./demo/demo1.txt',(err)=>{console.log(err);})

// fs.unlink('demo.txt',(err)=>{console.log(err)})
// fs.unlink('nodeDemo.txt',(err)=>{console.log(err)})

// fs.rmdir('demo.txt',(err)=>console.log(err))

console.log(`${os.freemem() /1024 /1024 /1024}`);
console.log(os.hostname());