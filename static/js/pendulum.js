class Pendulum {
	constructor(startAngle, mass, startVelocity) {
		this.angle = startAngle;
		this.mass = mass;
		this.velocity = startVelocity || 0;
		this.gravity = 9.8;
		this.acceleration = 0;
		this.l = 40;
		this.position = this.angle * this.l;
	}

	move() {
		console.log('angle: ' + (this.angle / Math.PI) + 'pi');
		this.acceleration = -this.gravity * Math.sin(this.angle) / 100;
		this.velocity += this.acceleration;
		this.position += this.velocity;
		this.angle = this.position / this.l;
		console.log(this.position);
	}

	draw() {
		fill(0, 0, 0);
		line(320, 320 - this.l, 320 + this.l * 2 * Math.sin(this.angle), 320 + this.l * 2 * Math.cos(this.angle));
		ellipse(320 + this.l * 2 * Math.sin(this.angle), 320 + this.l * 2 * Math.cos(this.angle), 50, 50);
	}

	// applyForce(force) {
	// 	this.acceleration += force/this.mass;
	// }
	//
	// updateAcceleration() {
	// 	this
	// }
}
