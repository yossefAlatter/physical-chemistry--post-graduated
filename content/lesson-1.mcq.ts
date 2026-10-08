import type { Mcq } from "./types";

/**
 * Question bank for Lesson 1 - Ionic conduction.
 *
 * Written fresh for this site against Bagotsky ch.1; none of the questions
 * is taken from any textbook's exercises. Each section carries three
 * quick-check questions and one extra for the full bank.
 */
export const lesson1Mcq: Mcq[] = [
  // -------------------------------------------------- two-kinds-of-conductor
  {
    id: "l1-mcq-001",
    topicId: "two-kinds-of-conductor",
    quick: true,
    question: "Which material carries current by ions rather than electrons?",
    options: [
      "Copper wire",
      "An aqueous salt solution",
      "Graphite",
      "Silver foil",
    ],
    answer: 1,
    explanation:
      "In an aqueous electrolyte the moving charges are ions; copper, graphite and silver all conduct by electrons. The two families hand over at the electrode junction through chemical reactions.",
  },
  {
    id: "l1-mcq-002",
    topicId: "two-kinds-of-conductor",
    quick: true,
    question:
      "Where an electronic conductor touches an ionic conductor, steady current can continue only through a:",
    options: [
      "Voltage drop",
      "Phase change",
      "Chemical reaction",
      "Temperature rise",
    ],
    answer: 2,
    explanation:
      "The incoming carriers (electrons) and the outgoing carriers (ions) are different species, so nothing can merely pass through: a reaction at the surface must consume one set and generate the other. That junction is an electrode.",
  },
  {
    id: "l1-mcq-003",
    topicId: "two-kinds-of-conductor",
    quick: true,
    question: "The rectification at a p-n junction happens because:",
    options: [
      "The layers on both sides of the junction are emptied of carriers",
      "Silicon conducts by ions",
      "The junction melts under bias",
      "Charge never crosses a junction",
    ],
    answer: 0,
    explanation:
      "Building up the junction depletes the neighbouring layers of mobile carriers, so current is blocked in one direction. Rectification is the semiconductor's version of the general rule that junctions are where the interesting behaviour sits.",
  },
  {
    id: "l1-mcq-004",
    topicId: "two-kinds-of-conductor",
    question:
      "Which statement about current through different conductors is right?",
    options: [
      "Electrons carry the current across every junction unchanged",
      "Moving from an electronic to an ionic conductor adds resistance but no chemistry",
      "Mixed conductors exist only in molten salts",
      "Current is the same stream in every family; only which particles carry it changes",
    ],
    answer: 3,
    explanation:
      "Inside any one conductor the carriers just drift. What differs between families is the species that moves - electrons, ions, or both - and wherever that species changes, a reaction must take over.",
  },

  // ------------------------------------------------------- ions-in-solution
  {
    id: "l1-mcq-005",
    topicId: "ions-in-solution",
    quick: true,
    question:
      "For a salt MₐAᵦ with degree of dissociation α, the cation concentration in solution is:",
    options: ["c₊ = α cₖ", "c₊ = ατ₊ cₖ", "c₊ = cₖ / α", "c₊ = τ₊ cₖ"],
    answer: 1,
    explanation:
      "Each formula unit that dissociates releases τ₊ cations, so c₊ = ατ₊cₖ. The number of cations per unit, τ₊, multiplies the fraction that actually splits.",
  },
  {
    id: "l1-mcq-006",
    topicId: "ions-in-solution",
    quick: true,
    question: "Electroneutrality of the bulk solution is the statement that:",
    options: [
      "Σⱼ zⱼ cⱼ = 0",
      "Σⱼ zⱼ = 0",
      "c₊ = c₋ for every electrolyte",
      "The solution never contains ions",
    ],
    answer: 0,
    explanation:
      "Each ion type contributes its charge number times its concentration, and in any bulk region the sum is exactly zero. The equality c₊ = c₋ holds only for 1:1 salts, which is not the general law.",
  },
  {
    id: "l1-mcq-007",
    topicId: "ions-in-solution",
    quick: true,
    question: "The one place where electroneutrality may be broken is:",
    options: [
      "Anywhere in the middle of the bulk",
      "Inside the salt bridge",
      "In monomolecular layers at interfaces",
      "A few millimetres from any electrode",
    ],
    answer: 2,
    explanation:
      "Only the thin interfacial layers, a few atoms thick, are allowed to hold net charge while the two phases trade charge across them. That exception is the seed of the electrical double layer.",
  },
  {
    id: "l1-mcq-008",
    topicId: "ions-in-solution",
    question:
      "Why is 'the concentration of the solution' a single useful number even though a solution holds several ionic species?",
    options: [
      "Because all ions have equal concentrations",
      "Because all ions are the same species",
      "Because electroneutrality forbids more than one ion type",
      "Because every ion concentration follows from one independent quantity, the formal salt concentration cₖ",
    ],
    answer: 3,
    explanation:
      "Stoichiometry (τ₊, τ₋) and the degree of dissociation α tie every ion concentration back to the single formal concentration cₖ, so one number describes the whole solution.",
  },

  // -------------------------------------------------- conductivity-mobility
  {
    id: "l1-mcq-009",
    topicId: "conductivity-mobility",
    quick: true,
    question: "An ion drifting in a uniform field E reaches a steady speed:",
    options: ["vⱼ = uⱼE", "vⱼ = E/uⱼ", "vⱼ = uⱼ/E", "vⱼ = zⱼFE"],
    answer: 0,
    explanation:
      "The electrostatic driving force and the viscous drag balance, leaving a speed proportional to the field; the constant of proportionality is the mobility uⱼ, a property of that ion in that solvent.",
  },
  {
    id: "l1-mcq-010",
    topicId: "conductivity-mobility",
    quick: true,
    question: "The conductivity of a solution is:",
    options: [
      "σ = F E Σ uⱼ",
      "σ = F Σ zⱼ cⱼ uⱼ",
      "σ = Σ zⱼ cⱼ",
      "σ = cₖ Λ⁰",
    ],
    answer: 1,
    explanation:
      "Adding the partial currents of all species and taking out the common field gives σ = F Σ zⱼcⱼuⱼ: charge, then how much is there, then how fast it moves.",
  },
  {
    id: "l1-mcq-011",
    topicId: "conductivity-mobility",
    quick: true,
    question:
      "Protons conduct far better than other aqueous ions mainly because:",
    options: [
      "They are lighter than every other ion",
      "They carry two charges",
      "They hop between water molecules instead of swimming",
      "They never interact with water",
    ],
    answer: 2,
    explanation:
      "A proton does not so much move as pass from one water molecule to the next, so its effective mobility is several times that of a normal ion. That anomaly is why acid solutions conduct so strongly.",
  },
  {
    id: "l1-mcq-012",
    topicId: "conductivity-mobility",
    question:
      "You measure a conductance G = 1/R between two plates. To recover the material property σ you must account for:",
    options: [
      "The current flowing",
      "The Faraday constant",
      "The temperature",
      "The cell constant K = l/A",
    ],
    answer: 3,
    explanation:
      "G = σA/l = σ/K, so you need the cell constant - a length l/A in disguise, fixed by calibration with a standard of known conductivity such as 0.1 M KCl. G is geometry-dependent; σ is the material.",
  },

  // ---------------------------------------------------- circuits-electrodes
  {
    id: "l1-mcq-013",
    topicId: "circuits-electrodes",
    quick: true,
    question:
      "A loop of conductors that includes at least one ionic conductor is a:",
    options: [
      "Galvanic circuit",
      "Dielectric circuit",
      "Semiconductor junction",
      "Purely electronic circuit",
    ],
    answer: 0,
    explanation:
      "Once an ionic conductor joins the loop, the junctions must do chemistry to change carrier species, and the whole loop earns the name galvanic (electrochemical) cell.",
  },
  {
    id: "l1-mcq-014",
    topicId: "circuits-electrodes",
    quick: true,
    question: "In cell notation, a single vertical bar `|` stands for:",
    options: [
      "The salt bridge",
      "A phase boundary such as electronic|ionic",
      "A liquid junction",
      "The external wire",
    ],
    answer: 1,
    explanation:
      "One bar is a phase boundary between an electronic and an ionic conductor. A broken bar `¦` marks an ionic|ionic liquid junction, and a double bar `||` marks the salt bridge in the standard scheme.",
  },
  {
    id: "l1-mcq-015",
    topicId: "circuits-electrodes",
    quick: true,
    question:
      "A voltmeter placed across a properly open galvanic circuit reads:",
    options: [
      "The potential of the cathode alone",
      "The potential of the anode alone",
      "The sum of the potential jumps at every interface",
      "Zero, always",
    ],
    answer: 2,
    explanation:
      "The meter sees the total of the Galvani potential jumps at every interface, and no single jump is directly measurable - the first sight of the problem Lesson 2 attacks head-on.",
  },
  {
    id: "l1-mcq-016",
    topicId: "circuits-electrodes",
    question:
      "Why must a properly open circuit end in the same conductor type at both ends?",
    options: [
      "So the cell can short itself",
      "Because mixed metals corrode faster",
      "To keep current flowing in both directions",
      "So the voltmeter compares two ends of the same kind and reads a meaningful sum of interface jumps",
    ],
    answer: 3,
    explanation:
      "Two clamps of the same metal give the meter two equal endpoints, so what it reads is genuinely the sum of the interface jumps. Different metals at the ends would add their own junction to the reading.",
  },

  // ---------------------------------------------------- electrode-reactions
  {
    id: "l1-mcq-017",
    topicId: "electrode-reactions",
    quick: true,
    question: "At the anode, electrons leave the junction into the wire, so the anodic reaction must:",
    options: [
      "Generate electrons, i.e. be an oxidation",
      "Consume electrons, i.e. be a reduction",
      "Produce neutral molecules only",
      "Be a neutralisation",
    ],
    answer: 0,
    explanation:
      "Something must be the source of the electrons leaving into the wire, and that something is an oxidation. At the cathode the roles reverse and the reaction is a reduction.",
  },
  {
    id: "l1-mcq-018",
    topicId: "electrode-reactions",
    quick: true,
    question: "Faradaic current is the current that:",
    options: [
      "Merely charges the double layer",
      "Obeys Faraday's law and changes the surface chemically",
      "Flows only inside the metal",
      "Is always zero at equilibrium",
    ],
    answer: 1,
    explanation:
      "Faradaic current is charge transfer proper: it follows Faraday's law and alters the surface. The alternative, nonfaradaic current, only charges the electrical double layer and is always present as a background.",
  },
  {
    id: "l1-mcq-019",
    topicId: "electrode-reactions",
    quick: true,
    question: "Nonfaradaic current at an electrode:",
    options: [
      "Deposits metal in exact Faraday proportions",
      "Is carried by electrons passing into the solution",
      "Charges or discharges the electrical double layer",
      "Never occurs in practice",
    ],
    answer: 2,
    explanation:
      "Nonfaradaic current moves charge only into the double-layer capacitor - no reaction, no chemical change. It flows in every perturbation experiment and must be separated out from the faradaic signal.",
  },
  {
    id: "l1-mcq-020",
    topicId: "electrode-reactions",
    question: "The anodic and cathodic reactions are coupled because:",
    options: [
      "They use the same electrolyte",
      "Their potentials happen to be equal",
      "Each half is written with its own number of electrons",
      "The same current passes both electrodes, so both halves must be balanced with the same number of electrons per reaction n",
    ],
    answer: 3,
    explanation:
      "One current flows through both electrodes, so the electrons released per second at the anode equal those consumed at the cathode. Writing both halves with the same n lets the electrons cancel into one overall reaction.",
  },

  // ---------------------------------------------------------- classification
  {
    id: "l1-mcq-021",
    topicId: "classification",
    quick: true,
    question: "A reacting (consumable) electrode is one in which:",
    options: [
      "The electrode material itself takes part in the reaction and its mass changes",
      "The metal only passes electrons and never changes",
      "Only a gas is ever involved",
      "The electrode acts as the reference",
    ],
    answer: 0,
    explanation:
      "A silver electrode in AgNO₃ is the archetype: silver dissolves or deposits with the current, so its mass changes. The opposite family - nonconsumable - only sources or sinks electrons.",
  },
  {
    id: "l1-mcq-022",
    topicId: "classification",
    quick: true,
    question:
      "A silver electrode coated with solid AgCl, dipping into a chloride solution, is an example of:",
    options: [
      "A gas electrode",
      "A second-kind electrode",
      "A first-kind electrode",
      "A semiconductor electrode",
    ],
    answer: 1,
    explanation:
      "Second-kind electrodes form an insoluble salt on the metal, `Ag | AgCl | Cl⁻`. That solid is the memory of the interface, and this family is the backbone of reference electrodes.",
  },
  {
    id: "l1-mcq-023",
    topicId: "classification",
    quick: true,
    question: "Calling an electrode reaction 'invertible' means:",
    options: [
      "It runs near its thermodynamic equilibrium",
      "It is the reverse of a gas reaction",
      "It can be made to run in both directions by reversing the current",
      "It never touches the electrode surface",
    ],
    answer: 2,
    explanation:
      "Invertible means the reaction can be pushed backwards by reversing the current. It is a different claim from reversible (near-equilibrium), and a reaction can be invertible yet stubbornly irreversible in practice.",
  },
  {
    id: "l1-mcq-024",
    topicId: "classification",
    question:
      "In a three-electrode cell the fixed, current-free potential scale is provided by the:",
    options: [
      "Working electrode",
      "Counter electrode",
      "Auxiliary electrode",
      "Reference electrode",
    ],
    answer: 3,
    explanation:
      "The reference carries essentially no current and defines a stable, known potential against which the working electrode is read. Counter and auxiliary are the same electrode, kept deliberately uninteresting.",
  },

  // ---------------------------------------------------- faradays-laws-formal
  {
    id: "l1-mcq-025",
    topicId: "faradays-laws-formal",
    quick: true,
    question: "The combined general form of Faraday's laws is:",
    options: [
      "Δnⱼ = νⱼ Q / (nF)",
      "Δnⱼ = nF Q / νⱼ",
      "Δnⱼ = νⱼ nF / Q",
      "Δnⱼ = νⱼ Q",
    ],
    answer: 0,
    explanation:
      "The moles of component j produced (νⱼ > 0) or consumed (νⱼ < 0) equal νⱼ times the charge passed, divided by nF - one line containing both of Faraday's original laws. With constant current, Q = It.",
  },
  {
    id: "l1-mcq-026",
    topicId: "faradays-laws-formal",
    quick: true,
    question: "The chemical equivalent of component j, the moles of j per mole of electrons, is:",
    options: ["n / νⱼ", "νⱼ / n", "νⱼ zⱼ", "Mⱼ / n"],
    answer: 1,
    explanation:
      "The general reaction shares out electrons by charge balance, and the coefficient ratio νⱼ/n gives moles of j per mole of electrons. Multiplying by the molar mass gives the equivalent mass in grams.",
  },
  {
    id: "l1-mcq-027",
    topicId: "faradays-laws-formal",
    quick: true,
    question: "Balancing the general electrode reaction requires:",
    options: [
      "Σνⱼ = n",
      "n = νⱼ for every j",
      "Σ(ox) νⱼ zⱼ − Σ(red) νⱼ zⱼ = n",
      "Σ zⱼ = 0",
    ],
    answer: 2,
    explanation:
      "Charge balance of the whole equation demands that the electrons on the left equal the charge the reaction shifts: the sum of νⱼzⱼ on the oxidised side minus the same sum on the reduced side gives n.",
  },
  {
    id: "l1-mcq-028",
    topicId: "faradays-laws-formal",
    question:
      "In H⁺ + e⁻ → ½H₂, the stoichiometric coefficient of hydrogen gas is:",
    options: ["1", "2", "0", "1/2"],
    answer: 3,
    explanation:
      "One proton and one electron make half a molecule of hydrogen, so ν(H₂) = 1/2 even though n = 1. ν and z are independent quantities - a reminder to balance the equation and let the algebra decide.",
  },

  // ----------------------------------------------------------- mass-balance
  {
    id: "l1-mcq-029",
    topicId: "mass-balance",
    quick: true,
    question: "The flux density the electrode reaction stoichiometrically requires is:",
    options: [
      "Jⱼ = νⱼ i / (nF)",
      "Jⱼ = nF i / νⱼ",
      "Jⱼ = σ E",
      "Jⱼ = uⱼ E",
    ],
    answer: 0,
    explanation:
      "Faraday's law fixes how fast species j is consumed or made at a given current; that rate is the required flux νⱼi/(nF). If transport cannot meet it, the reaction starves.",
  },
  {
    id: "l1-mcq-030",
    topicId: "mass-balance",
    quick: true,
    question:
      "A spectator ion has νⱼ = 0 (the reaction wants none of it) yet still migrates, because:",
    options: [
      "Its charge is zero",
      "Its transport number tⱼ is not zero",
      "It is produced at the anode",
      "Migration ignores charge",
    ],
    answer: 1,
    explanation:
      "Every ion type carries its share of the current, so a spectator migrates with flux tⱼi/(zⱼF) even though it is not consumed. Without diffusion and convection this would pile inert salt at the electrode.",
  },
  {
    id: "l1-mcq-031",
    topicId: "mass-balance",
    quick: true,
    question:
      "A neutral reactant must still be delivered to the surface, but migration cannot move it. The gap is closed by:",
    options: [
      "Electron tunnelling",
      "The metal lattice",
      "Diffusion and convection",
      "A higher applied voltage",
    ],
    answer: 2,
    explanation:
      "With zⱼ = 0 the migrational flux is identically zero, so diffusion along a concentration gradient and bulk convection must bring the reactant in. That is the tension Lesson 4 turns into the Nernst layer.",
  },
  {
    id: "l1-mcq-032",
    topicId: "mass-balance",
    question: "The mass-balance equation at the electrode asserts that:",
    options: [
      "Migration alone always satisfies the reaction",
      "The reaction rate is set only by the applied voltage",
      "Diffusion is negligible in the steady state",
      "The required flux equals the sum of the migration, diffusion and convection fluxes",
    ],
    answer: 3,
    explanation:
      "νⱼi/(nF) = J_m + J_d + J_conv: whatever migration cannot supply, diffusion and convection must. When transport is slow the reaction starves and the current becomes transport-limited.",
  },

  // ------------------------------------------------------- sign-conventions
  {
    id: "l1-mcq-033",
    topicId: "sign-conventions",
    quick: true,
    question: "Under the mixed sign convention used by this course:",
    options: [
      "Every current density is written positive and direction lives in the flux signs",
      "Anodic current is written positive and cathodic current negative",
      "Current densities are always written as |i|",
      "i is negative at the cathode",
    ],
    answer: 0,
    explanation:
      "The mixed convention keeps every i positive and carries direction in the flux signs: reactant fluxes toward the surface positive, product fluxes away negative. The same equation then serves both electrodes.",
  },
  {
    id: "l1-mcq-034",
    topicId: "sign-conventions",
    quick: true,
    question: "Migration direction is fixed by the rule:",
    options: [
      "Cations toward the anode, anions toward the cathode",
      "Cations toward the cathode, anions toward the anode",
      "Always away from the surface",
      "Protons only",
    ],
    answer: 1,
    explanation:
      "Cations drift toward the cathode and anions toward the anode, because opposite charges attract. This is a stated rule, not a by-product of sign arithmetic.",
  },
  {
    id: "l1-mcq-035",
    topicId: "sign-conventions",
    quick: true,
    question:
      "Because i carries no sign under the mixed convention, seeing `i > 0` alone tells you:",
    options: [
      "The current is anodic",
      "The current is cathodic",
      "Nothing about whether it is anodic or cathodic",
      "The electrode is dissolving",
    ],
    answer: 2,
    explanation:
      "The magnitude i says how much, never which way. Direction must be read from the reaction equation or the flux signs - the physics carries the direction, not the algebra.",
  },
  {
    id: "l1-mcq-036",
    topicId: "sign-conventions",
    question:
      "The IUPAC anodic-positive/cathodic-negative convention is awkward because:",
    options: [
      "It makes anodic current always negative",
      "It cannot describe a galvanic cell",
      "It forbids the use of |i|",
      "Every relation containing a current must be written twice, once with i and once with |i|",
    ],
    answer: 3,
    explanation:
      "Under IUPAC the sign of i flips between the two electrodes, so symmetric physics must be expressed in two forms per equation. The mixed convention writes one positive i and avoids the duplication.",
  },
];