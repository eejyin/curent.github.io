---
layout: page-fullwidth
show_meta: false
subheadline: ""
title: "Getting Started with LTB"
permalink: "/showcase/quickstart/"
header: no
---

<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->

<div class="medium-8 medium-pull-4 columns" markdown="1">

This page provides a quick start guide for new users to get started with LTB.
Each project has its own documentation, where more details about installation and example usage can be found.

# Installation

## Operating System

LTB and its subprojects are designed to be cross-platform and are compatible with Windows, macOS, and Linux. Note that [Windows Subsystem for Linux (WSL)][WSL] can be easier to use on Windows.

## Environment Configuration

If you are new to Python and want to get started quickly, you can use Mambaforge, which is a conda-like package manager configured with conda-forge.

First, install Mambaforge.

Download the latest Mambaforge for your platform from conda-forge/miniforge.
Most users will use x86_64(amd64) for Intel and AMD processors.
Mac users with Apple Silicon should use arm64(Apple Silicon) for best performance.

Next, complete the Mambaforge installation on your system.
If you are using Anaconda or Miniconda on Windows, you should open Anaconda Prompt instead of Miniforge Prompt.

Second, create an environment for LTB.

Open Terminal (on Linux or macOS) or Miniforge Prompt (on Windows, not cmd!!).
Make sure you are in a conda environment - you should see (base) prepended to the command-line prompt, such as (base) C:\Users\username>.

Create an environment for LTB (recommended), you can change the environment name <ltb> and python version <3.8> to desired ones.

```bash
mamba create --name ltb python=3.8
```

Activate the new environment with

```bash
mamba activate ltb
```

You will need to activate the andes environment ***every time*** in a new Miniforge Prompt or shell.
If you have completed these steps without error, you now have a working Python environment. See the commands at the top for Getting started.

## Package Installation

There are two modes of installation: development and release.

### Release Mode

Regular releases are available on distribution channels such as PyPI and conda-forge.
They can be installed with pip or conda.

```bash
mamba install -c conda-forge andes
```

Note that AMS and AGVis ***has not*** been deployed to PyPI and conda-forge with continuous integration and deployment yet.
They need to be installed from source code.

### Development Mode

For model development purpose, you may want to install the latest version and play with the source code.

[Develop Install](https://docs.andes.app/en/latest/getting_started/install.html#develop-install) discusses how to install ANDES in development mode.
It is also applicable to AMS and AGVis.

# Hands-on Tutorial

It is recommended to go through [ANDES Examples](https://docs.andes.app/en/latest/examples/index.html) and [AMS Examples](https://ltb.readthedocs.io/projects/ams/en/latest/examples/index.html) to get started with LTB.

# Usage

## Jupyter Notebook

Jupyter notebooks allow interactive execution of code snippets, and is recommended for new users to get started with LTB.
Jupyter notebook examples are available in the source code repository.
They can be downloaded and run locally as getting started examples.
Jupyter sometimes needs to be installed separately.

## Command Line Interface

In terminal or command prompt, you can also use the program.
For example, permeable information is available:

```bash
andes
```

## Binder

With Binder, open notebooks in an executable environment, making your code immediately reproducible by anyone, anywhere.

[Try ANDES online](https://mybinder.org/v2/gh/cuihantao/andes/master)

# Related Topics

## Research Code

[The Good Research Code Handbook](https://goodresearch.dev) by Patrick Mineault

## Software Development

1. J. K. Ousterhout, A philosophy of software design, First edition. Palo Alto, CA: Yaknyam Press, 2018.

## Software Quality

[Semantic Versioning][Semantic Versioning];
[Continuous Integration][Continuous Integration];
[Continuous Deployment][Continuous Deployment]

## Related Projects

Datasets

[Better Grids][Better Grids];
[G PST-Tools][G PST-Tools];
[A Library of IEEE PES Power Grid Benchmarks][pglib]

Tools

[MATPOWER][MATPOWER];
[PYPOWER][PYPOWER];
[pandapower][pandapower];
[PyPSA][PyPSA]

* * *

[Better Grids]: https://db.bettergrids.org
[G PST-Tools]: https://g-pst.github.io/tools/
[pglib]: https://github.com/power-grid-lib/pglib-opf

[MATPOWER]: https://matpower.org
[PYPOWER]: https://github.com/rwl/PYPOWER
[pandapower]: https://pandapower.readthedocs.io
[PyPSA]: https://pypsa.org

[WSL]: https://learn.microsoft.com/en-us/windows/wsl/install
[Semantic Versioning]: https://semver.org
[Continuous Integration]: https://en.wikipedia.org/wiki/Continuous_integration
[Continuous Deployment]: https://en.wikipedia.org/wiki/Continuous_deployment
