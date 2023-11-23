const {Schema, model} = require('mongoose');

const PedidoSchema = new Schema ({
clave:{
    type : String,
    required:true

},
descrip:{
    type: String,
    require: true
},
importe:{
type: Number,
require: true

},
status:{
    type: Boolean,
    require: true
}

})
module.exports = model ('Pedido', PedidoSchema)