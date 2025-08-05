function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(105, 90, 80); //cor de fundo
  rotateY(millis()/800); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(80, 100); //esfera 3D
  
  
}
