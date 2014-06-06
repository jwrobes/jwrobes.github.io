---

layout: post
title: Reflections on Polish Calculator Challenge

---

 

It's funny that the one things that got me stuck for awhile on this exercise was using CASE and WHEN.  Which happens to be the topic of my last published post.

**Careful with Case and Local Variables**

What I learned was this.  You can't pass a method argument directly as the Case.

For example:

jump\_high(feet)

  case feet

  when feet < 4

    # do something

  when feet == 5

    # do something else

  else

    # do something completely different

  end

end

This does NOT work.  I found that I needed to set a new variable equal to the local method variable.  And use that as the case.  I don't quite understand why.  But I'll try to figure it out.

**DON'T FORGET REGEX**

I reviewed other people's solutions and saw a few using Regex and was struck at how I completely didn't even think about using Regex.  I need to make sure that I incorporate regex in my code consistently because it's such a great tool.  In fact I should make a check list of things to remember when I'm planning out code.  I'll start one now in Evernote.  The first thing will be

Can you use Regex?

**WHAT IS THIS MAGICAL SEND METHOD?**

In addition to seeing people using regex I saw some people using send, so I need to look into this.  I will get back to you on this send method tomorrow!

