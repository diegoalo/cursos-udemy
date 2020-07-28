//importamos injectable para poder añadir decoradores a la clase y 
//cada vez que usemos un servicio, no haber que crearlo todas las veces
import {Injectable} from'@angular/core'
import {Pelicula} from '../models/pelicula'

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula ("Los Puentes de Madison", 1995, 'https://es.web.img2.acsta.net/medias/nmedia/18/68/46/37/20340605.jpg' ),
            new Pelicula ("Star Wars IX", 2019, 'https://bilbaoenvivo.files.wordpress.com/2020/01/star-wars-ep-9-el-ascenso-de-skywalker-0-cartel.jpg' ),
            new Pelicula ("La Historia Interminable", 1984, 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/83/80/28/19708726.jpg' ),
            new Pelicula ("La Historia Interminable II", 1990, 'https://i.pinimg.com/originals/55/77/20/557720ae3b701c6eff6b8b7a22bd18ca.jpg' )
          ];
    }

    //método de ejemplo
    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular';
    }

    //método para devolver las peliculas
    getPeliculas(){
        return this.peliculas;
    }
}