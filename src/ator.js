var xAtor = 237
var yAtor = 366
var colisao = false
var meusPontos = 0

function mostraAtor() {
  image(imgActor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 366) {
      yAtor += 3
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    if (xAtor > 1) {
      xAtor -= 3
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (xAtor < 369) {
      xAtor += 3
    }
  }
}

function verificaColisao() {
  for (var i = 0; i < imgCars.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)

    if (colisao) {
      voltaAtor()
      soundCollision.play()

      if (meusPontos > 0) {
        meusPontos -= 1
      }
    }
  }
}

function voltaAtor() {
  yAtor = 366
}

function incluirPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, width / 2, 27)
}

function marcarPontos() {
  if (yAtor < 15) {
    meusPontos += 1
    soundPoint.play()
    voltaAtor()
  }
}