# Lab - Classes

In this lab, we will explore the idea of _modeling_ a concept using a common technique found in many programming langauges called _Classes_. Abstractly, a class is a description of the properties of the thing we want to model and the behaviors that thing possesses. For instance, we might want to model a tree. We could say that a tree has a height, a canopy size, a trunk size, etc. These would be the properties. The behaviors are what the tree does. For instance, it grows, it changes color, ot loses its leaves, it drops seeds, etc. 

## Objects

A class is a description of the thing we want to model, but an object represents an instance of the thing itself. Continuing with our tree example, using the description above, we are saying that all trees have the properties listed and the behaviors described, but _each tree_ will have different values for those properties, and perhaps even different ways of doing the behaviors. 

In truth, we've already been using objects in this way. Consider this code: 

```javascript
const colorList = ['red','orange','yellow','green']; // this creates an array object
let numberOfColors = colorList.length; // this is accessing the `length` property of the array object
colorList.push('purple'); // this is using the pop behavior
```

When we use the behavior of an object, like we did with `push` above, we _call a method_.

## Nature of Code

In this unit, we are going to using ideas from a resource called [_The Nature of Code_](https://nature-of-code-2nd-edition.netlify.app/vectors/). 

## On to the Lab

In the [Tutorial](.tutorial/00-Overview.md), we will walk through using a new piece of functionality called a Vector to make our lives a bit easier, and then we will construct our own class. 

<!-- Footnotes -->