const espada = new Arma ("Espada","Frostmourne",115,"Espada del Rey Lich");
const hacha = new Arma ("Hacha","Redforge",325,"Hacha de guerra del Dios Ifrit");
const arco = new Arma ("Arco","Silverfang",85,"Arco del antiguo héroe de los elfos");

let inventario = [espada, hacha, arco]

//Se le pregunta al usuario que item quiere usar para atacar, y se muestran las opciones disponibles.
eleccion = prompt(
    "Elija su arma:\n" + "(" + inventario[0].nombre + ", " + inventario[1].nombre + ", " + inventario[2].nombre + ")"
)

//Se llama a la funcion de ataque y se le pasa como parámetro la elección del usuario
atacar(eleccion);

