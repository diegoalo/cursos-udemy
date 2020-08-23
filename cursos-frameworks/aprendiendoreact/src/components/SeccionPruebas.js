import React, { Component } from 'react';
//componentes
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    //propiedades para los estados
    contador = 0;

    //definir el state
    //En vez de escribir todo eso, podemos hacer directamente
 /*    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    } */

    state = {
        contador: 0
    }

    //var HolaMundo = () = {} otra manera de definirlo
    HolaMundo(nombre, edad) {
        //Tener las definiciones de las variables fuera
        //Mejor practica: meter codigo de HTML entre parentesis
        //JSX previene de inyecciones de codigo y ataques SS
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3>Tengo {edad} años</h3>
          </div>);
      
        return presentacion;
      }

    render() {

        var nombre = "Diego Alonso";

        return (
            <section id="content">
                <h2 className="subheader">Últimos articulos</h2>
                <p>
                    Hola! Bienvenido al curso de React del Master
                </p>

                <h2 className="subheader">Funciones y JSX clasico</h2>
                {
                    //Dentro de las llaves podemos meter codigo de Javascript
                    this.HolaMundo(nombre, 22)
                }

                <h2 className="subheader">Componentes</h2>

                <section className="componentes">

                    <MiComponente />

                    <Peliculas />

                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>

                <p>
                    <input type="button" value="Sumar" onClick = {this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick = {this.restar.bind(this)}/>
                </p>

            </section>
        );
    }

    //metodo sumar
    sumar(e){
        //this.contador = this.contador+1;
        //this.state.contador = this.state.contador + 1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    //metodo restar
    restar(e){
        //this.contador = this.contador-1;
        //this.state.contador = this.state.contador - 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
}

export default SeccionPruebas;