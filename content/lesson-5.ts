// Lesson 5 - Electrode kinetics and polarization.
//
// Source syllabus: Bagotsky ch.6 (Polarization of Electrodes), ch.13
// (Multistep Electrode Reactions) and ch.14 (Some Aspects of Electrochemical
// Kinetics), with Bard & Faulkner ch.3 (Kinetics of Electrode Reactions). The
// chapters set the coverage and the numbers; every sentence, formula and
// question here is original.

import type { Lesson } from "./types";
import { lesson5Mcq } from "./lesson-5.mcq";

export const lesson5: Lesson = {
  slug: "lesson-5",
  label: "Lesson 5",
  title: "Electrode kinetics and polarization",
  summary:
    "Lesson 4 asked how fast the solution can carry reactant to the " +
    "surface. This lesson asks the next question: once it is there, how " +
    "willingly does the electrode turn it into product? The answer is the " +
    "Butler-Volmer equation. From it come the Tafel slope, the transfer " +
    "coefficient and the exchange current - three numbers that tell a " +
    "fast reaction from a slow one.",
  order: 5,
  minutes: 60,
  mcq: lesson5Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Lesson 4 ended with a limit: an electrode can only use up " +
        "reactant as fast as a thin film at its surface is refreshed. " +
        "That limit is real, but it is only one of two brakes on an " +
        "electrode reaction. The other sits at the interface itself. " +
        "Even when the solution delivers reactant as fast as anyone " +
        "could wish, moving electrons across the metal-solution " +
        "boundary can still be slow, and the electrode potential has " +
        "to be pushed away from its equilibrium value to make the " +
        "reaction run at the required rate. That shift is " +
        "**polarization**, also called overpotential, and the science " +
        "of it is **electrode kinetics**.",
    },
    {
      kind: "para",
      text:
        "Thermodynamics told us *whether* a reaction can run and *where* " +
        "it stops. It said nothing about *how fast*. A reaction with a " +
        "comfortable equilibrium potential may still crawl along at a " +
        "current a million times smaller than a neighbouring reaction " +
        "whose thermodynamics are barely better. The difference is all " +
        "about speed. Following Bagotsky ch.6, 13 and 14 and Bard ch.3, " +
        "this lesson builds the words and numbers for that difference: " +
        "**partial currents**, the **Butler-Volmer equation**, the " +
        "**Tafel equation**, the **transfer coefficient**, the " +
        "**exchange current density**, and what happens when the " +
        "kinetic brake and the diffusion brake both press at once.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "A reaction's natural speed comes down to one number, the " +
        "**exchange current density** i0 - the two-way current always " +
        "flowing at equilibrium. The Butler-Volmer equation turns that " +
        "number into the polarization you have to pay to drive a net " +
        "current.",
    },
  ],
  sections: [
    {
      id: "kinetics-and-overpotential",
      tone: "azure",
      title: "Why thermodynamics is not enough",
      minutes: 7,
      summary:
        "Thermodynamics decides whether a reaction may run. Kinetics " +
        "decides whether it really does, and how fast. The measurable " +
        "sign of a slow reaction is polarization - the shift of the " +
        "electrode potential away from equilibrium when current flows.",
      keyPoints: [
        "Reaction rate is proportional to current, but the current is set from outside, so the rate is not a property of the reaction; the polarization at a given current density is.",
        "Polarization ΔE is how far the electrode potential moves from its equilibrium value; anodic currents push it positive, cathodic currents negative.",
        "Slow reactions show high polarization; fast reactions reach the same current with little polarization.",
        "Changes in the concentration of the reactants cause concentration polarization; every other source of reluctance is grouped as activation polarization.",
        "An electrode runs under kinetic control, diffusion control, or mixed control, depending on which brake is stronger.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Thermodynamics gave us an equilibrium potential and a " +
            "direction for spontaneous change. That is not the whole " +
            "story. It describes only the *bottom of the valley* - " +
            "the state the system would reach if it had unlimited " +
            "time. It says a cathodic reaction is *possible* below " +
            "the equilibrium potential and an anodic reaction above " +
            "it, and then it stops. It says nothing about whether the " +
            "reaction will really happen, or at what speed. Those " +
            "questions belong to kinetics.",
        },
        {
          kind: "para",
          text:
            "The natural measure of an electrode reaction's speed is " +
            "the current it carries. If a reaction converts `v` moles " +
            "of reactant per square centimetre per second, Faraday's " +
            "laws fix the current density:",
        },
        {
          kind: "formula",
          tex: String.raw`i = nFv`,
          caption:
            "Reaction rate turned into current density: v is the rate " +
            "of the electrode reaction (mol cm⁻² s⁻¹) and n the " +
            "electrons per step. Read the equation the other way and " +
            "a measured current is a measured reaction rate.",
        },
        {
          kind: "para",
          text:
            "There is a catch. The current in a galvanic cell is not " +
            "chosen by the reaction. It is **impressed** from outside " +
            "and can be set anywhere between zero and whatever the " +
            "system will bear. So the current on its own says little " +
            "about how willing the reaction is. What *does* carry that " +
            "information is the price the imposed current asks for: " +
            "the **polarization**, the shift of the electrode " +
            "potential away from its equilibrium value.",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E = E - E_{\mathrm{eq}}`,
          caption:
            "Polarization, also called overpotential (often given the " +
            "symbol eta). Anodic currents give ΔE > 0, cathodic " +
            "currents ΔE < 0. At a stated current density, a small " +
            "polarization means a fast reaction and a large one means " +
            "a slow reaction.",
        },
        {
          kind: "para",
          text:
            "The word polarization is used in three related ways in " +
            "electrochemistry: the *phenomenon* of a potential changing " +
            "under current, the *operation* of forcing that change by " +
            "passing current, and the *number* ΔE that measures it. " +
            "Remember the third - it is the quantity plotted on every " +
            "polarization curve. At a given current density, different " +
            "reactions polarize by wildly different amounts, from less " +
            "than `1 mV` to more than `2 V`. The same reaction also " +
            "polarizes differently on different electrode materials, " +
            "so *a reaction* always means a reaction on a stated " +
            "electrode.",
        },
        {
          kind: "para",
          text:
            "Two different mechanisms produce polarization, and it " +
            "pays to keep them apart from the start. Whenever current " +
            "flows, reactants are used up and products pile up at the " +
            "surface, so the *local* concentrations `c`<sub>S</sub> " +
            "drift away from the bulk values `c`<sub>V</sub>. The " +
            "Nernst equation then puts the equilibrium potential " +
            "somewhere new, and the electrode potential follows. This " +
            "is **concentration polarization** `ΔE`<sub>d</sub>, the " +
            "subject of Lesson 4 and of section 7 below. Every other " +
            "source of reluctance - the finite speed of electron " +
            "transfer itself, adsorbed intermediates, starting a new " +
            "phase - is bundled under **activation polarization**.",
        },
        {
          kind: "table",
          head: ["Mode", "What limits the rate", "Current name"],
          widths: [1, 3, 1],
          rows: [
            [
              "Kinetic control",
              "The electron-transfer step at the interface is the slowest; surface concentrations stay close to the bulk values.",
              "i_k",
            ],
            [
              "Diffusion control",
              "Delivery of reactant is the slowest; the interface keeps up with almost no activation difficulty.",
              "i_d",
            ],
            [
              "Mixed control",
              "Both matter, and the real current is smaller than either one would allow on its own.",
              "i",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "key",
          title: "The central promise of this lesson",
          body:
            "For simple redox reactions - one or more electrons " +
            "transferred, unit stoichiometry, first order in the " +
            "reactant, no solid or gas product - all of activation " +
            "polarization falls into one compact equation with just " +
            "two parameters. Everything that follows comes from that " +
            "equation.",
        },
      ],
    },
    {
      id: "energy-barrier-transfer",
      tone: "indigo",
      title: "Energy barriers and the transfer coefficient",
      summary:
        "An electrode reaction has to climb an energy barrier, and the " +
        "electrode potential tilts that barrier: part of the electrical " +
        "energy lowers the forward barrier and the rest raises the " +
        "reverse one. How that energy splits is the transfer " +
        "coefficient.",
      minutes: 7,
      keyPoints: [
        "Rate constants follow the Arrhenius law k = B exp(-A/RT); the exponential makes rates very sensitive to how high the barrier is.",
        "A reaction goes through an activated complex at the top of a potential-energy barrier; the height of that barrier is the activation energy.",
        "The electrode potential tilts the barrier unevenly: a fraction α lowers the forward barrier and β = n - α raises the reverse one.",
        "The transfer coefficient alpha shows where the transition state sits along the reaction coordinate; it lies between 0 and 1, usually near 0.5.",
        "The standard rate constant k0 is the fingerprint of a reaction: it does not depend on potential or on concentration, and it runs from about 1-10 cm/s down to below 10⁻⁹ cm/s.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A reaction is just particles climbing over an energy " +
            "hill. This section asks what the electrode potential does " +
            "to the height of that hill. The classical picture of a " +
            "reaction as a barrier crossing gives the answer, and it " +
            "is why the current depends so strongly on the potential.",
        },
        {
          kind: "para",
          text:
            "Most rate constants rise with temperature, and Arrhenius " +
            "wrote that dependence down in 1889:",
        },
        {
          kind: "formula",
          tex: String.raw`k = B\,e^{-A/RT}`,
          caption:
            "The Arrhenius equation. B is the pre-exponential factor " +
            "and A the activation energy (enthalpy). Plot ln k against " +
            "1/T and you get a straight line whose slope gives A - the " +
            "height of the barrier the reacting particles have to " +
            "climb.",
        },
        {
          kind: "para",
          text:
            "The barrier picture is a curve of potential energy against " +
            "a *reaction coordinate*: a valley of reactants, a hill, " +
            "and a valley of products. The top of the hill is the " +
            "**activated complex**, and the height of the climb is the " +
            "activation energy. The reverse reaction has to climb its " +
            "own hill, and the difference between the two heights is " +
            "the energy the reaction releases. Standard " +
            "transition-state theory turns the same picture into a " +
            "rate constant `k = (kT/h) exp(-ΔG‡/RT)` and gets " +
            "Arrhenius back as a special case.",
        },
        {
          kind: "para",
          text:
            "Now charge the electrode. Applying a potential changes " +
            "the energy of the electron, and because the electron sits " +
            "on one side of the reaction, the potential *tilts* the " +
            "whole energy diagram. Only a fraction `α` of the applied " +
            "electrical energy `F(E - E0′)` is felt by the forward " +
            "barrier; the rest `β` shows up as an equal and opposite " +
            "change in the reverse barrier. Writing the rate constants " +
            "out:",
        },
        {
          kind: "formula",
          tex: String.raw`k_{\mathrm{f}} = k^0 \exp\!\left(-\frac{\alpha F (E - E^{0'})}{RT}\right), \qquad k_{\mathrm{b}} = k_0 \exp\!\left(\frac{\beta F (E - E_0')}{RT}\right)`,
          caption:
            "How the forward and reverse rate constants of a one-step " +
            "reaction depend on potential. Both are anchored at the " +
            "same standard rate constant k0 and formal potential E0'. " +
            "The exponents force both to equal k0 when E = E0'.",
        },
        {
          kind: "para",
          text:
            "The dimensionless **transfer coefficient** `α` is the " +
            "star of this section. It measures the *symmetry of the " +
            "energy barrier* - how far along the reaction coordinate " +
            "the transition state sits, written as the fraction of the " +
            "applied potential energy that helps the forward reaction. " +
            "For a one-electron reaction the two coefficients add up, " +
            "`α + β = 1`, and theory allows any value in " +
            "`0 ≤ α ≤ 1`. In practice most simple reactions sit near " +
            "symmetry: `α` lies between about `0.3` and `0.7`, and " +
            "very often near `0.5`. Reactions with several electrons " +
            "follow the wider bookkeeping `α + β = n`.",
        },
        {
          kind: "para",
          text:
            "The rate constants above are written with a single " +
            "constant `k0` that belongs to no instrument: the " +
            "**standard rate constant**. It is the value both rate " +
            "constants take at the standard potential, and it is as " +
            "close as kinetics gets to an identity card for a " +
            "reaction. It does not depend on which reference " +
            "electrode you use, and not on the concentrations of the " +
            "participants. Its range is huge. The fastest reactions " +
            "reach `1` to `10 cm/s`, while some reductions and " +
            "oxidations crawl at less than `10⁻⁹ cm/s` - about ten " +
            "orders of magnitude from quickest to slowest.",
        },
        {
          kind: "worked",
          title: "How far does a small overpotential move the barrier?",
          given:
            "A one-electron reaction with transfer coefficient α = 0.5 " +
            "is driven at an overpotential of 0.10 V at 298 K (RT = " +
            "2.48 kJ mol⁻¹, F = 96485 C/mol).",
          steps: [
            "The energy the field can contribute to the transfer step is αFη = 0.5 × 96485 × 0.10 = 4824 J/mol.",
            "Compare it with thermal energy RT = 8.314 × 298 = 2478 J/mol: the field supplies about two units of RT.",
            "The rate ratio is k/k0 = exp(αFη/RT) = exp(4824/2478) = exp(1.95).",
            "exp(1.95) is about 7, so the forward rate is roughly seven times faster.",
          ],
          result:
            "A tenth of a volt - ten times smaller than a typical cell " +
            "voltage - makes this reaction seven times faster. The " +
            "exponential is what makes a little polarization go a long " +
            "way.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Transfer coefficient, alpha",
          body:
            "A number between 0 and 1, with no units, that says how " +
            "much of a change in electrode potential goes into " +
            "lowering the forward activation barrier. It also shows " +
            "how symmetric the transition state is: alpha = 0.5 means " +
            "the barrier is symmetric and the anodic and cathodic " +
            "curves are mirror images. Typical values fall between " +
            "0.3 and 0.7, and its partner beta completes the sum " +
            "α + β = n.",
        },
      ],
    },
    {
      id: "butler-volmer",
      tone: "violet",
      title: "The Butler-Volmer equation",
      summary:
        "At equilibrium an electrode still carries a busy but perfectly " +
        "balanced pair of currents. Push the potential either way and " +
        "the two partial currents no longer cancel; their difference " +
        "is the Butler-Volmer equation.",
      minutes: 7,
      keyPoints: [
        "At equilibrium the anodic and cathodic partial currents are equal and opposite; their common value is the exchange current density i0.",
        "As the potential is made more positive the partial anodic current rises and the partial cathodic one falls (and the other way round).",
        "The net current is the difference between the two partial currents. That gives the general kinetic equation with concentration terms, and the Butler-Volmer equation written with polarization.",
        "The transfer coefficients are linked by α + β = n, so the number of electrons fixes their sum.",
        "The current-overpotential curve is the difference of two exponentials: steep near equilibrium, bending into a Tafel line far from it.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "At equilibrium no net current flows, yet reactions never " +
            "really stop. Both statements are true. Putting them " +
            "together gives the equation that all of electrode " +
            "kinetics rests on.",
        },
        {
          kind: "para",
          text:
            "At the equilibrium potential the net current is zero, but " +
            "it is a *dynamic* zero - a busy balance of two opposing " +
            "reactions. Electrons leave the reactant as fast as they " +
            "come back, and the anodic and cathodic **partial current " +
            "densities** `i` (forward) and `i` (reverse) are equal:",
        },
        {
          kind: "formula",
          tex: String.raw`\vec{i} = \overleftarrow{i} = i_0`,
          caption:
            "At equilibrium the two partial current densities are " +
            "equal; their common value is the exchange current " +
            "density i0. No ammeter can read it as a net current - it " +
            "cancels - but it sets the scale for everything that " +
            "follows.",
        },
        {
          kind: "para",
          text:
            "Make the potential more positive and the anodic partial " +
            "current grows while the cathodic one shrinks; make it " +
            "more negative and the reverse happens. The measured net " +
            "current density is simply the difference between the two:",
        },
        {
          kind: "formula",
          tex: String.raw`i = \vec{i} - \overleftarrow{i}`,
          caption:
            "The net external current density is how much the anodic " +
            "partial current exceeds the cathodic one. The whole point " +
            "of kinetics is to write each partial current as a " +
            "function of the potential.",
        },
        {
          kind: "para",
          text:
            "Each partial current follows its own potential-dependent " +
            "rate law. Write the reactant concentrations as " +
            "`c`<sub>Ox</sub> and `c`<sub>Red</sub>, and the rate " +
            "constants in the Arrhenius-with-potential form of the " +
            "last section, and the net current becomes the **general " +
            "kinetic equation**:",
        },
        {
          kind: "formula",
          tex: String.raw`i = nF\Big[k_{\mathrm{red}}\,c_{\mathrm{red}}\,\exp\!\left(\frac{\alpha F E}{RT}\right) - k_{\mathrm{ox}}\,c_{\mathrm{ox}}\exp\!\left(-\frac{\beta F E}{RT}\right)\Big]`,
          caption:
            "The general kinetic equation (Butler, 1924). It holds at " +
            "every potential, and it shows why concentration enters " +
            "kinetics: in the simple case the rate is first order in " +
            "each reactant.",
        },
        {
          kind: "para",
          text:
            "At the equilibrium potential the two terms are equal. " +
            "Call that common value the exchange current density " +
            "`i`<sub>0</sub>, and the same equation can be rewritten " +
            "using only the polarization ΔE, with no explicit " +
            "concentrations: they are hidden inside `i`<sub>0</sub> " +
            "and the equilibrium potential. This is the " +
            "**Butler-Volmer equation**, the workhorse of the field:",
        },
        {
          kind: "formula",
          tex: String.raw`i = i_0\left[\exp\!\left(\frac{\alpha F\,\Delta E}{RT}\right) - \exp\!\left(-\frac{\beta F\,\Delta E}{RT}\right)\right]`,
          caption:
            "The Butler-Volmer (Volmer-Butler) equation for a simple " +
            "one-step reaction. The first exponential is the anodic " +
            "partial current, the second the cathodic; their " +
            "difference is the net current across the whole potential " +
            "range.",
        },
        {
          kind: "para",
          text:
            "For the forward and reverse directions of one reaction, " +
            "the transfer coefficients are not free to choose. Match " +
            "the kinetic expression at the equilibrium potential " +
            "against the thermodynamic Nernst equation and two " +
            "relations are forced on you:",
        },
        {
          kind: "formula",
          tex: String.raw`\alpha + \beta = n, \qquad \frac{k_{\mathrm{ox}}}{k_{\mathrm{red}}} = \exp\!\left(\frac{nFE^{0}}{RT}\right)`,
          caption:
            "The forward and reverse kinetics cannot be chosen " +
            "independently. The first relation fixes the sum of the " +
            "transfer coefficients; the second is the kinetic version " +
            "of the equilibrium constant - the same link between K, " +
            "k_f and k_b that you meet in ordinary chemical kinetics.",
        },
        {
          kind: "para",
          text:
            "Now look at the shape that equation draws. Near " +
            "equilibrium both exponentials are close to one and their " +
            "difference is small, so the current grows roughly in " +
            "step with the push. Far from equilibrium one exponential " +
            "has grown while the other has faded, and the curve " +
            "straightens into a semilogarithmic line. When `α` and " +
            "`β` are equal the curve is perfectly symmetric; when they " +
            "are not, one branch is steeper than the other. Every " +
            "feature of a polarization curve in the rest of this " +
            "lesson comes from these two competing exponentials.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The Butler-Volmer equation in one line",
          body:
            "The net current at an electrode is the difference " +
            "between an anodically speeding-up exponential and a " +
            "cathodically speeding-up one, both anchored at the " +
            "exchange current density. Everything else - Tafel, " +
            "charge-transfer resistance, reversibility - is a limit " +
            "of this one equation.",
        },
      ],
    },
    {
      id: "exchange-current",
      tone: "rose",
      title: "The exchange current density",
      summary:
        "At equilibrium the electrode is not idle: it trades electrons " +
        "in both directions at a rate set by the exchange current. " +
        "This one number, proportional to the standard rate constant, " +
        "says how fast a reaction is.",
      minutes: 7,
      keyPoints: [
        "The exchange current density i0 is the equal anodic and cathodic partial current density at equilibrium - an 'idle current' that never shows up in the external circuit.",
        "i0 is proportional to the standard rate constant k0 and to the reactant concentrations, so it belongs to both the reaction and the solution.",
        "i0 = nF k0 exp(αFE0'/RT) c_ox^(α/n) c_red^(β/n).",
        "It can exceed 10 A/cm² for a very fast couple or fall below 10⁻¹² A/cm² for a very slow one - more than a dozen orders of magnitude.",
        "At small overpotential the charge-transfer resistance Rct = RT/(nF i0) is a direct measure of how fast the reaction is.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "If no net current flows at equilibrium, is the electrode " +
            "doing nothing? Not at all. The two partial reactions keep " +
            "running at full speed, perfectly balanced. How big that " +
            "hidden traffic is, is the single most useful number in " +
            "electrode kinetics.",
        },
        {
          kind: "para",
          text:
            "The **exchange current density** `i`<sub>0</sub> - often " +
            "just called the exchange current - is the value of each " +
            "partial current density when the electrode sits at " +
            "equilibrium. No ammeter can read it, because equal and " +
            "opposite currents cancel. Bard calls it an *idle current*: " +
            "the rate at which charge keeps crossing the interface " +
            "while the engine is in neutral. Its practical importance " +
            "is huge. A large exchange current means a reaction that " +
            "needs only a whisper of overpotential to deliver a decent " +
            "net current; a small one means the same current demands " +
            "a heavy push.",
        },
        {
          kind: "formula",
          tex: String.raw`i_0 = nFk^{0}\exp\!\left(\frac{\alpha FE^{0'}}{RT}\right) c_{\mathrm{ox}}^{\alpha/n}\,c_{\mathrm{red}}^{\beta/n}`,
          caption:
            "How the exchange current density depends on " +
            "concentration. It rises with the concentration of every " +
            "participant and is proportional to k0. The standard rate " +
            "constant k0, by contrast, does not depend on the " +
            "reference electrode or on the concentrations - it is the " +
            "concentration-free fingerprint of the reaction.",
        },
        {
          kind: "para",
          text:
            "The difference between `i`<sub>0</sub> and " +
            "`k`<sub>0</sub> matters. The standard rate constant " +
            "`k`<sub>0</sub> belongs to the reaction alone and is " +
            "measured in cm/s. The exchange current density also " +
            "carries the concentrations, so the *same* reaction is " +
            "faster in a more concentrated solution simply because " +
            "there is more reactant to exchange. Quoting an exchange " +
            "current without the concentrations it was measured at is " +
            "like quoting a resistance without saying whether it is " +
            "per metre.",
        },
        {
          kind: "formula",
          tex: String.raw`i_0 = nFk^{0}c \qquad (c_{\mathrm{ox}} = c_{\mathrm{red}} = c)`,
          caption:
            "The common special case where both forms are present at " +
            "the same concentration c. The exchange current density " +
            "is then simply proportional to the standard rate " +
            "constant, which is why the two numbers are so often " +
            "quoted as if they were the same.",
        },
        {
          kind: "para",
          text:
            "The spread is astonishing. The fastest outer-sphere " +
            "couples have exchange current densities above " +
            "`10 A/cm²`; a very slow reaction such as hydrogen " +
            "evolution on mercury can sit below `10⁻¹² A/cm²` - a " +
            "range of more than fourteen orders of magnitude. That " +
            "range is why the same experiment that measures one " +
            "couple with ease is blind to another: with a tiny " +
            "`i`<sub>0</sub>, even a modest current demands an " +
            "overpotential that may break down the solvent and bring " +
            "unwanted side reactions into play.",
        },
        {
          kind: "para",
          text:
            "Because `i`<sub>0</sub> appears next to the standard " +
            "rate constant, one can stand in for the other wherever " +
            "that is convenient. Under a small push the current is " +
            "proportional to the overpotential, and the constant of " +
            "proportionality is a resistance - the **charge-transfer " +
            "resistance** `R`<sub>ct</sub>. It is the negative " +
            "reciprocal slope of the current-overpotential curve where " +
            "that curve crosses the origin, and because it goes as " +
            "1/`i`<sub>0</sub> it is the most common experimental " +
            "readout of how fast a reaction is:",
        },
        {
          kind: "formula",
          tex: String.raw`R_{\mathrm{ct}} = \frac{RT}{nF}\,\frac{1}{i_0}`,
          caption:
            "Charge-transfer resistance per unit area. A fast " +
            "reaction (large i0) has a small Rct and barely needs " +
            "pushing; a slow one has a large Rct. Electrochemical " +
            "impedance spectroscopy measures Rct by finding the " +
            "low-frequency semicircle of the electrode response.",
        },
        {
          kind: "worked",
          title: "From a standard rate constant to an exchange current",
          given:
            "A one-electron reduction has k0 = 10⁻³ cm/s at 25 °C, and " +
            "both the oxidised and reduced forms are present at 10 mM " +
            "(= 1 x 10⁻⁵ mol/cm³). Take α = β = 0.5, F = 96485 C/mol.",
          steps: [
            "At equal concentrations the exponential factor equals one for each, and the exponents α/n and β/n both equal one half.",
            "Write i0 = nF k0 c. Substituting n = 1, k0 = 10⁻³ cm/s and c = 10⁻⁵ mol/cm³.",
            "i0 = 96485 x 10⁻³ x 10⁻⁵ = 9.6 x 10⁻⁴ A/cm².",
            "That is roughly 1 mA/cm² - a moderately facile reaction.",
          ],
          result:
            "A standard rate constant of 10⁻³ cm/s and millimolar " +
            "concentrations give an exchange current of about 10⁻³ " +
            "A/cm². Change k0 by four orders of magnitude and i0 " +
            "changes with it.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Exchange current versus standard rate constant",
          body:
            "They go together but are not the same thing. The " +
            "standard rate constant k0 (cm/s) is fixed by the " +
            "reaction and is the cleaner kinetic fingerprint. The " +
            "exchange current density i0 (A/cm²) also depends on the " +
            "concentrations and on the equilibrium potential, so " +
            "quote the conditions with the number.",
        },
      ],
    },
    {
      id: "tafel-equation",
      tone: "coral",
      title: "Tafel behaviour and the transfer coefficient",
      summary:
        "Push hard enough and one of the Butler-Volmer exponentials " +
        "takes over. Polarization then grows in a straight line with " +
        "the logarithm of the current - the Tafel line, whose slope " +
        "gives the transfer coefficient and whose intercept gives the " +
        "exchange current.",
      minutes: 7,
      keyPoints: [
        "At high polarization the reverse partial current becomes negligible and the polarization equation becomes the semilogarithmic Tafel equation ΔE = a + b ln i = a + b' log i.",
        "The Tafel slope is b = RT/(αF), or b' = 2.303RT/(αF) ≈ 0.12 V at room temperature for α = 0.5.",
        "The empirical constant a = -(RT/αF) ln i0, so the Tafel line's intercept gives the exchange current density.",
        "The Tafel relation is an approximation for high polarization: the reverse partial current must be less than about 1% of the total.",
        "Two or more straight Tafel sections in one curve signal a change of rate-determining step or mechanism with potential.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The Butler-Volmer equation is a difference of two " +
            "exponentials, which is not a pleasant thing to analyse. " +
            "This section asks whether there is a range of potentials " +
            "where it simplifies, and whether that simplification " +
            "tells you anything useful. Yes - and it was found in " +
            "experiments long before the theory was written down.",
        },
        {
          kind: "para",
          text:
            "Push the electrode far from equilibrium and one of the " +
            "two exponentials takes over. When the reverse partial " +
            "current has faded to less than about one per cent of the " +
            "total, the equation collapses to a single exponential, " +
            "and after taking logarithms the polarization becomes a " +
            "straight line in the logarithm of the current density:",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E = a + b \ln i = a + b' \log i, \qquad b' = 2.303\,b`,
          caption:
            "The Tafel equation, named for Julius Tafel, who " +
            "established it in 1905 for hydrogen evolution at metal " +
            "electrodes. The relation is semilogarithmic: " +
            "polarization against the logarithm of current density is " +
            "a straight line.",
        },
        {
          kind: "para",
          text:
            "Two constants describe that line. The **Tafel slope** " +
            "`b` (or `b`<sub>′</sub>` when the log is base ten) is " +
            "remarkably similar from reaction to reaction: at room " +
            "temperature it sits around",
        },
        {
          kind: "formula",
          tex: String.raw`b = \frac{RT}{\alpha F}, \qquad b' = 2.303\,\frac{RT}{\alpha F} \approx \frac{0.0592\ \mathrm{V}}{\alpha}`,
          caption:
            "The Tafel slope written through the transfer " +
            "coefficient. At 298 K, 2.303RT/F is 0.0592 V, so alpha = " +
            "0.5 gives b' ≈ 0.118 V per decade - the value " +
            "electrochemists quote as 'about 0.12 V'. The widely used " +
            "b ≈ 0.05 V is the natural-log version.",
        },
        {
          kind: "para",
          text:
            "Because `b` is nearly constant, most of the value of the " +
            "polarization sits in the other constant, `a`. Measured " +
            "at unit current density, `a` ranges from `0.03 V` at the " +
            "easiest electrodes to `2-3 V` at the worst. Compare the " +
            "Tafel equation with the Butler-Volmer high-polarization " +
            "limit and `a` turns out to be set by the exchange " +
            "current:",
        },
        {
          kind: "formula",
          tex: String.raw`a = -\frac{RT}{\alpha F}\,\ln i_0`,
          caption:
            "The bridge between the empirical Tafel intercept and " +
            "the fundamental exchange current density. A Tafel plot " +
            "of ΔE against log i is therefore a two-parameter " +
            "kinetic measurement: the slope gives the transfer " +
            "coefficient and the intercept extrapolated to zero " +
            "gives i0.",
        },
        {
          kind: "para",
          text:
            "This is why the Tafel plot is the everyday tool for " +
            "kinetic measurement. Plot polarization against the " +
            "logarithm of current density, draw the straight line " +
            "through the high-polarization data, and read two " +
            "kinetic constants from its geometry: the **slope** gives " +
            "the transfer coefficient `α`, and the **intercept at " +
            "zero polarization** gives the exchange current " +
            "`i`<sub>0</sub>. The two branches, anodic and cathodic, " +
            "usually have different slopes, because they swap the " +
            "roles of `α` and `β`, but they must meet at the " +
            "equilibrium potential where the net current is zero.",
        },
        {
          kind: "worked",
          title: "Reading kinetic parameters off a Tafel plot",
          given:
            "A cathodic Tafel line for a one-electron reaction at " +
            "25 °C (2.303RT/F = 0.0592 V) has a slope of 0.118 V per " +
            "decade of current, and extrapolates back to log i = 0 at " +
            "an overpotential of 0.30 V.",
          steps: [
            "The slope gives the transfer coefficient: b' = 2.303RT/(αF), so α = 0.0592/0.118 = 0.50.",
            "The intercept at unit current is a = -(RT/αF) ln i0 (with i in the same current units as the plot).",
            "Re-expressing with base-10: a = -(0.0592/α) log i0 = -0.118 log i0.",
            "With a = 0.30 V, log i0 = -0.30/0.118 = -2.54, so i0 ≈ 2.9 × 10⁻³ A/cm².",
          ],
          result:
            "A slope of 0.118 V per decade means α ≈ 0.5, and the " +
            "intercept puts the exchange current density near 3 × " +
            "10⁻³ A/cm² - a moderately fast reaction.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Tafel behaviour is an approximation, not a law",
          body:
            "The straight semilogarithmic line appears only when the " +
            "back reaction contributes less than about 1% of the " +
            "current - roughly |η| above 118 mV at 25 °C for " +
            "α = 0.5. Near equilibrium the curve bends into the " +
            "linear region, and many real electrodes show two or more " +
            "Tafel sections, each with its own slope, because the " +
            "rate-determining step changes with potential.",
        },
      ],
    },
    {
      id: "low-polarization-reversibility",
      tone: "amber",
      title: "Near equilibrium: the linear region and reversibility",
      summary:
        "Within about ten millivolts of equilibrium the two " +
        "exponentials almost cancel and the current becomes " +
        "proportional to overpotential. The constant of proportionality " +
        "is a resistance, and its size sorts reactions into " +
        "reversible and irreversible.",
      minutes: 7,
      keyPoints: [
        "For |η| < about 10 mV the Butler-Volmer equation linearises to i = i0 (nF/RT) η.",
        "The ratio ρ or Rct = RT/(nF i0) is the charge-transfer resistance, the slope of the i-η curve at equilibrium.",
        "Below 4% of i0 the overpotential is under 1 mV; the linear section reaches currents around 40% of i0; above 4i0 the Tafel region begins.",
        "At high polarization the second exponential is negligible: above about 80 mV (n = 1) or 40 mV (n = 2) the reverse reaction contributes less than 5%.",
        "Reversibility compares kinetics with transport: i0/id above about 5 is reversible, below 0.05 is kinetic, below 0.02 irreversible.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "What does the Butler-Volmer equation do very close to " +
            "equilibrium, where both exponentials are near one and " +
            "their difference is tiny? The answer connects the " +
            "kinetic picture to the plain resistance language an " +
            "experimentalist uses every day.",
        },
        {
          kind: "para",
          text:
            "For small values of the exponent, exp(y) is close to " +
            "1 + y. Apply that to both terms of the Butler-Volmer " +
            "equation and use `α + β = n`, and the exponentials " +
            "collapse into a straight line:",
        },
        {
          kind: "formula",
          tex: String.raw`i = i_0 \frac{nF}{RT} \Delta E \qquad (|\Delta E| \lesssim 10\ \mathrm{mV})`,
          caption:
            "The linear polarisation region. Each partial current on " +
            "its own is exponential in the potential, but near " +
            "equilibrium the two almost cancel, so the net current " +
            "is proportional to the overpotential.",
        },
        {
          kind: "para",
          text:
            "Rearranged, this says that a small overpotential drives " +
            "a current as if through a resistance. The ratio of the " +
            "two is the **charge-transfer resistance** (called `ρ` by " +
            "Bagotsky and `R`<sub>ct</sub> by many others), and it " +
            "goes inversely with the exchange current:",
        },
        {
          kind: "formula",
          tex: String.raw`\rho = R_{\mathrm{ct}} = \frac{RT}{nF}\,\frac{1}{i_0}`,
          caption:
            "The charge-transfer resistance per unit area. Unlike an " +
            "ohmic resistance it is not linear over the whole curve, " +
            "but near equilibrium it behaves exactly like one. " +
            "Measuring it is the most direct way to get i0.",
        },
        {
          kind: "para",
          text:
            "These regions have boundaries worth remembering. The " +
            "linear approximation is good to within a few percent out " +
            "to about `10 mV`; at `10 mV` the error from the " +
            "expansion is between 1 and 20%, depending on `α` and " +
            "`β`, and it shrinks as the polarization falls. At current " +
            "densities below about 4% of `i`<sub>0</sub> the " +
            "overpotential is under `1 mV` and effectively invisible; " +
            "the linear stretch runs out near 40% of `i`<sub>0</sub>; " +
            "and above about `4 i`<sub>0</sub> the semilogarithmic " +
            "Tafel relation takes over. On the other side, at a " +
            "polarization of `80 mV` (for `n = 1`) the neglected " +
            "reverse reaction is already down to 5%, so `80 mV` is " +
            "taken as the lower edge of the high-polarization region. " +
            "For `n = 2` that edge drops to `40 mV`, because the " +
            "exponentials climb twice as fast.",
        },
        {
          kind: "para",
          text:
            "So far this section has compared a reaction with itself. " +
            "In a real experiment the kinetics must also be compared " +
            "with *transport*, and it is the ratio " +
            "`i`<sub>0</sub>`/i`<sub>d</sub> that decides what the " +
            "whole polarization curve looks like. When the exchange " +
            "current dwarfs the limiting diffusion current, delivery " +
            "can never keep up with the interface, and the electrode " +
            "is controlled by diffusion at every potential - the " +
            "curve is a single, nicely symmetric wave and the " +
            "reaction is called **reversible** (or Nernstian). When " +
            "the exchange current is tiny, the interface is the " +
            "bottleneck, the anodic and cathodic branches separate " +
            "into two independent waves with their own half-wave " +
            "points, and the reaction is called **irreversible**. In " +
            "between sits **quasi-reversible** behaviour, with a " +
            "mixed region near equilibrium.",
        },
        {
          kind: "table",
          head: ["Ratio i0/id", "Behaviour", "Who is in charge"],
          widths: [1, 2, 2],
          rows: [
            ["Greater than about 5", "Reversible", "Diffusion at all potentials"],
            ["Between 0.05 and 5", "Quasi-reversible / mixed", "Both, depending on potential"],
            ["Less than about 0.05", "Kinetic", "The interface"],
            ["Less than about 0.02", "Irreversible", "The interface, even at high polarization"],
          ],
        },
        {
          kind: "para",
          text:
            "The same classification is often written with constants " +
            "instead of currents. Replace `i`<sub>0</sub>`/i`<sub>d</sub> " +
            "by `k`<sup>0</sup>`/κ`<sub>j</sub>, where " +
            "`κ`<sub>j</sub> is the mass-transport constant set by " +
            "stirring, and you get practical thresholds. Measured " +
            "transport constants run from about `5 × 10⁻⁴ cm/s` " +
            "under natural convection to `2 × 10⁻² cm/s` at a disk " +
            "spinning at 10,000 rpm, and a reaction with `k`<sup>0</sup> " +
            "`≥ 10⁻¹ cm/s` is completely reversible under any " +
            "stirring, while one with `k`<sup>0</sup> `≤ 10⁻⁵ cm/s` " +
            "is always irreversible. One caution: even a hopeless " +
            "irreversible reaction stays kinetically controlled only " +
            "up to about 10% of the limiting current; past that, " +
            "diffusion takes over again as the ceiling approaches.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Reversible, quasi-reversible, irreversible",
          body:
            "These words describe a *comparison*, not an absolute " +
            "property. A reaction is reversible if its exchange " +
            "current is much larger than the limiting diffusion " +
            "current, so transport always governs. Change the " +
            "electrode material and a reversible reaction may become " +
            "irreversible; slow the stirring and an irreversible " +
            "reaction may drift toward the reversible limit.",
        },
      ],
    },
    {
      id: "concentration-polarization",
      tone: "emerald",
      title: "Concentration polarization",
      summary:
        "Current uses up reactant at the surface, so the surface " +
        "concentration falls below the bulk value and the Nernst " +
        "potential moves. That shift is concentration polarization, " +
        "and its shape is set by transport, not by chemistry.",
      minutes: 7,
      keyPoints: [
        "Concentration polarization ΔEd appears because the surface concentration c_S differs from the bulk c_V, which shifts the equilibrium potential.",
        "ΔEd = (RT/nF) ln[(1 + i/il,red)/(1 - i/il,ox)], and it grows without limit as i approaches the limiting current.",
        "At low current density the relation is linear again: ΔEd = (RT/nF)(1/il,red + 1/il,ox) i.",
        "The half-wave potential E1/2 = E0 + (RT/nF) ln(κ_red/κ_ox) does not depend on the reactant concentrations.",
        "In a binary solution without supporting electrolyte the measured polarization is about twice as large, because a diffusion potential and an ohmic drop join in.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Lesson 4 showed that passing current empties a thin " +
            "film at the electrode. If the surface concentration " +
            "drops, the Nernst equation says the equilibrium " +
            "potential must shift. How big is that shift, and how " +
            "does it depend on the current?",
        },
        {
          kind: "para",
          text:
            "Switch activation polarization off - imagine a very " +
            "fast interface that keeps up instantly with whatever " +
            "the solution delivers. The electrode still cannot " +
            "escape the Nernst equation, but the concentrations it " +
            "sees are the *surface* values, not the bulk ones:",
        },
        {
          kind: "formula",
          tex: String.raw`E = E^{0} + \frac{RT}{nF}\ln c_{S,j}`,
          caption:
            "The Nernst equation evaluated at the surface " +
            "concentration. As current drains the reactant, c_S " +
            "falls and E follows it. This is concentration " +
            "polarization, and it appears even for an infinitely " +
            "fast electron-transfer reaction.",
        },
        {
          kind: "para",
          text:
            "The shift away from the equilibrium potential is " +
            "concentration polarization, and it is fixed by the " +
            "balance between the reaction and diffusional supply " +
            "described in Lesson 4. Write it in terms of the " +
            "limiting currents for the reduced and oxidised forms " +
            "and you get a closed expression:",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E_{\mathrm{d}} = \frac{RT}{nF}\ln\frac{1 + i/i_{l,\mathrm{red}}}{1 - i/i_{l,\mathrm{ox}}}`,
          caption:
            "Concentration polarization when there is plenty of " +
            "supporting electrolyte. The formula itself contains no " +
            "chemistry: it is the same for every reaction. All the " +
            "chemical identity sits in the limiting currents. The " +
            "polarization grows without limit as the current " +
            "approaches either limiting value, just as Lesson 4 " +
            "promised.",
        },
        {
          kind: "para",
          text:
            "The curve this draws is a wave. At zero current the " +
            "polarization is zero; under anodic polarization the " +
            "current climbs toward `i`<sub>l,red</sub> and the " +
            "surface concentration of the reduced form falls to " +
            "zero; under cathodic polarization it climbs toward " +
            "`i`<sub>l,ox</sub> and the oxidised form is the one " +
            "used up. The curve is symmetric about an inflection " +
            "point at half the current, the **half-wave point**, " +
            "whose potential is",
        },
        {
          kind: "formula",
          tex: String.raw`E_{1/2} = E^{0} + \frac{RT}{nF}\ln\frac{\kappa_{\mathrm{red}}}{\kappa_{\mathrm{ox}}}`,
          caption:
            "The half-wave potential. Because it holds only the " +
            "standard potential and the two transport constants, it " +
            "does not depend on the reactant concentrations - which " +
            "makes it a handy label for a redox couple that does " +
            "not change with concentration.",
        },
        {
          kind: "para",
          text:
            "For small currents the logarithms can be expanded and " +
            "the relation becomes linear once more, bringing back " +
            "the resistance language:",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E_{\mathrm{d}} = \frac{RT}{nF}\left(\frac{1}{i_{l,\mathrm{red}}} + \frac{1}{i_{l,\mathrm{ox}}}\right) i`,
          caption:
            "Low-current concentration polarization. Compare it " +
            "with Ohm's law and the bracket is a diffusion " +
            "resistance, playing the same formal role as " +
            "RT/(nF i0) does for charge transfer. Transport and " +
            "kinetics use the same bookkeeping.",
        },
        {
          kind: "para",
          text:
            "One practical twist deserves a mention. All of this " +
            "assumed a large excess of inert supporting electrolyte, " +
            "so that the only transport was diffusion. In a " +
            "**binary** solution, where the reactant ion is " +
            "accompanied only by its counter-ion, a diffusion " +
            "potential builds up across the diffusion layer and the " +
            "solution resistance adds an ohmic drop of its own. The " +
            "measured polarization across the diffusion layer then " +
            "comes out about **twice** the value the " +
            "supporting-electrolyte formula predicts - the same " +
            "factor of two that Lesson 4 found for the limiting " +
            "current itself. Both effects trace back to the " +
            "electroneutrality field that migration supplies when " +
            "there are no inert ions present to carry the charge.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "The price of getting near the limiting current",
          body:
            "Because ΔEd grows as the logarithm of a ratio that goes " +
            "to infinity as i approaches the limiting current, a " +
            "useful fraction of the limiting current is cheap to " +
            "reach, but the last few percent cost a rapidly growing " +
            "potential. In practice, pushing past about 90% of the " +
            "limiting current is rarely worth the potential it " +
            "demands.",
        },
      ],
    },
    {
      id: "mixed-control",
      tone: "teal",
      title: "Mixed control: when both brakes bite",
      summary:
        "Real electrodes are held back by activation and by transport " +
        "at the same time. The two add up like resistors in series - " +
        "the reciprocal currents add - so the real current is always " +
        "smaller than either one alone.",
      minutes: 7,
      keyPoints: [
        "The kinetic current ik is what activation alone would allow; the diffusion current id is what transport alone would allow; the real current i obeys 1/i = 1/ik + 1/id.",
        "The combined polarization is larger than the sum of the two separate polarizations, except at low current density, where it equals the sum.",
        "The formal resistance is a reaction term plus two diffusion terms: ρ = (RT/nF)(1/i0 + 1/il,red + 1/il,ox).",
        "Three regions follow: kinetic control when id ≫ ik, mixed control when they are comparable, diffusion control when id ≪ ik.",
        "Plotting current against the square root of rotation rate separates the two: a rising line under diffusion control that flattens into a plateau under kinetic control.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The previous two sections treated activation " +
            "polarization and concentration polarization as if each " +
            "acted alone. On a real electrode both are always " +
            "present. How do they combine, and can you tell which " +
            "one is the bottleneck?",
        },
        {
          kind: "para",
          text:
            "The kinetic equations of section 3 assumed the surface " +
            "concentrations stay at their bulk values; the transport " +
            "equations of section 7 assumed the interface is " +
            "infinitely fast. Drop both assumptions and the surface " +
            "concentrations that solve the joint problem give the " +
            "real current density `i`. The result is neatly simple. " +
            "If `i`<sub>k</sub> is the current activation alone " +
            "would permit and `i`<sub>d</sub> the current transport " +
            "alone would permit, then",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{1}{i} = \frac{1}{i_{k}} + \frac{1}{i_{d}}`,
          caption:
            "Mixed control: the reciprocal currents add, just like " +
            "conductances in series. The real current is always " +
            "smaller than either `i`<sub>k</sub> or " +
            "`i`<sub>d</sub> on its own, and the slower of the two " +
            "dominates the total.",
        },
        {
          kind: "para",
          text:
            "This is the electrochemical version of two resistances " +
            "in series, and the same section of Bagotsky that " +
            "derives it also shows what it does to the polarization. " +
            "At low current density the polarizations simply add, " +
            "so the formal resistance is the sum of three terms - " +
            "one for charge transfer and one for each diffusing " +
            "species:",
        },
        {
          kind: "formula",
          tex: String.raw`\rho = \frac{RT}{nF}\left(\frac{1}{i_0} + \frac{1}{i_{l,\mathrm{red}}} + \frac{1}{i_{l,\mathrm{ox}}}\right)`,
          caption:
            "The total formal resistance under mixed control. The " +
            "first term is the charge-transfer resistance; the last " +
            "two are the diffusion resistances defined in the " +
            "previous section. At low current the separate " +
            "polarizations simply add.",
        },
        {
          kind: "para",
          text:
            "Away from low currents, though, something subtler " +
            "happens: the combined polarization is *larger* than " +
            "the activation and concentration polarizations added " +
            "up on their own. The reason is that changing the " +
            "surface concentration does not just add a Nernst " +
            "shift; it *also* changes the activation polarization, " +
            "because the activation terms depend on the local " +
            "concentrations. The two effects do not stack up " +
            "neatly, and the true curve lies below both of the " +
            "individual curves and below their sum. Only in the " +
            "linear low-current limit does simple addition hold.",
        },
        {
          kind: "para",
          text:
            "The competition defines three regimes. When the " +
            "limiting diffusion current is much larger than the " +
            "kinetic current, the interface is the slow step and " +
            "the reaction is under **kinetic control**; the current " +
            "is essentially `i`<sub>k</sub> and does not care how " +
            "fast the solution is stirred. When the kinetic current " +
            "is the larger, transport is the bottleneck and the " +
            "reaction is under **diffusion control**, with the " +
            "current equal to `i`<sub>d</sub> and a sharp or " +
            "gradual approach to the limiting value. In between, " +
            "both matter, and the electrode is under **mixed " +
            "control**.",
        },
        {
          kind: "para",
          text:
            "The rotating disk from Lesson 4 makes the separation " +
            "visible. At a fixed potential, spin the disk slowly " +
            "and the reaction is diffusion controlled, so the " +
            "current rises with the square root of the rotation " +
            "rate. Spin it faster and the current growth slows, " +
            "then stops: the transport ceiling has lifted above the " +
            "kinetic ceiling, and the plateau is the kinetic " +
            "current `i`<sub>k</sub> itself. A plot of `i` against " +
            "`ω`<sup>1/2</sup> therefore reads straight off as " +
            "'diffusion limited, then kinetic', and the plateau " +
            "height is the pure kinetic current at that potential - " +
            "one of the cleanest ways to get `i`<sub>0</sub> and " +
            "`k`<sup>0</sup>. The shape of the plot also reveals " +
            "the reaction order: a first-order reaction approaches " +
            "the plateau smoothly, while a zeroth-order reaction " +
            "shows a sharp break where `i`<sub>d</sub> meets " +
            "`i`<sub>k</sub>.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "One equation to remember",
          body:
            "Whenever someone asks which of the two brakes is " +
            "limiting an electrode, the answer is in " +
            "`1/i = 1/i_k + 1/i_d`. Whichever current is smaller " +
            "dominates the result. The rotating disk is simply a " +
            "machine for varying i_d until the two become " +
            "comparable, and watching the curve change tells you " +
            "which was in charge.",
        },
      ],
    },
    {
      id: "multistep-and-real-surfaces",
      tone: "slate",
      title: "Multistep reactions and real surfaces",
      summary:
        "Most real reactions move more than one electron and pass " +
        "through intermediates, so one step sets the pace. Real " +
        "surfaces add their own problems: the double layer changes " +
        "the reactant concentration at the interface, adsorption " +
        "blocks or catalyses it, and forming a new phase costs extra " +
        "energy.",
      minutes: 7,
      keyPoints: [
        "Multistep reactions go through intermediates; in the steady state every step runs at the same reduced rate, and the slowest step - the rate-determining step - sets the kinetics of the whole reaction.",
        "The stoichiometric number μk records how many times step k repeats per overall act, with Σ μk lk = n.",
        "When the rate-determining step changes with potential, the Tafel plot bends into two or more straight sections.",
        "The electric double layer changes both the reactant concentration at the reaction plane (Boltzmann factor) and the potential that drives the transfer (the Frumkin ψ' effect).",
        "Adsorbed reactants and adsorbed foreign species change both the reaction rate and the effective surface area, and reactions that form a new phase need extra potential to start it.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The simple Butler-Volmer picture assumed a single " +
            "electron transfer with no intermediates and a bare, " +
            "ideal surface. Most real reactions do neither. What " +
            "changes when a reaction runs in several steps, and " +
            "when the electrode surface is a crowded, charged, " +
            "partly covered place?",
        },
        {
          kind: "para",
          text:
            "Reactions that move two or more electrons usually do " +
            "so through a sequence of simpler steps - a **reaction " +
            "pathway** - with stable or short-lived intermediates. " +
            "A reaction can even have several parallel pathways, " +
            "and the anodic and cathodic directions need not follow " +
            "the same one. Each step carries a **stoichiometric " +
            "number** `μ`<sub>k</sub>, the number of times it " +
            "repeats per act of the overall reaction, with the sum " +
            "rule `Σ μ`<sub>k</sub>`l`<sub>k</sub> `= n`, where " +
            "`l`<sub>k</sub> is the number of electrons in that " +
            "step. Electrochemical steps (labeled **E**) carry one " +
            "electron as a rule; purely chemical steps (labelled " +
            "**C**) carry none and are often written into the " +
            "scheme, so a two-electron oxidation might run as an EE " +
            "or an EC pathway.",
        },
        {
          kind: "para",
          text:
            "In the steady state the concentrations of " +
            "intermediates do not change, so the rates of all steps " +
            "are locked together: if a step is written once per " +
            "overall act, its rate equals the overall rate; if it " +
            "is written twice, its rate is twice the overall rate. " +
            "Some steps then go easily and one step goes only with " +
            "difficulty. That slow step is the **rate-determining " +
            "step** (RDS), and the kinetic parameters of the whole " +
            "reaction are those of the RDS, changed only by the " +
            "equilibrium concentrations the other steps impose on " +
            "the intermediate. The RDS can change with potential, " +
            "which is why a real polarization curve often shows two " +
            "or more Tafel sections with different slopes. A " +
            "multistep mechanism therefore leaves several " +
            "fingerprints: a Tafel slope that changes in steps, a " +
            "reaction order that need not be a whole number, and a " +
            "transfer coefficient that can drift from its " +
            "one-electron value.",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{v_1}{\mu_1} = \frac{v_2}{\mu_2} = \dots = v, \qquad \sum_k \mu_k l_k = n`,
          caption:
            "Steady-state bookkeeping for a multistep reaction: the " +
            "reduced rates of all steps are equal, and the " +
            "stoichiometric numbers times the electrons per step " +
            "add up to the overall electron count. In a multistep " +
            "reaction the exchange current of the rate-determining " +
            "step is smaller than the overall exchange current by " +
            "roughly the number of repetitions.",
        },
        {
          kind: "para",
          text:
            "The interface itself then edits the kinetics. Even a " +
            "perfectly simple one-step reaction never sees the bulk " +
            "solution. The reacting particle has to approach " +
            "through the electric double layer first, where it sits " +
            "at a potential `ψ′` different from the bulk, and the " +
            "reaction is affected in two ways. First, its " +
            "concentration in the reaction zone differs from the " +
            "bulk value by a Boltzmann factor; second, the " +
            "potential that drives the electron transfer is not the " +
            "full electrode potential but the difference between " +
            "the electrode and the reaction zone. This " +
            "**ψ′-effect**, recognised by Frumkin in 1933, is why " +
            "a reaction's rate can change when an inert salt is " +
            "added even though the salt takes no part in the " +
            "chemistry.",
        },
        {
          kind: "formula",
          tex: String.raw`c_{S,j} = c_{V,j}\exp\!\left(-\frac{z_j F \psi'}{RT}\right)`,
          caption:
            "The Boltzmann distribution of a charged reactant " +
            "across the diffuse part of the double layer. A cation " +
            "gathers where the potential is negative and an anion " +
            "is pushed away from it; uncharged species are " +
            "unaffected. The reaction rate is then governed by " +
            "E - ψ′ rather than by E.",
        },
        {
          kind: "para",
          text:
            "Adsorption adds a second layer of complication. " +
            "Reactants that adsorb before reacting give a rate " +
            "proportional to the surface coverage rather than to " +
            "the bulk concentration, so the current levels off at " +
            "high concentration (Langmuir behaviour), or follows a " +
            "fractional power of concentration on an uneven surface " +
            "(Temkin behaviour). When one reactant covers almost " +
            "the whole surface, it can crowd the others off and " +
            "the rate can *fall* as the concentration rises - the " +
            "effect of high coverages. Foreign species that adsorb " +
            "without reacting simply block sites, scaling the " +
            "current by the fraction of free surface, and strongly " +
            "adsorbed organics can hold up metal deposition almost " +
            "completely until they detach again.",
        },
        {
          kind: "formula",
          tex: String.raw`i = i_0(1 - \theta_l)`,
          caption:
            "Langmuir blocking by an adsorbed foreign species l " +
            "that occupies a fraction theta_l of the surface. The " +
            "reacting ions have to cross the adsorbed layer to " +
            "reach the electrode, so the current drops in " +
            "proportion to the free area.",
        },
        {
          kind: "para",
          text:
            "Finally, some reactions do not use up a dissolved " +
            "species but *create a new phase* - a gas bubble, or a " +
            "metal crystal on the electrode. Here the first " +
            "electron transfer is only the beginning: the metal " +
            "adatoms have to gather into a stable nucleus before " +
            "the new phase can grow, and forming that nucleus " +
            "against the interfacial tension costs extra energy. " +
            "The electrode overpotential has to rise above its " +
            "thermodynamic value to drive nucleation, and the " +
            "number of nuclei formed depends sharply on how far it " +
            "is pushed - which is why electrodeposited metals come " +
            "out smooth or powdery depending on the potential. Gas " +
            "evolution adds its own tax, since bubbles clinging to " +
            "the surface hide part of the active area and the gas " +
            "must supersaturate before a bubble can start. Even a " +
            "reaction that merely adsorbs a hydrogen atom before it " +
            "recombines follows the same logic, which is why the " +
            "hydrogen evolution reaction has been the test case for " +
            "electrochemical kinetics since Tafel's original 1905 " +
            "measurements.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The simple equation, and the real world",
          body:
            "Butler-Volmer describes a one-step reaction at an " +
            "ideal surface with mass transport handled separately. " +
            "Everything in this section - multistep pathways, the " +
            "ψ′-effect, adsorption, nucleation - is a correction to " +
            "that ideal. The surprising thing is how far the simple " +
            "equation carries; the skill is knowing which " +
            "correction matters for a given electrode.",
        },
      ],
      cta: {
        title: "How willing the interface is",
        body:
          "Lesson 4 put matter on a deadline; Lesson 5 asked how " +
          "eagerly the interface converts it once it arrives. The " +
          "Butler-Volmer equation turns that willingness into a " +
          "formula, the exchange current density reduces it to a " +
          "single number, and the Tafel slope and charge-transfer " +
          "resistance read that number off a graph. Concentration " +
          "polarization, mixed control and the complications of " +
          "multistep mechanisms and real surfaces all follow from " +
          "the same two competing exponentials. Lesson 6 goes " +
          "into the double layer itself - the nanometre region " +
          "whose potential changed every rate in this lesson. Test " +
          "yourself on this lesson's bank first.",
        href: "/lessons/lesson-5/quiz",
        linkLabel: "Take the Lesson 5 questions",
        secondaryHref: "/lessons/lesson-4",
        secondaryLabel: "Recheck Lesson 4",
      },
    },
  ],
};
