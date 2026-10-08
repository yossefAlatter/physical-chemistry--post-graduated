// Lesson 8 - Steady-state and transient methods: question bank.
//
// Source syllabus: Bagotsky ch.11-12 and Bard & Faulkner ch.5, 8. Every
// question is original; none is taken from a textbook exercise. Four
// questions per section, the first three flagged as quick checks.

import type { Mcq } from "./types";

export const lesson8Mcq: Mcq[] = [
  // ------------------------------------------------------ why-transient
  {
    id: "l8-mcq-001",
    topicId: "why-transient",
    quick: true,
    question:
      "Why does the faradaic current after a potential step change with time?",
    options: [
      "Because the electrode shrinks",
      "Because the diffusion layer thickens and the surface concentration gradient falls",
      "Because the Faraday constant changes",
      "Because the reference electrode drifts",
    ],
    answer: 1,
    explanation:
      "The step depletes reactant at the surface. The depleted zone grows roughly as sqrt(Dt), the surface-to-bulk gradient flattens, and the current decays accordingly.",
  },
  {
    id: "l8-mcq-002",
    topicId: "why-transient",
    quick: true,
    question:
      "Immediately after a potential step, the measured current is mostly due to:",
    options: [
      "Charging of the electrical double layer",
      "Bulk migration of supporting electrolyte",
      "Nucleation of a new solid phase",
      "Evaporation of solvent",
    ],
    answer: 0,
    explanation:
      "The double layer behaves like a capacitor; its charging current decays with the RC time constant, before the slower faradaic tail relaxes.",
  },
  {
    id: "l8-mcq-003",
    topicId: "why-transient",
    quick: true,
    question:
      "The diffusion layer thickness after time t scales approximately as:",
    options: ["D t²", "sqrt(D t)", "D/t", "sqrt(t/D)"],
    answer: 1,
    explanation:
      "From the diffusion length l² ≈ Dt, the layer grows as sqrt(Dt). That is why the diffusion-limited current falls as t^{-1/2}.",
  },
  {
    id: "l8-mcq-004",
    topicId: "why-transient",
    question:
      "Which process sets the lower practical time limit of a chronoamperometric measurement?",
    options: [
      "The time for the solvent to evaporate",
      "The RC charging time of the double layer and the cell",
      "The lifetime of the reference electrode",
      "The diffusion coefficient of the solvent",
    ],
    answer: 1,
    explanation:
      "Until the capacitive transient has decayed, the recorded current is not faradaic. Waiting several RC time constants (or subtracting the charging tail) is required before the Cottrell analysis applies.",
  },

  // ------------------------------------------------------- cottrell
  {
    id: "l8-mcq-005",
    topicId: "cottrell",
    quick: true,
    question:
      "After a potential step well into the mass-transfer-limited region, the current follows:",
    options: [
      "i ∝ t^{1/2}",
      "i ∝ 1/sqrt(t)",
      "i ∝ constant",
      "i ∝ e^{t/RC}",
    ],
    answer: 1,
    explanation:
      "The Cottrell equation gives i = nFAC sqrt(D)/(pi t)^{1/2}. The current decays as t^{-1/2} because the diffusion layer thickens as sqrt(Dt).",
  },
  {
    id: "l8-mcq-006",
    topicId: "cottrell",
    quick: true,
    question:
      "A plot of i versus t^{-1/2} for a planar, mass-transfer-limited step is:",
    options: [
      "A parabola",
      "A straight line through the origin",
      "An exponential decay",
      "A horizontal line",
    ],
    answer: 1,
    explanation:
      "Cottrell's equation is linear in t^{-1/2}. The slope, nFAC sqrt(D/pi), is the usual route to a diffusion coefficient.",
  },
  {
    id: "l8-mcq-007",
    topicId: "cottrell",
    quick: true,
    question:
      "In the Cottrell experiment the surface concentration of the reactant is pinned at:",
    options: [
      "Its bulk value",
      "Zero, because the step is taken deep in the limiting region",
      "Half its bulk value",
      "Its value at the reference electrode",
    ],
    answer: 1,
    explanation:
      "Stepping into the mass-transfer-limited region means every ion arriving at the surface reacts instantly, so the surface concentration is essentially zero.",
  },
  {
    id: "l8-mcq-008",
    topicId: "cottrell",
    question:
      "Doubling the bulk concentration in a Cottrell experiment does what to the current at a fixed time?",
    options: [
      "Leaves it unchanged",
      "Doubles it",
      "Halves it",
      "Quadruples it",
    ],
    answer: 1,
    explanation:
      "The Cottrell current is directly proportional to the bulk concentration C. Double C and you double i at every time.",
  },

  // --------------------------------------------------- microelectrodes
  {
    id: "l8-mcq-009",
    topicId: "microelectrodes",
    quick: true,
    question:
      "At a micrometer-sized electrode the diffusion field is best described as:",
    options: [
      "Planar (one-dimensional)",
      "Radial, spreading in all directions",
      "Absent",
      "Spherical but shrinking with time",
    ],
    answer: 1,
    explanation:
      "Around a very small electrode the depleted zone grows in three dimensions, so fresh solution arrives from the whole sphere, giving radial diffusion.",
  },
  {
    id: "l8-mcq-010",
    topicId: "microelectrodes",
    quick: true,
    question:
      "The current at a microelectrode after the transient settles:",
    options: [
      "Decays as t^{-1/2} forever",
      "Reaches a nonzero steady value",
      "Is exactly zero",
      "Oscillates",
    ],
    answer: 1,
    explanation:
      "Radial diffusion can sustain a time-independent depletion layer, so the limiting current levels off instead of decaying - e.g. i_ss = 4nFDCr for a sphere.",
  },
  {
    id: "l8-mcq-011",
    topicId: "microelectrodes",
    quick: true,
    question:
      "Why are microelectrodes useful in poorly conducting solvents?",
    options: [
      "They dissolve the solvent",
      "Their tiny currents keep the iR drop in the solution negligible",
      "They work at room temperature only",
      "They need no reference electrode because they are so small",
    ],
    answer: 1,
    explanation:
      "Small area means small current, so the potential lost across the solution resistance stays small and the measurement is accurate even without supporting electrolyte.",
  },
  {
    id: "l8-mcq-012",
    topicId: "microelectrodes",
    question:
      "For a spherical microelectrode of radius r, the steady limiting current is proportional to:",
    options: ["r²", "1/r", "r", "r^{3/2}"],
    answer: 2,
    explanation:
      "i_ss = 4 pi n F D C r: first order in the radius, because radial diffusion converges onto a smaller capture zone.",
  },

  // ------------------------------------------------ polarization-curve
  {
    id: "l8-mcq-013",
    topicId: "polarization-curve",
    quick: true,
    question:
      "A steady-state polarization curve plots:",
    options: [
      "Current vs time",
      "Steady current density vs electrode potential",
      "Charge vs time",
      "Potential vs concentration only",
    ],
    answer: 1,
    explanation:
      "Each point is the steady current reached after holding the electrode at one potential; the curve maps activation and mass-transfer limits directly.",
  },
  {
    id: "l8-mcq-014",
    topicId: "polarization-curve",
    quick: true,
    question:
      "At very negative overpotentials a fast reaction reaches a current plateau because:",
    options: [
      "The kinetics become the bottleneck",
      "The supply of reactant by mass transfer becomes the bottleneck",
      "The reference electrode saturates",
      "The double layer stops charging",
    ],
    answer: 1,
    explanation:
      "Once the electron transfer is overwhelmingly fast, every arriving molecule reacts; the current is capped by diffusion, giving the limiting-current plateau.",
  },
  {
    id: "l8-mcq-015",
    topicId: "polarization-curve",
    quick: true,
    question:
      "The term iR in the overpotential budget is the voltage lost:",
    options: [
      "Across the double layer",
      "Across the solution resistance between working and reference electrodes",
      "Inside the reference electrode only",
      "Inside the metal of the working electrode",
    ],
    answer: 1,
    explanation:
      "Current flowing between working and reference electrodes drops part of the applied potential across the electrolyte. The electrode effectively sees E - iR.",
  },
  {
    id: "l8-mcq-016",
    topicId: "polarization-curve",
    question:
      "Which practice most reliably reduces an uncompensated iR error?",
    options: [
      "Stirring harder only",
      "Adding supporting electrolyte and/or positive-feedback iR compensation",
      "Cooling the cell",
      "Using a brighter lamp",
    ],
    answer: 1,
    explanation:
      "More supporting electrolyte lowers the solution resistance; feedback compensation removes the remaining drop in the applied potential.",
  },

  // --------------------------------------------- chronoamperometry
  {
    id: "l8-mcq-017",
    topicId: "chronoamperometry",
    quick: true,
    question: "Chronoamperometry measures:",
    options: [
      "Charge vs time at constant current",
      "Current vs time after a potential step",
      "Potential vs time at constant current",
      "Conductance vs frequency",
    ],
    answer: 1,
    explanation:
      "The name splits cleanly: chronos (time) + ampero (current) + metry. The potential is stepped and the current is recorded against time.",
  },
  {
    id: "l8-mcq-018",
    topicId: "chronoamperometry",
    quick: true,
    question:
      "A double potential step experiment reverses the step to:",
    options: [
      "Measure the solution resistance",
      "Convert the product of the first step back and test for coupled chemistry",
      "Charge the double layer",
      "Clean the electrode",
    ],
    answer: 1,
    explanation:
      "Reoxidising or rereducing the product of the forward step gives a reverse current. If a homogeneous reaction consumed that product first, the reverse charge is smaller - the basis of EC detection.",
  },
  {
    id: "l8-mcq-019",
    topicId: "chronoamperometry",
    quick: true,
    question:
      "In double-step chronoamperometry, Q_reverse/Q_forward ≈ 1 means:",
    options: [
      "All of the first-step product survived to be converted back",
      "A side reaction ate the product",
      "The electrode area doubled",
      "The solution became more concentrated",
    ],
    answer: 0,
    explanation:
      "Unit charge ratio says nothing was lost between steps: the product of step one is exactly what comes back in step two.",
  },
  {
    id: "l8-mcq-020",
    topicId: "chronoamperometry",
    question:
      "A chronoamperometric trace that lies below the Cottrell prediction suggests:",
    options: [
      "The electrode is perfectly reversible",
      "Electron-transfer kinetics or an adsorption/precursor step is holding the reaction back",
      "The diffusion coefficient is infinite",
      "The double-layer capacitance is zero",
    ],
    answer: 1,
    explanation:
      "Cottrell assumes the surface concentration is instantly driven to zero. Any kinetic limitation keeps it nonzero and lowers the current.",
  },

  // --------------------------------------------- chronopotentiometry
  {
    id: "l8-mcq-021",
    topicId: "chronopotentiometry",
    quick: true,
    question: "Chronopotentiometry records:",
    options: [
      "Current vs time at fixed potential",
      "Potential vs time at fixed current",
      "Current vs potential",
      "Charge vs potential",
    ],
    answer: 1,
    explanation:
      "The roles are reversed relative to chronoamperometry: the current is stepped and the potential is the signal.",
  },
  {
    id: "l8-mcq-022",
    topicId: "chronopotentiometry",
    quick: true,
    question: "The transition time tau is:",
    options: [
      "The time for the double layer to charge",
      "The moment the surface reactant is exhausted and the potential jumps",
      "The time to reach room temperature",
      "The time constant of the potentiostat",
    ],
    answer: 1,
    explanation:
      "As the surface concentration falls, Nernst drags the potential onward; when the reactant runs out the potential snaps to the next process. That break is tau.",
  },
  {
    id: "l8-mcq-023",
    topicId: "chronopotentiometry",
    quick: true,
    question:
      "The Sand equation says that for a given solution and electrode, i sqrt(tau) is:",
    options: ["Zero", "Constant", "Equal to the exchange current", "Exponential"],
    answer: 1,
    explanation:
      "i sqrt(tau) = nFAC sqrt(pi D)/2, a constant set by the system. Hence doubling the current quarters tau.",
  },
  {
    id: "l8-mcq-024",
    topicId: "chronopotentiometry",
    question:
      "Which boundary-condition change turns Cottrell behaviour into Sand behaviour?",
    options: [
      "Step the current instead of the potential",
      "Add more solvent",
      "Lower the temperature",
      "Use a larger electrode",
    ],
    answer: 0,
    explanation:
      "Both follow from Fick's second law; they differ only in whether you hold the potential or the flux (current) fixed at the surface.",
  },

  // ----------------------------------------------------- coulometry
  {
    id: "l8-mcq-025",
    topicId: "coulometry",
    quick: true,
    question:
      "Coulometry determines an amount of analyte from:",
    options: [
      "The peak potential",
      "The total charge passed, assuming unit current efficiency",
      "The solution colour",
      "The electrode mass change only",
    ],
    answer: 1,
    explanation:
      "Q = zFn at 100 % current efficiency, so integrating the current gives a mole count. No calibration against a standard is needed.",
  },
  {
    id: "l8-mcq-026",
    topicId: "coulometry",
    quick: true,
    question:
      "In controlled-potential coulometry the current is integrated until:",
    options: [
      "One minute has passed",
      "The current has decayed to its baseline, i.e. the analyte is exhausted",
      "The potential doubles",
      "The solution changes colour on its own",
    ],
    answer: 1,
    explanation:
      "The fading current is the fingerprint of the analyte being consumed; its time-integral is the total amount present.",
  },
  {
    id: "l8-mcq-027",
    topicId: "coulometry",
    quick: true,
    question: "A coulometric titration generates the titrant:",
    options: [
      "By adding a standard solution from a burette",
      "Electrolytically, on demand, at a fixed current",
      "By photolysis",
      "By heating",
    ],
    answer: 1,
    explanation:
      "A steady current produces the titrant in situ; the time to the endpoint, times the current, yields moles of titrant and hence analyte.",
  },
  {
    id: "l8-mcq-028",
    topicId: "coulometry",
    question:
      "The most serious assumption of any coulometric measurement is:",
    options: [
      "The electrolyte must be aqueous",
      "The current efficiency for the target reaction is 100 %",
      "The temperature must be exactly 25 °C",
      "The electrode must be mercury",
    ],
    answer: 1,
    explanation:
      "Any side reaction skims charge away from the stoichiometry, biasing the result. Defending unit efficiency is the heart of the method.",
  },

  // ------------------------------------------------------ choosing
  {
    id: "l8-mcq-029",
    topicId: "choosing",
    quick: true,
    question:
      "You want a diffusion coefficient and the chance to test for a coupled EC reaction. Best tool?",
    options: [
      "Chronoamperometry with a double step",
      "Potentiometry at zero current",
      "Weighing the electrode",
      "Measuring the pH",
    ],
    answer: 0,
    explanation:
      "The forward decay gives D via Cottrell; the reverse step tests whether the product survived to be converted back, which is the EC signature.",
  },
  {
    id: "l8-mcq-030",
    topicId: "choosing",
    quick: true,
    question: "To find out how much of an analyte is in a solution, use:",
    options: [
      "Coulometry",
      "A thermometer",
      "A voltammogram's peak position only",
      "The colour of the electrodes",
    ],
    answer: 0,
    explanation:
      "Coulometry is the direct method: the total charge passed at unit efficiency counts the moles of analyte.",
  },
  {
    id: "l8-mcq-031",
    topicId: "choosing",
    quick: true,
    question:
      "To map kinetics at low overpotential and the mass-transfer plateau at high overpotential, use:",
    options: [
      "A steady-state polarization curve",
      "A single chronoamperometric step",
      "A reference electrode alone",
      "A salt bridge",
    ],
    answer: 0,
    explanation:
      "Step-and-hold polarization records the steady current at each potential, tracing activation control at the foot and diffusion control at the plateau.",
  },
  {
    id: "l8-mcq-032",
    topicId: "choosing",
    question:
      "Cottrell and Sand behaviour differ because:",
    options: [
      "They use different solvents",
      "One steps the potential, the other steps the current",
      "They rely on different Faraday constants",
      "One is for cathodes, one for anodes only",
    ],
    answer: 1,
    explanation:
      "They are the same diffusion physics with different boundary conditions: fixed surface concentration (stepped potential) versus fixed flux (stepped current).",
  },
];
