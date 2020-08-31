import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

//validación formularios y alertas

class CreateArticle extends Component {

    render() {

        return (
            <div className="center">

                <section id="contact">

                    <h1 className="subheader">Crear artículo</h1>

                    {/* Formulario */}
                    <form className="mid-form">
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" name="title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" />
                        </div>

                        <input type="submit" value="Guardar" className="btn-success" />


                    </form>

                </section>

            </div>
        );
    }
}

export default CreateArticle;