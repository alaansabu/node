const { error } = require('console');
const {readFile,writeFile} = require('fs');
const { result } = require('lodash');

console.log("first task");

readFile("./content/mod1.txt","utf-8",(error,data) => {

if(error){
    return;
}    
else{
    console.log(data);
    console.log('succesfully executed');
    
    
}
})
console.log("secod");
