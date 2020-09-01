import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

//validación formularios y alertas

class CreateArticle extends Component {

    url = Global.url;

    //refs para recoger los datos y aplicar formularios de React
    titleRef = React.createRef();
    contentRef = React.createRef();

    //creamos el estado para guardar la informacion
    state = {
        article: {},
        status: null
    };

    changeState = () => {
        this.setState({
            article:{
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
        .then( res => {
            //en caso de que llegue la respuesta del articulo es que todo ha ido bien
            if(res.data.article){
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            }else {
                this.setState({
                    //en caso contrario devolvemos un error
                    status: 'failed'
                });
            }
        })
        
    }

    render() {

        //si ha ido bien, redirigimos al blog para ver el articulo nuevo
        if(this.state.status === "success"){
            return <Redirect to="/blog" />;
        }

        return (
            <div className="center">

                <section id="contact">

                    <h1 className="subheader">Crear artículo</h1>

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
                            <input type="file" name="file0" />
                        </div>

                        <input type="submit" value="Guardar" className="btn-success" />


                    </form>

                </section>

                <Sidebar />

            </div>
        );
    }
}

export default CreateArticle;