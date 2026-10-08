// Lesson 8 - Steady-state and transient methods.
//
// Source syllabus: Bagotsky ch.11-12 (chronoamperometry, chronopotentiometry,
// coulometry) and Bard & Faulkner ch.5 and ch.8 (potential step methods,
// controlled-current techniques). The chapters set the coverage and the
// numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson8Mcq } from "./lesson-8.mcq";

export const lesson8: Lesson = {
  slug: "lesson-8",
  label: "Lesson 8",
  title: "Steady-state and transient methods",
  summary:
    "Potentiometry, the subject of Lesson 7, waits for a quiet, " +
    "current-free cell. The moment you draw current, the world changes: " +
    "the interface answers in two ways - chemically, through the kinetics " +
    "we met in Lesson 5, and physically, because every current depletes " +
    "the solution next to the electrode. This lesson is about the " +
    "transient, time-dependent answer and the steady state it grows " +
    "into, and the three workhorse experiments that live in between: " +
    "chronoamperometry, chronopotentiometry and coulometry.",
  order: 8,
  minutes: 58,
  mcq: lesson8Mcq,
  intro: [
    {
      kind: "para",
      text:
        "In Lesson 4 we wrote flux equations and limiting currents. In " +
        "Lesson 5 we described how fast an electrode reaction can go. " +
        "Both were mostly about what happens once a reaction has run " +
        "long enough for the concentration profile near the electrode to " +
        "stop changing. This lesson looks at the process before that: " +
        "the first milliseconds, seconds and minutes after you switch on " +
        "a potential or a current, while the diffusion layer is still " +
        "being built.",
    },
    {
      kind: "para",
      text:
        "That transient regime is not just a nuisance. It carries " +
        "information the steady state cannot give you: diffusion " +
        "coefficients from the Cottrell slope, double-layer capacitance " +
        "from the first instant of charging, mechanism from the way a " +
        "current decays. Following Bagotsky ch.11-12 and Bard & " +
        "Faulkner ch.5, we first work out what a step of potential or " +
        "current does to the concentration at the electrode, then turn " +
        "that into the three classic techniques, and finish with " +
        "coulometry, where the time-integral of the current becomes the " +
        "quantity of interest.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "Switch on a current and the electrode surface first changes " +
        "concentration, then relaxes to a steady state; the shape of " +
        "that relaxation, and its time-integral, are measurements - " +
        "chronoamperometry, chronopotentiometry and coulometry each " +
        "read a different feature of the same transient.",
    },
  ],
  sections: [
    {
      id: "why-transient",
      tone: "azure",
      title: "Why the answer takes time",
      minutes: 6,
      summary:
        "A current cannot change the electrode surface instantly: ions " +
        "must diffuse, migrate or be stirred to the surface. The " +
        "solution near the electrode therefore evolves in time, and so " +
        "do the measured current and potential.",
      keyPoints: [
        "Drawing current removes reactant (or deposits product) at the electrode surface, so surface concentrations differ from the bulk.",
        "The concentration change spreads outward as a diffusion layer whose thickness grows roughly as sqrt(Dt).",
        "Any measured current or potential is therefore time-dependent until the diffusion layer stops growing.",
        "Against that slow chemistry sits the fast charging of the double layer, which dominates the very first instants.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Take a quiescent solution and a flat electrode held at a " +
            "potential that drives a reduction. In the first instant the " +
            "surface is still the equilibrium surface concentration, " +
            "because nothing has had time to move. Then the surface " +
            "reactant is consumed faster than the bulk can deliver more, " +
            "so its surface concentration starts to fall. The depleted " +
            "zone pokes deeper into the solution as time passes - the " +
            "diffusion layer thickens. Far from the electrode the " +
            "concentration is still the bulk value; between the two is " +
            "a gradient that does the transport work.",
        },
        {
          kind: "para",
          text:
            "The thicker the layer, the gentler the gradient, and the " +
            "gentler the gradient the smaller the flux of new reactant " +
            "arriving. So the current is largest at the moment of the " +
            "step and decays as the diffusion layer grows. Give it an " +
            "order-of-magnitude estimate: a diffusion length `l` after " +
            "time `t` is set by `l² ≈ Dt`, so the layer grows as " +
            "`sqrt(t)` and the current, proportional to the gradient " +
            "`C/l`, falls as `1/sqrt(t)`:",
        },
        {
          kind: "formula",
          tex: String.raw`\delta(t) \approx \sqrt{D t}, \qquad i(t) \propto \frac{1}{\delta(t)} \propto t^{-1/2}`,
          caption:
            "The scaling behind every transient experiment: the " +
            "diffusion layer grows like the square root of time, so " +
            "the diffusion-controlled current decays like the inverse " +
            "square root of time.",
        },
        {
          kind: "para",
          text:
            "There is one more fast process hiding in the same moment. " +
            "The double layer behaves like a small capacitor, so part of " +
            "the current that flows right after a potential step is " +
            "simply charging it up. That charging current decays with the " +
            "cell's time constant `RC` - the electrode resistance `R` " +
            "times the double-layer capacitance `C` - and is gone within " +
            "a few time constants, long before the diffusion tail " +
            "relaxes. Separating the fast capacitive part from the slow " +
            "faradaic part is one of the practical arts of this lesson.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The first microseconds are not chemistry",
          body:
            "Immediately after a potential step the measured current is " +
            "dominated by charging of the double layer, not by the " +
            "electrode reaction. Wait a few `RC` before trusting the " +
            "faradaic part, or fit and subtract the capacitive tail.",
        },
      ],
    },
    {
      id: "cottrell",
      tone: "indigo",
      title: "Planar diffusion after a potential step: the Cottrell equation",
      minutes: 8,
      summary:
        "Step the potential to a fully mass-transfer-limited value and " +
        "the current follows the Cottrell equation: it falls as " +
        "1/sqrt(t), and a plot against t^(-1/2) is a straight line.",
      keyPoints: [
        "For a large planar electrode in unstirred solution, the surface reactant is driven to zero at a mass-transfer-limiting step.",
        "The current then obeys Cottrell: i = nFAC sqrt(D)/(pi t)^{1/2}.",
        "i plotted against t^{-1/2} is linear through the origin; its slope gives D, C, or A.",
        "The surface concentration is set by the potential through Nernst's equation; the potential only fixes how low it can go.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The cleanest experiment of the lesson is the potential " +
            "step. Hold the electrode at a potential where nothing " +
            "reacts. At `t = 0` jump the potential to a value deep in " +
            "the mass-transfer-limited region, so every ion that reaches " +
            "the surface is consumed immediately: the surface " +
            "concentration of reactant falls to zero. From then on the " +
            "current is limited only by how fast diffusion can replace " +
            "what is consumed.",
        },
        {
          kind: "para",
          text:
            "Solving the diffusion equation for that boundary condition " +
            "(Fick's second law with a semi-infinite linear region in " +
            "Lesson 4's language) gives the Cottrell equation:",
        },
        {
          kind: "formula",
          tex: String.raw`i(t) = \frac{n F A C \sqrt{D}}{\sqrt{\pi t}}`,
          caption:
            "Cottrell equation. The current after a potential step to " +
            "the mass-transfer limit: proportional to the concentration " +
            "and the area, to the square root of the diffusion " +
            "coefficient, and inversely proportional to the square root " +
            "of time.",
        },
        {
          kind: "para",
          text:
            "Three consequences matter in practice. First, a plot of " +
            "`i` against `1/sqrt(t)` is a straight line through the " +
            "origin, and its slope delivers `D`, `C`, or the area `A` " +
            "- the usual way a diffusion coefficient is measured. Second, " +
            "the current decays without a plateau, because the " +
            "diffusion layer for a flat, large electrode never stops " +
            "growing. Third, the surface concentration really is pinned " +
            "near zero only because we stepped deep enough; a smaller " +
            "step leaves a nonzero surface concentration and a reduced " +
            "current, scaled by the Nernst equilibrium.",
        },
        {
          kind: "worked",
          title: "Reading a diffusion coefficient off a step",
          given:
            "A planar electrode of area A = 1.00 cm² is stepped at a " +
            "potential that reduces a 1-electron reactant at bulk " +
            "concentration C = 1.00 mmol/L = 1.00 x 10^-6 mol/cm³. At " +
            "t = 10.0 s the current is 0.054 A. F = 96485 C/mol.",
          steps: [
            String.raw`i(t)\,\sqrt{\pi t} = n F A C \sqrt{D} \;\Rightarrow\; 0.054 \times \sqrt{10\pi} = 96485 \times 1 \times 1.00 \times 10^{-6} \sqrt{D}`,
            String.raw`0.054 \times 5.60 = 0.303 \;\Rightarrow\; 96485 \times 10^{-6} = 0.0965`,
            String.raw`\sqrt{D} = \frac{0.303}{0.0965} = 3.14 \;\Rightarrow\; D \approx 9.9 \times 10^{-6}\ \mathrm{cm^2\,s^{-1}}`,
          ],
          result:
            "D is about 1 x 10^-5 cm²/s, the size expected for a small " +
            "ion in water. One current at one time is enough to pin " +
            "down D - this is the working formula behind the experiment.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Faradaic current vs charging current",
          body:
            "The current a potentiostat records after a step is the sum " +
            "of the faradaic current that does chemistry and the " +
            "capacitive current that charges the double layer. The " +
            "capacitive term dies quickly (RC); the faradaic Cottrell " +
            "tail dies slowly (t^-1/2). Long after the step, what " +
            "remains is the chemistry you wanted.",
        },
      ],
    },
    {
      id: "microelectrodes",
      tone: "violet",
      title: "Small electrodes and steady states",
      minutes: 7,
      summary:
        "At a sufficiently small electrode, diffusion arrives from all " +
        "sides and a true steady state forms: the current levels off " +
        "instead of decaying.",
      keyPoints: [
        "Around a microelectrode the diffusion field is radial, so fresh solution arrives from the whole sphere, not just from above.",
        "The diffusion layer reaches a steady thickness comparable to the electrode radius, and the current stops decaying.",
        "Steady-state current at a disk of radius r is i = 4nFDCr; for a sphere of radius r it is i = 4 pi n F D C r.",
        "Small electrodes draw tiny currents, so ohmic drop is small and measurements work in resistive media with no added electrolyte.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The Cottrell decay happens because the electrode is large " +
            "compared with the diffusion layer: fresh solution can only " +
            "arrive from directly above. Shrink the electrode, and the " +
            "geometry changes. Around a micrometre-scale wire or disk, " +
            "the depleted zone spreads out in every direction, like a " +
            "sphere. Once that sphere of depletion has grown to roughly " +
            "the electrode's own size, the picture stops changing: fresh " +
            "reactant arrives as fast as it is consumed, and the current " +
            "settles to a steady value instead of decaying as t^(-1/2).",
        },
        {
          kind: "formula",
          tex: String.raw`i_{\text{ss}} = 4\, n F D C r \quad (\text{inlaid disk of radius } r); \qquad i_{\text{ss}} = 4\pi n F D C r \quad (\text{sphere of radius } r)`,
          caption:
            "Steady-state limiting currents at microelectrodes. No " +
            "time appears: the diffusion field has reached its " +
            "time-independent shape.",
        },
        {
          kind: "para",
          text:
            "The price is a tiny current - nanoamperes or less for a " +
            "micrometre tip - and the reward is a faster, cleaner " +
            "experiment. Microelectrodes are why you can do " +
            "voltammetry in organic solvents or without any supporting " +
            "electrolyte: the currents are so small that the voltage " +
            "lost to solution resistance, `iR`, stays negligible. The " +
            "same physics, scaled back up, explains how a scanning " +
            "nanoelectrode can image concentration with sub-micrometre " +
            "resolution.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Transient planar, steady spherical",
          body:
            "Big, flat electrodes see planar diffusion and a decaying " +
            "current. Micrometre electrodes see radial diffusion and " +
            "reach a true steady state. Same ions, same diffusion " +
            "coefficient - the geometry decides which regime you are in.",
        },
      ],
    },
    {
      id: "polarization-curve",
      tone: "rose",
      title: "The steady-state polarization curve",
      minutes: 7,
      summary:
        "Record current versus steady potential and the curve you get - " +
        "the polarization curve - maps the three faces of an " +
        "electrode: kinetics at low overpotential, a mixed region, and " +
        "a mass-transfer plateau.",
      keyPoints: [
        "A polarization curve plots the steady current density against the electrode potential.",
        "Near equilibrium the current is small and kinetics plus diffusion both matter; at larger driving forces the rate-determining bottleneck switches.",
        "At the foot of the curve the kinetics are slowest and current is limited by activation; at high overpotential the current is capped by mass transfer.",
        "The practical troubles are ohmic drop in the electrolyte and the pH or concentration drift that comes with nonzero current.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Chrono methods ask a question and wait for time to answer. " +
            "The polarization curve asks the question directly: push the " +
            "potential to a value, hold it until the current is " +
            "steady, record it, step further, hold, record. Plot the " +
            "last point of each hold against the potential and the " +
            "shape of the resulting curve carries all three pieces of " +
            "Lesson 5's story.",
        },
        {
          kind: "para",
          text:
            "Close to the equilibrium potential the current is small and " +
            "both the rate constant and the concentration gradient have " +
            "a say. Far from equilibrium the balance tips. If the " +
            "intrinsic electron-transfer step is slow, the reaction " +
            "starves for activation energy: the current rises steeply " +
            "with potential, as Tafel told us in Lesson 5. If the " +
            "electron transfer is fast, the surface always reacts what " +
            "it is offered and the current is capped by how much " +
            "diffusion can supply: a plateau at the limiting current of " +
            "Lesson 4.",
        },
        {
          kind: "formula",
          tex: String.raw`\eta = \eta_{\text{act}} + \eta_{\text{conc}} + iR_{\text{s}}`,
          caption:
            "The applied overpotential is spent in three places: " +
            "activation (making the electron transfer fast enough), " +
            "concentration (maintaining the surface-to-bulk gradient), " +
            "and ohmic loss in the solution. A polarization measurement " +
            "is the art of keeping only the term you care about.",
        },
        {
          kind: "para",
          text:
            "Two practical warnings. First, the measured potential is " +
            "always a little off because of the voltage the current " +
            "drops across the solution resistance, `iR` - the " +
            "correction is largest exactly where the current is biggest. " +
            "Second, drawing current changes the solution itself: gas " +
            "bubbles, pH shifts and depletion mean the experiment is " +
            "reading a different cell than the one you drew. Reference " +
            "electrodes, supporting electrolyte and, at high current, " +
            "forced stirring exist to hold those two effects down.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "An uncompensated iR error distorts the curve",
          body:
            "The potential the potentiostat thinks it applied is `E`, " +
            "but the electrode actually sees `E - iR`. At high current " +
            "the gap can be hundreds of millivolts, and a Tafel slope " +
            "measured that way is simply wrong. Stirr, add supporting " +
            "electrolyte, or use a positive-feedback compensation.",
        },
      ],
    },
    {
      id: "chronoamperometry",
      tone: "coral",
      title: "Chronoamperometry: step the potential, watch the current",
      minutes: 8,
      summary:
        "Chronoamperometry records current against time after a " +
        "potential step. A second reverse step measures how much of the " +
        "product then comes back off the surface.",
      keyPoints: [
        "Chronoamperometry: potential is stepped, current is recorded as a function of time.",
        "The forward decay follows Cottrell; deviations from Cottrell diagnose kinetics or adsorption.",
        "A double-step experiment reverses the step and watches the product of the first step get re-oxidised or re-reduced.",
        "Capacitive charging is a decaying tail at short times: a practical lower limit on the time window.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Chronoamperometry is simply the Cottrell experiment with a " +
            "recorder attached: step the potential, log the current " +
            "against time. What you get depends on what you compare " +
            "your trace to. If it obeys the Cottrell shape, the " +
            "reaction was mass-transfer controlled and you take `D` " +
            "from the slope. If the trace sits below the Cottrell " +
            "expectation, the electron-transfer kinetics were slow " +
            "enough to matter, and you have found the rate of the " +
            "coupled chemistry. If it follows Cottrell only after a " +
            "delay, something has to adsorb or a precursor reaction has " +
            "to run first.",
        },
        {
          kind: "para",
          text:
            "The double potential step turns the same idea into a " +
            "mechanism probe. In the first step you generate a product " +
            "at the electrode. Before that product has had time to " +
            "diffuse far away, you jump the potential the other way, so " +
            "the product is converted straight back. The current of the " +
            "second step flows in the opposite sense and decays as the " +
            "generated product is exhausted. The ratio of the reverse " +
            "charge to the forward charge tells you whether the first " +
            "step's product survived long enough to be converted back, " +
            "or was eaten by a chemical side reaction in between - a " +
            "classic EC mechanism test.",
        },
        {
          kind: "formula",
          tex: String.raw`i_{\text{rev}}(\tau) \propto t^{-1/2}\; \text{for pure diffusion}; \qquad \frac{Q_{\text{rev}}}{Q_{\text{fwd}}} = 1 \;(\text{no chemistry}), < 1\;(\text{coupled reaction})`,
          caption:
            "Double-step chronoamperometry. If no homogeneous " +
            "chemistry eats the product, all of it returns and the " +
            "charge ratio is unity. A smaller ratio means a side " +
            "reaction intervened.",
        },
        {
          kind: "para",
          text:
            "Timing decides everything. Wait too briefly after the " +
            "first step and the reverse step catches a thin, " +
            "highly-concentrated product layer; wait too long and the " +
            "product has diffused beyond recovery. Scanning the wait " +
            "time maps the homogeneous reaction's clock, in much the " +
            "same way a stopped-flow experiment does, only with the " +
            "electrode as the trigger.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Potential step vs current step",
          body:
            "In chronoamperometry the potential is the knob and the " +
            "current is the signal. Swap the roles and you have " +
            "chronopotentiometry, the next section. Both probe the same " +
            "diffusion layer; the curve they draw is different.",
        },
      ],
    },
    {
      id: "chronopotentiometry",
      tone: "amber",
      title: "Chronopotentiometry: step the current, watch the potential",
      minutes: 8,
      summary:
        "Force a constant current and the potential of the working " +
        "electrode drifts as the surface concentration is drained; the " +
        "time at which it snaps to a new value is the transition time.",
      keyPoints: [
        "Chronopotentiometry fixes the current and records the potential.",
        "As the surface concentration of reactant falls toward zero, the Nernst potential drifts; when it hits the next available reaction the potential jumps.",
        "The Sand equation links current, concentration and transition time: i sqrt(tau) is constant for a given system.",
        "Because current is what is fixed, this is also the natural setting for controlled-current coulometry.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Chronopotentiometry is the mirror image of " +
            "chronoamperometry. Here the experiment fixes the current " +
            "and records what the electrode potential does in " +
            "response. At first the potential drifts slowly: the " +
            "surface concentration of reactant falls and, through the " +
            "Nernst equation, drags the potential with it. Then the " +
            "surface reactant is nearly exhausted, the potential snaps " +
            "to whatever the next available chemistry demands, and the " +
            "record shows a sharp shift. That moment is the transition " +
            "time `τ`.",
        },
        {
          kind: "formula",
          tex: String.raw`i\,\tau^{1/2} = \frac{n F A C \sqrt{\pi D}}{2}`,
          caption:
            "The Sand equation. For a given electrode, solution and " +
            "current, the transition time is fixed; more precisely, " +
            "`i sqrt(τ)` is constant. Doubling the current quarters the " +
            "transition time.",
        },
        {
          kind: "para",
          text:
            "So the experiment inverts Cottrell nicely. Instead of " +
            "reading a current against time at a fixed potential, you " +
            "read a potential against time at a fixed current. The two " +
            "carry the same information about `D` and `C`, so choosing " +
            "between them is a practical matter: chronopotentiometry is " +
            "simple to run and has less charging-current interference at " +
            "short times, but the potential record depends directly on " +
            "the kinetics, so it is less clean when you want purely " +
            "mass-transfer answers.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Two ways to cast the same lock",
          body:
            "Cottrell and Sand are the same physics - Fick's second law " +
            "with different boundary conditions. Step the potential and " +
            "`i` falls as `t^{-1/2}`; step the current and `E` drifts " +
            "until the surface reactant runs out at `τ`. Each is useful " +
            "when the other is awkward.",
        },
      ],
    },
    {
      id: "coulometry",
      tone: "emerald",
      title: "Coulometry: letting charge do the counting",
      minutes: 7,
      summary:
        "If every electron counted does exactly one reaction, the " +
        "current integrated over time is the amount of chemistry. " +
        "Coulometry turns that bookkeeping into an analytical " +
        "measurement.",
      keyPoints: [
        "The total charge Q = integral of i dt corresponds to n = Q/(zF) moles of a reaction that runs at 100 % current efficiency.",
        "Controlled-potential coulometry: hold the potential where the target reaction runs quantitatively and integrate the current until it decays to zero.",
        "Controlled-current coulometry: run at a fixed current and time how long until the titration endpoint is reached; this is coulometric titration.",
        "The two demands are 100 % current efficiency and a stable endpoint sensor.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Every method so far has extracted a property of the " +
            "solution from the shape of a current-time curve. Coulometry " +
            "keeps only the total. If the reaction has unit current " +
            "efficiency - every electron causes exactly one molecule to " +
            "react - then the total charge passed is a mole counter:",
        },
        {
          kind: "formula",
          tex: String.raw`Q = \int_0^t i\,dt' = z F n`,
          caption:
            "Faraday's law in integral form. The charge passed at unit " +
            "current efficiency is the number of moles of electrons, " +
            "times F, times the charge number of the reaction.",
        },
        {
          kind: "para",
          text:
            "Two controlled ways to deliver that charge. In " +
            "controlled-potential coulometry the potential is set deep " +
            "in the region where only the target reaction runs, and the " +
            "current is high at first and decays as the reactant is " +
            "used up, much like the Cottrell tail but ending when the " +
            "analyte is exhausted. The total charge, integrated until " +
            "the current reaches baseline, gives the amount present. In " +
            "controlled-current coulometry a steady current generates a " +
            "reagent in situ - a titrant, but produced by electrons on " +
            "demand - until an indicator electrode or a pH probe " +
            "signals the endpoint. Knowing the current and the time to " +
            "the endpoint gives the moles of titrant, hence of analyte. " +
            "This is coulometric titration.",
        },
        {
          kind: "para",
          text:
            "Both variants lean on two conditions that every coulometric " +
            "claim quietly assumes. The first is 100 % current " +
            "efficiency: no side reactions, no solvent breakdown, no " +
            "oxygen leaking in. The second is an endpoint that can be " +
            "recognised unambiguously. When both hold, the result is " +
            "absolute - it needs no calibration against a standard, " +
            "because the Faraday constant is the standard.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Current efficiency is the whole experiment",
          body:
            "If 95 % of your charge does the target reaction and 5 % " +
            "boils the solvent, every amount you report is 5 % high. " +
            "Coulometry is rigorous precisely because the efficiency has " +
            "to be defended experimentally - by blank runs, colorimetry " +
            "of products, or the current decaying exactly as the " +
            "stoichiometry predicts.",
        },
      ],
    },
    {
      id: "choosing",
      tone: "teal",
      title: "Choosing a transient method",
      minutes: 5,
      summary:
        "Chronoamperometry, chronopotentiometry, coulometry, or a " +
        "simple polarization curve: which one answers your question " +
        "most cleanly?",
      keyPoints: [
        "If you want D or adsorption information and can step the potential, use chronoamperometry.",
        "If the chemistry is controlled by the rate you feed it, controlled-current methods such as chronopotentiometry or coulometry fit naturally.",
        "If the question is 'how much analyte is there', coulometry is the direct route.",
        "If the question is 'how fast does the reaction go at each potential', only a steady-state polarization curve will tell you.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "All four techniques are the same physics asked four ways. " +
            "A potential step fixes the surface concentration through " +
            "the Nernst equation and lets the current report the flux; " +
            "a current step fixes the flux and lets the potential " +
            "report the state of the surface. Coulometry is either of " +
            "those played to exhaustion. The polarization curve gives " +
            "up the time information entirely and keeps only the " +
            "steady-state map.",
        },
        {
          kind: "table",
          head: ["Method", "What is fixed", "What you record", "Typical use"],
          widths: [1.4, 1.4, 1.6, 2],
          rows: [
            ["Chronoamperometry", "Potential", "Current vs time", "D from Cottrell slope; EC mechanism tests"],
            ["Chronopotentiometry", "Current", "Potential vs time", "Transition times, Sand equation, mechanistic timing"],
            ["Potential-step coulometry", "Potential", "Integrated charge", "Total analyte present"],
            ["Controlled-current coulometry", "Current", "Time to endpoint", "Coulometric titrations"],
            ["Steady polarization", "Potential (step and hold)", "Steady current", "Kinetics vs mass-transfer limits"],
          ],
        },
        {
          kind: "para",
          text:
            "The choice rarely comes down to physics and almost always " +
            "comes down to the question. Mechanism? Step the potential " +
            "twice and watch what comes back. Concentration? Integrate " +
            "the current. Rate constants? A polarization curve with good " +
            "iR control. Everything else is instrumentation.",
        },
        {
          kind: "worked",
          title: "Cottrell decay at the 10-second mark",
          given:
            "A 1-electron reactant at C = 2.0 mM (= 2.0e-6 mol/cm3) is reduced at a planar electrode of area 1.00 cm2; D = 8.0e-6 cm2/s.",
          steps: [
            String.raw`i(t) = n F A C \sqrt{D}/\sqrt{\pi t}`,
            String.raw`i(10) = 96485 \times 1.00 \times 1.00 \times 2.0\times10^{-6} \times \sqrt{8.0\times10^{-6}}/\sqrt{10\pi}`,
            String.raw`= 96485 \times 2.0\times10^{-6} \times 2.83\times10^{-3}/5.60 \approx 9.8\times10^{-2}\ \mathrm{A}`,
          ],
          result:
            "About 98 mA at 10 s. Cutting the time to 2.5 s multiplies the current by 2: the t^{-1/2} law is the Cottrell test.",
        },
        {
          kind: "worked",
          title: "Sand transition time at fixed current",
          given:
            "The same electrode is now chronopotentiometried at i = 50 mA. Use the Sand equation to find the transition time tau.",
          steps: [
            String.raw`i\,\tau^{1/2} = n F A C \sqrt{\pi D}/2`,
            String.raw`50\times10^{-3}\,\tau^{1/2} = 96485 \times 1.00 \times 1.00 \times 2.0\times10^{-6} \times \sqrt{\pi \cdot 8.0\times10^{-6}}/2`,
            String.raw`= 96485 \times 2.0\times10^{-6} \times 5.01\times10^{-3}/2 = 4.84\times10^{-4}`,
            String.raw`\tau^{1/2} = 4.84\times10^{-4}/0.050 = 9.68\times10^{-3} \;\Rightarrow\; \tau \approx 9.4\times10^{-5}\ \mathrm{s}`,
          ],
          result:
            "Tau is about 94 us - very short because the flux was high. Doubling the concentration would stretch tau fourfold, exactly as the Sand equation says.",
        },
      ],
      cta: {
        title: "Ready to sweep the potential?",
        body:
          "The methods of this lesson hold the potential still and let " +
          "time do the work. Next lesson we sweep it, and the voltammogram " +
          "becomes the sharpest tool of the classical electrochemist.",
        href: "/lessons/lesson-8/quiz",
        linkLabel: "Take the Lesson 8 quiz",
        secondaryHref: "/lessons/lesson-9",
        secondaryLabel: "Go to Lesson 9",
      },
    },
  ],
};
