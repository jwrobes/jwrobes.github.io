---
layout: post
title: The curious journey of cleaning up the JavaScript.
description: Cleaning up the app's JavaScript pushes by boundaries of understanding of MVC.
---

Yesterday was about completing the new custom message feature and cleaning up some of the JavaScript into a MVC structure.  I find the hardest part knowing which of the different strategies to take clean it up.

The minor big breakthrough was discovering why my Rails 4 app was not loading the JavaScript toggle switch when I navigated away from the user show page and back.  It had to do with the jquery Turbolinks.

Adding this simple gem, I was able to do this.

[jquery turbolinks](https://github.com/kossnocorp/jquery.turbolinks)

Here is the schedule for the day:

		8:00 - Typing
		8:30 - Blog
		9:00 - Tennis
		11:00 - Send out Job applications (minimum two applications sent out)
		12:30 - Lunch
		1:00 - Build Standing Desk
		2:00 - Moments App
		6:00 - Meet up Adventure