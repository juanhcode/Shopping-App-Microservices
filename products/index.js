const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    return res.status(201).json({
        "msg":"Hola desde products"
    })
})


app.listen(8002,()=>{
    console.log('products en el puerto 8002')
})