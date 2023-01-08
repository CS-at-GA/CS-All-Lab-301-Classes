# Bounce

Let's keep the ball on the screen. To do this, we need to

1. Understand when the ball is going to go off the screen
2. Adjust the ball's position
3. Adjust the ball's movement

We also want to speed things up a bit here. 

```javascript
let ball = {}

function setup() {
  //... p5 setup stuff
  ball = {
    position: createVector(width/2,height/2),
    movement: createVector(1, 1),
    r: 10,
    c: color('red')
  }
}

function draw() {
  background('white');
  fill(ball.c);
  if( ball.position.x + ball.movement.x + ball.r > width ) {
    ball.position.x = width - ball.r;
    ball.movement.x *= -1;
  }
  if( ball.position.y + ball.movement.y + ball.r > height ) {
    ball.position.y = height - ball.r;
    ball.movement.y *= -1;
  }
  circle(ball.position.x,ball.position.y,ball.r);
  ball.position.add( ball.movement );  
```

This obviously isn't going to keep the ball entirely on the screen, but you should see it bounce off of the right and bottom sides.[^1] 

## To Do:

Implement the rest of the bounces.

<!--Footnotes-->
[^1]: This also isn't really very 'vectory'. If this bothers you as much as it does me, I'd encourage you to read about the [`reflect`](https://p5js.org/reference/#/p5.Vector/reflect) function. 