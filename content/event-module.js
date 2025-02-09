const eventEmitter = require('events');
const customEmitter =new  eventEmitter();

customEmitter.on('response',() => {
    console.log("data recived");
    
})

customEmitter.emit('response')