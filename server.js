const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html charset=utf-8" });

    res.end(`
        <h2>Send email</h2>
        <form method="POST" action="/">
          <input name="name" />
          <button type="submit">Send</button>
        </form>
    `);
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
