const net = require("net");
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle incoming data and console log it for the play
  conn.on('data', (data) => {
    console.log(data);
  })

  //if connected successfully, console log a string and write the name
  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server!");
    conn.write(`Name: ${name}`);
  })
  // 
  return conn;
};

module.exports = {connect};