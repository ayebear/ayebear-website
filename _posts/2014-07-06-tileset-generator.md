---
layout: post
title: Tileset Generator
date: 2014-07-06 14:00:00
categories: gamedev programming
---

I made this simple utility about 2 weeks ago. It was during the time that I was supposed to be studying for finals (for some summer courses), so I didn’t have time to make a post about it.

Anyways, basically it takes a folder of equally sized image files (png/jpg/bmp), and combines them into a single image file. Why would you want to do this? Well, in games, you sometimes have animated objects with lots of frames. You wouldn’t want to store hundreds of tiny image files, mainly because your game would need to load all of those from storage, which could increase load times. So, a possible solution is to use tile sets, which are large images of lots of smaller images. This way, the game only has to load a single file, which can also simplify your code. The problem with this, is it is hard to manually make these with an image editor, and to align everything perfectly.

This utility solves that problem, and automates the process completely. You can generate an arbitrary amount of tile sets with ranges of image filenames and other settings. All of the settings are stored in a config file, so you only need to setup everything once. Running the program will read the config file, and generate an image for each section. Currently, only simple numeric filenames are supported, but this may change in the future. Let me know if you have any suggestions or find this useful!

The source code can be found here (builds will be available later): https://github.com/ayebear/TilesetGenerator