let terra;
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  
  for (let i = 0; i < numEstrelas; i++) {
    estrelas[i] = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(-1000, 1000)
    };
  }
}

function draw() {
  background(0, 0, 0);
  
  for (let i = 0; i < numEstrelas; i++) {
    stroke(255);
    strokeWeight(2);
    point(estrelas[i].x, estrelas[i].y, estrelas[i].z);
  }
  
  rotateY(millis() / 8000);
  texture(terra);
  sphere(80, 100);
}
