//Este algoritmo presenta una "mochila" con un inventario, como en un videojuego
//Para eso hice un array dentro de otro. Cada elemento de la mochila tiene a su vez las propiedades de dicho elemento.
let inventario = [
    ['Espada', 'Daño 15', 'Fuerza +1', 'Peso 4.0'],
    ['Hacha', 'Daño 25', 'Fuerza +3', 'Peso 10.5'],
    ['Cetro', 'Daño 20', 'Inteligencia +4', 'Peso 5.0'],
    ['Arco', 'Daño 10', 'Agilidad +5', 'Peso 3.5']];

//Variable para guardar un elemento individual. Su unico proposito es ser usado en la funcion agregarElemento
//Por que si hago que el usuario ingrese un array de elementos se complica demasiado para este ejemplo
let elemento = ['Daga', 'Daño 7', 'Sigilo +1', 'Peso 1.0']

console.log("Esto es lo que hay en tu inventario:\n");
mostrarIventario(inventario);

//Se le pregunta al usuario que item quiere subir de nivel, y se muestran los items actuales.
operacion = prompt("Quieres agregar o quitar un elemento del inventario? (elige solo una opción)")
modificarIventario(operacion,inventario);