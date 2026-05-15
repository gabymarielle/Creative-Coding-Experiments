let x = 0;
let shape = 0;

function setup() {
  createCanvas(720, 500);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220, 220);

  translate(360, 250);

  //1st shapes
  push();
  rotate(frameCount * -0.02); //makes shapes spin slowly 
  for (let i = 0; i < 1000; i += 20) {
    noFill();
    stroke("rgb(130,128,128)");
    strokeWeight(5);
    if (shape == 0) ellipse(0, 0, i, i);
    if (shape == 1) rect(0, 0, i, i);
    if (shape == 2) rect(0, 0, i, i);
  }
  pop();

  //2nd shapes
  push();
  rotate(frameCount * 0.01);
  for (let i = 0; i < 1000; i += 15) {
    noFill();
    stroke("rgb(36,36,36)");
    strokeWeight(4);
    if (shape == 0) ellipse(10, 5, i, i);
    if (shape == 1) rect(10, 5, i, i);
    if (shape == 2) ellipse(5, 10, i, i);
  }
  pop();

  //3rd shapes
  push();
  rotate(frameCount * -0.03);
  for (let i = 0; i < 1000; i += 10) {
    noFill();
    stroke("rgb(103,103,103)");
    strokeWeight(3);
    if (shape == 0) ellipse(5, 10, i, i);
    if (shape == 1) rect(5, 10, i, i);
    if (shape == 2) triangle(10, i, i, i, i, i);
  }
  pop();
}

//changes shapes when clicked
function mousePressed() {
  shape = (shape + 1) % 3;
}
