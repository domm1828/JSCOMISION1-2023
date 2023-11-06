const db = require("../models");
const jwt = require('jsonwebtoken')
const User = db.user;

const veryToken = (req,res,next)=>{

    let token = req.headers["x-access-token"];

    if(!token){
        return  res.status(403).json({ error: true, message: 'Error Access Token' })
    }

    jwt.verify(token,'ABCDEFJHIJKLMONPQRSTUVWXYZ',(error,decode)=>{
        if(error){
            return  res.status(403).json({ error: true, message: 'Error Access Token' }) 
        }
        req.userId = decode.id;
        next();
    })
}

module.exports = veryToken;