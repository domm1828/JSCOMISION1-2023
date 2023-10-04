
const isAdmin = (req,res,next)=>{

    if(req.body.isAdmin){
        next();
    }
    else{
        res.status(401).send('Error no eres admin...')
    }
}

module.exports = isAdmin;