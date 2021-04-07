const espada = new Arma("Espada", "Frostmourne", 115, "Espada del Rey Lich");
const hacha = new Arma("Hacha", "Redforge", 325, "Hacha de guerra del Dios Ifrit");
const arco = new Arma("Arco", "Silverfang", 85, "Arco del antiguo héroe de los elfos");
const lanza = new Arma("Lanza", "Windbreaker", 280, "Lanza utilizada por el Dios Aqua en su guerra contra el dios del viento.")

let inventario = [espada, hacha, arco, lanza]

//Se le pregunta al usuario que propiedad quiere ordenar
eleccion = prompt(
    "Puedes ordenar tu inventario en base a las siguientes propiedades:\n" +
    "Tipo, Nombre, Daño y Descripción.\n" +
    "¿En base a que propiedad te gustaría ordenar tu inventario?"
)

//Se le pregunta al usuario si quiere ordenar esa propiedad en orden ascendente o descendente
orden = prompt(
    "Tu eleccion fue ordenar tus items por: " + eleccion +
    "\nTe gustaria ordenarlos de forma ascendente o descendente?"
)

//se llama a la funcion de ordenar objetos
ordenarObjetos(inventario, eleccion, orden);

