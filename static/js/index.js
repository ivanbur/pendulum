var pendulum;

function setup() {
	var canvas = createCanvas(640, 640);
	pendulum = new Pendulum(0, 1);
}

function draw() {
	let gravity = createVector(0, 0.1 * pendulum.mass);
	pendulum.applyForce(gravity);
	pendulum.move();
}