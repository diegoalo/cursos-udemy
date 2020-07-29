import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import {Article} from '../../models/article'
import {Global} from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]

})
export class BlogComponent implements OnInit {

  public articles: Article[];
  //conseguir mostrar imagenes
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
   }

  ngOnInit(){
    this._articleService.getArticles().subscribe(
      //recibir la respuesta
      response => {
        if (response.articles) {
          this.articles = response.articles;
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
