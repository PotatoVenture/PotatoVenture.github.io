//Default Block
var renderBlock = function (x, y, w, h, c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
}

renderBlock.prototype.update = function () {}

renderBlock.prototype.render = function() {
	ctx.fillStyle = this.c;

	ctx.fillRect(this.x + offsetX, this.y + offsetY, this.w, this.h);
}