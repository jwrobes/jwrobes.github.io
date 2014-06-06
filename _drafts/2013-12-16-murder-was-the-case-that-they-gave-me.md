---

layout: post
title: Murder was the Case they Gave Me

---
```
For some reason coding makes me think of rappers and rap lyrics.  I think my ultimate goal now is to get into a freestyle ruby coding battle and win it like Eminem did in 8 mile.

My METHODs are so CLASSy, that you don't need HASH!

Float STRINGS in terminal born again in the BASH!

That's an original by the way.  off the top of my head.  In writing it I realized I don't really understand what a BASH is.  Well it turns out that Bash is just the command processor that allows us to type in commands.  It's basically the terminal.

Alright, back to the CASE because this was something I learned and forgot.  So I want to put it out there so I don't forget again, cause it's way cooler then using a plain old If Else End combo.

So what is the Case? It's basically a faster way to compare an input to a lot of different things, and allows you to not have to write the if, elsif, elsif, elsif, and else and an end.

So when you write a string of If statements you start with the first comparsion

if x < 100

_# this checks to see if x is less than 100 and if it is then it does whatever is below it_

do something

#_ we will only do this something if x < 100_

elsif y > 100

_# now if x was not below 100 that means we didn't do that something above, and so we now test to see if y is greater than 100, if it is then we'll do whatever is below_

do a different thing

# _we'll only do a different thing if y is greater than a 100 AND if x was not less than 100_

else

#_This means that if we didn't do something or the other thing because then we'll always do whatever is below this_

do the best things

#_So we got to the best thing because we didn't pass the first two tests and we ended up here_

end

So in this example we used a different comparison for x and y, but for many of these you'll compare the same thing against a lot different things.  So what if I had to compare x to see if it was "Yes" to see if it was "No" to see if it was "Maybe" to see if it was "Shut Up!" to see if it was "I'm not talking to you!" and so on and so on.

I would have to basically type this over and over:

if x == "Yes"

do BLAH

elsif x == "No"

do BLEAH

elsif x == "Maybe"

do ROWR

elsif x == "Shut up!"

do SHWAPPP!

else

do PONK!

end

You see there I had to type x over and over again, and compare it to something over and over again.  This is got to be common in programming, so because everyone says programmers are lazy and don't like to repeat themselves, they came up with a slightly easier way to do this that save a little typing, which in the big picture probably saves a lot of time both for the programmer and the computer! Win Win!

So how would I do the last thing with CASE?

Well you just state what it is you're comparing everything to once, and then you just list all the different comparisons you want to make followed what should happen if any of them should be true.  Like this:

case x

when "Yes"

do BLAH

when "No"

do BLEAH

when "Maybe"

do ROWR

when "Shut Up!"

do SHWAPP

else

do PONK!

end

You see I didn't have to write x over and over again, and I can actually test a bunch of things together, a lot of || like this

when "Yes", "Maybe", "Shut Up!"

do LEAVE ME ALONE

That well give you the leave me alone response if any of those three responses are true.

So if Snoop Dog was going to write a very politically incendiary program that would reflect the current state of the justice in the U.S.

case crime

when "White Collar", "White Guy", "Billion Dollar Scam"

give probation

when "Black", "Poor", "Misdemeanor"

give fifteen years

end

Yes, Murder was the Case they gave me!

```
