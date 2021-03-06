---

layout: post
title: An Array of Light

---

```
So arrays are important.  They are the closets of programming.  It's where you put stuff.  If you have more than one thing you can't put it in a variable, you need to put it in an array. 

So like any closet you need to be able to put stuff in, take stuff out, and use stuff in the closet by locating it in there.  

But arrays are magical in that they have no limit on what they take and how much.  They can take any object that the language has.  They will hold it all.  And so the things you can do to arrays have to apply to any object.  So you can't just do math to everything in an array because maybe there are strings in the array and you can't do math on strings.  

And so arrays have a lot of tools.  But all those tools must work on any object whatsoever.

Now Arrays in Ruby vs Arrays in Javascript:

The basics of arrays are quite similar.  You declare them in the same way.  They both have indexes that start with 0.  So you can define an array by doing this:

var tom = ['tom', 'tommy', 'thomas'];

And now you have an array named tom.  And it has three string objects.  And just like as in Ruby each of those objects can be called using an index that starts at 0.  

So tom[0]; === 'tom' and tom[2]; === 'thomas'

I like arrays in ruby.  There are a ton of awesome methods that work on arrays in ruby.  More than I have been able to memorize.  But javascript doesn't have as many.  You can probably do everything to an array in Javascript that you can do in Ruby, it's just not going to be as quick and easy.

The first example is Array.first and Array.last()

This works just like it sounds in Ruby.  Returns the first object or last object in an array.

But in Javascript you'll get an error.  You need to do some other stuff.  

Getting the first thing is easy.  Let's use tom array.  How do I get the first one?

Well tom[0];

But what about the last one if I didn't know how many objects were in it?

Well I would have to get the number of objects in it.  In ruby I could do tom.length or tom.size

Well, in Javascript tom.length will work.  But it's a little sneaky, because it doesn't work in the same way that it does in Ruby.  In Ruby length is just another method.  But in Javascript length is a _property.   **In Javascript, objects have properties and methods.** _ Methods required the () and properties don't.  So when we to do tom.length in Javascript, where' just getting the property of our array.

So tom.length === 3 because there are three objects in there.  So how do we get the last one?

We have to call the last index, which is 2, not 3, because the index starts a 0 and not 1.  So, instead of being able to do tom.last we have to do this:

tom[tom.length - 1]; 

That equals tom[2]; 

And that equals 'thomas'.

So that's one big example of how ruby arrays have a lot of shortcuts that required a little more coding in Javascript.  There are a lot of other examples of the same thing, where you can run a method in ruby to do something to an array, but you have to spell it out in Javascript.

If you want to see if an array is empty, you can't just do array.empty?

You can to do tom.length === 0; 

And if tom is an empty array (it's not) it will return true, if it's not, it will return false.

Here is a list of some other instances of this:

https://socrates.devbootcamp.com/labs/javascript/collections/array-operations

And here is a great reference for arrays:

[ref](https://developer.mozilla.org/en/JavaScript/Reference/Global\_Objects/Array/)

I'll come back later and go through each one

```