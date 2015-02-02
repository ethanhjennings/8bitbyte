var canvas;
var context;
var pixelGrid;

$(document).ready(function() {
	canvas = $("#logocanvas")[0];
	context = canvas.getContext("2d");
	pixelGrid = $.getJSON("pixelGrid.json");
	draw();
});

function time() {
	return +new Date();
}

var step = 0;
var lastTime = time();

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var x = 0; x < pixelGrid.length; x++) {
		for (var y = 0; y < pixelGrid[0].length; y++) {
			context.rect(0,0,100,300);
			context.fillStyle = "#b0b000";
			context.fill();
		}
	}

	step += 1;

	requestAnimationFrame(draw);

}