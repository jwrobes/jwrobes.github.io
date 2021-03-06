---
layout: post
title: Day 3 - Han Solo
---

So today was the optional code solo today.  Most of the cohort actually paired up.  My intention was to go solo in the morning and pair in the evening, but I never got around to pairing.  And what I discovered was that after a day of going completely solo, I felt considerably more isolated then I did after the days of pairing.  This made today the toughest of the days so far.

Highlights and Things to Remember:

1. I can't use the reduce method in a way that calls a integer from an object.  I first need to map those integers into an array and then perform reduce on the resulting array
2. Return of the Zipper: The zip method acts on an array and takes an array as an argument and creates a set of nested arrays.  It does this by connecting the items of the array it is acting on with each array in the arrays passed into zip as an argument.  For example: ["this","is","a","test"].zip(["blues","cat","space","tiger"] returns: [["this","blues"], ["is","cat"],["a","space"],["test","tiger"]] One thing to note is this.  If you pass as an array or arrays that has less elements than the array the zip method is acting on, then it will fill out the missing elements with nil.  However, if the array you are acting on, has less elements than the arrays passed in as arguments, it will only return an array with the length of the array it's acting on.
3. I want to create a list of everything you should know how to do with hashes.  I need to become a hash ninja.
4. I did some hash work (something I very unconfident in) in front of the group in the morning.  And my brain froze and I had to basically ask everyone to dictate what I should do.  I'm glad I did it, but I got to become a Hash Ninja.
5. Remember that you can do 0..7.times { puts "I love seven"} and it will put that string seven times
