const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.getCatalogo);
router.get('/:categoria', catalogoController.getCatalogoByCategoria);

module.exports = router;
