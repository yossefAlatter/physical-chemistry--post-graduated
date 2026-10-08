// Lesson 13 - Corrosion: question bank.
//
// Source syllabus: Bagotsky ch.22. Every question is original; none is
// taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson13Mcq: Mcq[] = [
  // --------------------------------------------------- why-metals-corrode
  {
    id: "l13-mcq-001",
    topicId: "why-metals-corrode",
    quick: true,
    question:
      "The thermodynamic reason most metals corrode is that:",
    options: [
      "Metals are always at absolute zero",
      "The oxide, hydroxide or salt is more stable in water and oxygen than the metal",
      "Water is perfectly insulating",
      "Electrons cannot move through metals",
    ],
    answer: 1,
    explanation:
      "Refining forced the metal out of its ore; the environment offers to take it back as the more stable oxide, and given a path it will.",
  },
  {
    id: "l13-mcq-002",
    topicId: "why-metals-corrode",
    quick: true,
    question:
      "Whether a metal *actually* corrodes quickly is decided by:",
    options: [
      "Thermodynamics only",
      "Kinetics - the activation barriers and films in the way",
      "The metal's density",
      "The barometric pressure",
    ],
    answer: 1,
    explanation:
      "Thermodynamics allows it; the rate is set by kinetics, which is why coatings, inhibitors and passive films can save a thermodynamically doomed metal.",
  },
  {
    id: "l13-mcq-003",
    topicId: "why-metals-corrode",
    quick: true,
    question: "Corrosion is, at heart:",
    options: [
      "A slow combustion",
      "A pervasive electrochemical cell",
      "A purely mechanical process",
      "A nuclear event",
    ],
    answer: 1,
    explanation:
      "Anodic dissolution and a cathodic reduction, connected by an electrolyte and the metal itself - a galvanic cell nobody drew.",
  },
  {
    id: "l13-mcq-004",
    topicId: "why-metals-corrode",
    question: "A noble metal like gold resists corrosion because:",
    options: [
      "Its oxides are more stable than it is",
      "Its dissolution is thermodynamically unfavourable in ordinary conditions",
      "It has no electrons",
      "It weighs too much",
    ],
    answer: 1,
    explanation:
      "Gold sits at the noble end of the stability scale: its oxides are less stable than the metal, so dissolution has no free-energy driving force.",
  },

  // ------------------------------------------------- four-requirements
  {
    id: "l13-mcq-005",
    topicId: "four-requirements",
    quick: true,
    question: "The four requirements of a corrosion cell are:",
    options: [
      "Anode, cathode, electrolyte, electron path",
      "Air, water, light, heat",
      "Two metals, a battery, a bulb, a switch",
      "Oxygen, nitrogen, salt, sand",
    ],
    answer: 0,
    explanation:
      "A galvanic couple needs both electrodes, an ionic path between them, and an electronic path through the metal - remove any one and it stops.",
  },
  {
    id: "l13-mcq-006",
    topicId: "four-requirements",
    quick: true,
    question: "Painting a steel bridge mainly works by:",
    options: [
      "Breaking the electron path in the metal",
      "Blocking the electrolyte from reaching the metal",
      "Cooling the surface",
      "Changing the standard potential",
    ],
    answer: 1,
    explanation:
      "Paint isolates the metal from the surrounding water film, removing the electrolyte leg of the corrosion cell.",
  },
  {
    id: "l13-mcq-007",
    topicId: "four-requirements",
    quick: true,
    question: "The anode and cathode of a corrosion cell can be:",
    options: [
      "Only two different metals",
      "Different spots on the same piece of metal",
      "Only on opposite sides of the ocean",
      "Only at absolute zero",
    ],
    answer: 1,
    explanation:
      "A scratch, a grain boundary, or the edge of a droplet can each set up an anodic and a cathodic region on a single surface.",
  },
  {
    id: "l13-mcq-008",
    topicId: "four-requirements",
    question:
      "A corrosion cell is stopped by removing any one of its legs. Which method removes the electron path?",
    options: [
      "Paint",
      "Electrically isolating the two metals",
      "Deaerating the water",
      "Applying a sacrificial anode",
    ],
    answer: 1,
    explanation:
      "Isolation breaks the electronic connection between the incipient anode and cathode, so the galvanic circuit is open and no cell current can flow.",
  },

  // -------------------------------------------- anodic-cathodic-reactions
  {
    id: "l13-mcq-009",
    topicId: "anodic-cathodic-reactions",
    quick: true,
    question: "At a corroding anode, the metal:",
    options: [
      "Deposits",
      "Dissolves as ions, releasing electrons",
      "Absorbs oxygen",
      "Becomes noble",
    ],
    answer: 1,
    explanation:
      "M → M^n+ + ne^-: the metal pays atoms into the electrolyte and electrons into the circuit.",
  },
  {
    id: "l13-mcq-010",
    topicId: "anodic-cathodic-reactions",
    quick: true,
    question:
      "In neutral water, the usual cathodic reaction on steel is:",
    options: [
      "2H+ + 2e → H2",
      "O2 + 2H2O + 4e → 4OH-",
      "N2 + 6H2O + 6e → 2NH3 + 6OH-",
      "CO2 + 2H+ + 2e → HCOOH",
    ],
    answer: 1,
    explanation:
      "Neutral water contains few protons; dissolved oxygen is the available electron acceptor, producing hydroxide at the cathode.",
  },
  {
    id: "l13-mcq-011",
    topicId: "anodic-cathodic-reactions",
    quick: true,
    question: "In acid, the cathodic partner of iron corrosion can be:",
    options: [
      "Hydrogen evolution, 2H+ + 2e → H2",
      "Oxygen evolution",
      "Carbon deposition",
      "Nothing",
    ],
    answer: 0,
    explanation:
      "With abundant protons the simplest acceptor is H+ itself, so hydrogen bubbles from the cathode and the iron dissolves faster.",
  },
  {
    id: "l13-mcq-012",
    topicId: "anodic-cathodic-reactions",
    question:
      "The local pH at the cathode of a neutral-water corrosion cell tends to:",
    options: ["Fall", "Rise, because OH- is generated there", "Stay exactly 7", "Become undefined"],
    answer: 1,
    explanation:
      "Oxygen reduction produces hydroxide, so the cathode spot becomes alkaline even while the bulk water stays neutral.",
  },

  // -------------------------------------------------------- passivation
  {
    id: "l13-mcq-013",
    topicId: "passivation",
    quick: true,
    question: "A passive film is:",
    options: [
      "A thick layer of rust",
      "A thin, dense, adherent oxide that shuts the anodic reaction down",
      "A layer of paint",
      "A gas bubble",
    ],
    answer: 1,
    explanation:
      "Passivation is a self-limiting oxide only nanometres thick; it blocks ion transport through the anode and stops dissolution.",
  },
  {
    id: "l13-mcq-014",
    topicId: "passivation",
    quick: true,
    question: "Stainless steel resists rust mainly because of:",
    options: [
      "The nickel content only",
      "A self-healing chromium oxide passive film",
      "Its high carbon content",
      "Its weight",
    ],
    answer: 1,
    explanation:
      "Chromium forms a fast, dense oxide when scratched; that film, not the steel's composition alone, is the defence.",
  },
  {
    id: "l13-mcq-015",
    topicId: "passivation",
    quick: true,
    question: "Pitting corrosion starts when:",
    options: [
      "The surface is perfectly smooth",
      "The passive film is locally broken, often by chloride, and a small anode faces a large cathode",
      "Oxygen is absent everywhere",
      "The potential is held at zero",
    ],
    answer: 1,
    explanation:
      "A film breach nucleates a tiny anodic pit; the surrounding intact surface becomes the cathode, and the cathodic current funnels into the small wound, digging it deeper.",
  },
  {
    id: "l13-mcq-016",
    topicId: "passivation",
    question:
      "Why does a scratched stainless knife usually recover, while a scratched tin-plated can rusts?",
    options: [
      "Steel is lighter",
      "The chromium oxide film re-forms instantly; tin, being less active than steel, cannot protect it",
      "The knife is thicker",
      "The can is wetter",
    ],
    answer: 1,
    explanation:
      "Stainless steel passivates itself on exposure to air; tin is noble to steel, so once scratched the steel becomes the anode and the tin the cathode.",
  },

  // -------------------------------------------- types-and-protection
  {
    id: "l13-mcq-017",
    topicId: "types-and-protection",
    quick: true,
    question: "Differential aeration means:",
    options: [
      "The cell runs at two voltages",
      "Oxygen concentration differs over one surface, setting up anodic and cathodic patches",
      "Two gases mix",
      "The anode is too big",
    ],
    answer: 1,
    explanation:
      "Where O2 is plentiful the surface is cathodic; where it is scarce it is anodic. Droplet edges, crevices, and waterlines all write this cell.",
  },
  {
    id: "l13-mcq-018",
    topicId: "types-and-protection",
    quick: true,
    question: "Bolting copper to steel in sea water tends to:",
    options: [
      "Protect the copper",
      "Accelerate corrosion of the steel",
      "Do nothing",
      "Make both metals noble",
    ],
    answer: 1,
    explanation:
      "Copper is the more noble metal, so it becomes the cathode and forces the steel to be the anode; the steel dissolves faster.",
  },
  {
    id: "l13-mcq-019",
    topicId: "types-and-protection",
    quick: true,
    question: "A sacrificial anode protects a structure by:",
    options: [
      "Being the more active metal, so it corrodes instead",
      "Being more noble",
      "Removing all oxygen",
      "Insulating the surface",
    ],
    answer: 0,
    explanation:
      "Zinc on steel makes the zinc the anode; the steel becomes the cathode and is spared until the zinc is consumed.",
  },
  {
    id: "l13-mcq-020",
    topicId: "types-and-protection",
    question:
      "Why is galvanising (zinc coating on steel) effective even after a scratch?",
    options: [
      "The scratch self-heals with paint",
      "Zinc is more active than steel, so it acts as a sacrificial anode at the exposed spot",
      "The zinc gets hotter",
      "The steel becomes more noble",
    ],
    answer: 1,
    explanation:
      "A scratch breaks the barrier, but the exposed zinc corrodes preferentially and polarises the steel cathodically, protecting it.",
  },
];
