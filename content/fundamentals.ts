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
        "Electrochemistry is the branch of chemistry in which the reaction " +
        "is wired to the outside world. It turns the free energy of a " +
        "reaction into a potential difference you can measure, a " +
        "current you can " +
        "control, and work you can use.",
      keyPoints: [
        "Anode is oxidation and cathode is reduction. The names never swap, in either family of cell.",
        "Anode is negative in a galvanic cell and positive in an electrolytic one. The reaction fixes the name; the sign is a consequence.",
        "A galvanic cell runs because ΔG < 0. An electrolytic cell is that same reaction driven backwards because ΔG > 0.",
        "Electron flow in the external circuit runs anode to cathode, and its integral is the extent of the reaction.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** you have a chemical " +
            "reaction with a large negative ΔG. How do you get that energy " +
            "out as electrical work instead of heat, measure how far the " +
            "reaction has run, and stop it when you choose?",
        },
        {
          kind: "para",
          text:
            "Left alone, the reaction does whatever thermodynamics and " +
            "kinetics tell it to. ΔG < 0 fixes the direction, the rate " +
            "constant fixes the speed, and both are properties of the " +
            "mixture you happen to have. You cannot meter a reaction " +
            "proceeding inside a beaker, you cannot hold the electrons back " +
            "once two species have touched, and you cannot interrogate ΔG at " +
            "all. Electrochemistry changes precisely that.",
        },
        {
          kind: "para",
          text:
            "The move is to pull the two half-reactions apart onto conducting " +
            "surfaces and reconnect them through an external circuit. The " +
            "electrons must then travel down a wire you can cut into, meter " +
            "and supply. This is the one form of non-expansion work that " +
            "chemistry can deliver on demand, and it has an exact price " +
            "list: one mole of reaction carries the charge `nF`, so the " +
            "extent of the reaction and the charge that has passed are the " +
            "same quantity written two ways. Most of this subject is " +
            "bookkeeping built on that identity.",
        },
        {
          kind: "list",
          items: [
            "**You can measure.** The charge that has passed is the extent of the reaction, `q = nF ξ`. Charge and stoichiometry are not linked by a model you have to assume but are the same statement, which is why coulometry can determine composition to parts per million.",
            "**You can control.** Put a potentiostat between the electrodes and the applied potential becomes the control variable. You stop waiting for a mixture to react and start choosing a point on the electrochemistry, then holding it there.",
            "**You can use it.** Deliver the electrons somewhere useful and you have a battery, a plating bath, a fuel cell, or a regenerative fuel.",
            "**You can interrogate it.** The free energy you cannot read in a beaker is read straight off a cell potential, `ΔG = -nFE`. Electrochemistry is the one place in chemistry where the thermodynamic driving force is directly observable rather than inferred.",
          ],
        },
        {
          kind: "para",
          text:
            "Everything after this is a consequence of where the energy " +
            "comes from. If the chemistry can run by itself the cell is " +
            "galvanic: ΔG < 0, and since ΔG = -nFE, the cell must develop a " +
            "positive potential difference. If it cannot run by itself, a " +
            "power supply is " +
            "connected and the cell is electrolytic: the same half-reactions, " +
            "driven in reverse, with ΔG > 0 forced against the gradient at a " +
            "cost of `nFE` per mole of reaction.",
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
            ["Driving force", "ΔG < 0, spontaneous", "ΔG > 0, driven by the supply"],
            ["Energy flow", "Chemical → electrical", "Electrical → chemical"],
            ["Anode is", "Negative", "Positive"],
            ["Cathode is", "Positive", "Negative"],
            ["Examples", "Daniell cell, fuel cell, corrosion", "Electroplating, electrorefining, battery charging"],
          ],
        },
        {
          kind: "para",
          text:
            "The two columns differ in signs but never in names, and the " +
            "reason is worth stating properly rather than as a slogan. " +
            "Electrons fall through a potential energy landscape: they leave " +
            "the electrode with the higher electron free energy and arrive at " +
            "the one with the lower. Oxidation feeds electrons into the " +
            "circuit and reduction consumes them, so the high-energy end is " +
            "the anode and the low-energy end the cathode. The signs then " +
            "follow from whether the cell makes power or consumes it. Note " +
            "the useful consequence: `E = E(cathode) - E(anode)`, which is " +
            "positive in the galvanic case, so the sign never has to be " +
            "remembered. **The anode is where atoms lose electrons and the " +
            "cathode is where they gain them**; the polarity follows from " +
            "algebra.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The one trap in this table",
          body:
            "The words **anode** and **cathode** are attached to the " +
            "*reaction*, not to the polarity of the wire, and that polarity " +
            "genuinely flips between the two families. Two anchors keep you " +
            "out of trouble: \"Red Cat\" (reduction at the cathode) and \"An " +
            "Ox\" (oxidation at the anode). Treat \"anode is negative\" as an " +
            "artefact of the galvanic column rather than a definition, " +
            "because it fails the moment a power supply enters the circuit. " +
            "A related trap: since the galvanic anode is the negative " +
            "terminal, electrons leave a battery at its negative terminal, do " +
            "their work in the load, and return at the positive one.",
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
            "the other, and the wire is the path. Charging your phone runs " +
            "that chemistry in reverse as an electrolytic cell. The rust on a " +
            "damp steel gate is the instructive one, because it is a " +
            "galvanic cell whose external circuit is the gate itself: no " +
            "current is drawn, so none of the driving force leaves as work, " +
            "and all of it leaves as heat while the metal dissolves. The " +
            "corrosion industry exists to break that circuit deliberately, and " +
            "sacrificial anodes, coatings and inhibitors are all just ways of " +
            "managing `E` and the exchange current.",
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
            "So the idea, and more usefully the bookkeeping behind it: " +
            "reaction extent, charge and free energy are one quantity in three " +
            "units. The next section takes the cell apart and names the four " +
            "parts it is built from.",
        },
      ],
    },
    {
      id: "cell-anatomy",
      tone: "teal",
      title: "Anatomy of a cell",
      minutes: 7,
      summary:
        "Four parts and two charge paths: electrons through the wire, ions " +
        "through the electrolyte. A cell works only while both are open.",
      keyPoints: [
        "An electrode is a conducting surface where electrons are exchanged; the electrolyte is the phase in which ions carry charge.",
        "Oxidation at the anode, reduction at the cathode, in either family of cell.",
        "Charge needs two paths at once. Break the electronic one or the ionic one and the current stops.",
        "Cell notation is bookkeeping: oxidation side first, `|` for a phase boundary, `||` for the bridge.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** if the two halves of the " +
            "reaction are pulled apart, what exactly do you have to build, " +
            "and what is each part doing?",
        },
        {
          kind: "para",
          text:
            "Every cell in this subject is the same handful of parts " +
            "assembled differently, and the reason there are so few is charge " +
            "conservation. Oxidation pushes electrons into a conductor and " +
            "reduction takes them out again, so between the two electrodes " +
            "the electrons need a path you can put a meter in. That is the " +
            "external circuit. At the same time the solution must not be " +
            "allowed to accumulate charge, so each half-reaction has to be " +
            "balanced by ions moving inside the electrolyte. Those two " +
            "requirements fix the parts before you have chosen any chemistry " +
            "at all.",
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
            "boundary between two *phases* - metal touching solution, say. A " +
            "double bar `||` marks the salt bridge, the cell's own internal " +
            "connection. `(s)` is solid, `(aq)` dissolved in water, `(l)` " +
            "liquid, `(g)` gas. And the oxidation side is always written " +
            "first, on the left, whatever the cell is being used for. The " +
            "point of that convention is worth stating: it makes the " +
            "left-hand electrode the anode *by definition*, so a cell " +
            "potential can never come out ambiguous when you subtract.",
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
            "wire; they arrive at the copper and are consumed. The wire is a " +
            "one-way street because a metal has mobile electrons that move " +
            "without accumulating charge - a conductor carries charge, it " +
            "does not store it.",
        },
        {
          kind: "para",
          text:
            "Now the solution, which is the half people forget. Zinc ions go " +
            "into solution at the anode, so positive charge accumulates there; " +
            "copper ions are removed at the cathode, so negative charge " +
            "accumulates there. Over a distance comparable to the Debye " +
            "length the field this builds opposes further ion motion, the " +
            "charge separation screens itself, and the current dies. The " +
            "bridge exists purely to repair that: anions migrate toward the " +
            "anode and cations toward the cathode, holding both solutions " +
            "close to neutral. It is not free, though - a bridge is a " +
            "junction between two different solutions, so it carries a " +
            "diffusion potential that has to be eliminated before any " +
            "measurement can be trusted.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Why the electrolyte cannot be anything",
          body:
            "Only ions can move charge through a liquid, and only a species " +
            "that is *already* ionic can supply them. That is why the " +
            "electrolyte is a molten salt or a salt solution, and why pure " +
            "water is a hopeless conductor - it has almost no mobile ions. " +
            "Note also that cations and anions both carry current inside the " +
            "cell, and the share each one carries is its transference number. " +
            "So the internal resistance of a cell is not fixed by geometry " +
            "alone: it depends on how the current divides between the two " +
            "ionic species.",
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
            "Both halves now carry the same number of equivalents per " +
              "second, so no charge builds up anywhere, and the current " +
              "keeps flowing.",
          ],
          result:
            "Anions to the anode, cations to the cathode. Swap them and the " +
            "cell stops within milliseconds.",
        },
        {
          kind: "para",
          text:
            "Swapping the metals changes the voltage, because different " +
            "couples sit at different potentials. That single fact is most " +
            "of cell chemistry: **the potential is decided by which two " +
            "couples you pair**, not by the vessel you build them in. " +
            "Formally `E = E(cathode) - E(anode)`, and since `ΔG = -nFE` the " +
            "cell potential is a thermodynamic statement about a reaction. " +
            "What it does *not* tell you is how fast the cell will run; that " +
            "is a separate question, and pairing two couples that sit far " +
            "apart buys a big voltage and often a sluggish one.",
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
            "form: two lead plates in sulfuric acid, one oxidising to PbO₂ " +
            "while the other is reduced, and instead of a salt bridge a " +
            "porous plastic separator lets the ions through while keeping the " +
            "plates apart. Here the electrolyte is not a spectator - the " +
            "sulfate is consumed and must be restored by charging. " +
            "Lithium-ion cells go further and use no liquid bridge at all, " +
            "only a solid or gel electrolyte between the electrodes. If the " +
            "ions cannot get from one plate to the other, every battery " +
            "ever made simply stops.",
        },
        {
          kind: "para",
          text:
            "You now know the parts and the shape of a cell. But a cell does " +
            "not simply produce electrons - it produces them at a *rate*, " +
            "and the next section fixes the three numbers that rate depends " +
            "on.",
        },
      ],
    },
    {
      id: "charge-and-current",
      tone: "indigo",
      title: "Charge, current and resistance",
      minutes: 6,
      summary:
        "Coulombs are how much, amps are how fast, and a current is the " +
        "reaction's rate made observable. Fix that distinction and half the " +
        "confusion in the subject disappears.",
      keyPoints: [
        "1 amp = 1 coulomb per second, and `I = nF` times the rate of reaction.",
        "Current tells you how fast charge moves; charge tells you how much has moved.",
        "A cell's resistance has three separate sources: the solution, the electrode surface, and the transport of material to it.",
        "A potential is energy per coulomb, so you need the charge before you can talk about the energy.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The question this section answers:** how do we *measure* a " +
            "reaction that is happening? Four quantities come out of that " +
            "measurement and they are constantly confused, so we fix them " +
            "here - and then connect the first two to the reaction itself, " +
            "because that connection is the whole point of the subject.",
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
            "for the same time the 2 A one simply delivers twice as much. One " +
            "warning about the picture: a current is not a substance. In a " +
            "cell running steadily, no charge accumulates anywhere - every " +
            "coulomb entering the wire leaves it, and every ion crossing one " +
            "interface is replaced at the other. Current is a rate of " +
            "passage, not a quantity on hand.",
        },
        {
          kind: "para",
          text:
            "Here is the connection worth making early. The previous section " +
            "wrote the cell reaction in terms of the extent `ξ`, and the " +
            "reaction transfers `nF` coulombs per mole of reaction. So the " +
            "ammeter on the wire is not measuring the cell, it is measuring " +
            "the chemistry: `I = nF` times `dξ/dt`. **Current is the rate of " +
            "the reaction, in electrochemical units.** That is why the " +
            "Faraday relations in the next section are arithmetic rather than " +
            "physics, and it is also why two cells running at the same current " +
            "are doing chemically comparable things.",
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
            "coulomb, so you must know the charge before you know the energy. " +
            "The second one has a sign convention attached as well: since " +
            "`ΔG = -nFE`, the potential is defined so that a cell giving energy " +
            "to its surroundings has a *positive* `E`.",
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
            "of electrons arrived. If the cathode reaction was `Cu²⁺ + 2e⁻ → " +
            "Cu`, that is 0.028 mol of copper plated out, and it moved the " +
            "extent of reaction by `ξ = 0.028 mol`.",
        },
        {
          kind: "para",
          text:
            "Resistance is where electrochemistry becomes itself. Ohm's law " +
            "holds for metals, but in a cell the resistance you measure is " +
            "not one thing: it is the sum of at least three contributions, and " +
            "separating them is most of what electrochemistry does. There is " +
            "the resistance of the solution itself, which is roughly " +
            "geometric. There is the resistance of *transferring* charge " +
            "across the electrode interface, which depends on the " +
            "electrocatalyst and is the part a chemist can most improve. And " +
            "there is the resistance of getting fresh reactant to a surface " +
            "that is consuming it, which is diffusion and grows as the " +
            "current rises. That is the origin of a polarisation curve: each " +
            "contribution takes over in turn as you demand more current.",
        },
        {
          kind: "para",
          text:
            "One more quantity hides inside the word current. A current is " +
            "measured through the *whole* cell, so it tells you nothing about " +
            "how hard that current is working at a given electrode. Divide by " +
            "the area and you have the current density `j`, which is the " +
            "quantity that actually belongs to the surface: double the " +
            "electrode area at fixed total current and you have halved `j`, " +
            "and on a polarisation curve you have moved to a different " +
            "operating point entirely. Whenever a paper quotes a current, the " +
            "first question is which of the two it meant.",
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
            "the only way to refill it faster. But the label is a promise " +
            "made at a low current, and this is the trap in the next bullet: " +
            "the C-rate. A 3000 mAh cell discharged at 3 A is running at 1C; " +
            "asked for 6 A it is at 2C, and it will not deliver the full " +
            "capacity before it falls over, because the third resistance " +
            "above has started to dominate. Quoted capacity is always " +
            "capacity *at a stated rate*.",
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
      title: "Faraday's laws: charge becomes mass",
      tone: "violet",
      minutes: 7,
      summary:
        "The bridge between a meter reading and a physical object: charge " +
        "in, mass out. And the honest version is that this is not an " +
        "empirical law but charge conservation plus stoichiometry.",
      keyPoints: [
        "One mole of reaction moves `nF` coulombs, so `m = M Q / (nF)` - a consequence of bookkeeping, not an experimental discovery.",
        "The empirical content is the assumption that all the current goes into one reaction; that is what current efficiency measures.",
        "`F` is the charge on one mole of electrons, 96 485 C mol⁻¹, and since 2019 it is an exact constant.",
        "Because Faraday gives an upper bound on the mass, it is a reference quantity - which is the whole idea behind coulometric titration.",
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
            "mass, provided the reaction runs at 100% efficiency. Hold on to " +
            "that proviso, because the whole section turns on it.",
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
            "Here is the part worth being precise about. Both of Faraday's " +
            "laws follow from two things you already have. The previous " +
            "section established that the charge is proportional to the " +
            "extent of reaction, `Q = nF ξ`. Chemistry then says how much " +
            "mass an extent of `ξ` is worth: `m = M ξ / n`. Substitute one " +
            "into the other and the law above appears, with no experimental " +
            "content at all. Faraday's contribution was not discovering a " +
            "law of nature; it was stating the relationship in a form that " +
            "an instrument could read. What *is* empirical is the assumption " +
            "buried in the proviso above - that every coulomb went into the " +
            "reaction you are watching.",
        },
        {
          kind: "para",
          text:
            "The four symbols, once and for all: **M** is the molar mass of " +
            "whatever is being deposited, in g mol⁻¹. **n** is the number of " +
            "electrons in the half-reaction - 1 for Ag⁺ → Ag, 2 for " +
            "Cu²⁺ → Cu, 3 for Au³⁺ → Au. **F** is the Faraday constant, the " +
            "charge carried by one mole of electrons, 96 485 C mol⁻¹; it is " +
            "`N_A` times the elementary charge, and since the 2019 revision " +
            "of the SI those two are exact, so `F` is too. **Q** is the " +
            "charge you measured from the previous section. Get n from the " +
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
            "Straight lines through the origin, and the slope of each line is " +
            "that metal's electrochemical equivalent `M / nF`. Note what the " +
            "graph does not show: silver has the steepest slope here, so it " +
            "deposits most mass per coulomb, which is a different claim from " +
            "depositing most efficiently.",
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
            "less than this, which is why efficiency is quoted - and note the " +
            "direction of the error: the calculation is an upper bound, so a " +
            "shortfall against it is diagnostic rather than disappointing.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Current efficiency",
          body:
            "Compare the mass you actually weighed with the mass Faraday's " +
            "law predicts. The ratio is the current efficiency, usually given " +
            "as a percentage. The name is a slight misnomer - nothing about " +
            "the current itself is being measured, since it is the same " +
            "current in both cases. What is being compared is where the " +
            "charge went: how much of it went into the reaction you wanted " +
            "and how much into hydrogen evolution or dissolution of the " +
            "substrate. So this is a selectivity between competing reactions. " +
            "A copper plating bath running at 95% passes five per cent of its " +
            "charge into hydrogen, which is also five per cent of the power " +
            "wasted.",
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
            "calculation that sets the length of a real production line, and " +
            "note that it is only the current that is free: raise `I` and " +
            "the time falls in proportion, until mass transport at the " +
            "surface can no longer keep up and the coating goes rough.",
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
            "of the refined metal is certified. That trick is worth naming, " +
            "because the deposit is a physical record of every coulomb that " +
            "passed: run a known current until the mass gain tells you the " +
            "metal is complete, and you have performed a titration with " +
            "charge instead of with volume. The reason gold plating uses a " +
            "thin layer is arithmetic, not thrift: gold is expensive and " +
            "n = 3, so each gram of it needs three times the charge of a gram " +
            "of silver.",
        },
        {
          kind: "para",
          text:
            "Charge in, mass out - and that is the applied half of the " +
            "subject, because Faraday's law lets you make a quantity you can " +
            "weigh out of a quantity you can only meter. The other half asks " +
            "the reverse question: how much energy was stored, and how fast " +
            "can you get it back? That is the next section.",
        },
      ],
    },
    {
      id: "energy-and-power",
      tone: "amber",
      title: "Energy, power and what a battery rating means",
      minutes: 6,
      summary:
        "Volts times coulombs is joules, volts times amps is watts, and " +
        "every number on a battery label is one of those two. The subtlety " +
        "is that the voltage a battery is labelled with is not the voltage " +
        "it delivers.",
      keyPoints: [
        "Energy = `V × Q`, power = `V × I`. Different quantities, and mixing them is the classic slip.",
        "Ampere-hours measure charge (capacity), not energy; energy also needs the voltage.",
        "A label quotes the reversible voltage. Deliver real current and the working voltage is lower by exactly the losses.",
        "Specific energy (Wh kg⁻¹) decides range; specific power (W kg⁻¹) decides acceleration. Never quote one as the other.",
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
            "energy and power, and mixing them up is the classic exam slip " +
            "in this subject. But there is a second, subtler trap here, and " +
            "it is where this section earns its keep: **the voltage on the " +
            "label is not the voltage you get.** A cell at rest sits at its " +
            "reversible potential `E`. The moment you draw current from it, " +
            "the terminal voltage sags below that, by exactly the three " +
            "losses from section 3. So the work you can actually take out is " +
            "always less than the `V × Q` the label implies.",
        },
        {
          kind: "formula",
          tex: String.raw`E = V\,Q, \qquad P = V\,I, \qquad E = \int V \, \mathrm{d}Q`,
          caption:
            "Left two: instantaneous relationships. Right: the general form, " +
            "which you need once the voltage changes during discharge - and " +
            "the integral runs along whatever curve the cell actually follows, " +
            "not along its open-circuit voltage.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Ampere-hours are charge, not energy",
          body:
            "A battery marked 7 Ah holds 7 × 3600 = 25 200 C of charge. The " +
            "energy in it also depends on the voltage: a 12 V pack of that " +
            "capacity stores 12 × 7 = 84 Wh. Comparing two batteries by Ah " +
            "alone is comparing apples with oranges unless the voltages match. " +
            "And note what the integral above means for the label: the Ah is " +
            "read off the *discharged* capacity, so a cell held at 84 Wh " +
            "nominal delivers less than 84 Wh in practice, because its " +
            "voltage sags below the nominal value the whole way down.",
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
            ["Round-trip efficiency", "energy out ÷ energy in", "%", "85–95%"],
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
            "voltage. That curve is measured at some specific current, and it " +
            "sits below the open-circuit voltage by more the harder you " +
            "pull. Right: why chemistry drives the range of a vehicle.",
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
            "About 2.4 hours of pumping, at 29 Wh/kg. That is an upper bound " +
            "in two separate ways: the voltage falls below 12 V as the cell " +
            "discharges, and 300 W through a lead-acid cell costs more than " +
            "the nominal figure because of the losses above. The low specific " +
            "energy is exactly why lithium chemistry replaced lead-acid in " +
            "vehicles.",
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
            "hundreds of small cells in series rather than one big one. " +
            "Current capability scales with electrode *area*, not with " +
            "amount of material, so a pack that must deliver power is built " +
            "from many small parallel-connected cells, while a pack that must " +
            "store energy is built from few large ones. Supercapacitors sit at " +
            "the opposite extreme: very low specific energy, but enormous " +
            "specific power, which is why they brake a car and cannot drive " +
            "it.",
        },
        {
          kind: "para",
          text:
            "One last thing this section should have said earlier. A battery " +
            "stores free energy, not heat, and the distinction is not pedantry " +
            "but the reason the whole subject exists: energy can be converted " +
            "back into work completely, but not once it has been dissipated " +
            "as heat. Since section 1 gave `ΔG = -nFE`, the label on the cell " +
            "is a free energy per coulomb, and every ampere-hour you draw " +
            "spends some of it irreversibly. You now have the whole " +
            "quantitative basis of the subject: charge in coulombs, current in " +
            "amps, voltage in volts, mass from Faraday's law, and energy from " +
            "the area under a curve. The next stage is what happens when you " +
            "try to measure that voltage properly.",
        },
      ],
    },
    {
      id: "lab-cell",
      tone: "emerald",
      title: "Reading a real cell in the laboratory",
      minutes: 6,
      summary:
        "Three electrodes and a potentiostat. The reason one of them must " +
        "not be touched by the current is the reason the other two exist.",
      keyPoints: [
        "Working electrode: the one you study. Reference: measures potential without drawing current. Counter: carries the current so the working electrode need not.",
        "A reference electrode is fixed because its own reaction is at equilibrium and its chloride activity is buffered by a saturated KCl solution.",
        "Any current through the reference shifts it by `iR`, so potentiostat inputs are measured in picoamperes.",
        "Keep the reference tip near the working electrode, or the drop you measure is not the drop you meant.",
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
            "not what any one electrode is doing, and it cannot: with two " +
            "electrodes you measure the *sum* of two potentials and no way of " +
            "splitting it. Separating them needs a third electrode, and each of " +
            "the three exists to solve one specific problem with the other two.",
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
            "measured on this arrangement. Note that the reference is drawn " +
            "close to the working electrode rather than at the far side of the " +
            "cell - that detail is the subject of the last paragraph.",
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
            "Start with the reference, because its stability is the whole " +
            "measurement. A reference electrode is not just a half-cell; it is " +
            "a half-cell arranged so that its potential cannot move. Two " +
            "things arrange that. The electrode's own reaction is at " +
            "equilibrium, so there is no net current and nothing to shift; and " +
            "the ion setting its potential - chloride for Ag/AgCl - is held at " +
            "a fixed activity by a saturated KCl solution, so the Nernst term " +
            "that depends on concentration is pinned rather than drifting. " +
            "Change that KCl solution for a dilute one and the electrode is no " +
            "longer a reference at all: its potential moves, slowly and with " +
            "the weather.",
        },
        {
          kind: "para",
          text:
            "The second reason the reference stays out of the current is " +
            "arithmetic. Any current at all polarises it, shifting its " +
            "potential by `iR` for the resistance of its own internals. Since " +
            "you cannot know `iR` without disturbing the measurement, the only " +
            "defensible answer is to make `i` negligible - which is why a " +
            "potentiostat measures its inputs in picoamperes and why a leaking " +
            "reference shows up as a drifting baseline long before anything " +
            "else goes wrong.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Reference versus counter: the difference in one line",
          body:
            "The reference electrode is there to be *measured from* and carries " +
            "almost no current. The counter electrode is there to *carry current* " +
            "and its potential does not matter - but it is not free, because the " +
            "current passing through it drops a voltage across its own " +
            "resistance and polarises it like any other electrode. That is why " +
            "the counter is normally a large piece of platinum or graphite: a " +
            "big area has a small resistance and a low current density, so it " +
            "stays outside the region where it would dissolve or evolve gas " +
            "that fouled your experiment. Swap the reference and the counter " +
            "and the measurement falls apart.",
        },
        {
          kind: "para",
          text:
            "With those three settled, the potentiostat's job is simple to " +
            "state. It holds the working electrode at the potential you " +
            "command, measured against the reference, and reports the current " +
            "that results. Sweep the potential and you record a polarisation " +
            "curve. Hold it still and superimpose a small sinusoidal " +
            "perturbation, sweeping its frequency, and you get an impedance " +
            "spectrum that separates the resistances section 3 listed. Both " +
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
            "different references are not comparable. And note what this " +
            "arithmetic assumes: the potential step between reference and " +
            "solution, and any solution resistance between the reference tip " +
            "and the working electrode, are being neglected.",
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
            "One practical detail decides whether any of this is accurate. " +
            "The reference measures the potential at its own tip, not at the " +
            "working electrode's surface, and between the two lies solution " +
            "that the current is flowing through. That drop, `iR`, is " +
            "uncompensated unless the tip is brought close - which is why the " +
            "figure shows it next to the working electrode and why real cells " +
            "use a Luggin capillary. Ignore it and your error grows with " +
            "current, so the same electrode measures a different potential at " +
            "a different scan rate, and every cyclic voltammogram you have " +
            "measured with a distant reference is a little too tall. That is " +
            "the apparatus. The last page of the primer is the reference " +
            "sheet - every symbol and unit you will meet in the rest of the " +
            "course, so nothing later stops you for want of vocabulary.",
        },
      ],
    },
    {
      id: "units-and-glossary",
      tone: "slate",
      title: "Units, symbols and the words you will meet",
      minutes: 5,
      summary:
        "A reference sheet to keep open while reading. Every symbol here is " +
        "used in the rest of the course, and every one is ambiguous in at " +
        "least one way.",
      keyPoints: [
        "Dimensional consistency is a real check: if the units do not simplify to something physical, you have made a mistake.",
        "`1 mol L⁻¹ = 10⁻³ mol cm⁻³`, and `M` means mega in `MW` but molar in `mol L⁻¹`.",
        "Current density `j = I/A` is not current. Most of Lecture 1 plots `j`, never `I`.",
        "Overpotential `η` is a loss in volts, never the cell voltage itself, and `E` is meaningless without its reference electrode.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**The job of this section:** numbers in this subject are " +
            "meaningless without their units and their reference point, and " +
            "both are easy to get wrong in a way that does not look wrong. " +
            "Keep this page open while you work through Lecture 1. Two habits " +
            "pay for it immediately: write the unit next to every number as " +
            "you read it, and before you believe any answer, check that the " +
            "units collapse to something physical. A mass calculation that " +
            "leaves you holding volts has failed, and no amount of arithmetic " +
            "will explain why.",
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
            "you substitute a number. And note that one letter does two " +
            "jobs: `M` is mega in `MW` but molar in `mol L⁻¹`, while molar " +
            "mass uses a capital `M` as a variable. Unit consistency is not " +
            "pedantry here; it is the cheapest error check you will ever get.",
        },
        {
          kind: "table",
          head: ["Symbol", "Name", "Unit", "Means"],
          widths: [0.7, 1.6, 1.1, 2.2],
          rows: [
            ["Q", "Charge", "C", "How much charge has passed"],
            ["I", "Current", "A", "Rate of charge flow"],
            ["j", "Current density", "A cm⁻²", "Current per unit electrode area, j = I/A"],
            ["E", "Electrode potential", "V", "Must always be quoted against a reference"],
            ["η", "Overpotential", "V", "Extra voltage lost to polarisation, a loss not a gain"],
            ["n", "Electrons transferred", "—", "Number of electrons in the half-reaction"],
            ["ξ", "Extent of reaction", "mol", "How far the reaction has proceeded; Q = nF ξ"],
            ["M", "Molar mass", "g mol⁻¹", "Mass of one mole of the species"],
            ["m", "Mass", "g", "Mass actually deposited"],
            ["F", "Faraday constant", "C mol⁻¹", "Charge per mole of electrons, 96 485"],
            ["R", "Gas constant", "J mol⁻¹ K⁻¹", "8.314, in the Nernst and Butler-Volmer equations"],
            ["T", "Absolute temperature", "K", "Use 298.15 for 25 °C"],
            ["D", "Diffusion coefficient", "cm² s⁻¹", "How fast a species diffuses"],
            ["ν", "Kinematic viscosity", "cm² s⁻¹", "Solvent viscosity divided by density"],
            ["α", "Transfer coefficient", "—", "Asymmetry of the forward and reverse barriers"],
            ["k⁰", "Standard rate constant", "cm s⁻¹", "How fast the interface is at standard conditions"],
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
            ["SHE", "The standard hydrogen electrode: the reference all others are quoted against"],
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
              "has an area of 2.0 cm², the current is I = jA = 0.50 A.",
            "Sanity check on a 1 cm² electrode at the same density: " +
              "j_L = 0.250 A cm⁻² becomes a current of 0.250 A.",
          ],
          result:
            "5.0 × 10⁻⁶ mol cm⁻³ and 0.250 A cm⁻². Substituting mmol L⁻¹ " +
            "straight into a cm-based equation gives an answer wrong by a " +
            "factor of 1000 - and one that still looks like a plausible " +
            "number, which is exactly what makes it dangerous.",
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