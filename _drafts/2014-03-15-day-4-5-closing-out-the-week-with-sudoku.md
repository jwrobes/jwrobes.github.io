---
layout: post
title: Ending the week with Sudoku
---

Thursday and Friday were kind of amazing.  Getting back to pairing after the solo Wednesday really brought me back to life.  It was a day of recursion and the boggle board magic.  And Friday, wow.  Friday was when it all came together with Sudoku.  They make a big deal of the Sudoku challenge here.  It's whispered about, everyone from the other cohorts, speak about sudoku with a measure of reverence.  And so by the time I got to Friday I was prepared for it to be a crazy freaking day.

And I was right.  Just not the way I expected.  My pair and I really stuck religiously to our intention of getting down really strong Psuedocode for the problem.  We followed other people's advice and didn't start coding anything until we had enough of a plan where we could just got step by step and translate the english into ruby.  And by gove, it worked!  It really worked. Also, I had this early idea, which I didn't really understand how it could be done.  And when I brought it up, we cast the idea away pretty quickly.  But then half way through the actual coding, the idea bubble to the surface again when talking with our teacher.  And he passed a little golden nugget that blew my mind.  Simply, you can pass to a class an entire class.  In short for Sudoku, I could pass the entire game into each cell object.  This way each individual cell could easily access all the other cells.

This made our code so simple, and easy to understand.  And after we powered through a few minor bugs, we got it to run and I was felt my first big rush of success.  I was high of that achievement for the rest of the day.  I could just read over our code and smile.  So this was a breakthrough.  Sudoku.

Highlights:

1. You can pass a class into another class as an argument.  So I could pass the game of sudoku, which held each cell, into each cell itself.  Boom! Mind blown.
