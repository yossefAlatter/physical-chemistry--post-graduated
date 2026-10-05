import type { Lecture } from "./types";
import { fundamentalsMcq } from "./fundamentals.mcq";

export const fundamentals: Lecture = {
  slug: "fundamentals",
  label: "Fundamentals",
  title: "Fundamentals: from zero to electrochemistry",
  summary:
    "The vocabulary, the units and the four relations that everything else " +
    "in this subject is built on. No prior chemistry assumed.",
  order: 0,
  minutes: 45,
  mcq: fundamentalsMcq,
  intro: [
    {
      kind: "para",
      text:
        "This primer is deliberately slow. It starts from two ideas you " +
        "already have - charge and current - and builds the electrochemistry " +
        "vocabulary on top of them. Nothing here needs a university chemistry " +
        "course; everything later does.",
    },
    {
      kind: "para",
      text:
        "The seven sections below are ordered so that each one only uses " +
        "ideas the previous ones have already given you. There is no reason " +
        "to jump ahead, and every section names what it depends on.",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**What electrochemistry actually is** - the one idea the whole subject rests on. No prior knowledge.",
        "**Anatomy of a cell** - the four moving parts. Needs only section 1.",
        "**Charge, current and resistance** - the three quantities and how they differ. Needs 1.",
        "**Faraday's laws** - turning a charge into a mass of metal. Needs 3.",
        "**Energy and power** - what the numbers on a battery label mean. Needs 3.",
        "**Reading a real cell in the laboratory** - the three-electrode setup. Needs 2 and 4.",
        "**Units, symbols and the words you will meet** - the reference sheet to keep open.",
      ],
    },
    {
      kind: "callout",
      variant: "key",
      title: "How to use this",
      body:
        "Each section is a short page. Read it, then answer the three " +
        "questions at the bottom without looking back. If you get one wrong, " +
        "the explanation tells you which paragraph to reread. When you finish " +
        "the last section you will be told which topics you are ready to start.",
    },
  ],
  sections: [
    {
      id: "what-is-it",
      tone: "azure",
      title: "What electrochemistry actually is",
      minutes: 7,
      summary:
        "One idea: move electrons through a wire and you get chemistry you " +
        "can measure, control and use.",
      keyPoints: [
        "Anode is oxidation. Cathode is reduction. Those names never swap.",
        "Anode is negative in a galvanic cell, positive in an electrolytic one.",
        "Galvanic runs on its own; electrolytic has to be forced by an outside power supply.",
        "Electron flow through the wire is anode to cathode, always.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** you have a chemical " +
            "reaction. How do you turn it into something you can read on a " +
            "meter?",
        },
        {
          kind: "para",
          text:
            "In an ordinary chemical reaction, molecules meet each other and " +
            "rearrange. You cannot see the electrons, and you cannot hold " +
            "them back. The reaction happens wherever the reactants happen to " +
            "touch, at whatever rate the temperature dictates.",
        },
        {
          kind: "para",
          text:
            "An electrochemical reaction is the same chemistry with the two " +
            "halves pulled apart and joined by a wire. Instead of electrons " +
            "hopping directly from one molecule to the next, they are forced " +
            "to travel down a conductor you can put a meter in. That single " +
            "change buys you three things, and together they are the entire " +
            "subject:",
        },
        {
          kind: "list",
          items: [
            "**You can measure.** Electrons moving past a point is a current, and current is easy to read on an instrument.",
            "**You can control.** Put a power supply in the wire and you decide how hard the reaction runs.",
            "**You can use it.** Deliver the electrons somewhere useful and you have a battery, a plating bath, a fuel cell or a fuel.",
          ],
        },
        {
          kind: "para",
          text:
            "So there are two families of cell, and the difference is simply " +
            "where the energy comes from. Everything else in this course is a " +
            "detail of one of these two arrangements.",
        },
        {
          kind: "figure",
          src: "fund_two_worlds.png",
          alt:
            "Two panels, one above the other. Top, galvanic: an anode on the " +
            "left and a cathode on the right joined by a wire through a " +
            "circle marked e-minus, labelled chemical energy, with the anode " +
            "negative and oxidising and the cathode positive and reducing. " +
            "Bottom, electrolytic: the same layout driven by a power supply, " +
            "with the anode positive and the cathode negative.",
          caption:
            "Left: the cell does the work. Right: you do the work, and the cell obeys.",
        },
        {
          kind: "table",
          head: ["", "Galvanic (voltaic)", "Electrolytic"],
          widths: [1.5, 2, 2],
          rows: [
            ["Energy flow", "Chemical → electrical", "Electrical → chemical"],
            ["Runs on its own?", "Yes, it is spontaneous", "No, it must be driven"],
            ["Anode is", "Negative", "Positive"],
            ["Cathode is", "Positive", "Negative"],
            ["Examples", "Daniell cell, fuel cell, corrosion", "Electroplating, electrorefining, battery charging"],
          ],
        },
        {
          kind: "para",
          text:
            "The two columns differ in signs but never in names. That is the " +
            "single most important thing on this page, so here is how to say it " +
            "in a way that cannot be got wrong: **the anode is where atoms lose " +
            "electrons, the cathode is where atoms gain them.** If you know " +
            "only that sentence, you can work out the sign of anything.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The one trap in this table",
          body:
            "The words **anode** and **cathode** are tied to the *reaction*, not " +
            "to the sign of the wire. Whether that electrode is positive or " +
            "negative flips between the two families. Two phrases fix it: " +
            "\"Red Cat\" (reduction at the cathode) and \"An Ox\" (oxidation at " +
            "the anode). Never memorise \"anode is negative\" - it is only true " +
            "for the top row.",
        },
        {
          kind: "figure",
          src: "fund_oxidation_states.png",
          alt:
            "Two rows showing how to identify the electrodes. The top row: " +
            "a zinc atom labelled oxidation number 0 changes to a zinc " +
            "ion labelled oxidation number plus 2, losing two electrons " +
            "which travel out through the wire, and the row is labelled " +
            "oxidation, anode. The bottom row: a copper ion labelled " +
            "oxidation number plus 2 changes to a copper atom labelled " +
            "oxidation number 0, gaining two electrons which arrive " +
            "through the wire, and the row is labelled reduction, cathode.",
          caption:
            "The one test that works in both cell types: watch the " +
            "oxidation number.",
        },
        {
          kind: "figure",
          src: "fund_mnemonic.png",
          alt:
            "Three stacked boxes. Red Cat: reduction happens at the cathode. " +
            "An Ox: oxidation happens at the anode. Anode to cathode: " +
            "electrons travel that way. Below, a warning that anode is never " +
            "the plus sign and that a galvanometer reads conventional current, " +
            "which runs the other way from the electrons.",
          caption:
            "Three phrases worth memorising before you memorise anything else.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "Every AA battery in a remote control is a galvanic cell: zinc " +
            "gives up electrons at one end, manganese dioxide takes them at " +
            "the other, and the wire is the path. Charging your phone is an " +
            "electrolytic cell doing the same chemistry backwards. The rust " +
            "on a damp steel gate is a galvanic cell that nobody connected to " +
            "anything, and the entire corrosion industry exists to stop it. " +
            "One idea, three very different-looking problems.",
        },
        {
          kind: "figure",
          src: "fund_roadmap.png",
          alt:
            "A numbered list of the seven sections of this primer: what " +
            "electrochemistry is, anatomy of a cell, charge current and " +
            "resistance, Faraday's two laws, energy and power, a real " +
            "laboratory cell, and units and glossary. A box at the bottom " +
            "points on to Lecture 1, described as eleven short sections.",
          caption:
            "Where you are going. Lecture 1 follows these sections in order.",
        },
        {
          kind: "para",
          text:
            "That is the idea. You now know *what* the subject is. The next " +
            "section takes the cell apart and names the four pieces it is " +
            "built from.",
        },
      ],
    },
    {
      id: "cell-anatomy",
      tone: "teal",
      title: "Anatomy of a cell",
      minutes: 7,
      summary:
        "Two electrodes, one electrolyte, one wire - and a route for the " +
        "ions so the solution does not charge up.",
      keyPoints: [
        "Electrode = a conducting surface where electrons are exchanged. Electrolyte = a solution that lets ions move.",
        "Oxidation happens at the anode, reduction at the cathode.",
        "Something must carry the ions; otherwise charge builds up and the current stops.",
        "Cell notation is always written oxidation side first, anode on the left.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** if the two halves of the " +
            "reaction are pulled apart, what exactly do you need to build, and " +
            "what does each part do?",
        },
        {
          kind: "para",
          text:
            "Every cell in this subject is an assembly of the same four " +
            "parts. Learn them once. You already know from the previous " +
            "section that oxidation happens at the anode and reduction at the " +
            "cathode; this is the hardware that makes that happen.",
        },
        {
          kind: "figure",
          src: "fund_cell_anatomy.png",
          alt:
            "A zinc-copper cell. A zinc electrode on the left in grey and a " +
            "copper electrode on the right, each dipping into its own " +
            "solution, joined above by a wire through a box labelled " +
            "voltmeter, with an arrow marking electron flow to the right. " +
            "Between the two solutions sits a salt bridge, with anions " +
            "moving left toward the anode and cations moving right toward " +
            "the cathode. Beneath each side is its half-reaction: zinc giving " +
            "up two electrons, and copper ions taking two electrons.",
          caption:
            "A zinc-copper cell. Electrons travel left to right through the " +
            "wire; the ions take the long way round through the bridge.",
        },
        {
          kind: "figure",
          src: "fund_cell_notation.png",
          alt:
            "Cell notation written down one term at a time in a vertical " +
            "ladder, with each term explained underneath. Zn (s), zinc " +
            "metal, the anode. A single vertical bar for a phase boundary. " +
            "Zn2+ (aq), zinc ions in solution. A double vertical bar for the " +
            "salt bridge. Cu2+ (aq), copper ions in solution. A single " +
            "vertical bar for a phase boundary. Cu (s), copper metal, the " +
            "cathode.",
          caption:
            "Every cell is written the same way: oxidation side, bridge, " +
            "reduction side, anode always on the left.",
        },
        {
          kind: "para",
          text:
            "Read the notation rule carefully, because it is pure convention " +
            "and examiners assume you know it. One vertical bar `|` marks a " +
            "boundary between two *phases* - say, metal touching solution. A " +
            "double bar `||` marks the salt bridge, which is the cell's own " +
            "internal connection. `(s)` means solid, `(aq)` means dissolved in " +
            "water, `(l)` means liquid. And the oxidation side is always " +
            "written first, on the left, whatever the cell is used for.",
        },
        {
          kind: "table",
          head: ["Part", "What it is", "Job in the cell"],
          widths: [1.2, 2, 2.2],
          rows: [
            ["Anode", "An electrode where oxidation happens", "Makes electrons and pushes them into the wire"],
            ["Cathode", "An electrode where reduction happens", "Takes electrons out of the wire"],
            ["Electrolyte", "Molten salt or solution of a soluble salt", "Lets ions move to carry charge internally"],
            ["External circuit", "Wire, or a meter, motor or lamp", "Carries the electrons from anode to cathode"],
            ["Salt bridge", "U-tube of gel or concentrated solution", "Completes the ionic circuit"],
          ],
        },
        {
          kind: "para",
          text:
            "Follow the electrons and the external circuit explains itself. " +
            "The zinc oxidises, so electrons leave it and travel down the " +
            "wire. They arrive at the copper and are consumed, so the wire is " +
            "a one-way street and no charge piles up in it.",
        },
        {
          kind: "para",
          text:
            "Now the solution, which is the half people forget. Zinc ions go " +
            "into solution at the anode, so positive charge accumulates there; " +
            "copper ions are removed at the cathode, so negative charge " +
            "accumulates there. Within about a millimetre the electric field " +
            "this builds opposes further ion motion, and the current stops. " +
            "The salt bridge exists purely to repair this: anions migrate " +
            "toward the anode and cations toward the cathode, keeping both " +
            "solutions electrically neutral.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Why the electrolyte cannot be anything",
          body:
            "Only ions can move charge through a liquid, and only a species " +
            "that is *already* ionic can supply them. That is why the " +
            "electrolyte is a molten salt or a salt solution, and why pure " +
            "water is a hopeless conductor - it has almost no mobile ions.",
        },
        {
          kind: "worked",
          title: "Which way do the ions go?",
          given:
            "A zinc-copper cell running. 5 mmol of Zn²⁺ has just dissolved " +
            "into the left-hand beaker.",
          steps: [
            "The anode has just gained 5 mmol of positive charge, so it " +
              "needs 5 mmol of negative charge to stay neutral.",
            "Negative ions - the bridge's anions, e.g. NO₃⁻ or SO₄²⁻ - " +
              "therefore migrate **toward the anode**.",
            "The cathode has just lost 5 mmol of positive charge (Cu²⁺ " +
              "plated out), so it needs positive charge: cations migrate " +
              "**toward the cathode**.",
            "Both halves now run at the same number of equivalents per " +
              "second, so no charge builds up anywhere and the current " +
              "keeps flowing.",
          ],
          result:
            "Anions to the anode, cations to the cathode. Swap them and the " +
            "cell stops within milliseconds.",
        },
        {
          kind: "para",
          text:
            "Swapping the metals gives a different voltage, because different " +
            "elements oxidise more or less willingly. That single fact is the " +
            "whole of cell chemistry: **the voltage is decided by which two " +
            "reactions you pair**, not by the cell you happen to build them in.",
        },
        {
          kind: "figure",
          src: "fund_potential_scale.png",
          alt:
            "A ranked list of standard reduction potentials in volts against " +
            "the standard hydrogen electrode, highest at the top: F2 over " +
            "F-minus plus 2.87, O2 over water plus 1.23, Cu2+ over Cu plus " +
            "0.34, 2H+ over H2 at zero and boxed as the reference, Fe2+ over " +
            "Fe minus 0.44, Zn2+ over Zn minus 0.76, and Mg2+ over Mg minus " +
            "2.37. An arrow up the left margin says more oxidising. A box at " +
            "the bottom explains that one electrode cannot be measured alone.",
          caption:
            "Every potential is quoted against the same reference, which is " +
            "what makes the subtraction possible.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "A lead-acid car battery has the same four parts in a different " +
            "form: two lead plates in sulfuric acid, and instead of a salt " +
            "bridge it uses a porous plastic separator that lets ions " +
            "through while keeping the plates apart. Lithium-ion cells go " +
            "further and use no liquid bridge at all - a solid or gel " +
            "electrolyte between the electrodes. If the ions cannot get from " +
            "one plate to the other, every battery ever made simply stops.",
        },
        {
          kind: "para",
          text:
            "You now know the parts and the shape of a cell. But a cell does " +
            "not simply produce electrons - it produces them at a *rate*, and " +
            "the next section fixes the three numbers that rate depends on.",
        },
      ],
    },
    {
      id: "charge-and-current",
      tone: "indigo",
      title: "Charge, current and resistance",
      minutes: 6,
      summary:
        "Coulombs are how much, amps are how fast. Get that distinction " +
        "right and half the confusion in the subject disappears.",
      keyPoints: [
        "1 amp = 1 coulomb per second.",
        "Current tells you how fast charge moves; charge tells you how much has moved.",
        "Ohm's law links them: V = IR, with resistance depending on the electrode, the solution and the geometry.",
        "Voltage is energy per coulomb, so you need to know the charge before you know the energy.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** how do we *measure* a " +
            "reaction that is happening? Three quantities come out of that " +
            "measurement, and they are constantly confused, so we fix them now.",
        },
        {
          kind: "table",
          head: ["Quantity", "Symbol", "Unit", "Answers the question"],
          widths: [1.3, 0.7, 0.7, 2.4],
          rows: [
            ["Charge", "Q", "coulomb (C)", "How much charge has passed?"],
            ["Current", "I", "ampere (A)", "How fast is it passing, right now?"],
            ["Potential difference", "E or V", "volt (V)", "How much energy per coulomb?"],
            ["Resistance", "R", "ohm (Ω)", "How much does the circuit oppose flow?"],
          ],
        },
        {
          kind: "formula",
          tex: String.raw`I = \frac{\mathrm{d}Q}{\mathrm{d}t}, \qquad Q = I\,t`,
          caption:
            "Current is the rate of charge flow; multiply back to get the total.",
        },
        {
          kind: "para",
          text:
            "A useful way to hold on to this: charge is a *bag of marbles*, " +
            "current is *how fast you are emptying it*. A 2 A source delivers " +
            "twice the charge per second as a 1 A source, but if you run them " +
            "for the same time the 2 A one simply delivers twice as much.",
        },
        {
          kind: "figure",
          src: "fund_charge_carriers.png",
          alt:
            "A horizontal wire at the top and a beaker of solution below. Blue " +
            "dots labelled with a minus sign move rightwards along the wire and " +
            "are labelled electrons. Inside the beaker, red circles with a plus " +
            "sign move leftwards and grey circles with a minus sign move " +
            "rightwards, together labelled ions. A caption notes that the wire " +
            "carries electrons only, while the solution carries ions only.",
          caption:
            "Electrons move in the metal. Ions move in the solution. Neither " +
            "carries the other.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The two mix-ups that cost marks",
          body:
            "**Amps are not coulombs.** A cell delivering 5 A for 100 s passed " +
            "500 C, not 5 C. And **volts are not joules.** A volt is joules per " +
            "coulomb, so you must know the charge before you know the energy.",
        },
        {
          kind: "worked",
          title: "How much charge has passed?",
          given: "A cell delivers 500 mA for 3 hours.",
          steps: [
            String.raw`I = 500\ \mathrm{mA} = 0.500\ \mathrm{A}`,
            String.raw`t = 3\ \mathrm{h} = 3 \times 3600 = 10800\ \mathrm{s}`,
            String.raw`Q = I\,t = 0.500 \times 10800 = 5400\ \mathrm{C}`,
          ],
          result:
            "5400 C of charge passed. At the cathode, 5400 / 96485 = 0.056 mol " +
            "of electrons arrived.",
        },
        {
          kind: "para",
          text:
            "Resistance is where electrochemistry becomes itself. Ohm's law " +
            "holds for metals, but in a cell the resistance is dominated by " +
            "the solution and by how fast ions can resupply the electrode " +
            "surface. Make the electrode smaller and its resistance rises " +
            "steeply, because the same current now has to arrive through less " +
            "area. That is the whole basis of polarisation curves.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "Your phone battery is labelled around 3000 mAh. That is a current " +
            "and a time, not a charge: 3 A for 1 hour, or 1 A for 3 hours, or " +
            "0.5 A for 6 hours - all the same stored charge. It is also why a " +
            "phone charges faster from a 2 A cable than a 0.5 A one: the " +
            "battery's voltage is roughly fixed, so pulling more current is " +
            "the only way to refill it faster. The chapter on batteries makes " +
            "this quantitative.",
        },
        {
          kind: "para",
          text:
            "So charge and current are quantities you can measure. The next " +
            "step is the one that makes electrochemistry useful rather than " +
            "merely descriptive: knowing how much charge passed, you can " +
            "calculate how much material that charge made.",
        },
      ],
    },
    {
      id: "faradays-laws",
      tone: "violet",
      title: "Faraday's laws: charge becomes mass",
      minutes: 7,
      summary:
        "The bridge between what you measure and what you make: how much " +
        "material a given charge will deposit.",
      keyPoints: [
        "Faraday's first law: deposited mass is proportional to charge passed.",
        "Faraday's second law: deposited mass is proportional to molar mass, and inversely proportional to electrons per ion.",
        "m = M Q / (n F), with F = 96 485 C mol⁻¹.",
        "n is the number of electrons in the half-reaction; a 2+ ion needs two.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** if I know how much charge " +
            "went through the cell, how much material do I get? This is the " +
            "one calculation that connects a meter reading to a physical " +
            "object, and it is used to design plating baths, to assay alloys " +
            "and to size the electrodes in an electrolytic plant.",
        },
        {
          kind: "para",
          text:
            "**First law.** For a given reaction, the mass of product is " +
            "proportional to the charge passed. Double the charge, double the " +
            "metal. There is no dependence on current: a small current for a " +
            "long time and a large current for a short time deposit the same " +
            "mass, provided the reaction runs at 100% efficiency.",
        },
        {
          kind: "para",
          text:
            "**Second law.** The mass deposited also depends on the substance " +
            "itself. It rises with molar mass M, and falls as the number of " +
            "electrons per ion n rises, because a higher-charged ion needs " +
            "more electrons to change.",
        },
        {
          kind: "formula",
          tex: String.raw`m = \frac{M\,Q}{n\,F} = \frac{M\,I\,t}{n\,F}, \qquad F = 96485\ \mathrm{C\,mol^{-1}}`,
          caption:
            "Faraday's law. m in grams, M in g mol⁻¹, Q in coulombs, n electrons per ion.",
        },
        {
          kind: "para",
          text:
            "The four symbols, once and for all: **M** is the molar mass of " +
            "whatever is being deposited, in g mol⁻¹. **n** is the number of " +
            "electrons in the half-reaction - 1 for Ag⁺ → Ag, 2 for " +
            "Cu²⁺ → Cu, 3 for Au³⁺ → Au. **F** is the Faraday constant, the " +
            "charge carried by one mole of electrons, 96 485 C mol⁻¹. **Q** is " +
            "the charge you measured from the previous section. Get n from the " +
            "half-reaction and the rest is arithmetic.",
        },
        {
          kind: "figure",
          src: "fund_faraday.png",
          alt:
            "A graph with charge in coulombs on the horizontal axis and mass " +
            "deposited in grams on the vertical axis. Three straight lines " +
            "rise from the origin, labelled silver one-electron, gold " +
            "three-electron and copper two-electron. They end at 6000 " +
            "coulombs at 6.71, 4.08 and 1.98 grams respectively, and a note " +
            "gives the slope as molar mass over n times Faraday.",
          caption:
            "Straight lines through the origin. The slope is M / nF and does " +
            "not depend on current - so silver deposits fastest here, but " +
            "that is not the same as depositing most efficiently.",
        },
        {
          kind: "worked",
          title: "How much copper will 2.5 A deposit in 20 minutes?",
          given: "Cu²⁺ + 2e⁻ → Cu, M(Cu) = 63.55 g mol⁻¹, F = 96 485 C mol⁻¹.",
          steps: [
            String.raw`Q = I\,t = 2.5 \times (20 \times 60) = 3000\ \mathrm{C}`,
            String.raw`n(e^-) = \frac{Q}{F} = \frac{3000}{96485} = 0.03109\ \mathrm{mol}`,
            String.raw`n(\mathrm{Cu}^{2+}) = \frac{0.03109}{2} = 0.01555\ \mathrm{mol}`,
            String.raw`m = n\,M = 0.01555 \times 63.55 = 0.988\ \mathrm{g}`,
          ],
          result:
            "0.99 g of copper, assuming 100% current efficiency. In practice " +
            "side reactions such as hydrogen evolution mean you always plate " +
            "less than this, which is why efficiency is quoted.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Current efficiency",
          body:
            "Compare the mass you actually weighed with the mass Faraday's " +
            "law predicts. The ratio is the current efficiency, usually given " +
            "as a percentage. A copper plating bath running at 95% passes five " +
            "per cent of its current into hydrogen evolution instead - which " +
            "is also five per cent wasted power.",
        },
        {
          kind: "worked",
          title: "How thick does that coating have to be?",
          given:
            "A tap is plated with 10 μm of nickel over a total surface of " +
            "200 cm². Nickel is 8.9 g cm⁻³, and plating it at 2 A.",
          steps: [
            String.raw`V = A \times \text{thickness} = 200 \times 10\times10^{-4} = 0.20\ \mathrm{cm^3}`,
            String.raw`m = \rho V = 8.9 \times 0.20 = 1.78\ \mathrm{g}`,
            String.raw`Q = \frac{m\,nF}{M} = \frac{1.78 \times 2 \times 96485}{58.69} = 5850\ \mathrm{C}`,
            String.raw`t = \frac{Q}{I} = \frac{5850}{2} = 2925\ \mathrm{s} \approx 49\ \mathrm{min}`,
          ],
          result:
            "About 50 minutes of plating at 2 A to reach 10 μm. This is the " +
            "calculation that sets the length of a real production line.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "The chrome on a car bumper, the gold on a connector finger, and " +
            "the silver on a mirror are all Faraday's law in production. " +
            "Electrorefining of copper uses the same equation in reverse: " +
            "weigh the cathode before and after, and the mass gain tells you " +
            "exactly how much copper was deposited - which is how the purity " +
            "of the refined metal is certified. The reason gold plating uses a " +
            "thin layer is arithmetic, not thrift: gold is expensive and n = 3, " +
            "so each gram of it needs three times the charge of a gram of silver.",
        },
        {
          kind: "para",
          text:
            "Charge in, mass out - that is the applied half of the subject. " +
            "The other half asks the reverse question: how much energy was " +
            "stored, and how fast can you get it back? That is the next section.",
        },
      ],
    },
    {
      id: "energy-and-power",
      tone: "amber",
      title: "Energy, power and what a battery rating means",
      minutes: 6,
      summary:
        "Volts times coulombs is joules; volts times amps is watts. Every " +
        "battery number on a label is one of those two.",
      keyPoints: [
        "Energy = V × Q. Power = V × I. These are different quantities.",
        "Ampere-hours measure charge (capacity), not energy.",
        "Specific energy is Wh/kg; specific power is W/kg. Never quote one as the other.",
        "For a real battery, energy is the area under the discharge curve.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** every battery you have ever " +
            "bought is labelled with numbers that look interchangeable and are " +
            "not. Which number means how long it lasts, and which means how " +
            "hard it can push?",
        },
        {
          kind: "para",
          text:
            "Charge is how much, current is how fast. The same split applies to " +
            "energy and power, and mixing them up is the classic exam " +
            "slip in this subject.",
        },
        {
          kind: "formula",
          tex: String.raw`E = V\,Q, \qquad P = V\,I, \qquad E = \int V \, \mathrm{d}Q`,
          caption:
            "Left two: instantaneous relationships. Right: the general form, " +
            "which you need once the voltage changes during discharge.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Ampere-hours are charge, not energy",
          body:
            "A battery marked 7 Ah holds 7 × 3600 = 25 200 C of charge. The " +
            "energy in it also depends on the voltage: a 12 V pack of that " +
            "capacity stores 12 × 7 = 84 Wh. Comparing two batteries by Ah " +
            "alone is comparing apples with oranges unless the voltages match.",
        },
        {
          kind: "table",
          head: ["Quantity", "Formula", "Unit", "Typical label"],
          widths: [1.4, 1.4, 0.8, 2],
          rows: [
            ["Energy", "V × Q", "J, Wh", "84 Wh, 720 Wh"],
            ["Power", "V × I", "W", "300 W"],
            ["Charge / capacity", "I × t", "C, Ah", "60 Ah"],
            ["Specific energy", "energy ÷ mass", "Wh kg⁻¹", "29 Wh kg⁻¹ (lead-acid)"],
            ["Specific power", "power ÷ mass", "W kg⁻¹", "180 W kg⁻¹"],
          ],
        },
        {
          kind: "figure",
          src: "fund_energy_power.png",
          alt:
            "Two panels. Left: a discharge curve, terminal voltage falling " +
            "steadily from 12.6 volts with capacity in ampere-hours on the " +
            "horizontal axis, flattening near 12.0 volts then dropping sharply " +
            "at end of life, with the area under the curve shaded and labelled " +
            "energy in watt-hours. Right: a bar chart comparing specific " +
            "energy for lead-acid, nickel metal hydride and lithium ion, " +
            "rising from roughly 30 to roughly 150 watt-hours per kilogram.",
          caption:
            "Left: energy is the area under the discharge curve, not the " +
            "voltage. Right: why chemistry drives the range of a vehicle.",
        },
        {
          kind: "worked",
          title: "What can a car battery actually do?",
          given:
            "A 12 V, 60 Ah lead-acid battery of mass 25 kg. A pump draws 300 W.",
          steps: [
            String.raw`E = V \times \mathrm{Ah} = 12 \times 60 = 720\ \mathrm{Wh}`,
            String.raw`t = \frac{E}{P} = \frac{720\ \mathrm{Wh}}{300\ \mathrm{W}} = 2.4\ \mathrm{h}`,
            String.raw`E_{\text{specific}} = \frac{720\ \mathrm{Wh}}{25\ \mathrm{kg}} = 28.8\ \mathrm{Wh\,kg^{-1}}`,
          ],
          result:
            "About 2.4 hours of pumping, at 29 Wh/kg. That low number is " +
            "exactly why lithium chemistry replaced lead-acid in vehicles.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "A 60 Ah car battery holds 720 Wh, and it weighs 25 kg - so " +
            "carrying that to lift a car is absurd, which is why cars need " +
            "engines. The same calculation run the other way is the entire " +
            "reason electric vehicles exist: energy density decides range. " +
            "Power density is a different question, and it is why a phone can " +
            "burst to 20 W for a camera flash but a car battery struggles to " +
            "supply the 100 kW a motor needs - which is why EVs have " +
            "hundreds of small cells in series rather than one big one.",
        },
        {
          kind: "para",
          text:
            "You now have the whole quantitative basis of the subject: charge " +
            "in coulombs, current in amps, voltage in volts, and mass from " +
            "Faraday's law. The next stage is what happens when you try to " +
            "measure that voltage properly.",
        },
      ],
    },
    {
      id: "lab-cell",
      tone: "emerald",
      title: "Reading a real cell in the laboratory",
      minutes: 6,
      summary:
        "Three electrodes and a potentiostat: the setup behind every " +
        "experiment in the rest of this course.",
      keyPoints: [
        "Working electrode: the one you study. Reference: measures potential. Counter: completes the circuit.",
        "A three-electrode cell measures one electrode's potential independently of current.",
        "The reference electrode has a fixed, known potential - that is the whole point of it.",
        "Two-electrode cells are only acceptable when the counter is not polarising.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** everything so far has been " +
            "a two-electrode cell. If you want to know what *one* electrode is " +
            "doing, rather than what the pair is doing, how do you arrange it?",
        },
        {
          kind: "para",
          text:
            "The beaker from two sections ago will tell you a cell works, but " +
            "not what any one electrode is doing. Real measurements need three " +
            "electrodes.",
        },
        {
          kind: "figure",
          src: "fund_lab_setup.png",
          alt:
            "A glass cell containing three electrodes dipped into electrolyte, " +
            "connected by three leads to a box labelled potentiostat. The " +
            "working electrode is marked WE on the left, the reference " +
            "electrode RE as a slim glass tube in the middle with a porous tip, " +
            "and the counter electrode CE on the right. Labels read WE " +
            "controls potential, RE measures it, CE carries the current.",
          caption:
            "The standard three-electrode cell. Everything in Lecture 1 is " +
            "measured on this arrangement.",
        },
        {
          kind: "table",
          head: ["Electrode", "Role", "Why it is needed"],
          widths: [1.2, 1.8, 2.4],
          rows: [
            ["Working (WE)", "The electrode being studied", "Its current and potential are what you vary and measure"],
            ["Reference (RE)", "Fixed known potential", "Gives a reference point, and draws essentially no current"],
            ["Counter (CE)", "Completes the circuit", "Carries the current so the WE does not have to"],
          ],
        },
        {
          kind: "para",
          text:
            "Why does the counter electrode matter? If current flowed through " +
            "the working electrode and out through the reference electrode, " +
            "the reference's own chemistry would shift its potential, and your " +
            "measurement would be of two electrodes at once. A separate counter " +
            "electrode takes the current instead, leaving the reference " +
            "untouched.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Reference versus counter: the difference in one line",
          body:
            "The reference electrode is there to be *measured from* and carries " +
            "almost no current. The counter electrode is there to *carry current* " +
            "and its potential does not matter. Swap them and the measurement " +
            "falls apart.",
        },
        {
          kind: "para",
          text:
            "The potentiostat holds the working electrode at a potential you " +
            "command, relative to the reference, and reports the current that " +
            "results. Sweep that potential and you record a polarisation curve; " +
            "hold it and step the current to get an impedance spectrum. Both " +
            "appear in Lecture 1.",
        },
        {
          kind: "worked",
          title: "Converting what you read into a reported potential",
          given:
            "Your potentiostat says -0.310 V versus Ag/AgCl (saturated KCl), " +
            "and the sample pH is 4.2.",
          steps: [
            "Ag/AgCl (sat) sits at +0.197 V vs. SHE, and the sample reads " +
              "-0.310 V against it, so:",
            String.raw`E_{\text{vs SHE}} = -0.310 + 0.197 = -0.113\ \text{V}`,
            "If you also want the value at pH 0 - the reversible hydrogen " +
              "electrode scale - each pH unit is worth 59.16 mV:",
            String.raw`E_{\text{vs RHE}} = -0.113 - (0.05916 \times 4.2) = -0.361\ \text{V}`,
          ],
          result:
            "-0.113 V vs. SHE, or -0.361 V vs. RHE. Always state which " +
            "reference you used - two papers reporting these numbers against " +
            "different references are not comparable.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where you already meet this",
          body:
            "The three-electrode cell is not exotic laboratory furniture. " +
            "Every handheld pH meter is one: a glass body measures the " +
            "potential across a membrane against an Ag/AgCl reference, with a " +
            "counter electrode closing the circuit. It is also how a " +
            "corrosion engineer finds a structure's corrosion potential, and " +
            "how a battery's internal resistance is measured without " +
            "shorting it.",
        },
        {
          kind: "para",
          text:
            "That is the apparatus. The last page of the primer is the " +
            "reference sheet - every symbol and unit you will meet in the " +
            "rest of the course, so nothing later stops you for want of " +
            "vocabulary.",
        },
      ],
    },
    {
      id: "units-and-glossary",
      tone: "slate",
      title: "Units, symbols and the words you will meet",
      minutes: 5,
      summary:
        "A cheat-sheet to keep open while reading. Every symbol here is " +
        "used in the rest of the course.",
      keyPoints: [
        "1 mol L⁻¹ = 10⁻³ mol cm⁻³. Check which one a paper uses before substituting.",
        "Current density i = I/A, in A cm⁻², is not current. Most of Lecture 1 plots i, not I.",
        "Overpotential η is a loss, in volts, and is never the cell voltage itself.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The job of this section:** numbers in this subject are " +
            "meaningless without their units and their reference point. Keep " +
            "this page open while you work through Lecture 1.",
        },
        {
          kind: "table",
          head: ["Prefix", "Symbol", "Factor", "Example"],
          widths: [1.2, 0.8, 1, 2],
          rows: [
            ["milli", "m", "10⁻³", "mA, mV, mM"],
            ["micro", "μ", "10⁻⁶", "μA, μmol"],
            ["nano", "n", "10⁻⁹", "nm, nA"],
            ["kilo", "k", "10³", "kJ, kΩ"],
            ["mega", "M", "10⁶", "MW, MΩ"],
          ],
        },
        {
          kind: "callout",
          variant: "warn",
          title: "mV and V, mol L⁻¹ and mol cm⁻³",
          body:
            "Published electrochemistry mixes millivolts and volts, and molar " +
            "concentrations per litre and per cubic centimetre, freely. 1 " +
            "mol L⁻¹ is only 10⁻³ mol cm⁻³. Check which one you are in before " +
            "you substitute a number.",
        },
        {
          kind: "table",
          head: ["Symbol", "Name", "Unit", "Means"],
          widths: [0.7, 1.6, 1.1, 2.2],
          rows: [
            ["Q", "Charge", "C", "How much charge has passed"],
            ["I", "Current", "A", "Rate of charge flow"],
            ["i", "Current density", "A cm⁻²", "Current per unit electrode area, i = I/A"],
            ["E", "Electrode potential", "V", "Must always be quoted against a reference"],
            ["η", "Overpotential", "V", "Extra voltage lost to polarisation, a loss not a gain"],
            ["n", "Electrons transferred", "—", "Number of electrons in the half-reaction"],
            ["M", "Molar mass", "g mol⁻¹", "Mass of one mole of the species"],
            ["m", "Mass", "g", "Mass actually deposited"],
            ["F", "Faraday constant", "C mol⁻¹", "Charge per mole of electrons, 96 485"],
            ["R", "Gas constant", "J mol⁻¹ K⁻¹", "8.314, in the Nernst and Butler-Volmer equations"],
            ["T", "Absolute temperature", "K", "Use 298.15 for 25 °C"],
          ],
        },
        {
          kind: "table",
          head: ["Term", "Meaning"],
          widths: [1.3, 3.7],
          rows: [
            ["Electrode", "A conducting surface where electrons are exchanged with a species"],
            ["Electrolyte", "A melt or solution containing mobile ions"],
            ["Anode", "Electrode where oxidation occurs; makes electrons"],
            ["Cathode", "Electrode where reduction occurs; takes electrons"],
            ["Galvanic / voltaic", "A cell that produces current spontaneously"],
            ["Electrolytic", "A cell driven by an external power supply"],
            ["Faraday (F)", "96 485 C mol⁻¹, the charge per mole of electrons"],
            ["Current efficiency", "Deposited mass divided by the mass Faraday's law predicts"],
            ["Overpotential", "Extra potential needed to drive a reaction at a given rate"],
            ["Tafel slope", "Slope of overpotential against log current, in V per decade"],
            ["Limiting current", "The ceiling current set by mass transport of reactants"],
            ["Open circuit", "No current flowing; the potential is the cell voltage"],
            ["Reference electrode", "An electrode of fixed, known potential used as a measuring point"],
            ["Polarisation", "The departure of electrode potential from its reversible value under current"],
          ],
        },
        {
          kind: "worked",
          title: "Two conversions you will need constantly",
          given:
            "A paper reports a concentration of 5.0 mmol L⁻¹ and a current " +
            "density of 250 mA cm⁻².",
          steps: [
            "Concentration: 5.0 mmol L⁻¹ = 5.0 × 10⁻³ mol L⁻¹ = 5.0 × 10⁻⁶ mol cm⁻³. " +
              "The Levich equation wants mol cm⁻³, because D and ν are in cm² s⁻¹.",
            "Current density: 250 mA cm⁻² = 0.250 A cm⁻². If the electrode " +
              "has an area of 2.0 cm², the current is I = iA = 0.50 A.",
            "Sanity check on a 1 cm² electrode at the same density: " +
              "i_L = 0.250 A cm⁻² becomes a current of 0.250 A.",
          ],
          result:
            "5.0 × 10⁻⁶ mol cm⁻³ and 0.250 A cm⁻². Substituting mmol L⁻¹ " +
            "straight into a cm-based equation gives an answer wrong by a " +
            "factor of 1000.",
        },
        {
          kind: "para",
          text:
            "That is the whole foundation. If charge, current, voltage, " +
            "resistance, Faraday's law and the parts of a cell are all " +
            "familiar, you are ready for the real subject.",
        },
      ],
      cta: {
        title: "You are ready for Lecture 1",
        body:
          "You now have the vocabulary, the units and the four relations " +
          "everything else is built on. Lecture 1 takes these from " +
          "first principles to research level, in eleven short sections: the " +
          "anatomy of an electrochemical cell, the electrical double layer, " +
          "mass transport and the Levich equation, polarisation curves, " +
          "overpotentials, the Nernst equation and reference electrodes, " +
          "Butler-Volmer kinetics and Tafel analysis, the hydrogen evolution " +
          "reaction, corrosion, electrolysis, and batteries. Each one has its " +
          "own three-question check at the bottom.",
        href: "/lectures/lecture-1",
        linkLabel: "Start Lecture 1",
        secondaryHref: "/lectures/lecture-1/quiz",
        secondaryLabel: "Or jump straight to the Lecture 1 questions",
      },
    },
  ],
};