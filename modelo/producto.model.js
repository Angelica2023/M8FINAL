//const {Schema, model, default: mongoose} = require('mongoose');

//const mongoose =require('mongoose')

//const ProductoSchema = new Schema ({
    const {Schema, model}=require('mongoose'); 


const ProductoSchema = new Schema({
   // user:{
// type : mongoose.Schema.Types.ObjectId,
// required: true,
// ref:'User'
  //  },
nombre:{
    type : String,
    required:true

},
descrip:{
    type: String,
    require: true
},
precio:{
type: Number,
require: true

},
existencia:{
    type: Boolean,
    require: true
},

})
module.exports = model ('Producto', ProductoSchema)