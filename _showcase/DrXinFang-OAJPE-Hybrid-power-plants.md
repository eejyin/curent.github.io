---
layout: single
title: "Framework of Hybrid Power Plants Providing SFR"
excerpt: "Multi-Timescale Modeling Framework of Hybrid Power Plants Providing Secondary Frequency Regulation."
categories:
  - research
tags:
  - Hybrid power plants
  - AGC
  - BESS
  - Secondary Frequency Regulation
share: true
related: true
date: 2024-11-22
last_modified_at: 2024-11-26
comments: true
show_date: true
---
## Abstract

Hybrid power plants (HPPs) present a promising solution to address the significant challenges posed by the rapid integration of variable renewable energy sources (VREs) into power systems, particularly in maintaining power balance and frequency stability. Therefore, there is a pressing need for system operators and HPP owners to effectively manage both the energy and regulation services of HPPs within the current system operational framework. Existing studies on HPP modeling often separate dynamic control from steady-state scheduling and lack coordinated integration of self-scheduling of HPPs with the system-level scheduling, leading to over/under estimation of the flexibility of HPPs. To address this challenge, this paper presents a generic modeling framework for HPPs that integrates steady-state optimization with dynamic control across multiple timescales, enabling seamless HPP participation in day-ahead and real-time markets and real-time control. Additionally, the framework facilitates comprehensive economic and frequency performance evaluations. Case studies on a modified IEEE 39-bus system demonstrate the framework’s ability to ensure frequency performance with flexible HPP operation modes, align BESS state-of-charge (SOC) with dispatch targets, and optimize reliability and economic outcomes under various scenarios.

## Demonstration

The multi-timescale framework comprises three modules that engage in bidirectional interaction with HPP: HPP Integrated DAUC, HPP Integrated RTED, and AGC controller, as shown in Fig. 1.
<figure style="text-align: center;">
  <img src="/assets/images/showcase/DrXinFang-OAJPE-Hybrid-power-plants/HPP.png" alt="HPP-framework" style="width:50%;height:50%;">
  <figcaption>Fig 1: Integrative operation framework for HPP</figcaption>
</figure>

To validate the effectiveness of the proposed framework, case studies are performed on the modified IEEE 39-bus system with three HPPs, as shown in Fig. 2

<figure style="text-align: center;">
  <img src="/assets/images/showcase/DrXinFang-OAJPE-Hybrid-power-plants/IEEE39.png" alt="HPP-IEEE39" style="width:50%;height:50%;">
  <figcaption>Fig 2: Modified IEEE 39-bus test system</figcaption>
</figure>

## Case file

Click [here](https://github.com/CURENT/demo/blob/master/demo/data/case/ieee123_andes_REGCV1.xlsx) to downlaod the [ANDES](https://docs.andes.app/en/latest/) case file, which consatins the complete dynamic parameters used for demonstration.

Click [here](https://github.com/CURENT/demo/blob/master/demo/data/case/ieee123_ams_REGCV1.xlsx) to downlaod the [AMS](https://ltb.readthedocs.io/projects/ams/en/latest/) case file, which consatins the economic data used for demonstration.

## Recommended Citation

Y. Deng, X. Fang, N. Gao and J. Tan, "Multi-Timescale Modeling Framework of Hybrid Power Plants Providing Secondary Frequency Regulation," in IEEE Open Access Journal of Power and Energy, doi: [10.1109/OAJPE.2024.3504835](https://ieeexplore.ieee.org/document/10764748).
