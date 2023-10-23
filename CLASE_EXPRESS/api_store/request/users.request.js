const Joi = require("joi");
const validateRequest = require("../middleware/validateRequest");

const validateUser = (req,resp,next)=>{

    const schema = Joi.object({
        dni: Joi.number().integer().required().messages({
            'number.base':'Ingrese solo numeros en el DNI',
            'any.required':'El DNI es requerido'
        }),
        name: Joi.string().required(),
        last_name:Joi.string().required(),
        phone:Joi.string(),
        email:Joi.string().required().email(),
        password:Joi.string().required().min(6)
    });

    validateRequest(req,resp,next,schema)

}

module.exports = validateUser