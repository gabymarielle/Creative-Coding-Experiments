let pos = 300; //ball goes horizontal
let vel = 0; //the speed of the ball
let p1score = 0;
let p2score = 0;
let bg; //the background image 

//loads the background first before the game starts
function preload() {
  bg = loadImage('background.png');
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  noLoop();
}

function draw() {
  image(bg, 0, 0, 600, 400);

  //moves the ball
  vel *= 0.9;
  pos += vel;

  // middle line
  stroke(0);
  line(300, 0, 300, 400);

  // ball
  noStroke();
  fill(0);
  ellipse(pos, 200, 40, 40);

  // scores
  textSize(40);
  text(p1score, 150, 50);
  text(p2score, 450, 50);

  //this is if ball hits the left side first (point rewarded to 1st player)
  if (pos < 80) {
    p1score++;
    pos = 300;
    vel = 0;
    text("P1 Wins!", 300, 200);
    noLoop();
  }

  //this is if ball hits the right side first (point rewarded to 2nd player)
  if (pos > 520) {
    p2score++;
    pos = 300;
    vel = 0;
    text("P2 Wins!", 300, 200);
    noLoop();
  }
}

//when 'a' is pressed, ball goes left; when 'l' is pressed, ball goes right
function keyPressed() {
  if (key == 'a') vel -= 6;
  if (key == 'l') vel += 6;
}

//when player clicks, it will start or resume the game
function mousePressed() {
  loop();
}