// Lesson 12 - Coupled chemistry and coulometry: question bank.
//
// Source syllabus: Bagotsky ch.17-18 and Bard & Faulkner ch.11-12.
// Every question is original; none is taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson12Mcq: Mcq[] = [
  // ------------------------------------------------------ when-not-alone
  {
    id: "l12-mcq-001",
    topicId: "when-not-alone",
    quick: true,
    question: "In the EC notation, C stands for:",
    options: [
      "A heterogeneous electron transfer",
      "A homogeneous chemical step",
      "A cathodic current",
      "A concentration change",
    ],
    answer: 1,
    explanation:
      "E labels an electrode (electron-transfer) step; C labels a chemical reaction happening in homogeneous solution; read them left to right for the mechanism.",
  },
  {
    id: "l12-mcq-002",
    topicId: "when-not-alone",
    quick: true,
    question: "An EC mechanism is:",
    options: [
      "Electron transfer, then a homogeneous reaction that consumes the product",
      "Two electron transfers in a row",
      "A chemical step followed by electron transfer",
      "Only electron transfer",
    ],
    answer: 0,
    explanation:
      "The electrode makes R; a following solution reaction removes it. The reverse wave on the voltammogram shrinks or disappears.",
  },
  {
    id: "l12-mcq-003",
    topicId: "when-not-alone",
    quick: true,
    question: "In a CE mechanism:",
    options: [
      "The electrode makes the reactant",
      "A homogeneous reaction makes the electroactive species that the electrode then consumes",
      "Nothing reacts",
      "Two electrodes exchange charge",
    ],
    answer: 1,
    explanation:
      "The chemical step precedes the electrode and feeds it; if it is slow, it throttles the limiting current.",
  },
  {
    id: "l12-mcq-004",
    topicId: "when-not-alone",
    question:
      "The letter sequence ECE means:",
    options: [
      "One chemical step only",
      "Electron transfer, then a chemical step, then a second electron transfer",
      "Two cells in parallel",
      "An electrode, a capacitor, and an evaporator",
    ],
    answer: 1,
    explanation:
      "Read literally: E (at the electrode), C (in solution), E (back at the electrode). Each letter is one step of the mechanism.",
  },

  // --------------------------------------------------------- ec-mechanism
  {
    id: "l12-mcq-005",
    topicId: "ec-mechanism",
    quick: true,
    question:
      "If the follow-up chemical step in an EC reaction is much slower than the reverse scan, the voltammogram looks:",
    options: [
      "Irreversible, with no return wave",
      "Reversible, with an intact return wave",
      "Doubled in current",
      "Silent",
    ],
    answer: 1,
    explanation:
      "A slow C step leaves the product R intact through the experiment, so the reverse wave comes back in full.",
  },
  {
    id: "l12-mcq-006",
    topicId: "ec-mechanism",
    quick: true,
    question:
      "A very fast EC follow-up reaction makes the couple appear:",
    options: ["Reversible", "Irreversible", "Oscillating", "Rectangular"],
    answer: 1,
    explanation:
      "If R is destroyed before the potential is reversed, there is nothing left to reoxidise or rereduce, so the reverse wave vanishes.",
  },
  {
    id: "l12-mcq-007",
    topicId: "ec-mechanism",
    quick: true,
    question:
      "The rate of an EC follow-up reaction can be measured because:",
    options: [
      "It changes the colour of the solution",
      "The reverse-peak size depends on how much product survives the time between forward and reverse scans",
      "It doubles the Faraday constant",
      "It erases the formal potential",
    ],
    answer: 1,
    explanation:
      "Larger scan rates give the coupled chemistry less time, so the reverse wave grows back; fitting that growth yields k.",
  },
  {
    id: "l12-mcq-008",
    topicId: "ec-mechanism",
    question:
      "In the EC diagnostic, the dimensionless parameter lambda = k/a compares:",
    options: [
      "The chemical rate to the scan rate",
      "The two electrode areas",
      "Two diffusion coefficients",
      "The two solutions in the salt bridge",
    ],
    answer: 0,
    explanation:
      "Lambda compares the clock of the homogeneous step with the clock of the scan; its value picks out the reversible, transition, and irreversible regimes.",
  },

  // ------------------------------------------------ catalytic-and-ce
  {
    id: "l12-mcq-009",
    topicId: "catalytic-and-ce",
    quick: true,
    question:
      "In a CE mechanism, the limiting current can be limited by:",
    options: [
      "Only diffusion",
      "The rate of the chemical step that makes the electroactive species",
      "The reference electrode",
      "The salt bridge",
    ],
    answer: 1,
    explanation:
      "If the C step cannot feed the electrode fast enough, feeding - not diffusion - caps the current.",
  },
  {
    id: "l12-mcq-010",
    topicId: "catalytic-and-ce",
    quick: true,
    question:
      "An EC' (catalytic) currents grows with the concentration of:",
    options: [
      "The mediator only",
      "The chemical partner that regenerates the mediator",
      "The solvent",
      "The reference electrolyte",
    ],
    answer: 1,
    explanation:
      "The mediator turns over; the partner supplies the fresh reactant. The plateau scales with [partner], not with [mediator].",
  },
  {
    id: "l12-mcq-011",
    topicId: "catalytic-and-ce",
    quick: true,
    question:
      "In an EC' catalytic scheme the steady current scales approximately as:",
    options: ["k[Z]", "sqrt(k[Z])", "1/[Z]", "constant"],
    answer: 1,
    explanation:
      "The catalytic plateau is proportional to the square root of k times the partner concentration - the classic EC' signature.",
  },
  {
    id: "l12-mcq-012",
    topicId: "catalytic-and-ce",
    question:
      "In a CE scheme on a voltammogram, the forward peak typically:",
    options: [
      "Rises exactly as Randles-Sevcik (proportional to sqrt(v))",
      "Flattens or falls at high scan rates because the chemical feed cannot keep pace",
      "Disappears entirely at all scan rates",
      "Doubles",
    ],
    answer: 1,
    explanation:
      "A true diffusion peak grows with sqrt(v); a CE-fed wave saturates because the chemical step cannot supply more than its own rate allows.",
  },

  // --------------------------------------------------- bulk-electrolysis
  {
    id: "l12-mcq-013",
    topicId: "bulk-electrolysis",
    quick: true,
    question:
      "Bulk electrolysis is driven until which signal?",
    options: [
      "The current peaks",
      "The current decays back to background, signalling exhaustion of the analyte",
      "The voltage doubles",
      "The colour changes",
    ],
    answer: 1,
    explanation:
      "As the analyte is depleted the current fades; its return to the baseline marks completion.",
  },
  {
    id: "l12-mcq-014",
    topicId: "bulk-electrolysis",
    quick: true,
    question:
      "The current efficiency in a bulk electrolysis must be near 100 % because:",
    options: [
      "Otherwise the solution boils",
      "Any side reaction spends charge on something other than the target species",
      "Otherwise the electrode falls in",
      "It doubles the current",
    ],
    answer: 1,
    explanation:
      "Charge is the budget; spending it on side reactions corrupts the stoichiometry that makes the method quantitative.",
  },
  {
    id: "l12-mcq-015",
    topicId: "bulk-electrolysis",
    quick: true,
    question:
      "Bulk electrolysis cells are usually stirred or flow-through because:",
    options: [
      "Diffusion alone cannot feed the electrode fast enough from the whole bath",
      "It lowers the Faraday constant",
      "It removes the need for electrolyte",
      "It cools the reactor",
    ],
    answer: 0,
    explanation:
      "Exhaustive conversion needs transport across the entire cell volume, so convection, large area, or porous beds do the delivery.",
  },
  {
    id: "l12-mcq-016",
    topicId: "bulk-electrolysis",
    question:
      "To electrolyse two reducible species separately at one electrode you need:",
    options: [
      "Two identical formal potentials",
      "Formal potentials far enough apart to allow windows of selective reduction",
      "A bigger salt bridge",
      "A brighter lamp",
    ],
    answer: 1,
    explanation:
      "Only if their reduction potentials are well separated can one be exhausted before the other starts to react.",
  },

  // --------------------------------------------- coulometry-as-analysis
  {
    id: "l12-mcq-017",
    topicId: "coulometry-as-analysis",
    quick: true,
    question: "Controlled-potential coulometry measures amount by:",
    options: [
      "Timing the decay of the cell",
      "Integrating the current until it reaches baseline",
      "Weighing the salt bridge",
      "Measuring temperature",
    ],
    answer: 1,
    explanation:
      "n = (1/zF) ∫ i dt: the total charge spent on the target reaction, at unit efficiency, is the amount of analyte present.",
  },
  {
    id: "l12-mcq-018",
    topicId: "coulometry-as-analysis",
    quick: true,
    question: "A coulometric titration is:",
    options: [
      "A titration with a burette",
      "A titration whose titrant is generated electrolytically at a fixed current",
      "A weighing",
      "A pH measurement",
    ],
    answer: 1,
    explanation:
      "Steady current produces titrant in situ; the time to the endpoint, times the current, yields moles of titrant and hence analyte.",
  },
  {
    id: "l12-mcq-019",
    topicId: "coulometry-as-analysis",
    quick: true,
    question:
      "Coulometry is called an absolute method because:",
    options: [
      "It needs a standard of the analyte",
      "It relies only on the Faraday constant, a defined constant of nature",
      "It needs no electricity",
      "It never errs",
    ],
    answer: 1,
    explanation:
      "F is fixed by SI; with unit current efficiency and a true endpoint the mole count follows without chemical standards.",
  },
  {
    id: "l12-mcq-020",
    topicId: "coulometry-as-analysis",
    question:
      "The two experimental pillars of any coulometric determination are:",
    options: [
      "100 % current efficiency and a reliable endpoint",
      "A cold solution and a hot electrode",
      "A burette and a pipette",
      "A coloured indicator and a light source",
    ],
    answer: 0,
    explanation:
      "Unit efficiency keeps every electron on the target; a sharp endpoint tells you when the budget has been fully spent.",
  },

  // ------------------------------------------------------ reactor-design
  {
    id: "l12-mcq-021",
    topicId: "reactor-design",
    quick: true,
    question: "The reversible part of the cell voltage is:",
    options: [
      "The ohmic drop",
      "The thermodynamic EMF",
      "The activation overpotential",
      "The concentration overpotential",
    ],
    answer: 1,
    explanation:
      "E_thermo is the minimum voltage the reaction demands by thermodynamics; the overpotentials and ohmic drop sit on top of it.",
  },
  {
    id: "l12-mcq-022",
    topicId: "reactor-design",
    quick: true,
    question: "Every extra millivolt in a cell voltage is paid for as:",
    options: ["Light", "Heat", "More product", "Less electrolyte cost"],
    answer: 1,
    explanation:
      "Overpotential beyond the reversible requirement is dissipated as heat in the cell; efficiency and operating cost track the difference.",
  },
  {
    id: "l12-mcq-023",
    topicId: "reactor-design",
    quick: true,
    question: "A separator in a cell is there to:",
    options: [
      "Pass ions but keep the two product streams from mixing",
      "Block all ions",
      "Conduct electrons",
      "Heat the electrolyte",
    ],
    answer: 0,
    explanation:
      "The separator carries ionic current while keeping anode and cathode products apart - the chemistry of the cell depends on it.",
  },
  {
    id: "l12-mcq-024",
    topicId: "reactor-design",
    question:
      "Why do industrial cells stack plates or use porous beds?",
    options: [
      "To look tidy",
      "To maximise electroactive area per unit volume and lower current density",
      "To remove the need for collectors",
      "To change the standard potential",
    ],
    answer: 1,
    explanation:
      "More area at the same total current means lower current density, smaller overpotentials, and a cooler, cheaper cell.",
  },
];
