---
layout: page
title: Games
permalink: /games/
---

Here are some games I've made/currently working on.

<br>

## Toroban

-   Wrapping sokoban game with time travel.
-   **[Main Website](https://toroban.com/)**
-   Steam Early Access in late 2021

<br>

## Toroban: Demo 3

2021-03-05

This will be the last free demo before the Steam early-access release. This one has many mechanics from previous versions, but reworked in simpler ways.

<!-- [![Toroban Demo 3]({{ site.url }}/data/demo3.gif)](https://toroban.com/demo3/) -->

**[Play here](https://toroban.com/demo3/)**

<br>

## Toroban: Demo 2

2020-06-24

After some feedback was received from Demo 1, I made many changes, fixes, and design improvements. Players are no longer killed by water and light (maybe some future things like spikes will do this). Players were also redesigned to replace mirrors and wall blocks. Players can swim in water, and are able to push sand, allowing for lots of interesting and intuitive edge cases and mechanics.

<!-- [![Toroban Demo 2]({{ site.url }}/data/demo2.gif)](https://toroban.com/demo2/) -->

**[Play here](https://toroban.com/demo2/)**

<br>

## Toroban: Demo 1

2020-04-14

A new take on replacing life points. This version changes the concept of the player into a standard game entity, allowing for any number of players. Kept the color states from Demo 0.5. Added sand/water as the new terrains. Water and light "kill" players, turning them into ghosts. Ghosts can only interact with other ghosts.

The other significant change in this version were the dynamic rule blocks. Whenever a rule block is hit with a beam of light, it changes the rules of all entities with the same color.

<!-- [![Toroban Demo 1]({{ site.url }}/data/demo1.gif)](https://toroban.com/demo/) -->

**[Play here](https://toroban.com/demo/)**

<br>

## Toroban: Demo 0.5

Demo 0.5 was never released. It featured a snake player with food mechanics, and different colored players that would follow each other. The motivation behind MVP 0.5 was to replace the "artificially" added life points mechanic, with a mechanic that could be represented naturally with game state. I ended up not going with this idea because it was difficult to polish, and did not result in interesting puzzles, without adding various other Z-dimension mechanics.

<br>

## Toroban: Demo 0

2019-11-04

Formerly known as "super secret demo". Features life points, colors, light beams, and bidirectional time travel. Condensed down the levels to just the more difficult and interesting ones. Breakthroughs were made with time travel, and it was working so well compared to the previous version of the game. I was finally able to continue making time travel levels. The four user inputs were introduced: undo/redo, rewind/un-rewind.

<!-- [![Toroban Demo 0]({{ site.url }}/data/super_secret_demo.gif)](https://toroban.com/super_secret_demo/) -->

**[Play here](https://toroban.com/super_secret_demo/)**

<br>

## Project Square

2016 -- 2018

-   A collection of puzzle game prototypes
-   Written in JavaScript ES6 with Pixi.js
-   Later renamed to Toroban

<br>

## Project Square: Toroidal + colors + lasers + mirrors + offset block (bulldozer theme)

2018-06-10

First version with lasers and mirrors. Brought back color mechanics inspired by v1. Only minor issues with this: Floor lasers and side lasers have different behaviors, and the player sprites are clunky. Glass walls with lasers were not intuitive enough for most people to understand visually. Lots of ideas from this version are good and being carried over into newer versions.

Removed the overworld temporarily to improve performance on mobile devices (and other slower devices). This introduced the linear level switching. Note there are a lack of time travel levels here, this because there was still only a "rewind" function without an undo, and I deemed time travel too buggy and unstable to actually be used anymore.

**[Play here]({{ site.url }}/project-square/wip/)**

<br>

## Project Square: Toroidal + time + block + bridge (zombie theme)

2018-01-26

Different theme, more levels. Possibly more edge cases handled with time travel. Looks like I started to add some gardening mechanics, but didn't go this route.

**[Play here]({{ site.url }}/project-square/toroidal-sokoban/)**

<br>

## Project Square: Toroidal + time + block + bridge (nature theme)

2017-08-19

The first toroidal version! This worked perfectly in 2D, to easily fill the screen/scale to any screen size, and a trippy way to represent wrapping around the edges. Improved time mechanics (time immune blocks), added bridges, and had basic single-color goal blocks.

**[Play here]({{ site.url }}/project-square/toroidal/)**

<br>

## Project Square: Transport (complex vehicles) + time travel

2017-03-19

This was by far the most confusing version made. There were lots of edge case behaviors and ~5 different terrain types that changed the behaviors of everything on top. This should teach a lesson of keeping rules as simple and intuitive as possible, while sticking to the theme.

Removed the requirement to use vehicles to deliver packages. The vehicles are really there as a way to go over different terrains, including water. They still produce pollution, but only while driving them, not pushing them.

First version with time travel, before all the big time travel bugs were fixed, and before undo and time travel were separated.

**[Play here]({{ site.url }}/project-square/transport-time/)**

<br>

## Project Square: Transport (simple vehicles)

2017-02-23

This had an actual theme, using vehicles to deliver packages. These were nice mechanics, but difficulty was just medium and fell flat after ~20 levels.

**[Play here]({{ site.url }}/project-square/transport/)**

<br>

## Project Square: Player cloning + colors

2016-12-29

First and last version to have pixel-level movement. Too finicky for a precise puzzle game. There were some interesting puzzles though. You could clone and swap to your clones using the same action button.

**[Play here]({{ site.url }}/project-square/cloning-new/)**

<br>

## Project Square: Player cloning

2016

I think this version is broken or missing levels, but the intent was probably to allow cloning the player.

**[Play here]({{ site.url }}/project-square/cloning-old/)**

<br>

## Project Square: World rotation

2016

Replaced layer switching with a toggle to rotate the world 90 degrees on its side. This would allow you to see all the layers of the world, and could travel up/down this way. This was more interesting to me than layer switching, but was completely un-intuitive due to the way it was rendered, and lack of animations.

**[Play here]({{ site.url }}/project-square/rotation/)**

<br>

## Project Square: Layer switching (v1)

2016

First version of Project Square. Wanted to finish a puzzle game after seeing some old aMAZEd stuff. This features a 3D world represented in 2D. You can switch between layers by going up/down floors. Also has some early color mixing mechanics. The player is just a simple square that stores a color state. The layer switching sprites should have been holes & ladders to be more intuitive. There was some lack of difficulty in these puzzles, which drove me to make more versions to find more challenging mechanics. But, overall this was a good version.

**[Play here]({{ site.url }}/project-square/layers/)**

<br>

## You Are The Virus

2015

-   RTS-style game where you control an army of duplicating viruses to destroy cells
-   Ludum Dare 33 submission
-   Written in C++ with SFML
-   [Download here](https://github.com/ayebear/you-are-the-virus/releases)

![You Are The Virus - ongoing war]({{ site.url }}/data/you_are_the_virus.png)

<br>

## Multiversal

2014 -- 2015

-   A puzzle platformer game where the goal is to reach the end of each level.
-   You can do this by solving various puzzles using a "window" into an alternate dimension.
-   The window is controlled with your mouse. Whatever is seen through the window instantly becomes part of the real world.
-   Written in C++ with SFML
-   [Click here for a demo video](https://www.youtube.com/watch?v=msFEcX0TqVc)
-   [Download here](https://github.com/ayebear/multiversal/releases)

![Multiversal - level 1]({{ site.url }}/data/Multiversal-v0.3.0-alpha-level1.png)

<br>

## Undead MMO

2013 -- 2014

-   A multi-player online zombie survival game, started with some friends. Their websites are:
    -   [http://compilelogic.com/](http://compilelogic.com/)
    -   [http://kev-miller.com/](http://kev-miller.com/)
-   You can choose to work together to survive, or turn on your allies. Everyone is an enemy.
-   We are planning to have many fun items and weapons, as well as multiple game modes.
-   It is currently on hold, but we may continue developing it in the near future.
-   Written in C++ with SFML
-   [Source code and more information here](https://github.com/ayebear/UndeadMMO)

![Undead MMO]({{ site.url }}/data/undead_mmo.jpg)

<br>

## aMAZEd

2012 -- 2013

-   A puzzle game where the player uses various items to manipulate the world, to reach the end of the levels.
-   Written in C++ with SFML
-   [Click here for a playthrough video](https://www.youtube.com/watch?v=NCFSuIPlOUI)

![aMAZEd](http://i.imgur.com/jG453Hb.gif)

<br>

## Avalanche

2011

-   The goal is to survive as long as possible without getting hit by icicles.
-   You can get extra lives from health packs.
-   You can collect force fields, and press space to use them. They last 5 seconds.
-   Written in C++ with SFML
-   [Download for Linux]({{ site.url }}/data/Avalanche_Linux.tar.bz2) --- [Download for Windows]({{ site.url }}/data/Avalanche_Windows.zip) --- [Download source code]({{ site.url }}/data/Avalanche_Source.tar.bz2)

![Avalanche]({{ site.url }}/data/avalanche.jpg)
