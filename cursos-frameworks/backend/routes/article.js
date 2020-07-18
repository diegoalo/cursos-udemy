//Archivo de rutas
'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');


var router = express.Router();

//Podemos crear rutas. Rutas de prueba
router.post('/datos-curso', ArticleController.datoscurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas para articulos. Rutas útiles
router.post('/save', ArticleController.save);

//Ruta para sacar todos los articulos de la BD
router.get('/articles/:last?', ArticleController.getArticles);

//Ruta para conseguir un sólo articulo
router.get('/article/:id', ArticleController.getArticle);

//ya podemos usar las rutas en cualquier parte
module.exports = router;
