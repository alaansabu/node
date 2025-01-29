const http = require('http');
const { serialize } = require('v8');

const server = http.createServer((req,res) => {
if(req.url === "/"){
res.end("hello world");

}

if(req.url === "/about"){
    //blocking

    for (let i = 0;i<1000;i++){
        
        for (let j = 0;j<1000;j++){
console.log(`${i}and${j}`);

        }
    }

res.end("this is about page")
}
}
)

server.listen(5000,() => {

    console.log("server is litening on port 5000");
    
})