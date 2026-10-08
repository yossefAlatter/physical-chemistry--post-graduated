// Quiz bank for Lesson 5 - Electrode kinetics and polarization.
//
// Source syllabus: Bagotsky ch.6, 13 and 14, Bard & Faulkner ch.3. Every
// question is original; none is taken from a textbook exercise. Four
// questions per section, the first three flagged as quick checks.

import type { Mcq } from "./types";

export const lesson5Mcq: Mcq[] = [
  // ------------------------------------------------- kinetics-and-overpotential
  {
    id: "l5-mcq-001",
    topicId: "kinetics-and-overpotential",
    quick: true,
    question:
      "Why can the measured current alone not be used as a measure of a reaction's intrinsic speed?",
    options: [
      "Because the current is always limited by diffusion",
      "Because the current is impressed from outside and can be set to any value the system will bear",
      "Because thermodynamics fixes the current",
      "Because the current depends only on the electrode area",
    ],
    answer: 1,
    explanation:
      "The external circuit chooses the current; the reaction merely responds. What reveals the reaction's willingness is the polarization it demands at that current, not the current itself.",
  },
  {
    id: "l5-mcq-002",
    topicId: "kinetics-and-overpotential",
    quick: true,
    question: "Polarization, or overpotential, is best defined as:",
    options: [
      "The total cell voltage under load",
      "The shift of the electrode potential away from its equilibrium value",
      "The current density divided by the electrode area",
      "The resistance of the solution",
    ],
    answer: 1,
    explanation:
      "Polarization is ΔE = E - E_eq. Anodic currents make it positive; cathodic currents make it negative. It is the price paid to drive a net current.",
  },
  {
    id: "l5-mcq-003",
    topicId: "kinetics-and-overpotential",
    quick: true,
    question:
      "An electrode whose surface concentrations stay close to their bulk values while the interfacial electron transfer is slow is under:",
    options: [
      "Diffusion control",
      "Kinetic control",
      "Ohmic control",
      "No control at all",
    ],
    answer: 1,
    explanation:
      "When the slow step is the transfer itself and transport easily keeps up, the electrode is under kinetic (activation) control. The current is i_k.",
  },
  {
    id: "l5-mcq-004",
    topicId: "kinetics-and-overpotential",
    question:
      "Which of these is NOT grouped under activation polarization?",
    options: [
      "The finite rate of electron transfer",
      "The presence of adsorbed intermediates",
      "The shift of the Nernst potential caused by surface depletion of the reactant",
      "The extra potential needed to nucleate a new phase",
    ],
    answer: 2,
    explanation:
      "The shift caused by surface concentration changes is concentration polarization. Activation polarization covers every other interfacial reluctance, including electron transfer, adsorption and nucleation.",
  },

  // -------------------------------------------------- energy-barrier-transfer
  {
    id: "l5-mcq-005",
    topicId: "energy-barrier-transfer",
    quick: true,
    question: "The transfer coefficient alpha is best described as a measure of:",
    options: [
      "The total number of electrons transferred",
      "The symmetry of the energy barrier and how much of the applied potential lowers the forward barrier",
      "The diffusion coefficient of the reactant",
      "The exchange current density",
    ],
    answer: 1,
    explanation:
      "Alpha gives the fraction of the applied electrical energy that helps the forward reaction. It measures where the transition state sits along the reaction coordinate; for a symmetric barrier alpha is about 0.5.",
  },
  {
    id: "l5-mcq-006",
    topicId: "energy-barrier-transfer",
    quick: true,
    question:
      "For a simple reaction transferring n electrons, the two transfer coefficients satisfy:",
    options: [
      "alpha + beta = 0",
      "alpha + beta = n",
      "alpha = beta always",
      "alpha - beta = n",
    ],
    answer: 1,
    explanation:
      "The forward and reverse kinetics are linked through the equilibrium condition, which forces the sum alpha + beta to equal the number of electrons transferred, n.",
  },
  {
    id: "l5-mcq-007",
    topicId: "energy-barrier-transfer",
    quick: true,
    question: "The standard rate constant k0 is valued in kinetics because it is:",
    options: [
      "Independent of the reference electrode and of the concentrations",
      "The same for every reaction",
      "Directly measurable as a net current at equilibrium",
      "Equal to the exchange current density",
    ],
    answer: 0,
    explanation:
      "k0 is the rate constant both directions share at the standard potential. Unlike i0, it carries no concentration and no reference-electrode dependence, making it the clean fingerprint of a reaction.",
  },
  {
    id: "l5-mcq-008",
    topicId: "energy-barrier-transfer",
    question:
      "Raising the overpotential by 0.1 V at alpha = 0.5 and 298 K changes the forward rate by roughly a factor of:",
    options: ["2", "7", "50", "1000"],
    answer: 1,
    explanation:
      "The exponent is alpha F eta / RT = 0.5 x 96485 x 0.1 / 2478 = 1.95, and exp(1.95) is about 7. A small overpotential can speed a reaction substantially because the dependence is exponential.",
  },

  // -------------------------------------------------------------- butler-volmer
  {
    id: "l5-mcq-009",
    topicId: "butler-volmer",
    quick: true,
    question:
      "At the equilibrium potential, the anodic and cathodic partial currents are:",
    options: [
      "Both zero",
      "Equal and opposite, with common magnitude i0",
      "Equal and in the same direction",
      "Unrelated to each other",
    ],
    answer: 1,
    explanation:
      "Equilibrium is a dynamic balance, not a halt. The two partial currents cancel in the external circuit but their common value, the exchange current density, sets the scale of the kinetics.",
  },
  {
    id: "l5-mcq-010",
    topicId: "butler-volmer",
    quick: true,
    question: "The net current density at an electrode is given by:",
    options: [
      "The sum of the anodic and cathodic partial currents",
      "The difference of the anodic and cathodic partial currents",
      "The product of the partial currents",
      "The larger of the two partial currents",
    ],
    answer: 1,
    explanation:
      "The external current is the excess of one direction over the other: i = i(anodic) - i(cathodic). At equilibrium the difference is zero.",
  },
  {
    id: "l5-mcq-011",
    topicId: "butler-volmer",
    quick: true,
    question: "The Butler-Volmer equation contains which pair of kinetic parameters?",
    options: [
      "The limiting currents only",
      "The exchange current density and the transfer coefficients",
      "The diffusion coefficients only",
      "The cell voltage and the solution resistance",
    ],
    answer: 1,
    explanation:
      "Written as i = i0[exp(alpha F eta / RT) - exp(-beta F eta / RT)], the equation needs only i0 and the transfer coefficients to describe the whole current-overpotential curve.",
  },
  {
    id: "l5-mcq-012",
    topicId: "butler-volmer",
    question:
      "The relation k_ox/k_red = exp(nFE0/RT) between the forward and reverse rate constants of one reaction is best described as:",
    options: [
      "The kinetic form of the equilibrium constant relation",
      "A statement that the two constants are equal",
      "The definition of the transfer coefficient",
      "The Tafel equation",
    ],
    answer: 0,
    explanation:
      "Just as ordinary kinetics links K to the forward and reverse rate constants, the electrochemical equilibrium condition links them through the standard potential. The two directions are not independent.",
  },

  // ------------------------------------------------------------ exchange-current
  {
    id: "l5-mcq-013",
    topicId: "exchange-current",
    quick: true,
    question: "The exchange current density i0 is:",
    options: [
      "The net current at equilibrium",
      "The equal partial current density flowing in both directions at equilibrium",
      "The limiting diffusion current",
      "The current at the standard potential under large polarization",
    ],
    answer: 1,
    explanation:
      "i0 is the hidden bidirectional traffic at equilibrium. It produces no net current, but it measures how quickly the interface can respond to a push.",
  },
  {
    id: "l5-mcq-014",
    topicId: "exchange-current",
    quick: true,
    question: "The exchange current density is proportional to:",
    options: [
      "The standard rate constant and the reactant concentrations",
      "The electrode area only",
      "The overpotential",
      "The cell length",
    ],
    answer: 0,
    explanation:
      "i0 grows with k0 and with the concentration of every participant. That is why it changes with solution composition while k0 does not.",
  },
  {
    id: "l5-mcq-015",
    topicId: "exchange-current",
    quick: true,
    question: "A large exchange current density means that:",
    options: [
      "A large overpotential is needed to produce a net current",
      "Only a tiny overpotential is needed to deliver a substantial net current",
      "The reaction is diffusion limited",
      "The reaction cannot proceed",
    ],
    answer: 1,
    explanation:
      "A large i0 is a well-lubricated interface: the two directions almost balance and only a gentle push is needed to tip the balance into a large net current.",
  },
  {
    id: "l5-mcq-016",
    topicId: "exchange-current",
    question: "The charge-transfer resistance near equilibrium is:",
    options: [
      "Directly proportional to i0",
      "Inversely proportional to i0: RT/(nF i0)",
      "Independent of i0",
      "Equal to the solution resistance",
    ],
    answer: 1,
    explanation:
      "A large exchange current corresponds to a small charge-transfer resistance, so a facile reaction needs only a small overpotential for a given current. It is the reciprocal slope of the i-eta curve at the origin.",
  },

  // -------------------------------------------------------------- tafel-equation
  {
    id: "l5-mcq-017",
    topicId: "tafel-equation",
    quick: true,
    question: "The Tafel equation expresses the high-polarization region as:",
    options: [
      "A linear relation between current and overpotential",
      "A linear relation between overpotential and the logarithm of current density",
      "An exponential relation between current and concentration",
      "A constant overpotential independent of current",
    ],
    answer: 1,
    explanation:
      "Far from equilibrium one exponential dominates and ΔE is proportional to log i: the semilogarithmic Tafel line.",
  },
  {
    id: "l5-mcq-017b",
    topicId: "tafel-equation",
    quick: true,
    question:
      "The Tafel slope b' (base ten) is 2.303RT/(alpha F). At 298 K and alpha = 0.5 it is about:",
    options: [
      "0.030 V per decade",
      "0.059 V per decade",
      "0.118 V per decade",
      "0.236 V per decade",
    ],
    answer: 2,
    explanation:
      "2.303RT/F is 0.0592 V at 25 C, so with alpha = 0.5 the slope is 0.0592/0.5 = 0.118 V per decade, the famous about 0.12 V Tafel slope.",
  },
  {
    id: "l5-mcq-018",
    topicId: "tafel-equation",
    quick: true,
    question:
      "On a Tafel plot of overpotential against log current density, the slope yields:",
    options: [
      "The exchange current density",
      "The transfer coefficient",
      "The diffusion coefficient",
      "The limiting current",
    ],
    answer: 1,
    explanation:
      "The slope is 2.303RT/(alpha F), so it yields alpha. The extrapolated intercept at zero polarization gives the exchange current density.",
  },
  {
    id: "l5-mcq-019",
    topicId: "tafel-equation",
    question:
      "A polarization curve showing two straight Tafel sections with different slopes most likely indicates:",
    options: [
      "That the measurement is faulty",
      "A change of rate-determining step or mechanism with potential",
      "That diffusion has taken over completely",
      "That the exchange current is zero",
    ],
    answer: 1,
    explanation:
      "Different Tafel slopes mean different transfer coefficients. A one-electron step has a fixed alpha, so several sections usually mean the rate-determining step changes with potential.",
  },

  // --------------------------------------------- low-polarization-reversibility
  {
    id: "l5-mcq-020",
    topicId: "low-polarization-reversibility",
    quick: true,
    question: "Very close to equilibrium, the Butler-Volmer equation simplifies to:",
    options: [
      "A constant current",
      "A linear relation between current and overpotential",
      "A logarithmic relation",
      "An inverse dependence on overpotential",
    ],
    answer: 1,
    explanation:
      "Expanding both exponentials for small arguments gives i = i0(nF/RT)eta, a straight line through the origin whose slope is the reciprocal charge-transfer resistance.",
  },
  {
    id: "l5-mcq-021",
    topicId: "low-polarization-reversibility",
    quick: true,
    question: "The charge-transfer resistance is:",
    options: [
      "RT/(nF i0), inversely proportional to the exchange current",
      "Directly proportional to i0",
      "Independent of i0",
      "Equal to the solution resistance",
    ],
    answer: 0,
    explanation:
      "The charge-transfer resistance is the reciprocal slope of the i-eta curve at equilibrium. A large exchange current means a small resistance and a reaction that is easy to drive.",
  },
  {
    id: "l5-mcq-022",
    topicId: "low-polarization-reversibility",
    quick: true,
    question:
      "A reaction whose exchange current greatly exceeds its limiting diffusion current is called:",
    options: [
      "Irreversible",
      "Reversible (Nernstian)",
      "Activationless",
      "Ohmic",
    ],
    answer: 1,
    explanation:
      "When delivery is the slow step at every potential, the interface always keeps up. The reaction is reversible and its polarization curve is a single symmetric wave with no kinetic parameter visible.",
  },
  {
    id: "l5-mcq-023",
    topicId: "low-polarization-reversibility",
    question:
      "Which statement about the terms reversible and irreversible is correct?",
    options: [
      "They are fixed properties of a reaction that never change",
      "They compare the exchange current with the limiting diffusion current, so they can change with stirring or electrode material",
      "They refer only to the sign of the current",
      "They are determined purely by thermodynamics",
    ],
    answer: 1,
    explanation:
      "Reversibility is a comparison of kinetic speed with transport. Change the stirring or the electrode and a reversible couple can turn quasi-reversible or irreversible, and vice versa.",
  },

  // ---------------------------------------------------- concentration-polarization
  {
    id: "l5-mcq-024",
    topicId: "concentration-polarization",
    quick: true,
    question: "Concentration polarization arises because:",
    options: [
      "The electron transfer is slow",
      "The surface concentration of a reactant departs from its bulk value, shifting the Nernst potential",
      "The solution resistance is high",
      "The electrode area is small",
    ],
    answer: 1,
    explanation:
      "Current consumes reactant at the surface faster than it is replenished, so c_S differs from c_V. The Nernst equation then places the equilibrium potential somewhere new.",
  },
  {
    id: "l5-mcq-025",
    topicId: "concentration-polarization",
    quick: true,
    question:
      "Concentration polarization in an excess of supporting electrolyte depends on the chemistry of the reaction how?",
    options: [
      "Strongly; every reaction has its own formula",
      "Only through the values of the limiting currents; the functional form is the same for all reactions",
      "Not at all, it depends only on voltage",
      "Only through the exchange current density",
    ],
    answer: 1,
    explanation:
      "The formula contains no chemistry. The identity of the reaction enters only through the limiting currents, because the surface-concentration balance is purely a transport problem.",
  },
  {
    id: "l5-mcq-026",
    topicId: "concentration-polarization",
    quick: true,
    question: "The half-wave potential of a concentration-polarization wave is:",
    options: [
      "Strongly dependent on the reactant concentrations",
      "Independent of the reactant concentrations",
      "Always exactly at the standard potential",
      "Equal to the limiting current",
    ],
    answer: 1,
    explanation:
      "The half-wave potential contains only the standard potential and the transport constants, so it does not shift when the concentrations are changed.",
  },
  {
    id: "l5-mcq-027",
    topicId: "concentration-polarization",
    question:
      "Why is the measured concentration polarization in a binary solution about twice the value found in an excess of supporting electrolyte?",
    options: [
      "Because the reaction rate doubles",
      "Because a diffusion potential and an ohmic drop across the diffusion layer add to the Nernst shift",
      "Because the temperature is higher",
      "Because the limiting current is halved",
    ],
    answer: 1,
    explanation:
      "With no inert ions to carry charge, migration builds a diffusion potential and the thin solution layer adds resistance. Both effects, like the doubling of the limiting current in Lesson 4, trace to electroneutrality.",
  },

  // ---------------------------------------------------------------- mixed-control
  {
    id: "l5-mcq-028",
    topicId: "mixed-control",
    quick: true,
    question:
      "When an electrode is limited by both activation and transport, the real current is related to the kinetic and diffusion currents by:",
    options: [
      "i = i_k + i_d",
      "1/i = 1/i_k + 1/i_d",
      "i = i_k x i_d",
      "i = i_k - i_d",
    ],
    answer: 1,
    explanation:
      "The reciprocal currents add, just as resistances in series. The real current is always smaller than either i_k or i_d alone, and the smaller of the two dominates.",
  },
  {
    id: "l5-mcq-029",
    topicId: "mixed-control",
    quick: true,
    question: "At low current density, the total polarization under mixed control is:",
    options: [
      "Smaller than either polarization alone",
      "Equal to the sum of the activation and concentration polarizations",
      "Independent of current",
      "Always dominated by activation polarization",
    ],
    answer: 1,
    explanation:
      "In the linear low-current limit the two polarizations add, which is why the formal resistance is the sum of a charge-transfer term and two diffusion terms.",
  },
  {
    id: "l5-mcq-030",
    topicId: "mixed-control",
    quick: true,
    question:
      "On a rotating disk, plotting current against the square root of rotation rate shows a plateau. The plateau height is:",
    options: [
      "The limiting diffusion current",
      "The kinetic current at that potential",
      "The sum of the two currents",
      "The exchange current",
    ],
    answer: 1,
    explanation:
      "Transport improves with faster spinning until it no longer limits; the current then stops rising at a value set by the interface alone, the kinetic current, from which k0 and i0 can be extracted.",
  },
  {
    id: "l5-mcq-031",
    topicId: "mixed-control",
    question:
      "Under mixed control, if i_d is much larger than i_k, the electrode is:",
    options: [
      "Under diffusion control",
      "Under kinetic control",
      "Under ohmic control",
      "At equilibrium",
    ],
    answer: 1,
    explanation:
      "When the diffusion current is very large, the reciprocal 1/i_d is negligible and i is essentially i_k: the interface is the bottleneck, so the reaction is kinetically controlled.",
  },

  // -------------------------------------------------- multistep-and-real-surfaces
  {
    id: "l5-mcq-032",
    topicId: "multistep-and-real-surfaces",
    quick: true,
    question: "The rate-determining step of a multistep reaction is:",
    options: [
      "The step with the largest stoichiometric number",
      "The step whose kinetics govern the overall rate, the others being effectively at equilibrium",
      "The last step in the pathway",
      "The step that transfers the most electrons",
    ],
    answer: 1,
    explanation:
      "In the steady state all steps run at the same reduced rate, but one step is intrinsically difficult and sets the pace. The overall kinetics are those of that rate-determining step.",
  },
  {
    id: "l5-mcq-033",
    topicId: "multistep-and-real-surfaces",
    quick: true,
    question:
      "According to the Frumkin psi-prime effect, the reactant concentration at the reaction plane is:",
    options: [
      "Always equal to the bulk concentration",
      "Changed by a Boltzmann factor depending on its charge and the local potential",
      "Independent of the double-layer structure",
      "Always lower than the bulk value",
    ],
    answer: 1,
    explanation:
      "A charged reactant is enriched or depleted in the double layer by a Boltzmann factor. Because the reaction sees E minus psi-prime rather than E, adding inert salt can change the rate.",
  },
  {
    id: "l5-mcq-034",
    topicId: "multistep-and-real-surfaces",
    quick: true,
    question:
      "In a multistep reaction, the stoichiometric numbers satisfy which relation?",
    options: [
      "The sum of the stoichiometric numbers equals the number of electrons",
      "The sum of mu_k times the electrons per step equals the overall electron count n",
      "All stoichiometric numbers are equal to one",
      "The product of the stoichiometric numbers equals n",
    ],
    answer: 1,
    explanation:
      "The sum rule is the sum of mu_k l_k = n: each step's stoichiometric number counts how often it recurs, and multiplying by the electrons it carries and summing recovers the overall electron count.",
  },
  {
    id: "l5-mcq-035",
    topicId: "multistep-and-real-surfaces",
    quick: false,
    question:
      "A reaction that forms a new phase, such as cathodic metal deposition, needs extra overpotential mainly because:",
    options: [
      "The metal ion diffuses slowly",
      "Forming a stable nucleus of the new phase costs surface energy",
      "The equilibrium potential is undefined",
      "The supporting electrolyte reacts",
    ],
    answer: 1,
    explanation:
      "Building a new phase begins with nucleation against the interfacial tension, which costs energy. The overpotential must rise to drive nucleation, so the deposit's form depends on how hard the electrode is pushed.",
  },
];