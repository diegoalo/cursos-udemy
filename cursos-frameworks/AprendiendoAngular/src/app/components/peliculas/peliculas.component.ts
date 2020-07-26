import { Component, OnInit , DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from '../../models/pelicula'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  //definimos una propiedad publica que va a ser peliculas
  //array de objetos
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() {
    //Se le da valor a ciertas prioridades de la clase, pero no debe tener lógica dentro
    //Precargar diversos valores 
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula ("Los Puentes de Madison", 1995, 'https://es.web.img2.acsta.net/medias/nmedia/18/68/46/37/20340605.jpg' ),
      new Pelicula ("Star Wars IX", 2019, 'https://bilbaoenvivo.files.wordpress.com/2020/01/star-wars-ep-9-el-ascenso-de-skywalker-0-cartel.jpg' ),
      new Pelicula ("La Historia Interminable", 1984, 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/83/80/28/19708726.jpg' ),
      new Pelicula ("La Historia Interminable II", 1990, 'https://i.pinimg.com/originals/55/77/20/557720ae3b701c6eff6b8b7a22bd18ca.jpg' ),


      /*{year: 1995, title: "Los Puentes de Madison", image: 'https://aprendizajeyvida.com/wp-content/uploads/2013/05/los-puentes-de-madison-00.jpg'},
      {year: 2019, title: "Star Wars IX", image: 'https://bilbaoenvivo.files.wordpress.com/2020/01/star-wars-ep-9-el-ascenso-de-skywalker-0-cartel.jpg'},
      {year: 1984, title: "La Historia Interminable", image: 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/83/80/28/19708726.jpg'},
      {year: 1990, title: "La Historia Interminable II", image: 'https://i.pinimg.com/originals/55/77/20/557720ae3b701c6eff6b8b7a22bd18ca.jpg'}*/

    ];
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    //Diferente de constructor, se le mete lógica y funcionalidades
    console.log("Componente iniciado");
  }

  //doCheck: Se ejecuta cada vez que hay un cambio en el componente o la app

  ngDoCheck(){
    console.log("doCheck lanzado");
  }

  //metodo cambiarTitulo
  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado!!";
  }

  //Avisa antes de que se destruya un componente
  ngOnDestroy(){
    console.log("El componente se va a eliminar de la ejecución")
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
