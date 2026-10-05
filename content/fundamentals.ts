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
  minutes: 35,
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
      minutes: 5,
      summary:
        "One idea: move electrons through a wire and you get chemistry you " +
        "can measure, control and use.",
      keyPoints: [
        "Anode is oxidation. Cathode is reduction. Those names never swap.",
        "Anode is negative in a galvanic cell, positive in an electrolytic one.",
        "Galvanic runs on its own; electrolytic has to be forced by an outside power supply.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "In an ordinary chemical reaction, molecules meet each other and " +
            "rearrange. You cannot see the electrons, and you cannot hold them back.",
        },
        {
          kind: "para",
          text:
            "An electrochemical reaction is the same chemistry with the two " +
            "halves pulled apart and joined by a wire. That single change buys " +
            "you three things, and together they are the entire subject:",
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
            "where the energy comes from.",
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
          kind: "callout",
          variant: "warn",
          title: "The one trap in this table",
          body:
            "The words **anode** and **cathode** are tied to the *reaction*, not " +
            "to the sign of the wire. Anode always means oxidation; cathode " +
            "always means reduction. But whether that electrode is positive or " +
            "negative flips between the two families. If you memorise only " +
            "\"anode loses electrons, cathode gains them\", you cannot go wrong.",
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
      ],
    },
    {
      id: "cell-anatomy",
      tone: "teal",
      title: "Anatomy of a cell",
      minutes: 6,
      summary:
        "Two electrodes, one electrolyte, one wire - and a route for the " +
        "ions so the solution does not charge up.",
      keyPoints: [
        "Electrode = a conducting surface where electrons are exchanged. Electrolyte = a solution that lets ions move.",
        "Oxidation happens at the anode, reduction at the cathode.",
        "Something must carry the ions; otherwise charge builds up and the current stops.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Every cell in this subject is an assembly of the same four " +
            "parts. Learn them once.",
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
            "Follow the electrons and the whole cell explains itself. The " +
            "zinc oxidises, so electrons leave it and travel down the wire. " +
            "They arrive at the copper and are consumed, so the wire is a " +
            "one-way street and no charge piles up in it.",
        },
        {
          kind: "para",
          text:
            "Now the solution. Zinc ions go into solution at the anode, so " +
            "positive charge accumulates there; copper ions are removed at the " +
            "cathode, so negative charge accumulates there. Within about a " +
            "millimetre the electric field opposes further ion motion and the " +
            "current stops. The salt bridge exists purely to repair this: " +
            "anions migrate toward the anode and cations toward the cathode, " +
            "keeping both solutions electrically neutral.",
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
      ],
    },
    {
      id: "charge-and-current",
      tone: "indigo",
      title: "Charge, current and resistance",
      minutes: 5,
      summary:
        "Coulombs are how much, amps are how fast. Get that distinction " +
        "right and half the confusion in the subject disappears.",
      keyPoints: [
        "1 amp = 1 coulomb per second.",
        "Current tells you how fast charge moves; charge tells you how much has moved.",
        "Ohm's law links them: V = IR, with resistance depending on the electrode, the solution and the geometry.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "These three quantities are constantly confused, so fix them now.",
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
      ],
    },
    {
      id: "faradays-laws",
      tone: "violet",
      title: "Faraday's laws: charge becomes mass",
      minutes: 6,
      summary:
        "The bridge between what you measure and what you make: how much " +
        "material a given charge will deposit.",
      keyPoints: [
        "Faraday's first law: deposited mass is proportional to charge passed.",
        "Faraday's second law: deposited mass is proportional to molar mass, and inversely proportional to electrons per ion.",
        "m = M Q / (n F), with F = 96 485 C mol⁻¹.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Faraday's laws are the workhorse of applied electrochemistry. " +
            "They are the reason you can weigh a deposited metal coating, " +
            "measure the purity of an alloy, or compute the operating time of " +
            "a plating cell.",
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
            "electrons per ion n rises, because a heavier ion needs more " +
            "electrons to change.",
        },
        {
          kind: "formula",
          tex: String.raw`m = \frac{M\,Q}{n\,F} = \frac{M\,I\,t}{n\,F}, \qquad F = 96485\ \mathrm{C\,mol^{-1}}`,
          caption:
            "Faraday's law. m in grams, M in g mol⁻¹, Q in coulombs, n electrons per ion.",
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
      ],
    },
    {
      id: "energy-and-power",
      tone: "amber",
      title: "Energy, power and what a battery rating means",
      minutes: 5,
      summary:
        "Volts times coulombs is joules; volts times amps is watts. Every " +
        "battery number on a label is one of those two.",
      keyPoints: [
        "Energy = V × Q. Power = V × I. These are different quantities.",
        "Ampere-hours measure charge (capacity), not energy.",
        "Specific energy is Wh/kg; specific power is W/kg. Never quote one as the other.",
      ],
      blocks: [
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
      minutes: 5,
      summary:
        "Three electrodes and a potentiostat: the setup behind every " +
        "experiment in the rest of this course.",
      keyPoints: [
        "Working electrode: the one you study. Reference: measures potential. Counter: completes the circuit.",
        "A three-electrode cell measures one electrode's potential independently of current.",
        "The reference electrode has a fixed, known potential - that is the whole point of it.",
      ],
      blocks: [
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
      ],
    },
    {
      id: "units-and-glossary",
      tone: "slate",
      title: "Units, symbols and the words you will meet",
      minutes: 4,
      summary:
        "A cheat-sheet to keep open while reading. Every symbol here is " +
        "used in the rest of the course.",
      blocks: [
        {
          kind: "para",
          text:
            "Numbers in this subject are meaningless without their units and " +
            "their reference point. Keep this page open.",
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
          ],
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