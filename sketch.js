let terra;
let lua;
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  lua = loadImage('lua.jpg');

  for (let i = 0; i < numEstrelas; i++) {
    estrelas[i] = {
      x: random(-width, width),
      y: random(-height, height),
      z: random(-3000, -1000)
    };
  }
}

function draw() {
  background(0, 0, 0);

  // Desenha as estrelas
  for (let i = 0; i < numEstrelas; i++) {
    stroke(255);
    strokeWeight(3);
    point(estrelas[i].x, estrelas[i].y, estrelas[i].z);
  }

  // --- Sistema Terra-Lua ---
  push();
  rotateY(millis() / 8000);

  // Desenha a Terra com tamanho maior
  texture(terra);
  sphere(120, 100);

  // --- Lua orbitando a Terra ---
  push();
  rotateY(millis() / 4000);
  
  // Posiciona a lua mais longe da Terra, para não se sobrepor
  translate(350, 0, 0);

  // Desenha a Lua com tamanho maior
  texture(lua);
  sphere(40, 50);

  pop();
  pop();
}
