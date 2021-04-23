export default class Sombra extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        this.anims.play('idle_b')
                //sombra.scaleX = -1
        //sombra.body.offset.x = 60;
        //sombra.body.setCollideWorldBounds(true);
        //sombra.body.setSize(sombra.width * 0.5, sombra.height * 0.6)
        //this.physics.add.collider(sombra, capaPiso);
        //this.physics.add.collider(this.heroe, sombra);
    }
}

