import type { Mcq } from "./types";

/**
 * Question bank for Lesson 2 - Electrode potentials.
 *
 * Written fresh for this site against Bagotsky ch.2-3; none of the questions
 * is taken from any textbook's exercises. Each section carries three
 * quick-check questions and one extra for the full bank.
 */
export const lesson2Mcq: Mcq[] = [
  // ------------------------------------------------------ galvani-potentials
  {
    id: "l2-mcq-001",
    topicId: "galvani-potentials",
    quick: true,
    question:
      "The Galvani potential at an interface between two conducting phases is:",
    options: [
      "The total potential of the cell",
      "The inner-potential difference ψ(2) − ψ(1) across that one interface",
      "The potential of the standard hydrogen electrode",
      "Zero, by definition",
    ],
    answer: 1,
    explanation:
      "The Galvani potential is the jump of the inner (electrostatic) potential across one particular interface. It is a real quantity, but one that can never be measured in isolation.",
  },
  {
    id: "l2-mcq-002",
    topicId: "galvani-potentials",
    quick: true,
    question: "Why can a Galvani potential never be measured on its own?",
    options: [
      "Any measurement involves other interfaces whose jumps are equally unknown",
      "It is too large to read",
      "It equals zero in every case",
      "It changes sign with temperature",
    ],
    answer: 0,
    explanation:
      "Every possible measurement hangs clamps on two conductors and therefore picks up a chain of interfaces. A single jump cannot be isolated, so it is an experimentally undefined parameter.",
  },
  {
    id: "l2-mcq-003",
    topicId: "galvani-potentials",
    quick: true,
    question:
      "The inner (electrostatic) potential ψ of a phase is a 'conventional' parameter, meaning:",
    options: [
      "It is exactly zero",
      "It is never allowed in equations",
      "Only its differences between places are physically meaningful",
      "It equals the chemical potential",
    ],
    answer: 2,
    explanation:
      "Conventional parameters are defined only up to a constant: E = 0 can be chosen anywhere because the physics lives in differences. The Galvani potential is such a difference.",
  },
  {
    id: "l2-mcq-004",
    topicId: "galvani-potentials",
    question: "A parameter described as 'experimentally undefined' is one that:",
    options: [
      "Does not exist",
      "Is always zero",
      "Could be measured with more sensitive instruments",
      "Has a real meaning, but no experiment or thermodynamic calculation can isolate it",
    ],
    answer: 3,
    explanation:
      "Undefined does not mean meaningless: the Galvani potential sits in equations and cancels out of the measurable combinations. Only non-thermodynamic models can estimate it.",
  },

  // ----------------------------------------------------- open-circuit-voltage
  {
    id: "l2-mcq-005",
    topicId: "open-circuit-voltage",
    quick: true,
    question:
      "Volta's law states that a purely electronic, isothermal, field-free open circuit has an OCV of:",
    options: [
      "Its EMF, always",
      "Zero",
      "The sum of the two electrode potentials",
      "A nonzero value for noble metals",
    ],
    answer: 1,
    explanation:
      "With electrons the only carriers, the Galvani jumps are just chemical-potential differences of electrons, and these cancel through the loop, leaving identical terminals against identical values.",
  },
  {
    id: "l2-mcq-006",
    topicId: "open-circuit-voltage",
    quick: true,
    question: "The OCV of a complete chain of conductors equals:",
    options: [
      "The algebraic sum of all the interface Galvani potentials",
      "The potential of the first conductor alone",
      "The difference of the equilibrium potentials by definition",
      "Exactly zero",
    ],
    answer: 0,
    explanation:
      "With no current flowing, the potential is constant within each conductor, so the terminal difference is the sum of every interface jump in the chain. Only that sum is measurable.",
  },
  {
    id: "l2-mcq-007",
    topicId: "open-circuit-voltage",
    quick: true,
    question: "Inserting extra metal conductors between two ends of a chain:",
    options: [
      "Adds their junction potentials to the reading",
      "Always sets the total to zero",
      "Leaves the terminal-to-terminal difference unchanged",
      "Requires a salt bridge",
    ],
    answer: 2,
    explanation:
      "By Volta's law the intermediate metal interface terms cancel, so the potential difference between the two ends is independent of what is strung between them.",
  },
  {
    id: "l2-mcq-008",
    topicId: "open-circuit-voltage",
    question:
      "Thermodynamics prefers the corrected OCV E* of a cell with transference because:",
    options: [
      "It is exactly zero",
      "It is larger than the measured OCV",
      "It ignores the electrodes entirely",
      "The liquid-junction potential cannot reach true equilibrium and must be removed for EMF calculations",
    ],
    answer: 3,
    explanation:
      "Ions diffuse across any junction between different electrolytes, so equilibrium never establishes there. E* subtracts that junction term, leaving a quantity thermodynamics can use - though only an approximate one.",
  },

  // ------------------------------------------------------ electrode-potential
  {
    id: "l2-mcq-009",
    topicId: "electrode-potential",
    quick: true,
    question: "The electrode potential E of an electrode is defined as:",
    options: [
      "The Galvani potential of its interface, measured directly",
      "The OCV of a cell built from that electrode and a chosen reference electrode",
      "The potential drop across the double layer",
      "Three times the liquid-junction potential",
    ],
    answer: 1,
    explanation:
      "E is a defined quantity: the OCV of a full cell combining the studied electrode with an arbitrary, fixed reference whose own potential is conventionally set to zero.",
  },
  {
    id: "l2-mcq-010",
    topicId: "electrode-potential",
    quick: true,
    question:
      "Because the electrode potential equals the interface Galvani potential up to a constant:",
    options: [
      "Changes in E faithfully mirror changes in the interface jump",
      "E is exactly equal to the interface jump",
      "E cannot change at all",
      "E is independent of which reference is used",
    ],
    answer: 0,
    explanation:
      "E = φG(M,E) + const, so ΔE = ΔφG(M,E): the offset is unknown but constant, and every physical change of the interface shows up one-for-one in E.",
  },
  {
    id: "l2-mcq-011",
    topicId: "electrode-potential",
    quick: true,
    question:
      "For a cell without transference built from two defined electrodes:",
    options: [
      "OCV = E₁ × E₂",
      "OCV = 0, always",
      "OCV = E(cathode) − E(anode), and the reference cancels out",
      "The reference dominates the reading",
    ],
    answer: 2,
    explanation:
      "Writing both electrode potentials against the same reference makes the reference terms subtract away, so the OCV is the difference of two one-electrode numbers and the reference leaves no trace.",
  },
  {
    id: "l2-mcq-012",
    topicId: "electrode-potential",
    question: "Which property qualifies an electrode system to serve as a reference?",
    options: [
      "Its potential drifts with temperature",
      "It is ideally polarizable",
      "Any gas electrode",
      "Its equilibrium Galvani potential establishes rapidly and reproducibly",
    ],
    answer: 3,
    explanation:
      "A reference is an engineering tool: its potential must be quick to settle and reproducible from lab to lab. Second-kind electrodes and the hydrogen electrode fill this role.",
  },

  // -------------------------------------------------- nonequilibrium-potentials
  {
    id: "l2-mcq-013",
    topicId: "nonequilibrium-potentials",
    quick: true,
    question: "An ideally polarizable electrode is one where:",
    options: [
      "Current always flows freely",
      "No electrode reaction can transfer charge, so charge sits in the double layer and the potential is not unique",
      "The potential equals the SHE value",
      "Only oxygen reacts",
    ],
    answer: 1,
    explanation:
      "With no reaction to leak charge away, an accumulated double-layer charge is stable and the potential can be varied at will, exactly like charging a capacitor - until a reaction switches on.",
  },
  {
    id: "l2-mcq-014",
    topicId: "nonequilibrium-potentials",
    quick: true,
    question: "A mixed potential forms when:",
    options: [
      "Two or more electrode reactions run simultaneously and their partial currents balance to zero net current",
      "The cell sits at its EMF",
      "The electrolyte conducts perfectly",
      "The electrode is welded from two metals",
    ],
    answer: 0,
    explanation:
      "Each reaction brings its own equilibrium potential and exchange current; with nothing to prefer one, all the partial currents sum to zero somewhere between the individual equilibrium values - the mixed potential.",
  },
  {
    id: "l2-mcq-015",
    topicId: "nonequilibrium-potentials",
    quick: true,
    question:
      "At an iron electrode in acid chloride under hydrogen, the mixed potential lies:",
    options: [
      "Exactly on the Fe²⁺/Fe equilibrium value",
      "Exactly on the H⁺/H₂ equilibrium value",
      "Between the Fe²⁺/Fe and H⁺/H₂ equilibrium potentials",
      "Outside both equilibrium values",
    ],
    answer: 2,
    explanation:
      "Iron dissolves anodically while hydrogen evolves cathodically, so the reading sits intermediate between the two equilibrium potentials. It is reproducible but it is not a thermodynamic number.",
  },
  {
    id: "l2-mcq-016",
    topicId: "nonequilibrium-potentials",
    question:
      "A low exchange current makes an electrode's open-circuit reading unreliable because:",
    options: [
      "It makes the reading equal the EMF",
      "It attracts a salt bridge",
      "It prevents tabulation",
      "The weak equilibrium is easily displaced by contaminants whose reactions superimpose on the wanted one",
    ],
    answer: 3,
    explanation:
      "A sluggish equilibrium cannot self-correct, so foreign reactions move the potential freely. A large exchange current is the immune system of a healthy open-circuit potential.",
  },

  // ------------------------------------------------------------- cell-voltage
  {
    id: "l2-mcq-017",
    topicId: "cell-voltage",
    quick: true,
    question: "While a battery discharges, the negative electrode is the:",
    options: ["Cathode", "Anode", "Reference electrode", "Salt bridge"],
    answer: 1,
    explanation:
      "The negative terminal supplies electrons to the external circuit - it oxidises - so it is the anode even though it is negative. Anode and cathode always follow the current direction, never the polarity.",
  },
  {
    id: "l2-mcq-018",
    topicId: "cell-voltage",
    quick: true,
    question: "In an electrolyzer, the negative electrode is the:",
    options: ["Cathode", "Anode", "Positive electrode", "Working electrode"],
    answer: 0,
    explanation:
      "The driven current makes the negative electrode the electron source for the reaction at that electrode, so reduction - the cathode - happens there. The labels flip relative to a battery.",
  },
  {
    id: "l2-mcq-019",
    topicId: "cell-voltage",
    quick: true,
    question:
      "While a battery supplies current, its working voltage compared with the OCV is:",
    options: [
      "Higher",
      "Equal",
      "Lower - electrode polarization and the ohmic drop subtract",
      "Unrelated",
    ],
    answer: 2,
    explanation:
      "The anodic and cathodic polarizations move the two electrodes toward each other and the ohmic drop adds on top, so Ᏹᵢ = Ᏹ₀ − ηᶜᵉˡˡ always lies below the open-circuit value.",
  },
  {
    id: "l2-mcq-020",
    topicId: "cell-voltage",
    question: "The total cell overvoltage ηᶜᵉˡˡ is:",
    options: [
      "The EMF of the cell",
      "ΔG divided by nF",
      "The open-circuit voltage",
      "ΔEₐ + |ΔE꜀| + φₒₕₘ, the modulus of the departure of the working voltage from the OCV",
    ],
    answer: 3,
    explanation:
      "It collects every loss that separates the working voltage from the thermodynamic one - the two electrode polarizations and the ohmic drop. The same losses lower a battery's voltage and raise an electrolyzer's.",
  },

  // ---------------------------------------------------- thermodynamic-functions
  {
    id: "l2-mcq-021",
    topicId: "thermodynamic-functions",
    quick: true,
    question: "The electrochemical potential of an ion in a phase is:",
    options: [
      "Its chemical potential only",
      "μ̄ⱼ = μⱼ + zⱼFψ",
      "The field term zⱼFψ alone",
      "RT ln cⱼ",
    ],
    answer: 1,
    explanation:
      "An ion carries both chemical energy and electrostatic energy zⱼFψ, so its electrochemical potential is the sum. The splitting is conditional but accurate in bulk phases.",
  },
  {
    id: "l2-mcq-022",
    topicId: "thermodynamic-functions",
    quick: true,
    question:
      "Summing electrochemical potentials over an electroneutral ensemble, the field terms cancel, so:",
    options: [
      "The Gibbs energy is independent of the electrostatic potential",
      "The electrochemical potential is zero",
      "The chemical potential equals the charge",
      "All activity coefficients vanish",
    ],
    answer: 0,
    explanation:
      "τ₊μ̄₊ + τ₋μ̄₋ = μₖ: the zⱼFψ terms cancel against electroneutrality, leaving the neutral compound's chemical potential. G for any electroneutral system does not depend on ψ.",
  },
  {
    id: "l2-mcq-023",
    topicId: "thermodynamic-functions",
    quick: true,
    question: "Which quantity is experimentally inaccessible?",
    options: [
      "The chemical potential of the neutral salt",
      "The mean ionic activity",
      "The electrochemical potential of a single ion species",
      "The EMF of a cell without transference",
    ],
    answer: 2,
    explanation:
      "Every measurement involves combinations of ions - electroneutral ensembles - never one species alone. Hence single-ion electrochemical potentials are experimentally undefined parameters.",
  },
  {
    id: "l2-mcq-024",
    topicId: "thermodynamic-functions",
    question:
      "Why can the energy effects of a single electrode reaction never be measured?",
    options: [
      "They are always zero",
      "The currents are too small",
      "The temperature coefficient is too large",
      "The reaction runs only in parallel with a coupled reaction at the other electrode, so its parameters are masked",
    ],
    answer: 3,
    explanation:
      "Any electrode reaction needs its partner at the other electrode, whose heat and fluxes interfere. Calculating it would also demand the single-ion μ̄ⱼ and the unmeasurable Galvani potential.",
  },

  // ----------------------------------------------------------------- activity
  {
    id: "l2-mcq-025",
    topicId: "activity",
    quick: true,
    question: "Activity a and concentration c are related by:",
    options: [
      "a = c, always",
      "a = fc, with the dimensionless coefficient f equal to 1 in ideal systems",
      "a = c²",
      "a = 1 − c",
    ],
    answer: 1,
    explanation:
      "The activity is the effective concentration; the coefficient f absorbs the departure from ideal behaviour, becoming 1 in ideal systems. Electrolytes depart from ideal even at low concentration.",
  },
  {
    id: "l2-mcq-026",
    topicId: "activity",
    quick: true,
    question: "The mean ionic activity a± exists because:",
    options: [
      "Single-ion activities cannot be measured",
      "Concentrations are easier to handle",
      "It is required by the SHE definition",
      "Electrolytes are always ideal",
    ],
    answer: 0,
    explanation:
      "Like the single-ion electrochemical potential, the activity of one ion is undeterminable from experiment. a±, built from the electroneutral salt, is measurable and does the thermodynamic work.",
  },
  {
    id: "l2-mcq-027",
    topicId: "activity",
    quick: true,
    question: "In a saturated solution, the product a₊^(τ₊)·a₋^(τ₋) equals:",
    options: [
      "Zero",
      "The cell EMF",
      "The constant solubility product L(k)",
      "RT",
    ],
    answer: 2,
    explanation:
      "At saturation the solute's chemical potential equals that of the solid, pinning the ionic activities to the constant L(k). The ionic product of water K_w is the same idea.",
  },
  {
    id: "l2-mcq-028",
    topicId: "activity",
    question:
      "The formal electrode potential differs from the standard electrode potential because it:",
    options: [
      "Uses unit activities",
      "Is defined at 50 °C",
      "Ignores the reference electrode",
      "Uses concentrations in place of activities, so it depends on the medium",
    ],
    answer: 3,
    explanation:
      "When activity data are too thin, concentrations are substituted and the constant changes character: E⁰' absorbs the medium-dependence and no longer has the clean meaning of E⁰.",
  },

  // ------------------------------------------------------------------ nernst
  {
    id: "l2-mcq-029",
    topicId: "nernst",
    quick: true,
    question: "The relation between a cell's EMF and its reaction's Gibbs energy is:",
    options: [
      "Ᏹ = +ΔG/(nF)",
      "Ᏹ = −ΔG/(nF)",
      "Ᏹ = nF·ΔG",
      "Ᏹ = −RT ln K",
    ],
    answer: 1,
    explanation:
      "nFᏱ is the maximum useful electrical work, which thermodynamics fixes as −ΔG. A spontaneous reaction (ΔG < 0) therefore gives a positive EMF.",
  },
  {
    id: "l2-mcq-030",
    topicId: "nernst",
    quick: true,
    question: "At 25 °C the combined factor 2.303·RT/F equals:",
    options: ["59.16 mV", "25.69 mV", "96 485 mV", "8.314 mV"],
    answer: 0,
    explanation:
      "RT/F = 25.69 mV; converting the natural logarithm of the Nernst equation to base 10 multiplies by 2.303 to give 59.16 mV per decade of activity.",
  },
  {
    id: "l2-mcq-031",
    topicId: "nernst",
    quick: true,
    question:
      "Raising the activity of a species on the oxidised side of an electrode reaction makes the potential:",
    options: ["More negative", "Unchanged", "More positive", "Exactly zero"],
    answer: 2,
    explanation:
      "Species on the oxidised side enter the Nernst sum with a positive sign, so more oxidant means a more positive E. Raising the reduced side does the opposite.",
  },
  {
    id: "l2-mcq-032",
    topicId: "nernst",
    question: "The Nernst equation becomes unreliable when:",
    options: [
      "The temperature is held fixed",
      "A second-kind electrode is used",
      "The cell has no transference",
      "The absolute concentration of a potential-determining species falls below roughly 10⁻⁵ to 10⁻⁷ mol/L",
    ],
    answer: 3,
    explanation:
      "At very low absolute concentrations the double layer consumes a real fraction of the ions and the exchange current collapses, so the potential stops tracking the bulk concentration. Buffered low equilibrium concentrations are fine.",
  },

  // --------------------------------------------------------- special-features
  {
    id: "l2-mcq-033",
    topicId: "special-features",
    quick: true,
    question:
      "For a reaction involving one H⁺ per electron, the potential moves with pH at 25 °C as:",
    options: [
      "+59 mV per pH unit",
      "−59 mV per pH unit",
      "+900 mV per pH unit",
      "Not at all",
    ],
    answer: 1,
    explanation:
      "Each pH unit is a factor of ten in aH⁺, and one H⁺ per electron gives exactly one 59.16 mV decade - the same slope as the hydrogen electrode itself.",
  },
  {
    id: "l2-mcq-034",
    topicId: "special-features",
    quick: true,
    question: "The RHE scale differs from the SHE scale in that it:",
    options: [
      "References the hydrogen electrode at the solution's own pH, so pH-dependent potentials become pH-independent on it",
      "Is quoted only in volts",
      "Exists only for basic solutions",
      "Has no standard potential",
    ],
    answer: 0,
    explanation:
      "RHE measures against the reversible hydrogen electrode in the same solution and same pH, so the −59 mV/pH drift cancels by construction. SHE is the fixed physical anchor; RHE is the local convenience.",
  },
  {
    id: "l2-mcq-035",
    topicId: "special-features",
    quick: true,
    question:
      "In a Pourbaix diagram, a metal whose stability region lies below the hydrogen-evolution line will:",
    options: [
      "Never corrode",
      "Always act as a cathode",
      "In principle corrode while hydrogen is evolved",
      "Require an external catalyst",
    ],
    answer: 2,
    explanation:
      "Below the hydrogen line the metal's oxidation potential is negative enough that hydrogen reduction drives it: the metal corrodes and H₂ evolves. Corrosion protection is about moving a system out of such a region.",
  },
  {
    id: "l2-mcq-036",
    topicId: "special-features",
    question:
      "For quantitative comparison of potentials measured in nonaqueous solvents, IUPAC recommends referencing to:",
    options: [
      "The SHE",
      "A saturated calomel electrode",
      "The RHE",
      "The ferrocene reference electrode",
    ],
    answer: 3,
    explanation:
      "Junctions between dissimilar electrolytes carry unmeasurable potentials, so aqueous references do not transfer quantitatively. Ferrocene's large, weakly solvated ions give a nearly universal scale.",
  },
];