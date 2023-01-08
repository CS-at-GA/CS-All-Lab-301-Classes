# Constructor

The first thing we will do is write a _constructor_. This is a special function that builds (constructs) the objects specified by the class. 

```javascript
class Ball {
  constructor() {
    
  }
}
``` 

The function is meant to define and initialize the properties of the objects. 

```javascript
class Ball {
  constructor() {
    this.position = createVector(width/2,height/2),
    this.movement = createVector(1, 1),
    this.r = 10,
    this.c = color('red')    
  }
}
``` 

## `this.`

You can see that we achieve the effect by using the keyword `this`, which refers to the object itself. You see, we have to be able to talk about the object and its properties and behaviors _before_ we actually build it. We won't know in advance what an object's properties will be, but we still need to refer to them. Enter, `this`. 

## Parameters 

It isn't obvious yet, but this isn't a very good constructor. The reason is because every object we make with this constructor will have exactly the same properties, which isn't ideal. We want to be able to build a class that will handle a wide range of properties. One way we could do that is by using the `random` function inside constructor, but a better way would be to use parameters to the constructor. 

```javascript
class Ball {
  constructor(position,movement,size,color) {
    this.position = position
    this.movement = movement
    this.r = size,
    this.c = color    
  }
}
```

## Creating a Ball

Now that we have a constructor defined, we can create a ball object. We do this using the `new` keyword. Also note the other minor changes.

```javascript
let ball; // no longer a POJO

class Ball {
  constructor(position,movement,size,color) {
    this.position = position
    this.movement = movement
    this.r = size,
    this.c = color    
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  ellipseMode(RADIUS);
  ball = new Ball( // using the new keyword
    createVector(width/2,height/2), // parameters
    createVector(1, 1),
    10,
    color('red')
  ) // parenthese
}
```
