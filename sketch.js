let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  // Se tiver uma imagem para a lua, descomente a linha abaixo:
  // lua = loadImage('lua.jpg');

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

  // --- Desenha a Terra e a Lua ---

  // Começa um novo conjunto de transformações
  push();

  // Rotação da Terra
  rotateY(millis() / 8000);
  texture(terra);
  sphere(80, 100);

  // --- Desenha a Lua orbitando a Terra ---

  // Rotação para a órbita da lua (velocidade diferente)
  rotateY(millis() / 4000);

  // Posiciona a lua a uma certa distância da Terra
  translate(200, 0, 0);

  // Se tiver a imagem da lua, usa a textura. Se não, usa uma cor.
  if (lua) {
    texture(lua);
  } else {
    fill(150); // Cor cinza para a lua
  }
  sphere(20, 50); // Esfera para a lua (menor que a Terra)

  // Termina o conjunto de transformações.
  // A partir daqui, as transformações da lua e terra não afetam o resto da cena.
  pop();
}let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  // Se tiver uma imagem para a lua, descomente a linha abaixo:
  // lua = loadImage('lua.jpg');

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

  // --- Desenha a Terra e a Lua ---

  // Começa um novo conjunto de transformações
  push();

  // Rotação da Terra
  rotateY(millis() / 8000);
  texture(terra);
  sphere(80, 100);

  // --- Desenha a Lua orbitando a Terra ---

  // Rotação para a órbita da lua (velocidade diferente)
  rotateY(millis() / 4000);

  // Posiciona a lua a uma certa distância da Terra
  translate(200, 0, 0);

  // Se tiver a imagem da lua, usa a textura. Se não, usa uma cor.
  if (lua) {
    texture(lua);
  } else {
    fill(150); // Cor cinza para a lua
  }
  sphere(20, 50); // Esfera para a lua (menor que a Terra)

  // Termina o conjunto de transformações.
  // A partir daqui, as transformações da lua e terra não afetam o resto da cena.
  pop();
}let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  // Se tiver uma imagem para a lua, descomente a linha abaixo:
  // lua = loadImage('lua.jpg');

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

  // --- Desenha a Terra e a Lua ---

  // Começa um novo conjunto de transformações
  push();

  // Rotação da Terra
  rotateY(millis() / 8000);
  texture(terra);
  sphere(80, 100);

  // --- Desenha a Lua orbitando a Terra ---

  // Rotação para a órbita da lua (velocidade diferente)
  rotateY(millis() / 4000);

  // Posiciona a lua a uma certa distância da Terra
  translate(200, 0, 0);

  // Se tiver a imagem da lua, usa a textura. Se não, usa uma cor.
  if (lua) {
    texture(lua);
  } else {
    fill(150); // Cor cinza para a lua
  }
  sphere(20, 50); // Esfera para a lua (menor que a Terra)

  // Termina o conjunto de transformações.
  // A partir daqui, as transformações da lua e terra não afetam o resto da cena.
  pop();
}let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  // Se tiver uma imagem para a lua, descomente a linha abaixo:
  // lua = loadImage('lua.jpg');

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

  // --- Desenha a Terra e a Lua ---

  // Começa um novo conjunto de transformações
  push();

  // Rotação da Terra
  rotateY(millis() / 8000);
  texture(terra);
  sphere(80, 100);

  // --- Desenha a Lua orbitando a Terra ---

  // Rotação para a órbita da lua (velocidade diferente)
  rotateY(millis() / 4000);

  // Posiciona a lua a uma certa distância da Terra
  translate(200, 0, 0);

  // Se tiver a imagem da lua, usa a textura. Se não, usa uma cor.
  if (lua) {
    texture(lua);
  } else {
    fill(150); // Cor cinza para a lua
  }
  sphere(20, 50); // Esfera para a lua (menor que a Terra)

  // Termina o conjunto de transformações.
  // A partir daqui, as transformações da lua e terra não afetam o resto da cena.
  pop();
}
