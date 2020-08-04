import { Component, OnInit } from '@angular/core';
//importamos cosas de router y servicios
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //lo que pasamos a la ruta de redireccion
  public searchString: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  //metodo para buscar articulos por formulario
  goSearch(){
    this._router.navigate(['buscar', this.searchString]);
  }

}
