//Funcion que muestra el inventario completo con un for
function mostrarIventario(mochila) {
    for (let i = 0; i < mochila.length; i++) {
        console.log("<--------- Tipo: " + mochila[i][0] + " --------->\n")
        for (let j = 0; j < mochila[i].length; j++) {
            console.log(mochila[i][j] + "\n");
        }
    }
}

//Funcion para quitar el ultimo elemento del inventario
function eliminarElemento(mochila) {
    let eliminado = mochila.pop()
    return eliminado;
}

//Funcion para agregar un elemento al final del inventario
function agregarElemento(mochila, elemento) {
    mochila.push(elemento)
    return mochila;
}

//Funcion que maneja los cambios en el inventario y luego los muestra, utilizando todas las funciones anteriores.
//op = tipo de operacion (agregar/quitar)
//inv = variable que contiene el array a modificar
function modificarIventario(op, inv) {
    if (op.toLowerCase() === "agregar") {
        inv = agregarElemento(inv, elemento)
        console.log("Elemento agregado: " + elemento)
        console.log("Esto es lo que hay en tu inventario ahora:\n");
        mostrarIventario(inv)
    }
    else {
        if (op.toLowerCase() === "quitar") {
            console.log("Elemento eliminado: " + eliminarElemento(inv))
            console.log("Esto es lo que hay en tu inventario ahora:\n");
            mostrarIventario(inv)
        }
        else {
            console.log("La operación ingresada no es válida. Opciones validas: agregar y quitar. Recargue la pagina e intente nuevamente")
        }
    }
}

