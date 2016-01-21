---
layout: page
title: Software
permalink: /software/
---

Applications
------------

# Cells

* Cells is an interactive, cellular automaton program.
* Supports custom rules, colors, and more!
* [Download here](https://github.com/ayebear/Cells)

![Screenshot of Cells]({{ site.url }}/data/Cells.png)

# NetDraw

* A simple, network-synchronized, paint program.
* Multiple clients can connect to a server, and all draw on the same board.
* The drawing tool can change size, color, and transparency.
* [Source code and more information](https://github.com/ayebear/NetDraw)

![Screenshot of NetDraw]({{ site.url }}/data/NetDraw.png)

# OTP Chat

* To be released eventually...
* OTP Chat is a theoretically **uncrackable** communication program.
* To be more clear, all of your messages are encrypted with OTP (One Time Pad), so the only way to decrypt them is to have the original key data.
* The data used for encryption (and decryption) in the key file is **immediately** overwritten with new random data. This is to prevent someone obtaining your key file in the future to decrypt previous conversations.
* This prevents MITM attacks and packet capturing from revealing your private conversations!
* Note: You'll need to manually distribute a key file with each person you plan to chat with. This is best done offline, and in person.
* [Will be available here](https://github.com/ayebear/OTPChat)

# Tileset Generator

* Combines a directory of images into a single image file, as a grid layout.
* This is very useful for 2D games that use sprite sheets of lots of images.
* [Source code and more information](https://github.com/ayebear/TilesetGenerator)

# Old Programs

* Here are a collection of AutoIt programs that I wrote many years ago before I knew anything about proper programming practices.
* [Download here](https://dl.dropboxusercontent.com/u/10528991/downloads/AutoIt%20Programs.7z)

Libraries
---------

# NAGE

* Stands for "Not A Game Engine"
* It contains all of the libraries and generic code I've written while working on games in the past.
* [Source code and more information](https://github.com/ayebear/NAGE)

# OTPlib

* A practical implementation of one-time-pad (OTP) encryption.
* It uses key files containing random data, which can be generated with the provided code.
* [Source code and more information](https://github.com/ayebear/otplib)

# Netlib

* A simple TCP server and client
* Can bind callbacks which are automatically called based on different packet "types"
* Great for creating networked applications
* [Source code and more information](https://github.com/ayebear/netlib)

# ConfigFile

* A very easy to use configuration file format
* Used like a dictionary (actually uses a std::map)
* Supports various data types, including jagged arrays
* [Source code and more information](https://github.com/ayebear/ConfigFile)

You can check out some other code on [my GitHub profile](https://github.com/ayebear).