import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Slider from './Slider';

//validación formularios y alertas

class CreateArticle extends Component {

    url = Global.url;

    //refs para recoger los datos y aplicar formularios de React
    titleRef = React.createRef();
    contentRef = React.createRef();

    //creamos el estado para guardar la informacion
    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
            }
        });

    }


    //metodo para añadir funcionalidad de Formularios a React
    saveArticle = (e) => {
        e.preventDefault();

        //Rellenamos el state con el formulario
        this.changeState();

        //Hacemos una peticion HTTP por POST para guardar el articulo
        Axios.post(this.url + 'save', this.state.article)
            .then(res => {
                //en caso de que llegue la respuesta del articulo es que todo ha ido bien
                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: 'waiting'
                    });

                    //subir el archivo (la imagen)
                    if (this.state.selectedFile !== null){

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
                            if(res.data.article){
                                this.setState({
                                    article: res.data.article,
                                    status: 'success'
                                });
                            }else{
                                this.setState({
                                    article: res.data.article,
                                    status: 'failed'
                                });
                            }
                        });

                    }else{
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

    }

    //metodo para la subida de imagenes
    fileChange = (event) => {
        //actualizamos el state seleccionando el archivo que seleccionamos (Viene en un array, seria el primero)
        this.setState({
            selectedFile: event.target.files[0]
        });

        console.log(this.state);
    }

    render() {

        //si ha ido bien, redirigimos al blog para ver el articulo nuevo
        if (this.state.status === "success") {
            return <Redirect to="/blog" />;
        }

        return (

            <React.Fragment>

                <Slider
                    title="Nuevo artículo"
                    size="slider-small"
                />
                <div className="center">

                    <section id="contact">


                        <h1 className="subheader">Rellena los datos</h1>

                        {/* Formulario */}
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" ref={this.contentRef} onChange={this.changeState} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange}/>
                            </div>

                            <input type="submit" value="Guardar" className="btn-success" />


                        </form>

                    </section>

                    <Sidebar />


                </div>

            </React.Fragment>
        );
    }
}

export default CreateArticle;