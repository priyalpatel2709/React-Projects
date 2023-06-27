const EventEmitter = require('events')
const event = new EventEmitter()

event.on("demo",()=>{
    console.log("1 st");
})
event.on("demo",()=>{
    console.log("2 nd");
})
event.on("demo",()=>{
    console.log("3 rd");
})
event.emit("demo")


event.on('cal-c',(a,b,c)=>{
    console.log(`${a} ${b} ${c}`);
})

event.emit("cal-c",5,'-',3)