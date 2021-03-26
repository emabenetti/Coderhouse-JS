//Declaracion de variables

let nombreIngresado; //variable para almacenar el nombre
let nombreApellido; //variable para almacenar la cadena que contiene solo el apellido

//prompt para pedir los datos
nombreIngresado = prompt("Ingrese nombre y apellido");


//Extraer el apellido apartir del espacio encontrado, hasta el final de la cadena
nombreApellido = nombreIngresado.slice(nombreIngresado.lastIndexOf(" "));

console.log("EXTRAER APELLIDO\n"+"Nombre ingresado: "+nombreIngresado)

//Condicional que compara si el primer y ultimo indice del espacio en la oración son el mismo. Si es así, el nombre solo tiene dos palabras.
if (nombreIngresado.indexOf(" ") !== nombreIngresado.lastIndexOf(" ")) {
    //Avisa que el nombre tiene varias palabras y que el apellido puede no ser la ultima.
    console.log("El nombre ingresado es compuesto (tiene mas de dos palabras).\nLa ultima palabra de tu nombre (con suerte) es tu apellido:\n"+nombreApellido);  
} else {
    //Solo tiene dos palabras, el apellido es la ultima.
    console.log("Tipo de nombre: " + "\n No es un nombre compuesto (consta de solo dos palabras)\n" + "\nEl apellido es: " + nombreApellido);
}    
    



