let imgRoad
let imgCar1
let imgCar2
let imgCar3
let imgActor
let imgCars

let soundTrack 
let soundCollision 
let soundPoint 

function preload() {
  imgRoad = loadImage('./assets/img/estrada.png')
  imgActor = loadImage('./assets/img/ator-1.png')
  imgCar1 = loadImage('./assets/img/carro-1.png')
  imgCar2 = loadImage('./assets/img/carro-2.png')
  imgCar3 = loadImage('./assets/img/carro-3.png')
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3]

  soundTrack = loadSound('./assets/sounds/sons_trilha.mp3')
  soundCollision = loadSound('./assets/sounds/sons_colidiu.mp3')
  soundPoint = loadSound('./assets/sounds/pontos.wav')
}