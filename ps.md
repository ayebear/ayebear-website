---
layout: page
title: Project Square Demos
permalink: /ps/
exclude: true
---

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
