//Componente mas sencillo sin metodo render para crear componentes estaticos
import React, {Component} from 'react';

const MensajeEstatico = () => {
    return (
        <h1>¡Soy el mensaje estatico!</h1>
    );
}

export default MensajeEstatico;