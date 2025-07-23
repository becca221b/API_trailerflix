const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.getCatalogo);

module.exports = router;