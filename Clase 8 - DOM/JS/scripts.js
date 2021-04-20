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

    //un for para recorrer el array y agregar los elementos
    for (const arma of inventario){
        let li = document.createElement("li");
        li.innerHTML = arma.nombre + " (" + arma.tipo + ")";
        padre.appendChild(li);
    }
}

//Funcion simple para agregar un elemento al final de un array
function agregarElemento(elemento) {
    inventario.push(elemento);
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