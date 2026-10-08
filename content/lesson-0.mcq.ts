// Lesson 0 - A short introduction: question bank.
//
// Four questions per section, the first three flagged as quick checks. All
// questions are original.

import type { Mcq } from "./types";

export const lesson0Mcq: Mcq[] = [
  // ------------------------------------------------------- what-it-studies
  {
    id: "l0-mcq-001",
    topicId: "what-it-studies",
    quick: true,
    question: "Electrochemistry is best described as the study of:",
    options: [
      "Reactions where electrons move between an electrode and a solution",
      "Reactions that only happen at very high temperature",
      "The colour of metal salts in water",
      "The strength of acids and bases",
    ],
    answer: 0,
    explanation:
      "The essential feature is electron transfer at a metal-solution boundary. That boundary is what makes electrochemistry different from ordinary solution chemistry.",
  },
  {
    id: "l0-mcq-002",
    topicId: "what-it-studies",
    quick: true,
    question: "Oxidation is the:",
    options: [
      "Gain of electrons",
      "Loss of electrons",
      "Loss of protons",
      "Gain of neutrons",
    ],
    answer: 1,
    explanation:
      "Oxidation is the loss of electrons and reduction is the gain. The memory aid OIL RIG stands for Oxidation Is Loss, Reduction Is Gain.",
  },
  {
    id: "l0-mcq-003",
    topicId: "what-it-studies",
    quick: true,
    question:
      "A cell that uses a spontaneous reaction to produce electricity is called:",
    options: [
      "An electrolytic cell",
      "A galvanic cell",
      "A fuel tank",
      "An insulator",
    ],
    answer: 1,
    explanation:
      "A galvanic cell runs the reaction in the direction it wants to go and harvests the energy as electricity. An electrolytic cell does the opposite and needs electricity fed in.",
  },
  {
    id: "l0-mcq-004",
    topicId: "what-it-studies",
    question: "The cathode is the electrode where:",
    options: [
      "Oxidation happens",
      "Reduction happens",
      "No reaction happens",
      "The solution freezes",
    ],
    answer: 1,
    explanation:
      "By definition the cathode is where reduction takes place, and the anode is where oxidation takes place. These names follow the reaction, not the physical side of the cell.",
  },

  // ----------------------------------------------- charge-current-potential
  {
    id: "l0-mcq-005",
    topicId: "charge-current-potential",
    quick: true,
    question: "Current is measured in amperes. One ampere is equal to:",
    options: ["One coulomb per second", "One volt per second", "One joule per second", "One mole per second"],
    answer: 0,
    explanation:
      "Current is the rate at which charge flows, so its unit is charge per time: 1 A = 1 C/s.",
  },
  {
    id: "l0-mcq-006",
    topicId: "charge-current-potential",
    quick: true,
    question:
      "The Faraday constant F is the charge carried by one mole of electrons, about:",
    options: ["96.5 C/mol", "965 C/mol", "96 485 C/mol", "6.02 C/mol"],
    answer: 2,
    explanation:
      "F is about 96 485 C/mol. It is the bridge between the number of moles of electrons and the total charge passed.",
  },
  {
    id: "l0-mcq-007",
    topicId: "charge-current-potential",
    quick: true,
    question: "Potential is best described as:",
    options: [
      "The number of electrons moving per second",
      "The energy per unit charge",
      "The mass of the electrode",
      "The volume of the electrolyte",
    ],
    answer: 1,
    explanation:
      "One volt is one joule per coulomb, so a voltage tells you how much energy each unit of charge carries. Current, by contrast, tells you how much charge moves.",
  },
  {
    id: "l0-mcq-008",
    topicId: "charge-current-potential",
    question:
      "A steady current of 2 A flows for 30 seconds. What charge has passed?",
    options: ["15 C", "30 C", "60 C", "120 C"],
    answer: 2,
    explanation:
      "Charge is current times time: Q = I t = 2 A x 30 s = 60 C.",
  },

  // --------------------------------------------- how-a-cell-is-written
  {
    id: "l0-mcq-008b",
    topicId: "how-a-cell-is-written",
    quick: true,
    question: "In a cell diagram, a double vertical line (||) usually marks:",
    options: [
      "A metal-solution boundary",
      "A salt bridge or liquid junction",
      "The end of the reaction",
      "A change of temperature",
    ],
    answer: 1,
    explanation:
      "A single line marks a phase boundary, such as a metal touching a solution. A double line marks a salt bridge or another junction between the two half-cells.",
  },
  {
    id: "l0-mcq-009",
    topicId: "how-a-cell-is-written",
    quick: true,
    question: "In a cell diagram, the anode is written:",
    options: [
      "On the left",
      "On the right",
      "In the middle",
      "The anode is not shown",
    ],
    answer: 0,
    explanation:
      "Cell diagrams are read from left to right, and by agreement the anode (where oxidation happens) is placed on the left and the cathode on the right.",
  },
  {
    id: "l0-mcq-010",
    topicId: "how-a-cell-is-written",
    quick: true,
    question:
      "In Zn(s) | Zn2+(aq) || Cu2+(aq) | Cu(s), which metal is oxidised?",
    options: ["Zinc", "Copper", "Both zinc and copper", "Neither metal"],
    answer: 0,
    explanation:
      "Zinc sits at the left-hand end, the anode, so it is oxidised to Zn2+. Copper ions are reduced to copper metal at the cathode on the right.",
  },
  {
    id: "l0-mcq-011",
    topicId: "how-a-cell-is-written",
    question: "A single vertical line (|) in a cell diagram marks:",
    options: [
      "A salt bridge",
      "A boundary between two phases",
      "A change in temperature",
      "A gas bubble",
    ],
    answer: 1,
    explanation:
      "A single line stands for a phase boundary, for example the surface between a solid metal electrode and the solution it touches.",
  },

  ];