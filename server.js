const http = require("http");
const date = require('./dateTimeModule');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
const REQUI = true;

const servidor = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    fs.readFile('index.html', function(err,data){

        if(REQUI){
            console.log("Detalhes de requisição");
            console.log("Headers", req.headers);
        }
     
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(data);
        res.end()
    });
    
});

servidor.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
})