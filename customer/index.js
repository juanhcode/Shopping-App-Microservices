const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    return res.status(201).json({
        "msg":"Hola desde customer"
    })
})


app.listen(8001,()=>{
    console.log('Customer en el puerto 8001')
})