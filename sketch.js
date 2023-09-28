let posX, posY, diam, rad;

let espe = 34;
let marge = 20;

let piso;

let velY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  piso = windowHeight - marge - espe / 2;
  diam = 50;
  rad = diam / 2;
}

function draw() {
  background(0, 255, 150, 50);

  posY += velY;

  if (posY > piso - rad) {
    velY *= -1;
  }

  noStroke();
  fill("white");
  circle(posX, posY, diam);

  fill("red");
  rect(windowWidth / 2, windowHeight - marge, windowWidth * 0.8, espe);
}
