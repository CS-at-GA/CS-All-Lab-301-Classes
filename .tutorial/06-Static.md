# Static

Let's go back to that idea mentioned in the [constructor](04-Constructor.md) section about randomness. Wouldn't it be nice if we could use what we have to create `Ball` objects with random properties? Again, there are many different ways to do this, but a good way to achieve this is with a `static` method in the `Ball` class. A static method is called on _the class_ and not on _an object_ and is defined with the `static` keyword. 

```javascript
class Ball {
  //...
  
  static createRandom() {
    return new Ball(
      createVector(random(width),random(height)),
      createVector(random(-1,1),random(-1,1)),
      random(3,20),
      random(['red','orange','yellow','green','purple'])
    )
  }  
}

function setup() {
  //...
  ball = Ball.createRandom()
}

//...
```

You can use `static` for more than just creating objects, but the idea is that you have functionality associated with the class but not particular to an object of that class. 