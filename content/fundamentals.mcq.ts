import type { Mcq } from "./types";

export const fundamentalsMcq: Mcq[] = [
  // what-is-it
  {
    id: "f-mcq-001",
    topicId: "what-is-it",
    quick: true,
    question:
      "Which statement about the anode is always true, in both galvanic and electrolytic cells?",
    options: [
      "It is always negative",
      "It is always positive",
      "Oxidation happens at it",
      "Reduction happens at it",
    ],
    answer: 2,
    explanation:
      "Anode always means oxidation, cathode always means reduction. The sign is what changes: an anode is negative in a galvanic cell and positive in an electrolytic one, which is why 'anode means negative' is a trap.",
  },
  {
    id: "f-mcq-002",
    topicId: "what-is-it",
    quick: true,
    question: "What is the energy flow in an electrolytic cell?",
    options: [
      "Chemical to electrical",
      "Electrical to chemical",
      "Chemical to thermal only",
      "Electrical to thermal only",
    ],
    answer: 1,
    explanation:
      "An electrolytic cell consumes electrical power to force a reaction that would not otherwise run, so energy flows from electrical to chemical. A galvanic cell is the reverse.",
  },
  {
    id: "f-mcq-003",
    topicId: "what-is-it",
    quick: true,
    question: "Which group are all examples of galvanic cells?",
    options: [
      "Electroplating, battery charging, electrorefining",
      "Corrosion, fuel cells, a zinc-copper cell",
      "Electroplating, corrosion, a zinc-copper cell",
      "Battery charging, fuel cells, copper refining",
    ],
    answer: 1,
    explanation:
      "Corrosion, fuel cells and the zinc-copper cell all run spontaneously, so they are galvanic. Electroplating, battery charging and electrorefining all need an external power supply, so they are electrolytic.",
  },

  // cell-anatomy
  {
    id: "f-mcq-004",
    topicId: "cell-anatomy",
    quick: true,
    question: "Why does a cell need a salt bridge?",
    options: [
      "To complete the electrical circuit in the wire",
      "To keep both solutions electrically neutral as ions are consumed or produced",
      "To supply electrons to the anode",
      "To lower the resistance of the electrolyte",
    ],
    answer: 1,
    explanation:
      "Oxidation at the anode releases cations into solution and reduction at the cathode removes them, so each solution would otherwise build up charge and the current would stop. The bridge carries ions to keep both neutral.",
  },
  {
    id: "f-mcq-005",
    topicId: "cell-anatomy",
    quick: true,
    question: "In a zinc-copper cell, where does oxidation occur and what happens to the electrons?",
    options: [
      "At the copper, and they are consumed immediately",
      "At the zinc, and they travel through the wire to the copper",
      "At the copper, and they travel through the wire to the zinc",
      "At the zinc, and they stay in the solution",
    ],
    answer: 1,
    explanation:
      "Zinc is more easily oxidised than copper, so the zinc is the anode: it loses electrons, which flow through the external circuit to the copper cathode, where copper ions are reduced.",
  },
  {
    id: "f-mcq-006",
    topicId: "cell-anatomy",
    quick: true,
    question: "Why is pure water a poor electrolyte?",
    options: [
      "It has too much dissolved salt",
      "It contains almost no mobile ions",
      "Its molecules are too large to move",
      "It conducts heat too well",
    ],
    answer: 1,
    explanation:
      "Only ions carry charge through a liquid, and pure water is only very weakly ionised, so it has almost no charge carriers. That is why electrolytes are melts or salt solutions.",
  },

  // charge-and-current
  {
    id: "f-mcq-007",
    topicId: "charge-and-current",
    quick: true,
    question: "A cell passes 2 A for 5 minutes. How much charge has passed?",
    options: ["600 C", "10 C", "7.2 C", "2400 C"],
    answer: 0,
    explanation:
      "Q = I t = 2 A x 300 s = 600 C. The 5 minutes must be converted to seconds before multiplying; using 5 directly gives 10 C, the classic slip.",
  },
  {
    id: "f-mcq-008",
    topicId: "charge-and-current",
    quick: true,
    question: "What does a volt measure?",
    options: [
      "The total charge in a circuit",
      "Energy per unit charge",
      "Charge per unit time",
      "The total energy stored",
    ],
    answer: 1,
    explanation:
      "One volt is one joule per coulomb. A volt is not an amount of energy, which is why you must know how much charge passed before you can compute the energy delivered.",
  },
  {
    id: "f-mcq-009",
    topicId: "charge-and-current",
    quick: true,
    question: "Why does the resistance of an electrode generally rise as you make the electrode smaller?",
    options: [
      "Smaller electrodes are made of a different metal",
      "The same current must arrive through a smaller surface area",
      "Smaller electrodes have more electrons to move",
      "Resistance depends only on temperature",
    ],
    answer: 1,
    explanation:
      "Current density rises on the smaller area, and mass transport to that area cannot keep up. This is the geometric origin of polarisation curves: current is capped by area times limiting current density.",
  },

  // faradays-laws
  {
    id: "f-mcq-010",
    topicId: "faradays-laws",
    quick: true,
    question: "Using m = M Q / (n F), how many moles of Cu²⁺ are reduced by 96 485 C?",
    options: ["1", "2", "0.5", "31.75"],
    answer: 1,
    explanation:
      "96 485 C is one mole of electrons. Cu²⁺ needs two electrons per ion, so that charge reduces half a mole of Cu²⁺. The value n = 2 in the formula is exactly this count.",
  },
  {
    id: "f-mcq-011",
    topicId: "faradays-laws",
    quick: true,
    question: "Two metals are plated with the same charge. The second has twice the molar mass and the same number of electrons per ion. What is deposited?",
    options: [
      "The same mass",
      "Twice the mass",
      "Half the mass",
      "Four times the mass",
    ],
    answer: 1,
    explanation:
      "With Q and n fixed, mass is proportional to M, so doubling the molar mass doubles the deposited mass. Only the electron count n, not M, can reduce the yield.",
  },
  {
    id: "f-mcq-012",
    topicId: "faradays-laws",
    quick: true,
    question: "A plating bath deposits 0.95 g where Faraday's law predicts 1.00 g. What is the current efficiency?",
    options: ["0.95%", "95%", "1.05%", "5%"],
    answer: 1,
    explanation:
      "Efficiency is deposited mass divided by predicted mass, so 0.95/1.00 = 95%. The missing 5% of current went into side reactions, typically hydrogen evolution, which is also wasted power.",
  },

  // energy-and-power
  {
    id: "f-mcq-013",
    topicId: "energy-and-power",
    quick: true,
    question: "A battery is marked 12 V, 7 Ah. How much energy does it store?",
    options: ["84 J", "84 Wh", "7 Wh", "1728 Wh"],
    answer: 1,
    explanation:
      "Energy = V x capacity = 12 x 7 = 84 Wh. Multiplying the same numbers without converting would give 84 J, a factor of 3600 too small.",
  },
  {
    id: "f-mcq-014",
    topicId: "energy-and-power",
    quick: true,
    question: "Why is comparing two batteries by ampere-hours alone misleading?",
    options: [
      "Ah is not a real unit",
      "Energy also depends on voltage, so two different voltages give different Wh from the same Ah",
      "Ah already includes voltage",
      "Only lithium cells are rated in Ah",
    ],
    answer: 1,
    explanation:
      "Ampere-hours measure charge, not energy. Energy is V x Ah, so a 3.7 V and a 12 V battery of identical capacity hold very different amounts of energy.",
  },
  {
    id: "f-mcq-015",
    topicId: "energy-and-power",
    quick: true,
    question: "A load draws 200 W from a 12 V, 60 Ah battery. Roughly how long does it run at full capacity?",
    options: ["5 min", "30 min", "3.6 h", "36 h"],
    answer: 2,
    explanation:
      "Energy = 12 x 60 = 720 Wh, so runtime = 720 Wh / 200 W = 3.6 h. Dividing the two figures as 60/200 gives 0.3 h, which forgets the voltage entirely.",
  },

  // lab-cell
  {
    id: "f-mcq-016",
    topicId: "lab-cell",
    quick: true,
    question: "What is the role of the counter electrode in a three-electrode cell?",
    options: [
      "To measure the potential of the working electrode",
      "To carry the current, so the reference electrode draws essentially none",
      "To provide a fixed reference potential",
      "To hold the electrolyte at constant pH",
    ],
    answer: 1,
    explanation:
      "The counter electrode takes the current. That keeps the reference electrode unloaded, so its known potential stays constant and the measurement reflects only the working electrode.",
  },
  {
    id: "f-mcq-017",
    topicId: "lab-cell",
    quick: true,
    question: "What is the defining property of a reference electrode?",
    options: [
      "Its potential is fixed and known, and it passes almost no current",
      "It is made of a noble metal",
      "It is always saturated with salt",
      "It is the largest electrode in the cell",
    ],
    answer: 0,
    explanation:
      "A reference electrode is defined by behaviour, not material: a reproducible potential that does not shift under load. Its low current draw is what keeps that potential constant.",
  },
  {
    id: "f-mcq-018",
    topicId: "lab-cell",
    quick: true,
    question: "A potentiostat sweeps the working electrode potential and records the current. What is that measurement called?",
    options: [
      "A Tafel plot",
      "A polarisation curve",
      "A Nyquist plot",
      "A chronopotentiogram",
    ],
    answer: 1,
    explanation:
      "Potential swept, current recorded, gives a polarisation curve. A Tafel plot extracts the slope of its semilog version, a Nyquist plot sweeps frequency instead, and a chronopotentiogram fixes the current and sweeps potential.",
  },

  // units-and-glossary
  {
    id: "f-mcq-019",
    topicId: "units-and-glossary",
    quick: true,
    question: "What is 1 mol L⁻¹ expressed in mol cm⁻³?",
    options: ["1", "10⁻¹", "10⁻³", "10³"],
    answer: 2,
    explanation:
      "One litre is 1000 cm³, so a molar concentration of 1 mol per litre is 10⁻³ mol per cubic centimetre. Getting this factor wrong is a common source of errors by 1000.",
  },
  {
    id: "f-mcq-020",
    topicId: "units-and-glossary",
    quick: true,
    question: "What does the limiting current represent?",
    options: [
      "The maximum current set by how fast reactants can reach the electrode surface",
      "The current at which the electrode dissolves completely",
      "The current when the voltage reaches zero",
      "The current the power supply cannot exceed",
    ],
    answer: 0,
    explanation:
      "Once the surface is depleted faster than mass transport can resupply it, the concentration overpotential grows without bound and current plateaus. That ceiling is the limiting current, and it is set by mass transport, not by the electronics.",
  },
  {
    id: "f-mcq-021",
    topicId: "units-and-glossary",
    quick: true,
    question: "A Tafel slope is reported in volts per decade. What does one decade of current mean?",
    options: [
      "A tenfold increase in current",
      "A doubling of current",
      "A hundredfold increase in current",
      "The current reaching its limit",
    ],
    answer: 0,
    explanation:
      "One decade is a factor of ten. The Tafel slope is the overpotential needed for each tenfold change in current, so it directly measures reaction kinetics: a smaller slope means faster charge transfer.",
  },
];