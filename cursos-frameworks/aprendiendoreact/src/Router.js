//Componente para tener el router
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//importamos componentes que cargamos en las rutas
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                {/*Configurar rutas y páginas*/}
                <Switch>
                    <Route exact path="/" component={Peliculas} />
                    <Route path="/ruta-prueba" component={SeccionPruebas} />
                    <Route path="/segunda-ruta" component={MiComponente} />

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la primera página</h1>
                            <MiComponente saludo="Hola amigo" />
                        </React.Fragment>

                    )} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;