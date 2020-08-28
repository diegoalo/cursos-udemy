import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
//axios para la API REST (backend)

class Blog extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

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
                    title="Blog de la página"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del API */}

                        <Articles />
                        
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

export default Blog;