// Lesson 11 - Impedance: question bank.
//
// Source syllabus: Bard & Faulkner ch.10. Every question is original;
// none is taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson11Mcq: Mcq[] = [
  // ------------------------------------------------ why-small-signal-ac
  {
    id: "l11-mcq-001",
    topicId: "why-small-signal-ac",
    quick: true,
    question:
      "Why is the perturbing voltage kept small in impedance spectroscopy?",
    options: [
      "To save battery",
      "To keep the current-voltage relation in its linear region",
      "To make the solution boil",
      "To charge the double layer faster",
    ],
    answer: 1,
    explanation:
      "Electrode kinetics are exponential; a few-millivolt wiggle stays on the straight part of that curve, so the response is a clean sinusoid at the input frequency.",
  },
  {
    id: "l11-mcq-002",
    topicId: "why-small-signal-ac",
    quick: true,
    question:
      "The frequency of the measured current in an EIS experiment is:",
    options: [
      "Half the input frequency",
      "The same as the input frequency",
      "Twice the input frequency",
      "Random",
    ],
    answer: 1,
    explanation:
      "Linearity means the output keeps the input's frequency; only its amplitude and phase change.",
  },
  {
    id: "l11-mcq-003",
    topicId: "why-small-signal-ac",
    quick: true,
    question:
      "Different interfacial processes can be separated in EIS because:",
    options: [
      "They each carry a unique colour",
      "They relax at different characteristic rates, and therefore dominate different frequency windows",
      "They occur on different electrodes",
      "They use different units",
    ],
    answer: 1,
    explanation:
      "Charging the double layer is fast, diffusion is slow. Sweep frequency and each leaves a fingerprint at its own timescale.",
  },
  {
    id: "l11-mcq-004",
    topicId: "why-small-signal-ac",
    question: "A large applied AC voltage would:",
    options: [
      "Keep the response linear",
      "Drive the electrode outside its linear range, generating harmonics and mixing the processes",
      "Reduce the signal to zero",
      "Have no effect",
    ],
    answer: 1,
    explanation:
      "Beyond a few millivolts the exponential kinetics take charge of the current, and the output stops being a clean copy of the input.",
  },

  // ------------------------------------------------ complex-impedance
  {
    id: "l11-mcq-005",
    topicId: "complex-impedance",
    quick: true,
    question:
      "A pure resistor's impedance is:",
    options: ["Purely imaginary and frequency-dependent", "Real and frequency-independent", "Infinite", "Zero"],
    answer: 1,
    explanation:
      "V = IR at every instant, so Z = R: real, constant, and in phase with the voltage.",
  },
  {
    id: "l11-mcq-006",
    topicId: "complex-impedance",
    quick: true,
    question:
      "The impedance magnitude of a pure capacitor is |Z| = :",
    options: ["RC", "1/(ωC)", "ωC", "R/C"],
    answer: 1,
    explanation:
      "I = C dV/dt, so for a sine wave |Z| = 1/(ωC). At DC it is infinite; at high frequency it vanishes.",
  },
  {
    id: "l11-mcq-007",
    topicId: "complex-impedance",
    quick: true,
    question:
      "The current through a capacitor of a sinusoidal voltage:",
    options: ["Lags by 90°", "Leads by 90°", "Is in phase", "Is zero"],
    answer: 1,
    explanation:
      "Because I = C dV/dt, the current tracks the slope of the voltage, leading it by a quarter cycle.",
  },
  {
    id: "l11-mcq-008",
    topicId: "complex-impedance",
    question:
      "Impedances in series combine by:",
    options: [
      "Adding their magnitudes only",
      "Adding their complex values",
      "Adding their real parts and multiplying the imaginary parts",
      "Ignoring phases",
    ],
    answer: 1,
    explanation:
      "The same topology rules as DC resistors apply, but with complex numbers: series adds Z, parallel adds 1/Z.",
  },

  // ------------------------------------------------ equivalent-circuit
  {
    id: "l11-mcq-009",
    topicId: "equivalent-circuit",
    quick: true,
    question: "In the Randles cell, the solution resistance R_s is:",
    options: [
      "In parallel with the double-layer capacitor",
      "In series with the interfacial elements",
      "Part of the Warburg element",
      "Equal to R_ct",
    ],
    answer: 1,
    explanation:
      "Before the interfacial impedance sees the signal, the current must cross the bulk electrolyte, so R_s sits in series with everything else.",
  },
  {
    id: "l11-mcq-010",
    topicId: "equivalent-circuit",
    quick: true,
    question:
      "At the interface, the double-layer capacitance C_dl is:",
    options: [
      "In series with R_ct",
      "In parallel with the faradaic branch",
      "In series with R_s",
      "Absent",
    ],
    answer: 1,
    explanation:
      "Incoming charge splits at the interface between charging the double layer and driving the faradaic reaction - a parallel split.",
  },
  {
    id: "l11-mcq-011",
    topicId: "equivalent-circuit",
    quick: true,
    question:
      "At very high frequency a Randles cell's impedance approaches:",
    options: ["Infinity", "R_s", "R_ct", "Zero"],
    answer: 1,
    explanation:
      "C_dl shorts the interfacial impedance at high frequency, leaving only the series solution resistance.",
  },
  {
    id: "l11-mcq-012",
    topicId: "equivalent-circuit",
    question:
      "The Randles cell combines which faradaic elements?",
    options: [
      "R_ct in parallel with C_dl",
      "R_ct in series with the Warburg diffusion element",
      "Two capacitors in series",
      "A battery and a lamp",
    ],
    answer: 1,
    explanation:
      "The faradaic branch is the charge-transfer resistance in series with the Warburg impedance of semi-infinite diffusion.",
  },

  // --------------------------------- real-and-frequency-parts
  {
    id: "l11-mcq-013",
    topicId: "real-and-frequency-parts",
    quick: true,
    question:
      "R_ct is physically the small-signal measure of:",
    options: [
      "Double-layer capacitance",
      "How easily charge transfers across the interface",
      "The diffusion coefficient",
      "The solution resistance",
    ],
    answer: 1,
    explanation:
      "R_ct is the linearized activation overpotential-current relation; a fast, reversible couple gives a small R_ct.",
  },
  {
    id: "l11-mcq-014",
    topicId: "real-and-frequency-parts",
    quick: true,
    question:
      "The Warburg impedance's phase angle is approximately:",
    options: ["0°", "45°", "90°", "180°"],
    answer: 1,
    explanation:
      "Z_W = σ(1 - j)/sqrt(ω) has equal real and imaginary parts, giving a constant 45° phase - its visual fingerprint.",
  },
  {
    id: "l11-mcq-015",
    topicId: "real-and-frequency-parts",
    quick: true,
    question:
      "Increasing at low frequency, the Warburg magnitude falls as:",
    options: ["ω", "sqrt(ω)", "1/sqrt(ω)", "constant"],
    answer: 2,
    explanation:
      "|Z_W| = σ/sqrt(ω): the lower the frequency, the deeper the concentration wave penetrates and the larger the impedance.",
  },
  {
    id: "l11-mcq-016",
    topicId: "real-and-frequency-parts",
    question:
      "The Cottrell t^{-1/2} current and the Warburg ω^{-1/2} impedance are:",
    options: [
      "Unrelated phenomena",
      "Two faces of the same semi-infinite diffusion physics",
      "Related only through the double layer",
      "Opposite sign conventions",
    ],
    answer: 1,
    explanation:
      "They are Fourier twins: one is the response to a step, the other the response to a sine wave, of the same diffusion equation.",
  },

  // -------------------------------------------------- nyquist-and-bode
  {
    id: "l11-mcq-017",
    topicId: "nyquist-and-bode",
    quick: true,
    question: "In a Nyquist plot, R_s is read as:",
    options: [
      "The top of the semicircle",
      "The high-frequency x-intercept",
      "The slope of the tail",
      "The radius of the semicircle",
    ],
    answer: 1,
    explanation:
      "At infinite frequency the capacitor is a short, so Z collapses onto the real axis at the solution resistance.",
  },
  {
    id: "l11-mcq-018",
    topicId: "nyquist-and-bode",
    quick: true,
    question: "The diameter of the Nyquist semicircle equals:",
    options: ["R_s", "R_ct", "C_dl", "Z_W"],
    answer: 1,
    explanation:
      "The semicircle spans from R_s to R_s + R_ct on the real axis, so its diameter is the charge-transfer resistance.",
  },
  {
    id: "l11-mcq-019",
    topicId: "nyquist-and-bode",
    quick: true,
    question: "The 45° line at the low-frequency end of a Nyquist plot means:",
    options: [
      "The solution resistance dominates",
      "Semi-infinite diffusion (Warburg) dominates",
      "The capacitor is charging",
      "The cell is short-circuited",
    ],
    answer: 1,
    explanation:
      "A 45° tail is the hallmark of the Warburg element - planar diffusion with no finite-length boundary in view.",
  },
  {
    id: "l11-mcq-020",
    topicId: "nyquist-and-bode",
    question:
      "A depressed (squashed) Nyquist semicircle is usually handled by replacing the capacitor with:",
    options: [
      "A pure resistor",
      "A constant-phase element (CPE)",
      "A battery",
      "A diode",
    ],
    answer: 1,
    explanation:
      "The CPE interpolates between resistor (α = 0) and capacitor (α = 1), capturing the distributed time constants of a rough or inhomogeneous interface.",
  },

  // ------------------------------------------- interpreting-a-spectrum
  {
    id: "l11-mcq-021",
    topicId: "interpreting-a-spectrum",
    quick: true,
    question:
      "The first circuit to try when fitting a simple redox spectrum is:",
    options: ["A 20-element ladder", "The Randles cell", "No circuit at all", "A battery model"],
    answer: 1,
    explanation:
      "Occam's rule: the minimal circuit consistent with the physics. Extra elements need independent experimental justification.",
  },
  {
    id: "l11-mcq-022",
    topicId: "interpreting-a-spectrum",
    quick: true,
    question:
      "The frequency at the top of the semicircle equals:",
    options: ["R_s", "1/(R_ct C_dl)", "R_ct/C_dl", "ω of the Warburg"],
    answer: 1,
    explanation:
      "The parallel R_ct-C_dl time constant is τ = R_ct C_dl, so the semicircle tops out at ω = 1/τ.",
  },
  {
    id: "l11-mcq-023",
    topicId: "interpreting-a-spectrum",
    quick: true,
    question:
      "A perfect fit to a spectrum by a large circuit is:",
    options: [
      "Proof the mechanism is understood",
      "Necessary but not sufficient evidence",
      "Impossible",
      "Equivalent to a small circuit",
    ],
    answer: 1,
    explanation:
      "Distinct circuits can reproduce the same curve; the fit must be cross-checked against an independent change in the cell.",
  },
  {
    id: "l11-mcq-024",
    topicId: "interpreting-a-spectrum",
    question:
      "The strongest use of EIS in applied work is:",
    options: [
      "Measuring absolute potentials",
      "Tracking how individual interfacial processes change under stress or aging",
      "Replacing coulometry",
      "Polishing electrodes",
    ],
    answer: 1,
    explanation:
      "Because each element is a physical process, the change in R_ct, C_dl or the Warburg tail across a life test is a process-level transcript.",
  },

  // --------------------------------------------------- about-frequencies
  {
    id: "l11-mcq-025",
    topicId: "about-frequencies",
    quick: true,
    question:
      "At the highest measured frequencies, the spectrum mainly reflects:",
    options: [
      "Diffusion across the boundary layer",
      "The solution resistance and cell geometry",
      "Corrosion product growth",
      "The formal potential",
    ],
    answer: 1,
    explanation:
      "At kHz–MHz the interface capacitance shorts the faradaic branch and only the bulk electrolyte and cabling remain visible.",
  },
  {
    id: "l11-mcq-026",
    topicId: "about-frequencies",
    quick: true,
    question:
      "Charge-transfer kinetics are best resolved in which window?",
    options: ["mHz", "Mid-frequency (Hz–kHz)", "Many MHz", "DC only"],
    answer: 1,
    explanation:
      "R_ct and C_dl set the semicircle in the middle of the band; the very fast and very slow processes live outside it.",
  },
  {
    id: "l11-mcq-027",
    topicId: "about-frequencies",
    quick: true,
    question:
      "To see the Warburg tail you need:",
    options: [
      "Very high frequencies only",
      "Low-frequency data, and patience",
      "No data at all",
      "A gas burette",
    ],
    answer: 1,
    explanation:
      "Diffusion is slow, so its signature lives at low frequencies; a 10 mHz point costs over a minute of measurement time.",
  },
  {
    id: "l11-mcq-028",
    topicId: "about-frequencies",
    question:
      "A spectrum that stops at 1 kHz cannot tell you about:",
    options: [
      "R_s",
      "The low-frequency diffusion behaviour",
      "The high-frequency intercept",
      "The semicircle",
    ],
    answer: 1,
    explanation:
      "No data, no claim: the Warburg tail and slow processes live below the measurement floor.",
  },
];
