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
		var notcollided1 = 0;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x + offsetX, this.y - this.speed + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h) ) {
				notcollidedspeed ++;
				notcollided1 ++;
			}
			else if (!placeMeeting(this.x + offsetX, this.y - 1 + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.y -= this.speed;
				offsetY += this.speed;
			}
			else if (i == objects.length - 1  && i < notcollided1) {
				this.y -= 1;
				offsetY ++;
			}
		}
	}

	if (Key.isDown(Key.RIGHT)) {
		var notcollidedspeed = -1;
		var notcollided1 = 0;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x + this.speed + offsetX, this.y + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h) ) {
				notcollidedspeed ++;
				notcollided1 ++;
			}
			else if (!placeMeeting(this.x + 1 + offsetX, this.y + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.x += this.speed;
				offsetX -= this.speed;
			}
			else if (i == objects.length - 1  && i < notcollided1) {
				this.x += 1;
				offsetX --;
			}






		}
	}

	if (Key.isDown(Key.DOWN)) {
		var notcollidedspeed = -1;
		var notcollided1 = 0;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x + offsetX, this.y + this.speed + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h) ) {
				notcollidedspeed ++;
				notcollided1 ++;
			}
			else if (!placeMeeting(this.x + offsetX, this.y + 1 + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.y += this.speed;
				offsetY -= this.speed;
			}
			else if (i == objects.length - 1  && i < notcollided1) {
				this.y += 1;
				offsetY --;
			}
		}
	}

	if (Key.isDown(Key.LEFT)) {
		var notcollidedspeed = -1;
		var notcollided1 = 0;
		for (i = 0; i < objects.length; i ++) {
			var target = objects[i];
			if (!placeMeeting(this.x - this.speed + offsetX, this.y + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h) ) {
				notcollidedspeed ++;
				notcollided1 ++;
			}
			else if (!placeMeeting(this.x - 1 + offsetX, this.y + offsetY, this.w, this.h, target.x + offsetX, target.y + offsetY, target.w, target.h)) {
				notcollided1 ++;
			}

			if(i == objects.length - 1 && i == notcollidedspeed) {
				this.x -= this.speed;
				offsetX += this.speed;
			}
			else if (i == objects.length - 1  && i < notcollided1) {
				this.x -= 1;
				offsetX ++;
			}
		}
	}
}
Player.prototype.render = function () {

	//offsetX -= 0.5;
	//offsetY -= 0.5;

	ctx.fillStyle = this.c;
	//ctx.fillRect(this.x + offsetX, this.y + offsetY, this.w, this.h);
	ctx.fillRect(this.x + offsetX, this.y + offsetY, this.w, this.h);
}

function placeMeeting(ax, ay, aw, ah, bx, by, bw, bh) {
	return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}