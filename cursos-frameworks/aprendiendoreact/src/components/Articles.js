import React, { Component } from 'react';
import axios from 'axios';


class Articles extends Component {

    state = {
        articles: [],
        status: null
    }

    //cargamos el metodo para poner los articulos antes que nada
    componentWillMount() {
        this.getArticles();
    }

    getArticles = () => {
        axios.get("http://localhost:3900/api/articles")
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
                            <img src="https://vertele.eldiario.es/2020/01/03/todo-series/Cuentame-Nochebuena-fallida-inesperado-Ines_2191890794_14220448_660x371.jpg" alt="Cuentame" title="Cuentame" />

                        </div>

                        <h2>{articles.title}</h2>
                        <span className="date">{articles.date}</span>
                        <a href="#">Leer más</a>

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