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

//Funcion para mostrar las armas como una lista desordenada en el HTML
function mostrarArmas() {
    //Identifico el elemento padre <ul>
    let padre = document.getElementById("listaArmas");

    //Esto es para borrar el contenido de <ul> 
    //por que si llamas varias veces a la funcion va a agregar todos los elementos de nuevo como <li>
    //esto asegura que lo mostrado siempre es SOLAMENTE lo que tiene adentro el array
    padre.innerHTML = "";

    //Se crean 3 elementos li iniciales. La funcion detectaTeclas se va a encargar de cambiar el elemento li del arma, dejando las flechas sin tocar
    let li = document.createElement("li");
    let izq = document.createElement("izq");
    let der = document.createElement("der");
    li.innerHTML = inventario[0].nombre + " (" + inventario[0].tipo + ")";
    izq.innerHTML = "< - ";
    der.innerHTML = " - >";

    padre.appendChild(izq);
    padre.appendChild(li);
    padre.appendChild(der);
}

//Funcion simple para agregar un elemento al final de un array
function agregarElemento() {
    inventario.push(lanza);
    //Elimina el div para que no pueda seguir agregando la misma arma
    eliminarElemento();
    //Finalmente muestra el nuevo array
    mostrarArmas();

}


//Funcion para eliminar la seccion que pregunta por el nuevo arma
//Se llama a esta función cuando el usuario presiona alguno de los botones.
function eliminarElemento() {
    //Guardo el div en una variable
    let div = document.getElementById("encuentro");
    //Elimino el div haciendo referencia a su elemento padre.
    div.parentNode.removeChild(div);
}

//funcion que detecta el evento de teclas presionada y realiza acciones si esas teclas eran la flecha izq o der
function detectaFlechas(e) {
    //guardo en una variable el elemento li creado en la función mostrarArmas()
    let lista = document.getElementsByTagName("li");
    switch (e.keyCode) {
        //37 es el keycode para la flecha izq
        case 37:
            //se comprueba que no restemos por debajo de cero, no existen indices negativos en el array
            if (pos > 0) {
                pos--;
                lista[0].innerHTML = inventario[pos].nombre + " (" + inventario[pos].tipo + ")";
            }
            break;
        //39 es el keycode para la flecha der
        case 39:
            //se comprueba que no sumemos por encima del ultimo objeto del array
            if (pos < inventario.length-1) {
                pos++;
                lista[0].innerHTML = inventario[pos].nombre + " (" + inventario[pos].tipo + ")";
            }
            break;
    }
}