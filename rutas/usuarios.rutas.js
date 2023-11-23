const { Router } = require('express');

const { userGet, userPost, userPut, userDel } = require('../controlador/users.controllers');
// const { validatePost } = require('../middlewares/validators');
// const {schema}=require('../validators/user.vallidators')
 const {celebrateValidator}=require ('../middlewares/celebrateValidator')

 //const {errors} = require('celebrate');

const router=Router()

router.get("/", userGet );
router.post("/",celebrateValidator, userPost);
router.put("/:id", userPut);
router.patch("/:id", userPost);
router.delete("/:id", userDel);
//router.use(errors())



module.exports= router