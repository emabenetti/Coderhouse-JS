//Clase para las armas
class Arma {
    constructor(type, name, dmg, desc) {
        this.tipo = type;
        this.nombre = name;
        this.daño = dmg;
        this.descripcion = desc;
    }
    ataque() {
        console.log("Daño realizado: " + this.daño);
    }
}

//Switch con las elecciones del usuario, pasadas a minúsculas por las dudas
//Cada caso invoca el metodo de ataque del arma elegida.
function atacar(eleccion) {
    switch (eleccion.toLowerCase()) {
        case inventario[0].nombre.toLowerCase():
            console.log("Realizas un ataque con tu " + inventario[0].tipo + " " + inventario[0].nombre + "\n");
            inventario[0].ataque();
            break;

        case inventario[1].nombre.toLowerCase():
            console.log("Realizas un ataque con tu " + inventario[1].tipo + " " + inventario[1].nombre + "\n");
            inventario[1].ataque();
            break;

        case inventario[2].nombre.toLowerCase():
            console.log("Realizas un ataque con tu " + inventario[2].tipo + " " + inventario[2].nombre + "\n");
            inventario[2].ataque();
            break;
        default:
            console.log("El objeto ingresado no existe en tu inventario.")
            break;
    }
}



