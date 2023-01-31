const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    return res.status(201).json({
        "msg":"Hola desde Shopping"
    })
})


app.listen(8003,()=>{
    console.log('Shopping en el puerto 8001')
})