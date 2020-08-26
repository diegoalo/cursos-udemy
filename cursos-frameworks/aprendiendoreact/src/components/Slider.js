import React, { Component } from 'react';

class Slider extends Component {

    //metodo del ciclo de vida
    render() {
        console.log(this.props);

        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                
                {this.props.btn &&
                    <a href="#" className="btn-white">{this.props.btn}</a>
                }

            </div>
        );
    }
}

export default Slider;