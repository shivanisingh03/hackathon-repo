// const express= require("express")
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.listen(8000,()=>{
//     console.log("listing the port")
// })

  

const express = require('express');
const app = express();

const port=process.env.PORT||3000;


// const path=require("path")

// const static_path=path.join(__dirname,"../public") //module rapup function in node 

///home/shivani/Desktop/Hackathon/expreesbyshivi

// app.use(express.static(static_path))  


app.post('/', (req, res)=>{
   res.send("Hello world!");
});

app.listen(port,()=>{
    console.log("server is runing at ",port)
});





// cd expreesbyshivi/
// node apps.js
// nodemon filename
