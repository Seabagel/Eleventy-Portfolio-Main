---
layout: wiki/wiki-pages.njk
title: Sculpting
tags: Blender
---

## Brush Setting
- Brush > Accumulate: So the brushes would add to the previous stroke continuously
- Falloff: Change the shape and roundness of brush
- Smooth Stroke

## Retopology
- **Method 1. Multi-res Modifier**
  - Rebuild Subdivisions
- **Method 2. Voxel Remesh**
  - Go to Sculpting Mode
  - Remesh Menu
  - Select the resolution
  - Remesh
- **Method 3. Instant Meshes (Free)**
  - [Instant Meshes](https://github.com/wjakob/instant-meshes)
- **Method 4. Quadriflow Remesh**
  - [Blender Docs - Retopology](https://docs.blender.org/manual/en/latest/modeling/meshes/retopology.html)
  - Go to the Side toolbar
  - Object Data Properties tab
  - Remesh
  - Quad Remesh
- **Method 5. Quad Remesher (Commercial)**
  - [Quad Remesher](https://exoside.com/quadremesher/)


## Remesh Work Flow
- Make a low poly mesh
- Work the model with low poly first, then remesh into higher poly-count
- Go up to 2 remesh, then use the MultiRes Modifier to increase poly count
- The idea is to get the general shape before using MultiRes. Because we can't modify the shape after using a Remesh tool


## Shrinkwrap Low Poly to High Poly
- **Object Data**
  - Normals > Turn Off Auto Smooth
  - Remesh > Smooth Normals
- **Shrinkwrap Modifier**
  - Wrap Method: Project
  - Axis: Positive & Negative
  - Target: High poly model
  - Turn on Uncage
- **Multi-Res Modifier**
  - Put it above the Shrinkwrap
  - Subdivide 3 times
- **Apply the Shrinkwrap modifier**