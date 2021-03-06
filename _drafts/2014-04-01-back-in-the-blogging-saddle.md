---
layout: post
title: Back to Blogging Again
---

First week of phase 2.  The party has begun for real.  Now it gets serious.  I can say goodbye to sleep.

It was a blast to welcome the the new cohort today and play the part of the semi experienced cohort in phase 2.  Of course, what that means is that we just know more of how much we don't really know anything at all.  But that's something they drill into us more and more.  

We know nothing.  But we are learning how to learn anything. And learn it fast.

Today we dived into Sinatra.  It's a Domain Specific Language the can be used as a light framework for developing Web Applications.  What that means is that it does a lot of awesome stuff to help the browser communicate with the server.    It's the first of around maybe 10 new technologies that we are going to be exposed to in the next two weeks.  

This will be a challenge because I'm going to need to budget my time and learn what I need to know about them, without always getting pulled by what turns out to be a wild curiosity to get under the hood in everything.  But we didn't just stand pad with Sinatra today, but worked with RSPEC and how it interacts with Sinatra, and examined what we learned about both.  

I took a long time on just one of the two challenges today.  But I learned a ton.  I came to understand that Get and Post are essentially just functions that take arguments and blocks.  And that the magic of sinatra is that it turns the parameters into a hash based on how you set up your Post and Get methods.  At first it kind of seems like they are magic, but then you start to realize they are just Ruby fundamentally.  

Now there are a few important difference between how your browser interacts with GETS and POSTS.  First off, your browser needs a GETS method in order to render a page.  It's just what a Browser does.  It needs to GET something.  But what's tricky is that with RSPEC tests, that actually skip the browser all together, and just interact with your GETS and POSTS methods separately, you can get away without a GETS method and just use a POST method exactly as you would a GET method.

There is one difference in how a browser seems to work with a GETS vs a POSTS, is that a GETS actually list the communication it picks up in the parameters, while  POST doesn't do so by default.  But this is really a browser thing, and you can even turn off that default so it acts exactly like a POST.

Now this could be all confusing, but it helped me understand both fundamentally what a GET and POST is doing in the code, and to see it as a method.  And it helped me understand how RSPEC was interacting with Sinatra.  It was just running the GET and POST method and testing the result of those methods against the expected result you identified.  Nothing magical there.  Just good old RSPEC stuff.  

So that was the big aha of the day.  It was a hard fought battle.  But I learned by constantly breaking things and asking questions when I did.  So really.  And it was a blast.  Then I had to explain all of this to a few other people and find out how little I knew it.  But by the end of the day I understood it at least, uh, 33.8% of what's possible.

I really like testing, and I'm excited to get better and better at understanding RSPEC.  I have hopes of being that dude in the cohort who forces everyone to write good tests as they develop, though I'm not there yet.

Also, I forget to share that today was the first day in the new space.  It's big.  It's pretty awesome. It's a little more corporate than the last space, and there are things I will miss about being in Chinatown.  But overall, the extra space and the additional windows make it a move in the right direction for DBC.  I'm glad I got to experience both spots.  

And the new cohort is pretty awesome.  I'm excited to learn a lot by trying to help them.  

I'll end with a quote for the day about learning.  This kind of captures the sentiment of the talk Shereef gave today.

> There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.
> 
> Krishnamurti
