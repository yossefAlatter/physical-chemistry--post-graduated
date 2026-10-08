// Lesson 0 - A short introduction.
//
// This lesson replaces the old "Fundamentals" primer. It is deliberately
// short: it gives the words and the big picture, so that Lesson 1 can start
// straight away on the quantitative material. It is original writing; the
// textbooks listed in SYLLABUS.md set coverage only.

import type { Lesson } from "./types";
import { lesson0Mcq } from "./lesson-0.mcq";

export const lesson0: Lesson = {
  slug: "lesson-0",
  label: "Lesson 0",
  title: "A short introduction",
  summary:
    "Before the equations, here is the picture. Electrochemistry is the " +
    "chemistry of electrons moving between a metal and a solution. This short " +
    "lesson explains what that means, the three quantities we use to describe " +
    "it, how a cell is written down, and how the rest of the course fits " +
    "together.",
  order: 0,
  minutes: 25,
  mcq: lesson0Mcq,
  intro: [
    {
      kind: "para",
      text:
        "This is a short welcome lesson, not a long one. It assumes you " +
        "remember some school chemistry, but nothing more, and it takes about " +
        "half an hour. Everything in it is used again later, so it is worth " +
        "reading carefully before you move on.",
    },
    {
      kind: "para",
      text:
        "The aim is simple. By the end you should be able to say what " +
        "electrochemistry studies, name the three quantities that describe a " +
        "cell, and read the short-hand way chemists write a cell down. That is " +
        "the vocabulary the next lessons build on.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary",
      body:
        "Electrochemistry studies reactions in which electrons cross the " +
        "boundary between a metal electrode and a solution, and it describes " +
        "them with three ideas: charge, current and potential.",
    },
  ],
  sections: [
    {
      id: "what-it-studies",
      tone: "azure",
      title: "What electrochemistry studies",
      minutes: 6,
      summary:
        "Electrochemistry is the chemistry of electron transfer at the edge of " +
        "a metal and a solution. This section gives the big picture and shows " +
        "the two directions a cell can run.",
      keyPoints: [
        "Electrochemistry studies reactions in which electrons pass between an electrode and a solution.",
        "Oxidation means losing electrons, and reduction means gaining them; together they make a redox reaction.",
        "A galvanic cell uses a reaction that happens by itself to make electricity; an electrolytic cell uses electricity to push a reaction the other way.",
        "Oxidation always happens at the anode and reduction at the cathode.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Most chemistry is about atoms swapping partners in a solution. " +
            "Electrochemistry is different because one partner is a solid " +
            "metal and the other is a liquid. The reaction happens right at " +
            "the surface where they meet, and its currency is the electron.",
        },
        {
          kind: "para",
          text:
            "The metal is called the *electrode*. It can hand electrons to " +
            "the solution or take them back. The liquid is called the " +
            "*electrolyte*; it contains ions, which are atoms or groups of " +
            "atoms carrying a charge. When the electrode gives out electrons, " +
            "something in the solution is reduced.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Oxidation and reduction, without the confusion",
          body:
            "Oxidation is the *loss* of electrons; reduction is the *gain* of " +
            "electrons. A memory aid is OIL RIG: Oxidation Is Loss, Reduction " +
            "Is Gain. The two always happen together, because an electron has " +
            "to go somewhere. A reaction built this way is called a redox " +
            "reaction.",
        },
        {
          kind: "para",
          text:
            "A cell can run in two directions. If the reaction wants to " +
            "happen by itself, it can push electrons around an outside wire " +
            "and do useful work; this is a *galvanic* cell, and it makes " +
            "electricity. If the reaction does not want to happen, we can " +
            "still force it by feeding electricity in; this is an " +
            "*electrolytic* cell, and it uses electricity. Batteries are " +
            "galvanic cells; the industrial plants that make aluminium or " +
            "chlorine use electrolytic cells.",
        },
        {
          kind: "list",
          items: [
            "*Anode*: the electrode where oxidation happens (electrons leave the solution).",
            "*Cathode*: the electrode where reduction happens (electrons enter the solution).",
            "The two names are fixed by the reaction, not by which side of the cell looks positive.",
          ],
        },
      ],
    },
    {
      id: "charge-current-potential",
      tone: "indigo",
      title: "Charge, current and potential",
      minutes: 6,
      summary:
        "Three quantities describe almost everything in electrochemistry: how " +
        "much charge is moved, how fast it moves, and how much energy each unit " +
        "of charge carries.",
      keyPoints: [
        "Charge is measured in coulombs (C); one mole of electrons carries a charge of about 96 485 C, called the Faraday constant F.",
        "Current is the rate of flow of charge, measured in amperes (A), where 1 A = 1 C/s.",
        "The charge passed in a steady current is Q = I t.",
        "Potential is energy per unit charge, measured in volts (V), where 1 V = 1 J/C; a cell voltage is the energy available per coulomb.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Three quantities cover most of the subject. The first is " +
            "*charge*, written Q and measured in coulombs (C). Electrons are " +
            "tiny, so a useful amount of charge means an enormous number of " +
            "them. It is easier to count them by the mole: one mole of " +
            "electrons carries the *Faraday constant* F.",
        },
        {
          kind: "formula",
          tex: String.raw`F = N_A e \approx 96\,485\ \mathrm{C\ mol^{-1}}`,
          caption: "Charge on one mole of electrons",
        },
        {
          kind: "para",
          text:
            "The second quantity is *current*, written I and measured in " +
            "amperes (A). Current is simply charge moving past a point each " +
            "second, so 1 A = 1 C/s. If the current is steady, the total " +
            "charge that has passed is current multiplied by time.",
        },
        {
          kind: "formula",
          tex: String.raw`Q = I t \qquad Q = nF`,
          caption: "Charge from a steady current, and charge from n moles of electrons",
        },
        {
          kind: "para",
          text:
            "The third quantity is *potential*, written E and measured in " +
            "volts (V). Potential is energy per unit charge: one volt is one " +
            "joule per coulomb. A cell voltage therefore tells you how much " +
            "energy each coulomb of charge can deliver, not how many coulombs " +
            "flow. Voltage and current answer different questions: voltage is " +
            "how hard the charge is pushed, current is how much is moving.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The three quantities in one line",
          body:
            "Charge Q (coulombs) is *how much*; current I (amperes) is *how " +
            "fast*; potential E (volts) is *how much energy per charge*. Most " +
            "of electrochemistry is built from these three ideas.",
        },
      ],
    },
    {
      id: "how-a-cell-is-written",
      tone: "violet",
      title: "How a cell is written",
      minutes: 6,
      summary:
        "Chemists describe a cell with a one-line diagram. Once you can read " +
        "the symbols, you can see the anode, the cathode and every boundary in " +
        "the cell at a glance.",
      keyPoints: [
        "A cell diagram is read from left to right: the anode is on the left, the cathode on the right.",
        "A single vertical line marks a boundary between two phases; a double line marks a salt bridge or liquid junction.",
        "In the example Zn(s) | Zn2+(aq) || Cu2+(aq) | Cu(s), zinc is oxidised on the left and copper ions are reduced on the right.",
        "Each side of the double line is one half-cell, with its own electrode and solution.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Drawing a whole cell every time would be slow, so chemists use a " +
            "short-hand line. Solids are written as the metal, ions as their " +
            "formula, and vertical lines stand for the surfaces between them. " +
            "By agreement, the diagram is always read from left to right.",
        },
        {
          kind: "table",
          head: ["Symbol", "Meaning"],
          rows: [
            ["|", "A boundary between two phases, for example metal and solution."],
            ["||", "A salt bridge or other liquid junction joining the two half-cells."],
            ["Left-hand end", "The anode, where oxidation happens."],
            ["Right-hand end", "The cathode, where reduction happens."],
          ],
          widths: [1, 3],
        },
        {
          kind: "para",
          text:
            "Here is a familiar example. A strip of zinc in zinc sulfate on " +
            "the left, a strip of copper in copper sulfate on the right, and a " +
            "salt bridge between them.",
        },
        {
          kind: "formula",
          tex: String.raw`\mathrm{Zn(s)}\ |\ \mathrm{Zn^{2+}(aq)}\ \|\ \mathrm{Cu^{2+}(aq)}\ |\ \mathrm{Cu(s)}`,
          caption: "The Daniell cell, read from left to right",
        },
        {
          kind: "para",
          text:
            "Reading it tells the whole story: zinc is oxidised on the left " +
            "(it gives up electrons and becomes Zn2+), the electrons travel " +
            "through the outside wire, and copper ions on the right take the " +
            "electrons and become copper metal. The salt bridge lets charge " +
            "balance without mixing the two solutions.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The common mistake",
          body:
            "Do not label the electrodes by their charge signs when the cell " +
            "is galvanic. Label them by the reaction: the anode is always " +
            "where oxidation happens and the cathode where reduction happens, " +
            "whichever side they sit on.",
        },
      ],
    },
    {
      id: "the-road-ahead",
      tone: "rose",
      title: "The road ahead",
      minutes: 5,
      summary:
        "A short map of the lessons, and a simple way to study each section " +
        "so that nothing is left behind.",
      keyPoints: [
        "The lessons follow a path: ions in solution, then why potentials exist, then how fast reactions go, then how to measure and use them.",
        "Study one section at a time, answer its three quick checks, and only then move on.",
        "The full quiz at the end of each lesson mixes all of its sections together, so it is a fair test.",
        "The numbers matter less than the reasoning; if you can explain the idea, the formula follows.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "You now have the vocabulary. The lessons that follow put it to " +
            "work in a fixed order, and each one leans on the one before it.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "*Ions in solution*: how charge moves through an electrolyte, and how fast each ion travels.",
            "*Thermodynamics*: why a cell has a voltage at all, and where that voltage comes from.",
            "*Measuring a potential*: why a single electrode potential cannot be measured, and how reference electrodes solve the problem.",
            "*Electrodes and reactions*: the different kinds of electrode, and the reactions they run.",
            "*Kinetics*: how fast an electrochemical reaction goes, and what slows it down.",
            "*Looking ahead*: the later lessons turn all of this into batteries, corrosion, sensors and industrial cells.",
          ],
        },
        {
          kind: "para",
          text:
            "A good way to study is to read one section, close it, and try " +
            "the three quick checks at the end. If you get one wrong, the " +
            "explanation points you back to the paragraph that answers it. " +
            "When a whole lesson is finished, the full quiz brings all of its " +
            "sections together.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "If you remember only one thing",
          body:
            "Electrochemistry is electron transfer at a metal-solution " +
            "boundary, described by charge, current and potential. Every later " +
            "lesson is a deeper look at one part of that sentence.",
        },
      ],
      cta: {
        title: "Ready to begin?",
        body:
          "Take the Lesson 0 quiz to check the vocabulary, then start " +
          "Lesson 1, where ions in solution are made quantitative.",
        href: "/lessons/lesson-0/quiz",
        linkLabel: "Take the Lesson 0 quiz",
        secondaryHref: "/lessons/lesson-1",
        secondaryLabel: "Go to Lesson 1",
      },
    },
  ],
};