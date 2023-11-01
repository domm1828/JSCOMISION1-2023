const multer = require('multer');

const uploadFile = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/products/')
    },
    filename:(req,file,cb)=>{
        let name = Date.now()+"_"+file.originalname
        cb(null,name);
    }
})

const validateFilterFile = (request,filename,callback) =>{
    let mimeType = filename.mimetype;
    if(mimeType.includes('image/jpeg') || mimeType.includes('image/png') ){
        callback(null,true);
    }
    else{
        callback(null,false);
        callback(new Error('NO PUEDES SUBIR ESTE TIPO DE ARCHIVO '+mimeType+' SOLO PERMITE JPG,PNG'))
    }
}

const uploadStore = multer({storage:uploadFile, fileFilter:validateFilterFile});

module.exports= uploadStore;