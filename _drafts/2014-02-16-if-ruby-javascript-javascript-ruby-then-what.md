---

layout: post
title: Ruby to JS and JS to Ruby

---

Alright so Branching is cool.  It means you have options.  You can do booga booga if there is a strawberry in you hand and you can do waaka waaka if there is a lime.  Basically, it's at the heart of all programming languages.  And so it's at the heart of Javascript.  

Look I know how it works in Ruby.  And guess what.  It works almost the exact way in Javascript.  The one difference is this:

Ruby == != Javascript ==

Actually Ruby == == Javascript === (In Ruby)

And Ruby == === Javascript === (In Javascript)

And all of that is just a convoluted way of saying you need three equals in Javascript to truly test if things are equal.  

Javascript has a double equals, but it does something called type conversions that makes it not a pure test. 

Everything else is the same.  You got all the usual suspects:

!= > < >+ <= 

and then there is the Logical Operators.  These are like smooth operators, because they are so smooth they let you combine the other comparison operators together into a combo of if this or this and that or this....

They are the same.  I know them.  It's:

&& and II 

Lastly, there is the truthiness and falsiness of various objects.  You can treat different objects as straight booleans.  Meaning 

If "Dog" === true

That's because any string that is not blank or empty === true

But if "" === false

Here is the run down:

number > 0 === true

string with length > 0 === true

defined object === true

true === true (wow...takes a genius to get that one!)

And the others:

undefined === false

null === false

Number objects with 0 or NAN === false

"" === false

false === false

And that's that!

So how do you use these amazing things with this comparison operators and this logical operators? 

You just put them together with the If, else if and the else statements.

if (Jonathan === 'cool') { console.log("Jonathan likes this!");}

else if (Jonathan === 'nerd') {console.log("Jonathan really likes this more!";}

else {console.log("Jonathan doesn't know what to like");};

Of course you should throw in some logical operators for some fun, but meh...

So that's the basics.  The big thing is that Ruby has a lot things that javascript does not.  This includes:

the unless logical operator.  In Javascript you have to use  !=.  

So instead of 

unless 4 > x {do this stuff}

You have to do this 

if (! (4 > x) ) { do this stuff;};

So that's the basics.   I'm out of there.  

 

It also doesn't allow for those cool one line tests like this:

puts "Cheese" if 6 > 5

 

