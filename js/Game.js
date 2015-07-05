const WIDTH = 1024,
    HEIGHT = 746;

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

    const PLAYERWIDTH = 58,
        PLAYERHEIGHT = PLAYERWIDTH;
    p = new Player(game, PLAYERWIDTH / 2, PLAYERHEIGHT / 2, 'player');

}

function update() {}