# Overview

In this lab, we will learn how to use the [`p5.Vector`](https://p5js.org/reference/#/p5.Vector)[^1] class, as well as make our own class. 

Let's say, as an example, we wanted a circle to move around the screen. We have to keep track of its position, how its moving, and things like its size and color. Something like this: 

```javascript
let x;
let y;
let dx;
let dy;
let r;
let c;

function setup() {
  //... p5 setup stuff
  x = width/2;
  y = height/2;
  dx = 0.1;
  dy = 0.1;
  r = 10;
  c = color('red');
}

function draw() {
  background('white');
  fill(c);
  circle(x,y,r)
  x += dx;
  y += dy;
}
```

We could maybe get a bit clever and use POJOs to make our lives a little easier. 

```javascript
let position;
let movement;
let r;
let c;

function setup() {
  //... p5 setup stuff
  position = {x: width/2, y: height/2};
  movement = {x: 0.1, y: 0.1};
  r = 10;
  c = color('red');
}

function draw() {
  background('white');
  fill(c);
  circle(position.x,position.y,r)
  position.x += movement.x;
  position.y += movement.y;
}
```
And, if we were really clever, we could use POJOs again to wrap everything up in a tidy package: 

```javascript
let ball = {}

function setup() {
  //... p5 setup stuff
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
```

This is where the example code is currently. 

<!--Footnotes-->
[^1]:Vectors are mathematical constructs that are useful in many ways. You don't really need to know much about them, but some general knowledge would be good. 
