const { Router } = require('express');

const {  serviceGet, servicePost, servicePut,serviceDel } = require('../controlador/services.controller')

const router=Router()

router.get("/", serviceGet );
router.post("/", servicePost);
router.put("/:id", servicePut);
// router.patch("/:id", servicePost);
router.delete("/:id", serviceDel);



module.exports= router