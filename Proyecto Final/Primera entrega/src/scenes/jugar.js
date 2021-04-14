import Jugador from '../gameObjects/jugador.js'

//Las escenas en Phaser son como "niveles" o "pantallas".
//Esto crea una nueva escena llamada Jugar (para la pantalla principal) y extiende la clase de Phaser.Scene
export default class Jugar extends Phaser.Scene {
    constructor() {
        super({ key: "Jugar" })
    }

    //Phaser divide sus principales estructuras en preload (que lo hice en bootloader.js), create y update
    //Create sirve para inicializar variables y obviamente crear cualquier instancia necesaria
    //En este caso creamos la imagen del personaje principal y todas sus animaciones
    create() {
        //console log para revisar que llegamos bien hasta aca
        console.log("create");

        //this.heroe es basicamente una variable
        //physics.add le indica a Phaser que este objeto va a interacturar con el motor de físicas
        //sprite(x,y, imagen) es para asignarle una imagen al objeto con la ubicacion en XY y que imagen se va a usar ('heroe' se definio en el bootloader.js)
        this.heroe = this.physics.add.sprite(100, 100, 'heroe');
        
        //El heroe como viene queda muy chiquito asi que le paso esta variable para duplicarle el tamaño.
        this.heroe.setScale(2);

        //Esto crea una variable para las animaciones, y les asigna el json que habíamos cargado en bootloader.js
        this.heroe_anim = this.cache.json.get('heroe_anim');

        //Finalmente se le pasa heroe_anim a la funcion de animaciones de Phaser
        this.anims.fromJSON(this.heroe_anim);

        //Con esto podemos indicar que se ejecute una animación específica. En este caso 'idle'. 
        //Las demas animaciones posibles estan en el archivo heroe_anim.json en la carpeta assets
        this.heroe.anims.play('idle');
        
        //Esto le indica a Phaser que este objeto interactua con los bordes de la pantalla (para que no caiga para siempre)
        this.heroe.body.setCollideWorldBounds(true);
        
        //Phaser tiene una variable para inicializar las flechas, la barra y la tecla shift.
        //Resumidamente guarda un objeto con las propiedades right, left, up, down, space y shift.
        this.teclas = this.input.keyboard.createCursorKeys();

    }

    //La funcion update tiene un tick rate de 60fps. Todo lo que se coloque acá se actualiza 60 veces por segundo
    //Util para poner funciones en estructuras de control, como por ejemplo las detecciones de teclado
    update() {
        //defino una variable para la velocidad del personaje
        const vel = 100;
        
        //Ahora puedo usar las propiedades de "teclas" para comprobar si una de sus teclas está presionada
        //Para eso se puede usar isDown en caso de tecla presionada o onUp en caso de tecla leventada
        if (this.teclas.right.isDown) {
            //una vez que detecta la tecla derecha, le agrega velocidad en el eje X de forma positiva.
            this.heroe.setVelocityX(vel);
            //Esto es simplemente para indicar en que direccion apunta la imagen. El 2 es por que usamos setScale(2) en la linea 23
            this.heroe.scaleX = 2
            //Por ultimo le indico que animacion del JSON va a usar. En este caso, correr.
            this.heroe.anims.play('correr', true);
        } else if (this.teclas.left.isDown) {
            //Lo mismo pero con los valores en negativos
            this.heroe.setVelocity(-vel, 0);
            this.heroe.scaleX = -2
            this.heroe.anims.play('correr', true);
        } else {
            //Si no está presionando ninguna otra tecla, se detiene el personaje y arranca la animacion de descanso.
            this.heroe.setVelocityX(0);
            this.heroe.anims.play('idle', true);
        }

    }



}