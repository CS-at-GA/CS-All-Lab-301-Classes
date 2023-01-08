# Lab 301 - Classes

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

In this unit, we are going to using ideas from a resource called [_The Nature of Code_](https://natureofcode.com/). It is an excellent (and free) resource, but the code examples provided in the book are **not** in JavaScript, but rather in Processing, which is built on top of Java. The languages are similar enough to understand what is happening, but different in important ways. If you use this resource, and I certainly encourage you to, you'll need to do a bit of translating.

### Translating from Java to JavaScript

The biggest differences you'll see (aside from naming differences between P5 and Processing) are byproducts of the fact that Java is a _typed_ language (meaning that the types of variables must be declared) and JavaScript is not. In Java, if you want a variable to have an integer value you would say `int x = 5;`. In JavaScript, you would just say `let x = 5;`[^1]. This manifests in three important ways in terms of translating the examples:

1. Variable declarations, as we've already talked about. To translate from Java to JavaScript, replace the types you see (`int`, `float`, `double`, `String`, etc.) with `let` or `const`[^2]. 
2. Function return types. In Java, when you write a function you have to say what type that function returns. It could return an integer, a String, a true/false value, or even nothing. So, you'll see things like, `int sum(...)` or `void update(...)`[^3]. To translate from Java to JavaScript, omit the types. 
3. Parameter types. These are really the same as variable declarations. You'll see something like `int sum( int a, int b )` specifying that the function requires to integer parameters.[^4] As above, simply omit the types to translate.  

## On to the Lab

In the [Tutorial](.tutorial/00-Overview.md), we will walk through using a new piece of functionality called a Vector to make our lives a bit easier, and then we will construct our own class. 

<!-- Footnotes -->
[^1]: The punchline being that if you try to assign a non-integer value to `x` in Java, you will get a compliation error _before_ your program runs, which is considered safe. In JavaScript, you're free to assign anything to you want to x, meaning that if you are expecting an integer but get, say, a string, your program will not function as expected and, likely, will be difficult to debug. 
[^2]: Remember that we try not to use `var`.
[^3]: In Java, you also have declare the visibility of functions, so you will sometimes see `public`, `private`, or `protected` in front of the declaration: `public int sum(...)`, `private void update(...)`. Simply omit these in translation. 
[^4]: Again, if you tried to pass non-integers into this method, the program wouldn't compile. 
