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

//Se crea una nueva arma
const lanza = new Arma ("Lanza", "Windbreaker", 280, "Lanza utilizada por el Dios Aqua en su guerra contra el dios del viento.")

//Nuevo prompt para cuando el usuario encuentre una nueva arma
eleccion2 = prompt(
    "Encontraste una nueva arma: " + lanza.tipo + " " + lanza.nombre + "\nDeseas agregarla a tu inventario? Si / No"
)

//Al ser solo dos opciones, se usa un simple if/else para llamar a la funcion
if (eleccion2.toLowerCase() == "si") {
    agregarElemento(inventario,lanza)
} else {
    console.log("Cuando le das la espalda al arma, un pequeño goblin aparece corriendo y se lleva la lanza a la velocidad del rayo.")
}