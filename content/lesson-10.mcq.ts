// Lesson 10 - Hydrodynamic methods: question bank.
//
// Source syllabus: Bard & Faulkner ch.9 and Bagotsky ch.4.4. Every
// question is original; none is taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson10Mcq: Mcq[] = [
  // ---------------------------------------------- why-force-convection
  {
    id: "l10-mcq-001",
    topicId: "why-force-convection",
    quick: true,
    question:
      "The main reason to force convection in an electrochemical cell is to:",
    options: [
      "Cool the cell",
      "Make the diffusion layer thickness reproducible and known",
      "Increase the solvent viscosity",
      "Remove the need for a reference electrode",
    ],
    answer: 1,
    explanation:
      "In a still solution the layer thickness is an uncontrolled boundary condition; controlled flow makes the mass-transfer rate a settable quantity.",
  },
  {
    id: "l10-mcq-002",
    topicId: "why-force-convection",
    quick: true,
    question:
      "Spinning an electrode faster makes the limiting current:",
    options: ["Smaller", "Larger", "Unchanged", "Zero"],
    answer: 1,
    explanation:
      "Faster flow thins the diffusion layer, steepens the surface gradient, and so raises the limiting current.",
  },
  {
    id: "l10-mcq-003",
    topicId: "why-force-convection",
    quick: true,
    question: "Near a working electrode in a flowing solution the current is set across:",
    options: [
      "The bulk solution",
      "A thin diffusional layer right at the electrode surface",
      "The counter electrode",
      "The reference electrode junction",
    ],
    answer: 1,
    explanation:
      "The bulk is well stirred; the last concentration change happens in the thin stagnant diffusion layer adjacent to the electrode, and that gradient carries the flux.",
  },
  {
    id: "l10-mcq-004",
    topicId: "why-force-convection",
    question:
      "In a quiescent electrochemical cell, the limiting current tends to:",
    options: [
      "Be perfectly reproducible",
      "Drift as stray convection changes the diffusion layer",
      "Equal the exchange current",
      "Follow the Cottrell equation forever",
    ],
    answer: 1,
    explanation:
      "Without controlled transport the layer grows and is continually perturbed, so the limiting current is poorly defined - which is the motivation for hydrodynamic methods.",
  },

  // -------------------------------------------------- rotating-disk
  {
    id: "l10-mcq-005",
    topicId: "rotating-disk",
    quick: true,
    question:
      "A rotating disk electrode pumps solution:",
    options: [
      "Parallel to the disk face only",
      "Up along the axis and outward across the face",
      "Nowhere - the fluid is static",
      "Down into the disk",
    ],
    answer: 1,
    explanation:
      "The spinning disk flings fluid outward; fresh solution is drawn in along the rotation axis, giving an exact axisymmetric flow.",
  },
  {
    id: "l10-mcq-006",
    topicId: "rotating-disk",
    quick: true,
    question:
      "The Levich limiting current on a disk scales with rotation rate omega as:",
    options: ["omega", "omega^{1/2}", "omega^2", "1/omega"],
    answer: 1,
    explanation:
      "i_L = 0.620 n F A D^{2/3} C nu^{-1/6} omega^{1/2}: the current grows as the square root of the rotation rate.",
  },
  {
    id: "l10-mcq-007",
    topicId: "rotating-disk",
    quick: true,
    question:
      "The special feature of the diffusion layer on a rotating disk is that it is:",
    options: [
      "Thickest at the edge",
      "Uniform in thickness over the whole face",
      "Thickest at the centre",
      "Oscillating",
    ],
    answer: 1,
    explanation:
      "Because the flow is exactly the same at every radius, the transport conditions are uniform - the reason RDE data are so clean.",
  },
  {
    id: "l10-mcq-008",
    topicId: "rotating-disk",
    question:
      "In the Levich equation the diffusion coefficient enters as:",
    options: ["D^{1/2}", "D^{2/3}", "D", "D^{-1}"],
    answer: 1,
    explanation:
      "i_L ∝ D^{2/3}: larger D raises the current, but weaker than linearly because transport also depends on the viscosity and momentum boundary layer.",
  },

  // -------------------------------------------------------- ring-disk
  {
    id: "l10-mcq-009",
    topicId: "ring-disk",
    quick: true,
    question:
      "The ring in an RRDE is held at a potential that:",
    options: [
      "Makes the same product as the disk",
      "Detects species generated at the disk",
      "Does nothing",
      "Matches the disk exactly",
    ],
    answer: 1,
    explanation:
      "The ring is a potentiostatted detector for whatever the disk reaction releases into the outward flow.",
  },
  {
    id: "l10-mcq-010",
    topicId: "ring-disk",
    quick: true,
    question:
      "The collection efficiency N is:",
    options: [
      "A property of the electrolyte",
      "The fraction of disk product the ring detects, fixed by geometry",
      "The transfer coefficient",
      "The faradaic efficiency",
    ],
    answer: 1,
    explanation:
      "N is set purely by the disk and ring radii; typically a stable product is collected with efficiency N, and a deficit signals loss in the gap.",
  },
  {
    id: "l10-mcq-011",
    topicId: "ring-disk",
    quick: true,
    question:
      "An RRDE ring current smaller than N times the disk current means the disk product:",
    options: [
      "Was all detected",
      "Decayed, adsorbed, or reacted before reaching the ring",
      "Turned into the counter electrode",
      "Was too concentrated",
    ],
    answer: 1,
    explanation:
      "Geometry guarantees that fraction N of a stable product reaches the ring; anything less is a loss term in the gap.",
  },
  {
    id: "l10-mcq-012",
    topicId: "ring-disk",
    question:
      "A common RRDE application is detecting:",
    options: [
      "Bubbles in the cell",
      "Peroxide from two-electron oxygen reduction at the disk",
      "The temperature of the motor",
      "Impurities in the acid",
    ],
    answer: 1,
    explanation:
      "Holding the ring to re-oxidise peroxide and comparing its current to the disk's gives the H2O2 yield of an O2-reduction catalyst directly.",
  },

  // ------------------------------------------------------- flow-cells
  {
    id: "l10-mcq-013",
    topicId: "flow-cells",
    quick: true,
    question:
      "In a channel cell the solution is moved by:",
    options: [
      "Spinning the electrode",
      "A pump pushing it through a thin channel",
      "Thermal convection",
      "Gravity only",
    ],
    answer: 1,
    explanation:
      "A channel cell is a thin rectangular channel with the working electrode as one wall, traversed by pumped solution.",
  },
  {
    id: "l10-mcq-014",
    topicId: "flow-cells",
    quick: true,
    question:
      "Pushing the flow slower through a channel cell generally:",
    options: [
      "Decreases conversion per pass",
      "Increases conversion per pass",
      "Has no effect on conversion",
      "Reverses the reaction",
    ],
    answer: 1,
    explanation:
      "Slower flow gives each parcel of fluid more residence time at the electrode, so a larger fraction of its reactant is converted.",
  },
  {
    id: "l10-mcq-015",
    topicId: "flow-cells",
    quick: true,
    question:
      "A porous flow-through electrode is valuable because it offers:",
    options: [
      "A very small surface area",
      "A huge electroactive area per unit volume",
      "No need for electrolyte",
      "Perfect insulation",
    ],
    answer: 1,
    explanation:
      "Forcing the fluid through a high-surface-area bed maximises contact, pushing conversion toward completeness in a compact volume.",
  },
  {
    id: "l10-mcq-016",
    topicId: "flow-cells",
    question:
      "Flow methods let you trade which two quantities against each other?",
    options: [
      "Colour and taste",
      "Conversion per pass and throughput",
      "Pressure and viscosity",
      "Temperature and humidity",
    ],
    answer: 1,
    explanation:
      "Residence time couples the two directly: a slower pump converts more per pass but processes less fluid per unit time.",
  },

  // ------------------------------------------------- koutecky-levich
  {
    id: "l10-mcq-017",
    topicId: "koutecky-levich",
    quick: true,
    question:
      "The Koutecký-Levich relation treats the kinetic and mass-transfer currents as:",
    options: ["In parallel", "In series", "Unrelated", "Identical"],
    answer: 1,
    explanation:
      "1/i = 1/i_k + 1/i_L: the observed current is limited by whichever step, kinetic or transport, is harder - like resistors in series.",
  },
  {
    id: "l10-mcq-018",
    topicId: "koutecky-levich",
    quick: true,
    question:
      "The x-axis of the Koutecký-Levich plot is:",
    options: ["omega", "1/sqrt(omega)", "v", "t"],
    answer: 1,
    explanation:
      "Plotting 1/i against 1/sqrt(omega) linearises the transport term; the intercept extrapolates to infinite rotation rate.",
  },
  {
    id: "l10-mcq-019",
    topicId: "koutecky-levich",
    quick: true,
    question:
      "The intercept of a Koutecký-Levich plot is 1/i_k. It represents:",
    options: [
      "The diffusion coefficient",
      "The pure kinetic current, free of transport limitations",
      "The Levich slope",
      "The solution resistance",
    ],
    answer: 1,
    explanation:
      "At infinite rotation the transport resistance vanishes, so the intercept current is set purely by the electrode's kinetics.",
  },
  {
    id: "l10-mcq-020",
    topicId: "koutecky-levich",
    question:
      "A catalyst benchmark should report the Koutecký-Levich intercept rather than a single current because:",
    options: [
      "The single current is always wrong",
      "It removes the mass-transfer contribution from the number",
      "The intercept is prettier",
      "The slope is confidential",
    ],
    answer: 1,
    explanation:
      "A raw current at one rotation rate mixes kinetic and transport limits; the intercept isolates the electrode's intrinsic activity.",
  },

  // ----------------------------- choosing-a-hydrodynamic-method
  {
    id: "l10-mcq-021",
    topicId: "choosing-a-hydrodynamic-method",
    quick: true,
    question: "For the cleanest study of steady-state kinetics, choose:",
    options: ["RDE with a Koutecký-Levich analysis", "A still beaker", "A dropping mercury electrode", "A static plate"],
    answer: 0,
    explanation:
      "The RDE's uniform transport plus the K-L plot pulls the kinetic current out of the transport ceiling.",
  },
  {
    id: "l10-mcq-022",
    topicId: "choosing-a-hydrodynamic-method",
    quick: true,
    question: "To catch a suspected soluble intermediate, use:",
    options: ["RDE alone", "RRDE", "Potentiometry", "Coulometry"],
    answer: 1,
    explanation:
      "The ring sits in the outward flow and detects intermediates escaping the disk, with geometry fixing the catch rate.",
  },
  {
    id: "l10-mcq-023",
    topicId: "choosing-a-hydrodynamic-method",
    quick: true,
    question: "For a reactor design question about conversion per pass, use:",
    options: ["Channel or flow-through cell", "RDE", "RRDE", "A static cell"],
    answer: 0,
    explanation:
      "Flow-through formats tie residence time directly to conversion, which is the actual engineering variable.",
  },
  {
    id: "l10-mcq-024",
    topicId: "choosing-a-hydrodynamic-method",
    question: "All hydrodynamic methods share one idea:",
    options: [
      "Stirring the solution changes the Faraday constant",
      "Controlled flow turns mass transfer into a known, settable parameter",
      "They eliminate the reference electrode",
      "They only work with mercury",
    ],
    answer: 1,
    explanation:
      "Whether by rotation or by pumping, the method fixes the diffusion layer so that transport can be modelled - and subtracted.",
  },
];
