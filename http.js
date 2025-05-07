const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("about salom");
    res.end();
  }
});

server.listen(4500, () => {
  console.log("server started");
});
