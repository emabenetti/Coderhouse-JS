const espada = new Arma ("Espada","Frostmourne",115,"Espada del Rey Lich");
const hacha = new Arma ("Hacha","Redforge",325,"Hacha de guerra del Dios Ifrit");
const arco = new Arma ("Arco","Silverfang",85,"Arco del antiguo héroe de los elfos");

let inventario = [espada, hacha, arco]

console.log("Realizas un ataque con tu " + inventario[0].nombre + "\n");
inventario[0].ataque();
console.log("Realizas un ataque con tu " + inventario[1].nombre + "\n");
inventario[1].ataque();
console.log("Realizas un ataque con tu " + inventario[2].nombre + "\n");
inventario[2].ataque();