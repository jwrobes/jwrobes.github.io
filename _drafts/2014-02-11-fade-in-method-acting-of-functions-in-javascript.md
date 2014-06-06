---

layout: post
title: Fade In Method Acting of Functions in Javascript

---

FADE IN:

Int. Home Office - Night

A scruffy, bearded man stares at a laptop.  His bleary eyes shoot wide.

MAN

Javascript treats treats the window, document and location all as objects!  Holy shit!

Man smiles wide.  

FADE OUT.

So we continue on the journey of my intro to Javascript where I take back from two things that I gave so much to. Java and Scripts.  And here we are at Functions and Methods.

Look in Ruby I would call a Method a Function and a Function a Method, and no one corrected me and I didn't understand why there were two words for the same thing.  And now, now I do. 

In Javascript a function is "a bunch of instructions that do things" after being called by something outside of the function or sometimes by something inside the function (RECURSION!!!!!!)  You can throw things into a function and it can throw things out.

Now, functions can be accessed differently based on how you set them up.  You can define it globally, or you can define it within another function or within an object.  But when you do that, a function changes.  It changes I tell you!

Meet the Method!  Yes, the method is always a function but a function is not always a method.  Dear god! What is this nonsense!?  Well it's just that a Method is a Function that is defined within an object.  

So last time we talked about and used some functions on strings.  Like "small man".toUppercase(); = "SMALL MAN"

You see that toUppercase() function?  That only works on String objects.  Which means it's not JUST a function it's actually a method too.  But global function which acts on everything, is not a method because it doesn't act only on one object.

And then the bomb drops.  Really.  Get ready.  Javascript has all kind of Methods for its different objects.  And some of those objects?  What are they? 

- String (boring)
- Array (meh, fine)
- Object (huh? what is that?)

And then wait for it...

- document (that's an object with its own methods? Woah!)
- window (that's also an object!  A window! imagine the things you can do!)
- location (what the freaking hell!? That's an object! Location is an object! Now my mind is blown. Boom!)

Of course you can define your own methods for built-in objects or even objects that you make up all on your own.  Damn.  I want more!  I want more!

What Makes a Function: 

Three Parts:

1. NAME: you need to call it something.  Just don't call it late\_for\_dinner.  
2. PARAMETERS: look if you want to put something in so you can do something to what you put it and maybe get something out, you need to put in parameters.  Once inside they are local variables within the instructions of the function.  Also you don't need parameters, you can pass nothing in there as well.
3. BODY: this is the the sculpted, fine collection of stuff that really is the function.  It's the stuff that does stuff to the parameters.

So how do you tee up a function?  

Well in Ruby all you need to do is just call it's name.  You have a function 

def radical(name)

puts name + " is radical"

end

you can just type: radical(Jonathan) => Jonathan is radical

and it will just work.  

Javascript needs a little more than that, it's got class, it doesn't just answer to you calling out without anything added.  It likes specifics.  It wants the parenthesis and the semi colon after. So if were going to do the same thing in Javascript it would look like this.

var radical = function(name) { console.log(name.concat(" are radical"));};

and then:
```

radical("Jonathan"); => Jonathan is radical!

```
But let's say we don't print it to the console.  You know in ruby if we do this:

def radical(name)

name + " is radical"

end

And we run radical(jonathan) => "jonathan is radical" 

It's just gets returned because of implicit return.  Ruby...oh so cool.

Javascript.  It's a little more like a teenager, it's literal. It needs to be told exactly what to do.  So if you do the same thing like this:


var radical = function(name) {name.concat(" is radical!")}; 

and then you do this:

```

radical("jonathan"); => undefined

Wait what? What about the return! 

Nope, not going to happen.  You have to tell it to return!  Like this:

var radical = function(name) {return name.concat(" is radical!)};

And then when you do this: radical("Jonathan"); => "Jonathan is radical!"

booya!

So Javascript needs a little more massaging.  A little more attention.  But I think maybe in the end it's worth it.  Because I'm going to learn to do things with the location object.

Cool.

Also, one last note about the parameters.  Like ruby you can pass not just object but variables pointed at objects into the parameters.  So for our example we could do this:

var badass = "Jonathan";

radical(badass); => "Jonathan is radical!"

Also the variable names that you pass in have nothing to do with the parameter names you use in the function.  The only thing that determines what is attached to which parameter is the order.

Okay, well that's enough for now.  Javascript.  Don't go anywhere.  I'll be seeing you soon.

 ```



