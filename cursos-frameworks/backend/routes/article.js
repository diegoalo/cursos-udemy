//Archivo de rutas
//Métodos:
//Método para actualizar: --put--
//Método para sacar datos de la BD: --get--
//Método para guardar/enviar datos a la BD o al backend: --post--
//Método para borrar: --delete--


'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');


var router = express.Router();

//Subida de archivos
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});

//Podemos crear rutas. Rutas de prueba
router.post('/datos-curso', ArticleController.datoscurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas para articulos. Rutas útiles
router.post('/save', ArticleController.save);

//Ruta para sacar todos los articulos de la BD
router.get('/articles/:last?', ArticleController.getArticles);

//Ruta para conseguir un sólo articulo
router.get('/article/:id', ArticleController.getArticle);

//Ruta para actualizar los artículos
//Método para actualizar put
router.put('/article/:id', ArticleController.update);

//Ruta para eliminar un articulo
router.delete('/article/:id', ArticleController.delete);

//Ruta para subida de archivos
router.post('/upload-image/:id?', md_upload, ArticleController.upload);

//Ruta para sacar una imagen
router.get('/get-image/:image', ArticleController.getImage);

//Ruta para sacar articulos de la BD
router.get('/search/:search', ArticleController.search);

//ya podemos usar las rutas en cualquier parte
module.exports = router;
