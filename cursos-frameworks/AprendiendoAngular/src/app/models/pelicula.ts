//Objeto de modelo de pelicula
//Tres tipos de propiedades: public, protected y private
//Public: Dentro y fuera de los metodos del objeto clase
//Protegidas: Dentro de la clase y en las clases que la hereden
//Private: Dentro de la misma clase

//En JS cuando exportamos damos la posibilidad de usarla en cualquier fichero

export class Pelicula {

    /*
    public title: string;
    public year: number;
    public image: string;

    constructor (title, year, image){
        this.title = title;
        this.year = year;
        this.image = image;
    }
    */
   

    //Lo mismo que lo de arriba
    constructor (
        public title: string,
        public year: number,
        public image: string
    ) {
        
    }

}
 