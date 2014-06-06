---
layout: post
title: Background Jobs and the magic of time
description: Thoughts on my first solo mvp and the joys of playing with new technologies on personal projects.  
---


The last three weeks I have worked on a two side projects, while also supporting my wife through morning sickness.  (By the way, morning sickness can be a terrible misnomer, try "all day sickness," it's much more accurate) I've worked on this website (obviously a work in progress) and an algorithm to build balanced teams that maximizes variety and minimizes duplication.  Both of these things were moving slowly.

So last Friday I decided I wanted to build a quick app for an idea that I had for a while.  Something I wanted on my cell phone but couldn't find.  I wanted to be get 5 random reminders each day, that will tell me to stop whatever I'm doing and take a 30 second mediation break.  

There are a lot of meditation teachers that espouse the importance taking meditation away from the cushion and bringing it to your entire day.  Even Oprah is on board with this idea.  So you know it's true. :)

[Oprah Approved Meditation](http://www.oprah.com/spirit/One-Moment-Meditation-Day-1-Introduction-to-the-Basic-Minute)

There is one school that makes the wonderfully audacious claim that 5 mediative moments of presence a day for a year will bring enlightenment.  On the surface this can sound easy to do.  But I have not been able to remember to do five moments a day.  Most days I've rarely gotten one.  

So I wanted to be able to get 5 random reminders during the day that would prompt me to stop and take a moment.

There were a several things I wanted to play with here.  The twilio gem, which I didn't get to use during DBC. I wanted to learn how to use the Devise gem for sessions.  And I was excitedto use background jobs or specifically scheduled background jobs.  And here was a great project for both all of these things.

I started Thursday, and only got a few hours in, setting up Devise and a basic rails app.  Saturday I was at a civic hackathon in Oakland, so I all of Sunday was to play with [Sidekiq](http://sidekiq.org/) and [Sidetiq](http://sidekiq.org).

The experience has been a perfect example of how fun it is to learn by building things you love.  I really want this app for myself, and by trying to get these gems working, I am not totally into learning the details of how redis and sidekiq really work.  A great start was this amazing [article.](http://openmymind.net/2011/11/8/Redis-Zero-To-Master-In-30-Minutes-Part-1/)  To be honest, I'm still in the early confusion states of limited understanding.  But I'll post soon on what I start to understand.

Highlights of the day included:

* having to open the sidetiq gem manually and fix a [bug](https://github.com/tobiassvn/sidetiq/commit/204091b7bb7779ce37ebda9eda2c694d511ae139) because for some reason the latest version didn't have the fix included - will investigate why
* getting exposed to the challenges of scheduling with different time zones
* successfully setting up my random moment for today

![First Text](http://minus.com/i/bjxoJH7ZguMeu)

Goals for today:

* Fix timezones
* deploy on Heroku
* Learn how to write tests for delayed workers

Big Goals for App:

* Sync it with calendar so it only gives you moments when your calendar is free (I imagine this is going to be freaking hard)
* Add link to text reminder that triggers 30 second timer to force you to take the moment
* Allow user to track how many moments they have taken vs not
* Allow user to customize message and send mms
* And of course, make it android or iphone app 

It is so cool to now build things.  So cool.  I can't wait to get better!




