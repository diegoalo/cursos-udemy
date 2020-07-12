//Ejemplo con clases
//Las clases son para modelar cualquier tipo de objeto
class Coche {
    //metodo principal
    constructor(modelo, velocidad, antiguedad){
        //Cualidades del objeto
        this.modelo = modelo;
        this.velocidad= velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVel(){
        this.velocidad += 1;
    }

    reducirVel(){
        this.velocidad -= 1;
    }


}

//Herencia: Clase Autobus
class Autobus extends Coche{

    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }

    mostrarAltura (){
        return "La altura del bus es: "+this.altura;
    }

}

var autobus1 = new Autobus('PEGASUS', 200, 2017);
console.log(autobus1);

var coche1 = new Coche("BMW", 200, 2017);
var coche2 = new Coche("Audi", 100, 2018);
var coche3 = new Coche("Ferrari", 400, 2010);
var coche4= new Coche("Renault", 80, 1990);

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>")

coche1.aumentarVel();
coche1.aumentarVel();
coche1.aumentarVel();

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>")

console.log(coche2);
