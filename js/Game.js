const WIDTH = 1024,
    HEIGHT = 746;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('player', 'assets/Player.png');
}

function create() {
    game.stage.backgroundColor = '#66ffff';

    var p = new Player(game, 0, 0, "player");

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(p, Phaser.Physics.ARCADE);
    p.body.collideWorldBounds = true;
    game.physics.arcade.gravity.y = 250;
    p.anchor.setTo(.5, .5);

}

function update() {

}