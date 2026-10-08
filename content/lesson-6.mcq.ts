// Lesson 6 - The electrical double layer: question bank.
//
// Source syllabus: Bagotsky ch.10 and Bard & Faulkner ch.13. Every question
// is original; none is taken from a textbook exercise. Four questions per
// section, the first three flagged as quick checks.

import type { Mcq } from "./types";

export const lesson6Mcq: Mcq[] = [
  // ------------------------------------------------------------- interphase
  {
    id: "l6-mcq-001",
    topicId: "interphase",
    quick: true,
    question:
      "Taken as a whole, the interphase between an electrode and an electrolyte is:",
    options: [
      "Positively charged",
      "Negatively charged",
      "Electroneutral, though charge is separated across it",
      "Uncharged on the metal side only",
    ],
    answer: 2,
    explanation:
      "The interphase carries no net charge, but that neutrality is the sum of two equal and opposite surface charges: a metal surface charge σ_M and a solution-side charge σ_S with σ_M + σ_S = 0.",
  },
  {
    id: "l6-mcq-002",
    topicId: "interphase",
    quick: true,
    question:
      "Why does the double layer produce electric fields of order 10^9 V/m?",
    options: [
      "Because the electrode carries an enormous total charge",
      "Because the separated charges are only a few tenths of a nanometre apart",
      "Because the solution has a very low dielectric constant throughout",
      "Because the current through the cell is large",
    ],
    answer: 1,
    explanation:
      "Field strength is roughly the potential difference divided by the separation. With about a volt dropped across a few tenths of a nanometre, the field reaches 10^9 V/m - comparable to the fields holding atoms together.",
  },
  {
    id: "l6-mcq-003",
    topicId: "interphase",
    quick: true,
    question:
      "Which of these belongs to the group of surface effects confined to a single phase rather than to the true interfacial double layer?",
    options: [
      "The layer of counter-ions in solution",
      "The excess electron charge on the metal",
      "The orientation of polar solvent dipoles at the surface",
      "The diffuse part of the ionic cloud",
    ],
    answer: 2,
    explanation:
      "Oriented solvent dipoles produce a surface potential confined to the solution phase. The true interfacial double layer is shared between the metal surface charge and the ionic charge in solution.",
  },
  {
    id: "l6-mcq-004",
    topicId: "interphase",
    question:
      "Electrochemists care about the interphase mainly because:",
    options: [
      "It stores a large amount of energy for its thickness",
      "It is where the electrode potential is actually dropped, so it sets the driving force seen by reactants",
      "It prevents current from flowing",
      "It has a fixed composition independent of potential",
    ],
    answer: 1,
    explanation:
      "The potential driving an electrode reaction is not the bulk solution potential but the potential at the reaction site in the double layer. This is why the structure of the interphase directly controls electrode kinetics.",
  },

  // ------------------------------------------------------- helmholtz-model
  {
    id: "l6-mcq-005",
    topicId: "helmholtz-model",
    quick: true,
    question:
      "In the Helmholtz model the solution side of the double layer is pictured as:",
    options: [
      "A diffuse cloud of ions decaying into the bulk",
      "A rigid sheet of counter-charge at a fixed distance from the metal",
      "A layer of neutral solvent molecules only",
      "Two sheets of charge of the same sign",
    ],
    answer: 1,
    explanation:
      "Helmholtz treated both charges as sheets pressed against the interface, so the double layer is equivalent to a parallel-plate capacitor with plate separation d.",
  },
  {
    id: "l6-mcq-006",
    topicId: "helmholtz-model",
    quick: true,
    question:
      "The Helmholtz model predicts a differential capacitance given by:",
    options: [
      "C = ε ε0 / d, independent of potential",
      "C proportional to the square root of concentration",
      "C = κ^-1",
      "C proportional to cosh of the surface potential",
    ],
    answer: 0,
    explanation:
      "A parallel-plate capacitor has C = εε0/d. Because d and ε are treated as fixed, the model predicts a constant capacitance that does not vary with potential or electrolyte concentration.",
  },
  {
    id: "l6-mcq-007",
    topicId: "helmholtz-model",
    quick: true,
    question:
      "The decisive experimental failure of the Helmholtz model is that:",
    options: [
      "It predicts far too small a capacitance",
      "It predicts a constant capacitance, whereas real capacitance varies with potential and concentration",
      "It cannot explain why a field exists at all",
      "It requires ions to be neutral",
    ],
    answer: 1,
    explanation:
      "Real mercury electrodes show a U-shaped capacitance that depends on potential and on concentration. The Helmholtz picture, with its fixed geometry, cannot reproduce either dependence.",
  },
  {
    id: "l6-mcq-008",
    topicId: "helmholtz-model",
    question:
      "Why is the dielectric constant in the compact layer taken to be much lower than in bulk water?",
    options: [
      "Because the layer contains no water at all",
      "Because water dipoles are strongly aligned by the enormous field, so they can no longer respond freely",
      "Because the dielectric constant of water falls as temperature rises",
      "Because the solution is concentrated",
    ],
    answer: 1,
    explanation:
      "In the huge interfacial field the water dipoles are wrenched into alignment, reducing their ability to screen charge. The effective dielectric constant near the surface is more like 6 than the bulk value of about 78.",
  },

  // --------------------------------------------------------- diffuse-layer
  {
    id: "l6-mcq-009",
    topicId: "diffuse-layer",
    quick: true,
    question: "The diffuse layer forms because:",
    options: [
      "Ions are fixed rigidly at the electrode surface",
      "Electrostatic attraction competes with thermal motion, spreading the counter-charge over a finite thickness",
      "The electrode is uncharged",
      "Solvent molecules are immobile",
    ],
    answer: 1,
    explanation:
      "The Gouy-Chapman picture balances the electrode's pull on the counter-ions against their thermal tendency to wander. The result is a cloud whose concentration decays away from the surface.",
  },
  {
    id: "l6-mcq-010",
    topicId: "diffuse-layer",
    quick: true,
    question:
      "As the electrolyte concentration of a 1:1 solution increases, the Debye length:",
    options: [
      "Increases in proportion to concentration",
      "Stays constant",
      "Decreases, from about 10 nm at 1 mM to about 1 nm at 0.1 M",
      "Becomes negative",
    ],
    answer: 2,
    explanation:
      "The Debye length scales as 1/sqrt(concentration). More ions means more screening, so the diffuse layer is compressed: roughly 10 nm at 1 mM and 1 nm at 0.1 M.",
  },
  {
    id: "l6-mcq-011",
    topicId: "diffuse-layer",
    quick: true,
    question:
      "For small surface potentials, the potential in the diffuse layer decays:",
    options: [
      "Linearly with distance",
      "Exponentially with distance, with decay length κ^-1",
      "As the square of distance",
      "It does not decay",
    ],
    answer: 1,
    explanation:
      "When the surface potential is below about 50/z mV, the exact solution linearises to φ = φ0 e^(-κx). The characteristic distance 1/κ is the Debye length.",
  },
  {
    id: "l6-mcq-012",
    topicId: "diffuse-layer",
    question:
      "The Gouy-Chapman diffuse-layer capacitance behaves as:",
    options: [
      "A constant, independent of potential",
      "A cosh function of surface potential, with a minimum at the point of zero charge",
      "A linear function of surface potential",
      "Zero at all potentials away from the PZC",
    ],
    answer: 1,
    explanation:
      "Differentiating the sinh charge-potential relation gives a capacitance proportional to cosh. It is smallest where the surface potential is zero, producing the V-shaped minimum at the PZC.",
  },

  // -------------------------------------------------- gouy-chapman-stern
  {
    id: "l6-mcq-013",
    topicId: "gouy-chapman-stern",
    quick: true,
    question:
      "What defect of the Gouy-Chapman theory did Stern's modification fix?",
    options: [
      "It ignored the electrode charge",
      "It treated ions as point charges able to approach the surface arbitrarily closely, giving unlimited capacitance",
      "It predicted capacitance independent of concentration",
      "It omitted the diffuse layer",
    ],
    answer: 1,
    explanation:
      "Real ions have finite size and, if solvated, a solvation sheath as well. Forbidding them from coming nearer than a plane of closest approach removes the unphysical unlimited rise in capacitance.",
  },
  {
    id: "l6-mcq-014",
    topicId: "gouy-chapman-stern",
    quick: true,
    question:
      "In the Gouy-Chapman-Stern model the compact and diffuse parts behave as:",
    options: [
      "Two capacitors in parallel",
      "Two capacitors in series: 1/C = 1/C_H + 1/C_d",
      "A single constant capacitor",
      "A resistor and a capacitor",
    ],
    answer: 1,
    explanation:
      "The total potential drop is shared between the compact and diffuse layers, so their capacitances add as reciprocals, exactly as for two capacitors in series. The total is always below the smaller component.",
  },
  {
    id: "l6-mcq-015",
    topicId: "gouy-chapman-stern",
    quick: true,
    question:
      "At high electrolyte concentration, or far from the point of zero charge, the measured capacitance tends toward:",
    options: [
      "Zero",
      "The constant compact-layer capacitance C_H",
      "The V-shaped diffuse-layer capacitance",
      "Negative values",
    ],
    answer: 1,
    explanation:
      "Under these conditions the diffuse layer is compressed and C_d becomes large, so 1/C_d is small and the series capacitance is dominated by the constant C_H. The curve flattens accordingly.",
  },
  {
    id: "l6-mcq-016",
    topicId: "gouy-chapman-stern",
    question:
      "Within the compact layer between the electrode and the outer Helmholtz plane, the potential varies:",
    options: [
      "Exponentially",
      "Linearly with distance",
      "As the square root of distance",
      "Not at all",
    ],
    answer: 1,
    explanation:
      "There is no charge in the compact layer, so Poisson's equation makes the potential linear there - the parallel-plate behaviour. The curvature and exponential decay begin beyond the OHP.",
  },

  // ----------------------------------------------------- specific-adsorption
  {
    id: "l6-mcq-017",
    topicId: "specific-adsorption",
    quick: true,
    question: "Specific adsorption of an ion means that the ion:",
    options: [
      "Is held only by long-range electrostatic forces at the OHP",
      "Loses part of its solvation sheath and contacts the surface chemically, sitting at the inner Helmholtz plane",
      "Is repelled from the surface",
      "Neutralises the electrode completely",
    ],
    answer: 1,
    explanation:
      "Specific adsorption is chemisorption. The ion is partly dehydrated, loses mobility and its centre lies closer to the metal than the OHP - at the inner Helmholtz plane.",
  },
  {
    id: "l6-mcq-018",
    topicId: "specific-adsorption",
    quick: true,
    question:
      "Which anion adsorbs most strongly at a mercury electrode in aqueous solution?",
    options: ["Fluoride", "Chloride", "Iodide", "Hydroxide"],
    answer: 2,
    explanation:
      "Specific adsorption strengthens with size and polarisability and weakens with strong solvation. Iodide is large and weakly hydrated, so it adsorbs strongly; fluoride is so well hydrated that it adsorbs almost not at all.",
  },
  {
    id: "l6-mcq-019",
    topicId: "specific-adsorption",
    quick: true,
    question:
      "A clear experimental signature of specific anion adsorption is that it:",
    options: [
      "Shifts the point of zero charge to more positive potentials",
      "Shifts the point of zero charge to more negative potentials and raises the positive-side capacitance",
      "Removes the electrocapillary maximum",
      "Makes the electrode ideally polarisable",
    ],
    answer: 1,
    explanation:
      "Adsorbed anions bring negative charge to the surface, so the electrode must be made more negative to be neutral, shifting the PZC negative. The extra charge also raises the capacitance on the positive side.",
  },
  {
    id: "l6-mcq-020",
    topicId: "specific-adsorption",
    question:
      "In the super-equivalent case of specific adsorption:",
    options: [
      "The specifically adsorbed charge is much smaller than the metal charge",
      "The specifically adsorbed charge exceeds the metal charge, so the potential can change sign inside the compact layer",
      "No diffuse layer exists",
      "The electrode becomes uncharged at all potentials",
    ],
    answer: 1,
    explanation:
      "When the charge at the inner Helmholtz plane is larger in magnitude than the metal charge, the potential passes through zero within the compact layer and the diffuse layer must hold charge of the same sign as the electrode.",
  },

  // ------------------------------------------------- surface-thermodynamics
  {
    id: "l6-mcq-021",
    topicId: "surface-thermodynamics",
    quick: true,
    question: "The Gibbs adsorption isotherm states that:",
    options: [
      "Surface tension is independent of adsorption",
      "Surface tension falls by the sum of surface excess times chemical potential change: dγ = -Σ Γ_i dμ_i",
      "Charge equals surface tension",
      "Surface excess is always positive",
    ],
    answer: 1,
    explanation:
      "A species that accumulates at the surface lowers the surface tension; one that is depleted raises it. The isotherm is a thermodynamic result holding for any interface, independent of any structural model.",
  },
  {
    id: "l6-mcq-022",
    topicId: "surface-thermodynamics",
    quick: true,
    question:
      "The electrocapillary equation, differentiated with respect to potential, gives:",
    options: [
      "The concentration of the electrolyte",
      "The electrode charge as minus the slope of the surface tension curve",
      "The diffusion coefficient",
      "The transfer coefficient",
    ],
    answer: 1,
    explanation:
      "This is Lippmann's result: σ_M = -(∂γ/∂E). The slope of the electrocapillary curve gives the surface charge, and its second derivative gives the differential capacitance.",
  },
  {
    id: "l6-mcq-023",
    topicId: "surface-thermodynamics",
    quick: true,
    question: "The maximum of an electrocapillary curve corresponds to:",
    options: [
      "The potential of maximum current",
      "The point of zero charge, where the surface charge is zero",
      "The standard hydrogen electrode potential",
      "The onset of hydrogen evolution",
    ],
    answer: 1,
    explanation:
      "At the maximum the slope is zero, so the charge is zero. That potential is the point of zero charge; the electrode is positive at more positive potentials and negative at more negative ones.",
  },
  {
    id: "l6-mcq-024",
    topicId: "surface-thermodynamics",
    question:
      "Why do electrochemists usually quote surface excesses relative to the solvent rather than as absolute values?",
    options: [
      "Because the solvent never adsorbs",
      "Because absolute surface excesses are not independently measurable, so only excesses relative to water can be determined",
      "Because water has no chemical potential",
      "Because surface tension is undefined for solvents",
    ],
    answer: 1,
    explanation:
      "Gibbs-Duhem links the chemical potentials of all components, so their surface excesses are not independent. Choosing the solvent (water) as the reference removes that ambiguity and gives measurable relative excesses.",
  },

  // --------------------------------------------------- adsorption-isotherms
  {
    id: "l6-mcq-025",
    topicId: "adsorption-isotherms",
    quick: true,
    question: "Which set of assumptions defines the Langmuir isotherm?",
    options: [
      "Strong interactions between neighbours and a heterogeneous surface",
      "Independent identical sites, no interactions between adsorbates, and a single saturated monolayer",
      "Multilayer adsorption with no saturation",
      "Coverage independent of concentration",
    ],
    answer: 1,
    explanation:
      "Langmuir assumes a fixed number of equivalent sites, at most one particle per site, and no interaction between neighbours. Adsorption and desorption then compete only for free sites.",
  },
  {
    id: "l6-mcq-026",
    topicId: "adsorption-isotherms",
    quick: true,
    question:
      "The Langmuir isotherm written in terms of fractional coverage θ is:",
    options: [
      "θ = βc",
      "θ = βc / (1 + βc)",
      "θ = (1/RT) ln(βc)",
      "θ = exp(-2gθ) βc",
    ],
    answer: 1,
    explanation:
      "Coverage rises linearly at low concentration and saturates at θ = 1 as sites fill. The form θ = βc/(1 + βc) is the defining relation of the Langmuir model.",
  },
  {
    id: "l6-mcq-027",
    topicId: "adsorption-isotherms",
    quick: true,
    question:
      "The Temkin isotherm is preferred when the surface is heterogeneous or interactions are strong; it predicts that:",
    options: [
      "Coverage is linear in concentration at all concentrations",
      "Coverage is linear in the logarithm of concentration over intermediate coverage (roughly 0.2 < θ < 0.8)",
      "Coverage is always zero",
      "Coverage depends only on potential",
    ],
    answer: 1,
    explanation:
      "With the adsorption energy falling linearly with coverage, θ becomes proportional to ln(βc). The relation is applied over the intermediate coverage range where it fits best.",
  },
  {
    id: "l6-mcq-028",
    topicId: "adsorption-isotherms",
    question:
      "In the Frumkin isotherm, a positive interaction parameter g implies:",
    options: [
      "Repulsive interactions and a flattened isotherm",
      "Attractive interactions and an S-shaped isotherm; g = 0 recovers Langmuir",
      "No adsorption at all",
      "That the electrode is uncharged",
    ],
    answer: 1,
    explanation:
      "Positive g means neighbouring adsorbates attract, which sharpens the uptake into an S-shaped curve. As g tends to zero the interaction term vanishes and the Frumkin isotherm reduces to Langmuir.",
  },

  // --------------------------------------------------------- real-surfaces
  {
    id: "l6-mcq-029",
    topicId: "real-surfaces",
    quick: true,
    question: "An ideally polarisable electrode is one that:",
    options: [
      "Passes a very large faradaic current",
      "Passes no faradaic current over a potential window, so its response is purely double-layer charging",
      "Has no double layer",
      "Cannot be polarised at all",
    ],
    answer: 1,
    explanation:
      "Over the ideal window no electrons cross the interface, so the measured current is entirely non-faradaic and the electrode behaves as a pure capacitor whose capacitance can be measured directly.",
  },
  {
    id: "l6-mcq-030",
    topicId: "real-surfaces",
    quick: true,
    question: "Which is NOT a reason mercury became the model electrode for double-layer studies?",
    options: [
      "A large hydrogen overpotential gives a wide usable potential window",
      "It is a liquid, so its surface is smooth and has no grain boundaries",
      "A dropping electrode continuously exposes a fresh surface",
      "It forms a stable, strongly adherent oxide layer",
    ],
    answer: 3,
    explanation:
      "Mercury does not build up a blocking oxide; that is precisely an advantage. Its high hydrogen overpotential, liquid surface, renewable drop and measurable surface tension are what made it the benchmark.",
  },
  {
    id: "l6-mcq-031",
    topicId: "real-surfaces",
    quick: true,
    question:
      "The differential capacitance of mercury passes through a minimum near its point of zero charge of roughly:",
    options: [
      "1 µF/cm²",
      "18 µF/cm²",
      "180 µF/cm²",
      "1800 µF/cm²",
    ],
    answer: 1,
    explanation:
      "Mercury's double-layer capacitance has a minimum of about 18 µF/cm² near the PZC in dilute fluoride solution, which deepens and sharpens as the electrolyte is diluted.",
  },
  {
    id: "l6-mcq-032",
    topicId: "real-surfaces",
    question:
      "Why does the Gouy-Chapman-Stern model become only a rough guide at a solid platinum electrode?",
    options: [
      "Because platinum does not conduct electricity",
      "Because the surface can oxidise, reconstruct, expose different crystal facets and be rough, so its constants are only effective values",
      "Because platinum has no double layer",
      "Because the Debye length is always zero at metals",
    ],
    answer: 1,
    explanation:
      "The same physics applies, but oxides, reconstruction, crystallographic faces and roughness mean the compact-layer thickness, dielectric behaviour and true area are not those of a clean liquid metal.",
  },

  // ---------------------------------------------------- capacitive-faradaic
  {
    id: "l6-mcq-033",
    topicId: "capacitive-faradaic",
    quick: true,
    question:
      "The current measured at an electrode is best described as:",
    options: [
      "Purely faradaic at all times",
      "The sum of a capacitive (non-faradaic) charging current and a faradaic reaction current",
      "Purely capacitive at all times",
      "Independent of the double layer",
    ],
    answer: 1,
    explanation:
      "Changing the potential charges the double layer even when no reaction occurs, and any electron transfer adds a faradaic component. Only the faradaic part corresponds to chemistry.",
  },
  {
    id: "l6-mcq-034",
    topicId: "capacitive-faradaic",
    quick: true,
    question:
      "During a linear potential sweep, the capacitive current is:",
    options: [
      "Proportional to the square root of the scan rate",
      "Proportional to the scan rate: i_c = C_dl v",
      "Independent of the scan rate",
      "Inversely proportional to the scan rate",
    ],
    answer: 1,
    explanation:
      "Charging a capacitor of capacitance C_dl while the potential changes at rate v requires current C_dl v. This is why faster scans suffer a larger charging background.",
  },
  {
    id: "l6-mcq-035",
    topicId: "capacitive-faradaic",
    quick: true,
    question:
      "After a potential step, how do the capacitive and faradaic currents compare in time?",
    options: [
      "Both decay as t^-1/2",
      "The capacitive current decays exponentially with time constant R_s C_dl, while the faradaic current decays more slowly as t^-1/2",
      "The capacitive current is constant and the faradaic current is zero",
      "Both are constant",
    ],
    answer: 1,
    explanation:
      "The double layer charges through the cell resistance, so the capacitive current falls as exp(-t/τ) with τ = R_s C_dl. The diffusion-controlled faradaic current dies away only as t^-1/2, so the two can be separated in time.",
  },
  {
    id: "l6-mcq-036",
    topicId: "capacitive-faradaic",
    question:
      "In chronocoulometry, a plot of charge against the square root of time gives a straight line whose intercept is:",
    options: [
      "The diffusion coefficient",
      "The charge used to charge the double layer",
      "The scan rate",
      "The transfer coefficient",
    ],
    answer: 1,
    explanation:
      "The intercept at time zero is the capacitive charge stored in the double layer, while the slope reflects the diffusion-controlled faradaic charge. One extrapolation therefore separates the two contributions.",
  },
];