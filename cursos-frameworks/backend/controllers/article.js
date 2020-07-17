//metodos y rutas relacionadas con articulos de nuestra API (backend)
'use strict'

var controller = {
    datoscurso: (req,res) => {
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
    },

    test: (req,res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    }


}; //Fin del controlador

module.exports = controller;