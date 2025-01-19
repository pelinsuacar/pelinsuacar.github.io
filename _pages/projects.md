---
layout: project
title: Projects
permalink: /projects/
---

<div class="projects">

  <div class="project-item">
    <img src="../images/mlcv.JPG" alt="One/Zero Shot Vehicle Detection">
    <div class="project-content">
      <h2>One/Zero Shot Vehicle Detection on Satellite Images using Image/Text Queries</h2>
      <p>Implemented and evaluated two open-vocabulary object detection models, OWL-ViT and YOLO-WORLD, for detecting vehicle classes in satellite images using both text and image queries. OWL-ViT demonstrated strong zero-shot performance for common classes like "car" but struggled with fine-grained distinctions, while excelling in one-shot settings with image queries due to its image similarity capabilities. YOLO-WORLD improved after fine-tuning with image embeddings, highlighting the potential of one/zero-shot object detection for diverse and specialized classes.</p>
      <a href="https://github.com/pelinsuacar/MLCV_project">GitHub Repository</a>
      <a href="https://github.com/pelinsuacar/MLCV_project/blob/main/MLCV_PROJECT_REPORT_PELINSU_ACAR.pdf">View Report (PDF)</a>
    </div>
  </div>

  <div class="project-item">
    <img src="../images/cuda.JPG" alt="Parallelization of the Bellman-Ford Algorithm">
    <div class="project-content">
      <h2>Parallelization of the Bellman-Ford Algorithm</h2>
      <p>Developed and implemented parallelized versions of the Bellman-Ford algorithm using OpenMP and CUDA. Designed and evaluated CPU-based parallelization (OpenMP) with dynamic, static, and auto scheduling strategies, and GPU-based parallelization (CUDA) with varying thread and block configurations. Demonstrated that OpenMP outperforms for small inputs due to minimal overhead, while CUDA achieves substantial speedups for medium and large datasets (up to 264x).</p>
      <a href="https://github.com/pelinsuacar/parallel_bellman_ford_implementation">GitHub Repository</a>
      <a href="https://github.com/pelinsuacar/parallel_bellman_ford_implementation/blob/main/pelinsu_acar_project_report.pdf">View Report (PDF)</a>
    </div>
  </div>

  <div class="project-item">
    <img src="../images/cdmo.png" alt="Multi-Courier Problem (MCP) Optimization">
    <div class="project-content">
      <h2>Multi-Courier Problem (MCP) Optimization</h2>
      <p>Developed and compared four models—Constraint Programming (CP), Boolean Satisfiability (SAT), Satisfiability Modulo Theories (SMT), and Mixed-Integer Programming (MIP)—to optimize courier assignment and routing for minimizing total travel distance. Utilized standard Vehicle Routing Problem methodologies and achieved optimal solutions for small-scale instances while identifying limitations in SAT and SMT for larger instances.</p>
      <a href="https://github.com/pelinsuacar/CDMO_Project">GitHub Repository</a>
      <a href="https://github.com/pelinsuacar/CDMO_Project/blob/main/CDMO_Project_Report.pdf">View Report (PDF)</a>
    </div>
  </div>

  <div class="project-item">
    <img src="../images/facemask.JPG" alt="Anti-Covid19 Systems">
    <div class="project-content">
      <h2>Anti-Covid19 Systems</h2>
      <p>Designed an IoT application to check the face mask and body temperature of people using peripheral devices (temperature sensor, servo motor, LCD screen, Bluetooth module, Webcam), Arduino UNO, and Raspberry Pi4. Implemented facial recognition and detected unmasked faces utilizing OpenCV. Displayed the data on an Android application and sent notifications to users.</p>
      <a href="https://www.youtube.com/watch?v=Hjg5IJv0Vv4">Video Link</a>
    </div>
  </div>

  <div class="project-item">
    <img src="../images/speechsignal.jpg" alt="Spoken Number Recognition System">
    <div class="project-content">
      <h2>Spoken Number Recognition System</h2>
      <p>Designed a spoken number recognition system on Vivado using Basys3 and analog components. Designed a PCB for filtering and amplification of speech signals. Implemented algorithms like Hamming Window, FFT, and MFCC in Vivado and displayed the recognized number on a 7-segment display.</p>
    </div>
  </div>

</div>
