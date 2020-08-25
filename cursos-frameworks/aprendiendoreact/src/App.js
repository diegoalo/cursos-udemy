import React from 'react';
import './assets/css/App.css';

//Importar componentes
//import SeccionPruebas from './components/SeccionPruebas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import Peliculas from './components/Peliculas';
import Router from './Router';


function App() {
  //JSX mezcla HTML, Javascript y demas
  //Para cargar los componentes podemos incrustarlos como una mini etiqueta HTML
  //Podemos cargarlos cuantas veces queramos

  var buttonString = "Blog";

  return (
    <div className="App">
      <Header />

      <Slider 
        title="Bienvenido al Master en Frameworks para JS"
        btn={buttonString}
      />

      <div className="center">


        <Router />
        {/* <Peliculas /> */}

        <Sidebar />
        <div className = "clearfix"></div>

      </div> {/* Fin del div center */}
      <Footer />

    </div>

  );
}

export default App;
