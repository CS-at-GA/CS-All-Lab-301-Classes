# Putting it all Together

We are now set up for multi-ball madness: 

```javascript
class Ball {
  //...
}

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(RADIUS);
  for( let i = 0; i < 10; i++ ) {
    balls.push( Ball.createRandom() );
  }
}

function draw() {
  background('white');
  for( let ball of balls ) {
    ball.update();
    ball.draw();
  }
}
```