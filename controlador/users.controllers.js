const {response, request} = require("express");
//const Joi = require("joi");

const User = require('../modelo/users.model')

//validacion joi

const {schema}= require ('../validators/users.validators')


//const {schema} =require('../validators/users.validators')

//R
const userGet = async (req=request, res= response)=>{
try{
    const queryParam = {state:true};
    const { limite = 10 } = req.query
    const NumeroEntradas = await User.countDocuments()
    const usuario = await User.find(queryParam).populate("service").limit(Number(limite));
    res.status(200).json({
      total: NumeroEntradas,
      usuario
    })
}catch (error){
res.status(500).json({
    message:'Error con el SERVER',
})
}
}


//C
const userPost = async (req = request, res = response) => {

try{
    const {usuario, email, telefono, password, puesto} =req.body
    const data ={
        usuario, email, telefono, password, puesto
    }
        /* const{error}=schema.validate(req.body)
if (error){
return res.status(400).json({

message:error.details[0].message
})

}
 */
    
        const user = new User(data)
        await user.save()
    
        res.status(200).json({message:'desde el controlador pero un usuario POST', user})
}catch (error){
res.status(500).json({
    message:'Error en el servidor',
    error
})

}
}
//UPDATE
const userPut = async(req = request,res)=>{  
    try{
        const {id }= req.params;
        const {usuario, email, telefonno, password, puesto}=req.body
        const data = {usuario, email, telefonno, password, puesto}

        const user = await User.findByIdAndUpdate(id,data )

        res.status(200).json({message:'Todo Ok con la modificacion del Usuario',MODIFICADO:true
    })

    }catch (error){
        res.status(500).json({ message: 'ERROR al actualizar el usuario'
        })
    }
}
//Del
const userDel = async(req=request, res=response) => {
try{

const {id}=req.params;
const falseState = {state:false}
const user = await User.findByIdAndDelete(id, falseState)

res.status(200).json({message:`El usuario con el ID: ${id} fue eliminado`,user
})
}catch (error){
res.status(500).json({
    message:"NO se pudo borrar el usuario"
})

}
}
module.exports = {
    userGet,
    userPost,
    userPut,
    userDel

}