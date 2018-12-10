const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

app.use(cors());

io.on("connection", function(socket) {
  socket.on("newtask", function(data) {
    console.log(data);

    socket.broadcast.emit("newtask", "hello friends!");
  });
});
server.listen(5000);
