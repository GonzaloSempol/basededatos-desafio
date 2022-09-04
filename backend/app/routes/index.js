const express = require('express')
const router = express.Router();

const crearTablaController = require('../controller/crearTablaController')
const listarTablaController = require('../controller/listarTablaController')
const describirTablaController = require('../controller/describirTablaController')

const insertarFilaController = require('../controller/insertarFilaController')
const modificarFilaController = require('../controller/modificarFilaController')
const eliminarFilaController = require('../controller/eliminarFilaController')
const getAllTablasController = require('../controller/getAllTablasController')


router.post('/creartabla', crearTablaController)
router.post('/listarTabla', listarTablaController)
router.post('/describirTabla', describirTablaController)
router.get('/getAllTablas', getAllTablasController)

router.post('/insertarFila', insertarFilaController)
router.post('/modificarFila', modificarFilaController)
router.post('/eliminarFila', eliminarFilaController)







module.exports = router