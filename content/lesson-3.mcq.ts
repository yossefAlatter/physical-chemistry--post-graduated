import type { Mcq } from "./types";

/**
 * Question bank for Lesson 3 - Solution chemistry.
 *
 * Written fresh for this site against Bagotsky ch.5, ch.7 and ch.8; none of
 * the questions is taken from any textbook's exercises. Each section carries
 * three quick-check questions and one extra for the full bank.
 */
export const lesson3Mcq: Mcq[] = [
  // ------------------------------------------------------------- dissociation
  {
    id: "l3-mcq-001",
    topicId: "dissociation",
    quick: true,
    question:
      "The colligative properties of electrolyte solutions are anomalous because:",
    options: [
      "Ions repel each other more than molecules do",
      "Dissociation raises the total number of particles in solution",
      "Water evaporates faster in their presence",
      "The solvent loses mass",
    ],
    answer: 1,
    explanation:
      "Colligative properties count particles, not identity. If a salt splits into ions, the number of dissolved particles - and with it osmotic pressure and the like - is larger than the nominal concentration implies.",
  },
  {
    id: "l3-mcq-002",
    topicId: "dissociation",
    quick: true,
    question:
      "In Arrhenius's theory, the degree of dissociation alpha relates to the molar conductivity as:",
    options: ["α = Λ₀/Λ", "α = Λ/Λ₀", "α = Λ·Λ₀", "α = 1 − Λ/Λ₀"],
    answer: 1,
    explanation:
      "Λ₀ is the molar conductivity at complete dissociation, so the ratio Λ/Λ₀ measures how far dissociation has actually gone at a given concentration.",
  },
  {
    id: "l3-mcq-003",
    topicId: "dissociation",
    quick: true,
    question:
      "Ostwald's dilution law predicts that when an electrolyte solution is diluted,",
    options: [
      "The degree of dissociation decreases",
      "The degree of dissociation increases toward 1",
      "The dissociation constant changes",
      "The solute stops dissociating",
    ],
    answer: 1,
    explanation:
      "Dilution pushes the dissociation equilibrium toward the ions: α approaches 1 as c_k → 0. The dissociation constant itself is concentration-independent at fixed temperature.",
  },
  {
    id: "l3-mcq-004",
    topicId: "dissociation",
    question: "A covalently bonded molecule that becomes ions only through reaction with the solvent is an:",
    options: ["Ionophor", "Isotonic electrolyte", "Ionogen", "Ampholyte"],
    answer: 2,
    explanation:
      "Ionogens (e.g. HCl) form ions only on dissolution, through chemical interaction with the solvent. Ionophors (e.g. NaCl) already contain ions in the crystal and merely release them.",
  },

  // --------------------------------------------------------------- solvation
  {
    id: "l3-mcq-005",
    topicId: "solvation",
    quick: true,
    question: "The primary (nearest) solvation sheath:",
    options: [
      "Is thermally labile and frequently exchanged",
      "Travels with the ion as it moves",
      "Is found only around anions",
      "Has no effect on ionic mobility",
    ],
    answer: 1,
    explanation:
      "The primary sheath is bound tightly enough that thermal motion cannot strip it; an ion carries this shell with it, which is why effective radii - not crystal radii - set mobilities.",
  },
  {
    id: "l3-mcq-006",
    topicId: "solvation",
    quick: true,
    question: "The heat of solution is the sum of two terms - breakup of the solute and:",
    options: ["Evaporation of the solvent", "Solvation of the ions", "Dissociation of water", "Electron transfer"],
    answer: 1,
    explanation:
      "q(d) = q(b) + q(s): breaking the lattice or molecule apart, then solvating the free ions. The solvation term, hundreds of kJ/mol, settles the energy bill for spontaneous dissociation.",
  },
  {
    id: "l3-mcq-007",
    topicId: "solvation",
    quick: true,
    question:
      "Which ion carries the most water molecules in its primary hydration sheath?",
    options: ["Li⁺", "K⁺", "Cs⁺", "N(C₄H₉)₄⁺"],
    answer: 0,
    explanation:
      "The solvation number rises as the crystal radius falls: Li⁺ (0.060 nm) carries 5-6, K⁺ about 4, Cs⁺ 1-2, and the bulky tetrabutylammonium ion near zero.",
  },
  {
    id: "l3-mcq-008",
    topicId: "solvation",
    question:
      "The proton's fast transport in water is primarily due to:",
    options: [
      "Its small crystal radius alone",
      "Forming the covalent H₃O⁺ ion and then hopping along oriented water chains",
      "Zero solvation energy",
      "Its high solubility in water",
    ],
    answer: 1,
    explanation:
      "A proton binds one water molecule covalently into H₃O⁺ (with an H₉O₄⁺ shell) and then hops from molecule to molecule along hydrogen-bonded chains - the Grotthuss mechanism - which is why its mobility is two to four times that of ordinary ions.",
  },

  // ------------------------------------------------------- activity-measurement
  {
    id: "l3-mcq-009",
    topicId: "activity-measurement",
    quick: true,
    question:
      "The cleanest way to measure the activity of an electrolyte is a cell:",
    options: [
      "With a liquid junction",
      "Without transference",
      "With a salt bridge",
      "With two electrodes of the same metal",
    ],
    answer: 1,
    explanation:
      "A cell without transference - e.g. Pt,H₂ | HCl(c₁) | calomel - has no junction potential in the reading, so the EMF depends on the electrolyte's activity alone.",
  },
  {
    id: "l3-mcq-010",
    topicId: "activity-measurement",
    quick: true,
    question:
      "Extrapolating EMF data to zero concentration is more reliable when plotted against:",
    options: [
      "c", "c³", "√c", "1/c",
    ],
    answer: 2,
    explanation:
      "Against √c the dilute data fall on a straight line, so the intercept at c → 0 (where ln f± = 0) can be drawn accurately. The Debye-Hückel law explains why.",
  },
  {
    id: "l3-mcq-011",
    topicId: "activity-measurement",
    quick: true,
    question: "The solvent route to solute activity uses which exact relation?",
    options: ["Nernst equation", "Gibbs-Duhem equation", "Clapeyron equation", "Kohlrausch law"],
    answer: 1,
    explanation:
      "The Gibbs-Duhem equation, n₀ d ln a₀ + n_k d ln a_k = 0, converts a measured solvent activity into the solute's. It is exact; the limiting factor is measurement quality.",
  },
  {
    id: "l3-mcq-012",
    topicId: "activity-measurement",
    question:
      "In the routine for HCl with the hydrogen-calomel cell, plotting the data yields:",
    options: [
      "E⁰ and then f± at every concentration",
      "Only the conductance of HCl",
      "The viscosity of the acid",
      "The dissociation constant of water",
    ],
    answer: 0,
    explanation:
      "The extrapolated intercept gives E⁰ at c → 0 where the coefficient is 1; substituting E⁰ back into the line then solves for f± at each measured concentration.",
  },

  // ----------------------------------------------------- activity-coefficients
  {
    id: "l3-mcq-013",
    topicId: "activity-coefficients",
    quick: true,
    question: "In dilute solution, the activity coefficient of an electrolyte depends chiefly on:",
    options: [
      "The identity of its ions",
      "Its valence type and the ionic strength",
      "The colour of its solution",
      "The temperature only",
    ],
    answer: 1,
    explanation:
      "For many electrolytes, curves of log f± vs √c coincide by valence type: at a given dilute concentration the coefficient is fixed by the charge type and the ionic strength, not by which ions are which.",
  },
  {
    id: "l3-mcq-014",
    topicId: "activity-coefficients",
    quick: true,
    question: "Ionic strength is defined as:",
    options: [
      "½ Σ cⱼ zⱼ",
      "Σ cⱼ zⱼ²",
      "½ Σ cⱼ zⱼ²",
      "½ Σ cⱼ² zⱼ",
    ],
    answer: 2,
    explanation:
      "I = ½ Σ cⱼ zⱼ², summing only real ionic concentrations. For a 1:1 electrolyte it equals the concentration; for 1:2 and 2:2 types it is 3cₖ and 4cₖ.",
  },
  {
    id: "l3-mcq-015",
    topicId: "activity-coefficients",
    quick: true,
    question:
      "An activity coefficient below unity means the ions' interactions are on balance:",
    options: ["Repulsive", "Absent", "Attractive", "Covalent"],
    answer: 2,
    explanation:
      "RT ln f is the interaction work term w_int; attraction makes placing a particle in the solution cheaper, so f < 1. Dilute electrolyte coefficients typically fall below 1.",
  },
  {
    id: "l3-mcq-016",
    topicId: "activity-coefficients",
    question:
      "Solvation energy does not appear in the activity coefficient because:",
    options: [
      "It is absorbed into the standard chemical potential",
      "It only affects concentrated solutions",
      "It cancels between ions",
      "It is too small to measure",
    ],
    answer: 0,
    explanation:
      "An ion is solvated at any concentration, so solvation is a constant part of the standard state μ⁰, not of the concentration-dependent term RT ln f. The coefficient therefore reports electrostatic ion-ion interaction.",
  },

  // -------------------------------------------------------------- debye-huckel
  {
    id: "l3-mcq-017",
    topicId: "debye-huckel",
    quick: true,
    question: "The total charge of an ion's ionic atmosphere:",
    options: [
      "Is half the ion's charge",
      "Is exactly equal and opposite to the central ion's charge",
      "Is zero",
      "Depends on the concentration",
    ],
    answer: 1,
    explanation:
      "The atmosphere is the smeared excess of opposite-sign ions that compensates the central ion's charge, leaving the whole system electroneutral.",
  },
  {
    id: "l3-mcq-018",
    topicId: "debye-huckel",
    quick: true,
    question: "The Debye length r_D (0.3, 3, 30 nm) corresponds to ionic strengths of:",
    options: [
      "1, 10⁻², 10⁻⁴ mol/L",
      "10⁻², 10⁻⁴, 10⁻⁶ mol/L",
      "1, 10, 100 mol/L",
      "10⁻⁵, 10⁻⁶, 10⁻⁷ mol/L",
    ],
    answer: 0,
    explanation:
      "The Debye length scales as 1/√I: 0.3 nm at I = 1 M, 3 nm at 10⁻² M, 30 nm at 10⁻⁴ M. Fewer ions means a much larger atmosphere.",
  },
  {
    id: "l3-mcq-019",
    topicId: "debye-huckel",
    quick: true,
    question: "The Debye-Hückel limiting law in water at 25 °C reads:",
    options: [
      "log f± = −0.51 |z₊z₋| √I",
      "log f± = +0.51 |z₊z₋| √I",
      "log f± = −59.16 |z₊z₋| √I",
      "f± = 1 always",
    ],
    answer: 0,
    explanation:
      "log f± = −D|z₊z₋|√I with D = 0.51 (L/mol)^½ in water at 25 °C. The minus sign makes the dilute coefficient less than 1, growing stronger with charge type and ionic strength.",
  },
  {
    id: "l3-mcq-020",
    topicId: "debye-huckel",
    question:
      "The second Debye-Hückel approximation improves the limiting law by:",
    options: [
      "Treating ions as point charges",
      "Giving ions a finite size, adding a 1 + aB√I denominator",
      "Ignoring the ionic strength",
      "Adding electrons to the atmosphere",
    ],
    answer: 1,
    explanation:
      "The second approximation forbids ions from approaching below a distance a, which moves the fit parameter into the denominator 1 + aB√I; values near a ≈ 0.3-0.4 nm extend agreement to about 0.1 M.",
  },

  // ------------------------------------------------------ diffusion-potentials
  {
    id: "l3-mcq-021",
    topicId: "diffusion-potentials",
    quick: true,
    question:
      "A diffusion (junction) potential develops because, across the transition layer,",
    options: [
      "The ions have equal mobilities",
      "Ions diffuse at different rates and separate charge",
      "The solvent evaporates",
      "Electrons cross the interface",
    ],
    answer: 1,
    explanation:
      "In the transition layer between two solutions, ions diffuse at species-dependent speeds. Fast ions outrun slow ones, an electric field arises to keep pace, and that field is the diffusion potential.",
  },
  {
    id: "l3-mcq-022",
    topicId: "diffusion-potentials",
    quick: true,
    question:
      "Which ions produce the largest diffusion potentials at liquid junctions?",
    options: ["K⁺ and Cl⁻", "Li⁺ and Na⁺", "H⁺ and OH⁻", "Ag⁺ and NO₃⁻"],
    answer: 2,
    explanation:
      "H⁺ and OH⁻ have mobilities several times those of ordinary ions, so their junctions build tens of millivolts - e.g. about −33 mV for an HCl concentration cell - instead of the usual few.",
  },
  {
    id: "l3-mcq-023",
    topicId: "diffusion-potentials",
    quick: true,
    question: "The classic salt bridge uses a saturated solution of:",
    options: ["NaCl", "LiClO₄", "KCl", "CaCl₂"],
    answer: 2,
    explanation:
      "KCl (about 4.2 M) is the classic bridge: its ions have nearly equal mobilities, so the junction potential it contributes is tiny, and its high concentration floods the transition layers.",
  },
  {
    id: "l3-mcq-024",
    topicId: "diffusion-potentials",
    question:
      "Salt bridges are insufficient for accurate thermodynamic corrections of cells with transference because:",
    options: [
      "KCl is too expensive",
      "Residual junction potentials still cannot be fully accounted for",
      "The bridge dissolves the electrodes",
      "KCl conducts electronically",
    ],
    answer: 1,
    explanation:
      "The reduction of the diffusion potential is practical, not exact: residual junction terms remain and can only partially cancel. Precise thermodynamics therefore prefers cells without transference.",
  },

  // ---------------------------------------------------------- membranes-donnan
  {
    id: "l3-mcq-025",
    topicId: "membranes-donnan",
    quick: true,
    question: "A membrane that lets some components pass and blocks others completely is called:",
    options: ["A diaphragm", "An ionophor", "Permselective", "An electrode separator"],
    answer: 2,
    explanation:
      "Permselective membranes are permeable to some species and impermeable to others. By contrast, a diaphragm is uniformly permeable to everything and merely blocks convection.",
  },
  {
    id: "l3-mcq-026",
    topicId: "membranes-donnan",
    quick: true,
    question:
      "The membrane potential φm at a Donnan equilibrium is, per charge, roughly:",
    options: [
      "RT ln(c(α)/c(β))/F",
      "F ln(c(α)/c(β))/RT",
      "c(α)/c(β)",
      "RT/F",
    ],
    answer: 0,
    explanation:
      "φm = (RT/F) ln(c(α)/c(β)). It follows from equality of the electrochemical potentials of each permeating ion: the ratio of its concentrations across the membrane is fixed by a common factor λ^z.",
  },
  {
    id: "l3-mcq-027",
    topicId: "membranes-donnan",
    quick: true,
    question:
      "Donnan equilibria between two similar solutions arise when:",
    options: [
      "Both solutions have identical concentrations",
      "The membrane is impermeable to at least one species",
      "The solutions are immiscible",
      "The temperature exceeds 100 °C",
    ],
    answer: 1,
    explanation:
      "If a membrane is impermeable to one component, the permeating ions reach an equilibrium distribution - the Donnan equilibrium - with a measurable potential, even though the 'smart' ion can never equilibrate.",
  },
  {
    id: "l3-mcq-028",
    topicId: "membranes-donnan",
    question:
      "The OCV of a cell with transference decomposes as the sum of:",
    options: [
      "The EMF of each electrode separately",
      "The corrected OCV E* plus the junction/membrane potential φ(E)",
      "The two Galvani potentials of the electrodes",
      "The ohmic drop and the EMF",
    ],
    answer: 1,
    explanation:
      "A transference cell's OCV is Ᏹ = E* + φ(Ε): the true electrode-to-electrode difference plus the electrolyte-interface term. After full equilibration a symmetric cell's OCV returns to zero.",
  },

  // -------------------------------------------------------- nonaqueous-solvents
  {
    id: "l3-mcq-029",
    topicId: "nonaqueous-solvents",
    quick: true,
    question:
      "Which situation forces a departure from aqueous electrolytes?",
    options: [
      "Room-temperature processes",
      "Electrolysis of dilute NaCl",
      "A lithium negative electrode",
      "A copper sulfate electrolyte",
    ],
    answer: 2,
    explanation:
      "Alkali metals like lithium react with water, so batteries with lithium negative electrodes must use aprotic solvents. High-temperature processes such as aluminium electrowinning are the other driver.",
  },
  {
    id: "l3-mcq-030",
    topicId: "nonaqueous-solvents",
    quick: true,
    question:
      "Walden's rule states that the product of an ion's limiting mobility and solvent viscosity is:",
    options: ["Zero", "Approximately constant", "Proportional to ε", "Inversely proportional to ε"],
    answer: 1,
    explanation:
      "u⁰ⱼ·η ≈ const follows from Stokes's law for spheres of constant radius. It holds well for poorly solvated ions and temperature sweeps, and spoils when solvation changes effective radii.",
  },
  {
    id: "l3-mcq-031",
    topicId: "nonaqueous-solvents",
    quick: true,
    question: "In which solvent class do alkali metals remain stable?",
    options: [
      "Protic solvents",
      "Aprotic polar solvents",
      "Water",
      "Liquid ammonia",
    ],
    answer: 1,
    explanation:
      "Aprotic polar solvents cannot donate protons, so there is no hydrogen evolution to corrode alkali metals - the exact property that makes lithium batteries possible.",
  },
  {
    id: "l3-mcq-032",
    topicId: "nonaqueous-solvents",
    question:
      "HCl is a strong electrolyte in ethanol but weak in nitrobenzene despite similar permittivity, because:",
    options: [
      "The dielectric constants differ by a factor of three",
      "The proton-accepting power of the solvents differs",
      "Ethanol is colder",
      "Nitrobenzene absorbs light",
    ],
    answer: 1,
    explanation:
      "Dissociation is set by solvent chemistry, not polarity alone: ethanol accepts protons and solvates them, faciltating dissociation; nitrobenzene accepts them poorly, leaving HCl weak despite ε ≈ 35.",
  },

  // ------------------------------------------------------------- melts-solids
  {
    id: "l3-mcq-033",
    topicId: "melts-solids",
    quick: true,
    question:
      "On melting, an ionic crystal typically gains conductivity up to:",
    options: ["Below 0.1 S/m", "Over 100 S/m", "10⁻⁴ S/m", "Unchanged values"],
    answer: 1,
    explanation:
      "The lattice breaks into free ions at a concentration near 25 M, and the conductivity jumps discontinuously, in some cases past 100 S/m - higher than the most conducting aqueous solutions. Covalent melts stay below 0.1 S/m.",
  },
  {
    id: "l3-mcq-034",
    topicId: "melts-solids",
    quick: true,
    question: "Conduction in a molten salt proceeds mainly by:",
    options: [
      "Electrons hopping between ions",
      "Ions jumping into adjacent holes",
      "Soliton propagation",
      "Proton tunnelling",
    ],
    answer: 1,
    explanation:
      "Melting swells the volume by 10-20% without enlarging the ions, leaving a liquid full of holes. An ion hops into a neighbouring hole, which becomes a hole for the next ion - a relay, not smooth motion.",
  },
  {
    id: "l3-mcq-035",
    topicId: "melts-solids",
    quick: true,
    question: "Conduction in ordinary ionic crystals is governed by:",
    options: [
      "Free electrons",
      "Point defects: Frenkel and Schottky defects",
      "Proton chains",
      "The solvent",
    ],
    answer: 1,
    explanation:
      "At any temperature above absolute zero, thermal motion creates vacancies (Schottky) and interstitital ions (Frenkel). Conduction is the relay of ions hopping into those vacancies - hence low σ rising steeply with temperature.",
  },
  {
    id: "l3-mcq-036",
    topicId: "melts-solids",
    question:
      "The high conductivity of superionic conductors such as α-AgI and β-alumina arises from:",
    options: [
      "A higher melting point",
      "Electrons in the conduction band",
      "A rigid anion sublattice carrying a disordered, highly mobile cation sublattice",
      "Purely protonic transport",
    ],
    answer: 2,
    explanation:
      "Immobile anions form a rigid framework while the cations sit in a disordered, half-melted sublattice where nearly every site is an acceptable home - a 'cation fluid'. α-AgI jumps from 10⁻⁴ to 1 S/cm at 147 °C; RbAg₄I₅ gives 26 S/m at 25 °C.",
  },
];