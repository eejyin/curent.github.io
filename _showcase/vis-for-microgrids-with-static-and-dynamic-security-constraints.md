---
layout: single
title: "VIS for Microgrids with Static and Dynamic Security Constraints"
excerpt: "Virtual inertia scheduling for microgrids with high IBR penetration to balance economic operation and dynamic performance."
tags:
  - showcase
  - research
  - IBR
  - virtual inertia
  - scheduling
  - frequency support
share: true
related: true
date: 2023-10-09
last_modified_at: 2024-10-19
comments: true
show_date: true
---
## Abstract

Microgrids featuring a high penetration of inverter-based resources (IBRs) emerge as a prospective paradigm for the fundamental units in future power systems. The low inertia characteristic and fast dynamics of IBRs pose challenges to conventional decoupled static economic operation and dynamic control design within microgrids. Hence, the concept of virtual inertia scheduling (VIS) is exteded to microgrids to actively harnesses the controllability and flexibility of IBRs. First, the concept and generic formulation of VIS is introduced. It updates the conventional economic operation framework by incorporating the virtual inertia support cost, transient performance constraints, and stability constraints. Control parameters for IBRs are formulated as additional decision variables. Then, VIS is specified in microgrids, followed by explication and linearization of dynamic constraints. An efficient workflow is developed to facilitate the integration of data-driven methods into microgrid-VIS, involving data generation, cleaning, and labeling to alleviate computational burdens. Time-domain simulation are further integrated for correction, validation, and performance guarantee. Finally, VIS is verified in an islanded microgrid modified from IEEE 123-bus system. Results demonstrate that VIS effectively addresses the low inertia challenges in IBR-penetrated microgrids, striking a balance between economic considerations and dynamic performance.

## Demonstration

As shown in the following diagram, microgrid-VIS is validated on a modifed IEEE 123-Bus system.

<figure style="text-align: center;">
  <img src="/assets/images/showcase/vis-for-microgrids-with-static-and-dynamic-security-constraints/IEEE123bus.png" alt="VIS-123bus" style="width:50%;height:50%;">
  <figcaption>Fig: Diagram of an islanded microgrid modified from IEEE 123-bus system</figcaption>
</figure>

## Case file

Click [here](https://github.com/CURENT/demo/blob/master/demo/data/case/ieee123_andes_REGCV1.xlsx) to downlaod the [ANDES](https://docs.andes.app/en/latest/) case file, which consatins the complete dynamic parameters used for demonstration.

Click [here](https://github.com/CURENT/demo/blob/master/demo/data/case/ieee123_ams_REGCV1.xlsx) to downlaod the [AMS](https://ltb.readthedocs.io/projects/ams/en/latest/) case file, which consatins the economic data used for demonstration.

## Contributor

This showcase is contributed by Buxin She.
