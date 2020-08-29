import React, { Component } from 'react';
import axios from 'axios';
//importamos variable global
import Global from '../Global'
//importamos libreria para formatear las fechas
import Moment from 'react-moment';
import 'moment/locale/es';
//importamos link para los enlaces de los articulos individuales
import {Link} from 'react-router-dom';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    //cargamos el metodo para poner los articulos antes que nada
    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if(home === "true"){
            this.getLastArticles();
        }else if(search && search != null && search != undefined){
            this.getArticlesBySearch(search);
        }else {
            this.getArticles();
        }

    }

    //metodo de busqueda de articulos
    getArticlesBySearch = (searched) => {
        axios.get(this.url + "search/" + searched)
            .then(res => {

                if(res.data.articles){
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });
                }else{
                    this.setState({
                        articles: res.data.articles,
                        status: 'failed'
                    });
                }
            });
    }

    getLastArticles = () => {
        axios.get(this.url + "/articles/last")
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                console.log(this.state);
            });
    }

    getArticles = () => {
        axios.get(this.url + "/articles")
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                console.log(this.state);
            });
    }

    render() {

        if (this.state.articles.length >= 1) {

            //mostrar todos los articulos del blog
            var listArticles = this.state.articles.map((articles) => {
                return (
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            {articles.image !== null ? (
                                <img src={this.url + "/get-image/"+articles.image} alt={articles.title} />
                            ):(
                                <img src="https://assets.afcdn.com/album/D20190312/phalbm25728892.jpg" alt = "Sin imagen" />
                            )
                            }
                            

                        </div>

                        <h2>{articles.title}</h2>
                        <span className="date">
                            <Moment locale= "es" fromNow>{articles.date}</Moment></span>
                        <Link to={'/blog/articulo/'+articles._id}>Leer más</Link>

                        <div id="clearfix"></div>
                    </article>
                );
            });



            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        } else if (this.state.articles.length == 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay artículos</h2>
                    <p>Sin contenido en esta sección</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando ...</h2>
                    <p>¡No te muevas!</p>
                </div>
            );
        }

    }


}

export default Articles;