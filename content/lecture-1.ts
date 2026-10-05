// Lecture 1 - hard-coded content.
//
// Everything on this page comes from this file. There is no database and no
// runtime fetch. To add Lecture 2, copy this file's shape into
// lecture-2.ts, write lecture-2.mcq.ts for its questions, then register both
// in content/index.ts. See ADDING_A_LECTURE.md.

import type { Lecture } from "./types";
import { lecture1Mcq } from "./lecture-1.mcq";

export const lecture1: Lecture = {
  slug: "lecture-1",
  label: "Lecture 1",
  title: "Electrochemistry Fundamentals",
  summary:
    "The whole first course in one pass: what happens at an electrode, why " +
    "currents are limited, how potentials are measured, and how the same " +
    "ideas explain batteries, corrosion and metal extraction.",
  order: 1,
  minutes: 75,
  mcq: lecture1Mcq,

  constants: [
    { symbol: "F", name: "Faraday constant", value: "96485 C mol⁻¹" },
    { symbol: "R", name: "Gas constant", value: "8.314 J mol⁻¹ K⁻¹" },
    {
      symbol: "2.303RT/F",
      name: "Nernst slope at 298.15 K",
      value: "0.05916 V",
    },
    { symbol: "SHE", name: "Standard hydrogen electrode", value: "0.000 V" },
    { symbol: "SCE", name: "Saturated calomel electrode", value: "+0.241 V" },
    {
      symbol: "Ag/AgCl (sat)",
      name: "Saturated silver chloride electrode",
      value: "+0.197 V",
    },
    { symbol: "T",
      name: "Absolute temperature",
      value: "K (use 298.15 for 25 °C)",
    },
  ],

  sections: [
    // ------------------------------------------------------------------ 1 --
    {
      id: "cell-anatomy",
      minutes: 8,
      title: "Cell anatomy and sign conventions",
      summary:
        "Anode, cathode, electrolyte, e⁻ and i⁺ — and why the names follow " +
        "the reaction, not the electrode.",
      keyPoints: [
        "Oxidation always happens at the anode; reduction at the cathode.",
        "The names stay the same whether the cell makes current or is " +
          "driven by an external supply.",
        "Electrons flow through the external wire, ions through the " +
          "electrolyte. Neither crosses the interface.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "An electrochemical cell has four parts and two reactions. The " +
            "**electrolyte** is a solution or melt that conducts because it " +
            "contains mobile ions. The **electrodes** are electronic " +
            "conductors that dip into it. At the **anode** the species lose " +
            "electrons (oxidation); at the **cathode** they gain electrons " +
            "(reduction).",
        },
        {
          kind: "figure",
          src: "cell_anatomy.png",
          alt:
            "Cut-away of an electrochemical cell showing the anode, cathode, " +
            "electrolyte and external circuit, with electron and ion " +
            "directions marked.",
          caption:
            "The cell. Electrons travel anode → cathode through the wire; " +
            "ions travel through the electrolyte to keep both charges " +
            "balanced.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{anode: oxidation} \qquad \text{cathode: reduction}`,
          caption: "The only sign convention you must never get backwards.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Anode and cathode are not permanently positive",
          body:
            "\"Anode attracts anions\" is a memory aid, not a law. In a " +
            "galvanic cell the anode happens to be negative; in an " +
            "electrolytic cell driven by an external supply it is positive. " +
            "What never changes is that the anode is where oxidation occurs.",
        },
        {
          kind: "para",
          text:
            "Faraday's law links charge passed to the amount of substance:",
        },
        {
          kind: "formula",
          tex: String.raw`Q = n F \xi \qquad\text{and}\qquad i = \frac{dQ}{dt}`,
          caption:
            "n electrons per reaction event, F = 96485 C mol⁻¹, ξ = extent " +
            "of reaction in moles.",
        },
        {
          kind: "worked",
          title: "How much copper comes off in ten minutes?",
          given:
            "Cu²⁺ + 2e⁻ → Cu at a current density of 0.010 A cm⁻² on a " +
            "5.0 cm² plate.",
          steps: [
            String.raw`I = i A = 0.010 \times 5.0 = 0.050\ \text{A}`,
            String.raw`Q = It = 0.050 \times 600 = 30\ \text{C}`,
            String.raw`\xi = \frac{Q}{nF} = \frac{30}{2 \times 96485} = 1.55 \times 10^{-4}\ \text{mol}`,
            String.raw`m = 63.55 \times 1.55 \times 10^{-4} = 9.9 \times 10^{-3}\ \text{g} = 9.9\ \text{mg}`,
          ],
          result: "9.9 mg of copper deposited in ten minutes.",
        },
        {
          kind: "para",
          text:
            "A useful sanity check: electrodepositing a noble metal is " +
            "cheap in energy but slow, because you are limited by how fast " +
            "ions can arrive. Dissolving an active metal by electrolysis is " +
            "fast but expensive in energy. Which way round that trade-off " +
            "falls depends on the cell potential, which we meet in " +
            "[electrolysis](#electrolysis).",
        },
      ],
    },

    // ------------------------------------------------------------------ 2 --
    {
      id: "double-layer",
      minutes: 7,
      title: "The electrical double layer",
      summary:
        "Every electrode in every electrolyte carries a structured charge " +
        "layer, and it behaves like a capacitor.",
      keyPoints: [
        "The layer is molecular-thin: typically tens of nanometres.",
        "Near E_rev the current is almost all capacitive, not Faradaic.",
        "Screening the layer with salt changes the capacitance, not the " +
          "reversible potential.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "When a conductor touches a liquid it acquires charge, which " +
            "pulls counter-ions out of the solution and arranges the solvent " +
            "molecules at the surface. The result is a double layer: charge " +
            "on the metal, opposite charge in the fluid. It behaves " +
            "capacitively, which is why a bare electrode in electrolyte " +
            "passes current even when no redox reaction is possible.",
        },
        {
          kind: "figure",
          src: "double_layer.png",
          alt:
            "Charge density and potential plotted against distance from a " +
            "negatively charged electrode surface, showing the compact layer " +
            "and the diffuse layer.",
          caption:
            "Potential falls across the double layer, not across the bulk. " +
            "Almost all of the change happens within a few nanometres.",
        },
        {
          kind: "formula",
          tex: String.raw`C_{dl} = \frac{d\sigma}{dE} \qquad
            \text{and at low frequency}\qquad C_{dl} \approx \varepsilon_r\varepsilon_0\frac{\kappa}{\lambda_D}`,
          caption:
            "Charge per unit area divided by potential gives the " +
            "capacitance. The Stern model adds a compact layer in series " +
            "with the diffuse layer.",
        },
        {
          kind: "formula",
          tex: String.raw`\lambda_D = \sqrt{\frac{\varepsilon_r\varepsilon_0 R T}{2 F^2 I c}}`,
          caption:
            "Debye length: the screening distance, which shrinks as " +
            "sqrt(inverse ionic strength).",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Why adding salt removes migration",
          body:
            "Migration needs a potential gradient driving charged species. " +
            "In a concentrated supporting electrolyte the Debye length " +
            "collapses to about a nanometre, so the field is screened inside " +
            "that distance and effectively vanishes for the bulk of the " +
            "solution. Diffusion, which is driven by concentration gradients, " +
            "is untouched. That is why we add excess salt to simplify " +
            "transport to pure diffusion.",
        },
        {
          kind: "para",
          text:
            "Distinguish a **non-polarised** electrode, where the potential " +
            "does not move when you draw current, from a **polarised** one. " +
            "Doubly charged ions are hard to polarise because both signs " +
            "must be discharged; single-electron redox couples at inert " +
            "electrodes are easy to polarise.",
        },
      ],
    },

    // ------------------------------------------------------------------ 3 --
    {
      id: "mass-transport",
      minutes: 9,
      title: "Mass transport and the Levich equation",
      summary:
        "Diffusion, migration and convection: how reactants reach the " +
        "surface, and why that sets a ceiling on the current.",
      keyPoints: [
        "Levich: i_L ∝ D^⅔ · ω^½ · ν^(-1/6) · C*.",
        "The rotating-disk electrode removes the diffusion layer " +
          "predictably, which is why it is the workhorse.",
        "i_L is a current density; I_L = i_L · A.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "At a rate far from the reversible potential the current is set " +
            "by how fast reactant can reach the electrode, not by " +
            "electronic kinetics. If the surface is swept clean " +
            "instantaneously, the flux is the most you can get.",
        },
        {
          kind: "figure",
          src: "transport_modes.png",
          alt:
            "Three panels showing diffusion down a concentration gradient, " +
            "migration of ions along an electric field, and convection by a " +
            "stirring fluid.",
          caption:
            "Three ways a species moves. Only diffusion is guaranteed to " +
            "operate; migration needs a field and charged species, " +
            "convection needs fluid that is actually moving.",
        },
        {
          kind: "formula",
          tex: String.raw`J = -D\frac{\partial C}{\partial x} \approx D\frac{C_b - C_s}{\delta}`,
          caption:
            "Fick's first law with a linear profile across the depleted " +
            "layer of thickness δ.",
        },
        {
          kind: "para",
          text:
            "That gives the limiting current density directly, and it is " +
            "worth knowing because it fixes the dependence on each variable:",
        },
        {
          kind: "formula",
          tex: String.raw`i_L = n F D \frac{C^*}{\delta} \qquad\Rightarrow\qquad \delta = \frac{n F D C^*}{i_L}`,
          caption:
            "The diffusion layer thins as current rises, and thickens as D " +
            "rises. This is first order in D, not square root.",
        },
        {
          kind: "figure",
          src: "diffusion_layer.png",
          alt:
            "Concentration plotted against distance from a consuming " +
            "electrode, showing a steep linear drop across the diffusion " +
            "layer and a flat bulk region.",
          caption:
            "Steady-state profile at a consuming electrode. The linear " +
            "approximation is excellent over the thin depletion layer and " +
            "poor elsewhere, which is why only δ matters.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Three different layers, three different δ",
          body:
            "Do not mix them up. The planar diffusion layer obeys " +
            "δ = nFD C*/i. The rotating-disk hydrodynamic layer obeys " +
            "δ_H ≈ 1.28·D^½·ω^(-1/2)·ν^(-1/6), which is why it is " +
            "predictable. And a transient Cottrell layer grows as √(πDt).",
        },
        {
          kind: "figure",
          src: "rde.png",
          alt:
            "Rotating disk electrode with a defined thin hydrodynamic layer " +
            "of thickness delta_H above the disc, plus a plot of limiting " +
            "current against the square root of rotation rate.",
          caption:
            "The rotating disk. Rotation sets a reproducible layer " +
            "thickness, so the diffusion limit becomes a measurable " +
            "quantity instead of a nuisance.",
        },
        {
          kind: "formula",
          tex: String.raw`i_L = 0.620\,nF\,D^{2/3}\,\omega^{1/2}\,\nu^{-1/6}\,C^{*}`,
          caption:
            "Levich equation, current density. Angular rate ω in rad s⁻¹, " +
            "kinematic viscosity ν in cm² s⁻¹, D in cm² s⁻¹, C* in " +
            "mol cm⁻³.",
        },
        {
          kind: "para",
          text:
            "Two consequences follow directly. Plotting i_L against ω^½ " +
            "must give a straight line through the origin, and the slope " +
            "yields D. And because D enters as D^⅔, the method is not very " +
            "sensitive to errors in the viscosity, which is awkward to " +
            "measure.",
        },
        {
          kind: "worked",
          title: "Limiting current at 900 rpm",
          given:
            "O₂ reduction, n = 4, D = 7.0×10⁻⁶ cm² s⁻¹, C* = " +
            "1.0×10⁻⁵ mol cm⁻³, ω = 94.2 rad s⁻¹ (900 rpm), ν = " +
            "0.01 cm² s⁻¹.",
          steps: [
            String.raw`D^{2/3} = (7.0\times10^{-6})^{2/3} = 3.65\times10^{-4}`,
            String.raw`\omega^{1/2} = 9.71 \qquad \nu^{-1/6} = 2.154`,
            String.raw`i_L = 0.620 \times 4 \times 96485 \times 3.65\times10^{-4} \times 9.71 \times 2.154 \times 1.0\times10^{-5}`,
            String.raw`\boxed{i_L = 9.2 \times 10^{-3}\ \text{A cm}^{-2}}`,
          ],
          result: "9.2 mA cm⁻², or 9.2 mA on a 1 cm² electrode.",
        },
      ],
    },

    // ------------------------------------------------------------------ 4 --
    {
      id: "polarisation",
      minutes: 7,
      title: "Polarisation curves",
      summary:
        "One plot, three regimes: capacitive, kinetic and " +
        "transport-limited, and how to tell them apart.",
      keyPoints: [
        "Near E_rev a bare electrode behaves as a capacitor.",
        "The Tafel region is the exponential middle of the curve.",
        "A diffusion plateau tells you the transport limit, not the " +
          "kinetics.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Sweeping the potential of one electrode against a reference and " +
            "plotting current against potential gives its polarisation curve. " +
            "The shape is not arbitrary: it has three physically distinct " +
            "regions, and reading the curve means identifying which one you " +
            "are in.",
        },
        {
          kind: "figure",
          src: "polarization.png",
          alt:
            "Current against electrode potential curve showing the " +
            "reversible potential, a small region either side of it, and " +
            "the faradaic current rising at larger overpotentials.",
          caption:
            "The cathodic and anodic branches either side of the reversible " +
            "potential.",
        },
        {
          kind: "figure",
          src: "polarization_curve.png",
          alt:
            "Current against overpotential curve with three labelled regions: " +
            "capacitive near zero, exponential at moderate overpotential, " +
            "and flat at large overpotential.",
          caption:
            "One electrode, three regimes. Near E_rev the current is tiny " +
            "and capacitive; at moderate overpotential it grows " +
            "exponentially; at large overpotential it flattens onto the " +
            "transport plateau.",
        },
        {
          kind: "table",
          head: ["Region", "What limits it", "Signature", "What to do"],
          widths: [1.1, 1.2, 1.2, 1.3],
          rows: [
            [
              "E ≈ E_rev",
              "nothing — double-layer charging only",
              "flat near the axis, or a linear non-polarised background",
              "do not fit a Tafel line here",
            ],
            [
              "moderate η",
              "charge-transfer kinetics",
              "exponential, straight on a log plot",
              "this is the Tafel region",
            ],
            [
              "large η",
              "mass transport (δ, D, C_b)",
              "plateau at i_L",
              "measure i_L vs. ω^½",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "warn",
          title: "A plateau that moves when you stir is transport limited",
          body:
            "If the current no longer grows with overpotential but does " +
            "respond to stirring or rotation, you have hit the diffusion " +
            "limit. Reading a Tafel slope from that flat region gives you a " +
            "number, but it describes transport, not charge transfer.",
        },
        {
          kind: "para",
          text:
            "It helps to keep the two axes separate in your head: an " +
            "*activation polarisation* is an ohmic-like voltage loss that " +
            "*reduces* the useful driving force, whereas a *concentration " +
            "overpotential* comes from reactant depletion at the surface and " +
            "*increases* the voltage you must apply.",
        },
      ],
    },

    // ------------------------------------------------------------------ 5 --
    {
      id: "overpotentials",
      minutes: 6,
      title: "Overpotentials",
      summary:
        "The extra voltage you actually have to apply, and how to break it " +
        "into activation, concentration and ohmic parts.",
      keyPoints: [
        "η = E_applied − E_reversible; a loss, not a gain.",
        "η = η_activation + η_concentration + iR.",
        "Ohmic drop is linear in i and is not an overpotential at the " +
          "interface.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The reversible potential is the potential at which the electrode " +
            "would sit with no current. To make anything happen you must go " +
            "beyond it. The extra amount is the **overpotential**, and it is " +
            "the honest measure of how far from ideal your cell is running.",
        },
        {
          kind: "formula",
          tex: String.raw`\eta = E_{\text{applied}} - E_{\text{rev}} = \eta_{\text{act}} + \eta_{\text{conc}} + \eta_{\Omega}`,
          caption:
            "The three losses. η_Ω is the ohmic drop in the electrolyte, " +
            "cables and contacts, and is usually written iR.",
        },
        {
          kind: "figure",
          src: "overpotentials.png",
          alt:
            "Diagram of an electrolytic cell showing the applied potential " +
            "split into reversible potential, anodic and cathodic " +
            "overpotentials, and the ohmic voltage drop across the " +
            "solution resistance.",
          caption:
            "An electrolysis cell has to supply E_rev plus both " +
            "overpotentials plus iR before anything happens.",
        },
        {
          kind: "para",
          text:
            "A **polarisation curve** plots current against " +
            "overpotential; a **polarisation series** is the order in which " +
            "different electrode materials polarise at a given current " +
            "density. Both depend on how the overpotential scales with i: " +
            "for a Tafel region η rises as log i, and for a " +
            "transport-limited process η rises as the logarithm of a large " +
            "number, so it climbs steeply.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Cathodic and anodic overpotentials are both losses",
          body:
            "In electrolysis you must overcome both. That is why a " +
            "reversible cell potential of 1.1 V can need a 2 V supply in " +
            "practice, and why overpotential, not thermodynamics, decides " +
            "which industrial process is economic.",
        },
        {
          kind: "worked",
          title: "What voltage does the cell actually need?",
          given:
            "E_rev = 1.10 V, η_act = 0.35 V, η_conc = 0.15 V, iR = 0.20 V " +
            "at the operating current.",
          steps: [
            String.raw`E_{\text{applied}} = E_{\text{rev}} + \eta_{\text{act}} + \eta_{\text{conc}} + iR`,
            String.raw`E_{\text{applied}} = 1.10 + 0.35 + 0.15 + 0.20`,
            String.raw`\boxed{E_{\text{applied}} = 1.80\ \text{V}}`,
          ],
          result:
            "1.80 V, about 64 % of which is being lost to polarisation " +
            "rather than doing useful work.",
        },
      ],
    },

    // ------------------------------------------------------------------ 6 --
    {
      id: "nernst",
      minutes: 10,
      title: "The Nernst equation and reference electrodes",
      summary:
        "Potential depends on concentration, not on how fast you go. This " +
        "is what makes electrode potentials measurable.",
      keyPoints: [
        "E = E° + (0.05916/n) log Q at 25 °C.",
        "The standard hydrogen electrode defines 0.000 V.",
        "Compare potentials against the same reference or not at all.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "For a reversible couple the electrode potential is fixed by " +
            "thermodynamics, not by the current. That is the whole reason " +
            "potentiometry works: you can measure a composition without " +
            "disturbing it.",
        },
        {
          kind: "formula",
          tex: String.raw`E = E^\circ - \frac{RT}{nF}\ln Q
             \qquad\text{at 298.15 K}\qquad
             E = E^\circ + \frac{0.05916}{n}\log_{10} Q`,
          caption:
            "For aA + bB → cC + dD, Q = [C]^c[D]^d / [A]^a[B]^b. Pure " +
            "solids and liquids are omitted.",
        },
        {
          kind: "figure",
          src: "nernst.png",
          alt:
            "Plot of electrode potential against log of the ion activity, " +
            "showing a straight line of slope 0.05916/n volts per decade " +
            "crossing the E° axis.",
          caption:
            "One decade of concentration changes the potential by " +
            "59.16/n mV. The slope is independent of the species involved, " +
            "which is why pH meters work.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "E° is not the potential you will measure",
          body:
            "E° is defined at unit activity for every species. Real " +
            "solutions are not, so the working potential shifts. Always " +
            "state which reference electrode you used: potentials quoted " +
            "against different references are not comparable.",
        },
        {
          kind: "table",
          head: ["Electrode", "Potential vs. SHE", "Note"],
          widths: [1.3, 1.1, 1.8],
          rows: [
            ["Standard hydrogen electrode (SHE)", "0.000 V", "the definition"],
            ["Saturated calomel (SCE)", "+0.241 V", "mercury; easy, but toxic"],
            [
              "Ag/AgCl, saturated KCl",
              "+0.197 V",
              "most common in laboratories",
            ],
          ],
        },
        {
          kind: "para",
          text:
            "The **reversible hydrogen electrode** is the workhorse for " +
            "correcting to a fixed pH, because for the couple " +
            "2H⁺ + 2e⁻ → H₂ the Nernst equation collapses to a simple " +
            "offset:",
        },
        {
          kind: "formula",
          tex: String.raw`E_{\text{RHE}} = E - 0.05916 \times \text{pH}`,
          caption:
            "Adding 0.05916 V per pH unit shifts the whole curve. The " +
            "Tafel **slope** is unchanged; only the intercept moves.",
        },
        {
          kind: "worked",
          title: "Copper concentration from a measured potential",
          given:
            "E measured against Ag/AgCl (sat) is +0.110 V for a Cu²⁺ " +
            "solution. E°(Cu²⁺/Cu) = +0.340 V vs. SHE, n = 2.",
          steps: [
            String.raw`E_{\text{vs SHE}} = 0.110 + 0.197 = 0.307\ \text{V}`,
            String.raw`0.307 = 0.340 + \frac{0.05916}{2}\log_{10}[\text{Cu}^{2+}]`,
            String.raw`\log_{10}[\text{Cu}^{2+}] = \frac{2(0.307 - 0.340)}{0.05916} = -1.115`,
            String.raw`\boxed{[\text{Cu}^{2+}] = 7.7 \times 10^{-2}\ \text{mol L}^{-1}}`,
          ],
          result: "0.077 mol L⁻¹ copper(II).",
        },
      ],
    },

    // ------------------------------------------------------------------ 7 --
    {
      id: "kinetics",
      minutes: 10,
      title: "Butler-Volmer kinetics and Tafel analysis",
      summary:
        "Exponential kinetics, the Tafel plot, and the diagnostics that " +
        "tell you when a slope you measured means nothing.",
      keyPoints: [
        "i = i₀[exp(αnFη/RT) − exp(−(1−α)nFη/RT)].",
        "Tafel slope b = 2.303RT/(αnF); at 25 °C, b = 59.16/(αn) mV.",
        "i₀ is the rate at E = E_rev, not the current at some large η.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Charge transfer is an activated process, so its rate depends " +
            "exponentially on potential. Butler-Volmer is the standard " +
            "description: partial anodic and cathodic currents sum to the " +
            "net current.",
        },
        {
          kind: "formula",
          tex: String.raw`i = i_0\left[\exp\!\left(\frac{\alpha n F \eta}{RT}\right)
             - \exp\!\left(-\frac{(1-\alpha) n F \eta}{RT}\right)\right]`,
          caption:
            "i₀ is the exchange current density: the rate at which the " +
            "reaction runs both ways at equal speed at η = 0.",
        },
        {
          kind: "figure",
          src: "butler_volmer.png",
          alt:
            "Graph of current against overpotential showing the " +
            "exponential anodic branch, the exponential cathodic branch, " +
            "and their difference giving the net sigmoid curve, with the " +
            "exchange current marked at zero overpotential.",
          caption:
            "Two exponentials, one sigmoid. α = 0.5 makes the curve " +
            "symmetric; real systems are usually asymmetric.",
        },
        {
          kind: "para",
          text:
            "At |η| ≳ 120 mV one exponential dominates and the other can be " +
            "ignored. Taking logs gives a straight line, which is the Tafel " +
            "plot and the basis of kinetic measurements.",
        },
        {
          kind: "formula",
          tex: String.raw`\eta = \frac{2.303RT}{\alpha n F}\log_{10}\!\left(\frac{i}{i_0}\right) = b\log_{10} i + b\log_{10}\!\left(\frac{1}{i_0}\right)`,
          caption:
            "The Tafel equation. b = 2.303RT/(αnF) = 59.16/(αn) mV at " +
            "25 °C.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Two ways to read the same line",
          body:
            "The **slope** b gives αn. The **intercept** on the log i axis " +
            "is −log i₀, so i₀ = 10^(−intercept/b). Notice that i₀ comes " +
            "entirely from a ratio of two measured quantities, which is why " +
            "the measurement is robust against modest scale errors.",
        },
        {
          kind: "worked",
          title: "Reading a Tafel line",
          given:
            "A Tafel fit gives an intercept of −1.429 on the log₁₀ i axis " +
            "(i in A cm⁻²) and a slope of 0.070 V per decade.",
          steps: [
            String.raw`b = 70\ \text{mV dec}^{-1}`,
            String.raw`i_0 = 10^{-(-1.429)/0.070} = 10^{20.4} \approx 3.7\times10^{-4}\ \text{A cm}^{-2}`,
            String.raw`i_0 = 0.37\ \text{mA cm}^{-2}`,
            String.raw`\alpha n = \frac{59.16}{70} = 0.85`,
          ],
          result:
            "b = 70 mV dec⁻¹, i₀ ≈ 0.37 mA cm⁻², and αn ≈ 0.85 — " +
            "consistent with n = 1 and α ≈ 0.85.",
        },
        {
          kind: "figure",
          src: "tafel.png",
          alt:
            "Tafel plot of overpotential against log current showing a " +
            "straight anodic branch and a straight cathodic branch " +
            "extrapolated to intersect at the exchange current.",
          caption:
            "Extrapolating both branches to meet gives i₀, but only if " +
            "neither branch is mass-transfer limited.",
        },
        {
          kind: "figure",
          src: "tafel_diagnostics.png",
          alt:
            "Three bad Tafel plots: one tilted by uncompensated resistance, " +
            "one curved by mass transport, one scattered by bubbles and " +
            "resistance.",
          caption:
            "Three ways a Tafel fit goes wrong: uncompensated resistance " +
            "tilts the cathodic branch, mass transport or a wrong n curves " +
            "it, and bubbles plus iR make it noisy. Look at the shape " +
            "before reading the slope.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Correct for iR or do not report the slope",
          body:
            "Uncompensated solution resistance adds a term proportional to " +
            "i, which tilts the cathodic branch and biases both b and i₀. " +
            "Compensate electronically, or use a current-interrupt method. " +
            "A Tafel slope is only as trustworthy as the compensation " +
            "behind it.",
        },
      ],
    },

    // ------------------------------------------------------------------ 8 --
    {
      id: "her",
      minutes: 7,
      title: "The hydrogen evolution reaction",
      summary:
        "The model cathodic reaction: why its overpotential measures a " +
        "catalyst's quality, and why the mechanism is not yet settled.",
      keyPoints: [
        "2H⁺ + 2e⁻ → H₂; measured well below the reversible potential.",
        "η scales with log i; Tafel behaviour is expected either way.",
        "The mechanism differs between metals, and coverage can change b.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Hydrogen evolution is the standard reaction for judging " +
            "electrocatalysts, because its equilibrium potential is known " +
            "exactly and its chemistry is simple. Yet it still runs at a " +
            "large overpotential.",
        },
        {
          kind: "formula",
          tex: String.raw`2\text{H}^+ + 2e^- \rightarrow \text{H}_2
             \qquad E^\circ = 0.000\ \text{V vs. SHE}`,
          caption:
            "Reversible at pH 0. At pH 7 the same couple sits at " +
            "−0.414 V vs. SHE.",
        },
        {
          kind: "figure",
          src: "her_mechanism.png",
          alt:
            "Three mechanism schemes: the Volmer step transferring a proton " +
            "to an adsorbed hydrogen, the Heyrovsky step recombining an " +
            "adsorbed hydrogen with a proton, and the Tafel step combining " +
            "two adsorbed hydrogens to release hydrogen gas.",
          caption:
            "The Volmer-Heyrovsky-Tafel picture. Which step is rate " +
            "limiting differs by metal and by potential.",
        },
        {
          kind: "table",
          head: ["Mechanism", "Rate-determining step", "Expected behaviour"],
          widths: [1.1, 1.3, 1.6],
          rows: [
            [
              "Volmer slow",
              "proton transfer onto the surface",
              "η ∝ log i at low coverage",
            ],
            [
              "Heyrovsky slow",
              "ion-plus-adsorbed recombination",
              "Tafel slope b ≈ 40 mV dec⁻¹",
            ],
            [
              "Tafel slow",
              "combination of two adsorbed H atoms",
              "Tafel slope b ≈ 60 mV dec⁻¹",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Do not read a mechanism straight off a Tafel slope",
          body:
            "The 120 / 40 / 60 mV scheme is a useful idealisation, not a " +
            "measurement. On real metals intermediate hydrogen coverage " +
            "varies with potential, and a changing coverage makes b drift. " +
            "A measured slope near 30 mV dec⁻¹, common on platinum, is " +
            "consistent with an earlier regime rather than a contradiction.",
        },
        {
          kind: "para",
          text:
            "Practical consequence: catalysts that bind hydrogen too weakly " +
            "give a large initial barrier, while those that bind too " +
            "strongly poison the surface with unreleased H. The best " +
            "catalysts sit in between, which is why noble metals work well " +
            "and why the search for cheaper ones is about getting the " +
            "binding energy right.",
        },
      ],
    },

    // ------------------------------------------------------------------ 9 --
    {
      id: "corrosion",
      minutes: 6,
      title: "Corrosion",
      summary:
        "Every metal corrodes back toward its thermodynamic state; the job " +
        "is to control the rate, not to prevent it.",
      keyPoints: [
        "Corrosion needs an anode, a cathode, an electrolyte and a path.",
        "Removing any one of the four stops it.",
        "Galvanic series, not the standard potentials, predicts real " +
          "behaviour.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Corrosion is electrochemistry running in the wrong direction " +
            "and at no useful purpose. A metal atom loses electrons at one " +
            "place on the surface and they are picked up somewhere else, " +
            "usually by dissolved oxygen.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{anodic: } M \rightarrow M^{n+} + ne^-
             \qquad\qquad \text{cathodic: } O_2 + 2H_2O + 4e^- \rightarrow 4OH^-`,
          caption:
            "The commonest pair. Dissolved oxygen reduction, not hydrogen " +
            "evolution, is usually the cathodic reaction in neutral, " +
            "aerated water.",
        },
        {
          kind: "para",
          text:
            "All four ingredients must be present: an anodic site, a " +
            "cathodic site, an electrolyte to carry ionic current, and an " +
            "electronic path between them. Remove any one and corrosion " +
            "stops. Every protection method maps onto that list.",
        },
        {
          kind: "table",
          head: ["Method", "What it removes", "Limitation"],
          widths: [1.2, 1.2, 1.7],
          rows: [
            [
              "barrier coating",
              "the electrolyte, by keeping water out",
              "fails once scratched",
            ],
            [
              "sacrificial zinc",
              "the anode, by making zinc the site",
              "zinc is consumed and must be replaced",
            ],
            [
              "cathodic protection",
              "makes the structure the cathode",
              "needs a power supply or a large anode",
            ],
            [
              "inhibitors",
              "slows both half-reactions",
              "must be maintained in concentration",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Standard potentials will mislead you",
          body:
            "Ranking metals by E° ignores kinetics, surface films and the " +
            "local environment. In real service the **galvanic series** — " +
            "measured potentials of actual alloys in actual conditions — is " +
            "what predicts which metal corrodes. The two orders can differ.",
        },
        {
          kind: "worked",
          title: "Reading a galvanic couple",
          given:
            "A steel bolt (E ≈ −0.61 V vs. SCE) holding an aluminium bracket " +
            "(E ≈ −0.85 V vs. SCE) in aerated seawater.",
          steps: [
            "The more negative potential is the more active anode, so " +
              "aluminium corrodes and the steel is the cathode.",
            "The area of the small steel cathode is decisive: a small " +
              "cathode paired with a large anode gives a very high anodic " +
              "current density.",
            String.raw`\text{area ratio } A_{\text{anode}}/A_{\text{cathode}} \gg 1 \;\Rightarrow\; \text{rapid, localised attack of the aluminium}`,
          ],
          result:
            "Isolate dissimilar metals, or make the area of the more noble " +
            "metal large relative to the less noble one.",
        },
      ],
    },

    // ------------------------------------------------------------------ 10 --
    {
      id: "electrolysis",
      minutes: 7,
      title: "Electrolysis and metal extraction",
      summary:
        "Using an external supply to drive an uphill reaction, and why " +
        "aqueous solutions cannot give you every metal.",
      keyPoints: [
        "The cell potential tells you the thermodynamics; overpotentials " +
          "decide the electricity bill.",
        "In aqueous solution the anode produces O₂, not Cl₂, below about " +
          "1 V.",
        "Electrolysis is for metals that are too active to reduce by carbon.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Voltaic cells convert chemical energy to electrical energy; " +
            "electrolytic cells do the reverse, forcing a reaction that is " +
            "not spontaneous. You pay in volts and amperes for it.",
        },
        {
          kind: "formula",
          tex: String.raw`E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}
             \qquad
             \Delta G = -nFE_{\text{cell}}`,
          caption:
            "E_cell < 0 means the reaction will not run unaided, which is " +
            "exactly when you connect a supply.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Which product wins at the anode?",
          body:
            "Competing anodic processes are ranked by their oxidation " +
            "potentials, and the easier one wins. Oxidation of chloride to " +
            "chlorine needs about +1.36 V, while oxidation of water to " +
            "oxygen needs about +1.23 V - so on paper oxygen should win, " +
            "and in pure water it does. Chlorine is produced anyway because " +
            "oxygen has a large overpotential on the anode material: real " +
            "oxygen evolution starts several hundred millivolts later than " +
            "its equilibrium value, while chloride oxidation does not. " +
            "Concentrated brine is therefore chlorinated, and the chlorine " +
            "hazard is why the cell needs care.",
        },
        {
          kind: "table",
          head: ["Metal", "Industrial route", "Why"],
          widths: [1, 1.2, 2],
          rows: [
            [
              "Al, Mg, Na",
              "molten salt electrolysis",
              "too reactive for carbon; water would be reduced first",
            ],
            [
              "Zn, Fe",
              "reduction of the oxide with carbon or CO",
              "cheap and high yield at industrial scale",
            ],
            [
              "Cu, Ni, Au",
              "electrorefining of the impure metal",
              "impurities go into solution; pure metal deposits",
            ],
            [
              "Ag, Pt",
              "found native; refined by electrolysis",
              "already present as the free metal",
            ],
          ],
        },
        {
          kind: "figure",
          src: "worked_example.png",
          alt:
            "Two panels showing the same overpotential calculation first as " +
            "arithmetic with numbers, and second as the Tafel line it was " +
            "taken from.",
          caption:
            "The same calculation twice: once as arithmetic, once read off " +
            "the graph it came from.",
        },
        {
          kind: "para",
          text:
            "Electrorefining is worth dwelling on. An impure copper anode " +
            "dissolves; copper deposits on the cathode; and metals more " +
            "valuable than copper, such as silver and gold, drop into the " +
            "anode sludge instead. The impurities never have to be separated " +
            "chemically at all.",
        },
      ],
    },

    // ------------------------------------------------------------------ 11 --
    {
      id: "batteries",
      minutes: 7,
      title: "Batteries and fuel cells",
      summary:
        "The same electrochemistry, run in reverse: store energy as " +
            "chemical potential and get it back as current.",
      keyPoints: [
        "Capacity in Ah; energy density in Wh kg⁻¹.",
        "Energy density and power density are different problems.",
        "Reversible cell potential sets the ceiling on energy density.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A battery is an electrochemical cell designed to be reversible " +
            "in the useful sense: discharge it and the reactions run " +
            "backwards on charge. Every distinction we have drawn so far — " +
            "cell potential, capacity, rate, cycle life — is a design " +
            "variable in that context.",
        },
        {
          kind: "figure",
          src: "concept_map.png",
          alt:
            "Dependency diagram showing how cell anatomy, double layer, " +
            "mass transport, polarisation, overpotentials, Nernst, " +
            "Butler-Volmer, Tafel, HER, corrosion, electrolysis and " +
            "batteries connect to one another.",
          caption:
            "How the topics of this lecture depend on one another. Start at " +
            "the top and work down.",
        },
        {
          kind: "table",
          head: ["Quantity", "Meaning", "Typical unit"],
          widths: [1, 2, 1],
          rows: [
            [
              "Cell potential",
              "the reversible voltage between terminals",
              "V",
            ],
            [
              "Capacity",
              "total charge the cell can deliver",
              "A h",
            ],
            [
              "Energy density",
              "stored energy per unit mass",
              "W h kg⁻¹",
            ],
            [
              "Power density",
              "energy delivered per unit mass per unit time",
              "W kg⁻¹",
            ],
            [
              "Coulombic efficiency",
              "charge returned on discharge ÷ charge put in",
              "%",
            ],
          ],
        },
        {
          kind: "formula",
          tex: String.raw`E = \int V\,dQ \qquad\text{and}\qquad
             \text{energy density} = \frac{V \times Q}{m}`,
          caption:
            "Energy is the area under the discharge curve. A high voltage " +
            "alone does not make a good battery.",
        },
        {
          kind: "para",
          text:
            "A lithium-ion cell at 4 V and 2500 mAh stores 4 × 2.5 = 10 W h, " +
            "which is about 36 kJ. At 150 g for the cell alone that is " +
            "67 W h kg⁻¹; a real 18650 at about 45 g reaches 220 W h kg⁻¹, " +
            "and a whole pack reaches less again because casing, separators " +
            "and current collectors weigh nothing useful. Lead-acid sits " +
            "near 35 W h kg⁻¹, so the honest comparison is a factor of two " +
            "to six, not an order of magnitude.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "A fuel cell is a battery fed continuously",
          body:
            "Same electrochemistry, but the reactants arrive from outside " +
            "rather than being stored inside, so it does not discharge in " +
            "the usual sense. Its practical limits are transport and water " +
            "management, not cell potential.",
        },
      ],
    },
  ],
};