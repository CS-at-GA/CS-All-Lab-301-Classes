let ball = {}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  ellipseMode(RADIUS);
  ball = {
    position: {x: width/2, y: height/2},
    movement: {x: 0.1, y: 0.1},
    r: 10,
    c: color('red')
  }
}

function draw() {
  background('white');
  fill(ball.c);
  circle(ball.position.x,ball.position.y,ball.r)
  ball.position.x += ball.movement.x;
  ball.position.y += ball.movement.y;
}