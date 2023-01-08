# Behaviors

Now, let's define behaviors for our ball. 

Let's handle the easy cases first 

```javascript
class Ball {
  //...
  update() {
    this.position.add( this.movement );
  }

  draw() {
    fill(this.c);
    circle(this.position.x,this.position.y,this.r);
  }  
}

//... setup, etc.

function draw() {
  //...
  ball.update();
  ball.draw();
}
```

Abstracting out the complexities of how a ball works, allows us to more cleanly write the code. Of course, we still have to do the work somewhere, but things got a lot easier for us. Now, let's handle the slightly harder case of keeping our ball on the screen. 

There are many fine ways to do this, which mostly boil down to stylistic or naming differences. Here's one approach.

```javascript
class Ball {
  //...
  containWithinWindow() {
    if (this.position.x + this.movement.x + this.r > width) {
      this.position.x = width - this.r;
      this.movement.x *= -1;
    }
    if (this.position.y + this.movement.y + this.r > height) {
      this.position.y = height - this.r;
      this.movement.y *= -1;
    }
    //... other boundaries
  }

  update() {
    this.containWithinWindow();
    this.position.add(this.movement);
  }
}
```

Again you'll note that we haven't changed our fundamental code here. We have replaced `ball` with `this` and created a new function, but the work that gets done is the same-- it has just been abstracted away. This is good. 
