import React, { Component } from 'react';


class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Buscando a Nemo', image: 'https://img.milanuncios.com/fg/3091/36/309136682_1.jpg?VersionId=c0VcH4GdRLM5Y_rwF3ECm02hF_74NA3D' },
            { titulo: 'Gran Torino', image: 'https://images-na.ssl-images-amazon.com/images/I/41UYLkfwMML._AC_.jpg' },
            { titulo: 'Avatar', image: 'https://images-na.ssl-images-amazon.com/images/I/41kTVLeW1CL._AC_.jpg' }
        ],
        nombre: 'Diego Alonso'
    }

    //metodo obligatorio: render
    render() {
        //importamos el componente estatico
        return (
            <div id="content" className="peliculas">


                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>

                {/**Crear componente de pelicula */}

                <div id="article" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <article className="article-item" id="article-template">
                                    <div className="image-wrap">
                                        <img src={pelicula.image} alt={pelicula.titulo} />

                                    </div>

                                    <h2>{pelicula.titulo}</h2>
                                    <span className="date">Hace 5 minutos</span>
                                    <a href="#">Leer más</a>

                                    <div id="clearfix"></div>
                                </article>
                            )
                        })
                }
                </div>
            </div>

        );
    }
}

export default Peliculas;