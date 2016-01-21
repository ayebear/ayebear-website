---
layout: post
title: Puzzle Game v0.1.0 Dev
date: 2014-12-29 22:30:00
categories: gamedev
---

Switches and force fields have finally been implemented!

Switches can control a list of different things together, each of which can have a different initial state. There are currently two kinds of switches:

* Push button switches are momentary, and only stay on when an object is on top of it (such as you or a box).
* Toggle switches retain their state, and are controlled by you using your action key (W or up).

Force fields are controlled by any kind of switch, which changes its collidable property.

More game mechanics and elements are planned to be added in the future. Lasers, mirrors, and laser sensors may end up being really cool. A laser sensor is basically another kind of switch. The cool part is how lasers will be able to travel between worlds using the window.

Here is a demo video of a test level:

<iframe width="600" height="480" src="//www.youtube.com/embed/msFEcX0TqVc" frameborder="0" allowfullscreen></iframe>
