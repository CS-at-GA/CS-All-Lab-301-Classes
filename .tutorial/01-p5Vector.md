# p5.Vector

Our first improvement here will be make use of P5's [`p5.Vector`](https://p5js.org/reference/#/p5.Vector) class, as well as the [`createVector`](https://p5js.org/reference/#/createVector) function. 

This is mostly going to feel superficial.

```javascript
let ball = {}

function setup() {
  //... p5 setup stuff
  ball = {
    position: createVector(width/2,height/2),
    movement: createVector(0.1, 0.1),
    r: 10,
    c: color('red')
  }
}

function draw() {
  background('white');
  fill(ball.c);
  circle(ball.position.x,ball.position.y,ball.r)
  ball.position.add( ball.movement )
}
```

The only real change comes when we update the position of the ball by using the `add` method that is part of the `p5.Vector`. This method allows us to easily add vectors together, without having to manually add each component. Aside from being less error-prone, it is actually a bit more intuitive.  