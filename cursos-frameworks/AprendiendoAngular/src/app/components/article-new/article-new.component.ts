import { Component, OnInit } from '@angular/core';
//importamos modelo de articulo para crear un objeto
import {Article} from '../../models/article';
//cargamos el servicio
import {ArticleService} from '../../services/article.service';
//importamos el router, los servicios de rutas y params para recoger parametros
import { Router, ActivatedRoute, Params } from '@angular/router';
//importamos global
import {Global} from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  //configuraciones de subida de imagenes
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

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
          this.status = 'success';
          this.article = response.article;
          console.log(response);
          //this._router.navigate(['/blog']);

        }else {
          this.status = 'error';
        }
      },

      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  }

}
