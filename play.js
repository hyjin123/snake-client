const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle incoming data and console log it for the play
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  })
  
  return conn;
};

console.log("Connecting ...");
connect();