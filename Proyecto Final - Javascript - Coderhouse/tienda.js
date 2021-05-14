
//Meto en un array todos los botones del carrito.
let eliminarItemsCarrito = document.getElementsByClassName('btn-danger')

//Con un for loop, le agrego un event listener a cada boton dentro del array
for (let index = 0; index < eliminarItemsCarrito.length; index++) {
    var boton = eliminarItemsCarrito[index]
    boton.addEventListener('click', function(event) {
        //Guardo en una variable el boton que se clickeó en el evento
        let botonClickeado = event.target
        //uso dos veces parent Element para llegar a la fila que tengo que remover en HTML
        botonClickeado.parentElement.parentElement.remove()
        actualizarTotal()
    })
}

//Funcion para actualizar el carrito a medida que el usuario agrega o quita productos.
function actualizarTotal() {
    //Traigo el primer elemento de cart-items
    let carritoCompleto = document.getElementsByClassName('cart-items')[0]
    //Despues guardo un array con todas las filas de items del carrito
    let carritoFilas = carritoCompleto.getElementsByClassName('cart-row')

    //Ahora puedo recorrrer el array y trabajar cada item en cada iteración
    for (let index = 0; index < carritoFilas.length; index++) {
        let carritoFila = carritoFilas[index]
        let precio = carritoFila.getElementsByClassName('cart-price')[0]
        let cantidad = carritoFila.getElementsByClassName('cart-quantity-input')[0]
    }
}

