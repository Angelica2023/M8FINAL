const { Router } = require('express');

const { productoGet, productoPost, productoPut, productoDel } = require('../controlador/producto.controller')

const router=Router()

router.get("/", productoGet );
router.post("/", productoPost);
router.put("/:id", productoPut);
router.patch("/:id", productoPost);
router.delete("/:id", productoDel);



module.exports= router