---
layout: wiki/wiki-pages.njk
title: Game Modelling
tags: Blender
---

> This is a general modelling workflow for making game characters, assets, VFX, and shaders

## Character Modelling
- In the old days, 3d models are split into several meshes:
  - The body
  - Arms (upper arm, lower arm, and hand)
  - Legs (thigh, shin, foot)
  - Head
  - Eye/Face texture
    - Sometimes instead of modelling the face, we can use an alpha texture for the face expression
    - Make a duplicate of the face mesh, and move it slightly in front of the head
    - In the game engine, make sure to turn off Shadows for the Face texture mesh
- The advantage is easier UV unwrap, and no bendy straw deformation on elbow, knees, and ankles
