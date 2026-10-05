// GENERATED FILE - safe to edit by hand.
//
// Exported from the verified question bank by
//   tools/export_mcq_ts.py
// Every answer here was checked against the printed working by
// tools/check_questions.py, so treat the explanations as the source of
// truth and keep them in step if you edit a question.
//
// Adding a lecture with its own questions: copy this file's shape into
// <lecture-slug>.mcq.ts and register it in content/index.ts.

import type { Mcq } from "./types";

export const lecture1Mcq: Mcq[] = [
  {
    "id": "l1-mcq-001",
    "topicId": "cell-anatomy",
    "quick": true,
    "question": "In an electrolytic cell driven by an external power supply, the anode is",
    "options": [
      "the negative electrode",
      "the positive electrode",
      "the electrode where reduction happens",
      "the electrode made of the cheaper metal"
    ],
    "answer": 1,
    "explanation": "Oxidation always happens at the anode. In an electrolytic cell oxidation is forced at the positive electrode; in a galvanic cell it happens at the negative one. The reaction defines the name, not the sign."
  },
  {
    "id": "l1-mcq-002",
    "topicId": "cell-anatomy",
    "question": "Charge is carried through the metal wire by",
    "options": [
      "ions",
      "electrons",
      "protons",
      "both ions and electrons"
    ],
    "answer": 1,
    "explanation": "Metals have mobile electrons but no mobile ions. The solution carries the other half of the current as ions."
  },
  {
    "id": "l1-mcq-003",
    "topicId": "cell-anatomy",
    "question": "The potential of a galvanic cell under standard conditions is",
    "options": [
      "positive",
      "negative",
      "zero by definition",
      "undefined"
    ],
    "answer": 0,
    "explanation": "A galvanic cell delivers electrical work from a spontaneous reaction, so E(cell) is positive by definition."
  },
  {
    "id": "l1-mcq-004",
    "topicId": "cell-anatomy",
    "quick": true,
    "question": "The main purpose of a reference electrode is to",
    "options": [
      "supply current to the working electrode",
      "provide a point of known, stable potential to measure against",
      "control the current through the cell",
      "increase the conductivity of the solution"
    ],
    "answer": 1,
    "explanation": "A voltmeter measures a difference between two points. The reference supplies the second point, which is what turns a voltage into a potential."
  },
  {
    "id": "l1-mcq-005",
    "topicId": "cell-anatomy",
    "question": "A potential quoted simply as \"0.42 V\" is",
    "options": [
      "a complete and usable measurement",
      "ambiguous, because the reference electrode is not stated",
      "only valid at pH 0",
      "only valid at 25 degrees C"
    ],
    "answer": 1,
    "explanation": "\"0.42 V vs. Ag/AgCl\" and \"0.42 V vs. RHE\" can be different numbers for the same electrode. Never quote a potential without its reference."
  },
  {
    "id": "l1-mcq-006",
    "topicId": "cell-anatomy",
    "question": "Oxidation is defined as",
    "options": [
      "gain of electrons",
      "loss of electrons",
      "gain of protons",
      "loss of protons"
    ],
    "answer": 1,
    "explanation": "Losing electrons makes a species more positive. Gain of electrons is reduction."
  },
  {
    "id": "l1-mcq-007",
    "topicId": "cell-anatomy",
    "quick": true,
    "question": "The open-circuit potential of an electrode pair is",
    "options": [
      "the potential reached at very high current",
      "the voltage read when no current is allowed to flow",
      "the thermodynamic standard potential by definition",
      "the potential of zero current under load"
    ],
    "answer": 1,
    "explanation": "With the circuit open, nothing is being consumed, so the reading approximates the reversible potential."
  },
  {
    "id": "l1-mcq-008",
    "topicId": "double-layer",
    "quick": true,
    "question": "A typical electrical double layer at an electrode in water is",
    "options": [
      "one molecule thick",
      "nanometres to micrometres thick",
      "about a millimetre thick",
      "the same thickness as the cell"
    ],
    "answer": 1,
    "explanation": "The layer is nanometres to micrometres thick, which is why it holds a large voltage across a very small distance."
  },
  {
    "id": "l1-mcq-009",
    "topicId": "double-layer",
    "question": "The Debye length is mainly set by",
    "options": [
      "the applied potential",
      "the ionic strength of the solution",
      "the temperature only",
      "the electrode material"
    ],
    "answer": 1,
    "explanation": "It scales as the inverse square root of ionic strength. More salt means a shorter Debye length."
  },
  {
    "id": "l1-mcq-010",
    "topicId": "double-layer",
    "question": "Increasing the ionic strength of an electrolyte will",
    "options": [
      "lengthen the Debye length",
      "shorten the Debye length",
      "leave it unchanged",
      "double it"
    ],
    "answer": 1,
    "explanation": "lambda_D is proportional to I^(-0.5), so added electrolyte compresses the diffuse layer."
  },
  {
    "id": "l1-mcq-011",
    "topicId": "double-layer",
    "quick": true,
    "question": "The Stern model combines",
    "options": [
      "Gouy-Chapman and Debye-Huckel only",
      "a compact Helmholtz layer with a diffuse Gouy-Chapman layer",
      "two diffuse layers",
      "a Helmholtz layer and a Nernst layer"
    ],
    "answer": 1,
    "explanation": "Stern adds immobile, tightly packed ions next to the surface to the diffuse Gouy-Chapman picture. It is the standard practical model."
  },
  {
    "id": "l1-mcq-012",
    "topicId": "double-layer",
    "question": "In the Stern picture, the compact part of the double layer behaves most like",
    "options": [
      "a resistor",
      "a capacitor",
      "an inductor",
      "a fuse"
    ],
    "answer": 1,
    "explanation": "Charge stored on the metal and on the counter-ions is exactly the parallel-plate capacitor arrangement."
  },
  {
    "id": "l1-mcq-013",
    "topicId": "double-layer",
    "quick": true,
    "question": "Adding supporting electrolyte to a solution will normally",
    "options": [
      "reduce the double-layer capacitance",
      "increase the double-layer capacitance by compressing the layer",
      "have no effect on the double layer",
      "reverse the direction of the potential drop"
    ],
    "answer": 1,
    "explanation": "Compressing the diffuse layer brings the counter-ions closer to the surface, which raises the capacitance."
  },
  {
    "id": "l1-mcq-014",
    "topicId": "mass-transport",
    "quick": true,
    "question": "The Nernst-Planck equation combines flux contributions from",
    "options": [
      "diffusion and convection only",
      "diffusion, migration and convection",
      "diffusion and migration only",
      "convection and migration only"
    ],
    "answer": 1,
    "explanation": "All three operate simultaneously; the equation sums them and lets you decide which to neglect."
  },
  {
    "id": "l1-mcq-015",
    "topicId": "mass-transport",
    "question": "Brownian motion is best described as",
    "options": [
      "bulk flow driven by density differences",
      "random molecular jitter, which is diffusion",
      "forced flow from a rotating electrode",
      "ion migration in an electric field"
    ],
    "answer": 1,
    "explanation": "Brownian motion is diffusion at the molecular scale. Convection is flow of a whole volume of fluid."
  },
  {
    "id": "l1-mcq-016",
    "topicId": "mass-transport",
    "question": "Supporting electrolyte suppresses the migration term but not the diffusion term because",
    "options": [
      "migration depends on field strength while diffusion depends on concentration gradients",
      "diffusion requires supporting electrolyte",
      "migration is always zero in water",
      "diffusion is faster than migration"
    ],
    "answer": 1,
    "explanation": "With excess inert electrolyte the field is carried by the salt, so the analyte's own electric migration becomes negligible."
  },
  {
    "id": "l1-mcq-017",
    "topicId": "mass-transport",
    "question": "In an unstirred, steady-state cell the diffusion layer thickness scales as",
    "options": [
      "D / i",
      "sqrt(D) / sqrt(i)",
      "sqrt(D) * sqrt(i)",
      "i / sqrt(D)"
    ],
    "answer": 0,
    "explanation": "Fick's law with a linear profile gives delta = n F D C* / i, so it grows linearly with D and falls as 1 / i. Do not confuse this with the rotating-disk convection layer, where delta_H does go as D^(0.5) omega^(-0.5)."
  },
  {
    "id": "l1-mcq-018",
    "topicId": "mass-transport",
    "question": "The limiting current at an electrode occurs when",
    "options": [
      "the applied potential becomes very large",
      "reactants are consumed as fast as transport can supply them",
      "the double layer is fully charged",
      "the solution resistance dominates"
    ],
    "answer": 1,
    "explanation": "At the limiting current the surface concentration of reactant approaches zero and the concentration overpotential diverges."
  },
  {
    "id": "l1-mcq-019",
    "topicId": "mass-transport",
    "quick": true,
    "question": "At the limiting current, the concentration overpotential",
    "options": [
      "is zero",
      "is at its smallest",
      "tends to infinity",
      "equals the ohmic overpotential"
    ],
    "answer": 2,
    "explanation": "Reversing the Nernst form of the concentration overpotential, it involves a logarithm of C_bulk / C_surface, which diverges when the surface concentration goes to zero."
  },
  {
    "id": "l1-mcq-020",
    "topicId": "mass-transport",
    "question": "Levich analysis at a rotating disk electrode gives a limiting current density that scales as",
    "options": [
      "omega",
      "sqrt(omega)",
      "omega^(1/3)",
      "omega^(-1/2)"
    ],
    "answer": 1,
    "explanation": "i_L is proportional to omega^(1/2); equivalently the convection-layer thickness goes as omega^(-1/2)."
  },
  {
    "id": "l1-mcq-021",
    "topicId": "mass-transport",
    "question": "The Levich equation for the limiting current density does not contain",
    "options": [
      "the rotation rate",
      "the diffusion coefficient",
      "the electrode area",
      "the kinematic viscosity"
    ],
    "answer": 2,
    "explanation": "It is written for current density, so area is absent; the total current is I_L = i_L A."
  },
  {
    "id": "l1-mcq-022",
    "topicId": "mass-transport",
    "question": "A plot of limiting current against the square root of rotation rate should be",
    "options": [
      "a curve that saturates",
      "a straight line through the origin",
      "a horizontal line",
      "an S-shaped curve"
    ],
    "answer": 1,
    "explanation": "Since i_L is proportional to omega^(0.5), plotting i_L against sqrt(omega) gives a line whose gradient encodes the diffusion coefficient."
  },
  {
    "id": "l1-mcq-023",
    "topicId": "mass-transport",
    "quick": true,
    "question": "Why is a rotating disk electrode more useful than a stirred beaker for quantitative work?",
    "options": [
      "It makes the boundary-layer thickness reproducible and calculable",
      "It raises the temperature of the solution",
      "It removes the need for a reference electrode",
      "It prevents double-layer charging"
    ],
    "answer": 0,
    "explanation": "Reproducible, known hydrodynamics is what turns a limiting current into a diffusion coefficient."
  },
  {
    "id": "l1-mcq-024",
    "topicId": "polarisation",
    "quick": true,
    "question": "An ideally polarised electrode gives a",
    "options": [
      "horizontal polarisation curve",
      "straight line through the potential of zero current",
      "sigmoid curve",
      "square-wave response"
    ],
    "answer": 1,
    "explanation": "With only double-layer charging possible, the current is capacitive and E = E_pc + i / C_dl, which is linear."
  },
  {
    "id": "l1-mcq-025",
    "topicId": "polarisation",
    "question": "The potential of zero current is",
    "options": [
      "the same thing as a formal potential",
      "where a linear capacitive branch crosses i = 0",
      "the standard potential of the analyte couple",
      "always 0.000 V"
    ],
    "answer": 1,
    "explanation": "It is where the electrode carries no net charge and the double layer is unperturbed. It is not a thermodynamic potential."
  },
  {
    "id": "l1-mcq-026",
    "topicId": "polarisation",
    "quick": true,
    "question": "The flat plateau at the top of a polarisation curve is reached when",
    "options": [
      "the activation overpotential dominates",
      "mass transport controls the current",
      "ohmic loss controls the current",
      "the double layer is fully charged"
    ],
    "answer": 1,
    "explanation": "The plateau is the limiting current: the electrode is consuming reactant as fast as it can be delivered."
  },
  {
    "id": "l1-mcq-027",
    "topicId": "polarisation",
    "question": "In the low-current region of a polarisation curve, the steepest part of the curve reflects",
    "options": [
      "mass transport control",
      "activation control",
      "double-layer charging only",
      "ohmic control"
    ],
    "answer": 1,
    "explanation": "Close to the reversible potential the exponential kinetics make the curve very steep, which is the signature of activation control."
  },
  {
    "id": "l1-mcq-028",
    "topicId": "polarisation",
    "quick": true,
    "question": "At the reversible potential of a Butler-Volmer process, the net current is",
    "options": [
      "zero",
      "equal to the exchange current",
      "at its maximum",
      "negative"
    ],
    "answer": 0,
    "explanation": "The anodic and cathodic partial currents are equal and opposite, so the net current vanishes."
  },
  {
    "id": "l1-mcq-029",
    "topicId": "overpotentials",
    "quick": true,
    "question": "The ohmic overpotential scales with current as",
    "options": [
      "log i",
      "i",
      "sqrt(i)",
      "i squared"
    ],
    "answer": 1,
    "explanation": "It is a simple iR drop, so it is strictly linear in current. More voltage alone cannot fix it."
  },
  {
    "id": "l1-mcq-030",
    "topicId": "overpotentials",
    "question": "The activation overpotential scales with current as",
    "options": [
      "i",
      "log i",
      "1 / i",
      "constant"
    ],
    "answer": 1,
    "explanation": "Butler-Volmer kinetics give a Tafel relation, so eta_act grows with the logarithm of current."
  },
  {
    "id": "l1-mcq-031",
    "topicId": "overpotentials",
    "quick": true,
    "question": "If the ohmic overpotential dominates in an experiment, the most useful fix is to",
    "options": [
      "increase the applied voltage",
      "use a more active catalyst",
      "reduce the uncompensated resistance",
      "raise the temperature only"
    ],
    "answer": 2,
    "explanation": "A voltage increase adds more iR loss, and a catalyst does nothing for a resistive loss. Reduce R instead."
  },
  {
    "id": "l1-mcq-032",
    "topicId": "overpotentials",
    "question": "For a cathodic experiment, the total applied potential is",
    "options": [
      "E_rev + eta_act + eta_ohm + eta_conc",
      "E_rev - eta_act - eta_ohm - eta_conc",
      "E_rev + eta_ohm only",
      "E_rev, because the loss is at the counter electrode"
    ],
    "answer": 1,
    "explanation": "Driving a cathodic reaction requires going below the reversible potential, so all three losses are subtracted."
  },
  {
    "id": "l1-mcq-033",
    "topicId": "overpotentials",
    "quick": true,
    "question": "Which diagnostic identifies an ohmic contribution?",
    "options": [
      "the branch that follows Butler-Volmer kinetics",
      "a branch whose overpotential is linear in current",
      "a plateau at high current",
      "a slope that changes with pH"
    ],
    "answer": 1,
    "explanation": "Linearity in current is the signature of a resistive loss, which is why an iR correction is applied as a straight line."
  },
  {
    "id": "l1-mcq-034",
    "topicId": "nernst",
    "quick": true,
    "question": "The Nernst equation for a redox couple is",
    "options": [
      "E = E0 + (RT / nF) ln Q",
      "E = E0 - (RT / nF) ln Q",
      "E = E0 - (nF / RT) ln Q",
      "E = E0 + nF ln Q / RT"
    ],
    "answer": 1,
    "explanation": "E = E0 - (RT/nF) ln Q. A large reaction quotient, meaning products favoured, lowers the potential."
  },
  {
    "id": "l1-mcq-035",
    "topicId": "nernst",
    "question": "The standard electrode potential E0 is defined at",
    "options": [
      "any concentration",
      "unit activity of all species, at 25 C",
      "saturated conditions",
      "open circuit"
    ],
    "answer": 1,
    "explanation": "Standard means unit activity for every species. Real solutions need the Nernst correction."
  },
  {
    "id": "l1-mcq-036",
    "topicId": "nernst",
    "question": "The standard hydrogen electrode is assigned a potential of",
    "options": [
      "+0.241 V",
      "+0.197 V",
      "exactly 0.000 V",
      "-0.059 V"
    ],
    "answer": 2,
    "explanation": "It is defined as exactly zero, which is what makes every other potential relative."
  },
  {
    "id": "l1-mcq-037",
    "topicId": "nernst",
    "question": "At 25 C, the potential of a hydrogen electrode shifts by",
    "options": [
      "59.16 mV per pH unit, downwards as pH rises",
      "59.16 mV per pH unit, upwards as pH rises",
      "29.58 mV per pH unit",
      "no shift with pH"
    ],
    "answer": 0,
    "explanation": "Two protons and two electrons are involved, giving -0.0591 V per pH unit on the standard hydrogen scale."
  },
  {
    "id": "l1-mcq-038",
    "topicId": "nernst",
    "question": "The potential of a hydrogen electrode at pH 7 and 1 bar H2 is about",
    "options": [
      "-0.414 V vs SHE",
      "+0.414 V vs SHE",
      "-0.177 V vs SHE",
      "-0.828 V vs SHE"
    ],
    "answer": 0,
    "explanation": "Seven pH units at 59.16 mV each gives -0.414 V."
  },
  {
    "id": "l1-mcq-039",
    "topicId": "nernst",
    "quick": true,
    "question": "A potential of -0.30 V vs SHE converts to about",
    "options": [
      "-0.30 V vs RHE at any pH",
      "-0.716 V vs RHE at pH 7",
      "+0.114 V vs RHE at pH 7",
      "-0.30 V + 0.059 V vs RHE at pH 7"
    ],
    "answer": 1,
    "explanation": "E vs RHE = E vs SHE - 0.0591 x pH, so at pH 7 that is -0.30 - 0.414 = -0.714 V, about -0.716 V."
  },
  {
    "id": "l1-mcq-040",
    "topicId": "nernst",
    "question": "A saturated calomel electrode has a potential of about",
    "options": [
      "+0.197 V vs SHE",
      "+0.241 V vs SHE",
      "-0.241 V vs SHE",
      "0.000 V vs SHE"
    ],
    "answer": 1,
    "explanation": "SCE is +0.241 V vs SHE at 25 C. Ag/AgCl saturated is +0.197 V."
  },
  {
    "id": "l1-mcq-041",
    "topicId": "nernst",
    "question": "The standard cell potential is calculated as",
    "options": [
      "E0(cathode) - E0(anode)",
      "E0(anode) - E0(cathode)",
      "E0(cathode) + E0(anode)",
      "the average of the two potentials"
    ],
    "answer": 0,
    "explanation": "Both are written as reductions and then subtracted, which automatically reverses the anode."
  },
  {
    "id": "l1-mcq-042",
    "topicId": "nernst",
    "question": "The free-energy change of a cell reaction is",
    "options": [
      "-n F E",
      "-n F E0 only at equilibrium",
      "+n F E",
      "-E / n F"
    ],
    "answer": 0,
    "explanation": "Delta G = -n F E. A positive cell potential means a negative free energy change, so the reaction is spontaneous."
  },
  {
    "id": "l1-mcq-043",
    "topicId": "nernst",
    "quick": true,
    "question": "For the couple Cu2+ + 2e- -> Cu, the reaction quotient is",
    "options": [
      "[Cu2+]",
      "1 / [Cu2+]",
      "[Cu]",
      "1"
    ],
    "answer": 1,
    "explanation": "Products over reactants gives Q = a(Cu) / a(Cu2+) = 1 / [Cu2+] for the pure solid."
  },
  {
    "id": "l1-mcq-044",
    "topicId": "kinetics",
    "quick": true,
    "question": "The Tafel equation is",
    "options": [
      "eta = a + b log i",
      "i = a + b log eta",
      "eta = a / b log i",
      "i = exp(a eta)"
    ],
    "answer": 0,
    "explanation": "In the high-current region the overpotential is linear in the logarithm of current density."
  },
  {
    "id": "l1-mcq-045",
    "topicId": "kinetics",
    "question": "The Tafel slope for a simple one-electron transfer with alpha = 0.5 at 25 C is about",
    "options": [
      "29.6 mV per decade",
      "59.2 mV per decade",
      "118 mV per decade",
      "236 mV per decade"
    ],
    "answer": 2,
    "explanation": "b = 2.303 RT / (alpha n F) = 59.16 / (0.5 x 1) = 118 mV per decade."
  },
  {
    "id": "l1-mcq-046",
    "topicId": "kinetics",
    "question": "A measured Tafel slope of 120 mV per decade implies",
    "options": [
      "alpha n = 0.49",
      "alpha n = 0.99",
      "alpha n = 1.97",
      "alpha n = 2.5"
    ],
    "answer": 0,
    "explanation": "alpha n = 59.16 / b = 59.16 / 120 = 0.49, close to the one-electron transfer with alpha = 0.5."
  },
  {
    "id": "l1-mcq-047",
    "topicId": "kinetics",
    "question": "A measured Tafel slope of 30 mV per decade implies",
    "options": [
      "alpha n = 0.49",
      "alpha n = 0.99",
      "alpha n = 1.97",
      "alpha n = 2.5"
    ],
    "answer": 2,
    "explanation": "alpha n = 59.16 / 30 = 1.97. This cannot come from a single electron transfer; it signals a chemical step in the mechanism."
  },
  {
    "id": "l1-mcq-048",
    "topicId": "kinetics",
    "question": "The valid linear Tafel region is roughly",
    "options": [
      "|eta| > 3 b",
      "|eta| < 0.2 b",
      "|eta| between b and 2 b",
      "any part of the curve"
    ],
    "answer": 0,
    "explanation": "Below about two to three slopes the exponential curvature from the reverse reaction still distorts the line."
  },
  {
    "id": "l1-mcq-049",
    "topicId": "kinetics",
    "question": "Increasing the exchange current density at fixed overpotential will",
    "options": [
      "increase the current",
      "decrease the current",
      "leave the current unchanged",
      "increase the Tafel slope"
    ],
    "answer": 0,
    "explanation": "For the same eta, a larger i0 delivers more current. The Tafel slope is set by alpha and n and does not change."
  },
  {
    "id": "l1-mcq-050",
    "topicId": "kinetics",
    "quick": true,
    "question": "Re-expressing a measured potential from vs SHE to vs RHE at fixed pH changes",
    "options": [
      "the potential by a constant offset",
      "the Tafel slope",
      "the overpotential sign",
      "nothing at all"
    ],
    "answer": 0,
    "explanation": "The conversion is a constant shift, -0.0591 x pH, so differences and therefore slopes are untouched."
  },
  {
    "id": "l1-mcq-051",
    "topicId": "kinetics",
    "question": "Butler-Volmer kinetics is valid in",
    "options": [
      "any regime",
      "the quasi-equilibrium regime near the reversible potential",
      "only the Tafel region",
      "only the mass-transport region"
    ],
    "answer": 1,
    "explanation": "It assumes the electron transfer is at quasi-equilibrium, which is why it breaks down far from equilibrium."
  },
  {
    "id": "l1-mcq-052",
    "topicId": "kinetics",
    "question": "A catalyst with a smaller Tafel slope is",
    "options": [
      "less active",
      "more active at reaching a given current",
      "unchanged but noisier",
      "more active only at low current"
    ],
    "answer": 1,
    "explanation": "A smaller slope means less overpotential is needed per decade of current, which is the definition of better kinetics."
  },
  {
    "id": "l1-mcq-053",
    "topicId": "kinetics",
    "question": "The intercept of a Tafel plot, read as an overpotential at i = i0, is",
    "options": [
      "zero by definition",
      "the reversible potential",
      "the formal potential",
      "the limiting potential"
    ],
    "answer": 0,
    "explanation": "The Tafel line passes through eta = 0 at i = i0, so reading the intercept on the current axis gives the exchange current."
  },
  {
    "id": "l1-mcq-054",
    "topicId": "kinetics",
    "question": "The exchange current density is best described as",
    "options": [
      "the current at the limiting current",
      "the current that would flow with no net driving force",
      "the double-layer charging current",
      "the diffusion-limited current"
    ],
    "answer": 1,
    "explanation": "It is the magnitude of both partial currents at the reversible potential, where they cancel."
  },
  {
    "id": "l1-mcq-055",
    "topicId": "kinetics",
    "quick": true,
    "question": "The transfer coefficient alpha is best described as",
    "options": [
      "the fraction of the electrode surface that is active",
      "the fraction of the overpotential that speeds the forward reaction",
      "the efficiency of the electron transfer",
      "the ratio of surface area to geometric area"
    ],
    "answer": 1,
    "explanation": "It lies between 0 and 1 and describes how the applied overpotential divides between forward and reverse reactions."
  },
  {
    "id": "l1-mcq-056",
    "topicId": "her",
    "quick": true,
    "question": "The overall hydrogen evolution reaction in acid is",
    "options": [
      "2H+ + 2e- -> H2",
      "2H2O + 2e- -> H2 + 2OH-",
      "H2O -> H2 + 1/2 O2",
      "2H+ -> H2 without electrons"
    ],
    "answer": 0,
    "explanation": "In acid the proton source is the proton, giving 2H+ + 2e- -> H2."
  },
  {
    "id": "l1-mcq-057",
    "topicId": "her",
    "question": "A cathodic Tafel slope near 120 mV per decade for HER in acid indicates that the rate-determining step is",
    "options": [
      "the Volmer electron transfer",
      "the Tafel recombination",
      "the Heyrovsky step",
      "hydrogen desorption from solution"
    ],
    "answer": 0,
    "explanation": "Roughly 120 mV per decade is the classic signature of a rate-limiting Volmer step, with alpha near 0.5."
  },
  {
    "id": "l1-mcq-058",
    "topicId": "her",
    "question": "A cathodic Tafel slope near 40 mV per decade for HER indicates the rate-determining step is",
    "options": [
      "Volmer",
      "Tafel recombination",
      "Heyrovsky",
      "water dissociation only"
    ],
    "answer": 2,
    "explanation": "Electrochemical desorption (Heyrovsky) as the slow step gives about 40 mV per decade, implying alpha n near 1.5."
  },
  {
    "id": "l1-mcq-059",
    "topicId": "her",
    "question": "A cathodic Tafel slope near 60 mV per decade for HER indicates the rate-determining step is",
    "options": [
      "Volmer",
      "Tafel recombination",
      "Heyrovsky",
      "hydrogen desorption from solution"
    ],
    "answer": 1,
    "explanation": "Chemical recombination of two adsorbed hydrogen atoms as the slow step gives about 60 mV per decade."
  },
  {
    "id": "l1-mcq-060",
    "topicId": "her",
    "quick": true,
    "question": "In the Volmer-Heyrovsky mechanism hydrogen leaves the surface by",
    "options": [
      "chemical recombination of two adsorbed atoms",
      "electrochemical desorption with a proton and an electron",
      "diffusion into the bulk",
      "evaporation of hydronium"
    ],
    "answer": 1,
    "explanation": "Heyrovsky is electrochemical desorption: an adsorbed H takes a proton and an electron and leaves as H2."
  },
  {
    "id": "l1-mcq-061",
    "topicId": "her",
    "question": "In the Volmer-Tafel mechanism hydrogen leaves the surface by",
    "options": [
      "electrochemical desorption",
      "chemical recombination of two adsorbed atoms",
      "proton hopping in solution",
      "direct oxidation of hydronium"
    ],
    "answer": 1,
    "explanation": "Tafel is purely chemical: two adsorbed H atoms recombine and desorb, with no further electron transfer."
  },
  {
    "id": "l1-mcq-062",
    "topicId": "her",
    "question": "Why does water make the first step of HER more expensive than it is in acid?",
    "options": [
      "water must be split to provide the proton, which costs desolvation energy",
      "water is a better conductor than protons",
      "hydrogen does not dissolve in water",
      "the Tafel slope must increase with pH"
    ],
    "answer": 0,
    "explanation": "In water the proton arrives as hydronium and must be partially desolvated, which is energetically costly."
  },
  {
    "id": "l1-mcq-063",
    "topicId": "her",
    "quick": true,
    "question": "On the potential axis, driving HER requires",
    "options": [
      "a positive overpotential",
      "a negative overpotential",
      "zero overpotential",
      "any overpotential, since it is spontaneous"
    ],
    "answer": 1,
    "explanation": "HER is a reduction, so it is cathodic and needs eta below zero."
  },
  {
    "id": "l1-mcq-064",
    "topicId": "corrosion",
    "quick": true,
    "question": "In an electrochemical corrosion cell, the anode is",
    "options": [
      "where oxygen is reduced",
      "where the metal dissolves",
      "where hydrogen evolves",
      "the largest surface"
    ],
    "answer": 1,
    "explanation": "Corrosion is oxidation of the metal, so it happens at the anodic sites."
  },
  {
    "id": "l1-mcq-065",
    "topicId": "corrosion",
    "question": "For a metal partly submerged in water, oxygen reduction occurs mainly",
    "options": [
      "underground",
      "at the waterline",
      "in the middle of the surface",
      "only in the crevice"
    ],
    "answer": 1,
    "explanation": "Oxygen diffuses through the surface film most easily where the film is wetted, so the waterline becomes the cathode."
  },
  {
    "id": "l1-mcq-066",
    "topicId": "corrosion",
    "quick": true,
    "question": "A more negative standard potential means the metal is",
    "options": [
      "less likely to oxidise",
      "more likely to oxidise",
      "unreactive",
      "more noble"
    ],
    "answer": 1,
    "explanation": "The more negative E0, the stronger the driving force for oxidation, so the metal is more active and more anodic."
  },
  {
    "id": "l1-mcq-067",
    "topicId": "corrosion",
    "question": "In a differential aeration cell, the oxygen-poor region acts as",
    "options": [
      "the anode",
      "the cathode",
      "the neutral zone",
      "the insulating zone"
    ],
    "answer": 0,
    "explanation": "Where oxygen is scarce the cathodic reaction cannot proceed, so the area becomes anodic and corrodes."
  },
  {
    "id": "l1-mcq-068",
    "topicId": "corrosion",
    "quick": true,
    "question": "Which is the correct order of increasingly noble metals?",
    "options": [
      "Zn < Fe < Ni < Cu < Ag",
      "Ag < Cu < Ni < Fe < Zn",
      "Fe < Zn < Cu < Ag < Ni",
      "Cu < Ag < Zn < Fe < Ni"
    ],
    "answer": 0,
    "explanation": "The order of increasing standard potential, and so of nobility, follows Zn, Fe, Ni, Cu, Ag."
  },
  {
    "id": "l1-mcq-069",
    "topicId": "electrolysis",
    "quick": true,
    "question": "In electroplating, the object being coated is made the",
    "options": [
      "anode",
      "cathode",
      "reference electrode",
      "counter electrode"
    ],
    "answer": 1,
    "explanation": "Metal is deposited by reduction at the cathode, so the workpiece is the cathode."
  },
  {
    "id": "l1-mcq-070",
    "topicId": "electrolysis",
    "question": "The mass of metal deposited by a constant current is proportional to",
    "options": [
      "I / t",
      "I t",
      "t / I",
      "log I"
    ],
    "answer": 1,
    "explanation": "Faraday's law gives mass proportional to Q = I t, divided by n F."
  },
  {
    "id": "l1-mcq-071",
    "topicId": "electrolysis",
    "question": "One Faraday, 96485 C, corresponds to how much energy per mole of electrons at 25 C",
    "options": [
      "about 96.5 kJ",
      "about 9.65 kJ",
      "about 965 kJ",
      "about 1 J"
    ],
    "answer": 0,
    "explanation": "F x 1 V is 96.485 kJ per mole of electrons, which is why electrolysis is energy-intensive."
  },
  {
    "id": "l1-mcq-072",
    "topicId": "electrolysis",
    "quick": true,
    "question": "Electrolysis of molten alumina produces aluminium at the",
    "options": [
      "anode, as oxygen",
      "cathode, as liquid aluminium",
      "cathode, as aluminium oxide",
      "anode, as aluminium"
    ],
    "answer": 1,
    "explanation": "Al3+ is reduced at the cathode to liquid metal; the anode produces oxygen."
  },
  {
    "id": "l1-mcq-073",
    "topicId": "electrolysis",
    "question": "The oxygen evolved at an anode in molten-alumina electrolysis reacts with the carbon anode to give",
    "options": [
      "carbon dioxide",
      "carbon monoxide only",
      "pure oxygen",
      "graphite"
    ],
    "answer": 0,
    "explanation": "Carbon is oxidised to CO2, which is why carbon anodes burn away and must be replaced."
  },
  {
    "id": "l1-mcq-074",
    "topicId": "electrolysis",
    "quick": true,
    "question": "The theoretical decomposition voltage of a cell is",
    "options": [
      "minus the cell potential from the thermodynamics",
      "the current that flows at open circuit",
      "the sum of all overpotentials",
      "always 2 volts"
    ],
    "answer": 0,
    "explanation": "The minimum voltage needed equals minus the cell potential, so any real cell needs extra to cover losses."
  },
  {
    "id": "l1-mcq-075",
    "topicId": "batteries",
    "quick": true,
    "question": "In a lithium-ion cell during discharge, the negative electrode is",
    "options": [
      "graphite releasing lithium",
      "lithium metal plating",
      "the cathode material",
      "the separator"
    ],
    "answer": 0,
    "explanation": "Lithium ions leave the graphite anode and travel to the cathode, so the anode is the graphite host."
  },
  {
    "id": "l1-mcq-076",
    "topicId": "batteries",
    "question": "During charging of a lithium-ion cell, lithium ions move",
    "options": [
      "from cathode to anode",
      "from anode to cathode",
      "from the electrolyte to the cathode only",
      "from the separator to the anode"
    ],
    "answer": 0,
    "explanation": "Charging reverses the discharge direction and returns lithium to the graphite host."
  },
  {
    "id": "l1-mcq-077",
    "topicId": "batteries",
    "question": "A hydrogen-oxygen fuel cell delivers electrical work by",
    "options": [
      "burning hydrogen in air",
      "reversing water electrolysis",
      "reducing nitrogen from air",
      "oxidising graphite"
    ],
    "answer": 1,
    "explanation": "The fuel cell runs the electrolysis reaction in reverse, so it is a galvanic cell with gases at both electrodes."
  },
  {
    "id": "l1-mcq-078",
    "topicId": "batteries",
    "quick": true,
    "question": "Coulombic efficiency is defined as",
    "options": [
      "useful output energy divided by input energy",
      "discharge capacity divided by charge capacity",
      "the fraction of current that is Faradaic",
      "the ratio of active to geometric area"
    ],
    "answer": 1,
    "explanation": "It compares the capacity taken out with the capacity put in, so it measures reversibility."
  },
  {
    "id": "l1-mcq-079",
    "topicId": "batteries",
    "question": "A double-layer capacitor is charged by",
    "options": [
      "a Faradaic reaction",
      "separating charge across the interface",
      "a redox reaction in the bulk",
      "moving ions into the electrode"
    ],
    "answer": 0,
    "explanation": "Storing energy by separating charge at the interface is non-Faradaic, so it charges much faster than a battery."
  },
  {
    "id": "l1-mcq-080",
    "topicId": "batteries",
    "quick": true,
    "question": "Energy density is highest for",
    "options": [
      "a supercapacitor",
      "a lead-acid battery",
      "a lithium-ion battery",
      "a copper wire"
    ],
    "answer": 2,
    "explanation": "Faradaic bulk reactions store far more energy per unit mass or volume than surface charge separation."
  }
];
