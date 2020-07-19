//Modo estricto de Javascript y Node.js
//Arquitectura: vista-controladores (MWC)
//Todo se separa en modelos, capa de abstraccion por la cual nos conectamos a la BD
//controladoers: mediante rutas, recibimos procesamos y enviamos datos
//vistas: no hay como tal, hay JSON que devuelve cada metodo del API
//separamos en rutas y servicios (funcionalidad grande) o middlewares (procesar una informacion antes de cargar una ruta o no)
'use strict'

//Cargar módulos de Node.js para crear servidor
//Creamos express y require para cargar modulo de node
//bodyParse recibe las peticiones y lo convierte a un objeto nativo de JS
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (HTTP)
//Aplicación en sí que se exporta
var app = express();

//Cargar ficheros de rutas
//Modulo con variable archivo rutas
var article_routes = require('./routes/article');

//Cargar middlewares (Se ejeucta nates de cargar una ruta a un fichero o una aplicación)
//Cargar bodyParser
app.use(bodyParser.urlencoded({extended:false}));
//Convertir cualquier petición a JSON
app.use(bodyParser.json());


//Cargar CORS (Peticiones frontend)
//Importante: Si no se hace, se bloquea la entrada de peticiones
// Configurar cabeceras y cors
//middleware que se ejecuta ante de los metodos
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes);

//Ruta de ejemplo para el API REST
/*app.post('/datos-curso', (req,res) => {
    //POSTMAN: peticiones HTTP, podemos recibir con el software varias peticiones e incluirlas
    var hola = req.body.hola;
    //console.log("Hola mundo");
    //Códigos HTTP: Wikipedia
    return res.status(200).send({
        curso: 'Master en Frameworks de JS',
        estudiante: 'Diego Alonso',
        url: 'google.es',
        hola
    });


});*/

//Exportar módulo (Fichero actual) para poder ejecutarlo fuera y poder cargar app.js en el index y que escuche el servidor
module.exports = app;

