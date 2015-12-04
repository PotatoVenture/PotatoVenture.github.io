var canvas = $("canvas").get(0);
var ctx = canvas.getContext("2d");

var WIDTH = 800,
    HEIGHT = 600,
    FPS = 60,
    	updates = 0;

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
    p = new Player(50, 76, 64, 64, "blue");
    p.create();
    loop();
}
function loop() {
	setTimeout(function () {
		requestAnimationFrame(loop);
		update();
		render();
	}, 1000 / FPS);
}

function update() {
	p.update();
}


function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = col.black;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	p.render();

	//GUI Layer
	ctx.fillStyle = col.white;
	ctx.font = "14px Arial";
	ctx.textAlign = "right";
	ctx.fillText("Alpha 0.0.0.2", canvas.width, 14);
}

init();