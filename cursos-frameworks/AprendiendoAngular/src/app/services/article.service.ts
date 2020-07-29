import {Injectable} from '@angular/core';
//servicios http
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
//modelo de article
import {Article} from '../models/article';
//global para usar la url
import {Global} from '../services/global';

//definimos la clase con el decorador
@Injectable()
export class ArticleService {

    //url de API
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;

    }

    pruebas(){
        return "Soy el servicio de articulos";
    }

    //obtener todos los articulos
    //parametro opcional para obtener los ultimos articulos
    getArticles(last:any = null): Observable<any>{
        //comprobamos si nos viene el parametro last
        //pasamos un parametro true para diferenciarlo
        var articles = 'articles';

        if (last != null){
            var articles = 'articles/true';
        }
        
        return this._http.get(this.url+'/articles');
    }
}