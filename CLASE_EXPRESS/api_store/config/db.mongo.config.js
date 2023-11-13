const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hackingdomm:ZNKM69MkMUwE4ZE9@comision1a.z0yurzx.mongodb.net/').then(()=>{
    console.log('Conexion Exitosa')
}).catch((error)=>{
    console.log(error)
})