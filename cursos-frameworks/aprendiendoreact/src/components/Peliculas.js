import React, { Component } from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {

    //metodo obligatorio: render
    render() {
        //importamos el componente estatico
        return (
            <div id="peliculas">
                <h4>Soy el componente de peliculas</h4>
                <MensajeEstatico />
            </div>

        );
    }
}

export default Peliculas;