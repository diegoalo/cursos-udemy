import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    //Obligatorias dos prioridades
    //Selector: Nombre de la etiqueta HTML que vamos a utilizar
    //También se puede ver como una directiva, todo en Angular son directivas
    selector: 'mi-componente',
    templateUrl: 'mi-componente.component.html'
    //Es mejor tener el HTML en una vista separada
})


//Exportar la clase 
export class MiComponente{

    //Podemos definir nuestras propias propiedades, dándoles valor
    //Mejor hacerlo dentro del constructor
    public comentario: string;
    public titulo: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){

        this.titulo = "Hola mundo, soy MI-COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        this.mostrarPeliculas = true;

        //tipos de datos, importante dar tipo de datos correcto

        console.log("Componente mi-componente cargado!!!!");
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}