let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  lua = loadImage('lua.jpg'); // Descomentei e coloquei o nome do arquivo aqui

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

  // Desenha a Terra com a textura
  texture(terra);
  sphere(80, 100);

  // --- Lua orbitando a Terra ---
  push();
  rotateY(millis() / 4000);
  translate(250, 0, 0);

  // Desenha a Lua com a nova textura
  texture(lua); // Agora a textura da lua é usada aqui
  sphere(25, 50);

  pop();
  pop();
}
