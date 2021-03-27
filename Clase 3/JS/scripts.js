//Declaracion de variables
let inventario = [
    ['Espada','Daño 15','Fuerza +1','Peso 4.0'], 
    ['Hacha','Daño 25','Fuerza +3','Peso 10.5'], 
    ['Cetro','Daño 20','Inteligencia +4', 'Peso 5.0'], 
    ['Arco','Daño 10','Agilidad +5','Peso 3.5']];

let elegir

console.log("Esto es lo que hay en tu inventario:\n");

for (let i = 0; i < inventario.length; i++) {
    console.log("<--------- Tipo: " + inventario[i][0] + " --------->\n")
    for (let j = 0; j < inventario[i].length; j++) {
        console.log(inventario[i][j]+"\n");
    }
}

while (elegir) {
    elegir = prompt(
        "Que quieres subir de nivel en la forja?\n" + "(" + inventario[0][0] + ", " + inventario[1][0] + ", " + inventario[2][0] + ", " + inventario[3][0] + ")"
    )
    switch (elegir.totoLowerCase()) {
        case espada:
            inventario[0] = ['Espada del Rey', 'Daño 35', 'Fuerza +5', 'Peso 6.0', 'Epica: los enemigos quedan relentizados con los ataques']
            break;

        default:
            break;
    }
}

