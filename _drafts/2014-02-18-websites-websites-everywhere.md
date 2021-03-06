---
layout: post
title: Websites Websites Everywhere!
---

There are four categories of websites:

Fixed: Old school, with fixed widths that don't change at all as the browser is resized

Fluid: These change the content by shrinking photos and relative widths as browser is resized, but do not change introduce media queries to change the design of the content based on different sizes of browser or device

Adaptive: These don't move like the fluids, they have fixed widths, but when the browser or device gets to a certain size it uses media queries to redesign the content to fit the new size

Responsive: This is the Cadillac of sites.  It moves smoothly like the fluid website and also changes the design at specific points to better fit the different browser or device size.

Steps for converting Fixed Website to Adaptive:

**First Make it Fluid: ** This means that you change things from fixed to percentages.  You do this to the font-size, to the divs that are separating the page, or the grids, and the images on the page itself.

1. Change the font sizes from pixels to em.  Do this by dividing the pixel size you want by the pixel size of the context element.  For example if the body is at 16px and you want it to be 16 px than it will be 16 / 16 = 1.00 em.  If however you want 16 px for a link within a h1 element.  You need to figure out what the standard pixel size for your h1 element is and then do some more division.  For example if you want 12 pixels for your links in a h1 element, and your h1 element is 24px standard.  Than you do 12/24 = .5 and set font-size to .5 em
2. Next if you are using a grid system, you change the grids from pixels to percentages.  First you set a max width for your container, so it doesn't go bigger than you want. And then you set the width to percentage at something below 100% (90% is a good start) to put space in there.
3. Next is to change the margins so that they are not fixed by pixels but also adjust as the size of the browser changes.  To do this you simply go on with your division.  You divide the fixed pixel size of the element's margin by the original pixel size of the parent element.  So let's say you have a div with an original fixed pixel length of 200 pixels.  And a smaller div inside with a margin of 10 pixels.  Well you would divide 10/200 to get a new margin of 5%.  So change the margin from 10 pixels to 5 %.
4. Now you have to make sure the images resize as the browser changes sizes.  And to do this you need to simply change the max width to all the img elements to 100% and this will make your whole site more fluid.
5.  

 

