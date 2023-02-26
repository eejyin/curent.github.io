---
layout: page
show_meta: false
title: "ANDES"
subheadline: "Power System Modeling and Numerical Analysis"
permalink: "/andes/"
---
# Overview

ANDES is an open-source Python library for power system modeling, computation, analysis, and control. It supports power flows calculation, transient stability simulation, and small-signal stability analysis for transmission systems. ANDES implements a symbolic-numeric framework for rapid prototyping of differential-algebraic equation-based models. In this framework, a comprehensive [library of models](https://docs.andes.app/en/latest/modelref.html#modelref) is developed, including the full second-generation renewable models. Models in ANDES have been [verified](https://docs.andes.app/en/latest/getting_started/verification.html#verification) with commercial software.

ANDES is the core simulation engine for the CURENT Largescale Testbed (LTB). More information about CURENT LTB can be found at the [LTB Repository](https://github.com/CURENT/ltb2).

# Features

# Design Philosophy

Hybrid Symbolic-Numeric Framework

Make modeling as simple as describing equations and make simulations as fast as using crafted code.

The design philosophy is two-fold: 1) to enable descriptive modeling using provided modeling elements and blocks, and 2) enable robust and fast numerical simulation through code generation and vectorization.

# Citing ANDES

H. Cui, F. Li and K. Tomsovic, "Hybrid Symbolic-Numeric Framework for Power System Modeling and Analysis," in IEEE Transactions on Power Systems, vol. 36, no. 2, pp. 1373-1384, March 2021, doi: 10.1109/TPWRS.2020.3017019.
