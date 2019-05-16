class Pendulum {
	constructor(startAngle, mass, startVelocity) {
		this.angle = startAngle;
		this.mass = mass;
		this.velocity = startVelocity || createVector(0, 0);
		this.gravity = createVector(0, 0.1*this.mass);
		this.acceleration = createVector(0, 0);
		this.positionx = 0;
		this.positiony = 0;
	}

	move() {
		this.velocity.add(this.acceleration);
		this.positionx += this.velocity.x;
		this.positiony += this.velocity.y;
		this.acceleration = createVector(0, 0);
		console.log(this.positionx + ', ' + this.positiony);
	}

	applyForce(force) {
		this.acceleration.add(force.div(this.mass));
	}
}