//metodos y rutas relacionadas con articulos de nuestra API (backend)
'use strict'

var validator = require('validator');
//Importar modelo
var Article = require('../models/article');

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
    },

    //Método save: Nos permite crear un nuevo articulo
    save: (req,res) => {
        //1: Recoger parámetros por post
        var params = req.body;
        //console.log(params);
        //2: Validar datos con libreria validator
        try {
            //true cuando no esté vacío el título
            var validate_title = !validator.isEmpty(params.title);
            //true cuando no esté vacío el contenido
            var validate_content = !validator.isEmpty(params.content);
             
        }catch (err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            });
        }

        if (validate_title && validate_content) {
            //3: Crear el objeto a guardar
            var article = new Article();
            //4: Asignar valores al objeto
            article.title = params.title;
            article.content = params.content;
            article.image = null;
            //5: Guardar el articulo
            article.save((err, articleStored)=> {
                //si se produce un error devolvemos el error y si no guardamos el articulo
                if (err || !articleStored){
                    return res.status(200).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado :('
                    });
                }
                return res.status(404).send({
                    status: 'success',
                    article: articleStored
                });

            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos :('
            });
        }
        
    },

    //Método para sacar todos los articulos
    getArticles: (req,res) => {

        //Consulta
        var query = Article.find({});

        //recogemos el last adjunto a la url 
        var last = req.params.last;
        console.log(last);

        if (last || last != undefined) {
            //si llega ese last, ponemos un limite de resultados de la query a 5
            query.limit(5);
        }


        //Hacemos un find para sacar los articulos de la BD
        //Manera descendente de ordenacion con el menos
        query.sort('-_id').exec((err,articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        }); //podemos poner condiciones: fecha, titulo, id ...
    },

    //Metodo para obtener un articulo en concreto
    getArticle: (req, res) => {

        //1: Recoger id de la url
        var articleId = req.params.id;
        //2: Comprobar que exista 
        if (!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!'
            });
        }
        //3: Buscar el articulo y devolverlo en JSON
        Article.findById(articleId, (err,article)=> {

            //Si no existe el articulo o da error
            if (err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo!'
                });
            }

            //Devolver el articulo
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    }


}; //Fin del controlador

module.exports = controller;