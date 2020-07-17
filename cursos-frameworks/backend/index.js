//Buenas prácticas y activar modo estricto de JS
'use strict'

var mongoose = require('mongoose');
//Cargamos objeto app fuera de fichero app. 
var app = require('./app');
var port = 3900;

//Uso de promesas para evitar fallos
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

//Promesa
mongoose.connect('mongodb://localhost:27017/api-rest-blog',{useNewUrlParser: true},)
.then( () => {
        console.log('La conexión a la BD se ha realizado correctamente!!');


        //Creamos servidor y escuchar peticiones HTTP
        app.listen(port, () => {
                console.log('Servidor corriendo en HTTP://localhost' + port);

        });

});