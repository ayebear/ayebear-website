---
layout: post
title: Puzzle Game Status Update
date: 2015-02-18 23:00:00
categories: gamedev
---

Progress was slow for a while, but now it's finally picking back up!

New features from v0.1.0 dev -> v0.1.7 dev

* Moving platforms have been implemented, which are controlled by switches, and move across an arbitrary number of points. They can optionally loop back or stop after the full path is completed.
* An animated main menu has been added, as well as an about screen.
* Carrying boxes is more realistic now.

Many framework/library changes had to be made for all of this to work. While doing so, things were cleaned up and made more generic, such as the level loading code.

Plans for what to finish by the end of this month:

* Decide on a name (will be announced when the decision is made)
* Add collision properties component to be handled by the physics system (will provide collision handling to moving platforms)
* Add lasers, mirrors, and laser sensors
* Post demo video

Plans for March:

* Make level editor
* Make levels (~15)
* Release official demo builds (alpha version)
