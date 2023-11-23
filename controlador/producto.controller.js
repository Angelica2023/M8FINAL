const {response, request} = require("express")
const Producto = require ('../modelo/producto.model')

//R
const productoGet = async (req, res= response)=>{

    try{
        res.status(200).json({message:'rutas desde el controlador pero un PRODUCTO GET', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }
}


//C
const productoPost = async (req = request, res = response) => {
    try{
        const {name, descrip, precio, existencia } =req.body
        const data ={
            name, descrip, precio, existencia
        }
            const producto = new Producto(data)
            await producto.save()


        res.status(200).json({message:'rutas desde el controlador pero un PRODUCTO POST', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }

}
//UPDATE
const productoPut = async(req = request,res)=>{  
    try{
       
        res.status(200).json({message:'rutas desde el controlador pero un PRODUCTO PUT', })
    }catch (error){
    res.status(500).json({
        message:'Error con el SERVER',
    })
    }
    
}
//Del
const productoDel = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const falseState = { state: false };
    const producto = await Service.findByIdAndDelete(id, falseState);

    res
      .status(200)
      .json({
        message: `El servicio con el ID: ${id} fue eliminado`,
        producto,
      });
  } catch (error) {
    res.status(500).json({
      message: "NO se pudo borrar el producto",
    });
  }
};


module.exports = {
    productoGet,
    productoPost,
    productoPut,
    productoDel

}