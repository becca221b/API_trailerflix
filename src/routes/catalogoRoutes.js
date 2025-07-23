const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.getCatalogo);
router.get('/totalPeliculas', catalogoController.getCountTotalPeliculas);
router.get('/totalSeries', catalogoController.getCountTotalSeries);
router.get('/countByCategory/:category', catalogoController.getCountByCategory);
router.get('/seriesPorTemporada', catalogoController.getSeriesBySeasons);
router.put('/actualizarFecha', catalogoController.actalizarFechaDeLanzamiento);
router.get('/palabraClave/:palabraClave', catalogoController.getCatalogoByPalabraClave);

module.exports = router;