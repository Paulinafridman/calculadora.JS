var unNumero = 27;

//console.log("Mi edad es " + unNumero + " años")

unNumero = 12;

//console.log("Ahora mi edad es " + unNumero)

//La variable VAR puede cambiar su valor sin problema

const miConstante= 3;
//console.log("El valor de mi constante es " + miConstante)


/* haciendo una cuentita simple */

var op1 = 2;
var op2 = 3;
var resultado = op1 + op2;

//console.log("El resultado de la suma es " + resultado);


/*Condicionales*/

let miNumero = 6;

/** para corroborar la asignación de igualdad. Booleano */
//let resultadoPregunta = miNumero ==7;
//console.log(resultadoPregunta)


//El doble igual significa (==) ---> "Es?"
//El tripo igual significa (===) ---> "es del mismo tipo" (es mas estricto)
//distinto ---> (!=)
/*
if(miNumero ==6){
    console.log("Si, mi numero vale 6")
}else{
    console.log("No, mi numero no vale 6")
}*/


//CONDICIONAL DE TRES PARTES

/*let miNumero2 = -10;

if(miNumero2 > 0){
    console.log("miNumero es pasitivo")
}else if(miNumero2 === 0){
    console.log("Mi numero es igual a cero")
}else{
    console.log("Mi numero es negativo")
}*/

//palabra clave 



/* Buble While*/ 

/*let contador = 0

while (contador <= 10){
    console.log(contador)
    contador = contador + 1;
}*/

/*for (let i = 10000; i >= 11; i--){
    console.log(i);
}*/


/*Funciones*/

/** Una Función es como una maquinita que se le pueden pasar
 * argumentos y hace algo. La ventaja de las funciones es que
 * se pueden reutilizar. Las variables guardan un valor y las 
 * funciones guardan una funcionalidad
 */

function saludar (nombre, edad){
    console.log ("Hola, mi nombre es " + nombre);
    console.log("Y mi edad es " + edad);
}

//saludar("Paulina", 27); //Argumentos : lo que esta entre parentesis


/** Ahora vamos a ver las funciones que retornan */


function multiplicar (num1, num2){
    let resultado = num1 * num2;
    return resultado
}

//let recibidor = multiplicar (2, 5);  //si me parece muy largo, y solo quiero imprimir por pantalla: 
console.log(multiplicar (2, 5))

/** return: tiene el resultado de la funcion pero no lo muestra en la consola.
 * Sirve p/ concatenar la funcion
 */


let miArreglo = ["Paulina", "Lara", "Noelia", "Niro", "Macarena"]

//console.log(miArreglo)//--->funciona pero no se llama asi

for(let i=0; i<4; i++){
   // console.log("accediendo al indice " +i )
    let mostrar = miArreglo [i]
    //console.log(mostrar)
}


/** OBJETOS */
//son parecidos a los arreglos pero nos permiten hacer mas cosas

let persona ={
    nombre: "Paulina",
    edad: 27,
    femenino: true
}

//para agregar una nueva propiedad:
persona.comidaFavorita = "pollo al horno"
//el punto significa que estoy accediendo a la propiedad de persona




let persona2 ={
    nombre: "Kevin",
    edad:27,
    masculino: false,
}

console.log(persona)

//para acceder a una sola propiedad se agrega un ponto seguido de la propiedad:
console.log(persona2.nombre)

//para cambiar de propiedad:
console.log(persona2.edad=100)








