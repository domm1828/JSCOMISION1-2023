
const validateRequest = (req,resp,next,schema) =>{

    const options ={
        abortEarly:false,
        stripUnknown:true,
    }

    const {error,value} = schema.validate(req.body,options);

    if(error){
        console.log(error);
        const errors = error.details.map((elements)=>{
            let label =  elements.context.label;
            const errorMessage={
                message : elements.message.replaceAll('"',""),
                label:label

            }
            return errorMessage;
        });
        resp.status(400).json({'error':true,message:errors});
    }
    else{
        req.body=value;
        next();
    }

}
module.exports = validateRequest;