const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const { dataBaseConnection } = require ('../db/database')

class Server {
constructor(){
this.app = express();
this.port = process.env.PORT || 3001;
this.usersPath = '/api/users';
this.servicePath = '/api/services';
this.productoPath ='/api/producto';
this.pedidoPath ='/api/pedido';

this.dataBaseConnection()
this.middlewares()
this.routes()
}


async dataBaseConnection(){
    await dataBaseConnection()
}

middlewares(){
    this.app.use(cors());
    this.app.use(express.json())
}

routes(){
this.app.use(this.usersPath, require('../rutas/usuarios.rutas'),errors());
this.app.use(this.servicePath, require('../rutas/services.rutas'));
this.app.use(this.productoPath, require('../rutas/producto.rutas'));
this.app.use(this.pedidoPath, require('../rutas/pedido.rutas'))

}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`Estamos en el puerto ${this.port}`)
    })
}

}
module.exports = Server;