import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'espar'
})

export class EsParPipe implements PipeTransform {

    transform(value:any){
        var espar = "no es par";
        if (value % 2 == 0){
            espar = "sí es par";
        }



        return "El año es: "+ value+ " y "+ espar;
    }
}