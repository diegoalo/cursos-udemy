import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {

    render() {

        return (
            <div id="blog">
                <Slider
                    title="Blog de la página"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del API */}
                    </div>
                </div>

                <Sidebar
                    blog="true"
                />
            </div>
        );
    }
}

export default Blog;