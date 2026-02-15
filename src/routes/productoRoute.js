const express = require('express');
const router = express.Router();

const {buscarProducto} = require('../controllers/productoController');
const {ListarProductos} = require('../controllers/productoController');

router.get('/buscarProducto/:busqueda', buscarProducto);
router.get('/listarProductos', ListarProductos);


module.exports = router;