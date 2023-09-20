const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Seus Tokens estão online!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log('ligou tudo esssa bomba!!')
  });
}

module.exports = keepAlive;