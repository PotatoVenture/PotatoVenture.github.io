const SPEED = 350,
    SLIP = 10;

function Player(game, x, y, spriteRef) {
    Phaser.Sprite.call(this, game, x, y, spriteRef);
    game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.create = function () {

}

Player.prototype.update = function () {

    var jumpTimer = 0;

    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    if (upKey.isDown && this.body.onFloor() && game.time.now > jumpTimer) {
        this.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

    if (leftKey.isDown) {
        this.body.velocity.x = -SPEED;
    } else if (rightKey.isDown) {
        this.body.velocity.x = SPEED;
    } else {
        if (this.body.velocity.x != 0) {
            if (this.body.velocity.x > 0) {
                this.body.velocity.x -= SLIP;
            }

            if (this.body.velocity.x < 0) {
                this.body.velocity.x += SLIP;
            }
        }
    }
}