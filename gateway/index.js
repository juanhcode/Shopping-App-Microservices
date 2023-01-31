const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const app = express();

app.use(cors());
app.use(express.json());


app.listen(8000,()=>{
    console.log('Gateway en el puerto 8000')
})