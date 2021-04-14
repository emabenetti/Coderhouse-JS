//esto todavia no está en uso. La idea es modificar aca todas las propiedades del jugador

export default class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.immovable = true;
    }
}