const express =  require('express');
const app = express();



app.get("/",(req,res) => {

res.status(200).send("homepage")


})

app.get("/about",(req,res) => {

res.status(200).send("about page")


})

app.all("*",(req,res) => {

res.status(404).send("<h1>Resource not found</h1>")

})


app.listen(5000,()=>{

    console.log("server running on port 5000");
    
})