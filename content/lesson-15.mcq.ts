// Lesson 15 - Surfaces and modified electrodes: question bank.
//
// Source syllabus: Bagotsky ch.16, 27 and Bard & Faulkner ch.14, 16-17.
// Every question is original; none is taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson15Mcq: Mcq[] = [
  // ----------------------------------------------------- metal-deposition
  {
    id: "l15-mcq-001",
    topicId: "metal-deposition",
    quick: true,
    question: "Electrodeposition occurs at:",
    options: [
      "An anodically polarised electrode",
      "A cathodically polarised electrode in a solution of metal ions",
      "Only at absolute zero",
      "The reference electrode",
    ],
    answer: 1,
    explanation:
      "M^n+ + ne^- → M at a sufficiently negative potential; the same half-reaction as corrosion, run backward.",
  },
  {
    id: "l15-mcq-002",
    topicId: "metal-deposition",
    quick: true,
    question: "Dendritic deposits are the result of:",
    options: [
      "Very low overpotential",
      "Transport-limited, uneven growth of high spots into needles",
      "A perfectly flat surface",
      "The salt bridge",
    ],
    answer: 1,
    explanation:
      "When mass transfer sets the rate, the sharpest points see the most reactant and grow fastest - a positive feedback that produces dendrites and powder.",
  },
  {
    id: "l15-mcq-003",
    topicId: "metal-deposition",
    quick: true,
    question: "A smooth, fine-grained metal film is favoured by:",
    options: [
      "A large cathodic overpotential that nucleates many sites at once",
      "Running right at the limiting current",
      "Heating the cell until it boils",
      "Adding dendrites",
    ],
    answer: 0,
    explanation:
      "High overpotential starts the reaction everywhere simultaneously, giving many small nuclei that merge into a smooth film.",
  },
  {
    id: "l15-mcq-004",
    topicId: "metal-deposition",
    question: "Dendritic lithium plating inside a battery is dangerous because:",
    options: [
      "It smells bad",
      "It can penetrate the separator and short the cell",
      "It evaporates",
      "It cleans the electrodes",
    ],
    answer: 1,
    explanation:
      "The same needles that make a pretty demo puncture the separator in a real cell, shorting it and risking thermal runaway.",
  },

  // ------------------------------------------------------ surface-layers
  {
    id: "l15-mcq-005",
    topicId: "surface-layers",
    quick: true,
    question: "A freshly polished metal in air is:",
    options: [
      "Atomically bare",
      "Immediately covered by a native oxide and adsorbed water",
      "Inert and featureless",
      "Made of glass",
    ],
    answer: 1,
    explanation:
      "Even an angstrom or two of oxide and adsorbed water forms instantly, and every electron crossing the interface must pass through it.",
  },
  {
    id: "l15-mcq-006",
    topicId: "surface-layers",
    quick: true,
    question:
      "The true electrochemical surface area of a 'clean' electrode is usually measured by:",
    options: [
      "Its geometric length times width",
      "A diagnostic CV feature such as the hydrogen-adsorption charge or double-layer capacitance",
      "Its mass",
      "Its colour",
    ],
    answer: 1,
    explanation:
      "Roughness makes geometric area unreliable; integration of a known surface reaction's charge, or of C_dl, counts the real area.",
  },
  {
    id: "l15-mcq-007",
    topicId: "surface-layers",
    quick: true,
    question: "A monolayer of adsorbate on an electrode can:",
    options: [
      "Never affect kinetics",
      "Change the reaction rate or peak position by orders of magnitude",
      "Only change its colour",
      "Only change its mass by half",
    ],
    answer: 1,
    explanation:
      "The surface is where the electron transfer happens; blocking or donating through one molecular layer flips the kinetics.",
  },
  {
    id: "l15-mcq-008",
    topicId: "surface-layers",
    question:
      "Two labs disagreeing about a rate constant on 'the same electrode' probably differ in:",
    options: [
      "The value of the Faraday constant",
      "Surface preparation history, which changes the active surface and defect density",
      "The shape of the room",
      "The colour of the glassware",
    ],
    answer: 1,
    explanation:
      "A voltammogram reads the surface you actually have; polishing and cleaning histories differ between labs and shift the kinetics.",
  },

  // --------------------------------------------------- modified-electrodes
  {
    id: "l15-mcq-009",
    topicId: "modified-electrodes",
    quick: true,
    question: "A modified electrode is:",
    options: [
      "A bare metal plate",
      "An electrode carrying a thin functional layer - polymer, catalyst, molecules, biomolecules - that defines its chemistry",
      "A reference electrode only",
      "A broken electrode",
    ],
    answer: 1,
    explanation:
      "The metal supplies electrons and structure; the thin film supplies the selectivity or catalysis - together they are the electrode.",
  },
  {
    id: "l15-mcq-010",
    topicId: "modified-electrodes",
    quick: true,
    question: "The functional layer on a modified electrode is kept thin because:",
    options: [
      "Thicker layers are cheaper",
      "Ions and electrons must still reach the metal through or under it",
      "Thin layers are harder to characterise",
      "Regulations forbid thick films",
    ],
    answer: 1,
    explanation:
      "The layer's job is surface selectivity; if it were thick, transport through it would replace the interfacial chemistry as the bottleneck.",
  },
  {
    id: "l15-mcq-011",
    topicId: "modified-electrodes",
    quick: true,
    question:
      "The main failure mode of a modified electrode is usually:",
    options: [
      "The layer leaching, swelling, or delaminating",
      "The metal dissolving away",
      "The salt bridge emptying",
      "The voltammogram turning red",
    ],
    answer: 0,
    explanation:
      "The native metal is usually robust; it is the attached film, with its mismatch of mechanical properties, that ages.",
  },
  {
    id: "l15-mcq-012",
    topicId: "modified-electrodes",
    question:
      "A chemically selective modified electrode places selectivity:",
    options: [
      "In the electronics only",
      "In the surface chemistry that precedes the electrode",
      "In the fume hood",
      "Nowhere",
    ],
    answer: 1,
    explanation:
      "The film admits or catalyses only the target species; by the time the current flows, the selection has already been made.",
  },

  // ---------------------------------------------------- scanning-probes
  {
    id: "l15-mcq-013",
    topicId: "scanning-probes",
    quick: true,
    question: "STM maps a surface by:",
    options: [
      "Shining light off it",
      "Reading the tunnel current between an atomically sharp tip and the sample",
      "Weighing it",
      "Heating it",
    ],
    answer: 1,
    explanation:
      "Electrons tunnel across the last ångströms; scanning the tip turns that exponential current-distance relationship into a topographic map.",
  },
  {
    id: "l15-mcq-014",
    topicId: "scanning-probes",
    quick: true,
    question:
      "The tunnel current changes by roughly an order of magnitude when the tip-sample gap changes by:",
    options: ["One micrometre", "One ångström", "One metre", "One volt"],
    answer: 1,
    explanation:
      "I ∝ exp(-2κd): a tiny change in separation swings the current hugely, which is why STM achieves atomic resolution.",
  },
  {
    id: "l15-mcq-015",
    topicId: "scanning-probes",
    quick: true,
    question: "AFM differs from STM because it:",
    options: [
      "Uses more current",
      "Reads the force between tip and surface, so it also images insulators and liquids",
      "Only works in vacuum",
      "Cannot see atoms",
    ],
    answer: 1,
    explanation:
      "No tunnelling current is needed; the cantilever deflection from tip-sample force maps any surface, including insulating and biological ones.",
  },
  {
    id: "l15-mcq-016",
    topicId: "scanning-probes",
    question:
      "EC-STM/AFM is powerful because it can:",
    options: [
      "Replace the counter electrode",
      "Watch a metal deposit, oxide grow, or bubble form while the electrode potential is held",
      "Measure bulk concentration only",
      "Operate at 1000 °C",
    ],
    answer: 1,
    explanation:
      "The tip and the sample share a cell, so one can image the very surface while the potentiostat runs the reaction on it.",
  },

  // -------------------------------------------- spectroelectrochemistry
  {
    id: "l15-mcq-017",
    topicId: "spectroelectrochemistry",
    quick: true,
    question:
      "Spectroelectrochemistry couples a cell with a spectrometer so that:",
    options: [
      "The light powers the reaction",
      "The optical or vibrational spectrum of the solution is recorded while a potential is applied",
      "The voltage is halved",
      "The reference electrode glows",
    ],
    answer: 1,
    explanation:
      "Sweep the potential and watch the spectrum change; species appear and disappear in lock-step with the current.",
  },
  {
    id: "l15-mcq-018",
    topicId: "spectroelectrochemistry",
    quick: true,
    question: "An isosbestic point in a spectroelectrochemical series means:",
    options: [
      "The measurement failed",
      "A simple conversion between exactly two species - one consumed, one formed",
      "The light source flickered",
      "Nothing",
    ],
    answer: 1,
    explanation:
      "A wavelength that neither grows nor shrinks through the titration is the signature of a clean two-species interconversion with no intermediates.",
  },
  {
    id: "l15-mcq-019",
    topicId: "spectroelectrochemistry",
    quick: true,
    question: "It is used to find:",
    options: [
      "The colour of the lab",
      "Reaction intermediates and their potentials of appearance",
      "The typographer's font",
      "The age of the glassware",
    ],
    answer: 1,
    explanation:
      "A new band growing in at a particular potential flags a species born at that potential - a mechanistic assignment from the spectrum.",
  },
  {
    id: "l15-mcq-020",
    topicId: "spectroelectrochemistry",
    question:
      "The two questions every mechanism must answer are best met by:",
    options: [
      "Electrochemistry alone",
      "Electrochemistry and spectroscopy together - how many electrons, and which species",
      "A tape recorder",
      "A weighing balance alone",
    ],
    answer: 1,
    explanation:
      "Current counts electrons; the spectrum names the molecules. Neither alone pins down both the stoichiometry and the chemistry.",
  },
  // ------------------------------------------------ nucleation-and-growth
  {
    id: "l15-mcq-021",
    topicId: "nucleation-and-growth",
    quick: true,
    question: "Deposition starts as:",
    options: [
      "A uniform film",
      "Small clusters that must exceed a critical radius to survive",
      "A powder only",
      "A bubble",
    ],
    answer: 1,
    explanation: "Every new island initially pays surface energy; only clusters larger than a critical size win back enough bulk energy to grow.",
  },
  {
    id: "l15-mcq-022",
    topicId: "nucleation-and-growth",
    quick: true,
    question: "A high nucleation rate produces:",
    options: ["A few large grains", "Many small grains and a fine film", "No deposit", "A single crystal"],
    answer: 1,
    explanation: "Many nuclei competing for the same incoming ions each grow only a little, giving dense, fine-grained coatings.",
  },
  {
    id: "l15-mcq-023",
    topicId: "nucleation-and-growth",
    quick: true,
    question: "Low overpotential, near equilibrium, gives deposits that are:",
    options: ["Fine and smooth", "Coarse or isolated, since few nuclei form", "Invisible", "Always amorphous"],
    answer: 1,
    explanation: "The critical nucleus is large at small overpotential, so only occasional clusters survive and grow large.",
  },
  {
    id: "l15-mcq-024",
    topicId: "nucleation-and-growth",
    question: "Pulsed electrodeposition refines grain size by:",
    options: [
      "Heating the bath",
      "Momentarily raising overpotential so nucleation outpaces growth",
      "Stirring faster",
      "Adding more salt",
    ],
    answer: 1,
    explanation: "The on-pulse burst of new nuclei sets many growth centres; off-pulses let them thicken without runaway growth.",
  },

  // ----------------------------- adsorption-and-surface-thermodynamics
  {
    id: "l15-mcq-025",
    topicId: "adsorption-and-surface-thermodynamics",
    quick: true,
    question: "The Langmuir isotherm describes coverage that:",
    options: ["Grows without limit", "Saturates at one monolayer", "Decreases with concentration", "Is independent of concentration"],
    answer: 1,
    explanation: "θ = Kc/(1+Kc): each site holds one molecule, so coverage plateaus as sites fill.",
  },
  {
    id: "l15-mcq-026",
    topicId: "adsorption-and-surface-thermodynamics",
    quick: true,
    question: "The Gibbs adsorption equation links the surface excess to:",
    options: [
      "The electrode's colour",
      "How the surface tension changes with adsorbate concentration",
      "The number of bees",
      "The temperature of the room only",
    ],
    answer: 1,
    explanation: "Γ = -(1/RT) dγ/d ln c: the amount segregated to the surface is proportional to how strongly it lowers the surface tension.",
  },
  {
    id: "l15-mcq-027",
    topicId: "adsorption-and-surface-thermodynamics",
    quick: true,
    question: "An adsorption peak on a CV yields:",
    options: [
      "The formal potential only",
      "The amount of adsorbed material, via the integrated charge",
      "The solution pH",
      "The reference electrode potential",
    ],
    answer: 1,
    explanation: "Integrating the adsorption or desorption peak over potential counts the electrons, and one electron per site counts the sites - the adsorbed amount.",
  },
  {
    id: "l15-mcq-028",
    topicId: "adsorption-and-surface-thermodynamics",
    question: "Real adsorption often deviates from Langmuir because:",
    options: [
      "All sites are identical",
      "Adsorbate-adsorbate interactions and site heterogeneity make the heat of adsorption coverage-dependent",
      "There is no solvent",
      "The temperature is exactly 0 K",
    ],
    answer: 1,
    explanation: "Langmuir assumes identical, non-interacting sites; real surfaces have a distribution of sites and lateral interactions (Freundlich, Temkin).",
  },
];

