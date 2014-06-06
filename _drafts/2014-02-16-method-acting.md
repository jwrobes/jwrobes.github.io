---
layout: post
title: Method Acting
---

Methods are all about action.  Methods do stuff.  So let's dig a little more into method acting.

Javascript has built-in core methods that work with its global objects, like Number, Array, Boolean and String.  

Now when you call these methods on objects, you are actually calling them on _instances_ of objects.  This is why we call them...wait for it...wait...

**instance variables**

 You call a method like this:

object.methodName(parameter);

For example 

myString.toUpperCase(); = (a capitalized version of your string).

**Running instance methods on instances of objects**

Remember that because this is NOT destructive, it just returns a new version of the object, it does NOT change the object you ran the method on.  You would need to point the result to a new object to actually save whatever action the methods did.

**Chain of Command**

Now because no method is destructive in Javascript, you can't just run a method on an instance of an object and then run a new method on the object and expect it to return the results of the both methods.  This does not work that way in Javascript.

Rather it runs the method on the object, returns the result, but leaves the original object unchanged.  So when you run another method on the unchanged object, the object stays the same again.

So to solve this without creating a temporary new variable to hold the changed object.  You just CHAIN them together.

 

 

 

 

