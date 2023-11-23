
const Joi = require("joi");

const schema = Joi.object().keys({
    usuario: Joi.string().min(3).max(30).required(),
    email: Joi.string().email(). required(),
    telefono: Joi.number().required(),
    password: Joi.string().required(),
    puesto: Joi.string().min(5). max(30),

    service:Joi.string().required(),
    })

    module.exports  = {schema};