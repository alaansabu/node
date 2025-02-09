const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received');

    console.log(req.method);
    if(req.url === '/'){
    res.writeHead(404, { "Content-Type": "text/html" });

    res.write("<h1>Hello World</h1><p>hi alla</p>");
    res.end("hshs")}


    else if(req.url === '/about'){
res.writeHead(200,{"content-type":"text/html"})
return res.end("hey buddy")

    }

else{

    res.writeHead(404,{"content-type":"text/html"})
    res.end('error ')



}
});

 




server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
