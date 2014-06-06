---
layout: post
title: Solving the Unsolvable Problem
description: A problem that seemed deceptively easy, turns out to be unsolvable. My ongoing adventure with what I have come to learn is something like the "Social Golfer Problem"
---

<a href="http://www.mathpuzzle.com/MAA/54-Golf%20Tournaments/mathgames_08_14_07.html"><img src="http://i.minus.com/itRBIkHVlplHX.gif" alt="Social Golfer" style="float:right"></img></a>

During the first six weeks of Dev Bootcamp they split you up into groups of six students each week and ask you to pair program within that group for the week. After a few weeks I noticed a problem.  I was getting grouped up with the same people each week, and there was a whole portion of my cohort that I was not getting to pair with.  They were building teams using random haphazard techniques.  

I thought one night, I should just quickly write a program that builds teams that will give a chance for each student to pair with every other student.  How hard could it be?  I just need to put together a little algorithm.  

I never got the chance to find out during DBC, we moved on from algorithms to learning all the technologies needed to make a web app.  But the problem stuck with me the entire program, and when I finished it was the first one I tried to tackle.  

Well I put a few hours into it.  First I thought, I needed to minimize duplication and maximize new connections.  I first just went after it using brute force, taking 24 students.  Generating all of the permutations of the students, and dividing these permutations into 4 teams.  

I created a way to store one set of teams and a way score each additional set based on whether they had no duplication in the teams.  I then started cycle through all the possible permutations and stored each new set of teams that had no duplication. 

This didn't work.  I knew it was very wasteful, and the algorithm looked like it would run forever.  I went back to the drawing board to create a more optimized strategy.  I would keep track of all the pairing each student has had, and also create a duplicate score to indicate how may duplicates they had with other students.  

I would then sort through the students and would build teams by selecting the student missing the most pairings, and with the most duplicates (which would usually be related because if they have a lot of duplicates they are missing a lot of students) and then place them first on a team.  I would select the next team member out from the students she has not paired with yet.  The third student would be selected out of the list of students that both students had not paired with, and I continue this until there were no students left.  

I didn't get to complete the algorithm as I got kind of swept up with nursing my wife, and then got caught in the desire to build a full rails app so that I wouldn't lose those skills.  

But yesterday I got to come back to the challenge and paired with two friends on separate attempts on it.  Both strategies were versions of my second strategy.  Neither is fully tested, but both hold promise.  There is no way to have teams without duplication, and there the ultimate goal should be to make sure every students gets one chance to pair with every other student.

And what I love the most about this problem?  I discovered that this little challenge a version of a mathematically [unsolvable](http://mathworld.wolfram.com/SocialGolferProblem.html) problem.  I'm not going to be able to get the perfect solution, but I will be able to create a much better system than randomly generate teams.  It's going to awesome.

This is what I love about programming.  It promises a lifetime of puzzles and problem solving. 








