---
layout: post
title: "Prototypes"
date: 2017-02-09 08:23:16
categories: gamedev
---

[Many prototypes of Project Square](http://ayebear.com/project-square/) have been made. The [previous prototype](http://ayebear.com/project-square/cloning_new/), with cloning and color mechanics, was alright, but felt limited in depth and difficulty. This was because the movement was completely unconstrained, and there were no goals other than getting to the exit of the puzzle. It relied on the many mechanics and cloning rules to make puzzles challenging. The balance between difficulty and amount of rules was off - there were too many rules and special edge cases for the amount of difficulty in the puzzles. Example:

![Cloning and colors level - complicated]({{ site.url }}/data/cloning_colors_level.png)

This complicated looking puzzle is actually very easy, since you just become cyan, grab the clone, become green, and then keep cloning over the water areas and killing off your clones in the lava. The amount of steps required will always be less than the number of elements in the puzzle. I tried adding artificial depth by including all 3 base colors to force the player to decide which to use. But, a properly designed puzzle should have the minimal elements in it. If I did that, most of these puzzles would become more obvious. There's no "deceptive simplicity" here. Here is a better designed level:

![Cloning and colors level]({{ site.url }}/data/posts/cloning_color_mechanics.gif)

While there's some finessing around with the clone positioning if you don't do things in that exact order, you generally see the solutions once you know all the rules. With these exact mechanics, the puzzles don't get much harder than this. Maybe with buttons that change around the level in various ways, things would increase in difficulty, but it would also hide knowledge from the player to do this. I think it is best if the player has access to all information in the puzzle from the beginning.

With that said, I've been experimenting with more ideas, and working with friends on making a really good puzzle game. [Here's the current prototype](http://ayebear.com/project-square/current/). It won't be named Project Square, that's just a codename. There's no action button, just 4-direction movement on a tile-based grid. Here's a solution to one of the early levels:

![Transport puzzle]({{ site.url }}/data/posts/transport_puzzle1.gif)

The idea is to deliver packages using fossil fuel powered vehicles, which produce toxic pollution as you drive. The pollution behind you cannot be entered - for now, but later there could be a counter for it. There are many goals: You must reach the end, but in order for the end to be activated, no packages can exist on the map or inside vehicles, and all of the destinations need to be satisfied. Besides goals, there's more constraints now like the pollution and locked movement. Also, the mechanics change based on whether you are inside a vehicle or not. Currently, the only package type behaves like sokoban blocks when you are outside a vehicle, and are picked up when driving into them. Here is another level solution, involving multiple vehicles:

![Transport puzzle - multiple vehicles]({{ site.url }}/data/posts/transport_puzzle2.gif)

We will be adding many more levels with these existing mechanics before adding any new mechanics. I want to make sure we fully explore every possible interaction between entities, before adding new mechanics. Too many indie games have loads of mechanics and introduce them in a rush to try and keep things interesting. This is not necessary, it is possible to keep things interesting by going into new ideas with the same mechanics. Less has to be learned, but the difficulty increases, so the player is more focused on solving the puzzle than learning how all the various rules work.
