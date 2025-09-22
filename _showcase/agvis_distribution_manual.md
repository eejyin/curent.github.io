---
layout: single
title: "Displaying a Distribution System in AGVis"
excerpt: ""
categories:
  - presentation
tags:
  - overview
  - video
share: true
related: true
date: 2025-09-22
last_modified_at: 2025-09-22
comments: true
show_date: true
---

This update adds a lightweight, file-based path to visualize a distribution grid in AGVis—no ANDES or DiME required. It leverages AGVis’s **MultiLayer** feature to load nodes (buses) and lines directly from an Excel workbook. This complements our existing LTB visualization workflows showcased previously.

## What you can do
- Render any distribution system (feeder, lateral, tie lines) on the map from a single Excel file.
- Toggle visibility, set custom colors, adjust node size/line thickness, and layer multiple systems at once (e.g., “Feeder A” + “Tie map”).

## Prerequisites
- AGVis ≥ the build that includes **MultiLayer** (left sidebar “+/–” icon).
- One Excel file (`.xlsx`) containing **two sheets** named exactly:
  - **Bus** — required columns: `idx`, `xcoord`, `ycoord`  
    Optional: `name`, `type`, `color`
  - **Line** — required columns: `idx`, `bus1`, `bus2`  
    Optional: `name`, `color`  
  See the official example workbook referenced in the docs.

## Excel schema (minimum)
**Bus sheet (nodes)**
- `idx` (int): unique node ID  
- `xcoord` (float): longitude  
- `ycoord` (float): latitude  
_Optional:_  
- `name` (str): used by AGVis search  
- `type` (str): keyword to assign an icon (e.g., `load`)  
- `color` (hex): put **one** hex value (like `#FF8800`) in the **first cell** of this column to color all nodes from this file unless overridden in UI.

**Line sheet (edges)**
- `idx` (int): unique line ID  
- `bus1` (int): from-node `idx`  
- `bus2` (int): to-node `idx`  
_Optional:_  
- `name` (str)  
- `color` (hex): same “first-cell only” convention as Bus.color.

> Tip on icons: `type` supports keywords (e.g., `load`, `compressor`, `ptg`, etc.) to render custom node icons. First matching keyword wins; not case-sensitive.

## Minimal example (for a small feeder)
**Bus**
```
idx | xcoord     | ycoord     | name         | type  | color
1   | -83.939120 | 35.922410  | SubA         |       | #2E86C1
2   | -83.935500 | 35.924900  | FeederA-01   | load  |
3   | -83.932700 | 35.926400  | FeederA-02   | load  |
```

**Line**
```
idx | bus1 | bus2 | name           | color
1   | 1    | 2    | SubA–FeederA01 | #34495E
2   | 2    | 3    | FeederA01–02   |
```
This satisfies the required columns and demonstrates optional styling.

## How to load in AGVis
1. Open AGVis and click the **+/–** MultiLayer icon (left sidebar).  
2. Click **Add Layer**, choose your Excel file. If the two sheets are valid, AGVis lists the layer with display options.  
3. Use:
   - **Toggle Rendering** to show/hide the layer,  
   - **Custom Colors** toggles to enforce UI colors or respect your Excel first-cell hex,  
   - **Opacity** and **Size** sliders to tune readability,  
   - **Prioritize Layer** to draw one layer above others (helpful when feeders overlap).

## Notes for distribution systems
- **Coordinates**: use geographic lon/lat (WGS-84).  
- **Radial feeders & tie switches**: represent all sectionalizing and tie segments as **Line** rows; topology itself is implicit from `bus1`↔`bus2`.  
- **Multiple feeders/areas**: create one Excel per area or reuse one file and load multiple layers—then use **Prioritize Layer** to manage overlap.

## Reference
- AGVis Docs – **Advanced Usage → MultiLayer** (sheet names, required/optional columns, UI options, icon keywords, and example workbook).
