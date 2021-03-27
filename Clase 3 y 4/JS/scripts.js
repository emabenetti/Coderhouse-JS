//Este algoritmo presenta una "mochila" con un inventario, como en un videojuego
//Para eso hice un array dentro de otro. Cada elemento de la mochila tiene a su vez las propiedades de dicho elemento.
let inventario = [
    ['Espada', 'Daño 15', 'Fuerza +1', 'Peso 4.0'],
    ['Hacha', 'Daño 25', 'Fuerza +3', 'Peso 10.5'],
    ['Cetro', 'Daño 20', 'Inteligencia +4', 'Peso 5.0'],
    ['Arco', 'Daño 10', 'Agilidad +5', 'Peso 3.5']];

//variable para guardar que elementó eligió el usuario para subir de nivel
let subirNivel

//Funcion que muestra el inventario completo con un for
function mostrarIventario(mochila) {
    for (let i = 0; i < mochila.length; i++) {
        console.log("<--------- Tipo: " + mochila[i][0] + " --------->\n")
        for (let j = 0; j < mochila[i].length; j++) {
            console.log(mochila[i][j] + "\n");
        }
    }
}


console.log("Esto es lo que hay en tu inventario:\n");
mostrarIventario(inventario);

//Se le pregunta al usuario que item quiere subir de nivel, y se muestran los items actuales.
subirNivel = prompt(
    "Que quieres subir de nivel en la forja?\n" + "(" + inventario[0][0] + ", " + inventario[1][0] + ", " + inventario[2][0] + ", " + inventario[3][0] + ")"
)

//Switch con las elecciones del usuario, pasadas a minúsculas por las dudas
//Cada caso reescribe el elemento de la mochila correspondiente por uno de mejor nivel
//Y se vuelve a invocar la funcion para mostrar todo el inventario
switch (subirNivel.toLowerCase()) {
    case "espada":
        inventario[0] = ['Espada del Rey', 'Daño 35', 'Fuerza +5', 'Peso 6.0', 'Pasiva: los enemigos quedan relentizados con los ataques']
        console.log("\n\n#################### UPGRADE EXITOSO ####################")
        console.log("Esto es lo que hay en tu inventario ahora:\n");
        mostrarIventario(inventario);
        break;

    case "hacha":
        inventario[1] = ['Hacha de guerra', 'Daño 50', 'Fuerza +8', 'Peso 25.0', 'Pasiva: los ataques ignoran un 50% de la armadura']
        console.log("\n\n#################### UPGRADE EXITOSO ####################")
        console.log("Esto es lo que hay en tu inventario ahora:\n");
        mostrarIventario(inventario);
        break;

    case "cetro":
        inventario[2] = ['Cetro Volcánico', 'Daño 40', 'Inteligencia +10', 'Peso 8.0', 'Pasiva: los enemigos explotan al morir']
        console.log("\n\n#################### UPGRADE EXITOSO ####################")
        console.log("Esto es lo que hay en tu inventario ahora:\n");
        mostrarIventario(inventario);
        break;

    case "arco":
        inventario[3] = ['Arco Élfico', 'Daño 25', 'Destreza +15', 'Peso 2.0', 'Pasiva: +25% probabilidad de crítico, +50% daño crítico, +35 velocidad de ataque']
        console.log("\n\n#################### UPGRADE EXITOSO ####################")
        console.log("Esto es lo que hay en tu inventario ahora:\n");
        mostrarIventario(inventario);
        break;
    default:
        console.log("El objeto ingresado no existe en tu inventario.")
        break;
}

