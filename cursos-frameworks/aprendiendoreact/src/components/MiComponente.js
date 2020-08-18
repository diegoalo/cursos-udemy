//importamos el modulo de react
import React, { Component } from 'react';

//Definimos el primer componente
//
class MiComponente extends Component {

    render() {

        var receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamon cocido'],
            calorias: 400
        };

        return (
            //No se pueden poner dos etiquetas en un mismo componente
            //Para solucionarlos, podemos usar lo siguiente:
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        //metemos codigo JS dentro del return
                        //map sirve para recorrer arrays 
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                //tenemos que poner la key a los elementos
                                //si queremos cambiar un elemento dinamicamente, React debe ser capaz de indentificarlo
                                <li key = {i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr />
            </div>
        );
    }


}

export default MiComponente;