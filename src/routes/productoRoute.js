const express = require('express');
const router = express.Router();
const {buscarCategoria} = require('../controllers/productoController');
const {buscarProducto} = require('../controllers/productoController');

router.get('/buscarProducto/:busqueda', busquedaProducto);
router.get('/buscarCategoria/:busqueda', busquedaCategoria);

module.exports = router;