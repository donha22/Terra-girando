let terra;
let estrelas = [];
let numEstrelas = 500;

function setup() {
  createCanvas(1920, 1080, WEBGL);
  terra = loadImage('terra.jpg');

  for (let i = 0; i < numEstrelas; i++) {
    estrelas[i] = {
      // Posições X e Y maiores
      x: random(-width, width),
      y: random(-height, height),
      // Z negativo e distante para que as estrelas fiquem no fundo
      z: random(-3000, -1000)
    };
  }
}

function draw() {
  background(0, 0, 0);

  // Desenha as estrelas
  for (let i = 0; i < numEstrelas; i++) {
    stroke(255); // Cor branca para as estrelas
    strokeWeight(3); // Aumenta o tamanho do ponto para ser visível
    point(estrelas[i].x, estrelas[i].y, estrelas[i].z);
  }

  // Rotação da terra
  rotateY(millis() / 8000); // Diminuí a velocidade da rotação para ficar mais suave
  texture(terra);
  sphere(80, 100);
}
