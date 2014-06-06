---
layout: post
title: Solving the Unsolvable Problem
description: A problem that seemed deceptively easy, turns out to be unsolvable.  Well not really unsolvable.  My ongoing adventure with what I have come to learn is the "Social Golfer Problem"
---

During the first six weeks of Dev Bootcamp they split you up into groups of six each week and ask you to pair program within your week's group for the week.  These groups also came together for some of the projects.  After a few weeks I noticed a problem.  I was getting grouped up with the same people each week, and there was a whole portion of my cohort that I was not getting to pair with.  They were building teams using random haphazard techniques.  

After a few weeks a ruby I thought one night, I should just quickly write a program that will solve this problem.  There should be a program that builds teams that will give a chance for each student to pair with every other student.  How hard could it be?  I just need to put together a little algorithim.  

I never got the chance to find out during DBC, we moved on from algorithims to learning all the technologies needed to make a web app.  But the problem stuck with me the entire program, and when I finished it was the first one I tried to tackle.  

Well I put a few hours into it.  First I thought, I needed to minimize duplication and maximize new connections.  I thought first of just using brute force, taking 24 students.  Generating all of the permutations of the students, and dividing these permutations into 4 teams.  I created a way to store one set of teams and a way score each set based on whether they had no duplication in the teams.  I then started cycle through all the possible permutaitons and stored each new set of teams that had no duplication. 

This didn't work.  I knew it was very wasteful, and the algorithim looked like it would run forever.  I went back to the drawing board to create a new strategy more optimized strategy.  I thought that I could keep track of all the pairing each student has had, and also create a duplicate score to indicate how may ducplicates they had with other students.  

I would then sort through the students and would build teams by selecting the student missing the most pairings, and with the most duplicates (which would usually be related because if they have a lot of duplicates they are missing a lot of students) and then place them first on a team.  Then I would select the next team member out from the students he has not paired with yet.  And then I would select the next student out of the list of students that both students had not paired with yet, and continue this until there were no students left.  

I didn't get to complete the algorithim as I got kind of swept up with nursing my wife, and then got caught in the desire to build a full rails app so that I wouldn't lose those skills.  

But yesterday I got to come back to the challenge and paried with two friends on separate attempts on it.  Both strategies were versions of my second strategy.  Neither is fully tested, but both hold promise.  And what I love the most about this problem?

It's considered mathematically [unsolvable.](http://mathworld.wolfram.com/SocialGolferProblem.html)  

I'm excited to get this working.  I love programming.  It's a game that I now get to play forever.







