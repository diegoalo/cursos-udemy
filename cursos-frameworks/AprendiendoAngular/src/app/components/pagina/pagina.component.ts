import { Component, OnInit } from '@angular/core';
//Cargamos el componente del router
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellidos: string;

  constructor(
    //sacar los parámetros de la URL y con el router hacemos redirecciones
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    //recogemos parámetros de la url
    this._route.params.subscribe((params: Params) => {
        this.nombre = params.nombre;
        this.apellidos = params.apellidos;
    });

  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', "Diego", "Alonso"]);
  }

}
