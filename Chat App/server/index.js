const http = require("http");
const express = require("express");
const cros = require("cors");
const socketIO = require("socket.io");

const app = express();
const port =process.env.PORT;
const users = [{}];

app.use(cros());
app.get("/", (req, res) => {
  res.send("HELL ITS WORKING");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New Connection ");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `welcome to the chat ${users[socket.id]}`
    });
  });
  socket.on('message',({message,id})=>{
   io.emit('sentMessage',{user :users[id],message,id})
  })


  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: ` ${users[socket.id]} has left `
    });
    console.log(`${users[socket.id]} has left`);
  });
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
