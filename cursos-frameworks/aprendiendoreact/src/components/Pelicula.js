import React, { Component } from 'react';

class Pelicula extends Component {

    //metodo para marcar favorita
    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        //constante que recoja imagen y titulo
        //destructuring
        //recogemos las props del objeto obtenido en Peliculas
        const { titulo, image } = this.props.pelicula;
        //le pasamos la pelicula a la funcion de marcarFavorita (pasar datos de hijo a padre)
        const pelicula = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />

                </div>

                <h2>{titulo}</h2>
                <span className="date">Hace 5 minutos</span>
                <a href="#">Leer más</a>

                <button onClick={this.marcar}>Marcar como favorita </button>

                <div id="clearfix"></div>
            </article>
        );
    }

}

export default Pelicula;