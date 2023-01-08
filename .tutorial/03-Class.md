# Creating a Class

As mentioned, we've been using classes to create objects for a while, and using the p5.Vector class is another example. But now, we are all set up to create our own classes. Let's create a class that represents a ball. 

To start, it is going to look something like this: 

```javascript
class Ball {
  //...
}
```

## Modeling

What we are doing when we create a class is, effectively, _modeling_. We take some concept and simplify it in a way that allows us to reason programmatically about it. We are really asking ourselves two questions: 

1. What are the properties of the thing?
2. What does it do?

### Properties

We answer these questions in either order, and sometimes we go back and forth. For now, let's think about the properties of a ball. In general, we only want to think about the properties that are relevant to our program:

* location
* movement
* size
* color

### Behaviors

Now, let's think about how the object needs to behave. It needs to: 

* move
* draw itself
* check to see if it is off screen

As you can see, we've already done some of this work, but let's see how it looks in code. 