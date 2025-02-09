const { readFileSync } = require('fs');
const http = require('http');
const homepage = readFileSync('./index.html');
const style = readFileSync('./style.css');
const logo = readFileSync('./logo.svg');
const page = readFileSync('./script.js');

const server = http.createServer((req, res) => {
    console.log('Request received');

    console.log(req.method);
    if(req.url === '/'){
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(homepage)
    res.end()
}


    else if(req.url === '/about'){
res.writeHead(200,{"content-type":"text/html"})
return res.end("hey buddy")

    }


    // Missing handler for logo
else if(req.url === '/logo.svg') {
    res.writeHead(200, {"content-type":"image/svg+xml"})
    res.end(logo)
}

// Missing handler for JavaScript file
else if(req.url === '/script.js') {
    res.writeHead(200, {"content-type":"text/javascript"})
    res.end(page)
}
else if(req.url === '/navbar-ap/style.css') {
    res.writeHead(200, {"content-type":"text/css"})
    res.end(style)
}

else{

    res.writeHead(404,{"content-type":"text/html"})
    res.end('error ')



}
});

 




server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
