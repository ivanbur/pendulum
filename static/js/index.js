var pendulum;

function setup() {
	var canvas = createCanvas(640, 640);
	pendulum = new Pendulum(0, 1, 2);
}

function draw() {
	// let gravity = createVector(0, 0.1 * pendulum.mass);
	// pendulum.applyForce(0.1*pendulum.mass);
	drawBackground();
	pendulum.move();
	pendulum.draw();
}

function drawBackground() {
	fill(255, 255, 255);
	rect(0, 0, 640, 640);
}

// window.onkeypress = function() {
// 	drawBackground();
// 	pendulum.move();
// 	pendulum.draw();
// }

// gravity 9.8
// mass in kg
