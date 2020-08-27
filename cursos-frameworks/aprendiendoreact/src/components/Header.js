import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
//importamos navlink para enlaces dinamicos
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/* Logo*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                    </span>
                    </div>
                    {/* Menu de la app */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>

                            <li>
                                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                            </li>

                            <li>
                                <NavLink to="/peliculas" activeClassName="active">Películas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/Diego" activeClassName="active">Página 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Clearfix para maquetacion */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;