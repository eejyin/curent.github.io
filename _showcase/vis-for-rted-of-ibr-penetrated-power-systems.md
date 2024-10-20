---
layout: single
title: "VIS for RTED of IBR-penetrated Power Systems"
excerpt: "Virtual inertia scheduling in power systems to ensure secure and cost-effective inertia support."
categories:
  - research
tags:
  - IBR
  - virtual inertia
  - scheduling
  - frequency support
share: true
related: true
date: 2023-05-14
last_modified_at: 2024-10-19
comments: true
show_date: true
---
## Abstract

A new concept called virtual inertia scheduling (VIS) is proposed to efficiently handle the increasing penetration of inverter-based resources (IBRs) in power systems. VIS is an inertia management framework that targets security-constrained and economy-oriented inertia scheduling and generation dispatch with a large scale of renewable generations. Specifically, it determines the appropriate power setting points and reserved capacities of synchronous generators and IBRs, as well as the control modes and control parameters of IBRs to provide secure and cost-effective inertia support. First, a uniform system model is employed to quantify the frequency dynamics of the IBRs-penetrated power systems after disturbances. Leveraging this model, the \textit{s}-domain and time-domain analytical responses of IBRs with inertia support capability are derived. Then, VIS-based real-time economic dispatch (VIS-RTED) is formulated to minimize generation and reserve costs, with full consideration of dynamic frequency constraints and derived inertia support reserve constraints. The virtual inertia and damping of IBRs are formulated as decision variables. A deep learning-assisted linearization approach is further employed to address the non-linearity of dynamic constraints. Finally, VIS-RTED is demonstrated on a two-machine system and a modified IEEE 39-bus system. A full-order time-domain simulation is performed to verify the scheduling results.

## Concept of VIS

VIS is an inertia management framework that targets security-constrained and economy-oriented inertia scheduling and power dispatch of power systems with a large scale of renewable generation. As shown in Fig. 1, the device-level control algorithm design explores the inertia support capability of IBRs and provides scheduling options (operation mode and operation parameters) for VIS. Then, VIS is set up at the grid level to make the best use of the inertia support capability of IBRs. Compared with the conventional economic operation framework, VIS further addresses low inertia issues by leveraging the controllability and flexibility of power electronics-based devices that can respond quickly to scheduling results. It not only schedules the power setting points of system devices, but also determines the real-time operation modes and real-time control parameters of IBRs, as well as the required power reserve for inertia support.

<figure style="text-align: center;">
  <img src="/assets/images/showcase/vis-for-rted-of-ibr-penetrated-power-systems/VIS_framework.png"
  alt="VIS-Framework"
  style="width:100%;height:100%;">
  <figcaption>Fig. 1: Diagram of VIS (from the paper)</figcaption>
</figure>

## Demonstration

As shown in Fig. 2, the proposed VIS is validated on a modifed IEEE 39-Bus system.

<figure style="text-align: center;">
  <img src="/assets/images/showcase/vis-for-rted-of-ibr-penetrated-power-systems/IEEE39bus.png"
  alt="VIS-39bus"
  style="width:100%;height:100%;">
  <figcaption>Fig. 2: Single line diagram of modified IEEE 39-bus system (from the paper)</figcaption>
</figure>

## Case file

Click [here](https://github.com/CURENT/demo/raw/master/demo/data/case/ieee39_vis.xlsx) to downlaod the [ANDES](https://docs.andes.app/en/latest/) case file, which consatins the complete dynamic parameters used for demonstration.

## Contributor

This showcase is contributed by Buxin She.

## Recommended Citation

B. She, F. Li, H. Cui, J. Wang, Q. Zhang and R. Bo, "Virtual Inertia Scheduling (VIS) for Real-time Economic Dispatch of IBRs-penetrated Power Systems," in IEEE Transactions on Sustainable Energy, doi: 10.1109/TSTE.2023.3319307.
