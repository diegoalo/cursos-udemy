import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
//importamos global para imagenes
import {Global} from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  //imagenes
  public url: string;

  //usamos un input para conseguir el listado de articulos
  @Input() articles: Article[];

  constructor() {
    this.url = Global.url;
   }

  ngOnInit(): void {
  }

}
