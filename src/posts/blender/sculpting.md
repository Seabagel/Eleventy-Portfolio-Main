---
layout: layout-pages.njk
title: Sculpting
tags: Blender
---

## Shrinkwrap Low Poly to High Poly
- Object Data
  - Normals > Turn Off Auto Smooth
  - Remesh > Smooth Normals
- Shrinkwrap Modifier
  - Wrap Method: Project
  - Axis: Positive & Negative
  - Target: High poly model
  - Turn on Uncage
- Multi-Res Modifier
  - Put it above the Shrinkwrap
  - Subdivide 3 times
- Apply the Shrinkwrap modifier

## Sharpening Edges
- Mesh Filter Tool
  - Go to Sculpt Mode
  - Pick the Mesh Filter Tool
  - Drag the cursor from Left to right until you get the desired sharpness
  - This tool also has Delay Viewport updates, to reduce the amount of times Blender re-renders the high-poly mesh when moving around the viewport

## Retopology
- Method 1. Multi-res Modifier
  - Rebuild Subdivisions
- Method 2. Voxel Remesh
  - Go to Sculpting Mode
  - Remesh Menu
  - Select the resolution
  - Remesh
- Method 3. Instant Meshes
  - https://github.com/wjakob/instant-meshes


## Brush Setting
- Brush > Accumulate: So the brushes would add to the previous stroke continuously
- Falloff: Change the shape and roundness of brush
- Smooth Stroke