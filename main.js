var canvas = $("canvas").get(0);
var ctx = canvas.getContext("2d");

var WIDTH = 896,
    HEIGHT = 504,
    FPS_CAP = 60,
    updates = 0,
	lastRun,
	fps;

var offsetX = 0;
var offsetY = 0;

var col = {
	black: "#000",
	white: "#fff",
	darkSkyBlue: "#98afc7"
};

canvas.width = WIDTH;
canvas.height = HEIGHT;

var states = {
	main: function() {
		
	},
	alt_state: function() {
		
	},
	start_menu: function() {
		
	},
	currentState: "main"
};

function init() {
	ctx.imageSmoothingEnabled = false;
	
	var sources = {
		player: "assets/images/player.png"
	};
	
    loadAssets(sources, states.main.create);
};

function loadAssets(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	
	for(var src in sources) {
        numImages++;
    }
	
	for(var src in sources) {
		images[src] = new Image();
		images[src].onload = function() {
			if(++loadedImages >= numImages) {
            	callback(images);
        	}
		};
		images[src].src = sources[src];
	}

};

states.main.create = function(images) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
    //Creating The Player
    p = new Player(canvas.width / 2, canvas.height / 2, 64, 64, images.player);
    p.create();
    loop();

    states.main.objects = [{"id": "white_block", "x": 600, "y": 400, "w": 76, "h": 129, "c": "white"},
    			   {"id": "pink_block", "x": 200, "y" : 104, "w":  367, "h": 67, "c": "pink"}];


};

function loop() {
	setTimeout(function () {
		switch(states.currentState) {
			case "main":
				requestAnimationFrame(loop);
				if (!lastRun) {
					lastRun = new Date().getTime();
					return;
				}
				var delta = (new Date().getTime() - lastRun) / 1000;
				lastRun = new Date().getTime();
				fps = 1 / delta;
				states.main.update();
				states.main.render();
				break;
			case "alt_state":
				requestAnimationFrame(loop);
				if (!lastRun) {
					lastRun = new Date().getTime();
					return;
				}
				delta = (new Date().getTime() - lastRun) / 1000;
				lastRun = new Date().getTime();
				fps = 1 / delta;
				states.alt_state.update();
				states.alt_state.render();
				break;
		}

	}, 1000 / FPS_CAP);
}

states.main.update = function() {
	p.update();
};


states.main.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = col.darkSkyBlue;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	p.render();

	//Render All Objects
	for (i = -0; i < states.main.objects.length; i ++) {
		var ref = states.main.objects[i];
		var b = new renderBlock(ref.x, ref.y, ref.w, ref.h, ref.c);
		b.render();
	}

	//GUI Layer
	ctx.fillStyle = col.white;
	ctx.font = "14px Arial";
	ctx.textAlign = "right";
	ctx.fillText("Pre-Alpha 0.0.4 - The I'm so sorry about the graphics update!", canvas.width, 14);

	ctx.textAlign = "left";
	ctx.fillText("fps " + Math.floor(fps), 10, 15);
};

init();

//Alt_State --Debuging Test State
states.alt_state.create = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    states.alt_state.objects = [{"id": "green_block", "x": 750, "y": 275, "w": 76, "h": 129, "c": "green"},
    			   {"id": "red_block", "x": 150, "y" : 350, "w":  367, "h": 67, "c": "red"}];
};

states.alt_state.update = function() {
	p.update();
};

states.alt_state.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = col.darkSkyBlue;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	p.render();
	
	//Render All Objects
	for (i = -0; i < states.alt_state.objects.length; i ++) {
		var ref = states.alt_state.objects[i];
		var b = new renderBlock(ref.x, ref.y, ref.w, ref.h, ref.c);
		b.render();
	}

	//GUI Layer
	ctx.fillStyle = col.white;
	ctx.font = "14px Arial";
	ctx.textAlign = "right";
	ctx.fillText("Pre-Alpha 0.0.4 - The I'm so sorry about the graphics update!", canvas.width, 14);

	ctx.textAlign = "left";
	ctx.fillText("fps " + Math.floor(fps), 10, 15);
};