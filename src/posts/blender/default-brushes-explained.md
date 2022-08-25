---
layout: layout.njk
title: Default Brushes Explained
tags: Blender
---


## Default Blender Brushes explained (40+ brushes)
- Note: Some brushes are a combination of two/more brushes
- [Noggi - Every Blender Sculpting Brush Explained in 13 Minutes](https://www.youtube.com/watch?v=eFhXnUoxCjw)

### Draw Brush
- Draw = Most basic brush, round shape
  - Draw Sharp = Sharper falloff
  - Clay Strips = Square shape
- Clay Thumb = Pushes mesh like a thumb

### Layer Brush
- Layer = Draw with a consistent height, Persistent option caps how far it can pull the mesh

### Smooth Brush
- Smooth = Smooths jagged meshes
  - Deformation Laplacian smooths the surface and volume, and Surface smooths while perserving volume

### Fill Brush
- Fill = Fills gaps between two different heights to the average height
- Scrape = Like Fill, but moves vertices above it into the average height
  - Invert to Fill setting lets you switch between the Fill and Scrape brush using the Ctrl key

### Pinch Brush
- Pinch = Moves vertices closer to the center of the brush
- Rotate
- Slide Relax - Moves geometry to areas to sculpt that requires more detail, Holding Shift relaxes to sculpt

### Grab Brush
- Grab = Moves the mesh towards the cursor
  - Grab Silhouette constricts the movement to the edge of the visible mesh
- Elastic Deform = Like Grab, but for bigger movement
- Snake Hook - Grabs the mesh and pulls it, but also rotation is included
  - Magnify controls how much volume is lost each stroke
  - Rake controls how much rotation is lost each stroke
  - Deformation Elastic and Deform
- Thumb = Like Clay Thumb but sticks to the surface, without adding volume
- Pose Brush = Moves geometry based on the bones of the object's Armature
  - Deformation includes Rotate/Twist, Scale/Translate, Squash/Stretch
  - Rotation Origins rotates from:
    - Topology (which is automatic based of the volume of the sculpt)
    - Face Sets, which detirmines one bone per Face sets
    - Face Sets FK, which applies Forward Kinematics
  - Lock Rotation When Scaling locks the Axis of the bone when deforming
- Boundary = Detects unconnected edges, and deforms them. Relies on good topology to get good results
  - Deformations include:
    - Bend
    - Expand
    - Inflate
    - Grab
    - Twist
    - Smooth
  - Boundary Fallof detirmines how the Falloff is applied to the edge:
    - Constant = The entire edge
    - Brush Radius = The radius of the brush
    - Loop = Loops the radius of the brush on the entire edge
    - Loop and Invert = Inverted Loop

### Cloth Brush


### Combination Brushes
- Flatten = Combines the Fill and Scrape into one brush
- Clay = Combines the Flatten and Draw brushes
- Multi-plane Scrape = Uses 2 planes to scrape a surface
- Crease = Combines Punch and Draw sharp brush
