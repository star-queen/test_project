const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (req,res) =>{
        res.statusCode = 200;
        res.setHeader('content-Type','text/html');
        let data ='';
        switch(req.url){
            case '/' :
                data= fs.readFileSync('./public/index.html');
                break;
            case '/script.js':
                data = fs.readFileSync('./public/script.js');
                break;
            default:
                res.statusCode = 404;
                data = fs.readFileSync('./public/404.html');               
        }
    res.end(data);
    }
);
server.listen(8000);