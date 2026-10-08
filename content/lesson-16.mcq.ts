// Lesson 16 - Advanced topics: question bank.
//
// Source syllabus: Bagotsky ch.24-36 and Bard & Faulkner ch.18. Every
// question is original; none is taken from a textbook exercise.

import type { Mcq } from "./types";

export const lesson16Mcq: Mcq[] = [
  // ---------------------------------------------------- electrocatalysis
  {
    id: "l16-mcq-001",
    topicId: "electrocatalysis",
    quick: true,
    question: "An electrocatalyst is judged by:",
    options: [
      "Its colour",
      "The current density it delivers at a given overpotential",
      "Its price alone",
      "Its melting point",
    ],
    answer: 1,
    explanation:
      "The whole point is a better rate at a smaller driving force, so the benchmark is current density at fixed overpotential.",
  },
  {
    id: "l16-mcq-002",
    topicId: "electrocatalysis",
    quick: true,
    question: "The Sabatier principle says a catalyst should bind intermediates:",
    options: [
      "As strongly as possible",
      "As weakly as possible",
      "Neither too strongly nor too weakly",
      "In gaseous form",
    ],
    answer: 2,
    explanation:
      "Too weak and the intermediate never forms; too strong and it never leaves. Activity peaks in the middle.",
  },
  {
    id: "l16-mcq-003",
    topicId: "electrocatalysis",
    quick: true,
    question: "The benchmark material for hydrogen evolution is:",
    options: ["Carbon", "Platinum", "Gold", "Zinc"],
    answer: 1,
    explanation:
      "Pt sits near the top of the volcano for hydrogen binding, so it remains the standard against which cheaper catalysts are measured.",
  },
  {
    id: "l16-mcq-004",
    topicId: "electrocatalysis",
    question: "Oxygen reduction is the bottleneck of fuel cells because:",
    options: [
      "Oxygen is unavailable",
      "Its multi-electron, multi-step mechanism is kinetically slow compared with hydrogen oxidation",
      "It is too fast",
      "It needs no catalyst",
    ],
    answer: 1,
    explanation:
      "Four electrons and several intermediates must be managed, so the cathode demands orders of magnitude more overpotential than the anode.",
  },

  // -------------------------------------------------------- photo-and-ecl
  {
    id: "l16-mcq-005",
    topicId: "photo-and-ecl",
    quick: true,
    question:
      "In a photoelectrochemical cell, the driving force for the electrode reaction is provided by:",
    options: [
      "A battery",
      "Photogenerated electron-hole pairs in a semiconductor",
      "Heat alone",
      "A sponge",
    ],
    answer: 1,
    explanation:
      "Photon absorption creates carriers whose chemical potential difference across the junction can split water without an external bias.",
  },
  {
    id: "l16-mcq-006",
    topicId: "photo-and-ecl",
    quick: true,
    question:
      "The dream of photoelectrochemistry since the 1970s is:",
    options: [
      "A cheaper battery",
      "A single photoelectrode that splits water with sunlight alone",
      "A better mercury thermometer",
      "An LED that glows in the dark",
    ],
    answer: 1,
    explanation:
      "Artificial photosynthesis - bias-free water splitting on a semiconductor - remains the field's benchmark challenge.",
  },
  {
    id: "l16-mcq-007",
    topicId: "photo-and-ecl",
    quick: true,
    question: "Electrogenerated chemiluminescence (ECL) produces light by:",
    options: [
      "Heating a filament",
      "Recombination of electrogenerated radical ions that leaves one partner in an excited state",
      "Melting ice",
      "Shining a lamp on the cell",
    ],
    answer: 1,
    explanation:
      "A radical cation and radical anion, both born at electrodes, annihilate in solution and one product is born excited, then emits.",
  },
  {
    id: "l16-mcq-008",
    topicId: "photo-and-ecl",
    question: "ECL's analytical advantage is that:",
    options: [
      "It needs no reagents",
      "It needs no lamp, turns on exactly at a set potential, and has a very low background",
      "It works only in the dark",
      "It requires radioactivity",
    ],
    answer: 1,
    explanation:
      "No excitation source means no scattered-light background; the emission is born at the electrode, switchable with the potential.",
  },

  // ------------------------------------------------- conducting-polymers
  {
    id: "l16-mcq-009",
    topicId: "conducting-polymers",
    quick: true,
    question: "A conjugated polymer conducts because:",
    options: [
      "It contains copper wires",
      "Its alternating double bonds delocalise π electrons along the backbone once doped",
      "It is wet",
      "It is very heavy",
    ],
    answer: 1,
    explanation:
      "The π backbone is electronically continuous; adding or removing electrons from it lets charge move along the chain.",
  },
  {
    id: "l16-mcq-010",
    topicId: "conducting-polymers",
    quick: true,
    question: "Switching a conducting polymer between doped and dedoped changes:",
    options: [
      "Only its melting point",
      "Its conductivity and often its colour",
      "Its mass by half",
      "Nothing",
    ],
    answer: 1,
    explanation:
      "Doping changes the carrier density; the altered electronic structure also changes which wavelengths are absorbed, hence the colour.",
  },
  {
    id: "l16-mcq-011",
    topicId: "conducting-polymers",
    quick: true,
    question:
      "In electrochemical terms, doping a conducting polymer is a:",
    options: [
      "Purely mechanical step",
      "Faradaic reaction - an EC-type coupled chemistry on the backbone",
      "Thermal decomposition",
      "Nuclear event",
    ],
    answer: 1,
    explanation:
      "Oxidising or reducing the chain injects or removes electronic charge, and the compensating ion uptake makes it a coupled chemical step.",
  },
  {
    id: "l16-mcq-012",
    topicId: "conducting-polymers",
    question: "Conducting-polymer actuators work because doping:",
    options: [
      "Heats the polymer",
      "Changes the polymer's volume, so a film bends or contracts at a volt",
      "Melts the polymer",
      "Magnetises it",
    ],
    answer: 1,
    explanation:
      "Ion insertion swells or shrinks the film; bonded to a passive layer, that volume change becomes macroscopic motion - an artificial muscle.",
  },

  // ---------------------------------------------------------- solid-state
  {
    id: "l16-mcq-013",
    topicId: "solid-state",
    quick: true,
    question: "In a solid electrolyte, charge is carried by:",
    options: [
      "Electrons only",
      "Ions hopping through the lattice",
      "Bubbles",
      "Light",
    ],
    answer: 1,
    explanation:
      "A mobile ionic species drifts through the rigid host; electrons are ideally blocked, which is what makes it an electrolyte.",
  },
  {
    id: "l16-mcq-014",
    topicId: "solid-state",
    quick: true,
    question: "YSZ (yttria-stabilised zirconia) is valuable because it passes:",
    options: [
      "Electrons only",
      "O2- ions and blocks electrons",
      "Protons only",
      "Nothing at all",
    ],
    answer: 1,
    explanation:
      "Its defect structure carries oxide ions while remaining an electronic insulator - ideal for an oxygen sensor or a high-temperature fuel cell.",
  },
  {
    id: "l16-mcq-015",
    topicId: "solid-state",
    quick: true,
    question: "The hardest part of a solid-state battery is usually:",
    options: [
      "The price of lithium",
      "The solid-solid interface between electrolyte and electrode",
      "The colour of the case",
      "The number of bees",
    ],
    answer: 1,
    explanation:
      "No liquid wets the contact; grain boundaries, roughness and thermal mismatch dominate the cell's resistance.",
  },
  {
    id: "l16-mcq-016",
    topicId: "solid-state",
    question: "The main advantage of a solid electrolyte over a liquid one is:",
    options: [
      "Always much higher conductivity",
      "Selectivity for one ion and no leakage or evaporation",
      "Lower cost in every case",
      "It glows",
    ],
    answer: 1,
    explanation:
      "The rigid lattice lets only ions of the right size through and cannot spill - the trade is that their motion is slower.",
  },

  // ----------------------------------------------- bioelectrochemistry
  {
    id: "l16-mcq-017",
    topicId: "bioelectrochemistry",
    quick: true,
    question: "Bioelectrochemistry is the study of:",
    options: [
      "How electronics are recycled",
      "How biological redox systems exchange electrons with electrodes",
      "The taxonomy of algae",
      "The history of batteries",
    ],
    answer: 1,
    explanation:
      "Enzymes, cells and whole microbes run electron-transfer chemistry; the field asks how that chemistry can hand charge to a wire.",
  },
  {
    id: "l16-mcq-018",
    topicId: "bioelectrochemistry",
    quick: true,
    question: "A blood-glucose strip is an example of:",
    options: [
      "A reference electrode",
      "An enzyme electrode - a bioelectrocatalytic sensor",
      "A fuel cell",
      "A supercapacitor",
    ],
    answer: 1,
    explanation:
      "Glucose oxidase immobilised on the carbon anode converts glucose into a current that is counted in a few seconds.",
  },
  {
    id: "l16-mcq-019",
    topicId: "bioelectrochemistry",
    quick: true,
    question: "A microbial fuel cell's current is generated by:",
    options: [
      "Photosynthesis",
      "Respiring microbes passing electrons to the anode",
      "Thermal convection",
      "A pump",
    ],
    answer: 1,
    explanation:
      "Feed the anode organic waste and the microbes respire onto it, excreting electrons as current - wastewater treatment that yields power.",
  },
  {
    id: "l16-mcq-020",
    topicId: "bioelectrochemistry",
    question:
      "The central mechanistic problem of bioelectrochemistry is:",
    options: [
      "How a redox centre buried inside a protein exchanges electrons with the electrode",
      "How to make proteins cheaper",
      "How to cool the cell",
      "How to polish platinum",
    ],
    answer: 0,
    explanation:
      "Most redox enzymes keep their active site insulated; getting its electron out to the wire, via a mediator or a designed contact, is the field's core problem.",
  },

  // ------------------------------------------------ nano-and-simulation
  {
    id: "l16-mcq-021",
    topicId: "nano-and-simulation",
    quick: true,
    question: "At a nanometre-scale electrode, transport is dominated by:",
    options: [
      "Planar diffusion",
      "Radial/spherical diffusion and true steady states",
      "No diffusion",
      "Turbulence",
    ],
    answer: 1,
    explanation:
      "A very small electrode is engulfed by a three-dimensional diffusion field, giving the steady currents of Lesson 8 - only microseconds fast.",
  },
  {
    id: "l16-mcq-022",
    topicId: "nano-and-simulation",
    quick: true,
    question: "Nanoparticles and ultramicroelectrodes are useful because:",
    options: [
      "Their diffusion layers relax so fast they can trap short-lived species",
      "They are made of gold only",
      "They never touch solution",
      "They are invisible",
    ],
    answer: 0,
    explanation:
      "The diffusion time scales with radius squared, so a nanometre electrode samples chemistry on a microsecond timescale and catches fleeting intermediates.",
  },
  {
    id: "l16-mcq-023",
    topicId: "nano-and-simulation",
    quick: true,
    question: "At the single-molecule limit, the measurable current becomes:",
    options: [
      "A smooth DC line",
      "A series of countable events as individual molecules enter, react, or leave",
      "Exactly zero",
      "Undefined",
    ],
    answer: 1,
    explanation:
      "With one molecule in the junction the trace is a sequence of discrete steps - the chemical event itself is the signal.",
  },
  {
    id: "l16-mcq-024",
    topicId: "nano-and-simulation",
    question: "Digital simulation of voltammetry exists because:",
    options: [
      "The analytic equations of Fick and Butler-Volmer are wrong",
      "For coupled reactions and realistic boundary conditions the diffusion equations cannot be solved analytically",
      "Computers enjoy solving PDEs",
      "Experiments are unnecessary",
    ],
    answer: 1,
    explanation:
      "Closed forms exist only for idealised cases; a real mechanism with coupled chemistry and a porous electrode is a PDE problem, and PDEs are what computers solve.",
  },
];
