const {Schema, model} = require('mongoose');

const ServiceSchema = new Schema({

    nombresus:{
        type: String,
        required: true,
       
    },
    activo:{
        type: Boolean,
        default: true,
    },
    precio:{
        type: Number,
        required: true
    }
})
module.exports = model('Service', ServiceSchema)