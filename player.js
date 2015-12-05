//Player
var Player = function (x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;

	this.getX = function () {
		return this.x;
	}

	this.getY = function () {
		return this.y;
	}

	this.setX = function (x) {
		this.x = x;
	}

	this.setY = function (y) {
		this.y = y;
	}

	this.updatePosition = function (x, y) {
		this.x = x;
		this.y = y;
	}
}

Player.prototype.create = function () {
	ctx.fillStyle = this.c;
	ctx.fillRect(this.x, this.y, this.w, this.h);
}

var Key = {
	_pressed: {},

	LEFT: 65, //A
	UP: 87, //W
	RIGHT: 68, //D
	DOWN: 83, //S

	isDown: function (keyCode) {
		return this._pressed[keyCode];
	},

	onKeyDown: function (event) {
		this._pressed[event.keyCode] = true;
	},

	onKeyUp: function (event) {
		delete this._pressed[event.keyCode];
	}
};

window.addEventListener('keyup', function (event) { Key.onKeyUp(event); }, false);
window.addEventListener('keydown', function (event) { Key.onKeyDown(event); }, false);

Player.prototype.update = function () {
	this.speed = 6;

	if (Key.isDown(Key.UP)) {
		var notcollidedspeed = -1;
		var notcollided1 = -1;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x, this.y - this.speed, this.w, this.h, target.x, target.y, target.w, target.h) ) {
				notcollidedspeed ++;
			}
			else if (!placeMeeting(this.x, this.y - 1, this.w, this.h, target.x, target.y, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.y -= this.speed;
			}
			else if (i == objects.length - 1  && i == notcollided1) {
				this.y -= 1;
			}
		}
	}

	if (Key.isDown(Key.RIGHT)) {
		var notcollidedspeed = -1;
		var notcollided1 = -1;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x + this.speed, this.y, this.w, this.h, target.x, target.y, target.w, target.h) ) {
				notcollidedspeed ++;
			}
			else if (!placeMeeting(this.x + 1, this.y, this.w, this.h, target.x, target.y, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.x += this.speed;
			}
			else if (i == objects.length - 1  && i == notcollided1) {
				this.x += 1;
			}
		}
	}

	if (Key.isDown(Key.DOWN)) {
		var notcollidedspeed = -1;
		var notcollided1 = -1;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x, this.y + 1, this.w, this.h, target.x, target.y, target.w, target.h) ) {
				notcollidedspeed ++;
			}
			else if (!placeMeeting(this.x, this.y + 1, this.w, this.h, target.x, target.y, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.y += this.speed;
			}
			else if (i == objects.length - 1  && i == notcollided1) {
				this.y += 1;
			}
		}
	}

	if (Key.isDown(Key.LEFT)) {
		var notcollidedspeed = -1;
		var notcollided1 = -1;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x - this.speed, this.y, this.w, this.h, target.x, target.y, target.w, target.h) ) {
				notcollidedspeed ++;
			}
			else if (!placeMeeting(this.x - 1, this.y, this.w, this.h, target.x, target.y, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.x -= this.speed;
			}
			else if (i == objects.length - 1  && i == notcollided1) {
				this.x -= 1;
			}
		}
	}
}
Player.prototype.render = function () {
	ctx.fillStyle = this.c;
	ctx.fillRect(this.x, this.y, this.w, this.h);
}

function placeMeeting(ax, ay, aw, ah, bx, by, bw, bh) {
	return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}