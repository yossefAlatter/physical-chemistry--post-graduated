// Lesson 7 - Measuring a potential: question bank.
//
// Source syllabus: Bagotsky ch.9 (electron work functions and Volta
// potentials) and ch.12 (reference electrodes, potentiometry). Every question
// is original; none is taken from a textbook exercise. Four questions per
// section, the first three flagged as quick checks.

import type { Mcq } from "./types";

export const lesson7Mcq: Mcq[] = [
  // ----------------------------------------------------- what-is-measured
  {
    id: "l7-mcq-001",
    topicId: "what-is-measured",
    quick: true,
    question:
      "A voltmeter connected across an electrochemical cell always measures:",
    options: [
      "The absolute potential of one electrode",
      "The difference between two electrode potentials",
      "The current flowing through the cell",
      "The resistance of the electrolyte",
    ],
    answer: 1,
    explanation:
      "A voltage is defined between two points, and a meter has two probes. The reading is the difference between two complete metal-solution interfaces, never the potential of a single electrode in isolation.",
  },
  {
    id: "l7-mcq-002",
    topicId: "what-is-measured",
    quick: true,
    question:
      "The open-circuit emf of a cell is fixed by the difference between:",
    options: [
      "The electrochemical potentials of the electrons at the two terminals",
      "The masses of the two electrodes",
      "The volumes of the two half-cells",
      "The temperature of the room only",
    ],
    answer: 0,
    explanation:
      "At equilibrium with no current flowing, the difference in electron electrochemical potential between the terminals balances the chemical driving force of the cell reaction. That balance expressed per unit charge is the emf.",
  },
  {
    id: "l7-mcq-003",
    topicId: "what-is-measured",
    quick: true,
    question:
      "Why can the absolute potential of a single electrode not be measured?",
    options: [
      "Because electrodes are too small",
      "Because any probe inserted to read it creates a second interface with its own potential jump",
      "Because voltmeters are not sensitive enough",
      "Because electrode potentials are always exactly zero",
    ],
    answer: 1,
    explanation:
      "To touch the solution you must insert another conductor, which brings its own unknown metal-solution potential jump. The probe adds the very unknown you were trying to measure.",
  },
  {
    id: "l7-mcq-004",
    topicId: "what-is-measured",
    question:
      "An electrode potential quoted without naming a reference electrode is:",
    options: [
      "A complete and unambiguous measurement",
      "Ambiguous, because the same interface gives different numbers on different scales",
      "Always understood to be on the SHE scale",
      "Always zero",
    ],
    answer: 1,
    explanation:
      "The standard hydrogen electrode is assigned zero by convention, and practical references sit at different offsets from it. Without the reference label the number cannot be compared with anything.",
  },

  // --------------------------------------------------- inner-outer-surface
  {
    id: "l7-mcq-005",
    topicId: "inner-outer-surface",
    quick: true,
    question: "The outer potential of a conductor is the potential at a point:",
    options: [
      "Just outside the conductor, in the surrounding medium",
      "At the centre of the conductor",
      "At infinity, by definition",
      "Inside the surface layer only",
    ],
    answer: 0,
    explanation:
      "The outer potential is defined at a point just outside the conductor. Its reference point also lies in the same phase, which is why it can be measured.",
  },
  {
    id: "l7-mcq-006",
    topicId: "inner-outer-surface",
    quick: true,
    question:
      "The surface potential χ of a conductor is defined as:",
    options: [
      "φ_in minus ψ_ex",
      "ψ_ex minus φ_in",
      "φ_in plus ψ_ex",
      "Always zero",
    ],
    answer: 0,
    explanation:
      "The surface potential is the inner potential minus the outer potential. It isolates the potential jump across the conductor's own surface layer, where the electron cloud dies away and aligned dipoles sit.",
  },
  {
    id: "l7-mcq-007",
    topicId: "inner-outer-surface",
    quick: true,
    question:
      "Which of the three potentials of a phase can be measured directly?",
    options: [
      "The outer potential",
      "The inner potential",
      "The surface potential",
      "None of them",
    ],
    answer: 0,
    explanation:
      "Only the outer potential has both its test point and its reference point in the same phase. The inner and surface potentials each require crossing a phase boundary, which carries an unmeasurable contribution.",
  },
  {
    id: "l7-mcq-008",
    topicId: "inner-outer-surface",
    question:
      "The Galvani potential difference between two phases is:",
    options: [
      "The difference of their inner potentials",
      "The difference of their outer potentials",
      "Always exactly zero",
      "The sum of their work functions",
    ],
    answer: 0,
    explanation:
      "The Galvani potential difference is the difference between the inner potentials of the two phases. It governs charged-species equilibrium but is not measurable in isolation.",
  },

  // ------------------------------------------------- work-function-vacuum
  {
    id: "l7-mcq-009",
    topicId: "work-function-vacuum",
    quick: true,
    question: "The electron work function of a metal is the work needed to:",
    options: [
      "Move one electron from the metal to a point just outside it in vacuum",
      "Move an electron from vacuum into the metal",
      "Move an electron between two metals",
      "Move an ion from solution into the metal",
    ],
    answer: 0,
    explanation:
      "The work function is the minimum work to extract one electron from the metal to just outside its surface, with no kinetic energy imparted. It is always positive, otherwise electrons would leave spontaneously.",
  },
  {
    id: "l7-mcq-010",
    topicId: "work-function-vacuum",
    quick: true,
    question: "Electron work functions are traditionally quoted in:",
    options: [
      "Electronvolts (eV)",
      "Coulombs",
      "Farads",
      "Ohms",
    ],
    answer: 0,
    explanation:
      "Work functions refer to a single electron and are stated in electronvolts. One electronvolt is about 1.6 times 10 to the minus 19 joules.",
  },
  {
    id: "l7-mcq-011",
    topicId: "work-function-vacuum",
    quick: true,
    question:
      "The work function of a metal differs between its single-crystal faces because:",
    options: [
      "The surface potential differs from face to face",
      "The metal has a different identity on each face",
      "The electrons change charge",
      "The faces are at different temperatures",
    ],
    answer: 0,
    explanation:
      "Different faces pack their surface atoms differently and have different surface dipoles, so the surface-potential term in the work function changes while the bulk chemistry does not. This is direct evidence that surface potentials exist.",
  },
  {
    id: "l7-mcq-012",
    topicId: "work-function-vacuum",
    question: "Which of these is NOT a method of measuring the work function?",
    options: [
      "Photoemission threshold",
      "Thermionic emission",
      "The Kelvin contact-potential method",
      "Measuring the electrical resistance of the metal",
    ],
    answer: 3,
    explanation:
      "The three standard methods use light, heat or a capacitor to determine the energy needed to extract an electron. A resistance measurement says nothing about the work function.",
  },

  // -------------------------------------------------- work-function-solution
  {
    id: "l7-mcq-013",
    topicId: "work-function-solution",
    quick: true,
    question: "The work function in solution λE describes transferring an electron from:",
    options: [
      "The metal into the electrolyte, forming a solvated electron",
      "The electrolyte into the metal",
      "The metal into vacuum",
      "Vacuum into the solution",
    ],
    answer: 0,
    explanation:
      "In solution the receiving phase is an electrolyte and the electron sits as a solvated electron. The work function λE is the work to move the electron from the metal into that phase.",
  },
  {
    id: "l7-mcq-014",
    topicId: "work-function-solution",
    quick: true,
    question:
      "In the relation λE = A + Q0E on the SHE scale, the constant A is about:",
    options: ["3.10 eV", "0.31 eV", "31 eV", "310 eV"],
    answer: 0,
    explanation:
      "Photoelectron-emission measurements into solution give A = 3.10 plus or minus 0.005 eV against the standard hydrogen electrode.",
  },
  {
    id: "l7-mcq-015",
    topicId: "work-function-solution",
    quick: true,
    question:
      "At the same electrode potential, the work function in solution is:",
    options: [
      "The same for every metal",
      "Different for every metal",
      "Always zero",
      "Proportional to the atomic number",
    ],
    answer: 0,
    explanation:
      "When the Galvani potential is re-expressed in terms of electrode potential, the electron chemical potential of the metal appears twice and cancels. The work function in solution therefore does not depend on which metal is used.",
  },
  {
    id: "l7-mcq-016",
    topicId: "work-function-solution",
    question: "The law of five halves describes:",
    options: [
      "The photoelectron-emission current into solution as a function of photon energy",
      "The potential of a calomel electrode",
      "The Debye length of an electrolyte",
      "The slope of a Tafel plot",
    ],
    answer: 0,
    explanation:
      "Photoemission into solution follows I_ph = C(hν - λE)^(5/2). Plotting its 0.4 power against potential gives a straight line whose intercept locates the threshold and fixes A.",
  },

  // ------------------------------------------------------ volta-potentials
  {
    id: "l7-mcq-017",
    topicId: "volta-potentials",
    quick: true,
    question:
      "The Volta potential difference between two conductors is measured between points:",
    options: [
      "Just outside each conductor, in the same surrounding medium",
      "Inside each conductor",
      "At infinity in each phase",
      "On the two surface layers",
    ],
    answer: 0,
    explanation:
      "Both test points lie in the same medium (vacuum or air), so no phase boundary is crossed and the difference is measurable. It is the outer-potential difference between the two conductors.",
  },
  {
    id: "l7-mcq-018",
    topicId: "volta-potentials",
    quick: true,
    question:
      "Why is the Volta potential measurable when the Galvani potential is not?",
    options: [
      "Because both of its test points lie in the same phase",
      "Because it is always very small",
      "Because it is defined as zero",
      "Because it needs no reference point",
    ],
    answer: 0,
    explanation:
      "A test charge can be carried between the two outer points without crossing a phase boundary, so no unmeasurable surface term enters. The Galvani potential requires points in two different phases.",
  },
  {
    id: "l7-mcq-019",
    topicId: "volta-potentials",
    quick: true,
    question:
      "For two metals in equilibrium, the difference of their work functions equals:",
    options: [
      "Minus Q0 times the Volta potential between them",
      "Plus Q0 times the Volta potential",
      "Zero always",
      "nF times the Volta potential",
    ],
    answer: 0,
    explanation:
      "At equilibrium the electron electrochemical potential is uniform, so the work-function difference is cancelled by the electrostatic energy difference between the outer points: λ(α) - λ(β) = -Q0 φ_V(β,α).",
  },
  {
    id: "l7-mcq-020",
    topicId: "volta-potentials",
    question:
      "Which device directly measures the Volta potential between two dissimilar metals?",
    options: [
      "A capacitor, as in the Kelvin method",
      "A thermometer",
      "A barometer",
      "A pH meter",
    ],
    answer: 0,
    explanation:
      "When the plates of a capacitor are different metals, the charge that collects is governed by their Volta potential rather than by their inner-potential difference. Measuring or nulling that charge gives the Volta potential.",
  },

  // --------------------------------------------------------- volta-problem
  {
    id: "l7-mcq-021",
    topicId: "volta-problem",
    quick: true,
    question:
      "According to Volta's physical theory, a galvanic cell's voltage arises at:",
    options: [
      "The metal-metal junction",
      "The metal-solution interfaces",
      "The bulk of the electrolyte",
      "The connecting wires only",
    ],
    answer: 0,
    explanation:
      "Volta held that the potential difference resided wholly at the metal-metal junction and that metal-electrolyte interfaces carried no Galvani potential.",
  },
  {
    id: "l7-mcq-022",
    topicId: "volta-problem",
    quick: true,
    question:
      "According to Nernst's chemical theory, the cell voltage arises at:",
    options: [
      "The metal-solution interfaces where the electrode reactions occur",
      "The metal-metal junction",
      "The vacuum between the electrodes",
      "The surface of the wire",
    ],
    answer: 0,
    explanation:
      "Nernst placed the potential difference at the two metal-electrolyte interfaces, which explained why the cell voltage depends on solution composition and on the reaction Gibbs energy.",
  },
  {
    id: "l7-mcq-023",
    topicId: "volta-problem",
    quick: true,
    question:
      "The resolution of the Volta problem showed that the open-circuit voltage is:",
    options: [
      "The metal-metal Volta potential plus the difference of the two interface potential drops",
      "Exactly the Volta potential in all cases",
      "Exactly zero",
      "Independent of solution composition",
    ],
    answer: 0,
    explanation:
      "Frumkin and Gorodetzkaya wrote every Galvani potential as an interfacial part plus surface-potential terms. The result is E approximately equal to φ_V plus the difference of the two interface potential drops.",
  },
  {
    id: "l7-mcq-024",
    topicId: "volta-problem",
    question:
      "When both electrodes are held at their points of zero charge, the cell voltage equals:",
    options: [
      "The Volta potential between the two metals",
      "Zero",
      "The Nernst potential of the cell reaction",
      "The work function of the electrolyte",
    ],
    answer: 0,
    explanation:
      "At the point of zero charge the interfacial potential drop vanishes, so the interface terms in the resolution drop out and the cell voltage reduces to the metal-metal Volta potential.",
  },

  // ----------------------------------------------------- absolute-potential
  {
    id: "l7-mcq-025",
    topicId: "absolute-potential",
    quick: true,
    question:
      "Can the absolute Galvani potential of an electrode-solution interface be measured or obtained thermodynamically?",
    options: [
      "No; it can only be estimated from non-thermodynamic models",
      "Yes, with a suitable voltmeter",
      "Yes, directly from the Nernst equation",
      "It is always exactly zero",
    ],
    answer: 0,
    explanation:
      "There is no interface whose Galvani potential can be measured or calculated thermodynamically. It can only be estimated from models of the metal surface and the solvent surface layer.",
  },
  {
    id: "l7-mcq-026",
    topicId: "absolute-potential",
    quick: true,
    question:
      "The surface potential of mercury estimated from its work function is roughly:",
    options: ["+2.2 V", "-2.2 V", "+0.13 V", "-0.13 V"],
    answer: 0,
    explanation:
      "Combining the measured work function with a calculated electron chemical potential for mercury gives a surface potential of roughly +2.2 V.",
  },
  {
    id: "l7-mcq-027",
    topicId: "absolute-potential",
    quick: true,
    question: "The estimated surface potential of water is about:",
    options: ["+0.13 V", "+2.2 V", "1.6 V", "Zero"],
    answer: 0,
    explanation:
      "Comparing measured and calculated solvation energies gives about +0.13 V for water. The positive sign means that surface water molecules are oriented with their negative ends away from the bulk.",
  },
  {
    id: "l7-mcq-028",
    topicId: "absolute-potential",
    question:
      "For a mercury electrode at the standard hydrogen electrode potential, the estimated Galvani potential across the metal-solution interface is about:",
    options: ["1.6 V", "0.16 V", "16 V", "0.016 V"],
    answer: 0,
    explanation:
      "Combining the mercury surface potential, the water surface potential and the measured outer potential gives a Galvani potential near 1.6 V, an order-of-magnitude estimate rather than a precise measurement.",
  },

  // ----------------------------------------------------- reference-electrodes
  {
    id: "l7-mcq-029",
    topicId: "reference-electrodes",
    quick: true,
    question: "The standard hydrogen electrode is assigned a potential of:",
    options: [
      "Zero at every temperature, by convention",
      "0.2412 V",
      "0.2224 V against itself",
      "Exactly 1.6 V",
    ],
    answer: 0,
    explanation:
      "The SHE defines the zero of the aqueous electrode-potential scale, and even its temperature coefficient is defined as zero. Every other potential is quoted relative to it.",
  },
  {
    id: "l7-mcq-030",
    topicId: "reference-electrodes",
    quick: true,
    question:
      "The saturated calomel electrode (SCE) has a potential against the SHE at 25 C of:",
    options: ["0.2412 V", "0.2224 V", "0.2676 V", "0.6151 V"],
    answer: 0,
    explanation:
      "The saturated calomel electrode, with about 4.2 M KCl, sits at 0.2412 V. Its potential is reproducible to about 0.1 mV, but drifts with temperature.",
  },
  {
    id: "l7-mcq-031",
    topicId: "reference-electrodes",
    quick: true,
    question:
      "The silver-silver chloride electrode has a potential against the SHE of about:",
    options: ["0.2224 V", "0.2412 V", "0.2676 V", "0.6151 V"],
    answer: 0,
    explanation:
      "Coating a silver wire with AgCl gives a compact, robust reference near 0.2224 V against the standard hydrogen electrode.",
  },
  {
    id: "l7-mcq-032",
    topicId: "reference-electrodes",
    question:
      "The saturated calomel electrode has a comparatively large temperature coefficient, about:",
    options: ["0.65 mV per kelvin", "0.065 mV per kelvin", "6.5 mV per kelvin", "zero"],
    answer: 0,
    explanation:
      "The solubility of calomel changes with temperature, so the saturated electrode drifts by about 0.65 mV/K. Measurements of high precision require thermostating or applying the coefficient.",
  },

  // ------------------------------------------------ potentiometry-and-limits
  {
    id: "l7-mcq-033",
    topicId: "potentiometry-and-limits",
    quick: true,
    question: "The defining condition of a potentiometric measurement is that:",
    options: [
      "Essentially no current flows through the cell",
      "The maximum possible current flows",
      "A constant large current is passed",
      "The cell is short-circuited",
    ],
    answer: 0,
    explanation:
      "Potentiometry measures the open-circuit voltage. Drawing current would drive the electrode reactions, change the surface concentrations, and alter the potential being measured.",
  },
  {
    id: "l7-mcq-034",
    topicId: "potentiometry-and-limits",
    quick: true,
    question:
      "Why is an ordinary moving-coil voltmeter unsuitable for potentiometry?",
    options: [
      "It draws a current large enough to polarise the electrodes and shift the reading",
      "It is too accurate",
      "It cannot display a voltage",
      "It requires no power",
    ],
    answer: 0,
    explanation:
      "A moving-coil meter draws milliamperes, producing an ohmic drop and polarising the electrodes. Electronic voltmeters with input currents as low as 10 to the minus 14 amperes avoid this.",
  },
  {
    id: "l7-mcq-035",
    topicId: "potentiometry-and-limits",
    quick: true,
    question: "A Luggin capillary is used to:",
    options: [
      "Bring the reference electrode tip close to the working electrode to reduce ohmic drop",
      "Heat the electrolyte",
      "Stir the solution",
      "Measure the cell current",
    ],
    answer: 0,
    explanation:
      "The Luggin capillary places the reference tip near the working electrode so that the ohmic potential drop included in the measured voltage is small, without screening the electrode surface.",
  },
  {
    id: "l7-mcq-036",
    topicId: "potentiometry-and-limits",
    question: "A liquid-junction potential arises when:",
    options: [
      "Two electrolytes of different composition meet and their ions diffuse at different rates",
      "Two metals are pressed together",
      "The cell is exactly at equilibrium",
      "No current flows through the cell",
    ],
    answer: 0,
    explanation:
      "At a boundary between different electrolytes, unequal ion mobilities produce a small potential difference. It adds to the measured voltage and is minimised by matching compositions or using a concentrated KCl salt bridge.",
  },
];