let terra;
let lua; // Variável para a textura da lua
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');
  // Se tiver uma imagem para a lua, descomente a linha abaixo:

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

  // Inicia as transformações para o sistema como um todo
  push();

  // Rotação do sistema Terra-Lua
  rotateY(millis() / 8000);

  // Desenha a Terra no centro
  texture(terra);
  sphere(80, 100);

  // --- Lua orbitando a Terra ---

  // Inicia um novo conjunto de transformações para a Lua
  push();

  // Rotação para a órbita da lua (velocidade diferente)
  rotateY(millis() / 4000);

  // Posiciona a lua a uma distância da Terra
  translate(250, 0, 0);

  // Se tiver a imagem da lua, usa a textura. Se não, usa uma cor.
  if (lua) {
    texture(lua);
  } else {
    fill(150); // Cor cinza para a lua
  }
  sphere(25, 50); // Esfera para a lua (menor que a Terra)

  // Termina as transformações da Lua
  pop();

  // Termina as transformações do sistema Terra-Lua
  pop();
}
