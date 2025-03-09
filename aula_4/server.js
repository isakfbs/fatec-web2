import http from "node:http";
import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const REQUI = true;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  const parseUrl = url.parse(req.url);
  let filePath = path.join(process.cwd(), "public", parseUrl.pathname);

  if (parseUrl.pathname === "/") {
    filePath = path.join(process.cwd(), "public", "index.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (REQUI) {
        console.log("--- Detalhes da Requisição ---");
        console.log("Headers: ", req.headers);
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    const extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "application/javascript";
        break;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
