function Player(game, x, y, spriteRef) {
    Phaser.Sprite.call(this, game, x, y, spriteRef);
    game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.create = function () {}

doJump = false;
doJumpTimer = 30;

Player.prototype.update = function () {
    this.anchor.setTo(0.5, 0.5);
    gravitySpeed = 4;

    xSpeed = 0;
    ySpeed = 0;

    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //Gravity
    if (this.y < HEIGHT - (58 / 2)) {
        this.y += gravitySpeed;
    } else {
        if (upKey.isDown) {
            doJumpTimer = 30;
        }
    }

    if (rightKey.isDown) {
        xSpeed = 6;
        this.scale.setTo(1, 1);
    }

    if (leftKey.isDown) {
        xSpeed = -6;
        this.scale.setTo(-1, 1);
    }

    if (upKey.isDown) {
        doJump = true;
    }

    if (doJump == true && doJumpTimer > 0) {
        ySpeed = -doJumpTimer / 2
        doJumpTimer--;
    }

    this.x += xSpeed;
    this.y += ySpeed;

}