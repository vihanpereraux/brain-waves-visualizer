let img;
let newCanvas;

function preload(){
  img = loadImage("assets/img/image.jpg");
}

function setup() {
  background(100);
  
  newCanvas = createCanvas(img.width, img.height);
  let canvasX = (windowWidth - img.width)/2;
  let canvasY = (windowHeight - img.height)/2;
  newCanvas.position(canvasX, canvasY);

  let c = img.get(0, 0);

  let rows;
  let cols;
  for (rows = 1; rows < img.height; rows++) {
    for (cols = 1; cols < img.width; cols++){
        let c = img.get(cols, rows);
        stroke(c[0], c[1], c[2]);
        point(cols, rows);
    }
  }
}