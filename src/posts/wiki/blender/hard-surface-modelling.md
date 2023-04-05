---
layout: wiki/wiki-pages.njk
title: Hard Surface Modelling
tags: Blender
---

## Sharpening Edges
- Mark Crease =
  - Shift + E
  - Controls how strong an edge is affected by Subdivision Modifier
- Mark Sharp =
  - Can also use Edge Split Modifier
  - Used to define where smooth shading stops

## Smooth Shading
- Click the object
- Go to Object Data > Normals
  - Or right click your object, and Shade Smooth (Turns on the same setting)

## Average Normals (Weird shading)
- Select everything (Press A)
- Mesh > Normals > Average > Face Area
  - Or Shift + N

## Working from Low Poly (Non-destructive)
1. Make a low poly model
2. Subdivision Surface Modifier > Viewport: 2
3. Turn on Uncage
4. Select Edges and Mark Crease
5. Shade Smooth (This will look weird)
6. Two ways to fix this
   1. Select the same edges and Mark Sharp
   2. Use the Edge Split Modifier

## Sharpening Edges
- Mesh Filter Tool
  - Go to Sculpt Mode
  - Pick the Mesh Filter Tool
  - On the Top menu bar, change the Filter Type: "Enchance
  - Drag the cursor from Left to right until you get the desired sharpness
  - This tool also has Delay Viewport updates, to reduce the amount of times Blender re-renders the high-poly mesh when moving around the viewport
