---
layout: post
title: "Color Blocks, Lasers, and Offsets"
date: 2018-05-11 23:00:00
categories: gamedev
---

Project square has evolved into quite an interesting game, so much that it really needs a new name. I probably could have posted each update along the process, but here's everything now!

### New Goal Blocks

The main goal blocks now have colored outlines, which must all match their center color, in order for the portal to open to solve the level. A black goal block means there is no color, so these replace the old "basic blocks", while also being a bit different. If one of these receive a different color, they will be unsolved, because their outline color does not match.

This shows an example unsolved level with a bunch of different colored blocks:

![Color Blocks]({{ site.url }}/data/posts/color_blocks.png)

### Laser Beams and Mirrors

There are also laser beams, produced by mirrors that redirect the light from the floor lasers. Laser beams can kill the player, but can fill a block's color from varying distances. Other types of mirrors can reflect the beams different directions. A small thing you may notice is that lasers are offset a bit, and that is so lasers pointing at each other will both be visible. An interesting mechanic that arises from lasers, is that goal blocks can receive multiple sources of color, which all mix together in 3-bit RGB. There's also glass walls which are transparent and let lasers through, but not physical objects.

This shows a laser-creating mirror block, going through a glass wall, into an angled mirror block, hitting a cyan goal block lighting it up blue:

![Lasers and Mirrors]({{ site.url }}/data/posts/lasers.png)

### Offset Blocks

Another mechanic, which was actually added before all the color stuff, are blocks that control the toroidal offset of the world. This leads into interesting scenarios that open access to other areas of a level, as well as adjust where a laser beam could be going. This video was made before the floor portals update:

<iframe class="youtube-embed" src="//www.youtube.com/embed/2KVfWzFR-eU" frameborder="0" allowfullscreen></iframe>

### Floor Portals

Another more minor update was to the puzzle portals. Instead of pushable blocks, they are part of the floor now. I noticed it was inconsistent for the player to be able to enter this kind of block, only when it was solved, but no other blocks. So now the behavior is consistent with all other elements of the game.

### Linear(ish) Levels

Those buttons that look like < and >, actually skip through all the unsolved levels. The world view has been completely removed, mainly due to mobile performance limitations. All solved levels are still being recorded in local storage.

### PicoES upgrade

After finding (and fixing) a major performance bug related to indexes not being updated correctly, I realized the lasers were taking up a lot of CPU/GC time. This was due to many full index updates each time a component was added/removed. The O(1) memoized query indexing algorithm is actually closer to O(n) for component additions/removals. I replaced it with a simpler indexing algorithm, which is now default. This one has the worst case query performance of the minimum number of entities with one of the components, but only takes O(1) to add/remove components to the index. This indexer is similar to the one used in my older C++ ES library. Real world performance is much better, and lasers are now very fast.

### Current Plans

I am still debating over whether or not to keep the cracked tile mechanic (previously water), as this increases logical complexity around time travel, overlapping blocks, laser interactions with bridges, etc. It could allow for many more interesting puzzles, but may be better to include in a future update for the game. - I think I decided not to include this feature while writing this.

The graphics, audio, level design, controls, game name, level selection menu, and UI, all need lots more work and polish for a full release of the game.

As always, you can [play the latest demo build here](http://ayebear.com/project-square/).
