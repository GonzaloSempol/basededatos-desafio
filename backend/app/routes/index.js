const express = require('express')
const router = express.Router();

const crearTablaController = require('../controller/crearTablaController')
const listarTablaController = require('../controller/listarTablaController')
const describirTablaController = require('../controller/describirTablaController')

const insertarFilaController = require('../controller/insertarFilaController')
const modificarFilaController = require('../controller/modificarFilaController')
const eliminarFilaController = require('../controller/eliminarFilaController')


router.post('/creartabla', crearTablaController)
router.get('/listarTabla', listarTablaController)
router.get('/describirTabla', describirTablaController)

router.post('/insertarFila', insertarFilaController)
router.patch('/modificarFila', modificarFilaController)
router.delete('/eliminarFila', eliminarFilaController)







module.exports = router