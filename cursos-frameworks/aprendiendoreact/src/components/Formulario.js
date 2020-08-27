import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHRef = React.createRef();
    generoMRef = React.createRef();
    generoXRef = React.createRef();


    //estado del componente
    state = {
        user: {},
        apellidos: {},
        bio: {},
        genero: {}

    }



    //metodo para uar en los formularios con onSubmit
    recibirFormulario = (e) => {
        //Bloqueamos la accion por defecto cogiendo el evento para que el formulario no recargue la pantalla
        e.preventDefault();

        //variable para distinguir el genero (H-Hombre, M-Mujer o X-Otro)
        var genero = 'H';

        if (this.generoHRef.current.checked) {
            genero = this.generoHRef.current.value;
        } else if (this.generoMRef.current.checked) {
            genero = this.generoMRef.current.value;
        } else {
            genero = this.generoXRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero,
        };

        //asignamos el valor al estado para que funcione
        this.setState({
            user: user
        });

        console.log("Formulario enviado");
        //con current.value sacamos el valor del campo del formulario
        console.log(user);
    }



    render() {
        
        if (this.state.user.nombre){
            var user = this.state.user;
        }

        return (
            <div id="formulario">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Tus datos</h1>

                        {/* Mostrar datos del formulario */}
                        
                        {
                            this.state.user.nombre &&

                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Bio: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }

                        {/* Crear un formulario con React */}

                        <form className="mid-form" id="contacto" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario} >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="nombre" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoXRef} /> Otro
                        </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn-success-form" />

                        </form>


                    </div>
                </div>

                <Sidebar
                    blog="false"
                />
            </div>
        );
    }
}

export default Formulario;