---

layout: post
title: Method to the Madness

---

Alright so let's start it out with a salient quote from the man himself.

> "Let's get lifted as I kick ballistic missles and shoot game like a pistol. Clip is loaded when I click bang, dang. A Wu-Tang slug hits your brain" 
> 
> Method Man

 

So maybe that has nothing to do with methods.  Maybe Method Man really got his name because Method is what they call weed on Staten Island, or maybe he is just really in to programming and he knew that Methods were like the freaking shit!

And they are.  Methods are magic.  They are the little black boxes where you put things in and something different can come out.  Methods are the verbs of programming and objects are the nouns.  

So let's see how they work.  So every method needs a noun, just like most verbs need nouns.  And the nouns are the objects that the methods act do something to.  

Since we're just starting out here, let's stick to the basics, there are two types of objects I've really got down with and those are numbers and strings.  And so you take your string or your number and then it does something.  So for example let's take the string, "method man"and let's do something with it.  method man is a rapper, never just speaks his name he shouts it.  And we all know that to shout means caps.  So how does "method man" shout?  He shouts in upper case.  And the method for that is upcase.  

So let's put it together like noun and verb.  But in programming you have to put a little . in between the noun and the verb.  So it goes like this:

"method man".upcase

That's it! If you want to see what you did you have to display it with puts (which is another method, a but a tricky one that hides its object)

so puts "method man".upcase 

and we get METHOD MAN!

That's not the end of story for methods.  We have more to tell.  The because some methods need more than just objects, they need PARAMETERS.  Parameters are the little things that go into the method to help do something to the object.  

I found that the best way to understand this is expose what is a method, but you would never guess.  The good old +

Yes, the + along with his friends the - \* / % are all methods.  How is that you ask?  When you ask a compute to do 1 + 1 you are really skipping some things and writing it in shorthand.  What you really mean to type is this:

1.+(1) 

And that my friend is what 1 + 1 really is.  What does that mean you ask?  Why all the extra stuff? Well let's break it down into pieces first we have the:

1 (this is the object or noun of the language)

next you have the . (this is the proper form of connecting an object to a method so we stick it in there)

next you have the + (this is the method, this is the + is does something to your 1, it adds!)

lastly you have the (1) (this is the parameter, this is the thing our method + needs to do anything, it's what you are adding to the noun.  You can you add something without specifying what you want to add?  If you did 1 + 

and you left it at that, what would that be?  It would be quite a cliffhanger actually, 1 +, 1+ what?  What is it going to be?  You need to add something to this + method, you need the other 1.  And that's what makes it a method.

We just shorten everything by writing it as 1 + 1, but if you write it the full way it works just the same.  

One way these parameters was described, was as an adverb.  It's the how you're going to add.  You add by a 1. You Subtract by a 1 or you could subtract by a 4 and get something different.  Now remember not all methods have parameters, but if you try to run a method that has a parameter without specifying what that parameter is, then you're nice little computer will get all huffy and tell you to shove it!  You didn't give me what I need so I can't do the thing with the objec that you asked me to!   Now give me that thing or else!

One last little bit.  The methods of puts and print, what about those?  They never have objects, they just actually seem to be running wild on their own, no object attached.  Well, it's not really true.  Because in fact the object that they have is well, alright, it's kind of like the answer to the universe (no not 42) it's kernal.

Oddly, you can just ask ruby what is the object for puts by typing in this

method(:puts).owner

And you know what, ruby won't even hide it, it will just tell you right up there, it will say:

Kernel.

So who or what is the kernel thingy?  It's the big class, it's the one object to rule them all.  It's the superclass that rules over (almost) all objects in ruby.  So when you puts you are really doing this

kernel.puts("hello")

try it out. It will give you the same thing.  It's just faster and easier to write 

puts "hello"

So there you go.  There is Method to the Madness!

 

