let posX, posY, diam, rad;

let espe;
let margen;
let vel;
let piso;
let acel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 0;
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  espe = 50;
  margen = 40;
  piso = windowHeight - margen - espe / 2;
  vel = 0;
  acel = 0.98;
}

function draw() {
  background(255, 150, 50);

  actualizar();

  noStroke();
  fill("white");
  circle(posX, posY, 20);

  fill("red");
  rect(windowWidth / 2, windowHeight - margen, windowWidth, espe);
}

function actualizar() {
  vel += acel;
  posY += vel;

  if (posY > piso - rad) {
    print("ya");
    vel *= -1;
    posY += vel;
  }
}
