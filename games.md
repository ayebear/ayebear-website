---
layout: page
title: Games
permalink: /games/
---

Here are some games I've made/currently working on.

---

## Toroban

2019+

-   Toroidal sokoban game.
-   **[Main Website](https://toroban.com/)**
-   Target release date: 2021-03-14

#### Demo 3

WIP: Creating an overworld to organize all the levels non-linearly.

#### Demo 2

After some feedback was received from Demo 1, I made many changes, fixes, and design improvements. Players are no longer killed by water and light (maybe some future things like spikes will do this). Players were also redesigned to replace mirrors and wall blocks. Players can swim in water, and are able to push sand, allowing for lots of interesting and intuitive edge cases and mechanics.

[![Toroban Demo 2]({{ site.url }}/data/demo2.gif)](https://toroban.com/demo2/)

#### Demo 1

A new take on replacing life points. This version changes the concept of the player into a standard game entity, allowing for any number of players. Kept the color states from Demo 0.5. Added sand/water as the new terrains. Water and light "kill" players, turning them into ghosts. Ghosts can only interact with other ghosts.

The other significant change in this version were the dynamic rule blocks. Whenever a rule block is hit with a beam of light, it changes the rules of all entities with the same color.

[![Toroban Demo 1]({{ site.url }}/data/demo1.gif)](https://toroban.com/demo/)

#### Demo 0.5

Demo 0.5 was never released. It featured a snake player with food mechanics, and different colored players that would follow each other. The motivation behind MVP 0.5 was to replace the "artificially" added life points mechanic, with a mechanic that could be represented naturally with game state. I ended up not going with this idea because it was difficult to polish, and did not result in interesting puzzles, without adding various other Z-dimension mechanics.

#### Demo 0

Formerly known as "super secret demo". Features life points, colors, light beams, and bidirectional time travel. Condensed down the levels to just the more difficult and interesting ones.

[![Toroban Demo 0]({{ site.url }}/data/super_secret_demo.gif)](https://toroban.com/super_secret_demo/)

---

## Project Square

2016-2018

-   A collection of puzzle game prototypes
-   Written in JavaScript ES6 with Pixi.js
-   [Play them here](https://ayebear.com/project-square/)

#### Toroidal + colors + lasers + mirrors + offset block (bulldozer theme)

#### Toroidal + time + block + bridge (zombie theme)

#### Toroidal + time + block + bridge (nature theme)

The first toroidal version! This worked perfectly in 2D, to easily fill the screen/scale to any screen size, and a trippy way to represent wrapping around the edges. Improved time mechanics (time immune blocks), added bridges, and had basic single-color goal blocks.

#### Transport (complex vehicles) + time travel

#### Transport (simple vehicles)

#### Player cloning + colors

First and last version to have pixel-level movement. Too finicky for a precise puzzle game. There were some interesting puzzles though. You could clone and swap to your clones using the same action button.

#### Player cloning

I think this version is broken or missing levels, but the intent was probably to allow cloning the player.

#### World rotation

Replaced layer switching with a toggle to rotate the world 90 degrees on its side. This would allow you to see all the layers of the world, and could travel up/down this way. Again, this was more interesting to me, but was completely unintuitive due to the way it was rendered, and lack of animations.

#### Layer switching (v1)

First version of Project Square. Wanted to finish a puzzle game after seeing some old aMAZEd stuff. This features a 3D world represented in 2D. You can switch between layers by going up/down floors. Also has some early color mixing mechanics. The player is just a simple square that stores a color state. The layer switching sprites should have been holes & ladders to be more intuitive. There was some lack of difficulty in these puzzles, which drove me to make more versions to find more challenging mechanics. But, overall this was a good version.

---

## You Are The Virus

2015

-   RTS-style game where you control an army of duplicating viruses to destroy cells
-   Ludum Dare 33 submission
-   Written in C++ with SFML
-   [Download here](https://github.com/ayebear/you-are-the-virus/releases)

![You Are The Virus - ongoing war]({{ site.url }}/data/you_are_the_virus.png)

---

## Multiversal

2014-2015

-   A puzzle platformer game where the goal is to reach the end of each level.
-   You can do this by solving various puzzles using a "window" into an alternate dimension.
-   The window is controlled with your mouse. Whatever is seen through the window instantly becomes part of the real world.
-   Written in C++ with SFML
-   [Click here for a demo video](https://www.youtube.com/watch?v=msFEcX0TqVc)
-   [Download here](https://github.com/ayebear/multiversal/releases)

![Multiversal - level 1]({{ site.url }}/data/Multiversal-v0.3.0-alpha-level1.png)

---

## Undead MMO

2013-2014

-   A multi-player online zombie survival game, started with some friends. Their websites are:
    -   [http://compilelogic.com/](http://compilelogic.com/)
    -   [http://kev-miller.com/](http://kev-miller.com/)
-   You can choose to work together to survive, or turn on your allies. Everyone is an enemy.
-   We are planning to have many fun items and weapons, as well as multiple game modes.
-   It is currently on hold, but we may continue developing it in the near future.
-   Written in C++ with SFML
-   [Source code and more information here](https://github.com/ayebear/UndeadMMO)

![Undead MMO]({{ site.url }}/data/undead_mmo.jpg)

---

## aMAZEd

2012-2013

-   A puzzle game where the player uses various items to manipulate the world, to reach the end of the levels.
-   Written in C++ with SFML
-   [Click here for a playthrough video](https://www.youtube.com/watch?v=NCFSuIPlOUI)

![aMAZEd](http://i.imgur.com/jG453Hb.gif)

---

## Avalanche

2011

-   The goal is to survive as long as possible without getting hit by icicles.
-   You can get extra lives from health packs.
-   You can collect force fields, and press space to use them. They last 5 seconds.
-   Written in C++ with SFML
-   [Download for Linux]({{ site.url }}/data/Avalanche_Linux.tar.bz2) --- [Download for Windows]({{ site.url }}/data/Avalanche_Windows.zip) --- [Download source code]({{ site.url }}/data/Avalanche_Source.tar.bz2)

![Avalanche]({{ site.url }}/data/avalanche.jpg)
