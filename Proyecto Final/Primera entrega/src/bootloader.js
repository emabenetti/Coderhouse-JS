//Este archivo cumple la funcion de precargar todos los "assets" o archivos necesarios para el juego.
//Aca se le indica a Phaser que imagenes, sonidos y archivos json vamos a estar necesitando.

class Bootloader extends Phaser.Scene {
    constructor(){
        super({key: "Bootloader"});
    }

    //Esta escena solo necesita un preload, a diferencia de jugar.js que necesita un create() y update().
    preload() {
        //importantisimo que esperemos a que todos los archivos carguen antes de llamarlos
        this.load.on("complete", () => {
            this.scene.start("Jugar");
        });

        //Un simple path para evitar andar escribiendo ./assets/etc para todos los caminos mas abajo.
        this.load.path = './assets/';

        //Esto carga un json con las animaciones del personaje principal
        this.load.json('heroe_anim', 'heroe_anim.json');

        //Un atlas es un conjunto de imagenes con un alto x ancho especifico. En este caso contiene todas las imagenes necesarias para formar las animaciones.
        this.load.atlas('heroe', 'heroe.png', 'heroe_atlas.json')
        
        //La vieja confiable para saber si vamos bien.
        console.log("preload cargado");
    }
}

//Si exportamos la clase y luego la importamos en init.js, no necesitamos agregar esto como script en el index!
export default Bootloader;