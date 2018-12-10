import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000");
function subscribeToTimer(cb, task) {
  socket.on("newtask", newtask => cb(null, newtask));
  socket.emit("newtask", task);
}
export { subscribeToTimer };
// import openSocket from "socket.io-client";
// const socket = openSocket("http://localhost:5000");
// function subscribeToTimer(cb) {
//   socket.on("newtask", timestamp => cb(null, timestamp));
//   socket.emit("newtask", 1000);
// }
// export { subscribeToTimer };
