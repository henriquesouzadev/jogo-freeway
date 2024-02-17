var xCarros = [200, 600, 600, 600, 600, 600]
var yCarros = [40, 96, 150, 210, 265, 318]
var velocidadeCarros = [2, 2.5, 3.5, 5, 3.3, 2.3]
var comprimentoCarro = 50;
var alturaCarro = 40

function mostraCarro() {
  for (var i = 0; i < imgCars.length; i++) {
    image(imgCars[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro() {
  for (var i = 0; i < imgCars.length; i++) {
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaCarro() {
  for (var i = 0; i < imgCars.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600
    }
  }
}