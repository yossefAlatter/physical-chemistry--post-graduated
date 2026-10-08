// Lesson 9 - Sweep methods and polarography: question bank.
//
// Source syllabus: Bard & Faulkner ch.6-7. Every question is original;
// none is taken from a textbook exercise. Four questions per section, the
// first three flagged as quick checks.

import type { Mcq } from "./types";

export const lesson9Mcq: Mcq[] = [
  // ------------------------------------------------- what-a-voltammogram-is
  {
    id: "l9-mcq-001",
    topicId: "what-a-voltammogram-is",
    quick: true,
    question: "A voltammogram plots:",
    options: [
      "Current against time",
      "Current against applied potential while the potential is swept",
      "Charge against concentration",
      "Resistance against frequency",
    ],
    answer: 1,
    explanation:
      "It is the current recorded as the potential ramps at a constant scan rate - the potential-scan equivalent of the Lesson 8 transient.",
  },
  {
    id: "l9-mcq-002",
    topicId: "what-a-voltammogram-is",
    quick: true,
    question:
      "On a sweep voltammetry trace, the current eventually falls after the peak because:",
    options: [
      "The reaction stops entirely",
      "Depletion of reactant near the electrode starves the surface",
      "The Faraday constant has been reached",
      "The reference electrode dries out",
    ],
    answer: 1,
    explanation:
      "The surface is consumed faster than diffusion can refill it; the gradient and hence the current collapse even as the driving force keeps rising.",
  },
  {
    id: "l9-mcq-003",
    topicId: "what-a-voltammogram-is",
    quick: true,
    question: "The peak current of a diffusion-controlled peak scales as:",
    options: ["v²", "sqrt(v)", "1/v", "constant"],
    answer: 1,
    explanation:
      "From Randles-Sevcik, i_p ∝ sqrt(v): faster scans give a thinner diffusion layer and a steeper surface gradient.",
  },
  {
    id: "l9-mcq-004",
    topicId: "what-a-voltammogram-is",
    question:
      "A voltammogram is a map of a reaction. Which feature locates the formal potential?",
    options: [
      "The peak height",
      "The peak position on the potential axis",
      "The scan rate",
      "The charging-current baseline",
    ],
    answer: 1,
    explanation:
      "Where the wave sits on the potential axis is set by the thermodynamics of the couple; its height reports how much reactant and how fast the scan.",
  },

  // --------------------------------------------------- reversible-sweep
  {
    id: "l9-mcq-005",
    topicId: "reversible-sweep",
    quick: true,
    question:
      "For a reversible planar couple, the peak current obeys Randles-Sevcik: i_p is proportional to:",
    options: ["C/sqrt(v)", "C sqrt(v)", "C v", "C v²"],
    answer: 1,
    explanation:
      "i_p = 0.4463 nFAC sqrt(nFvD/RT): linear in concentration and in the square root of the scan rate.",
  },
  {
    id: "l9-mcq-006",
    topicId: "reversible-sweep",
    quick: true,
    question:
      "For a reversible system, the peak potential shifts with scan rate by:",
    options: ["59 mV per decade", "Nothing - it is independent of scan rate", "30 mV per decade", "It doubles"],
    answer: 1,
    explanation:
      "A reversible wave is pinned by Nernst thermodynamics: its peak position does not move as v changes. Only quasi-reversible and irreversible waves drift.",
  },
  {
    id: "l9-mcq-007",
    topicId: "reversible-sweep",
    quick: true,
    question:
      "A straight line through the origin when i_p is plotted against sqrt(v) indicates:",
    options: [
      "A kinetically limited reaction",
      "Diffusion control of a reversible system",
      "An adsorbed monolayer",
      "Ohmic distortion",
    ],
    answer: 1,
    explanation:
      "Randles-Sevcik predicts exactly that scaling; its slope yields D, C or A.",
  },
  {
    id: "l9-mcq-008",
    topicId: "reversible-sweep",
    question:
      "In the Randles-Sevcik equation, i_p depends on which power of the diffusion coefficient D?",
    options: ["D^0", "D^{1/2}", "D", "D^2"],
    answer: 1,
    explanation:
      "i_p ∝ sqrt(D): larger D gives steeper gradients and larger peak currents, but only as the square root.",
  },

  // ------------------------------------------------- peak-separation
  {
    id: "l9-mcq-009",
    topicId: "peak-separation",
    quick: true,
    question:
      "At 25 °C the peak separation of an ideal reversible one-electron wave is approximately:",
    options: ["0 mV", "59 mV", "118 mV", "1 V"],
    answer: 1,
    explanation:
      "ΔE_p = 59/n mV: one Nernst decade's worth of potential between the two peaks.",
  },
  {
    id: "l9-mcq-010",
    topicId: "peak-separation",
    quick: true,
    question:
      "A peak separation significantly larger than 59/n mV that grows with scan rate means:",
    options: [
      "The system is reversible",
      "Electron-transfer kinetics are slow (quasi-reversible)",
      "The concentration is too high",
      "The solvent is pure",
    ],
    answer: 1,
    explanation:
      "Slow kinetics demand extra overpotential, pushing the peaks apart; faster sweeps leave less time to keep up, so the gap widens further.",
  },
  {
    id: "l9-mcq-011",
    topicId: "peak-separation",
    quick: true,
    question: "A missing reverse peak indicates:",
    options: [
      "A reversible couple",
      "An irreversible electron transfer or a fast follow-up chemical step",
      "A perfectly stable product",
      "A microelectrode",
    ],
    answer: 1,
    explanation:
      "With no return wave, the product of the forward scan cannot be driven back within the experiment, either kinetically or because chemistry consumed it.",
  },
  {
    id: "l9-mcq-012",
    topicId: "peak-separation",
    question:
      "If Q_anodic is much smaller than Q_cathodic in a reversible couple, the product most likely:",
    options: [
      "Stayed exactly where it formed",
      "Was consumed by a coupled chemical reaction or escaped the electrode region",
      "Doubled in concentration",
      "Became the reference electrode",
    ],
    answer: 1,
    explanation:
      "Charge balance demands all of the forward product come back if nothing intervenes. A deficit is the signature of coupled chemistry.",
  },

  // ---------------------------------------------- cyclic-voltammetry
  {
    id: "l9-mcq-013",
    topicId: "cyclic-voltammetry",
    quick: true,
    question:
      "Cyclic voltammetry differs from a single-sweep experiment by:",
    options: [
      "Using two working electrodes",
      "Reversing the scan at a switching potential and recording the return wave",
      "Holding the potential constant",
      "Stirring the solution",
    ],
    answer: 1,
    explanation:
      "CV is the potential-scan equivalent of double-step chronoamperometry: forward scan makes product, reverse scan converts it back.",
  },
  {
    id: "l9-mcq-014",
    topicId: "cyclic-voltammetry",
    quick: true,
    question:
      "A tall, thin peak that grows linearly with scan rate is characteristic of:",
    options: [
      "A solution diffusion process",
      "An adsorbed species on the electrode surface",
      "An irreversible bulk reaction",
      "A gas bubble",
    ],
    answer: 1,
    explanation:
      "Adsorbed species have a fixed number of moles available; the peak current is proportional to v, not sqrt(v).",
  },
  {
    id: "l9-mcq-015",
    topicId: "cyclic-voltammetry",
    quick: true,
    question:
      "To recover a full, undistorted reverse wave, the switching potential should be:",
    options: [
      "Exactly at the forward peak",
      "Far enough past the peak that the forward current has decayed",
      "At the starting potential",
      "At zero volts",
    ],
    answer: 1,
    explanation:
      "Switching too early truncates the forward diffusion layer and distorts the return peak; switch well past it.",
  },
  {
    id: "l9-mcq-016",
    topicId: "cyclic-voltammetry",
    question:
      "A symmetric CV loop with 59/n mV peak separation and equal charges indicates:",
    options: [
      "A coupled chemical reaction",
      "A stable, reversible solution couple",
      "A passing valve",
      "An adsorption monolayer",
    ],
    answer: 1,
    explanation:
      "Symmetry, Nernstian peak spacing, and unit charge ratio together are the classic fingerprint of a clean reversible couple like Fc+/Fc.",
  },

  // --------------------------- irreversible-and-quasireversible
  {
    id: "l9-mcq-017",
    topicId: "irreversible-and-quasireversible",
    quick: true,
    question:
      "A quasi-reversible wave is identified by a peak separation that:",
    options: [
      "Stays fixed at 59 mV",
      "Is larger than 59/n mV and grows as the scan rate increases",
      "Is zero",
      "Equals the formal potential",
    ],
    answer: 1,
    explanation:
      "Sluggish kinetics widen the gap, and faster sweeps make the kinetics lag further behind, so the gap grows with v.",
  },
  {
    id: "l9-mcq-018",
    topicId: "irreversible-and-quasireversible",
    quick: true,
    question:
      "For an irreversible wave, the peak potential shifts with scan rate by roughly:",
    options: [
      "59/n mV per decade",
      "30/(αn) mV per decade",
      "Nothing",
      "1 V per decade",
    ],
    answer: 1,
    explanation:
      "The logarithmic scan-rate dependence of an irreversible peak carries the transfer coefficient α; its slope is 30/(αn) mV per decade at 25 °C.",
  },
  {
    id: "l9-mcq-019",
    topicId: "irreversible-and-quasireversible",
    quick: true,
    question: "An irreversible voltammetric wave:",
    options: [
      "Has two perfectly symmetric peaks",
      "Has a single peak and no return wave",
      "Has a peak separation of exactly 59 mV",
      "Never moves with scan rate",
    ],
    answer: 1,
    explanation:
      "If the electron transfer cannot be reversed on the experimental timescale - or the product is chemically destroyed - only the forward peak remains.",
  },
  {
    id: "l9-mcq-020",
    topicId: "irreversible-and-quasireversible",
    question:
      "The scan-rate dependence of an irreversible peak position can be used to extract:",
    options: [
      "The pH of the solution",
      "The transfer coefficient α and ultimately k^0",
      "The solubility of the product",
      "The drop time of a mercury electrode",
    ],
    answer: 1,
    explanation:
      "Because the peak slides logarithmically with v with a slope set by α, scan-rate studies turn directly into kinetic parameters.",
  },

  // ------------------------------------------------------ polarography
  {
    id: "l9-mcq-021",
    topicId: "polarography",
    quick: true,
    question:
      "Polarography records a voltammogram at a working electrode that is:",
    options: [
      "A rotating disk",
      "A continuously dropping mercury drop",
      "A static platinum plate",
      "A reference electrode",
    ],
    answer: 1,
    explanation:
      "The dropping mercury electrode (DME) continuously renews its surface, giving reproducible, fouling-free measurements.",
  },
  {
    id: "l9-mcq-022",
    topicId: "polarography",
    quick: true,
    question: "The raw polarographic current oscillates because:",
    options: [
      "The lamp flickers",
      "Each mercury drop grows and detaches, modulating the electrode area",
      "The reference electrode pulses",
      "The solution boils",
    ],
    answer: 1,
    explanation:
      "Faradaic current is proportional to area; a growing drop's area grows, then resets when the drop falls, giving sawtooth current traces.",
  },
  {
    id: "l9-mcq-023",
    topicId: "polarography",
    quick: true,
    question: "The main advantage of mercury as a polarographic electrode is:",
    options: [
      "Its very positive anodic limit",
      "Its high hydrogen overvoltage and a continuously renewable surface",
      "Its zero cost and safe disposal",
      "Its catalysis of every reaction",
    ],
    answer: 1,
    explanation:
      "The high hydrogen overvoltage opens a wide negative window, and the liquid surface is always fresh - which is also why the method is now niche, for safety and the opposite anodic limit.",
  },
  {
    id: "l9-mcq-024",
    topicId: "polarography",
    question:
      "Polarography is now largely replaced in the lab by:",
    options: [
      "Solid electrodes with pulse techniques",
      "Nothing - it is still the only method",
      "Gravimetry",
      "Flame photometry",
    ],
    answer: 0,
    explanation:
      "Mercury's toxicity and its narrow anodic window pushed the field toward solid working electrodes probed with differential pulse and square-wave waveforms.",
  },

  // ------------------------------------------------ pulse-voltammetry
  {
    id: "l9-mcq-025",
    topicId: "pulse-voltammetry",
    quick: true,
    question:
      "Pulse voltammetry achieves high sensitivity by:",
    options: [
      "Using more mercury",
      "Sampling the current after the double-layer charging transient has decayed",
      "Sweeping very slowly",
      "Removing the reference electrode",
    ],
    answer: 1,
    explanation:
      "The capacitive current dies with RC; the faradaic current decays only as t^{-1/2}. Sampling late keeps the faradaic part and discards the tax.",
  },
  {
    id: "l9-mcq-026",
    topicId: "pulse-voltammetry",
    quick: true,
    question:
      "Differential pulse voltammetry reports the difference of two current samples taken:",
    options: [
      "One day apart",
      "Just before and just after a small pulse",
      "At the start and end of the experiment",
      "On two different electrodes",
    ],
    answer: 1,
    explanation:
      "Subtracting the pre-pulse sample from the post-pulse sample cancels the background and yields a derivative-like peak proportional to concentration.",
  },
  {
    id: "l9-mcq-027",
    topicId: "pulse-voltammetry",
    quick: true,
    question: "Square-wave voltammetry superposes a square wave on:",
    options: [
      "A sine wave",
      "A slow potential staircase",
      "A rotating disk",
      "A fixed potential",
    ],
    answer: 1,
    explanation:
      "The staircase provides the ramp; the square wave gives forward and reverse pulses whose difference currents form a sharp, sensitive peak.",
  },
  {
    id: "l9-mcq-028",
    topicId: "pulse-voltammetry",
    question:
      "Which statement best explains why pulse methods are more sensitive than a plain sweep?",
    options: [
      "They change the standard potential of the couple",
      "They let the fast-decaying charging current die before the current is measured",
      "They increase the temperature",
      "They double the Faraday constant",
    ],
    answer: 1,
    explanation:
      "Sensitivity is about signal-to-background. By waiting out the capacitive transient, the faradaic signal is measured against a much smaller baseline.",
  },

  // --------------------------------------------------- choosing-a-sweep
  {
    id: "l9-mcq-029",
    topicId: "choosing-a-sweep",
    quick: true,
    question:
      "For an initial mechanistic look at a new redox system, the first experiment is usually:",
    options: [
      "Square-wave voltammetry",
      "Cyclic voltammetry",
      "A weighing",
      "A pH titration",
    ],
    answer: 1,
    explanation:
      "CV shows the whole loop - reversibility, stability of products, adsorption - in one experiment, so it is the standard first probe.",
  },
  {
    id: "l9-mcq-030",
    topicId: "choosing-a-sweep",
    quick: true,
    question: "For trace-level detection, the preferred technique is:",
    options: [
      "Differential pulse or square-wave voltammetry",
      "A slow linear sweep",
      "Potentiometry at zero current only",
      "Bulk electrolysis",
    ],
    answer: 0,
    explanation:
      "Pulse methods suppress the charging-current background, lowering detection limits by one to two orders of magnitude.",
  },
  {
    id: "l9-mcq-031",
    topicId: "choosing-a-sweep",
    quick: true,
    question: "Polarography's main practical drawback today is:",
    options: [
      "Too much sensitivity",
      "Mercury handling and its narrow anodic window",
      "It never produces waves",
      "It requires no instrumentation",
    ],
    answer: 1,
    explanation:
      "Liquid mercury is hazardous to handle and oxidises at moderate potentials, cutting off the anodic side of the experiment.",
  },
  {
    id: "l9-mcq-032",
    topicId: "choosing-a-sweep",
    question:
      "The key trade-off across the sweep techniques is:",
    options: [
      "Simplicity versus sensitivity to the charging current",
      "Colour versus smell",
      "Mass versus length",
      "Voltage versus gravitational pull",
    ],
    answer: 0,
    explanation:
      "A plain sweep is simplest but carries the full RC tax; pulse methods buy sensitivity at the cost of more complex waveforms and parameters.",
  },
];
