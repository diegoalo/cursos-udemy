import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
//moment para formatear la fecha
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';

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

    //metodo para eliminar articulos
    deleteArticle = (id) => {

        swal({
            title: "¿Confirmar acción?",
            text: "Una vez borrado, el artículo no puede recuperarse",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {

                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });

                            swal(
                                'Artículo borrado',
                                'El artículo se ha borrado correctamente',
                                'success'
                            );


                        });
                } else {
                    swal(
                        'Acción cancelada',
                        'El artículo no se ha borrado',
                        'info'
                    );
                }
            });

    }

    render() {

        //hacemos una comprobacion para ver si hemos borrado un articulo y redirigimos
        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        }


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

                                {article.image !== null ? (
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

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id);
                                }
                            }

                                className="btn-warning">Eliminar</button>
                            
                            <Link to={"/blog/editar/" + article._id} className="btn-warning">Editar</Link>

                            <div id="clearfix"></div>
                        </article>
                    }


                    { /** En caso de que no haya articulo */
                        !this.state.article && this.state.status === "success" &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Inténtalo de nuevo más tarde</p>
                        </div>

                    }

                    { /** En caso de que no se haya cargado el articulo */
                        this.state.status === null &&
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