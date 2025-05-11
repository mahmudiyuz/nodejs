const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html charset=utf-8" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.end(data);
        }
      );
    }
  } else if (req.method === "POST") {
    const body = [];
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      res.end(`Email added: ${body.toString().split("=")[1]}`);
    });
  }
});

server.listen(4500, () => {
  console.log("server started");
});
