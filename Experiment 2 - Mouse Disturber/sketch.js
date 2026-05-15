let circles = []; //all the circles
let mouseThreshold = 50; //the barrier around the mouse
let moveDistance = 0.05; //the circles movements
let mode = 1;

function setup() {
  createCanvas(720, 500);
  noStroke();

  //this creates the 1000 random circles
  for (let i = 0; i < 1000; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: 20,
      color: color(random(255), random(255), random(255)),
    });
  }
}

//modes switch by what key you press
function keyPressed() {
  if (key == "1") mode = 1;
  if (key == "2") mode = 2;
  if (key == "3") mode = 3;
}

function draw() {
  background(220);
  
  push();  

  //if mouse is close, it pushes the circles away from the mouse
  for (let c of circles) {
    let near = dist(c.x, c.y, mouseX, mouseY) < mouseThreshold;
    if (near) {
      c.x += (c.x - mouseX) * moveDistance;
      c.y += (c.y - mouseY) * moveDistance;
    }
      
    //keeps the circles inside of the canvas
    c.x = constrain(c.x, 10, width - 10);
    c.y = constrain(c.y, 10, height - 10);

    //just have colored circles normally
    if (mode == 1) {
    fill(c.color);
    circle(c.x, c.y, 20);
    }
    //some circles grow when the mouse is near
    if (mode == 2) {
      if (near) c.size = 40;
      else c.size = 20;
      fill(c.color);
      circle(c.x, c.y, c.size);
    }
    //some circles turn red when mouse is near
    if (mode == 3) {
      if (near) fill(255, 0, 0);
      else fill(c.color);
      circle(c.x, c.y, 20);
    }

    //makes a big circle for the mouse and follows it
    fill(c.color);
    circle(mouseX, mouseY, 50);
  }
  
  pop();
  
}
