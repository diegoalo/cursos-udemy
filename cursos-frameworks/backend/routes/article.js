//Archivo de rutas
'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');


var router = express.Router();

//Podemos crear rutas
router.post('/datos-curso', ArticleController.datoscurso);
router.get('/test-de-controlador', ArticleController.test);

//ya podemos usar las rutas en cualquier parte
module.exports = router;
