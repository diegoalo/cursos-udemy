// //alert("Hola mundo!");

// //variables
var nombre = "Diego Alonso";
var altura = 180;
var concatenate = nombre + " " + altura;

// //incluir información en la página
// //document.write(concatenate);
// //Este método es poco óptimo

// var datos = document.getElementById("datos");

// //podemos meter código html dinámicamente y directamente en una variable 
// datos.innerHTML = `

//     <h1>Soy la caja de datos<h2/>
//     <h2>Mi nombre es: ${nombre} <h2/>
//     <h3>Mido: ${altura} <h3/>
// `;

// //El problema que tiene innerHTML es que machaca el contenido de un div/elemento html
// //usamos el operador += con lo cual se añade al contenido que teníamos previamente
// //ejemplo de condicionales
// if (altura >= 185){
//     datos.innerHTML += `<h1>Eres una persona alta<h1/>`
// } else {
//     datos.innerHTML += `<h1>Eres una persona bajita<h1/>`
// }

// //bucle for
// for (var i = 2000; i<= 2020;i++){
//     //bloque de instrucciones
//     datos.innerHTML += "<h2>Estamos en el año: " +i;

// }

//funciones
function muestraNombre (nombre, altura){

    var misDatos = `
        <h1>Soy la caja de datos<h2/>
        <h2>Mi nombre es: ${nombre} <h2/>
        <h3>Mido: ${altura} <h3/> `;
    
    return misDatos;

}

function imprimir (){

    var datos = document.getElementById("datos");
    datos.innerHTML = muestraNombre("Alba", 171);
}

imprimir();

//variables con múltiples valores: arrays
var nombres = ['Victor','Diego','Alejandro'];

//alert(nombres[1]);

document.write('<h1>Listado de nombres</h1>')

//manera de recorrer un bucle for
// for (i=0;i<nombres.length;i++){
//     document.write(nombres[i] + '<br/>');
// }

//manera de recorrer un bucle 2
//funciones anónimas con funciones de flecha, más limpio
nombres.forEach((nombre) => {
    document.write(nombre+'<br/>')
});

//objetos JSON o literales
var coche = {

    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,

    //podemos crear funciones y métodos en el objeto
    mostrarDatos(){
        console.log(this.modelo,this.maxima,this.antiguedad);
        console.log(this.modelo,this.maxima,this.antiguedad);
        console.log(this.modelo,this.maxima,this.antiguedad);
    }

};

document.write('<h1>'+coche.antiguedad+'</h1>');

coche.mostrarDatos();
console.log(coche);

//Promesas
//Muy usadas en peticiones asíncronas
//Valor que puede estar disponible ahora, en el futuro o nunca

var saludar = new Promise((resolve,reject) => {

    setTimeout(() => {
        let saludo = "Hola muy buenas a todos";
        
        if (saludo){
            resolve(saludo);
        }else{
            reject("No hay saludo disponible");
        }
    }, 3000);

});

saludar.then(resultado => {
    alert(resultado);
})

.catch(err => {
    alert(error);
});