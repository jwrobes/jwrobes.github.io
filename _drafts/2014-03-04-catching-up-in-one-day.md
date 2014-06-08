---
layout: post
title: Catch Up
---

Dev Bootcamp is seven days away and today was a day for catching up for last week.  I had to make up for the work time I lost last week as I closed my final week at my job for the Department of Children, Youth and their Families (DCYF).

There was a sense of urgency, I wanted to get through the mandatory exercises from last week all today, so I could take one and complete the extra reviews ones tomorrow.  This way by Wednesday I'll be caught up and focused on this week's work.  I don't like that I feel like I'm cramming in the last week, but I will have every day until Monday to work and this will be the longest stretch of coding days I could string together since I started the prep work.

There were a few surprises today and some things I forgot but want to take note of.

**Magic of Implicit Return**

I discovered that if the a function will return the last object even if you run a method on that object.  For example, when I close a method with:

array.each {|x| puts x}

I will get both the outputs of the puts x AND I will return the array.  To further clarify this point, I'll put in some method.

If I run the method

foo()  
The output is  
2  
3  
4

But when get the class like this:  
puts foo().class => array

I actually get the array.

The function is returning the array and not just the output. This surprised me.

