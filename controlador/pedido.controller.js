const {response, request} = require("express")
const Pedido = require ('../modelo/pedido.model')

//R
const pedidoGet = async (req, res= response)=>{

    try{
        res.status(200).json({message:'rutas desde el controlador pero un pedido GET', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }
}


//C
const pedidoPost = async (req = request, res = response) => {
    try{
        const {name, descrip, precio, existencia } =req.body
        const data ={
            name, descrip, precio, existencia
        }
            const pedido = new Pedido(data)
            await pedido.save()


        res.status(200).json({message:'rutas desde el controlador pero un pedido POST', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }

}
//UPDATE
const pedidoPut = async(req = request,res)=>{  
    try{
       
        res.status(200).json({message:'rutas desde el controlador pero un Pedido PUT', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }
    
}
//Del
const pedidoDel = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const falseState = { state: false };
    const pedido = await Service.findByIdAndDelete(id, falseState);

    res
      .status(200)
      .json({
        message: `El servicio con el ID: ${id} fue eliminado`,
        pedido,
      });
  } catch (error) {
    res.status(500).json({
      message: "NO se pudo borrar el pedido",
    });
  }
};


module.exports = {
    pedidoGet,
    pedidoPost,
    pedidoPut,
    pedidoDel

}