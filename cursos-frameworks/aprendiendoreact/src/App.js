import React from 'react';
import './assets/css/App.css';

//Importar componentes
//import SeccionPruebas from './components/SeccionPruebas';
/* import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; */
//import Peliculas from './components/Peliculas';
import Router from './Router';


function App() {
  //JSX mezcla HTML, Javascript y demas
  //Para cargar los componentes podemos incrustarlos como una mini etiqueta HTML
  //Podemos cargarlos cuantas veces queramos



  return (
    <div className="App">

      <Router />
      {/* <Peliculas /> */}

    </div>

  );
}

export default App;
