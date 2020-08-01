import { Component, OnInit } from '@angular/core';
//cargamos servicio para obtener un articulo en concreto
import {ArticleService} from '../../services/article.service';
//modelo de articulo
import {Article} from '../../models/article';
//cargamos todo lo referente al router para coger parametros desde la url
import {Router, ActivatedRoute, Params } from '@angular/router';
//imagenes
import {Global} from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  //imagenes
  public url: string;

  constructor(
    //cargamos servicio de articulo
    public _articleService: ArticleService,
    //servicios de router
    private _route: ActivatedRoute,
    private _router: Router
    ) {
      this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      //recogemos el parametro id que llega por la url
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          } else {
            //redirigimos a la home
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          //redirigimos a la home
          this._router.navigate(['/home']);
        }
      );

    });

  }

}
