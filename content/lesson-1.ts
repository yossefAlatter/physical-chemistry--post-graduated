// Lesson 1 - Ionic conduction.
//
// Source syllabus: Bagotsky ch.1 (Electric Currents in Ionic Conductors),
// with the electrode-process framing from Bard & Faulkner ch.1. Written
// fresh for this site: the books set the coverage and the numbers, but
// every sentence, figure and question here is original.

import type { Lesson } from "./types";
import { lesson1Mcq } from "./lesson-1.mcq";

export const lesson1: Lesson = {
  slug: "lesson-1",
  label: "Lesson 1",
  title: "Ionic conduction",
  summary:
    "How ions carry current through a solution: mobility, conductivity, " +
    "transport numbers, the electrode as the handover point, and the two " +
    "bookkeeping rules - Faraday's laws and mass balance - that tie the " +
    "loop closed.",
  order: 1,
  minutes: 58,
  mcq: lesson1Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Lesson 0 gave you the words. This lesson adds the numbers. It " +
        "follows the order of Bagotsky's Chapter 1: first the particles " +
        "that carry charge and how fast they move, then what happens at " +
        "the electrode, then how to group electrodes into families, and " +
        "finally the two rules of bookkeeping - Faraday's laws and mass " +
        "balance - that hold the whole circuit together.",
    },
    {
      kind: "para",
      text:
        "Read the sections in order. Each one uses only what came before. " +
        "At the end of every section there are three quick questions. If " +
        "you get them right, move on; if not, go back to the paragraph " +
        "they point you to.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The two ideas in this lesson",
      body:
        "**How does charge travel through the solution from one electrode " +
        "to the other?** The answer is mobility, conductivity and " +
        "transport numbers. **What has to happen at the two surfaces so " +
        "the circuit can close?** The answer is electrode reactions, the " +
        "families of electrodes, and the bookkeeping of Faraday's laws and " +
        "mass balance. Every later lesson grows out of one of these two " +
        "ideas.",
    },
  ],
  sections: [
    {
      id: "two-kinds-of-conductor",
      tone: "azure",
      title: "The families of conductor",
      minutes: 6,
      summary:
        "Sort materials by what carries the current - electrons, ions, or " +
        "both. Wherever the carrier changes at a boundary, a chemical " +
        "reaction has to take over - that boundary is an electrode.",
      keyPoints: [
        "Current needs charge carriers. Name a conductor by what moves: electrons (electronic), ions (ionic), or both (mixed).",
        "Semiconductors let current through one way, because their junctions are partly emptied of carriers.",
        "Where the carrier changes type - at an electrode - conduction must hand over to a chemical reaction.",
        "Inside one conductor the stream is dull. The interesting chemistry starts exactly where two different kinds of conductor meet.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Everything that carries a current can be sorted by one " +
            "question: *what moves?* In a copper wire it is electrons. In " +
            "a salt solution it is ions. In a rust film it is both. As soon " +
            "as the answer changes from one material to the next, the " +
            "current cannot simply keep going - a chemical reaction has to " +
            "take over the job. That change of carriers is the whole " +
            "reason electrochemistry exists.",
        },
        {
          kind: "para",
          text:
            "An **electronic conductor** carries current with electrons. " +
            "All metals do this, along with materials such as graphite, " +
            "carbon black, some oxides and compounds like tungsten carbide. " +
            "An **ionic conductor** carries current with ions, and is also " +
            "called an **electrolyte**. The everyday examples are water " +
            "solutions of acids, bases and salts; the others are molten " +
            "salts and solid electrolytes. A few materials are **mixed** " +
            "conductors, carrying electrons and ions at the same time - " +
            "rust on iron is the familiar example, and it is the reason " +
            "iron can rust under water at all.",
        },
        {
          kind: "para",
          text:
            "Two more kinds round off the map. **Semiconductors** (silicon, " +
            "germanium) do conduct, but they run on a special trick at " +
            "their junctions, which the next section unpacks. " +
            "**Insulators** have no free carriers at all, so current gets " +
            "no way past them - we care about them mainly because they " +
            "stop a cell from short-circuiting.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Electronic:** copper, silver, graphite, some oxides. Only electrons move; a metal-metal join does no chemistry.",
            "**Ionic:** salt water, molten salts, solid electrolytes. Only ions move; where one of these meets a metal, a reaction must take over.",
            "**Mixed:** rust films and some intercalation solids. Both carriers move, so the material can support surprising reactions.",
            "**Semiconductor:** silicon, germanium. The special trick is at the junction - unpacked in the next section.",
          ],
        },
        {
          kind: "callout",
          variant: "key",
          title: "The junction is the subject",
          body:
            "Here a **junction** simply means the contact point where two " +
            "different materials meet. Inside a single conductor the flow " +
            "is dull: electrons drift one " +
            "way and that is the end of it. The science begins at that " +
            "junction, because only there must a chemical reaction turn " +
            "one kind of carrier into the other. Potentials, rates, " +
            "double layers and instruments are all consequences of that " +
            "one handover.",
        },
        {
          kind: "para",
          text:
            "Keep two consequences in mind from the start. First, the " +
            "handover happens at a surface, so the amount of reaction " +
            "scales with the contact area - that is why porous electrodes " +
            "are so useful. Second, the handover must balance exactly: " +
            "every carrier that arrives has to be replaced by an equal " +
            "number going out. Keeping that balance is the job of " +
            "Faraday's laws and mass balance, which the rest of this " +
            "lesson sets out.",
        },
      ],
    },
    {
      id: "semiconductors-and-junctions",
      tone: "coral",
      title: "Semiconductors and p-n junctions",
      minutes: 6,
      summary:
        "Semiconductors look ordinary at first, but a tiny p-n junction " +
        "changes everything: a carrier-free seam that lets current " +
        "through one way only. It is the same \"thin barrier at a " +
        "surface\" idea as an electrode.",
      keyPoints: [
        "A tiny impurity changes a semiconductor's carriers. Extra electrons make an n-type material; too few make a p-type, which has holes that can move.",
        "Where n-type meets p-type, electrons and holes cancel and leave an empty depletion layer - a carrier-free seam.",
        "The battery decides which way carriers are pushed: one polarity pulls them away from the seam (the strip widens and blocks), the other pushes them into the seam (the strip thins and conducts).",
        "So the junction is a one-way gate: current flows in one direction and is blocked in the other.",
        "An electrode in this course is built on the same idea as this thin surface barrier, except its carriers are ions in a liquid rather than holes in a solid.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A **conductor** carries current happily on its own. A " +
            "**semiconductor** is more like a switch that has to be " +
            "turned on by a small piece of physics. Add an impurity with " +
            "*more* electrons than the host material and the crystal " +
            "gains spare electrons to move - that is an **n-type** " +
            "semiconductor. Add one with *fewer* and the crystal is left " +
            "with empty **holes** that can move - that is a **p-type** " +
            "semiconductor.",
        },
        {
          kind: "para",
          text:
            "A junction is the contact where two different materials " +
            "meet. Put a p-type piece and an n-type piece together and " +
            "the two carriers immediately migrate: electrons from the " +
            "n-side drift toward the p-side, and holes from the p-side " +
            "drift toward the n-side. Where they meet, an electron falls " +
            "into a hole and they cancel. That leaves a thin strip at " +
            "the seam with almost no free carriers - the **depletion " +
            "layer**.",
        },
        {
          kind: "figure",
          src: "pn_junction.png",
          caption:
            "A p-n junction. Electrons from the n-side and holes from the " +
            "p-side meet at the seam and cancel, leaving an empty " +
            "depletion layer. A layer with no free carriers blocks the " +
            "current in one direction, so the junction acts as a one-way " +
            "gate.",
          alt:
            "Diagram of a p-n junction: an n-type region with loose electrons, a p-type region with holes, and a carrier-free depletion layer where they meet, followed by a one-way diode symbol.",
        },
        {
          kind: "para",
          text:
            "Here the battery is the referee. Connect it so that its " +
            "positive rail sits on the n-side and its negative on the " +
            "p-side, and it pulls electrons deep into the n-side and holes " +
            "deep into the p-side - away from the seam. The empty strip " +
            "widens, so there are no carriers to cross: the junction " +
            "blocks. Connect it the other way and it pushes electrons " +
            "and holes into the seam instead, so the empty strip thins and " +
            "current floods through. Same junction, same materials, " +
            "current allowed one way and blocked the other.",
        },
        {
          kind: "para",
          text:
            "That one-way behaviour is a **diode**: free conduction in " +
            "one direction, blocked in the other. It is the same idea " +
            "that rectifies electricity, lights up LEDs and lets a solar " +
            "cell work. And an electrode in this course is built on the " +
            "same principle - a thin surface layer decides whether " +
            "current can cross - only there the carriers are ions in a " +
            "liquid instead of holes in a solid.",
        },
      ],
    },
    {
      id: "ions-in-solution",
      tone: "indigo",
      title: "Ions in electrolyte solutions",
      minutes: 6,
      summary:
        "Where the free charges in a solution come from: the splitting " +
        "of dissolved substances, how much they split, and the strict " +
        "charge-balance rule that the body of the solution never breaks.",
      keyPoints: [
        "Dissolving an electrolyte lets its ions move freely; the fraction that actually splits is the degree of dissociation α. Strong electrolytes have α ≈ 1, weak ones α ≪ 1.",
        "Charge balance fixes the bookkeeping: z₊τ₊ = z₋τ₋ = zₖ, and the whole solution in bulk is electrically neutral, Σ zⱼ cⱼ = 0.",
        "Ion concentrations follow the degree of splitting: c₊ = ατ₊cₖ and c₋ = ατ₋cₖ, so the solution has one master concentration cₖ.",
        "The only places allowed to break charge balance are one-molecule-thick layers at the interface.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Take a salt like sodium chloride, NaCl. In the solid it is " +
            "just a neatly packed lattice of Na⁺ and Cl⁻ ions that cannot " +
            "move. Add water and the picture changes: the water molecules, " +
            "which tug on charges, pry the ions loose and they start to " +
            "drift. A crystal that could not carry any current becomes a " +
            "solution full of moving ions.",
        },
        {
          kind: "para",
          text:
            "In words, the splitting looks like this:",
        },
        {
          kind: "formula",
          tex: String.raw`M_{\tau_+} A_{\tau_-} \rightleftharpoons \tau_+ M^{z_+} + \tau_- A^{z_-}`,
          caption:
            "A general formula unit splits into cations (positive) and " +
            "anions (negative). For NaCl in water this is simply NaCl → " +
            "Na⁺ + Cl⁻. τ₊ and τ₋ are how many of each ion " +
            "come out of one formula unit.",
        },
        {
          kind: "para",
          text:
            "Not all of the material splits. We call a substance a **strong " +
            "electrolyte** when almost every formula unit breaks free, so " +
            "its degree of dissociation is α ≈ 1 - most salts and the " +
            "strong acids and bases fall here. We call it a **weak " +
            "electrolyte** when only a little breaks free, so α is perhaps " +
            "a few percent - acetic acid (the active part of vinegar) is " +
            "the usual example. Either way, the same two rules of " +
            "bookkeeping apply.",
        },
        {
          kind: "formula",
          tex: String.raw`c_+ = \alpha \tau_+ c_k, \qquad c_- = \alpha \tau_- c_k`,
          caption:
            "The amounts of positive and negative ions from the degree of " +
            "splitting. The solution contains several particles yet has " +
            "one master concentration, cₖ.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Strong does not mean corrosive",
          body:
            "Strong is only about how completely the substance splits into " +
            "ions. It says nothing about reactivity, pH or danger - those " +
            "depend on *which ions are formed*, not on how many of them " +
            "there are.",
        },
        {
          kind: "para",
          text:
            "Everything inside the solution is held together by one rule: " +
            "**charge balance**, or electroneutrality. Any lump of liquid " +
            "that is a little bigger than one molecule has the positive " +
            "and negative charges exactly cancelling:",
        },
        {
          kind: "formula",
          tex: String.raw`\sum_j z_j c_j = 0`,
          caption:
            "The body of the solution is never net-charged. Each ion type " +
            "contributes its charge number times how much of it there is, " +
            "and the total is always zero.",
        },
        {
          kind: "para",
          text:
            "This is the quiet rule behind every large-scale result. A " +
            "solution cannot pile one kind of charge in one corner and " +
            "leave a shortage somewhere else: every charge that moves one " +
            "way is balanced by something moving the other way. Later " +
            "chapters build on this - the dividing of that movement into " +
            "transport numbers (next section), and the charged layer that " +
            "sits at the electrode surface (Lesson 6). The one exception " +
            "is exact and important: a one-molecule-thick film at a " +
            "boundary, where the two sides can trade charge.",
        },
      ],
    },
    {
      id: "conductivity-mobility",
      tone: "violet",
      title: "Conductivity, mobility and the cell constant",
      minutes: 7,
      summary:
        "In a solution, electrons are not the only charge carriers: every " +
          "ion drifts under the field, at a speed fixed by its mobility, and " +
          "the conductivity adds up all of those contributions. But the " +
          "experiment itself only measures a conductance - the cell constant " +
          "is the bridge that turns it into the material's conductivity.",
      keyPoints: [
        "Mobility `uⱼ` is the drift speed of an ion per unit field " +
        "(m² V⁻¹ s⁻¹): `vⱼ = uⱼE`. It is set by the balance between the " +
        "field's pull and the solvent's friction.",
        "Conductivity `σ = F Σⱼ zⱼ cⱼ uⱼ` adds every ion type's charge, " +
        "concentration and speed. `σ` (S/m) belongs to the solution, not " +
        "to the cell.",
        "Transport number `tⱼ = iⱼ/i` is the share of the total current " +
        "carried by species `j`; all the `tⱼ` sum to 1.",
        "A meter measures conductance `G = 1/R`, not `σ`. The cell " +
        "constant `K = l/A` links them: `σ = G·K`. Find `K` by " +
        "calibrating with a standard (0.1 M KCl).",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The previous section ended with electroneutrality: the bulk of " +
            "the solution carries no net charge. The natural next question is " +
            "how well such a solution actually conducts electricity, and how " +
            "that is measured. Two ideas are needed: the physics of why ions " +
            "move, and the geometry of the cell in which you measure them.",
        },
        {
          kind: "para",
          text:
            "Apply a steady electric field `E`. Every ion of type `j` " +
            "carries a charge `zⱼF` per mole, so the field pulls on it " +
            "with a driving force of `zⱼFE` per mole. The solvent does not " +
            "let the ion accelerate freely: viscous friction pushes back " +
            "with a force proportional to the drift speed, `vθ`, where " +
            "`θ` is the drag coefficient. The ion speeds up until the pull " +
            "and the drag exactly balance, and it then drifts at that " +
            "constant speed. It is this balance - electrical pull against " +
            "viscous drag - that decides how fast ions really move, not " +
            "the field alone.",
        },
        {
          kind: "formula",
          tex: String.raw`v_j = u_j E, \qquad J_j = c_j v_j = c_j u_j E, \qquad i_j = z_j F c_j u_j E`,
          caption:
            "Balancing the forces gives `v = zⱼFE/θ`. Dividing by `E` " +
            "defines the **mobility** `uⱼ = vⱼ/E (= zⱼF/θ)` - a " +
            "property of that ion, in that solvent, at that temperature. " +
            "The molar flux density `Jⱼ` counts how many moles of ion `j` " +
            "cross one square metre per second, and `iⱼ = zⱼFJⱼ` is the " +
            "share of the current density it carries.",
        },
        {
          kind: "para",
          text:
            "Positive ions and negative ions drift in opposite directions, " +
            "but both carry charge in the same direction of conventional " +
            "current, so their currents add. Adding the partial currents " +
            "over every species makes the field `E` a common factor - and " +
            "that is exactly Ohm's law written at the level of individual " +
            "ions:",
        },
        {
          kind: "formula",
          tex: String.raw`i = \sigma E, \qquad \sigma = F \sum_j z_j c_j u_j = F \sum_j |z_j| c_j u_j`,
          caption:
            "`i = σE` is the differential form of Ohm's law; " +
            "`σ = F Σⱼ |zⱼ| cⱼ uⱼ` is the conductivity. Each ion type " +
            "contributes its charge number, how much of it there is, and " +
            "how fast it moves. The absolute value of `zⱼ` is used " +
            "because anions and cations both carry conventional current " +
            "in the same direction.",
        },
        {
          kind: "para",
          text:
            "Most surprises in this subject come from that sum. **Mobility** " +
            "values for ions in water are around `10⁻⁸ m² V⁻¹ s⁻¹`. **The " +
            "proton is the great exception**: `H⁺` moves several times " +
            "faster than other ions. The reason is that a proton does not " +
            "swim like an ordinary ion - it *hops* from water molecule to " +
            "water molecule (the Grotthuss mechanism). That one special " +
            "case is why acid solutions conduct far better than their size " +
            "suggests, why water is never quite insulating (trace `H⁺` and " +
            "`OH⁻` from autoprotolysis always conduct a little), why pH " +
            "electrodes and fuel-cell membranes work, and why concentrated " +
            "sulphuric acid tops the table below.",
        },
        {
          kind: "table",
          head: ["Material", "Conductivity (order of magnitude)", "Carriers"],
          widths: [2, 2, 1.4],
          rows: [
            ["Copper wire", "6 × 10⁷ S/m", "electrons"],
            ["Concentrated H₂SO₄", "~80 S/m", "ions (H⁺ dominating)"],
            ["0.1 M KCl (standard)", "~1.3 S/m", "K⁺ and Cl⁻"],
            ["Seawater", "~4 S/m", "mixed ions"],
            ["Pure water, carefully purified", "~5 × 10⁻⁶ S/m", "ionised water, nearly nothing"],
          ],
        },
        {
          kind: "para",
          text:
            "That range - seven powers of ten from pure water to " +
            "concentrated acid - is why conductivity is such a useful " +
            "quantity in practice. Even a *tiny* current can be carried by " +
            "a few very mobile ions, which is what makes the background " +
            "conductivity of water tiny but never zero. Now the second " +
            "half of the story: geometry. Between two plates of area `A` " +
            "separated by `l`, what a meter measures is the resistance " +
            "`R`, or its inverse, the **conductance** `G` (siemens).",
        },
        {
          kind: "formula",
          tex: String.raw`G = \frac{1}{R} = \sigma \frac{A}{l} = \sigma \frac{1}{K}, \qquad K = \frac{l}{A}`,
          caption:
            "`G` is what the instrument reads; `σ` is a property of the " +
            "material. The bridge between them is the cell constant " +
            "`K = l/A` - a property of YOUR electrodes, not of the " +
            "solution. Widen the plates and `G` rises; pull them apart " +
            "and `G` falls, exactly as `A/l` says.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Conductance is not conductivity",
          body:
            "`G` (siemens) belongs to the cell: the same solution in a " +
            "wider, flatter cell gives a bigger `G`. `σ` (S/m) belongs to " +
            "the solution itself. To turn a measured `G` into a `σ` you " +
            "need `K`. Commercial meters find it by calibration: fill the " +
            "cell with a standard of known conductivity (0.1 M KCl is the " +
            "workhorse), record the conductance, and take " +
            "`K = σ_standard / G_measured`. You never measure `l` and `A` " +
            "directly - you determine `K`.",
        },
        {
          kind: "worked",
          title: "From a measured resistance to a conductivity",
          given:
            "A conductivity cell reads R = 250 Ω. Calibrated with standard " +
            "KCl, its cell constant is K = 1.00 cm⁻¹.",
          steps: [
            String.raw`G = 1/R = 1/250 = 4.00 \times 10^{-3}\ \mathrm{S}`,
            String.raw`\sigma = G \times K = 4.00\times10^{-3}\ \mathrm{S} \times 1.00\ \mathrm{cm}^{-1}`,
            String.raw`\sigma = 4.0 \times 10^{-3}\ \mathrm{S\,cm}^{-1} = 0.4\ \mathrm{S\,m}^{-1}`,
          ],
          result:
            "`σ ≈ 0.4 S/m. Skip the calibration and you are left with a " +
            "bare conductance in siemens and no information about the " +
            "material - which is exactly the confusion the cell constant " +
            "exists to prevent.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Transport numbers and molar conductivity",
          body:
            "Two more quantities follow straight from the same picture. " +
            "The **transport number** of a species is the fraction of the " +
            "current it carries, `tⱼ = iⱼ/i = (zⱼcⱼuⱼ)/(Σₖ zₖcₖuₖ)`, " +
            "and the fractions add up to 1. For a dilute 1:1 electrolyte " +
            "this simplifies to `t₊ = u₊/(u₊ + u₋)`. The **molar " +
            "conductivity** `Λ = σ/c` (S cm² mol⁻¹) removes the dependence " +
            "on concentration and approaches a limiting value `Λ⁰` on " +
            "dilution - the quantity Kohlrausch's law ties to the " +
            "individual ion mobilities. Both quantities return constantly " +
            "from Lesson 3 onward.",
        },
      ],
    },
    {
      id: "circuits-electrodes",
      tone: "rose",
      title: "Galvanic circuits and what an electrode is",
      minutes: 6,
      summary:
        "String electronic and ionic conductors into one loop and every " +
        "junction becomes a chemistry set. The electrode is that junction, " +
        "and it is never just a piece of metal.",
      keyPoints: [
        "A circuit with at least one ionic conductor is a galvanic circuit; its physical form is the electrochemical cell.",
        "An electrode is exactly the junction of an electronic and an ionic conductor - the place where the handover happens.",
        "Cell diagrams read like maps: one bar `|` is electronic|ionic, a broken bar `¦` is ionic|ionic (a liquid junction).",
        "A properly open circuit ends in the same metal, so its two ends can be compared - that is how an open-circuit voltage is defined at all.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A circuit you can touch in a lab is not one conductor but a " +
            "*sequence* of them. The moment one of them conducts by ions " +
            "instead of electrons, the whole loop changes character. This " +
            "section gives you the map of that loop: the notation for " +
            "drawing it, the name for each junction, and the exact " +
            "definition of an electrode.",
        },
        {
          kind: "para",
          text:
            "A purely electronic loop is the electrician's circuit: every " +
            "segment carries electrons, the junctions change nothing, and " +
            "no chemistry happens. **Add one ionic conductor and the loop " +
            "becomes a galvanic circuit**, also called a galvanic (or " +
            "electrochemical) cell. Here the word *galvanic* describes the " +
            "*circuit*, not a claim that it is running by itself - the same " +
            "word with a different job, worth holding on to.",
        },
        {
          kind: "para",
          text:
            "Such a loop is written as a scheme. Every interface gets a " +
            "mark: a single vertical bar for electronic | ionic, and a " +
            "broken bar for ionic | ionic (a liquid junction, where ions " +
            "diffuse across a boundary between two solutions):",
        },
        {
          kind: "table",
          head: ["Scheme", "What it denotes"],
          widths: [2, 3],
          rows: [
            ["`Cu | Zn | ZnCl₂ (aq) | graphite | Cu`", "A complete cell: copper leads, a zinc electrode, the solution, a graphite electrode, back to copper."],
            ["`Cu | Zn | ZnSO₄ (aq) ¦ CuSO₄ (aq) | Cu`", "The same idea with two compartments joined by a liquid junction instead of a salt bridge."],
          ],
        },
        {
          kind: "callout",
          variant: "key",
          title: "The definition worth framing",
          body:
            "**An electrode is an electronic conductor in contact with an " +
            "ionic conductor.** Nothing more, nothing less. The copper lead " +
            "is not the electrode; the beaker of solution is not the " +
            "electrode; the junction of the two is. In practice the word is " +
            "stretched to mean the whole *system* - 'a silver electrode' " +
            "means the metal, the solution around it, and any gas or film " +
            "taking part in its reaction - but the definition above is the " +
            "one that never lets you down.",
        },
        {
          kind: "para",
          text:
            "A loop is *properly open* when both ends are the same kind of " +
            "conductor - in practice the same metal - so that a voltmeter " +
            "clamped between them compares like with like. That fussiness " +
            "matters because of what the meter reads. The voltage across a " +
            "properly open galvanic circuit is the *sum of the potential " +
            "jumps at every interface* (the Galvani potentials), and none " +
            "of those jumps can be measured on its own. This is the first " +
            "glimpse of the deep problem in the field - a single electrode " +
            "potential is, strictly, not a measurable thing - and it is " +
            "exactly what Lesson 2 takes on.",
        },
        {
          kind: "para",
          text:
            "So the map is complete: one kind of carrier on one side of the " +
            "junction, a different kind on the other, a chemical reaction " +
            "demanded in between, and a voltmeter that can only ever see " +
            "the whole sum. The next section drives through the junction " +
            "and asks what the reaction has to look like.",
        },
      ],
    },
    {
      id: "electrode-reactions",
      tone: "coral",
      title: "Passage of current through the electrodes",
      minutes: 7,
      summary:
        "Where the carrier changes, chemistry must take over. The electrode " +
        "reaction is the relay, and the reactions at the two electrodes are " +
        "locked together by their stoichiometry.",
      keyPoints: [
        "A metal-metal junction passes the same carriers freely; at an electrode the carriers differ, so current continues only through a reaction.",
        "An anodic reaction must *make* electrons (oxidation); a cathodic reaction must *use them up* (reduction).",
        "The two reactions are coupled: the same charge passes both, so their equations combine into one overall reaction.",
        "Faradaic current changes the surface by chemistry; nonfaradaic current only charges the double layer - a background that is always present.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Current arrives at the junction carried by electrons and " +
            "leaves it carried by ions, or the other way round. Something " +
            "has to perform that conversion, and it has to follow rules. " +
            "This section calls that conversion the electrode reaction and " +
            "spells out its two rules: it must be a redox reaction, and it " +
            "must be coupled by stoichiometry to the reaction at the other " +
            "electrode.",
        },
        {
          kind: "para",
          text:
            "Compare three junctions to see why the electrode is special. " +
            "**Metal-metal:** both sides carry electrons, the carriers cross " +
            "freely, nothing builds up, and no chemistry happens. " +
            "**Semiconductor:** a layer with no carriers builds up and " +
            "blocks traffic one way - it rectifies, but still does no " +
            "reaction. **Electrode (electronic | ionic):** the incoming and " +
            "outgoing carriers are different species, so a steady current " +
            "needs a *steady sink* for what arrives and a *steady source* " +
            "for what leaves. The reaction at the surface is both the sink " +
            "and the source.",
        },
        {
          kind: "para",
          text:
            "The two rules follow directly from counting particles. **Rule " +
            "one - the reaction must balance the records on both sides:**",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "At the **anode**, electrons *leave* the junction for the wire, so the anodic reaction must **make** electrons - it is an oxidation.",
            "At the **cathode**, electrons *arrive* from the wire, so the cathodic reaction must **use them up** - it is a reduction.",
          ],
        },
        {
          kind: "para",
          text:
            "Example: push current left to right through `Cu | Zn | ZnCl₂ " +
            "(aq) | graphite | Cu` and the zinc becomes the cathode, " +
            "depositing metal (`Zn²⁺ + 2e⁻ → Zn`) while chloride is " +
            "oxidised at the graphite anode (`2Cl⁻ → Cl₂ + 2e⁻`). Remove " +
            "the electrons and the two combine into the overall reaction " +
            "`ZnCl₂ → Zn + Cl₂` - no electrons left in sight, a case of " +
            "electricity driving a decomposition.",
        },
        {
          kind: "para",
          text:
            "**Rule two - the reactions are coupled.** The same current " +
            "passes both electrodes, so the number of electrons released " +
            "per second at the anode exactly equals the number used per " +
            "second at the cathode. That ties the two stoichiometries " +
            "together: the anode and cathode halves must be written with " +
            "the *same* number of electrons per reaction `n`, or the two " +
            "will not cancel. In a fully symmetric cell - two identical " +
            "electrodes - the overall reaction just moves material from one " +
            "electrode to the other, which is exactly what happens when a " +
            "rechargeable battery is cycled.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Faradaic and nonfaradaic current",
          body:
            "Bard & Faulkner split all current at an electrode into two " +
            "kinds. **Faradaic** current is the charge transfer you have " +
            "been reading about: it obeys Faraday's law and changes the " +
            "surface by chemistry. **Nonfaradaic** current only charges or " +
            "discharges the electrical double layer - a capacitor, not a " +
            "reaction. Both flow whenever you disturb an electrode, so in " +
            "every experiment the nonfaradaic charging current is a " +
            "background that has to be separated out. The double layer " +
            "gets its full treatment in Lesson 6.",
        },
        {
          kind: "para",
          text:
            "Finally, see the reaction as a **process**, not a single " +
            "event. From the body of the solution to the wire, a consumed " +
            "species must (1) be carried to the surface, (2) undergo " +
            "electron transfer, and (3) deal with any chemical steps and " +
            "surface adsorption around it. The slowest step sets the rate. " +
            "That one idea organises Lessons 4 and 5, where mass transfer " +
            "and kinetics each take a turn as the slowest step.",
        },
      ],
    },
    {
      id: "classification",
      tone: "amber",
      title: "Classifying electrodes and electrode reactions",
      minutes: 7,
      summary:
        "Reacting or nonconsumable, first or second kind, gas electrodes, " +
        "invertible or not, one job or several. The classification is " +
        "practical: it tells you what to expect and what to control.",
      keyPoints: [
        "Reacting (consumable) electrodes are rebuilt by the reaction; nonconsumable electrodes only pass electrons and catalyse.",
        "First-kind electrodes make soluble ions; second-kind electrodes form a solid salt or oxide on the metal.",
        "Invertible reactions will run backwards; *invertible* and *reversible* are different words and both matter.",
        "By function: current-carrying (working and auxiliary) versus indicator electrodes; a reference electrode is the indicator you trust.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Handed a device - a sensor, a battery, an electrolyser - which " +
            "words should you reach for to describe its electrodes, and " +
            "what do those words commit you to? The classification of " +
            "electrodes is a set of axes, each answering a different " +
            "practical question. This section goes through them along " +
            "Bagotsky's lines, so the vocabulary becomes a set of " +
            "predictions rather than a list of names.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Reacting, or consumable.** The electrode material itself takes part, growing or dissolving - a silver electrode in AgNO₃. Its mass changes with current.",
            "**Nonconsumable.** The metal only supplies or absorbs electrons; the chemistry happens to the solution or a gas. Platinum in Fe²⁺/Fe³⁺ is the classic case. The honest name is *nonconsumable*: 'inert' is misleading because platinum is usually an excellent catalyst.",
            "**First kind.** A metal in a solution of its own ion: `Ag | AgNO₃`. The product is soluble.",
            "**Second kind.** The metal forms an insoluble product: `Ag | AgCl | Cl⁻`. The solid salt is the memory of the interface, and this family is the backbone of reference electrodes.",
            "**Gas electrodes.** A gas is consumed or released at the surface: `Pt | H₂ | H⁺`, written with the gas in the scheme.",
          ],
        },
        {
          kind: "para",
          text:
            "A second axis is *simple versus complex* redox. A **simple " +
            "redox** reaction just moves one electron (sometimes two) " +
            "between two ions - `Fe³⁺ + e⁻ ⇌ Fe²⁺`. A **complex " +
            "(demanding) redox** involves other parts of the solution as " +
            "well - `ClO₃⁻ + 6H⁺ + 6e⁻ ⇌ Cl⁻ + 3H₂O` uses up protons as " +
            "it goes. The point is how much else the reaction has to take " +
            "from the solution, and this becomes decisive in kinetics " +
            "(Lesson 5).",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Invertible is not reversible",
          body:
            "An **invertible** electrode reaction can be made to run both " +
            "ways by reversing the current - silver depositing and " +
            "dissolving, for instance. **Reversibility** is a different " +
            "claim: the reaction can run near its thermodynamic " +
            "equilibrium. A reaction can be invertible yet stubbornly " +
            "irreversible in practice (the reduction of hydrogen peroxide " +
            "has no known anodic reverse), and the difference shows up " +
            "starkly in exchange currents, the subject of Lesson 2.",
        },
        {
          kind: "para",
          text:
            "Two more axes finish the toolbox. **Monofunctional** " +
            "electrodes run exactly one reaction under the stated " +
            "conditions; on a **polyfunctional** electrode several " +
            "reactions compete - zinc in acidic sulfate both deposits zinc " +
            "and releases hydrogen when driven. The unwanted ones are " +
            "**side reactions**, and industrial electrolysis is largely the " +
            "art of holding them back so the wanted reaction gets the " +
            "current. That is exactly what current efficiency means, from " +
            "the Lesson 0 primer.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Working electrode** - the one under study; every claim rests on it.",
            "**Auxiliary (counter) electrode** - carries the current the working electrode does not; kept deliberately boring.",
            "**Reference electrode** - the fixed, current-free potential scale in every three-electrode cell.",
            "**Indicator electrodes** - sensors: they read a quantity (a concentration through a potential) without consuming the analyte.",
          ],
        },
        {
          kind: "para",
          text:
            "Collect the thread: the classification answers *what will " +
            "this junction do when I push current through it*. Consumable " +
            "or not decides whether your electrode is also your product; " +
            "first or second kind decides which phase holds the product; " +
            "invertibility decides whether you can come back; " +
            "mono- or polyfunctional decides how clean the current is; and " +
            "the functional labels decide how the electrode is used in the " +
            "instrument in your hand. All of this is catalogue work - the " +
            "dynamic behaviour of each family is the meat of Lessons 5-7.",
        },
      ],
    },
    {
      id: "faradays-laws-formal",
      tone: "emerald",
      title: "Faraday's laws as charge conservation",
      minutes: 6,
      summary:
        "One formula holds both laws: Δnⱼ = νⱼQ/(nF). After this section " +
        "you write it down from the reaction equation, not from memory.",
      keyPoints: [
        "`Δnⱼ = νⱼQ/(nF)` and its constant-current form `Δnⱼ = νⱼ I t/(nF)` hold both of Faraday's laws in one line.",
        "`νⱼ/n` is the chemical equivalent of component j - the moles of j per mole of electrons.",
        "The general reaction shares out electrons by charge balance: Σ(ox) νⱼzⱼ − Σ(red) νⱼzⱼ = n.",
        "The same `n` must appear at both electrodes, coupling the halves - and only the wanted reaction counts towards current efficiency.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Lesson 0 gave you `Q = zFn` for the simple case. Real " +
            "reactions have coefficients that are not 1, side products, and " +
            "uneven electron counts. So this section states Faraday's laws " +
            "in the general form that handles all of it, read straight from " +
            "the reaction equation.",
        },
        {
          kind: "para",
          text:
            "Faraday's first law says the amount of a substance changed in " +
            "electrolysis is proportional to the charge passed. His second " +
            "law says that for a fixed charge, the masses of different " +
            "substances are proportional to their chemical equivalents. " +
            "Both say the same thing: electrons are counted one at a time. " +
            "In general form, write the electrode reaction and its charge " +
            "balance:",
        },
        {
          kind: "formula",
          tex: String.raw`\sum_{\mathrm{ox}} \nu_j X_j + n e^- \rightleftharpoons \sum_{\mathrm{red}} \nu_j X_j`,
          caption:
            "The general electrode reaction. Balancing the charge in the " +
            "whole equation demands `Σ(ox) νⱼzⱼ − Σ(red) νⱼzⱼ = n`: the " +
            "electrons on the left equal the charge the reaction shifts.",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta n_j = \frac{\nu_j Q}{nF}, \qquad \Delta n_j = \frac{\nu_j I t}{nF}`,
          caption:
            "Faraday's laws, combined. `Δnⱼ` is the number of moles of " +
            "component j made (νⱼ > 0) or used up (νⱼ < 0). For a steady " +
            "current the second form applies directly.",
        },
        {
          kind: "para",
          text:
            "Read the pieces. `νⱼ/n` is the number of moles of `j` per mole " +
            "of electrons - the modern **chemical equivalent**; " +
            "`(νⱼ/n)·Mⱼ` is the matching **equivalent mass**, the grams per " +
            "mole of electrons. The older names are still used in labs, so " +
            "it is worth knowing both. And because the anode and cathode " +
            "reactions are coupled, both halves must be written with the " +
            "same `n` - that is the rule that stops `Cu²⁺ + 2e⁻ → Cu` and " +
            "`2Cl⁻ → Cl₂ + 2e⁻` from being joined in arbitrary proportions.",
        },
        {
          kind: "worked",
          title: "Zinc deposition, formally",
          given:
            "`Zn²⁺ + 2e⁻ → Zn`. A zinc cell plates for 30 min at a steady " +
            "1.0 A. M(Zn) = 65.38 g mol⁻¹, F = 96 485 C mol⁻¹.",
          steps: [
            String.raw`Q = I t = 1.0 \times 30 \times 60 = 1800\ \mathrm{C}`,
            String.raw`n(Zn) = \frac{\nu\,Q}{n F} = \frac{1 \times 1800}{2 \times 96\,485} = 9.33 \times 10^{-3}\ \mathrm{mol}`,
            String.raw`m = n\,M = 9.33\times10^{-3} \times 65.38 = 0.610\ \mathrm{g}`,
          ],
          result:
            "0.61 g of zinc - *if* all the charge went to deposition. The " +
            "formal version earns its keep as soon as the bookkeeping gets " +
            "harder: add a side product and the same arithmetic, with νⱼ " +
            "signed, still balances.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "ν is not z",
          body:
            "The coefficient `νⱼ` says how many units of component `j` " +
            "appear in the balanced reaction; the charge number `zⱼ` is the " +
            "ion's charge. For `Zn²⁺ → Zn` they happen to look similar " +
            "(ν = 1, z = 2) only because one ion deposits per two-electron " +
            "reaction. Meet a polyatomic ion or a gas electrode - " +
            "`H⁺ + e⁻ → ½H₂`, where ν(H₂) = ½ - and the two stop " +
            "resembling each other. When in doubt, balance the equation and " +
            "let the algebra decide.",
        },
        {
          kind: "para",
          text:
            "With Faraday's laws in their general form, one accounting job " +
            "remains: the mass balance that tells you not just *how much* " +
            "reacts but *how fast it must be supplied*. That is the next " +
            "section.",
        },
      ],
    },
    {
      id: "mass-balance",
      tone: "teal",
      title: "Mass balance at the electrode",
      minutes: 7,
      summary:
        "The reaction needs each reactant delivered and each product removed " +
        "at exactly the rate it is used or made. Migration alone cannot do " +
        "this, so diffusion and convection close the books - a first taste of " +
        "Lesson 4.",
      keyPoints: [
        "The required flux is `Jⱼ = νⱼ/(nF)·i` - exactly what the reaction uses or makes, fixed by Faraday's law.",
        "Migration alone supplies `J_m,ⱼ = tⱼ/(zⱼF)·i`, which disagrees with the requirement in two instructive ways.",
        "Spectator ions migrate but need no feed (νⱼ = 0, tⱼ ≠ 0); neutral reactants need a feed but migration cannot move them (νⱼ ≠ 0, zⱼ = 0).",
        "Diffusion and convection build up to restore balance: `νⱼ i/(nF) = J_m + J_d + J_conv` - the seed of the Nernst layer.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Faraday's law says the reaction uses reagents at a rate set by " +
            "the current. Conductivity said the solution moves ions at a " +
            "rate set by the field. Those two rates are *not the same " +
            "number*, and if you leave them unequal the reaction starves. " +
            "This section is the reconciliation, and it is the most " +
            "underrated idea in the course: it is where the solution having " +
            "to deliver becomes arithmetic.",
        },
        {
          kind: "para",
          text:
            "First, the demand. Under steady current, species `j` is used " +
            "or made at the electrode at a rate fixed by Faraday. For the " +
            "books to balance, exactly that rate must arrive at (or leave) " +
            "the surface. The required flux density is:",
        },
        {
          kind: "formula",
          tex: String.raw`J_j = \frac{\nu_j}{n F}\, i`,
          caption:
            "The flux of j that the reaction requires by its chemistry - " +
            "moles per unit area per second, in the direction set by νⱼ " +
            "(reactants towards the surface, products away).",
        },
        {
          kind: "para",
          text:
            "Second, what migration alone can supply. Each ion type carries " +
            "a share of the current equal to its transport number, so a " +
            "migrating species `j` moves with a flux:",
        },
        {
          kind: "formula",
          tex: String.raw`J_{m,j} = \frac{t_j}{z_j F}\, i`,
          caption:
            "The migrational flux of species j. Compare it with the " +
            "required flux: what arrives by the field and what the reaction " +
            "needs are generally different things.",
        },
        {
          kind: "para",
          text:
            "The two equations disagree, and that disagreement is not a bug " +
            "- it is the most instructive sentence in the chapter, because " +
            "it fails in two neat ways:",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Spectator ions must migrate** even though the reaction wants none of them: νⱼ = 0 makes the required flux zero, while tⱼ ≠ 0 makes the migration flux non-zero. So the field alone would pile up inert salt at the electrode.",
            "**Neutral reactants must be served, but migration cannot move them:** a dissolved gas or an uncharged molecule has νⱼ ≠ 0 but zⱼ = 0, so its migration flux is exactly zero - yet Faraday's law still demands that it arrives.",
          ],
        },
        {
          kind: "para",
          text:
            "Nature's answer is that migration is not the only courier. Any " +
            "imbalance between supply and demand changes the concentration " +
            "next to the surface, which creates **gradients** and a " +
            "**diffusion** flux towards or away from the electrode. And in " +
            "any stirred or flowing liquid, **convection** carries matter " +
            "bodily. The full balance is the sum of all three:",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{\nu_j}{nF}\, i = J_j = J_{m,j} + J_{d,j} + J_{conv,j}`,
          caption:
            "The mass-balance equation. Diffusion and convection appear " +
            "whenever migration cannot deliver the required flux, and in " +
            "the steady state they always succeed - which is exactly the " +
            "tension Lesson 4 turns into the Nernst diffusion layer.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Direction is part of the flux",
          body:
            "Fluxes are vectors with a convention behind them: **reactant " +
            "fluxes point towards the electrode, product fluxes away**, and " +
            "migration's direction is fixed by charge - cations towards the " +
            "cathode, anions towards the anode. The three kinds of flux can " +
            "point different ways at once, which is why the sign convention " +
            "in the next section exists. What the mass-balance equation " +
            "says is that the *sum* always points where the reaction needs " +
            "it.",
        },
        {
          kind: "para",
          text:
            "You have now seen the exact spot where electrochemistry's two " +
            "branches - transport and kinetics - attach to each other. If " +
            "transport is fast, the reaction never starves; if it is slow, " +
            "the current becomes limited by how fast the solution can serve " +
            "the surface. Both cases are Lesson 4. What remains here is " +
            "only the language for saying which way things run, and that is " +
            "the final section.",
        },
      ],
    },
    {
      id: "sign-conventions",
      tone: "slate",
      title: "Sign conventions for currents and fluxes",
      minutes: 6,
      summary:
        "One convention says anodic current is positive and cathodic " +
        "negative; another keeps every current density positive and puts " +
        "direction into the flux signs. This course uses the second, and " +
        "says why.",
      keyPoints: [
        "IUPAC's anodic-positive and cathodic-negative convention forces every equation to be written twice - as i and as |i|.",
        "The mixed convention keeps all current densities positive and carries direction in the flux signs: reactants inward, products outward.",
        "Migration direction is itself a convention: cations always migrate towards the cathode, anions towards the anode.",
        "Conventions are chosen so the same equations work at both electrodes; if an equation needs two forms, that is the cue to use the mixed convention.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "For the rest of the course you will read equations full of `i` " +
            "and `J` with signs on them. A sign convention is the agreement " +
            "that decides whether a plus or a minus means towards the " +
            "surface or away from it, and it matters because different " +
            "kinds of flux can genuinely point different ways at once. This " +
            "section sets the convention, so that everything you meet later " +
            "reads the same way.",
        },
        {
          kind: "para",
          text:
            "Two systems compete. The **IUPAC convention** calls anodic " +
            "currents positive and cathodic currents negative. It is " +
            "perfectly logical - oxidation current out of the electrode is " +
            "plus - but it charges a heavy price: every relation containing " +
            "a current density must then be written in *two* forms, one " +
            "with `i` and one with `|i|`, depending on which electrode you " +
            "are at. Doubling every equation to describe symmetric physics " +
            "is a poor trade.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Anodic and cathodic current",
          body:
            "Two words older than any sign convention. An **anodic** " +
            "current flows from the electrode into the electrolyte (the " +
            "reaction is an oxidation); a **cathodic** current flows the " +
            "other way. Whether you give them numerical signs is what the " +
            "conventions argue about - the physical direction is not in " +
            "dispute, only how it is written down.",
        },
        {
          kind: "para",
          text:
            "The **mixed convention** - the one this course and Bagotsky " +
            "use - makes the opposite trade: every current density is " +
            "written *positive*, anodic and cathodic alike, and all the " +
            "direction information lives in the **flux signs**. Reactant " +
            "fluxes towards the electrode are positive and product fluxes " +
            "away are negative; migration direction is fixed separately " +
            "(cations towards the cathode, anions towards the anode). The " +
            "reward is that the same equation, with the same symbol `i`, " +
            "serves both electrodes with no `|i|` gymnastics.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**`i` is always a positive magnitude** (A/m²), the same symbol at anode and cathode.",
            "**Reactant flux towards the surface is positive**; product flux away from it is negative.",
            "**Migration:** cations towards the cathode, anions towards the anode - a rule, not a sign sum.",
            "**Magnitudes:** a cathodic current density written as `i` has the same absolute value as an anodic `i`; the direction is in the accompanying flux arrows.",
          ],
        },
        {
          kind: "para",
          text:
            "Notice the price, so it never surprises you. Because `i` " +
            "carries no sign, `i > 0` tells you nothing about whether the " +
            "current is anodic or cathodic - you have to read the reaction. " +
            "That is the whole point: the convention is chosen so the " +
            "*physics* (the reaction equation) carries the direction, not " +
            "the algebra. Every diagram and equation from Lesson 4 onwards " +
            "assumes this reading.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where the convention is already paying",
          body:
            "The mass-balance equation you just wrote - " +
            "`νⱼi/(nF) = J_m + J_d + J_conv` - is sign-consistent under the " +
            "mixed convention for *both* electrodes and *both* directions " +
            "of current. That single fact is why the rest of the course can " +
            "carry one equation where a stricter system would carry a pair. " +
            "Read the directional symbols as directions and everything " +
            "downstream stays clear.",
        },
      ],
      cta: {
        title: "Transport done, potentials next",
        body:
          "Lesson 1 has given you the full carrier map: how ions move " +
          "(mobility, conductivity, transport numbers), how an electrode " +
          "forces chemistry (reactions, classification), and how charge and " +
          "mass balance keep the loop honest (Faraday and the flux " +
          "balance). Lesson 2 opens the second, harder question: *what " +
          "sets the potential of an electrode*, and why a single one cannot " +
          "be measured. Test yourself on this lesson's full question bank " +
          "before moving on.",
        href: "/lessons/lesson-1/quiz",
        linkLabel: "Take the Lesson 1 questions",
        secondaryHref: "/lessons/lesson-0",
        secondaryLabel: "Recheck the Lesson 0 primer",
      },
    },
  ],
};