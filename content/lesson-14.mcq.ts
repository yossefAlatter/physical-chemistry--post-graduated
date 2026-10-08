// Lesson 14 - Batteries, fuel cells and devices: question bank.
//
// Source syllabus: Bagotsky ch.19-21. Every question is original; none is
// taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson14Mcq: Mcq[] = [
  // ------------------------------------------------ what-a-battery-stores
  {
    id: "l14-mcq-001",
    topicId: "what-a-battery-stores",
    quick: true,
    question: "A battery stores:",
    options: [
      "Electrons in a can",
      "Chemical free energy in its reactants",
      "Charge in a vacuum",
      "Heat",
    ],
    answer: 1,
    explanation:
      "Almost all of the 'energy' in a battery is the free energy of its cell reaction; the terminals' charge is negligible by comparison.",
  },
  {
    id: "l14-mcq-002",
    topicId: "what-a-battery-stores",
    quick: true,
    question: "The electrolyte in a battery cell must:",
    options: [
      "Conduct electrons and block ions",
      "Conduct ions and block electrons",
      "Block everything",
      "Evaporate on demand",
    ],
    answer: 1,
    explanation:
      "Ionic conduction but electronic insulation forces the electrons through the external circuit, where they do useful work.",
  },
  {
    id: "l14-mcq-003",
    topicId: "what-a-battery-stores",
    quick: true,
    question: "The open-circuit voltage of a cell is set by:",
    options: [
      "The temperature of the room",
      "The free energy of its cell reaction per unit charge",
      "The colour of the case",
      "The amount of electrolyte only",
    ],
    answer: 1,
    explanation:
      "ΔG = -nFE: the open-circuit voltage is the cell reaction's free energy expressed per coulomb.",
  },
  {
    id: "l14-mcq-004",
    topicId: "what-a-battery-stores",
    question: "A battery's capacity (Ah) is set by:",
    options: [
      "Its output voltage",
      "The amount of reactant packed inside",
      "The colour of the label",
      "The shape of the can",
    ],
    answer: 1,
    explanation:
      "Capacity is the total charge the reactants can deliver, i.e. how much reactant is in the can, expressed in ampere-hours.",
  },

  // --------------------------------------------------- capacity-rate-life
  {
    id: "l14-mcq-005",
    topicId: "capacity-rate-life",
    quick: true,
    question: "A 2C discharge rate means the cell is emptied in:",
    options: ["Two hours", "Half an hour", "One hour", "Two minutes"],
    answer: 1,
    explanation:
      "At 1C the nominal capacity lasts one hour; at 2C the same total leaves twice as fast, lasting half an hour.",
  },
  {
    id: "l14-mcq-006",
    topicId: "capacity-rate-life",
    quick: true,
    question:
      "Why does a battery's voltage sag when you draw a higher current?",
    options: [
      "The reactants are used up faster thermodynamically",
      "Activation overpotentials, ohmic drop, and concentration overpotentials all grow",
      "The Faraday constant changes",
      "The electrolyte evaporates",
    ],
    answer: 1,
    explanation:
      "All three loss terms scale with current, so the terminal voltage falls as the cell is asked to work harder.",
  },
  {
    id: "l14-mcq-007",
    topicId: "capacity-rate-life",
    quick: true,
    question: "Cycle life is reduced mainly by:",
    options: [
      "Side reactions and mechanical strain of the electrodes",
      "The growth of a tree in the electrolyte",
      "A poetic label",
      "The day of the week",
    ],
    answer: 0,
    explanation:
      "Each cycle leaks a little capacity to parasitic chemistry and to the physical breathing of the electrode materials.",
  },
  {
    id: "l14-mcq-008",
    topicId: "capacity-rate-life",
    question: "Improving electrode kinetics raises the battery's:",
    options: [
      "Open-circuit voltage only",
      "Voltage under load and hence its power at a given rate",
      "Colour",
      "Number of bees",
    ],
    answer: 1,
    explanation:
      "Lower activation overpotential means less voltage is lost at a given current, so the cell delivers more of its thermodynamic voltage under load.",
  },

  // ------------------------------------------- primary-storage-lithium
  {
    id: "l14-mcq-009",
    topicId: "primary-storage-lithium",
    quick: true,
    question: "A primary battery is designed to be:",
    options: ["Recharged often", "Used once", "Used at absolute zero", "Thrown away while working"],
    answer: 1,
    explanation:
      "Its reaction is not meant to be reversed; when the reactants are spent, the cell is done.",
  },
  {
    id: "l14-mcq-010",
    topicId: "primary-storage-lithium",
    quick: true,
    question: "A secondary (storage) battery differs by being:",
    options: [
      "Heavier",
      "Designed so its cell reaction can be driven backward to recharge it",
      "Unable to store energy",
      "Only useful once",
    ],
    answer: 1,
    explanation:
      "Reversible chemistry lets the charger push the reaction backward, restoring the reactants for another discharge.",
  },
  {
    id: "l14-mcq-011",
    topicId: "primary-storage-lithium",
    quick: true,
    question: "In a lithium-ion cell, discharge works by:",
    options: [
      "Metallic lithium dissolving from the anode",
      "Li+ ions shuttling from the graphite anode into the cathode oxide",
      "Protons moving through the can",
      "Electrons crossing the electrolyte",
    ],
    answer: 1,
    explanation:
      "No metal dissolves; Li+ ions leave the graphite layers, cross the electrolyte, and insert into the oxide cathode. Reversing the field reverses the trip.",
  },
  {
    id: "l14-mcq-012",
    topicId: "primary-storage-lithium",
    question:
      "Intercalation in a lithium-ion battery is valuable because it:",
    options: [
      "Dissolves the electrode each cycle",
      "Lets Li+ insert into and leave a host lattice without destroying its structure, so the cell survives many cycles",
      "Increases the temperature",
      "Consumes all the electrolyte each cycle",
    ],
    answer: 1,
    explanation:
      "The host lattice expands and contracts slightly but keeps its structure, so no material dissolves or re-grows; a reversible mechanical breathing instead of a chemical makeover.",
  },

  // ---------------------------------------------------- supercapacitors
  {
    id: "l14-mcq-013",
    topicId: "supercapacitors",
    quick: true,
    question: "A supercapacitor stores energy primarily in:",
    options: [
      "Chemical bonds of a reactant",
      "The mass of the electrodes",
      "Two electric double layers of nanoporous carbon",
      "Heat in the electrolyte",
    ],
    answer: 2,
    explanation:
      "Charge is stored electrostatically across the double layers, not by a faradaic reaction - the double layer of Lesson 6 scaled up.",
  },
  {
    id: "l14-mcq-014",
    topicId: "supercapacitors",
    quick: true,
    question:
      "Compared with a lithium-ion cell, a supercapacitor delivers more:",
    options: [
      "Energy density",
      "Power density and cyclic life",
      "Voltage per cell",
      "Heat",
    ],
    answer: 1,
    explanation:
      "No sluggish reaction to wait for: it charges in seconds and can be cycled hundreds of thousands of times, at the price of much less energy per kilogram.",
  },
  {
    id: "l14-mcq-015",
    topicId: "supercapacitors",
    quick: true,
    question: "Supercapacitor capacitance is increased by:",
    options: [
      "Thicker electrodes and wider plate spacing",
      "Huge surface area and nanometre-scale charge separation",
      "Freezing the electrolyte",
      "Using fewer ions",
    ],
    answer: 1,
    explanation:
      "C = εA/d: maximising area (nanoporous carbon) and shrinking d (double-layer scale) push capacitance up by orders.",
  },
  {
    id: "l14-mcq-016",
    topicId: "supercapacitors",
    question:
      "A supercapacitor cannot replace a battery for long drive times because:",
    options: [
      "It is too heavy",
      "Its energy density is much lower, so it stores far less watt-hours per kilogram",
      "It cannot deliver current",
      "It is always at 0 V",
    ],
    answer: 1,
    explanation:
      "It trades energy for power: superb for short bursts, inadequate for hours of steady discharge.",
  },

  // -------------------------------------------------------- fuel-cells
  {
    id: "l14-mcq-017",
    topicId: "fuel-cells",
    quick: true,
    question: "A fuel cell differs from a battery by:",
    options: [
      "Storing its own fuel",
      "Being fed reactants continuously from outside",
      "Running at 0 V always",
      "Having no electrodes",
    ],
    answer: 1,
    explanation:
      "A fuel cell consumes what is pumped into it; a battery carries its reactants inside.",
  },
  {
    id: "l14-mcq-018",
    topicId: "fuel-cells",
    quick: true,
    question: "At the anode of a hydrogen PEM fuel cell:",
    options: [
      "Hydrogen is oxidised to protons and electrons",
      "Oxygen is reduced",
      "Water is electrolysed",
      "Electrons are stored",
    ],
    answer: 0,
    explanation:
      "H2 → 2H+ + 2e^-: dehydrogenation releases the electrons that power the external circuit.",
  },
  {
    id: "l14-mcq-019",
    topicId: "fuel-cells",
    quick: true,
    question: "In a PEM fuel cell the electrons travel:",
    options: [
      "Through the membrane",
      "Through the external circuit",
      "Through the gas channels",
      "Nowhere - they vanish",
    ],
    answer: 1,
    explanation:
      "Only protons cross the membrane; electrons must detour through the load, where they do work.",
  },
  {
    id: "l14-mcq-020",
    topicId: "fuel-cells",
    question:
      "The voltage actually delivered by a fuel cell under load is below its thermodynamic EMF mainly because of:",
    options: [
      "Activation overpotentials (especially at the oxygen electrode), ohmic drop in the membrane, and concentration losses",
      "The gravitational pull of the moon",
      "The colour of the current collectors",
      "The age of the building",
    ],
    answer: 0,
    explanation:
      "The same three loss terms that sag a battery apply: slow cathodic kinetics, membrane resistance, and reactant starvation at high current.",
  },

  // --------------------------------------------- sensors-and-transducers
  {
    id: "l14-mcq-021",
    topicId: "sensors-and-transducers",
    quick: true,
    question: "An amperometric sensor reports concentration through:",
    options: [
      "The colour of the solution",
      "The limiting current at a fixed potential",
      "The temperature",
      "The mass of the electrode",
    ],
    answer: 1,
    explanation:
      "Held at a mass-transfer-limited potential, the steady current is proportional to the analyte concentration - the Levich/Cottrell logic in a device.",
  },
  {
    id: "l14-mcq-022",
    topicId: "sensors-and-transducers",
    quick: true,
    question: "A pH electrode is a sensor because:",
    options: [
      "It switches colour",
      "An ion-selective membrane converts a proton-activity ratio into a Nernstian potential",
      "It generates heat",
      "It measures resistance only",
    ],
    answer: 1,
    explanation:
      "Zero-current potential between the two faces of the glass membrane is set by the proton activity ratio, i.e. the pH.",
  },
  {
    id: "l14-mcq-023",
    topicId: "sensors-and-transducers",
    quick: true,
    question: "The selectivity of a sensor comes from:",
    options: [
      "The batch number",
      "The chemistry at the sensing interface - catalyst, membrane, mediator",
      "The wire gauge",
      "The logo on the case",
    ],
    answer: 1,
    explanation:
      "Only the interfacial chemistry can tell species apart; tuning it is what makes a sensor respond to glucose and not water.",
  },
  {
    id: "l14-mcq-024",
    topicId: "sensors-and-transducers",
    question: "All electrochemical sensors share one idea:",
    options: [
      "They measure mass",
      "They convert a chemical amount at an interface into an electrical signal",
      "They measure temperature only",
      "They must use mercury",
    ],
    answer: 1,
    explanation:
      "Amperometric, potentiometric, impedimetric - all of them read out the same interfacial thermodynamics or kinetics as a voltage or a current.",
  },
];
