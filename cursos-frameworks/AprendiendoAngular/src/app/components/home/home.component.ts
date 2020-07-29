import { Component, OnInit } from '@angular/core';
//servicio de articulos
import {ArticleService} from '../../services/article.service';
//componente de articulo
import { ArticlesComponent } from '../articles/articles.component'; 
//modelo de articulo
import {Article} from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})

export class HomeComponent implements OnInit {

  public title: string;
  //propiedad articles
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
    ) {

    this.title = 'Últimos artículos';

  }

  ngOnInit(){
    
    this._articleService.getArticles(true).subscribe(
      //recibir la respuesta
      response => {
        if (response.articles) {
          this.articles = response.articles;
          console.log(this.articles);
        }else {
          //no hacemos nada
        }
      },
      //recibir el error
      error => {
        console.log(error);
      }
    );
  }

}
