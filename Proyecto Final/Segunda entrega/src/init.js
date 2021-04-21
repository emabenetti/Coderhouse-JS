//Este archivo es la configuración básica de Phaser. Aca se indica el alto/ancho de la pantalla, las fisicas, etc

//Se importa bootloader y la escena "jugar"
import Bootloader from './bootloader.js';
import Jugar from './scenes/jugar.js';

const config = {
    width: 800,   //ancho de pantalla
    height: 224,  //alto de pantalla
    parent: "contenedor",   //en que parte del index.html esta el juego. Es el id del div
    physics: {                //Hay varios tipos de fisicas en phaser. Voy a usar arcade que son las mas faciles
        default: "arcade",
        arcade: {
            gravity: 
            {
                y: 500        //se indica gravedad verticalmente
            },
            //debug: true
        }
    },
    pixelart: true,           //le indico a Phaser que voy a estar usando pixelart en las imagenes
    scene: [                 //scene contiene un array de escenas, como por ejemplo pantalla de bienvenida, nivel 1, nivel 2, creditos, etc
        Bootloader,          //Bootloader hace referencia al archivo bootloader.js que se encarga de precargar todas las imagenes y archivos necesarios
        Jugar                //Por ahora la unica escena que tenemos
    ],
    scale: {
        zoom: 2
    }
}

new Phaser.Game(config);     //se inicializa el juego