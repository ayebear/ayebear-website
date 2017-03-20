---
layout: post
title: "Time Travel"
date: 2017-03-19 23:00:00
categories: gamedev
---

Since adding undo support to Project Square, I realized that it could be used as a mechanic in the game. Here is an example of the first time level:

![Time level]({{ site.url }}/data/ps_time_level.gif)

### Time travel

The way the action tree/stack is setup, it seemed easy to add "time immune" objects, by setting a component that is checked by a time immune base class, already inherited by all actions. However, I quickly found out that this doesn't solve any of the bugs caused by time paradoxes. No collision or physics checking happens when rolling back actions, and by skipping the rollback of certain time immune actions, it creates a huge inconsistency in the tree. To solve this, I will probably end up storing all of the skipped actions in some array, or even store them all inside the time immune component. That way, as soon as that entity becomes normal, it can still rollback its previous actions from the old timeline. I will still need to properly handle entity interactions, but I think by handling physics properly, there won't be as many interesting time based puzzles. This way, you can break physics on purpose when traveling back in time.

All kinds of objects can be dynamically made immune to time, so there is also a special area that will alter entities to make them immune to time. Here are some early time levels in Tiled:

![Time levels]({{ site.url }}/data/posts/time_travel_levels.png)

The clock sprite goes away when the level is loaded, and time immune objects become a shadow-style sprite. I plan to make the time travel mechanics rock-solid with consistent behavior. I'm also planning to bring the vehicle mechanics into this. There are so many possibilities! I need to be careful to design the levels in a way to teach each mechanic in depth, before introducing too many things.

### New vehicles

The vehicles, packages, and destinations have been made much more intuitive. You can now directly push packages into destinations (similar to Sokoban). The vehicles now act as pushable objects, that need to be jammed against something for objects to enter them. Only one object can enter a vehicle at a time, and objects can be "pushed through" the vehicles. Vehicles are basically car/boat hybrids, so they can travel on both land and water. They have small wheels, so cannot move on grass. You still are not allowed to exit the vehicles once entered - but you can switch between them. It is not easy to enter water, because vehicles prioritize pushing before entering, and a push would cause the object to end up in water.

As always, you can [play the current prototypes here](http://ayebear.com/project-square/).
