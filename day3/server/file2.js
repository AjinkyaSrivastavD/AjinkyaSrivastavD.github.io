const res = require('express/lib/response');
const http = require('http');
const PORT= 3000;

const server = http.createServer(
    (req,res)=>{
        if(req.url=='/'){
            res.write("Helllooo");
            res.end();
        }

        if(req.url=='/api/departments'){
            res.write(JSON.stringify([{id:1,name:'ECE'},{id:2,name:'CSE'}]));
            res.end();
        }
    }
);

server.listen(PORT);

console.log(`listening to ${PORT}`);

