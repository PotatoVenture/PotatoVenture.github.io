var canvas = $("canvas").get(0);
var ctx = canvas.getContext("2d");

var WIDTH = 800,
    HEIGHT = 600,
    FPS_CAP = 60,
    	updates = 0,
		lastRun,
		fps;

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
    p = new Player(500, 186, 64, 64, "blue");
    p.create();
    loop();




    objects = [{"id": "white_block", "x": 450, "y": 300, "w": 76, "h": 129, "c": "white"},
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
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = col.black;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

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
	ctx.fillText("Alpha 0.0.0.3", canvas.width, 14);

	ctx.textAlign = "left";
	ctx.fillText("fps " + Math.floor(fps), 10, 15);
}

init();