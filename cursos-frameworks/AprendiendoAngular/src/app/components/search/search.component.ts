import { Component, OnInit } from '@angular/core';
//importamos el router, los servicios de rutas y params para recoger parametros
import { Router, ActivatedRoute, Params } from '@angular/router';
//importamos el modelo de artiuclo
import {Article} from '../../models/article';
//importamos los servicios de articulo
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  //inyectamos el servicio y asi no lo instanciamos cada vez que queramos usarlo
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  //array de articulos
  public articles: Article [];
  //guardamos el string de la busqueda
  public search: string;

  constructor(
    //servicios que usaremos
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
   }

  ngOnInit(): void {
    //guardamos la busqueda para mostrarla en la vista

    //recoger parametros que llegan por la URL
    this._route.params.subscribe(params => {
      var search = params ['search'];
      this.search = search;
      //sacar los articulos que buscamos
      //pasamos como parametro el search de la URL, pasandolo tambien a la ruta del API
      this._articleService.search(search).subscribe(
        //funcion subscribe tiene dos funciones de callback, respuesta positiva y negativa

        //respuesta positiva
        response => {
          if(response.articles){
            this.articles = response.articles;
            console.log(this.articles);
          } else {
            //si no hay resultados
            this.articles = [];
          }
        },

        //Error
        error => {
          console.log(error);
          //le damos un valor de array vacio para que no se quede cargando
          this.articles = [];
          this._router.navigate(['/home']);
        }
      )
    })
  }

}
