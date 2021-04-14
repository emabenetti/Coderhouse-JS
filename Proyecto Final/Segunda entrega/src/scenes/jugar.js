import Background from '../gameObjects/background.js';
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

        const ancho = this.scale.width;
        const alto = this.scale.height;

        //Guardo el mapa en una variable local. La key tiene que ser igual que el nombre definido en el bootloader
        const map = this.make.tilemap({ key: 'nivel1' });
        
        //Luego agrego las imagenes correspondientes al mapa. Como parametro hay que pasar el nombre del tileset que usamos en Tiled y el nombre de la imagen del bootloader
        const tileset = map.addTilesetImage('bosque', 'tiles');


        var bg1 = new Background('cielo_fondo');

        this.bg2 = this.add.image(0, 0, 'bosque_fondo');
        this.bg2.setOrigin(0, 0);
        this.bg2.setScrollFactor(0);

        //Con el mapa y tileset cargados y asignados a variables, podemos empezar a mostrar el nivel en pantalla.
        //Como en el programa Tiled hice un mapa por capas, hay que cargar cada una por separado.
        //Arrancando por la capa del piso, que va a ser la unica guardada en una variable por que vamos a interactuar con ella.
        //Los parametros son el mismo nombre de la capa que en el programa, y que conjunto de imagenes va a usar.
        const capaPiso = map.createLayer('Piso', tileset);
        
        //Las demas no es necesarias agregarlas a una variable, la funcion es suficiente para renderizarlas en pantalla.
        map.createLayer('Extras', tileset);
        map.createLayer('Arboles', tileset);

        //Con esto definimos que la capa del piso tenga colisiones. Para eso en Tiled se agregó la propiedad collides.
        capaPiso.setCollisionByProperty({ collides: true });
        
        //Todo esto es una parte de codigo que saque de un tutorial que sirve para pintar una capa de otro color
        //Sirve para hacer debug de colisiones cuando algo está fallando.
        const debugGraphics = this.add.graphics().setAlpha(0.7)
        capaPiso.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,134,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });
        
        //this.heroe es basicamente una variable global.
        //physics.add le indica a Phaser que este objeto va a interacturar con el motor de físicas
        //sprite(x,y, imagen) es para asignarle una imagen al objeto con la ubicacion en XY y que imagen se va a usar ('heroe' se definio en el bootloader.js)
        this.heroe = this.physics.add.sprite(300, 100, 'heroe');
        
        //El hitbox del personaje terminó siendo mas grande de lo deseado, asi que le reduzco el ancho a la mitad y el alto en un 20%
        this.heroe.body.setSize(this.heroe.width * 0.5, this.heroe.height * 0.8)

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

        //Collider le indica a Phaser que dos objetos colisionan entre si. En este caso el personaje y el piso.
        this.physics.add.collider(this.heroe, capaPiso);


        //Phaser puede simular una camara que siga al jugador.
        //Muy util cuando el mapa es mas grande que la configuración de la pantalla.
        /* this.cameras.main.startFollow(this.heroe, true); */

    }

    //La funcion update tiene un tick rate de 60fps. Todo lo que se coloque acá se actualiza 60 veces por segundo
    //Util para poner funciones en estructuras de control, como por ejemplo las detecciones de teclado
    update() {
        //defino una variable para la velocidad del personaje
        const vel = 200;
        
        //Ahora puedo usar las propiedades de "teclas" para comprobar si una de sus teclas está presionada
        //Para eso se puede usar isDown en caso de tecla presionada o onUp en caso de tecla leventada
        if (this.teclas.right.isDown) {
            //una vez que detecta la tecla derecha, le agrega velocidad en el eje X de forma positiva.
            this.heroe.setVelocityX(vel);
            //Esto es simplemente para indicar en que direccion apunta la imagen. El 2 es por que usamos setScale(2) en la linea 23
            this.heroe.scaleX = 1
            this.heroe.body.offset.x = 12;
            //Por ultimo le indico que animacion del JSON va a usar. En este caso, correr.
            this.heroe.anims.play('correr', true);
        } else if (this.teclas.left.isDown) {
            //Lo mismo pero con los valores en negativos
            this.heroe.setVelocity(-vel, 0);
            this.heroe.scaleX = -1
            this.heroe.body.offset.x = 36;
            this.heroe.anims.play('correr', true);
        } else {
            //Si no está presionando ninguna otra tecla, se detiene el personaje y arranca la animacion de descanso.
            this.heroe.setVelocityX(0);
            this.heroe.anims.play('idle', true);
        }

    }



}