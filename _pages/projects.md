---
layout: archive
title: Projects
permalink: /projects/
author_profile: true
---

### Parallelization of the Bellman-Ford Algorithm

<div style="display: flex; justify-content: space-around; align-items: center; gap: 10px;">
  <img src="../images/cuda.JPG" alt="CUDA Implementation" style="width: 45%; height: auto;" />
  <img src="../images/openmp.JPG" alt="OpenMP Implementation" style="width: 45%; height: auto;" />
</div>

Developed and implemented parallelized versions of the Bellman-Ford algorithm for shortest path computation in graphs using OpenMP and CUDA. Designed and evaluated CPU-based parallelization (OpenMP) with dynamic, static, and auto scheduling strategies and GPU-based parallelization (CUDA) with varying thread and block configurations. Demonstrated that OpenMP outperforms for small inputs due to minimal overhead, while CUDA achieves substantial speedups for medium and large datasets (up to 264x). Highlighted GPU efficiency gains through parallel processing and proposed future optimizations, such as shared memory utilization, to further improve CUDA performance for large-scale graphs.

[GitHub Repository](https://github.com/pelinsuacar/parallel_bellman_ford_implementation)  
[View Report (PDF)](https://github.com/pelinsuacar/parallel_bellman_ford_implementation/blob/main/pelinsu_acar_project_report.pdf)


### Multi-Courier Problem (MCP) Optimization

<img src="../images/cdmo.png" alt="Description of Image" style="transform: scale(0.7);" />

Developed and compared four models—Constraint Programming (CP), Boolean Satisfiability (SAT), Satisfiability Modulo Theories (SMT), and Mixed-Integer Programming (MIP)—to optimize courier assignment and routing for minimizing total travel distance. Utilized standard Vehicle Routing Problem methodologies, including successor matrix and predecessor array approaches. Achieved optimal solutions for small-scale instances (e.g. 10 couriers, 13 instances) and identified limitations in SAT and SMT for larger instances. Demonstrated proficiency in mathematical modeling, problem-solving, and optimization techniques.
  
[GitHub Repository](https://github.com/pelinsuacar/CDMO_Project)  
[View Report (PDF)](https://github.com/pelinsuacar/CDMO_Project/blob/main/CDMO_Project_Report.pdf)

