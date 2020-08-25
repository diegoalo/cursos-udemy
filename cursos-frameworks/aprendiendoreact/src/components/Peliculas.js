/*3 momentos en el ciclo de vida de un componente
1: Cuando se monta
2: Cuando se muestra (RENDER)
3: Cuando se desmonta


---METODOS IMPORTANTES
componentDidMount: Cuando el componente está montado, se ejecita este metodo
componentDidUpdate: (Docheck en Angular) cuando se actualiza un componente se ejecuta
*/

import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {

    };

    cambiarTitulo = () => {

        //al poner keys a los elementos nos aseguramos de que React identifique cada objeto
        //y de manera dinamica pueda cambiar sus propiedades 
        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        //alert(random);
        peliculas[0].titulo = 'Finding Nemo';

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita");
        console.log(pelicula, indice);

        this.setState({
            favorita: pelicula
        });
    }

    //antes de mostrar nada en la pantalla, se ejecuta esto (Antes de montarse)
    componentWillMount() {
        // alert("Se va a montar el componente");

        this.setState({
            peliculas: [
                { titulo: 'Buscando a Nemo', image: 'https://img.milanuncios.com/fg/3091/36/309136682_1.jpg?VersionId=c0VcH4GdRLM5Y_rwF3ECm02hF_74NA3D' },
                { titulo: 'Gran Torino', image: 'https://images-na.ssl-images-amazon.com/images/I/41UYLkfwMML._AC_.jpg' },
                { titulo: 'Avatar', image: 'https://images-na.ssl-images-amazon.com/images/I/41kTVLeW1CL._AC_.jpg' }
            ],
            nombre: 'Diego Alonso',
            favorita: {}
        })
    }

    /* //ya se ha montado el componente
    componentDidMount(){
        alert("Se ha montado el componente");
    } */

    //Cuando se va a desmontar un componente
    componentWillUnmount() {
        //alert("Me voy a desmontar")
    }


    //metodo obligatorio: render
    //muestra por pantalla la vista y devuelve un resultado
    render() {
        //importamos el componente estatico

        //podemos crear el condicional fuera del metodo return tambien
        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
            <p className="favorita">
                <strong>La pelicula favorita de Diego es: </strong>
                <span>{this.state.favorita.titulo}</span>
            </p>);
        }else {
            favorita = (
                <p>No hay pelicula favorita</p> 
            );
        }


        return (
            <div id="content" className="peliculas">


                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>

                <p><button onClick={this.cambiarTitulo}>Cambiar titulo de Nemo</button></p>

                {/*
                    //En JSX ponemos condicionales de la siguiente forma, asi podemos mostrar o no el elemento
                    //solo se muestra cuando esa condicion se cumpla
                    //?: condicion ternaria ? (codigo que queremos mostrar) : (codigo que se muestra si no)
                    this.state.favorita.titulo ? (
                        <p className="favorita">
                            <strong>La pelicula favorita de Diego es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                            <p>No hay pelicula favorita</p>
                        )*/

                }

                {favorita}

                {/**Crear componente de pelicula */}

                <div id="article" className="peliculas">
                    {   
                    //Tambien se puede hacer un bucle de JS, aunque este metodo es el mas sencillo
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                //Pasamos la key (es necesario) y el objeto pelicula (props)
                                <Pelicula key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                    indice={i}
                                />
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}

export default Peliculas;