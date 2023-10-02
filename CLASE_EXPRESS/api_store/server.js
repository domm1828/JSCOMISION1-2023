const express = require("express");
const app = express();
const port = 5000;

const userRoute = require('./routers/user.router');


app.get('/',(req,res)=>{

    //send => repuesta de cualquier Tipo 
    //json => solo objetos
    //render => renderizar
    res.json({welcome:"Welcome V.0.0.1"}); 
});

app.use('/users',userRoute);

/*
app.get('/hello',(req,res)=>{
    res.send('hello world');
});*/

app.listen(port,()=>{
    console.log("Listen port: http://localhost:"+port)
});

//ROUTES HTTP GET - POST - PUT - PATCH-  DELETE - HEAD - OPTIONS
//app.method(PATH,handler)
//MVC Model(DB) View(UI)  Controller(Logic)
