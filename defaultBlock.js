//Default Block
var defaultBlock = function (x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
}

defaultBlock.prototype.update = function () { }

defaultBlock.prototype.render = function() {
	ctx.fillStyle = this.c;

	ctx.fillRect(this.x, this.y, this.w, this.h);
}