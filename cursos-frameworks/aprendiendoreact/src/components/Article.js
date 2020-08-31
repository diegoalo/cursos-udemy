import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Global from '../Global';
import Sidebar from './Sidebar';
//moment para formatear la fecha
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {

    //sacamos la URL para utilizar la informacion de la API
    url = Global.url;

    state = {
        article: false,
        status: null
    };

    //lanzamos el metodo getArticle cuando el componente se vaya a montar (Antes)
    componentWillMount() {
        this.getArticle();
    }

    //metodo para sacar el articulo
    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {
                this.setState({
                    articles: false,
                    status: 'error'
                });
            });
    }

    render() {
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">

                    {
                        /** Comprobamos si existe el titulo antes de imprimirlo */
                        article.title &&

                        <article className="article-item article-detail">
                            <h1 className="subheader">{this.state.article.title}</h1>
                            <div className="image-wrap">

                                { article.image !== null ? (
                                    <img src={"localhost:3000/get-image/" + article.image} alt={article.title} />
                                ) : (
                                        <img src="https://hipertextual.com/files/2020/08/hipertextual-pronto-podras-ver-mulan-disney-plus-pero-no-gratis-2020666122-scaled.jpg" alt="Sin imagen" />
                                    )
                                }

                            </div>

                            <span className="date date-detail">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>

                            <p>
                                {article.content}
                            </p>

                            <a href="#" className="btn-warning">Eliminar</a>
                            <a href="#" className="btn-warning">Editar</a>

                            <div id="clearfix"></div>
                        </article>
                    }


                    { /** En caso de que no haya articulo */
                        !this.state.article && this.state.status == "success" &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Inténtalo de nuevo más tarde</p>
                        </div>

                    }

                    { /** En caso de que no se haya cargado el articulo */
                        this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando</h2>
                            <p>¡No te vayas!</p>
                        </div>

                    }

                </section>

                <Sidebar />

            </div>
        );
    }
}

export default Article;