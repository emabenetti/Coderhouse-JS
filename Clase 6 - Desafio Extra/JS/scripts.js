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

//Intentando usar sort me di cuenta que se le puede pasar una funcion comparadora como parámetro, pero lamentablemente esa funcion solo sirve para strings y numeros
//Asi que tuve que hacer mi propia funcion para comparar propiedades entre dos objetos

//inventario = es el array a ordenar
//eleccion = es la propiedad del objeto que el usuario eligió como índice para ordenar
//orden = contiene un string "ascendente" o "descendente" segun eligió el usuario
function ordenarObjetos(inventario, eleccion, orden) {
    //Object.keys(objeto) me permite guardar un array con los nombres de las propiedades del objeto que le pase.
    //en este caso el array "propiedades" guarda ["tipo, "nombre", "daño", "descripcion"] y eso me permite usarlo para los case
    propiedades = Object.keys(inventario[0]);
    switch (eleccion.toLowerCase()) {
        case propiedades[0]:
            //un simple if que determina si el orden va a ser ascendente o descendente
            if (orden.toLowerCase() == "ascendente") {
                //aca la magia, me llevó 4 horas hacer bien esta funcion anonima. Compara la propiedad elegida por el usuario con la del siguiente objeto
                //si encuentra que es mayor devuelve 1, si es menor -1 y sino un 0
                //esto le indica al metodo sort cual elemento debe subir o bajar en el orden
                inventario.sort((a, b) => (a[propiedades[0]] > b[propiedades[0]]) ? 1 : ((b[propiedades[0]] > a[propiedades[0]]) ? -1 : 0))
            } else if (orden.toLowerCase() == "descendente") {
                //exactamente la misma funcion pero con los signos invertidos y listo, sort descendente!
                inventario.sort((a, b) => (a[propiedades[0]] < b[propiedades[0]]) ? 1 : ((b[propiedades[0]] < a[propiedades[0]]) ? -1 : 0))
            }
            //por ultimo se llama a una funcion para mostrar el inventario en base a la propiedad elegida.
            mostrarIventario(inventario, propiedades[0])
            break;

        case propiedades[1]:
            if (orden.toLowerCase() == "ascendente") {
                inventario.sort((a, b) => (a[propiedades[1]] > b[propiedades[1]]) ? 1 : ((b [propiedades[1]] > a[propiedades[1]]) ? -1 : 0))
            } else if (orden.toLowerCase() == "descendente") {
                inventario.sort((a, b) => (a[propiedades[1]] < b[propiedades[1]]) ? 1 : ((b[propiedades[1]] < a[propiedades[1]]) ? -1 : 0))
            }
            mostrarIventario(inventario, propiedades[1])
            break;

        case propiedades[2]:
            if (orden.toLowerCase() == "ascendente") {
                inventario.sort((a, b) => (a[propiedades[2]] > b[propiedades[2]]) ? 1 : ((b[propiedades[2]] > a[propiedades[2]]) ? -1 : 0))
            } else if (orden.toLowerCase() == "descendente") {
                inventario.sort((a, b) => (a[propiedades[2]] < b[propiedades[2]]) ? 1 : ((b[propiedades[2]] < a[propiedades[2]]) ? -1 : 0))
            }
            mostrarIventario(inventario, propiedades[2])
            break;

        case propiedades[3]:
            if (orden.toLowerCase() == "ascendente") {
                inventario.sort((a, b) => (a[propiedades[3]] > b[propiedades[3]]) ? 1 : ((b[propiedades[3]] > a[propiedades[3]]) ? -1 : 0))
            } else if (orden.toLowerCase() == "descendente") {
                inventario.sort((a, b) => (a[propiedades[3]] < b[propiedades[3]]) ? 1 : ((b[propiedades[3]] < a[propiedades[3]]) ? -1 : 0))
            }
            mostrarIventario(inventario, propiedades[3])
            break;

        default:
            console.log("La propiedad elegida no existe. Intenta de nuevo.")
            break;
    }
}

//Recicle mi funcion de mostrarInventario de entregas anteriores y la modernicé para que el for sea de los que recorren objetos
//primero muestra cada propiedad individualmente en el orden que quedaron y luego el array completo desplegable por consola
function mostrarIventario(array, propiedad) {
    for (let elemento of array) {
        console.log(propiedad + ": " + elemento[propiedad])
    }
    console.log(array);
}