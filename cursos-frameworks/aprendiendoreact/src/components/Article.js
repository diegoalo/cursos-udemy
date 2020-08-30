import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Global from '../Global';
import Sidebar from './Sidebar'

class Article extends Component {

    render() {

        return (
            <div className="center">
                <section id="content">

                        <article className="article-item article-detail">
                        <h1 className="subheader">Artículo de prueba</h1>
                        <div className="image-wrap">
                            <img src="./assets/images/ejemplo.jpg" alt="Cuentame" title="Cuentame" />

                        </div>

                        <span className="date date-detail">Hace 5 minutos</span>
                        <p>
                            Id sea utamur aperiam, te per choro accusamus consulatu. Brute munere corrumpit ut pri. Ea ipsum appareat erroribus mea.
                            Mei probo inani aliquid ad. Omnis fabulas concludaturque an vix, an noluisse takimata facilisis pro, sit te volumus mandamus.
                            Ad malorum imperdiet duo, ea possim utamur accusamus vix.
                            </p>

                        <p>
                            Est ei erat mucius quaeque.
                            Ei his quas phaedrum, efficiantur mediocritatem ne sed, hinc oratio blandit ei sed.
                            Blandit gloriatur eam et. Brute noluisse per et, verear disputando neglegentur at quo.
                            Sea quem legere ei, unum soluta ne duo. Ludus complectitur quo te, ut vide autem homero pro.
                            </p>

                        <p>
                            Vis id minim dicant sensibus. Pri aliquip conclusionemque ad, ad malis evertitur torquatos his.
                            Has ei solum harum reprimique, id illum saperet tractatos his. Ei omnis soleat antiopam quo.
                            Ad augue inani postulant mel, mel ea qualisque forensibus.Meis vocent signiferumque pri et.
                            Facilis corpora recusabo ne quo, eum ne eruditi blandit suscipiantur.
                            Mazim sapientem sed id, sea debet commune iracundia in. Eius falli propriae te usu.
                            In usu nonummy volumus expetenda, sint quando facilisis ei per, delectus constituto sea te.
                            </p>

                        <div id="clearfix"></div>
                    </article>

                </section>

                <Sidebar />

            </div>
        );
    }
}

export default Article;