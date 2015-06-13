const WIDTH = 1024,
    HEIGHT = 746;

onFloor = false;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('player', 'assets/Player.png');
    game.load.image('grass', 'assets/GrassBlock.png');
}

function create() {
    game.stage.backgroundColor = '#66ffff';

    p = new Player(game, HEIGHT - 32, 0, "player");

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(p, Phaser.Physics.ARCADE);
    p.body.collideWorldBounds = true;
    game.physics.arcade.gravity.y = 250;
    p.anchor.setTo(0.5, 0.5);

}

function update() {

    //Collisions


}

function isOnFloor() {

}