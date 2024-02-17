function setup() {
  createCanvas(500, 400)
  // soundTrack.loop()
}

function draw() {
  background(imgRoad)
  mostraAtor()
  movimentaAtor()
  mostraCarro()
  movimentaCarro()
  voltaCarro()
  verificaColisao()
  incluirPontos()
  marcarPontos()
}