import { Component, OnInit } from '@angular/core';
//importamos modelo de articulo para crear un objeto
import {Article} from '../../models/article';
//cargamos el servicio
import {ArticleService} from '../../services/article.service';
//importamos el router, los servicios de rutas y params para recoger parametros
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;

  constructor(
    //servicios que usaremos de routing
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('','','',null,null);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success'){
          this.article = response.article;
          this.status = 'success';
          this._router.navigate(['/blog']);

        }else {
          this.status = 'error';
        }
      },

      error => {
        console.log(error);
        this.status = error;
      }
    )
  }

}
