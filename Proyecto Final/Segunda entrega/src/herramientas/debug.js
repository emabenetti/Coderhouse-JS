//Todo esto es una parte de codigo que saque de un tutorial que sirve para pintar una capa de otro color
//Sirve para hacer debug de colisiones cuando algo está fallando.
const debugModo = (layer, scene) => {
    const debugGraphics = scene.add.graphics().setAlpha(0.7)
    layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });

}

export {
    debugModo
}