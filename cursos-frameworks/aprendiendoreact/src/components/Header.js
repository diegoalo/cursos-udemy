import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/* Logo*/ }
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                    </span>
                    </div>
                    {/* Menu de la app */ }
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="./index.html">Inicio</a>
                            </li>

                            <li>
                                <a href="./blog.html">Blog</a>
                            </li>

                            <li>
                                <a href="./formulario.html">Formulario</a>
                            </li>

                            <li>
                                <a href="./article.html">Pagina 1</a>
                            </li>
                            <li>
                                <a href="./article.html">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Clearfix para maquetacion */ }
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;