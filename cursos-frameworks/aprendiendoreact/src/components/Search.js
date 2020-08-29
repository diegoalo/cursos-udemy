import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
//axios para la API REST (backend)

class Search extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        var searched = this.props.match.params.search;

        /* axios.get("http://localhost:3900/api/articles")
            .then(res => {
                console.log(res.data);
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }); */

        return (
            <div id="blog">
                <Slider
                    title={'Busqueda: ' + searched}
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del API */}
                        <h1 className="subheader">Listado de artículos</h1>
                        
                        <Articles 
                            search = {searched}
                        />
                        
                        {/* this.state.status === 'success' &&
                            <div>
                                {this.state.articles.map((article) => {
                                    return (<h1 key="article._id">{article.title}</h1>)
                                })}
                            </div> */
                        }

                    </div>
                </div>

                <Sidebar
                    blog="true"
                />
            </div>
        );
    }
}

export default Search;