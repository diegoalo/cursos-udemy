import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad) {
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

function App() {
  //JSX mezcla HTML, Javascript y demas
  var nombre = "Diego Alonso";


  //Para cargar los componentes podemos incrustarlos como una mini etiqueta HTML
  //Podemos cargarlos cuantas veces queramos
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola! Bienvenido al curso de React del Master
        </p>
        {
          //Dentro de las llaves podemos meter codigo de Javascript
          HolaMundo(nombre, 22)
        }

        <section className="componentes">

          <MiComponente />

        </section>
      </header>

    </div>
  );
}

export default App;
