const { Router } = require('express');

const { pedidoGet, pedidoPost, pedidoPut, pedidoDel } = require('../controlador/pedido.controller')

const router=Router()

router.get("/", pedidoGet );
router.post("/", pedidoPost);
router.put("/:id", pedidoPut);
router.patch("/:id", pedidoPost);
router.delete("/:id", pedidoDel);



module.exports= router