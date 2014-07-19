---
layout: post
title: My problem with sidekiq and sidetiq.
description: My moments app hits a big bug when I realize that because of the unreliability of sidekiq  with sidetiq and how I'm sending out the reminders, I can send out two texts instead of one.  I see no immediate solution.  This only means that the game is on.  The puzzle is set.  And now I get to solve it.  I do love a good puzzle.
---

So the current way the moments app works, is that each user gets five instances of the moment class built each day for them.  Each of their moments has a randomly generated time that fits within the user's selected start and end time.  The app runs a sidekiq worker every minute of the day using the scheduling gem sidetiq, and checks the database for any moments that have a send time matching the current time.  And then sends out all selected texts.

This is where I am running into a bug.  Sidekiq/sidetiq isn't so reliable it seems.  Often jobs fail to run each minute.  I anticipated this, thinking that as long as I build a catch, where I look for any past moments that were not sent out, and then send them out, it wouldn't be a problem.  The moments go out "randomly" so if they go out a minute or so later than the random time that's fine and no moments would be missed. 

But there is another problem I didn't anticipate.  I have a worker running each minute checking the current time and sending out text reminders,  so if one worker fails there is one the next minute running again.  The way sidekiq and sidetiq work together, is if a worker messes up or is delayed, it doesn't give up.  It runs whenever it comes.  This means that if a textworker misses its assigned minute it runs the next minute along with the textworker that *is* scheduled to run to at that time.  So I have two textworkers running concurrently.  They both check the current time, and find any moments that have not been sent that match that time.  And they both find the *same* moments and send them out.  This means that the user will get duplicate texts.  

And there you go.  That's the bug.  Right now I see a few ways to go about fixing this.  One, there could be a way to tweak the settings of sidekiq and sidetiq to not have workers run after they miss their scheduled time.  Secondly, I could try and use another scheduling gem, that may be able to do this or has better reliability.  I also could space out the text checkers more than a minute or two (I tried two minutes and go the same bug) but that means texts will not go out as randomly and this is just kind of cheating the problem and may not work because the workers could still fail and all run at once.  

Another option is to figure out a better way to schedule the texts.  My original thought, before I played around with background jobs, was that I would build a background job for each moment.  But I didn't see how to do this, because it looked like you couldn't build instances of background jobs.  There probably is a way to do this.  There is a way to do anything of course.  If I could build a separate scheduled background job for each moment, then if it missed it's schedule or got hung up, it would just run a little later and wouldn't ever actually run twice.  I want to explore this option, but it may take the longest.

The last thing is to dive deeper into what's going wrong with the failed background jobs and see if it has to do with threading or other concepts I'm not totally grokking.  There may be a way to address this without redesigning the whole system.  

What fun this is going to be.  I hope it doesn't take me too long.  I'm going to go at it for this weekend and if I can't figure it out I'm going to have to get help. 

Here is the revised weekend schedule for the day:

		8:00 - Saturday morning with wife and family
		2:30 - blog
		3:00 - typing study
		3:30 - moments app 
		8:00 - movie maybe?

