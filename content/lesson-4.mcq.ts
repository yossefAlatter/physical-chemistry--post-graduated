import type { Mcq } from "./types";

/**
 * Question bank for Lesson 4 - Mass transfer and limiting currents.
 *
 * Written fresh for this site against Bagotsky ch.4 and Bard & Faulkner
 * ch.4; none of the questions is taken from any textbook's exercises. Each
 * section carries three quick-check questions and one extra for the full
 * bank.
 */
export const lesson4Mcq: Mcq[] = [
  // -------------------------------------------------------- fick-diffusion
  {
    id: "l4-mcq-001",
    topicId: "fick-diffusion",
    quick: true,
    question: "Fick's first law states that the diffusional flux is:",
    options: [
      "Proportional to the concentration itself",
      "Proportional to the gradient of the concentration",
      "Inversely proportional to the diffusion coefficient",
      "Independent of the concentration profile",
    ],
    answer: 1,
    explanation:
      "The flux J = D grad c scales with the concentration gradient; the diffusion coefficient D is the proportionality constant, not a reciprocal factor.",
  },
  {
    id: "l4-mcq-002",
    topicId: "fick-diffusion",
    quick: true,
    question: "The Nernst-Einstein relation connects the diffusion coefficient Dj to:",
    options: [
      "The transport number and the field strength",
      "The ionic mobility uj, temperature and charge",
      "The solution conductivity and the current density",
      "The diffusion-layer thickness",
    ],
    answer: 1,
    explanation:
      "Dj = uj · RT/(zj F): the same thermal agitation that lets an ion drift under a field makes it diffuse along a gradient, so mobility and diffusion coefficient are proportional at fixed temperature.",
  },
  {
    id: "l4-mcq-003",
    topicId: "fick-diffusion",
    quick: true,
    question: "In dilute aqueous solution, diffusion coefficients of most ions:",
    options: [
      "Exceed 10^-3 cm2/s",
      "Fall between about 0.6 and 2 x 10^-5 cm2/s",
      "Are identical for every ion",
      "Increase steeply with concentration",
    ],
    answer: 1,
    explanation:
      "Room-temperature values cluster around 10^-5 cm2/s (roughly 0.6-2 x 10^-5), and D actually decreases as concentration rises - a real-solution effect folded into a concentration-dependent coefficient.",
  },
  {
    id: "l4-mcq-004",
    topicId: "fick-diffusion",
    question: "Why do practising electrochemists usually keep Fick's law in its concentration-gradient form rather than the activity-gradient form?",
    options: [
      "Activities are exact, so the activity form is rarely needed",
      "The activity-based coefficient is no more constant, and the concentration form needs no activity coefficients",
      "Concentrations are harder to measure than activities",
      "Fick's law is only valid for uncharged species",
    ],
    answer: 1,
    explanation:
      "Using grad a_j keeps the physical honesty but buys no accuracy: the activity-based diffusion coefficient is equally nonconstant, and the concentration form requires no activity data at all, so equation J = D grad c stays the workhorse.",
  },

  // --------------------------------------------------------- diffusion-layer
  {
    id: "l4-mcq-005",
    topicId: "diffusion-layer",
    quick: true,
    question: "The diffusion layer is best described as the region where:",
    options: [
      "Transport occurs purely by convection",
      "Concentration changes are transported purely by diffusion",
      "The electric field is strongest",
      "No current flows",
    ],
    answer: 1,
    explanation:
      "In the film of thickness delta next to the electrode, concentration differs from the bulk and all transport is diffusional; outside it, convection keeps the concentration at the bulk value.",
  },
  {
    id: "l4-mcq-006",
    topicId: "diffusion-layer",
    quick: true,
    question: "The surface concentration c_S in the diffusion model is measured:",
    options: [
      "Exactly at the electrode surface inside the double layer",
      "About 1 nm from the surface - outside the double layer, inside the diffusion layer",
      "At the outer edge of the diffusion layer",
      "At the bulk solution",
    ],
    answer: 1,
    explanation:
      "The double layer distorts concentrations right at the metal, so c_S is read at a point small compared with delta yet beyond the double layer - conventionally about 1 nm out.",
  },
  {
    id: "l4-mcq-007",
    topicId: "diffusion-layer",
    quick: true,
    question: "For steady linear diffusion across a film, the current density is proportional to:",
    options: [
      "The diffusion coefficient alone",
      "The difference between bulk and surface concentration",
      "The square of the film thickness",
      "The surface concentration only",
    ],
    answer: 1,
    explanation:
      "i = (n/nu_j) F kappa_j (c_V - c_S) with kappa_j = D_j/delta: the current scales with the concentration difference c_V minus c_S across the film.",
  },
  {
    id: "l4-mcq-008",
    topicId: "diffusion-layer",
    question: "The diffusion-layer thickness delta is best regarded as:",
    options: [
      "A universal constant of water",
      "A property of the cell and its stirring, not of the solution alone",
      "Identical to the double-layer thickness",
      "Independent of flow conditions",
    ],
    answer: 1,
    explanation:
      "delta is the diffusion path length set by cell design and flow intensity. Its size is later traced to hydrodynamics - the key variable the next sections learn to control.",
  },

  // -------------------------------------------------------- limiting-current
  {
    id: "l4-mcq-009",
    topicId: "limiting-current",
    quick: true,
    question: "The limiting diffusion current is reached when:",
    options: [
      "The bulk concentration falls to zero",
      "The surface concentration of the reactant falls to zero",
      "The diffusion coefficient vanishes",
      "The solution reaches its boiling point",
    ],
    answer: 1,
    explanation:
      "At i = i_l the reactant's surface concentration c_S is zero, the gradient has reached its physical maximum c_V/delta, and no further diffusional delivery is possible.",
  },
  {
    id: "l4-mcq-010",
    topicId: "limiting-current",
    quick: true,
    question: "Which fact distinguishes limiting currents from behaviour seen in metal conductors?",
    options: [
      "Only in solution do currents have upper bounds set by transport",
      "Metal conductors also show limiting currents at high fields",
      "Limiting currents appear only at cryogenic temperatures",
      "Metal wires resist, so they never carry current",
    ],
    answer: 0,
    explanation:
      "A galvanic circuit has a ceiling because the electrode reaction consumes matter; a metal wire delivers electrons on demand with no mass transfer, so such a current limit has no analogue there.",
  },
  {
    id: "l4-mcq-011",
    topicId: "limiting-current",
    quick: true,
    question: "The 'key component' of a reaction is the species that:",
    options: [
      "Has the largest diffusion coefficient",
      "Reaches its limiting concentration first as current rises",
      "Is present at the highest bulk concentration",
      "Carries the largest charge",
    ],
    answer: 1,
    explanation:
      "Each reactant and product has its own limiting current; the one whose surface concentration saturates first - the key component - fixes the limiting current of the whole cell.",
  },
  {
    id: "l4-mcq-012",
    topicId: "limiting-current",
    question: "A limiting current caused by precipitation of a reaction product:",
    options: [
      "Is identical in value to the diffusion-limited current of the reactant",
      "Is less reproducible and may drift with time as the deposit screens the surface",
      "Is perfectly reproducible because deposits are uniform",
      "Cannot occur in aqueous solution",
    ],
    answer: 1,
    explanation:
      "Product-based limits arise when the solubility limit is reached; the precipitated material screens the electrode, and the value depends on the nature of the deposit, so it is less reproducible than the clean diffusion-limited ceiling.",
  },

  // ---------------------------------------------------------- nernst-planck
  {
    id: "l4-mcq-013",
    topicId: "nernst-planck",
    quick: true,
    question: "The Nernst-Planck equation for the total flux of an ion is:",
    options: [
      "J = D grad c alone",
      "J = c·u·E ± D·dc/dx, the sum of migration and diffusion",
      "J = v·c, the convective flux",
      "J = F·z·c·u, Ohm's law for ions",
    ],
    answer: 1,
    explanation:
      "Migration down the field (c·u·E) and diffusion down the gradient (D·dc/dx) combine with a sign reflecting whether they point the same way or against each other.",
  },
  {
    id: "l4-mcq-014",
    topicId: "nernst-planck",
    quick: true,
    question: "The electroneutrality constraint on the Nernst-Planck system means that:",
    options: [
      "All concentration gradients are independent",
      "The charge-weighted sum of concentration gradients is zero",
      "The solution must be stirred",
      "Only uncharged species can diffuse",
    ],
    answer: 1,
    explanation:
      "Electroneutrality ties the gradients: sum(z_j dc_j/dx) = 0. With N species this leaves N - 1 independent gradients and closes the N-equation system for the field and the profiles.",
  },
  {
    id: "l4-mcq-015",
    topicId: "nernst-planck",
    quick: true,
    question: "For an uncharged component, the Nernst-Planck equation:",
    options: [
      "Adds a new migrative term",
      "Reduces to Fick's first law",
      "Predicts a limiting current of zero",
      "Becomes the Levich equation",
    ],
    answer: 1,
    explanation:
      "With z_j = 0 the migration term c_j u_j E vanishes, leaving pure diffusional flux - Fick's law, exactly as for neutral molecules.",
  },
  {
    id: "l4-mcq-016",
    topicId: "nernst-planck",
    question: "Why is the closure of the Nernst-Planck system (N equations in N unknowns) conceptually important?",
    options: [
      "It proves diffusion never reaches steady state",
      "It shows a unique steady state with balanced charges and substances can actually exist while current flows",
      "It eliminates the need for the supporting electrolyte",
      "It shows the current is independent of the field",
    ],
    answer: 1,
    explanation:
      "That the equations close means the field strength and concentration profiles settle at unique, self-consistent steady values - the very possibility on which modelling a working cell rests.",
  },

  // -------------------------------------------------- supporting-electrolyte
  {
    id: "l4-mcq-017",
    topicId: "supporting-electrolyte",
    quick: true,
    question: "Adding a large excess of an inert supporting electrolyte suppresses:",
    options: [
      "Diffusion of the electroactive ion",
      "The migration term of the Nernst-Planck flux",
      "The limiting current itself",
      "The diffusion-layer thickness",
    ],
    answer: 1,
    explanation:
      "The excess ions raise conductivity, so at fixed current the field strength E = i/sigma collapses; with E gone, the migration term c·u·E vanishes and delivery becomes purely diffusional.",
  },
  {
    id: "l4-mcq-018",
    topicId: "supporting-electrolyte",
    quick: true,
    question: "The field collapse caused by a supporting electrolyte follows from:",
    options: [
      "Faraday's law of electrolysis",
      "Ohm's law applied to a solution of greatly increased conductivity",
      "Fick's first law",
      "The Nernst equation",
    ],
    answer: 1,
    explanation:
      "E = i/sigma. Flooding the solution with inert ions raises sigma dramatically, so the field needed to drive a given current density becomes negligibly small.",
  },
  {
    id: "l4-mcq-019",
    topicId: "supporting-electrolyte",
    quick: true,
    question: "In the presence of excess supporting electrolyte, the electroactive ion:",
    options: [
      "Is transported mainly by migration",
      "Is transported only by diffusion and obeys the uncharged-particle law",
      "Stops being transported entirely",
      "Doubles its effective charge",
    ],
    answer: 1,
    explanation:
      "With the field suppressed, the ion's flux obeys exactly the pure-diffusion equations already derived, so the current and limiting current take their simple, predictable forms.",
  },
  {
    id: "l4-mcq-020",
    topicId: "supporting-electrolyte",
    question: "What does the supporting electrolyte actually cost the measurement?",
    options: [
      "It dilutes the analyte so the current drops",
      "Nothing material - it changes neither c_V nor kappa, only dompting the field",
      "It halves the limiting current",
      "It forces the use of turbulent flow",
    ],
    answer: 1,
    explanation:
      "The inert ions carry no reaction chemistry and do not change the analyte's bulk concentration or diffusion coefficient; their only role is to hoist the conductivity and silence migration - the reason voltammetry is reproducible at all.",
  },

  // ------------------------------------------------------- binary-migration
  {
    id: "l4-mcq-021",
    topicId: "binary-migration",
    quick: true,
    question: "Without a supporting electrolyte in a binary solution, the unreactive anion in a cathodic deposition:",
    options: [
      "Moves freely to the surface and reacts",
      "Shows zero net flux, its diffusion toward the surface balanced by migration away from it",
      "Carries most of the current as a reactant",
      "Never feels the electric field",
    ],
    answer: 1,
    explanation:
      "With nu_- = 0 the anion cannot leave the electrode in steady state, so its diffusional flux in must be matched by a migrational flux out - a self-organised field is the only way to balance the books.",
  },
  {
    id: "l4-mcq-022",
    topicId: "binary-migration",
    quick: true,
    question: "For a symmetric binary electrolyte M+A-, the enhancement factor alpha is:",
    options: [
      "1",
      "2",
      "1.5",
      "3",
    ],
    answer: 1,
    explanation:
      "alpha = 1 + tau-/tau+. With tau+ = tau- the factor equals 2: migration doubles the delivery compared with pure diffusion at the same gradient.",
  },
  {
    id: "l4-mcq-023",
    topicId: "binary-migration",
    quick: true,
    question: "The enhancement factor alpha is below 1 - the field withholds supply - when:",
    options: [
      "A cation is reduced at the cathode",
      "An anion is oxidised at the anode",
      "A metal is deposited from a complex anion at the cathode",
      "The electrolyte is symmetric",
    ],
    answer: 2,
    explanation:
      "alpha < 1 when migration opposes diffusion; reducing a negatively charged complex at the cathode forces the ion to swim against the field, the textbook example of field-throttled supply.",
  },
  {
    id: "l4-mcq-024",
    topicId: "binary-migration",
    question: "Inside the diffusion layer of a binary electrolyte without support, the effective transport number of the reacting ion is:",
    options: [
      "Zero, because it is slowed by the anions",
      "Unity, while the spectator's effective transport number is zero",
      "Equal to its bulk transport number",
      "Negative",
    ],
    answer: 1,
    explanation:
      "The reacting ion carries every coulomb of current through the layer even though its bulk transport number is lower; effective transport numbers inside the diffusion layer differ from bulk values.",
  },

  // ----------------------------------------------------- convective-diffusion
  {
    id: "l4-mcq-025",
    topicId: "convective-diffusion",
    quick: true,
    question: "A convective flux is always electroneutral because:",
    options: [
      "Convection only carries neutral molecules",
      "The moving medium itself is electroneutral",
      "Ions never participate in flow",
      "Diffusion cancels it",
    ],
    answer: 1,
    explanation:
      "J = v·c_j sweeps whatever concentration rides the flow, and since the medium carries balanced charge, the convective flux can never create a net current by itself.",
  },
  {
    id: "l4-mcq-026",
    topicId: "convective-diffusion",
    quick: true,
    question: "In water, diffusive and convective transport become comparable already for a flow velocity of about:",
    options: [
      "10 cm/s",
      "10^-3 cm/s",
      "10^-8 cm/s",
      "10^3 cm/s",
    ],
    answer: 1,
    explanation:
      "With D ~ 10^-5 cm2/s and delta ~ 10^-2 cm, the ratio J_d/J_nu ~ D/(delta v) equals one near v = 10^-3 cm/s - convection dominates bulk delivery at almost any real flow.",
  },
  {
    id: "l4-mcq-027",
    topicId: "convective-diffusion",
    quick: true,
    question: "The hydrodynamic (Prandtl) boundary layer is:",
    options: [
      "The region where the flow velocity builds from zero at the wall to its bulk value",
      "Another name for the double layer",
      "A layer in which diffusion is impossible",
      "Always thinner than the diffusion layer",
    ],
    answer: 0,
    explanation:
      "Molecular forces hold the fluid at the solid surface at rest; the boundary layer is the zone of velocity gradient between the wall and the free stream.",
  },
  {
    id: "l4-mcq-028",
    topicId: "convective-diffusion",
    question: "Natural convection explains why:",
    options: [
      "Unstirred cells still support steady currents (layers of roughly 100-500 um)",
      "Stirring always removes the diffusion layer",
      "Porous matrices enhance natural convection",
      "Capillaries carry high currents",
    ],
    answer: 0,
    explanation:
      "Density gradients from temperature, composition and gas bubbles drive spontaneous flows that cap the layer at tens to hundreds of microns; narrow pores and matrices suppress the flows entirely.",
  },

  // ----------------------------------------------------- hydrodynamics-flowby
  {
    id: "l4-mcq-029",
    topicId: "hydrodynamics-flowby",
    quick: true,
    question: "The Reynolds number controls:",
    options: [
      "The degree of dissociation",
      "Whether the flow past an electrode is laminar or turbulent",
      "The diffusion coefficient",
      "The exchange current density",
    ],
    answer: 1,
    explanation:
      "Re = vL/nu_kin compares inertia with viscosity; below a critical value (roughly 10^3 rough surfaces, 10^5 smooth) the flow stays laminar, above it turbulence appears.",
  },
  {
    id: "l4-mcq-030",
    topicId: "hydrodynamics-flowby",
    quick: true,
    question: "In laminar flow past a flat electrode, the hydrodynamic boundary layer:",
    options: [
      "Has constant thickness everywhere",
      "Grows with distance from the stagnation point and shrinks with flow speed",
      "Is thicker at higher flow speeds",
      "Does not depend on viscosity",
    ],
    answer: 1,
    explanation:
      "delta_b ~ nu_kin^(1/2) y^(1/2) v^(-1/2): the retarded zone spreads along the surface and is compressed by faster flow.",
  },
  {
    id: "l4-mcq-031",
    topicId: "hydrodynamics-flowby",
    quick: true,
    question: "Along a flat-plate electrode in laminar flow, the local current density:",
    options: [
      "Is uniform",
      "Falls with distance from the stagnation point because the diffusion layer thickens",
      "Rises linearly with distance",
      "Is zero everywhere",
    ],
    answer: 1,
    explanation:
      "Because delta grows as y^(1/2), the surface gradient - and with it the diffusive flux and the local current - decreases along the electrode; only the rotating disk rescues uniformity.",
  },
  {
    id: "l4-mcq-032",
    topicId: "hydrodynamics-flowby",
    question: "Convection influences the diffusional transport through the boundary layer in which way?",
    options: [
      "It sets the diffusion-layer thickness quantitatively: faster flow means a thinner layer, a steeper gradient and a larger flux",
      "It has no influence once the bulk is levelled",
      "It only works in turbulent flow",
      "It thickens the layer at higher velocity",
    ],
    answer: 0,
    explanation:
      "Convection plays a double role - levelling the bulk (which needs almost no motion) and governing delta (a quantitative function of velocity). The faster the flow, the thinner the film and the larger the limiting flux.",
  },

  // ------------------------------------------------------------- rde-levich
  {
    id: "l4-mcq-033",
    topicId: "rde-levich",
    quick: true,
    question: "The rotating disk electrode achieves a uniform diffusion layer because:",
    options: [
      "The disk is polished perfectly flat",
      "The distance-from-center and local velocity dependences cancel exactly in the hydrodynamic law",
      "The solution is stirred very fast",
      "Centrifugal forces remove all liquid",
    ],
    answer: 1,
    explanation:
      "At the disk, distance y from the stagnation point and linear velocity omega·r rise together; substituting into the flat-plate law cancels both, leaving delta independent of position.",
  },
  {
    id: "l4-mcq-034",
    topicId: "rde-levich",
    quick: true,
    question: "The Levich equation predicts that the current at a rotating disk is proportional to:",
    options: [
      "omega^(-1/2)",
      "omega^(1/2)",
      "omega",
      "omega^2",
    ],
    answer: 1,
    explanation:
      "i = 0.62 (n/nu_j) F D^(2/3) nu_kin^(-1/6) omega^(1/2) (c_V - c_S): a Levich plot of i versus omega^(1/2) is a straight line through the origin at the limiting current.",
  },
  {
    id: "l4-mcq-035",
    topicId: "rde-levich",
    quick: true,
    question: "A common RDE working range spins at about 60 to 10,000 rpm, corresponding to diffusion-layer thicknesses:",
    options: [
      "From about 60 um down to about 4.5 um",
      "From about 1 mm up to 1 cm",
      "Independent of the spin rate",
      "Always near 100 nm",
    ],
    answer: 0,
    explanation:
      "delta_RDE = 1.61 D^(1/3) nu_kin^(1/6) omega^(-1/2); in water, 60-10,000 rpm sweep delta across roughly two orders from 60 to 4.5 um.",
  },
  {
    id: "l4-mcq-036",
    topicId: "rde-levich",
    question: "What does the ring of a rotating ring-disk electrode (RRDE) do?",
    options: [
      "It stirs the solution more efficiently than the disk",
      "It catches products swept outward from the disk and reports their flux via its limiting current",
      "It raises the disk's limiting current by a fixed factor",
      "It protects the disk from wobble",
    ],
    answer: 1,
    explanation:
      "The ring, held at a potential that reacts to disk products, collects a calculable fraction N (typically about 0.4) of the material released at the disk, giving quantitative access to intermediates and parallel pathways.",
  },
];