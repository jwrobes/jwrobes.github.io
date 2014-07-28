---
layout: post
title: The Moments app is getting close.
description: Reflecting on all that I have learned by building my little moments app.
---

It was expressing frustration over my last week of job search to a friend this weekend and also discussing the ups and downs faced in building my moments app.  And he quite brilliantly pointed out what an accomplishment the application represents.  Six months ago I didn't know how to code.  I was flailing around doing on-line tutorials, while working full time for the city of SF.  

But now, after a few weeks of work, I could take an idea that I had for something I wanted, and bring it into the world.  I could create something out of just my idea.  This is why coding to me is to amazing, and yet it's easy for me to forgot all that I have learned in the past few months that has made it possible for me to do this.  So I want to put together a little highlight reel of just the challenges I had to overcome in building this app.

1. Background Jobs and Redis - we covered these things at DBC, but only barely.  There was one lecture on them and most of students didn't build anything that really used background jobs or scheduled jobs.  Through this app I have dived deep into the different options for Ruby on Rails background jobs.  I investigate Delayed Job, and actually built my app using both Resque Jobs and Sidekiq.  In doing so I really got an understanding of the different between a multi-threaded system and and a fork based system.

2. Devise - I wanted to play around with the Devise gem to get fast at building logins and logouts.

3. Asset Management in Rails - I have used employed some outside JavaScript libraries to add some pizazz to the app, namely the toggle button and the parallax library Skrollr.  And in learning how to use those libraries I deepened my understanding of the different places you can place those libraries and really how the RoR app pulls them all together.  I also solidified my understanding on how to access the different assets in my app using the power of rails asset management to use image tags in erb, css and sass files.

4. Parallax Scrolling - by exploring several different ways to build the popular scrolling effect I was able to build decent looking landing page that is up to date with some of the latest trends.

5. Fleshing out the understanding of best use of the Controllers in Rails, by building a Landing Page or Welcome Page Controller and cleaning up my ugly routes into more restful routes.

6. The confidence to push through confusion and learning to have fun solving bugs.  This one is important.  It's really about staying in touch with the truth that confusions is the state before understanding.  


Here is the schedule for the day:

		10:00 - Typing
		10:30 - Blog
		11:00 - Moments App
		2:00 - Send out Job applications
		5:30 - Exercise
		7:00 - Dinner Break
		9:00 - Moments app