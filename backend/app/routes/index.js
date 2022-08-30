const express = require('express')
const router = express.Router();
const crearTablaController = require('../controller/crearTablaController')
const listarTablaController = require('../controller/listarTablaController')
const modificarFilaController = require('../controller/modificarFilaController')



router.post('/creartabla', crearTablaController)

router.get('/listarTabla', listarTablaController)

router.post('/modificarFila', modificarFilaController)





module.exports = router