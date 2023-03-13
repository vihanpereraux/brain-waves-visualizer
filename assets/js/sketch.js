let image;
let cnvs;

function preload(){
  image = loadImage('./assets/img/image.jpg');
}

function setup() {
  cnvs = createCanvas(image.width, image.height); 
  let canvasX = (windowWidth - image.width)/2;
  let canvasY = (windowHeight - image.height)/2;
  cnvs.position(canvasX, canvasY);
}

function draw() {
  background(200);
}
