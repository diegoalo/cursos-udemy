import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
//importamos articles para poder utilizarlo en la home y usar los ultimos articulos




class Home extends Component {

    render() {

        return (

            <div id="home">
                <Slider
                    title="Bienvenido al Master en Frameworks para JS"
                    btn="Blog"
                    size="slider-big"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos </h1>
                        <Articles
                            home="" true
                        />
                    </div>
                </div>

                <Sidebar />
            </div>
        );
    }
}

export default Home;