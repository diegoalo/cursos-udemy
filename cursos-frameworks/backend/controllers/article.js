//metodos y rutas relacionadas con articulos de nuestra API (backend)
'use strict'

var validator = require('validator');
//Importar modelo
var Article = require('../models/article');
//importar modulo file system
var fs = require('fs');
var path = require('path');
const { exists } = require('../models/article');

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
    },

    //Método para actualizar los artículos
    update: (req,res) => {
        //1: Recoger el id del articulo por la url
        var articleId = req.params.id;
        //2: Recoger los datos que llegan por el put
        var params = req.body;
        //3: Validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'No existe el articulo!'
            });
        }
        if (validate_title && validate_content) {
            //4: Si son válidos, hacer la consulta, un find and update
            Article.findOneAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) => {
                if (err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if (!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'Faltan datos por enviar !!!'
                    });
                }
                
                //Devolvemos un success
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });

        }else {
            //Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta!!!'
            });
        }
    },

    delete: (req,res) => {
        //1: Recoger el id de la URL
        var articleId = req.params.id;
        //2: Hacer un find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if (err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar!!!'
                });
            }

            if (!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, no existe!!!'
                });
            }
            //Devolvemos un success
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        });

    },

    upload: (req,res) => {
        //1: Configurar el modulo connect-multiparty router/article.js (DONE)
        //2: Recoger el fichero de la peticion
        var file_name = 'Imagen no subida...';
        if (!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }
        //3: Conseguir el nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/');
        //Nombre del archivo
        var file_name = file_split[2];
        //Extensión del archivo
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];
        
        //4: Comprobar la extensión (solo imagenes). Si no es valida, borrar el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            //Borramos el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida'
                });
            });

        }else{
            //Sacamos id de la url
            var articleId = req.params.id;
            //5: Si todo es valido, buscamos el articulo, asignamos el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({_id: articleId }, {image: file_name}, {new:true}, (err,articleUpdated)=> {
                //Si recibimos cualquier error
                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del articulo!!'
                    });
                }
                //Respuesta correcta
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
           
            });

        }

    }, //end upload file
    
    //metodo para obtener la imagen
    getImage: (req,res) => {
        var file = req.params.image;
        var path_file = './upload/Articles/' + file;

        //Comprobar si el fichero existe
        fs.exists(path_file, (exists) => {
            if (exists){
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe!!'
                });
            }
        });
    },

    //metodo para buscar un articulo
    search: (req,res) => {
        //1: Sacar el string a buscar
        var searchString = req.params.search;
        //2: Find OR
        Article.find({ "$or": [
            //si el searchString esta incluido en titulo o content, sacamos los articulos que los contengan
            {"title": {"$regex": searchString, "$options": "i"}},
            {"content": {"$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date','descending']])
        .exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion!!',
                });
            }

            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda!!',
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });
        
    }
};
 //Fin del controlador

module.exports = controller;