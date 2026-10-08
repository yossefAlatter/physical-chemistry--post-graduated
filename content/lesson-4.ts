// Lesson 4 - Mass transfer and limiting currents.
//
// Source syllabus: Bagotsky ch.4 (Mass Transfer in Electrolytes) and Bard &
// Faulkner ch.4 (Mass Transfer by Migration and Diffusion). The framing of
// mass transfer as the speed and ceiling of electrochemical life follows the
// course arc; the chapters set the coverage and the numbers, but every
// sentence, figure and question here is original.

import type { Lesson } from "./types";
import { lesson4Mcq } from "./lesson-4.mcq";

export const lesson4: Lesson = {
  slug: "lesson-4",
  label: "Lesson 4",
  title: "Mass transfer and limiting currents",
  summary:
    "Until now every electrode reaction assumed the solution hands over " +
    "ions as fast as the current wants them. It cannot. This lesson is " +
    "about speed: how matter actually reaches an electrode - by diffusion, " +
    "migration and convection - why a current always has a hard ceiling, " +
    "and how the rotating disk turned a messy flow problem into the " +
    "cleanest experiment in the field.",
  order: 4,
  minutes: 60,
  mcq: lesson4Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Lessons 1 to 3 built the equilibrium world: the voltage " +
        "machinery, its thermodynamic dials, and the medium that shuttles " +
        "charge. Every one of those arguments rested on a silent " +
        "assumption - the solution hands ions to an electrode on demand, " +
        "at any speed required. Lesson 4 drops that assumption. It puts " +
        "the solution *under load* and asks how matter actually travels " +
        "to the electrode surface - by **diffusion**, by **migration** " +
        "and by **convection** - and what happens when the medium simply " +
        "cannot deliver fast enough. Following Bagotsky ch.4 and Bard " +
        "ch.4, the payoff is the **limiting current**: the ceiling that " +
        "every real electrochemical process has to respect.",
    },
    {
      kind: "para",
      text:
        "Keep the big picture in view. The first three lessons told you " +
        "what *can* happen. This one tells you how *fast*, and that " +
        "brings in a new inefficiency. At equilibrium the Nernst equation " +
        "says where an electrode reaction stops. Under current the " +
        "**rate of supply** takes over, and the interface is no longer " +
        "the only voice: the medium now sets the maximum flow. Every " +
        "later lesson on kinetics, polarization or technique uses the " +
        "words you build here - **diffusion layer**, **key component** " +
        "and **Levich equation**.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "An electrode can only use up reactant as fast as the solution " +
        "refreshes a thin still film at its surface. The current at " +
        "which that film runs dry is the **limiting diffusion current**, " +
        "and every honest electrochemical technique is an exercise in " +
        "thinning the film.",
    },
  ],
  sections: [
    {
      id: "fick-diffusion",
      tone: "azure",
      title: "Fick's laws and the diffusion coefficient",
      minutes: 7,
      summary:
        "Diffusion levels out concentration: particles flow down the " +
        "gradient, and the flux is proportional to how steep it is. The " +
        "diffusion coefficient - tied to ionic mobility by Nernst-Einstein " +
        "- gives each species its own speed.",
      keyPoints: [
        "The flux is proportional to the concentration gradient - that is Fick's first law (1855).",
        "Most ions in water have D_j between 0.6 x 10^-5 and 2 x 10^-5 cm2/s, and D falls as concentration rises.",
        "The real driving force is the gradient of chemical potential, not of concentration; the difference is folded into a D_j that depends on concentration.",
        "Nernst-Einstein ties D_j to ionic mobility: D_j = u_j RT/(z_j F), so conductivity data give you diffusion coefficients.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about how a substance moves through a " +
            "solution that is itself standing still. The answer is " +
            "diffusion, and the law Fick stated in 1855 is almost " +
            "embarrassingly simple: matter flows from where it is crowded " +
            "to where it is not, at a rate set by how steep the gradient " +
            "is.",
        },
        {
          kind: "para",
          text:
            "You already met ionic mobility `u_j`: the steady speed that " +
            "a unit field gives an ion. Diffusion is the same phenomenon " +
            "with no field on. The random walk that makes an ion wander " +
            "is the same agitation that makes it drift. In a solution " +
            "that is not uniform, the two opposite flows no longer cancel " +
            "and a net flux survives. Fick's first law says that this " +
            "**diffusional flux** `J_d,j` (mol/cm²s, a current made of " +
            "matter) points down the concentration gradient and grows " +
            "with it:",
        },
        {
          kind: "formula",
          tex: String.raw`J_{d,j} = D_j\,\mathrm{grad}\,c_j`,
          caption:
            "Fick's first law. The diffusion coefficient D_j (cm2/s) is " +
            "the stiffness of the response: how much flux a given " +
            "gradient can push. The law is exact only in dilute " +
            "solution - how to fix that comes next.",
        },
        {
          kind: "para",
          text:
            "The honest driving force is not the concentration gradient " +
            "but the gradient of **chemical potential** - diffusion " +
            "levels out activities, not amounts. Written that way the " +
            "law reads `J_d,j = D_a,j grad a_j`, but it buys no practical " +
            "gain, because the activity-based coefficient varies just as " +
            "much. Working electrochemists therefore keep Fick's law in " +
            "its raw form and admit reality the cheap way: " +
            "**D_j is simply a function of concentration**. In dilute " +
            "aqueous solution most ions and many neutral molecules have " +
            "D_j between `0.6 × 10⁻⁵` and `2 × 10⁻⁵` cm²/s at room " +
            "temperature, and the values fall markedly as concentration " +
            "climbs - the OH⁻ ion in KOH is the classic plotted example.",
        },
        {
          kind: "para",
          text:
            "Fick's law has a second virtue: it pairs with mobility. The " +
            "same drag that slows an ion under a field slows its " +
            "diffusion too, and the link (Nernst, 1888) is exact:",
        },
        {
          kind: "formula",
          tex: String.raw`D_j = \frac{RT}{z_j F}\,u_j`,
          caption:
            "The Nernst-Einstein relation, valid in dilute solutions. " +
            "Mobilities are far easier to measure than diffusion " +
            "coefficients, so this bridge lets conductivity tables " +
            "produce diffusion tables.",
        },
        {
          kind: "para",
          text:
            "The relation matters far beyond bookkeeping. It is the " +
            "first sign of a theme that runs through the whole lesson: " +
            "**one mechanism, many uniforms**. Mobility under a field, " +
            "diffusion under a gradient and, soon, convection in a flow " +
            "are chapters of the same story.",
        },
      ],
    },
    {
      id: "diffusion-layer",
      tone: "indigo",
      title: "The diffusion layer",
      minutes: 6,
      summary:
        "Passing current empties the region next to an electrode. A thin " +
        "still film - the diffusion layer - carries all the diffusional " +
        "transport, and its thickness decides the current the solution " +
        "will support.",
      keyPoints: [
        "Under current the reactant concentration at the surface falls (c_S < c_V) and the product concentration rises.",
        "The diffusion layer delta is the still film across which transport is purely diffusional; outside it, stirring keeps concentrations at the bulk values.",
        "Its thickness - the diffusion path length - is set by the cell design and by how hard the liquid is stirred.",
        "Surface concentration means about 1 nm from the electrode: outside the double layer, inside the diffusion layer.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about how the solution answers back. An " +
            "electrode reaction removes reactant at the surface and " +
            "creates product there, and the solution responds by " +
            "building concentration gradients - gradients that live " +
            "inside one specific, measurable slice of space: the " +
            "**diffusion layer**.",
        },
        {
          kind: "para",
          text:
            "When current flows, the surface concentration `c_S,j` of a " +
            "reactant falls below its bulk value `c_V,j`, while the " +
            "surface concentration of a reaction product rises above it. " +
            "Stressed this way, the solution obeys: around the electrode " +
            "a **diffusion layer** forms - a film of electrolyte of " +
            "thickness `δ`, across which the concentration changes and " +
            "within which substances travel by diffusion alone. Outside " +
            "the film, stirring holds the liquid at the bulk composition. " +
            "The thickness `δ` is the *diffusion path length*. It is not " +
            "a property of the solution but of the cell: it depends on " +
            "the cell design and on how hard the liquid is mixed. For " +
            "now we treat it as a constant; section 7 (hydrodynamics) " +
            "explains where it comes from.",
        },
        {
          kind: "para",
          text:
            "Surface concentration is a precise idea. Right at the metal " +
            "the double layer distorts ionic concentrations all on its " +
            "own, so `c_S,j` means the concentration at a point about " +
            "**1 nm from the surface**: close enough to sit well inside " +
            "the diffusion layer, far enough that double-layer effects " +
            "are gone. At flat electrodes the fluxes inside the layer " +
            "are one-dimensional, and in the steady state the flux " +
            "density is constant all the way across. The gradient is " +
            "constant too, so finite differences take over from calculus:",
        },
        {
          kind: "formula",
          tex: String.raw`J_{d,j} = D_j\,\frac{\Delta c_j}{\delta} = \kappa_j\,\Delta c_j, \qquad \kappa_j = \frac{D_j}{\delta}`,
          caption:
            "Steady linear diffusion across a film of thickness delta. " +
            "kappa_j = D_j/delta is the diffusion-flux constant (cm/s) - " +
            "how generous that film is to the diffusing species.",
        },
        {
          kind: "para",
          text:
            "Now the current density writes its own bill. Each reactant " +
            "used up and each product released obeys its balance law - " +
            "the current equals the Faradaic demand on the flux - and " +
            "combined with the linear flux this gives the workhorse " +
            "equation of the whole lesson:",
        },
        {
          kind: "formula",
          tex: String.raw`i = \frac{n}{\nu_j}\,F\,\kappa_j\,(c_{V,j} - c_{S,j})`,
          caption:
            "Current density is proportional to the concentration " +
            "difference between bulk and surface. n is the electron " +
            "count, nu_j the stoichiometric coefficient of the reactant " +
            "in the balanced half-reaction.",
        },
        {
          kind: "para",
          text:
            "Rearranged, the same equation gives the surface " +
            "concentration at any current:",
        },
        {
          kind: "formula",
          tex: String.raw`c_{S,j} = c_{V,j} - \frac{\nu_j\,i}{n\,F\,\kappa_j}`,
          caption:
            "The surface concentration falls linearly as the current " +
            "density climbs - until the day it reaches zero, and that " +
            "day has a name (next section).",
        },
      ],
    },
    {
      id: "limiting-current",
      tone: "violet",
      title: "The limiting diffusion current",
      minutes: 7,
      summary:
        "At a critical current the surface concentration hits zero and " +
        "the medium cannot deliver any faster. This ceiling - the " +
        "limiting diffusion current - is the clearest statement of " +
        "mass-transfer control in electrochemistry.",
      keyPoints: [
        "The limiting diffusion current density is i_l = (n/nu_j) F kappa_j c_V - it is reached when c_S collapses to zero.",
        "Rewritten in the handy form c_S = c_V (1 - i/i_l), and c_S = c_V (1 + i/i_l) for products.",
        "Limiting currents show up in galvanic circuits but never in pure electronic conductors - a sign of ionic transport.",
        "The key component is the reactant that runs dry first; precipitation of a product at the surface can also cap the current.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section asks how much current a given solution and " +
            "electrode arrangement can possibly carry. The thickness of " +
            "the diffusion layer and the bulk concentration set an " +
            "upper bound, and reaching that bound is not a failure but a " +
            "diagnosis - it is how the field measures transport.",
        },
        {
          kind: "para",
          text:
            "Push the current density up and the surface concentration " +
            "drops, as the last equation says. Eventually a **critical " +
            "value** is reached at which the surface concentration of " +
            "the reactant has fallen to zero. At that moment the " +
            "concentration gradient across the film has hit its physical " +
            "maximum - `c_V,j/δ` - and no increase in current can squeeze " +
            "the diffusional flux any further:",
        },
        {
          kind: "formula",
          tex: String.raw`i_{l,j} = \frac{n}{\nu_j}\,F\,\kappa_j\,c_{V,j}, \qquad c_{S,j} = c_{V,j}\left(1 - \frac{i}{i_{l,j}}\right)`,
          caption:
            "The limiting diffusion current density, and the compact " +
            "surface-concentration form it gives. The subscript l (or d) " +
            "marks it as the diffusion-limited ceiling for a given " +
            "reactant.",
        },
        {
          kind: "para",
          text:
            "The product side gets a sibling equation: its surface " +
            "concentration climbs as `1 + i/i_l`. But its ceiling is of " +
            "a different and nastier kind - it arrives not because " +
            "delivery fails but because the **solubility limit** is " +
            "reached and the product precipitates onto the electrode, " +
            "covering the surface and getting in the way of more current. " +
            "That limiting current depends on the nature of the deposit, " +
            "is poorly reproducible, and may drift with time. The " +
            "diffusion-limited ceiling of the reactant is the clean, " +
            "reproducible one.",
        },
        {
          kind: "para",
          text:
            "Notice one sharp point: limiting currents belong to " +
            "galvanic circuits and are entirely absent from circuits made " +
            "of metal. A copper wire carries whatever current the battery " +
            "pushes without ever 'running out of copper'. An electrode " +
            "reaction is matter transport in disguise, so it cannot dodge " +
            "the ceiling. That contrast is the whole point of the " +
            "concept.",
        },
        {
          kind: "para",
          text:
            "Real reactions have several reactants and products, and " +
            "each carries its own limiting current. As the current " +
            "climbs, one of them runs out of diffusive supply first. That " +
            "**key component** - the one whose surface concentration " +
            "hits zero first - decides the actual limiting current of " +
            "the whole system, pinned by its diffusion coefficient and " +
            "bulk concentration. Finding the key component is usually the " +
            "whole diagnostic battle.",
        },
      ],
    },
    {
      id: "nernst-planck",
      tone: "rose",
      title: "Transport in a field: the Nernst-Planck flux",
      minutes: 6,
      summary:
        "Real ions travel by migration down the electric field and by " +
        "diffusion down their gradient at the same time. The " +
        "Nernst-Planck equation adds the two, and electroneutrality ties " +
        "all the gradients into one system - intricate, but solvable.",
      keyPoints: [
        "Total flux = migration + diffusion: J_j = c_j u_j E +- D_j dc_j/dx (Nernst-Planck, 1890).",
        "Electroneutrality puts one constraint among the gradients, so N species give N equations in N unknowns.",
        "Uncharged components (z_j = 0) drop straight back onto Fick's law.",
        "A steady state is genuinely reachable: charges and substances balance, and the voltage and the concentration profile take unique values.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "So far the analysis assumed uncharged reactants, for whom " +
            "only diffusion matters. But under current the electrolyte " +
            "also carries an electric field, and ions answer to it. This " +
            "section asks what the flux of an ion caught between a field " +
            "and a gradient looks like.",
        },
        {
          kind: "para",
          text:
            "The answer has two terms that add or subtract: **migration**, " +
            "the drift `c_j·u_j·E` that the field imposes on a cloud of " +
            "ions, and **diffusion**, the push down the concentration " +
            "gradient. Together they form the **Nernst-Planck equation** " +
            "(1890), the founding transport law of electrochemistry:",
        },
        {
          kind: "formula",
          tex: String.raw`J_j = c_j\,u_j\,E \pm D_j\,\frac{\mathrm{d}c_j}{\mathrm{d}x}`,
          caption:
            "Nernst-Planck: the total flux J_j is migration plus " +
            "diffusion. The minus sign is used when the two point in " +
            "opposite directions, the plus sign when they work together.",
        },
        {
          kind: "para",
          text:
            "The equation is written for every species in the " +
            "electrolyte - reactants and spectators alike - and the " +
            "unknowns are the field strength `E` and the concentration " +
            "gradients `dc_j/dx`. Not all gradients are free: " +
            "electroneutrality requires the charge-weighted gradients to " +
            "sum to zero, which leaves `N − 1` independent gradients. " +
            "That gives `N` equations in `N` unknowns - solvable in " +
            "principle, though in the general case only by computer. The " +
            "big news is that the system *closes* at all: a **steady " +
            "state** is genuinely reachable in which charges and " +
            "substances balance exactly and the voltage and " +
            "concentrations take unique values. Electrochemistry rests " +
            "on this closure.",
        },
        {
          kind: "para",
          text:
            "Two limiting cases are cheap. For uncharged components " +
            "(`z_j = 0`) the migration term dies and Nernst-Planck " +
            "collapses back into Fick's law. And for a dilute " +
            "electroactive minority swimming in a sea of inert ions, the " +
            "field term becomes a footnote - which is exactly the trick " +
            "the next section uses.",
        },
      ],
    },
    {
      id: "supporting-electrolyte",
      tone: "coral",
      title: "What the supporting electrolyte suppresses",
      minutes: 6,
      summary:
        "Drown the little electroactive ion in a sea of inert ones and " +
        "the solution's conductivity soars, the field collapses to " +
        "nothing, and migration disappears - leaving clean, " +
        "reproducible, purely diffusional delivery.",
      keyPoints: [
        "Excess foreign ions raise the conductivity sigma, so at a fixed current density the field strength E collapses (Ohm's law).",
        "In the limit the migration term vanishes and the reacting ion travels only by diffusion.",
        "The current equation reverts to the simple diffusion-limited form - charge still flows, but each ion arrives by diffusion.",
        "The result is the most precious gift a technique can ask for: reproducibility and clean limiting currents.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The Nernst-Planck equation has two terms, and an " +
            "experimentalist wants one of them out of the room. The way " +
            "to do it is old laboratory hygiene: a large excess of a " +
            "chemically inert **supporting (or 'base') electrolyte**.",
        },
        {
          kind: "para",
          text:
            "The trick is Ohm's law in disguise. The conductivity `σ` " +
            "of a solution is set by all its ions, not just the reactive " +
            "one. Flood the solution with foreign ions that take no part " +
            "in the reaction and `σ` climbs sharply. At a given current " +
            "density the field strength has to fall to match - `E = i/σ` " +
            "- and with a generous excess it shrinks to nothing. When " +
            "`E` is gone, so is the migration term of Nernst-Planck, " +
            "and the reactive ion is carried by diffusion alone.",
        },
        {
          kind: "para",
          text:
            "The stakes deserve emphasis. With excess supporting " +
            "electrolyte the reacting ion follows exactly the flux law " +
            "of an uncharged particle, the current takes the pure " +
            "diffusion form from the diffusion-layer section, and the " +
            "limiting current stays unchanged and predictable. The price " +
            "is none: the inert ions merely carry the field. They do not " +
            "dilute the analyte's concentration and they do not change " +
            "`κ`. What is *suppressed* is the messy many-body problem of " +
            "migration and diffusion happening at once for every species.",
        },
        {
          kind: "para",
          text:
            "This is not an engineering footnote; it is the reason " +
            "electrochemical measurements are reproducible at all. Remove " +
            "the supporting electrolyte and every flux drags the " +
            "electroneutrality field around with it, surface " +
            "concentrations shift, and the limiting current drifts with " +
            "the conditions. Add it, and the only parameter that decides " +
            "delivery is the diffusional one. The whole structure of " +
            "classical voltammetry - including the Levich equation you " +
            "meet in the last section - assumes this suppressed field.",
        },
      ],
    },
    {
      id: "binary-migration",
      tone: "amber",
      title: "Migration without a supporting electrolyte",
      minutes: 7,
      summary:
        "Take the supporting electrolyte away and a binary solution " +
        "surprises you: unreactive anions, refused a net flux, build a " +
        "field that speeds up the reacting cation. The limiting current " +
        "rises by an enhancement factor alpha.",
      keyPoints: [
        "Anions are excluded from the reaction, so their diffusive flux to the surface must be cancelled by a migrational flux away - a field is forced into being.",
        "The cation's two flux components then point the same way, and the total flux rises by alpha = 1 + tau-/tau+ over pure diffusion.",
        "alpha = 2 for symmetric electrolytes (e.g. CuSO4-type), 3 for ZnCl2, 1.5 for Ag2SO4.",
        "alpha > 1 whenever migration and diffusion work together (reacting cations in cathodic reactions, and so on); alpha < 1 when they clash, as in deposition from complex anions.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section covers what happens when there is no " +
            "supporting electrolyte - when the solution is a pure binary " +
            "electrolyte and the spectator ions matter in their own " +
            "right. The surprise is that migration refuses to vanish: the " +
            "anions' bookkeeping *forces* it into existence, and it makes " +
            "the limiting current larger than pure diffusion could ever " +
            "deliver.",
        },
        {
          kind: "para",
          text:
            "Suppose a binary electrolyte `Mτ+ Aτ-` of concentration " +
            "`c_k`, with the cation being reduced at the cathode. Current " +
            "flows; the cation concentration at the surface falls, and - " +
            "by electroneutrality - the anion concentration falls with " +
            "it. But anions take no part in the reaction, so in the " +
            "steady state their **net flux is zero**. The only way " +
            "Nernst-Planck can be satisfied is for the anions' diffusive " +
            "flux toward the surface to be matched by a migrational flux " +
            "away from it. A field therefore builds itself inside the " +
            "diffusion layer, pointed so as to push anions out. And that " +
            "same field pushes the *cations* - their diffusive and " +
            "migrational fluxes now point the same way.",
        },
        {
          kind: "para",
          text:
            "For the cation both supply routes aim at the electrode, so " +
            "the total flux exceeds the pure-diffusion value. The " +
            "arithmetic gives a tidy multiplier, the **enhancement " +
            "factor**:",
        },
        {
          kind: "formula",
          tex: String.raw`\alpha = 1 + \frac{\tau_-}{\tau_+}`,
          caption:
            "How far the current rises above the diffusion-only value in " +
            "a binary electrolyte. For a symmetric electrolyte tau+ = " +
            "tau-, so alpha = 2: migration doubles what pure diffusion " +
            "would deliver at the same gradient.",
        },
        {
          kind: "para",
          text:
            "The numbers bite. In this two-ion world the reactive " +
            "species' current obeys `i = z+ F J+` with the enhanced flux, " +
            "so the binary limiting current is the diffusion-limited " +
            "value multiplied by `α` - worth a corner of memory: **a " +
            "limiting current measured without supporting electrolyte is " +
            "not a pure diffusion current**. For symmetric electrolytes " +
            "`α = 2`; for `ZnCl₂` it is 3; for `Ag₂SO₄` it is 1.5. And " +
            "the transport numbers inside the layer turn strange: the " +
            "effective transport number of the reacting ion is 1 (it " +
            "carries every last coulomb) while that of the spectator is " +
            "0, even if the bulk transport numbers say otherwise.",
        },
        {
          kind: "para",
          text:
            "The sign of `α − 1` follows a crisp physical rule: migration " +
            "works *with* diffusion - `α > 1` - whenever the reactant is " +
            "a **cation in a cathodic reaction** (as above) or an " +
            "**anion in an anodic reaction**, and also for products of " +
            "the opposite polarities. It works against diffusion - " +
            "`α < 1` - in the mirrored set, the textbook case being " +
            "**cathodic deposition of a metal from a complex anion**: " +
            "the negatively charged ion has to swim against the field to " +
            "reach the reacting site, so the field *withholds* supply.",
        },
        {
          kind: "para",
          text:
            "The field itself is not free of charge. Integrating the " +
            "self-built field across the film gives a **diffusional " +
            "potential drop** on top of the ohmic drop - a piece of " +
            "internal voltage that depends on the concentration ratio " +
            "and vanishes only when both ions diffuse equally. It exists " +
            "even at zero current, whenever a gradient is held by hand, " +
            "and under current it makes the electrolyte behave as if " +
            "Ohm's law were slightly dishonest. This is the same " +
            "diffusion potential Lesson 3 met at a liquid junction, now " +
            "sitting inside a working cell.",
        },
      ],
    },
    {
      id: "convective-diffusion",
      tone: "emerald",
      title: "Convection and the boundary layer",
      minutes: 7,
      summary:
        "The bulk liquid is a delivery fleet, but it never reaches the " +
        "wall: a stagnant hydrodynamic boundary layer clings to every " +
        "electrode, and the diffusion layer sits nested inside it - about " +
        "ten times thinner.",
      keyPoints: [
        "Convective flux J = v c_j is always electroneutral - the medium sweeps charge-balanced solution, if it sweeps anything.",
        "At aqueous values (D ~ 10^-5 cm2/s, delta ~ 10^-2 cm) convection beats diffusion even at a negligible flow of 10^-3 cm/s.",
        "The Prandtl (hydrodynamic) boundary layer thickness delta_b is set by viscosity; the diffusion layer is delta/delta_b ~ Pr^-1/3, about one tenth of it.",
        "Natural convection (layers of 100-500 um) is why unstirred cells still pass steady current; narrow pores and matrices kill it outright.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Diffusion is slow and migration is a field effect, so how " +
            "does an experimenter deliver reactant on an industrial or " +
            "an analytical scale? The answer is **convection** - and, " +
            "right away, a surprise: convection never reaches the " +
            "electrode surface at all.",
        },
        {
          kind: "para",
          text:
            "Convective transport is transport with the moving medium - " +
            "solute hitching a ride on the flow. Its flux law is the " +
            "simplest in the lesson:",
        },
        {
          kind: "formula",
          tex: String.raw`J_{\nu,j} = v\,c_j`,
          caption:
            "Convective flux: the medium's linear velocity v carries a " +
            "concentration c_j. The medium itself is electroneutral, so " +
            "every convective flux is too - it shuffles charge in " +
            "perfect balance.",
        },
        {
          kind: "para",
          text:
            "How strong is it next to diffusion? A rough estimate gives " +
            "`J_d/J_ν ≈ D/(δv)`. Aqueous diffusion coefficients sit near " +
            "`10⁻⁵` cm²/s and a working diffusion layer near `10⁻²` cm, " +
            "and the ratio says the two modes are already comparable at " +
            "a flow velocity of `10⁻³` cm/s - a gentle drift. At any " +
            "decent flow, **convection dominates the bulk**. That is the " +
            "first half of convection's double act.",
        },
        {
          kind: "para",
          text:
            "The second half is the subtle one, and it explains why " +
            "stirring can never wash the diffusion layer away. Even in a " +
            "vigorously stirred solution a thin layer of liquid clings to " +
            "the solid surface - held by molecular forces - in which the " +
            "**velocity is zero at the wall** and builds up to the bulk " +
            "value over a finite distance. That zone of velocity gradient " +
            "is the **Prandtl, or hydrodynamic, boundary layer**, of " +
            "thickness `δ_b`.",
        },
        {
          kind: "para",
          text:
            "Inside this boundary layer there is no convection worth the " +
            "name, so transport to the electrode is purely diffusive (and " +
            "migrative). The diffusion layer is not the boundary layer - " +
            "it nests inside it, thinner, because momentum diffuses " +
            "faster than matter. Their ratio is set by a dimensionless " +
            "pair, the **Prandtl number**:",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{\delta}{\delta_b} \approx \left(\frac{D_j}{\nu_{\mathrm{kin}}}\right)^{\!1/3} = \mathrm{Pr}^{-1/3}`,
          caption:
            "The diffusion layer is Pr^-1/3 of the hydrodynamic boundary " +
            "layer, where Pr = nu_kin/D_j. In water, nu_kin ~ 10^-2 cm2/s " +
            "and D_j ~ 10^-5 cm2/s, so Pr ~ 10^3 and the diffusion layer " +
            "is roughly ten times thinner than the boundary layer.",
        },
        {
          kind: "para",
          text:
            "So the boundary layer is a two-tier system: from its outer " +
            "rim inward, convection levels the concentration right down " +
            "to the top of the diffusion layer, and only inside that " +
            "inner film does Fick's law make the final delivery. It is " +
            "the same pairing as Lesson 2's conductivity arguments: " +
            "mobility with diffusion, momentum with species - the same " +
            "mechanism told again.",
        },
        {
          kind: "para",
          text:
            "One more surprise closes the section. With no stirring at " +
            "all, the theory above would push `δ` to infinity and the " +
            "current to zero - yet unstirred cells carry steady current " +
            "routinely. The rescue is **natural convection**: spontaneous " +
            "flows driven by density differences from temperature and " +
            "concentration fluctuations (and gas bubbles, which stir " +
            "fiercely), which hold the layer to something like " +
            "`100–500 µm`. Natural convection cannot be predicted in " +
            "general, it depends heavily on geometry - none forms in " +
            "capillaries or narrow gaps - and holding the electrolyte in " +
            "a porous matrix kills it, so a diffusion layer simply spans " +
            "the whole gap.",
        },
      ],
    },
    {
      id: "hydrodynamics-flowby",
      tone: "teal",
      title: "Flow-by electrolysis and the Reynolds number",
      minutes: 7,
      summary:
        "Whether liquid sweeping past an electrode flows in layers or in " +
        "eddies is decided by the Reynolds number, and the boundary layer " +
        "grows along the electrode from the stagnation point - so the " +
        "diffusion layer, and the local current, depend on position.",
      keyPoints: [
        "Laminar flow survives below a critical Reynolds number (~10^3 on rough surfaces, ~10^5 on smooth ones); above it, turbulence sets in. This lesson follows laminar flow only.",
        "The hydrodynamic boundary layer grows from the stagnation point: delta_b ~ nu_kin^(1/2) y^(1/2) v^(-1/2).",
        "The diffusion layer follows: delta ~ D^(1/3) nu_kin^(1/6) y^(1/2) v^(-1/2), so the diffusive flux - and the current - fall along the electrode.",
        "Convection has a double role: it levels the bulk concentration (takes hardly any motion) and it sets the diffusion layer (a quantitative function of the velocity).",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section asks what the boundary-layer picture looks " +
            "like in a real geometry - a working electrode with liquid " +
            "flowing past it. You get the theory's controlling numbers " +
            "and one surprise: along a plate electrode the delivery is " +
            "not uniform at all.",
        },
        {
          kind: "para",
          text:
            "Which flow regime an electrode gets is fixed by one " +
            "dimensionless number, the **Reynolds number** " +
            "`Re = vL/ν_kin`. It compares inertial to viscous forces for " +
            "a flow velocity `v`, an electrode length `L`, and a " +
            "kinematic viscosity `ν_kin = η/ρ`. Below a critical `Re` " +
            "(about `10³` for rough surfaces, `10⁵` for smooth ones) the " +
            "flow is **laminar** - layers sliding parallel to the wall. " +
            "Above it the flow turns **turbulent** and eddies roam. " +
            "Every quantitative statement in this lesson belongs to " +
            "laminar flow, and everyone repeats the same caveat: only " +
            "the laminar world gives answers you can calculate.",
        },
        {
          kind: "para",
          text:
            "In a laminar flow past an electrode the velocity profile " +
            "repeats the boundary-layer logic: zero at the wall, bulk " +
            "value far out. But the layer does not keep a constant " +
            "thickness - it thickens along the electrode as the distance " +
            "`y` from the **stagnation point** (where the flow first " +
            "touches the surface) grows:",
        },
        {
          kind: "formula",
          tex: String.raw`\delta_b \approx \nu_{\mathrm{kin}}^{1/2}\,y^{1/2}\,v^{-1/2}`,
          caption:
            "Hydrodynamic boundary-layer thickness for laminar flow past " +
            "a flat surface: viscosity spreads the slowed zone, the " +
            "layer grows with distance from the stagnation point, and " +
            "the flow speed compresses it.",
        },
        {
          kind: "para",
          text:
            "Run the same geometry through the diffusion layer and the " +
            "dependence on position survives:",
        },
        {
          kind: "formula",
          tex: String.raw`\delta \approx D_j^{1/3}\,\nu_{\mathrm{kin}}^{1/6}\,y^{1/2}\,v^{-1/2}`,
          caption:
            "Diffusion-layer thickness in flow-by electrolysis. The " +
            "dependence on D_j is weak (power 1/3), which is why species " +
            "with very different diffusion coefficients still share " +
            "comparable layers; the growth with y^(1/2) is the geometric " +
            "signature of the flat plate.",
        },
        {
          kind: "para",
          text:
            "The consequences follow. Because the layer thickens with " +
            "`y`, the gradient at the surface - and with it the " +
            "diffusional flux and the local current density - **falls " +
            "along the electrode**. A long plate electrode does not do " +
            "one uniform job; it does a job that tapers with distance. " +
            "And recall the double nature of convection: barely any " +
            "motion suffices to level the bulk, but the *thinning* of " +
            "the diffusion layer is set quantitatively by the flow - the " +
            "faster the flow, the thinner the layer, the steeper the " +
            "gradient, the larger the diffusive flux. That trade, " +
            "velocity against film, is what every flow-by cell in " +
            "industry quietly exploits.",
        },
      ],
    },
    {
      id: "rde-levich",
      tone: "slate",
      title: "The rotating disk: how Levich levelled the field",
      minutes: 7,
      summary:
        "Spin the electrode instead of stirring the solution and every " +
        "point of the disk becomes the same: one uniform diffusion layer, " +
        "one uniform current, and the cleanest quantitative law in " +
        "electrochemistry - the Levich equation.",
      keyPoints: [
        "At a rotating disk electrode (RDE) the angular velocity omega = 2 pi f, and the two y-dependencies of the flat-plate theory cancel exactly: delta stays uniform.",
        "Every point of the accessible surface carries the same diffusion layer and the same current - uniformly accessible by design.",
        "Levich (1944): delta_RDE = 1.61 D_j^(1/3) nu_kin^(1/6) omega^(-1/2), and i_RDE = 0.62 (n/nu_j) F D_j^(2/3) nu_kin^(-1/6) omega^(1/2) (c_V - c_S).",
        "Practical speeds (60 to 10,000 rpm) sweep delta from about 60 to 4.5 um; the rotating ring-disk electrode (Frumkin 1959) adds a concentric ring whose collection efficiency N ~ 0.4 assays the disk products.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about building an electrode whose delivery " +
            "is *known*, uniform and tunable - the laboratory instrument " +
            "of the whole discipline. The answer is the **rotating disk " +
            "electrode** (RDE), and its mathematical champion was " +
            "Veniamin Levich.",
        },
        {
          kind: "para",
          text:
            "The RDE inverts the flow-by geometry: instead of pushing " +
            "liquid past a static plate, it **spins the plate itself**. " +
            "A disk at the end of a shaft turns about its vertical axis " +
            "with angular velocity `ω = 2πf` (`f` revolutions per " +
            "second). Liquid is drawn up to the disk's center, flung " +
            "outward by centrifugal force, and replaced from below - a " +
            "steady, axisymmetric pump aimed at the center line.",
        },
        {
          kind: "para",
          text:
            "The hydrodynamic magic is cancellation. For a flat plate " +
            "the layer thickened with distance `y` and thinned with the " +
            "local velocity `ωr` - and at the disk that distance and " +
            "that velocity rise together from the center outward. In " +
            "Eq. (4.34) the two dependences **cancel each other**, " +
            "leaving a diffusion layer of constant thickness across the " +
            "whole disk. The RDE is an electrode with a **uniformly " +
            "accessible surface**: every patch sees the same layer, the " +
            "same gradient, the same current. Nothing else in " +
            "electrochemistry achieves this so cleanly.",
        },
        {
          kind: "para",
          text:
            "Levich's 1944 solution of the Navier-Stokes side of the " +
            "problem produced the quantitative heart of the technique:",
        },
        {
          kind: "formula",
          tex: String.raw`\delta_{\mathrm{RDE}} = 1.61\,D_j^{1/3}\,\nu_{\mathrm{kin}}^{1/6}\,\omega^{-1/2}`,
          caption:
            "Diffusion-layer thickness at a rotating disk, uniform over " +
            "the whole surface. Spin faster and the layer thins as " +
            "omega^(-1/2); the constant 1.61 comes from solving the flow " +
            "field (Levich, 1944).",
        },
        {
          kind: "formula",
          tex: String.raw`i = 0.62\,\frac{n}{\nu_j}\,F\,D_j^{2/3}\,\nu_{\mathrm{kin}}^{-1/6}\,\omega^{1/2}\,(c_{V,j} - c_{S,j})`,
          caption:
            "The Levich equation: the current at a rotating disk, and " +
            "its dependence on the spin rate omega^(1/2), the diffusion " +
            "coefficient D_j^(2/3) and the kinematic viscosity " +
            "nu_kin^(-1/6). At the limiting current (c_S -> 0), a Levich " +
            "plot of i against omega^(1/2) is a straight line through " +
            "the origin.",
        },
        {
          kind: "para",
          text:
            "The precision was stunning for its era: electrochemists " +
            "quote the 0.62 and 1.61 constants as proof that the field " +
            "knows its hydrodynamics, and Levich plots double as " +
            "**diffusion-coefficient measuring instruments**. Practical " +
            "disks run from about 60 to 10,000 rpm, which in water " +
            "sweeps the diffusion layer from roughly `60 µm` down to " +
            "`4.5 µm`. Spin much faster and whirling flow and wobble " +
            "ruin the laminar promise.",
        },
        {
          kind: "para",
          text:
            "The rotating family gained a second member in 1959, when " +
            "Frumkin, Nekrasov, Levich and Ivanov added a thin **ring** " +
            "around the disk - the **rotating ring-disk electrode** " +
            "(RRDE). The disk runs the primary reaction; products, swept " +
            "outward by the same flow, pass over the ring where they " +
            "are caught electrochemically. Hydrodynamic theory says " +
            "exactly what fraction `N` reaches the ring - a bonus of the " +
            "uniform flow - typically about **40%**. The ring current, " +
            "scaled by `N`, reports how fast the disk's reaction is " +
            "producing anything reducible or oxidizable downstream: " +
            "clean detection of intermediates and parallel pathways. " +
            "Between them, Levich's constant-thickness layer and the " +
            "RRDE's ring opened the era of *physicochemical " +
            "hydrodynamics* - and with it, the modern instrument rack.",
        },
      ],
      cta: {
        title: "Matter on a deadline",
        body:
          "Lesson 4 put the solution under load and learned its one " +
          "hard truth: an electrode can use up reactant only as fast as a " +
          "thin still film at its surface is refreshed. Fick's laws " +
          "describe the delivery, the diffusion layer sizes it, the " +
          "limiting current sets the ceiling, and the supporting " +
          "electrolyte - or its absence - decides whether migration " +
          "joins in. Faster flows beat thinner films, and the rotating " +
          "disk turned that idea into an equation with a straight-line " +
          "plot. Lesson 5 asks the natural follow-up: once matter is " +
          "delivered, how willingly does the *interface itself* convert " +
          "it? That is electrode kinetics - the Butler-Volmer equation " +
          "and the exchange current. Test yourself on this lesson's " +
          "bank first.",
        href: "/lessons/lesson-4/quiz",
        linkLabel: "Take the Lesson 4 questions",
        secondaryHref: "/lessons/lesson-3",
        secondaryLabel: "Recheck Lesson 3",
      },
    },
  ],
};
