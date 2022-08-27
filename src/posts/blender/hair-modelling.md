---
layout: layout-pages.njk
title: Hair Modelling
tags: Blender
---

## Skin Modifier
- Preferences > Enable Extra Meshes
- Add a single vertices
- Start making a path
- Add Skin Modifier (It'll look like a rectangle)
- Add Subdivision Modifier (This makes the shape rounder)
- Press Ctrl + A to adjust the thickness

## Bezier Curve
- Create a Bezier curve, and shape it to a triangle (Sharp on the top, smooth on the side/bottom, this is the shape of the hair)
- Create a Nurbs Path (Or just a simple path, Curves are harder to control)
- Copy the shape of the Bezier curve to the Nurbs Path
  - Click the path mesh object, switch to Edit mode
  - Under the Object Data Properties, find the Geometry drop down
  - Under Geometry, click on Bevel
  - Switch to Object
  - Change the object to the Bezier Curve you've created
  - Enable Fill Caps so the model isn't hollow/tubular
- Press Ctrl + T  to Twist the hair
- Press Alt + S to make the hair thicker or smaller