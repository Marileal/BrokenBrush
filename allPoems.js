var x = 1;
var y = 0;
var px = 0;
var py = 0;
var ease = 0.04;
var inkhue = 0;
var bright = 30;

function setup() {
  colorMode(HSB,659, 99, 99, 99);
  createCanvas(1300, 800);
  background(0, 0, 99, 100);
  strokeCap(SQUARE);
}

function draw() {
  let alfa = 50;
  stroke (inkhue, 50, bright, alfa);
  if (mouseIsPressed) {
     inkhue += 0.5;
     if (inkhue > 659) {
       inkhue = 0;
       }
    alfa += 2;
    var targetX = mouseX;
    x += (targetX - x) * ease;
    var targetY = mouseY;
    y += (targetY - y) * ease;
    var weight = 90; //(dist (x, y, px, py)) * 6;
    strokeWeight (weight);
    line(x, y, px, py);
    px = x;
    py = y;
   }
  else {
  px = mouseX;
  py = mouseY;
  x = px;
  y = py;
  }
}
