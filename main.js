var canvas = $("canvas").get(0);
var ctx = canvas.getContext("2d");

var WIDTH = 800,
    HEIGHT = 600,
    FPS_CAP = 60,
    updates = 0,
	lastRun,
	fps;

var offsetX = 0;
var offsetY = 0;

var col = {
	black: "#000",
	white: "#fff"
};

canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx.fillRect(0, 0, canvas.width, canvas.height);

function init() {
    loadAssets();
}

function loadAssets() {
    start();
}

function start() {
    create();
}

function create() {
    //Creating The Player
    p = new Player(canvas.width / 2, canvas.height / 2, 64, 64, "blue");
    p.create();
    loop();




    objects = [{"id": "white_block", "x": 600, "y": 400, "w": 76, "h": 129, "c": "white"},
    			   {"id": "pink_block", "x": 200, "y" : 104, "w":  367, "h": 67, "c": "pink"}];


   //b = new defaultBlock(450, 234, 76, 129, "white");
   //b1 = new defaultBlock(200, 104, 367, 67, "pink");










}
function loop() {
	setTimeout(function () {
		requestAnimationFrame(loop);

		if (!lastRun) {
			lastRun = new Date().getTime();
			return;
		}
		var delta = (new Date().getTime() - lastRun) / 1000;
		lastRun = new Date().getTime();
		fps = 1 / delta;

		update();
		render();
	}, 1000 / FPS_CAP);
}

function update() {
	p.update();
}


function render() {
	ctx.clearRect(-1000,-1000, 2000, 2000);
	ctx.fillStyle = col.black;
	ctx.fillRect(offsetX, offsetY, canvas.width, canvas.height);

	p.render();

	//Render All Objects
	for (i = 0; i < objects.length; i ++) {
		var ref = objects[i];
		var b = new renderBlock(ref.x, ref.y, ref.w, ref.h, ref.c);
		b.render();
	}

	//GUI Layer
	ctx.fillStyle = col.white;
	ctx.font = "14px Arial";
	ctx.textAlign = "right";
	ctx.fillText("Alpha 0.0.0.3", canvas.width + offsetX, 14 + offsetY);

	ctx.textAlign = "left";
	ctx.fillText("fps " + Math.floor(fps), 10 + offsetX, 15 + offsetY);
}

init();