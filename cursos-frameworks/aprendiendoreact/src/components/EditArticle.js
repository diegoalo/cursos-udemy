import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Slider from './Slider';
//validar formularios
import SimpleReactValidator from 'simple-react-validator';
//libreria para alertas en React
import swal from 'sweetalert';

//validación formularios y alertas

//DIFERENCIAS: 
/**
 * 1: Recogemos el id del articulo a editar de la URL
 * 2: Metodo para sacar ese objeto del API (backend)
 * 3: Repoblar el formulario con esos datos
 * 4: Actualizar el objeto con una peticion al backend
 */

class EditArticle extends Component {

    url = Global.url;
    articleId = null;

    //refs para recoger los datos y aplicar formularios de React
    titleRef = React.createRef();
    contentRef = React.createRef();

    //creamos el estado para guardar la informacion
    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    //cargamos el validador de formularios de React
    componentWillMount() {
        //sacamos el id del articulo
        this.articleId = this.props.match.params.id;

        //llamamos al metodo getArticle
        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({
            //configuramos los errores que queremos mostrar
            messages: {
                required: 'Este campo es requerido'

            }
        });
    }

    //obtenemos el articulo a editar
    getArticle = (id) => {
        Axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
            }
        });

        //mostramos mensajes de error del formulario
        this.validator.showMessages();
        this.forceUpdate();

    }


    //metodo para añadir funcionalidad de Formularios a React
    saveArticle = (e) => {
        e.preventDefault();

        //Rellenamos el state con el formulario
        this.changeState();


        if (this.validator.allValid()) {
            Axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    //en caso de que llegue la respuesta del articulo es que todo ha ido bien
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Artículo creado!',
                            'El artículo se ha incluido correctamente',
                            'success'
                        );

                        //subir el archivo (la imagen)
                        if (this.state.selectedFile !== null) {

                            //sacamos el id del articulo guardado
                            var articleId = this.state.article._id;

                            //crear form data y añadir el fichero
                            const formData = new FormData();
                            //vincular un fichero al form
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name

                            );

                            //peticion AJAX
                            Axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    //la imagen se sube correctamente
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }


                    } else {
                        this.setState({
                            //en caso contrario devolvemos un error
                            status: 'failed'
                        });
                    }
                })

        } else {

            //el estado se marca a fallido
            this.setState({
                //en caso contrario devolvemos un error
                status: 'failed'
            });

            //si la validacion del formulario no ha sido correcta, se muestran los mensajes de error
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    //Hacemos una peticion HTTP por POST para guardar el articulo


    //metodo para la subida de imagenes
    fileChange = (event) => {
        //actualizamos el state seleccionando el archivo que seleccionamos (Viene en un array, seria el primero)
        this.setState({
            selectedFile: event.target.files[0]
        });

    }

    render() {

        console.log(this.state.article);

        //si ha ido bien, redirigimos al blog para ver el articulo nuevo
        if (this.state.status === "success") {
            return <Redirect to="/blog" />;
        }

        var article = this.state.article;

        return (

            <React.Fragment>

                <Slider
                    title="Editar artículo"
                    size="slider-small"
                />

                {this.state.article.title &&

                    <div className="center">

                        <section id="contact">


                            <h1 className="subheader">Rellena los datos</h1>

                            {/* Formulario */}
                            <form className="mid-form" onSubmit={this.saveArticle}>
                                <div className="form-group">
                                    <label htmlFor="title">Título</label>
                                    <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />

                                    {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                                </div>

                                <div className="form-group">
                                    <label htmlFor="content">Contenido</label>
                                    <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState} />

                                    {this.validator.message('content', this.state.article.content, 'required')}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="file0">Imagen</label>
                                    <input type="file" name="file0" onChange={this.fileChange} />
                                </div>

                                <input type="submit" value="Guardar" className="btn-success" />


                            </form>

                        </section>

                    </div>
                }

                {!this.state.article.title &&
                    <h1 className="subheader">Cargando edición ...</h1>
                }

            </React.Fragment>
        );
    }
}

export default EditArticle;