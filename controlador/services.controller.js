const { response, request } = require("express");
const Service = require('../modelo/services.model');

//R
const serviceGet = async(req = request, res = response) => {

  try {
    const queryParam = {active:true};

    const NumeroEntradas = await Service.countDocuments()
    const servicio = await Service.find(queryParam);
    res.status(200).json({
      total: NumeroEntradas,
      servicio
    })
  } catch (error) {
    res.status(500).json({
      message: "Error buscando SERIVICIOS",
    });
  }
};

//C
const servicePost = async (req = request, res = response) => {
  try {
    const { nombresus, activo, precio } = req.body
    const data = { nombresus, activo, precio }

    const service = new Service(data);
    await service.save()
    res.status(200)
      .json({ message: "rutas desde el controlador pero un services POST" });
  } catch (error) {
    res.status(500).json({
      message: "Error con el SERVER",
      error,
    });
  }
};
//UPDATE
const servicePut = async (req = request, res) => {
  try {
    const { id } = req.params;
    const { nombresus, activo, precio } = req.body;
    const data = { nombresus, activo, precio };

    await Service.findByIdAndUpdate(id, data);

    res
      .status(200)
      .json({ message: "rutas desde el controlador pero un services PUT" });
  } catch (error) {
    res.status(500).json({
      message: "Error con el SERVER",
    });
  }
};

//Del
const serviceDel = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const falseActive = { active: false }
    await Service.findByIdAndDelete(id, falseActive);

    res
      .status(200)
      .json({ message: `El servicio con el ID: ${id} fue eliminado`, service });
  } catch (error) {
    res.status(500).json({
      message: "NO se pudo borrar el servicio",
    });
  }
};

module.exports = {
  serviceGet,
  servicePost,
  servicePut,
  serviceDel,
};
