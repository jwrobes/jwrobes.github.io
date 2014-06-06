---
layout: post
title: The Final Week of Phase 0
---

### 1. Don't forget parenthesis when using Case

    when (50..100) puts "this is a test" 
    when (30..49) puts "Cry like an eagle" 
    else puts "Smiling flowers sing loud" 
    end

### 2. Code Analysis:

I'm finding that both for analysis of code and psuedocode I tend to prefer language that is well structured, intentionally formatted.  It should have short sentences.  I craft emails so that someone can get the point in 20 seconds or less.

I don't really like reading through paragraphs of analysis for psuedocode.  I like bulleted lists.  This may be just a personal preference, but I think there is something to it.  If the writer has been able to organize the thoughts in clear sequential lists and took the time to strategically use formatting, then I believe they have a better grasp on what they are communicating.

Ironically, I have not done this for many of my blog posts.

### 3. When should you pass in a default value and when should you not?

When setting up an array as an argument, when is a time for setting the array to a blank array and when is it not a good idea, or unnecessary.

### 4. New Array Method to Understand from Nina's Submission: rindex

This method checks if the argument passed into it is contained in array and returns the index of the LAST match in the array.  Nina used the truthiness of the number vs nil to test if there was a match.  And then if there was, she returned the index, and if not she returned the -1 position.

Example of it from ruby docs is this

    a = ["a", "b", "b", "b", "c"]
    a.rindex("b") #=> 3
    a.rindex("z") #=> nil
    a.rindex { |x| x == "b" } #=> 3
    end

### 5. I have not been very good about reviewing other people's code to learn more.  This must change.

There are at least two reasons for this.  The first is just a time issue, I get through the challenges and  feel compelled to move on to the next ones.  I have had to do the work at nights and weekends up to this point, so it was a challenge sometimes just getting the challenges done in time.

The next reason is something I need to address.  I have a small resistance to reading other people's code.  There is a little bit of fear that I'll discover those who did it better then me and mistakes that I made.  This is all just ego stuff.  And this is something I want to grow out of.  I know intellectually that there is immense value in this, and that picking up tricks and code habits from my fellow classmates and ultimately other programmers, is going to be vital to my growth.  And so I am going to make a habit of pushing past that minor block and learn all I can from my brilliant bootcampers.

### 6. Instead of case when, try return if, see example below:

    def letter_grade
       return "A" if average >= 90
       return "B" if average >= 80
       return "C" if average >= 70
       return "D" if average >= 60
       return "F" if average < 60
       end
    end

