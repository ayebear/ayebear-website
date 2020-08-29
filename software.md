---
layout: page
title: Software
permalink: /software/
---

Here are some programs and libraries I've made.

<br>

## Applications

<br>

#### Cells

-   Cells is an interactive, cellular automaton program.
-   Supports custom rules, colors, and more!
-   [Download here](https://github.com/ayebear/Cells)

![Screenshot of Cells]({{ site.url }}/data/Cells.png)

<br>

#### NetDraw

-   A simple, network-synchronized, paint program.
-   Multiple clients can connect to a server, and all draw on the same board.
-   The drawing tool can change size, color, and transparency.
-   [Source code and more information](https://github.com/ayebear/NetDraw)

![Screenshot of NetDraw]({{ site.url }}/data/NetDraw.png)

<br>

#### OTP Chat

-   ~~To be released eventually...~~ 2020 update: This is only as secure as the PRNG. In theory this style of OTP sounds secure, but in practice it's not great. There are now apps like [Signal](https://signal.org/) that are free and open source, which use a form of forward secrecy, to achieve secure messaging.
-   OTP Chat is a theoretically **uncrackable** communication program.
-   To be more clear, all of your messages are encrypted with OTP (One Time Pad), so the only way to decrypt them is to have the original key data.
-   The data used for encryption (and decryption) in the key file is **immediately** overwritten with new random data. This is to prevent someone obtaining your key file in the future to decrypt previous conversations.
-   This prevents MITM attacks and packet capturing from revealing your private conversations!
-   Note: You'll need to manually distribute a key file with each person you plan to chat with. This is best done offline, and in person.
-   [Will be available here](https://github.com/ayebear/OTPChat)

<br>

#### Tileset Generator

-   Combines a directory of images into a single image file, as a grid layout.
-   This is very useful for 2D games that use sprite sheets of lots of images.
-   [Source code and more information](https://github.com/ayebear/TilesetGenerator)

<br>

#### Old Programs

-   Here are a collection of AutoIt programs that I wrote many years ago before I knew anything about proper programming practices.
-   [Download here](https://dl.dropboxusercontent.com/u/10528991/downloads/AutoIt%20Programs.7z)

<br>

## Libraries

<br>

#### NAGE

-   Stands for "Not A Game Engine"
-   It contains all of the libraries and generic code I've written while working on games in the past.
-   [Source code and more information](https://github.com/ayebear/NAGE)

<br>

#### OTPlib

-   A practical implementation of one-time-pad (OTP) encryption.
-   It uses key files containing random data, which can be generated with the provided code.
-   [Source code and more information](https://github.com/ayebear/otplib)

<br>

#### Netlib

-   A simple TCP server and client
-   Can bind callbacks which are automatically called based on different packet "types"
-   Great for creating networked applications
-   [Source code and more information](https://github.com/ayebear/netlib)

<br>

#### ConfigFile

-   A very easy to use configuration file format
-   Used like a dictionary (actually uses a std::map)
-   Supports various data types, including jagged arrays
-   [Source code and more information](https://github.com/ayebear/ConfigFile)

<br>

You can check out some other code on [my GitHub profile](https://github.com/ayebear).
