//Declaracion de variables

let nombreIngresado; //variable para almacenar el nombre
let encontrarEspacio; //variable para almacenar el índice de la string en el que se encuentra el espacio
let nombreApellido; //variable para almacenar la cadena que contiene solo el apellido

//prompt para pedir los datos
nombreIngresado = prompt("Ingrese nombre y apellido");

//ubicar y guardar el lugar de la cadena que tiene el primer espacio
encontrarEspacio = nombreIngresado.lastIndexOf(" ");

//Extraer el apellido apartir del espacio encontrado, hasta el final de la cadena
nombreApellido = nombreIngresado.slice(encontrarEspacio);

//Muestra todas las operaciones realizadas
alert("El nombre ingresado fue: " + nombreIngresado + "\nEl apellido comienza en la letra: " + encontrarEspacio + "\nEl apellido es: " + nombreApellido);

