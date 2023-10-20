let ball;
let gravity = 0.99;
let friction = 2;
let backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width / 2, height / 2, random(1, 40));
  backgroundColor = color(random(20, 255), random(50, 100), random(100, 200));
}

function draw() {
  background(backgroundColor);

  ball.update();
  ball.display();
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.color = color(random(10, 255), random(0, 200), random(0, 200));
  }

  update() {
    this.ySpeed += gravity;
    this.xSpeed *= friction;
    this.y += this.ySpeed;
    this.x += this.xSpeed;

    if (this.y > height - this.radius / 2) {
      this.radius = random(10, 200) / 2;
      this.color = color(random(10, 255), random(0, 200), random(0, 200));
      backgroundColor = color(
        random(20, 255),
        random(50, 100),
        random(100, 200)
      );
      background(backgroundColor);
      this.y = height - this.radius / 2;
      this.ySpeed *= -1;
    }

    if (this.x > width - this.radius / 2 || this.x < this.radius / 2) {
      this.xSpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
