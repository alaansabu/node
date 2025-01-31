const { createReadStream } = require('fs');

const stream = createReadStream("./ct/mod1.txt", {
    highWaterMark: 9000,
    encoding: 'utf-8'
});

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.error("File read error:", err);
});

stream.on('end', () => {
    console.log("File read complete");
});