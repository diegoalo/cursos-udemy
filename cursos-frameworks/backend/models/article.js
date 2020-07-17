//Modelo que vamos a crear

//Clase que da un molde para crear diferentes objetos con ese modelo
//Esquema de un articulo, propiedades, estructuras ... sobre este modelo 
//nos podemos conectar a la coleccion de articulos y cuando creemos uno nuevo, usarlo de modelo

//Muy importante
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    //Estructura del articulo
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String //ruta de imagen

});

//para poder usarlo debemos exportarlo como un modulo para importarlo en los archivos del backend
//objetos nuevos o usarlo para conectarnos mediante el a la BD

//1 modelo por coleccion en BD

module.exports = mongoose.model('Article', ArticleSchema);
//Nombre singular, trabajamos con un objeto a la vez
//MongoDB pluraliza este nombre y lo pone en minuscula (articles) y dentro guarda documentos con esta estructura