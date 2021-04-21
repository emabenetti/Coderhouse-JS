const espada = new Arma ("Espada","Frostmourne",115,"Espada del Rey Lich");
const hacha = new Arma ("Hacha","Redforge",325,"Hacha de guerra del Dios Ifrit");
const arco = new Arma ("Arco","Silverfang",85,"Arco del antiguo héroe de los elfos");

let inventario = [espada, hacha, arco]

//Se llama una vez a la función para que cargue la lista con el array actual.
mostrarArmas();

//Se crea una nueva arma
const lanza = new Arma("Lanza", "Windbreaker", 280, "Lanza utilizada por el Dios Aqua en su guerra contra el dios del viento.")

//se definen los botones en una variable
let botonSi = document.getElementById("bEquip");
let botonNo = document.getElementById("bElim");

//se les asigna una funcion al evento onclick de cada boton
botonSi.onclick = agregarElemento;
botonNo.onclick = eliminarElemento;

//variable global para guardar la posición del arma mostrada en pantalla (índice del array)
let pos = 0;

//asignamos una funcion al evento de presionar cualquier tecla
document.onkeydown = detectaFlechas;