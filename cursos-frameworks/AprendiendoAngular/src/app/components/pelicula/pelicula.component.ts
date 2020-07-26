import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  //Creamos un output para devolver la pelicula que marcamos como favorita
  //Es un evento, se crea cuando damos click en el boton
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Método seleccionar, aparte de recoger el evento debemos recoger el objeto pelicula
  seleccionar(event, pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
