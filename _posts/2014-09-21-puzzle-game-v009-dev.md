---
layout: post
title: Puzzle Game v0.0.9 Dev
date: 2014-09-21 13:10:00
categories: gamedev
---

I haven't had much time lately to post updates here. I have done quite a few updates to the (still untitled) puzzle game, since v0.0.3 Dev:

* Game updates:
  * Implemented level files, which store all of the tilemap layers and objects
  * Added "carryable" entities, such as boxes that the player can carry and move around
  * Objects can be moved between worlds, by dropping them in the real world or through the window
  * Shows a preview of where the magic window will be moved to under your mouse pointer
  * Updated graphics to have tiles that fit together
  * Doors or "exits" were added for entering the next level
  * Now plays background music (which can be customized or disabled through music.cfg)
  * Fixed various bugs, made lots of improvements
* Code updates:
  * Setup an entity-component system
  * Wrote event system, sprite loader, entity prototype loader
  * Added various systems, components, and entities
  * Updated tile map, state manager, and music player classes

As always, you can view [the source code and commit history here](https://github.com/ayebear/PuzzleGame).

I will eventually make another demo video. The next features to implement are the switches, and something controlled by them like movable platforms or gates.

An alpha version will be released as soon as the game is fully playable with a few real levels. Don't expect this to be any time soon.
