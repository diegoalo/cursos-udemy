import { Component, OnInit , DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    //Se le da valor a ciertas prioridades de la clase, pero no debe tener lógica dentro
    //Precargar diversos valores 
    console.log("constructor lanzado");
    this.titulo = "Componente peliculas"
  }

  ngOnInit(): void {
    //Diferente de constructor, se le mete lógica y funcionalidades
    console.log("Componente iniciado");
  }

  //doCheck: Se ejecuta cada vez que hay un cambio en el componente o la app

  ngDoCheck(){
    console.log("doCheck lanzado");
  }

  //metodo cambiarTitulo
  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado!!";
  }

  //Avisa antes de que se destruya un componente
  ngOnDestroy(){
    console.log("El componente se va a eliminar de la ejecución")
  }

}
