---

layout: post
title: Cramming Javascript in my Brain

---

```

For starters, after thinking so much about Javascript, hearing about Javascript, reading briefly about Javascript.  I'm finally here to learn a little Javascript.  And I'm excited.  So I want to learn it right and therefore take notes as each concept gets compared to what I know about Ruby and put it out here for me to be able to review.  Let's get started.  Let's get dirty in some Javascript:

First impressions of the Magical Things about Javascript:

1. And right away you can just mess with it right in the chrome browser on chrome's very own console log.  Wow.  So it was always there, just below my finger tips, hiding, waiting for me to find it.  All I had to do was hit control-option-J.  And poof!
2. Alright, so it doesn't do somethings as easy as ruby, why can't you just stick variables in strings with a #{me}?  And yet, it's so in your face with the browser, that I like that. I like how direct it is.
3. The last thing about this language, is maybe after spending a third of my life writing scripts while drinking java I want something back.  And maybe now it's time for javascript to give me something back.  Just maybe, just maybe.

 [![Java](assets/coffee-cup-web.jpg)](http://jonathanwrobel.files.wordpress.com/2014/02/coffee-cup-web.jpg)

 [![Script!](assets/script.jpeg)](http://jonathanwrobel.files.wordpress.com/2014/02/script.jpeg)

NUMBERS!

1. Numbers are not floats for integers.  They are just numbers.
2. typeof _object; _This returns what the _object is._
3. And when I tried to see what an array was, it just returned object...hmm..interesting.  true returned boolean.  So that worked like I expected it to.  More to be revealed.
4. About there being no integers just numbers.  When you divide two numbers it GIVES you a FLOAT ( if the answer is a float.  it doesn't just return an integer like ruby.
5. So how do you get the integer like you get when you divide to integers in ruby that would give you a float in Javascript?  INTRODUCE Math.floor(5/2)! This will give you 2, just like 5/2 = 2 in ruby.  And then you can still you the good old modulus (%) operator to get the remainder.  So Math.floor(7/6) = 1.  And 7%6 = 1.
6. So what is this Math thingy?  Apparently there is a math object.  And you can also do a lot of other things that I got used to doing with ruby on it.  Like: Math.sqrt(4) = 2; Math.ceil(4.3) = 5; Math.pow(5,2) = 25;  Wowser.  So Math is important.  But Math is an object and I'm doing these things to the object of Math rather than to the object of float or integer, like I do in Ruby.  Hmmmm...very interesting.
7. MEET NaN.  This is not a tasty indian bread that can be in a garlic flavor.  It is the response when you try to something numbery to something that is Not a Number.  Hence the phrase: NaN.

STRINGS!

1. Just like Ruby strings.  In quotes (single or double) everything becomes a string
2. You can't multiply "strings" \* 4 this will produce that delicious bread called NaN
3. Escape from String!  Just like Ruby I can use the \ to tell the computer that whatever follows the \ is NOT a string.  It escapes the string and tell something else.  So \n will produce a new line.  There are lot of these, just like in ruby.  One thing extra is that you can use them with both single quotations and double quotations.  You can't do this with ruby. Sad ruby.
4. And strings have methods.  Lots of them. Just like ruby.  Examples are: "
5. I sing a song" = 2 (because s is the third character in the string when you start counting with 0) OR 'go team'.toUpperCase(); = "GO TEAM" OR '01234'.substr(1,3); = '123' OR 'Hello'.concat(' World'); = "Hello" + " World" = "Hello World"
6. Do NOT DESTROY! So Javascript doesn't have that BAND ! that turns methods from indestructive to Destructive.  No, but there is some destroying later on.  Just not yet.

VARIABLES

1. get with the times eat locally, don't create global variables!  What I mean is that to declare a variable in Javascript you need to prefix it with the _var._  Like this: var y = 4; You _can _skip the var, and just do y = 4;  But then you just set y as a Global variable.  And that's bad! Don't do that! Stay local, it's better for the environment.  No really.  Local.  Use a var.
2. So Javascript is kind of focused one on thing.  And that's the browser. It's single minded.  So it doesn't really want much to do with shell scripts, it really is just about shoving stuff out into the console of a browser.  Hence there is no puts, or gets.  It's all about console.log("I Love the browser!"); or var truth = prompt("Who you you love!?"); _This prompts me to answer: "The Browser" _and now_ truth = 'The Browser'  _And guess who's happy?  Javascript.  Javascript the single minded language is very happy.  On a side note, I have high hopes for Javascript, I bet it's not single minded at all.  But we all start somewhere.
3. You know what Javascript doesn't do so well?  It' doesn't allow you to stick variables in strings in the fancy way that Ruby does.  Happy ruby.  "Ruby smiles #{2\*1000} times" But Javascript, when var num = 1; it only Gets to console.log("Sad Javascript with only ".concat(num.toString()) + " time");
4. But Javascript is cool remember.  Just as cool as ruby.  You know how ruby does that thing, that thing that's all hip and cool.  Like instead of saying talk to you later, it says ttyl.  Or instead of saying x = x +1, it says x+=1 or instead of saying x = x\*3 it just smiles and says x \*=3.  Well, Javascript does the same thing.  It's just as cool.  So Ruby is var num = 5; and so num\*= 2 is really 10 times cool.  You get that, Javascript is SO cool it just takes the number adds the operator, then the equals and then the other number to get a result.  Cool Javascript.  Real cool.

```