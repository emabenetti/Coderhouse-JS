class Arma {
    constructor(type, name, dmg, desc) {
        this.tipo = type;
        this.nombre = name;
        this.daño = dmg;
        this.descripcion = desc;
    }
    ataque(){
        console.log("Daño realizado: " + this.daño);
    }
}

