//const {string} =require ('joi');
//const mongoose =require('mongoose')

const {Schema, model}=require('mongoose'); 

const UserSchema = Schema({
    usuario:{
        type:String,
        required:[ true, "El nombre de usuario es obligatorio"]
    },
    email:{
        type:String,
        required:[true, "Es necesario que proporciones un email"]
    },
    telefono:{
        type:Number,

    },
    password:{
        type:String,
        required:[true,"Necesitas colocar un password" ]
    },
    puesto:{
        type:String,
        required:[true, "Debes proporcionar tu puesto dentro de la empresa"]
    },
})
module.exports = model('User',UserSchema )