const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

const userRoute = require('./routers/user.router');
const productRouter = require('./routers/product.router');
const addressRouter = require('./routers/user_address.router');
const loginRouter = require('./routers/login.router');

const userMongoRouter = require('./routers/mongo/user.router');

require('./config/db.mongo.config');
/** function to handleError */
const errorHandler =(error,req,resp,next)=>{
    const status = error.status || 400;
    console.log(error)
    resp.status(status).json({ error: true, message: error.message });
}

/** end function */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.multipart())




app.get('/', (req, res) => {

    //send => repuesta de cualquier Tipo 
    //json => solo objetos
    //render => renderizar
    res.json({ welcome: "Welcome V.0.0.1" });
});
app.use('/api/users', userRoute);
app.use('/api/products',productRouter);
app.use('/api/address',addressRouter);

app.use('/api/login',loginRouter);

app.use('/api/mongo/users', userMongoRouter);

app.use(errorHandler);

/*
app.get('/hello',(req,res)=>{
    res.send('hello world');
});*/

app.listen(port, () => {
    console.log("Listen port: http://localhost:" + port)
});

//ROUTES HTTP GET - POST - PUT - PATCH-  DELETE - HEAD - OPTIONS
//app.method(PATH,handler)
//MVC Model(DB) View(UI)  Controller(Logic)

//hackingdomm
//ZNKM69MkMUwE4ZE9

//mongodb+srv://hackingdomm:ZNKM69MkMUwE4ZE9@comision1a.z0yurzx.mongodb.net/