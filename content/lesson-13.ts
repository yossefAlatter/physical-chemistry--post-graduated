// Lesson 13 - Corrosion.
//
// Source syllabus: Bagotsky ch.22. The chapter sets the coverage and the
// numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson13Mcq } from "./lesson-13.mcq";

export const lesson13: Lesson = {
  slug: "lesson-13",
  label: "Lesson 13",
  title: "Corrosion",
  summary:
    "We have spent twelve lessons learning to build cells that do what we " +
    "ask. Corrosion is the cell nobody built: a piece of metal in a drop " +
    "of water quietly running a short-circuited battery until the metal " +
    "is gone. This lesson is the chemistry of that accident - the four " +
    "ingredients a corrosion cell needs, the anode and cathode reactions " +
    "that consume the metal, the passive films that sometimes save it, " +
    "and the protections we have invented against it.",
  order: 13,
  minutes: 55,
  mcq: lesson13Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Metals are made by spending energy to pull them out of their " +
        "ores. Left back in water and air, the same thermodynamics that " +
        "forged them now un-forges them: the oxide, hydroxide or salt " +
        "is the stable state, and the bright metal is the stored " +
        "energy. Corrosion is that energy being released, in a " +
        "diffusion layer thin as a soap film, through a short-circuit " +
        "you did not plan.",
    },
    {
      kind: "para",
      text:
        "Following Bagotsky ch.22 we first ask what four things every " +
        "corrosion cell must have, then look at the two reactions that " +
        "run it, then at passivation - the thin film that can turn a " +
        "corroding surface inert - and finally at the forms corrosion " +
        "takes and the protections humanity has stacked against them.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "Corrosion is an unplanned electrochemical cell on a metal " +
        "surface, and stopping it means breaking one of its four " +
        "requirements: the anode, the cathode, the electrolyte, or the " +
        "electrical connection between them.",
    },
  ],
  sections: [
    {
      id: "why-metals-corrode",
      tone: "azure",
      title: "Why metals want to corrode",
      minutes: 6,
      summary:
        "Refining a metal spends energy to make it; corrosion is that " +
        "energy being given back. The metal itself is the fuel, and " +
        "water and air together are the oxidant.",
      keyPoints: [
        "The native state of most metals in the environment is an oxide, hydroxide or salt - not the elemental metal.",
        "Corrosion is thermodynamically favourable because the oxides and salts are more stable than the metal in water and oxygen.",
        "The energy released is small per atom but unstoppable in aggregate; an entire industry exists to slow it.",
        "Whether corrosion actually runs fast is a kinetic question - which is why some metals 'survive' while thermodynamics says they should dissolve.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Iron ore is iron oxide. Turn it into steel and you have " +
            "paid to pull iron back out of that oxide. Corrosion is " +
            "the interest on that loan coming due: left in water and " +
            "air, the iron would rather be oxide again, and given a " +
            "path to give the electrons somewhere to go, it will " +
            "return there.",
        },
        {
          kind: "para",
          text:
            "The thermodynamic driver is simple. For the metal M in " +
            "contact with water and oxygen, the reaction M → M^n+ + ne " +
            "has a favourable free energy against the oxidant that " +
            "accepts the electrons - most often dissolved O2. The " +
            "magnitude of the driving force varies from metal to " +
            "metal, which is why gold and platinum sit at the noble " +
            "end of the scale and magnesium and zinc at the active end.",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta G = -n F E_{\text{cell}}`,
          caption:
            "If the sum of the metal dissolution and the oxidant " +
            "reduction gives a positive cell potential, the free " +
            "energy is negative: the couple wants to run. Thermodynamics " +
            "permits almost every common structural metal to corrode.",
        },
        {
          kind: "para",
          text:
            "And yet a stainless knife does not rust in your sink. That " +
            "is the kinetic half of the story, and it is the whole " +
            "point of corrosion science: thermodynamics decides *if*, " +
            "kinetics decides *how fast*. Control the kinetics - with " +
            "films, coatings, inhibitors, or sacrificial neighbours - " +
            "and even a thermodynamically doomed metal can outlive its " +
            "building.",
        },
      ],
    },
    {
      id: "four-requirements",
      tone: "indigo",
      title: "The four requirements of a corrosion cell",
      minutes: 7,
      summary:
        "Every rusting patch of metal is a short-circuited galvanic " +
        "cell, and every galvanic cell needs four things: an anode, a " +
        "cathode, an electrolyte, and an electrical connection.",
      keyPoints: [
        "A corrosion cell needs an anodic site, a cathodic site, an electrolyte carrying ions, and an electronic path between the sites.",
        "Remove any one of the four and corrosion stops; that is the logic of every protection method.",
        "The anode and cathode can be different metals, different crystal grains, or different points on the same surface.",
        "The 'cell' is often microscopic - a grain boundary, a scratch, a droplet's edge - but the bookkeeping is the same.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A corrosion cell is not two beakers and a salt bridge; it " +
            "is usually a square centimetre of wet steel. But it is a " +
            "cell nonetheless, and it has the same four moving parts. " +
            "An **anode**, where the metal gives up electrons and " +
            "dissolves. A **cathode**, where something else - oxygen, " +
            "usually - picks those electrons up. An **electrolyte**, " +
            "the thin film of water in which ions can travel. And an " +
            "**electronic path**, the metal itself, connecting them.",
        },
        {
          kind: "para",
          text:
            "The electrodes of this cell are rarely where you put them. " +
            "A grain boundary, a scratch through a paint film, the edge " +
            "of a water droplet, or two dissimilar metals touching can " +
            "each set up an anode and a cathode on the same surface. " +
            "The current flows through the metal, the charge through " +
            "the electrolyte, and both meet at the anode, where the " +
            "metal pays.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Break one leg of the table",
          body:
            "Every corrosion remedy is a way of removing one of the " +
            "four requirements: block the electrolyte (paint, coating), " +
            "sever the electron path (isolation), starve the cathode " +
            "(inhibitors, low O2), or give the anode a bodyguard " +
            "(sacrificial protection).",
        },
      ],
    },
    {
      id: "anodic-cathodic-reactions",
      tone: "violet",
      title: "What the cell actually runs",
      minutes: 8,
      summary:
        "At the anode the metal simply dissolves, M → M^n+ + ne. At the " +
        "cathode something must accept the electrons - and in neutral " +
        "water that something is almost always dissolved oxygen.",
      keyPoints: [
        "The anodic half-reaction is metal dissolution: M → M^(n+) + ne^-.",
        "In neutral or alkaline water the cathodic half-reaction is oxygen reduction: O2 + 2H2O + 4e^- → 4OH^-.",
        "In acid the cathode can instead reduce protons: 2H+ + 2e^- → H2.",
        "The local pH near a corroding steel surface can differ from the bulk because of these two reactions meeting.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The anode's job is the easiest to write. Iron, zinc, " +
            "aluminium: at an anodic patch the metal atoms part with " +
            "their electrons and step into solution as ions, leaving " +
            "the electrons behind in the metal. That is all the anode " +
            "does; every electron it produces travels through the " +
            "metal to find a way out.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{Anode: } M \rightarrow M^{n+} + n e^-`,
          caption:
            "The anodic dissolution half-reaction. The metal ion enters " +
            "the electrolyte; the electrons it leaves behind flow " +
            "through the metal to the cathode.",
        },
        {
          kind: "para",
          text:
            "The cathode has the harder problem: it must dispose of " +
            "those electrons into something in the water. In neutral " +
            "or basic water the common acceptor is dissolved oxygen, " +
            "which takes the electrons and leaves hydroxide behind. In " +
            "acid the proton itself is acceptor enough, and the " +
            "cathode bubbles hydrogen. Which of these dominates decides " +
            "both the corrosion rate and what deposits form.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{Cathode (neutral): } O_2 + 2H_2O + 4e^- \rightarrow 4OH^-, \qquad \text{(acid): } 2H^+ + 2e^- \rightarrow H_2`,
          caption:
            "The two common cathodic reactions on steel in water. " +
            "Neutral water hands the electrons to oxygen; acid hands " +
            "them to protons.",
        },
        {
          kind: "para",
          text:
            "Put the two sites together on one drop of water and a " +
            "quiet paradox appears. Oxygen reduction makes OH⁻, and " +
            "metal dissolution plus water chemistry eventually makes " +
            "hydroxide-consuming products. So the pH near a rusting " +
            "centre can differ wildly from the pH of the surrounding " +
            "drop. A pH indicator under a rusting nail really does " +
            "turn different colours at the anode and cathode spots.",
        },
      ],
    },
    {
      id: "passivation",
      tone: "rose",
      title: "Passivation: the thin film that saves us",
      minutes: 8,
      summary:
        "Some metals stop corroding not because thermodynamics " +
        "forbids it, but because a nanometre-thin oxide film blocks " +
        "the anodic reaction. Break the film and the metal can " +
        "dissolve; grow it back and it is safe again.",
      keyPoints: [
        "Passivation is the formation of a thin, dense, adherent oxide film that shuts down the anodic dissolution reaction.",
        "Stainless steel, aluminium and titanium owe their corrosion resistance to self-healing passive films, not to being noble.",
        "A passive film can be destroyed by scratching, by chloride ions, or by making the potential too oxidising.",
        "Once the film breaks, corrosion can resume at a pit - localised but fast, because the small anode faces a large cathode.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Aluminium is a reactive metal; by thermodynamics it should " +
            "burn in air. Yet an aluminium window frame lasts decades. " +
            "The difference is a film a few nanometres thick: the " +
            "metal reacts with oxygen once, instantly, and the oxide " +
            "that forms is dense enough, adherent enough, and " +
            "insulating enough that the reaction underneath starves. " +
            "That skin is the passive film.",
        },
        {
          kind: "para",
          text:
            "Stainless steel works the same way with chromium at its " +
            "surface; titanium with its own oxide. The interesting " +
            "part is that the film heals. Scratch a passivated surface " +
            "and the exposed metal reacts with the oxygen in the water " +
            "within milliseconds, growing a fresh film over the wound. " +
            "The metal is allowed to heal only because the film is " +
            "fast enough and the dissolution is slow enough.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Chloride is the passive film's enemy",
          body:
            "Chloride ions from sea air or road salt can penetrate " +
            "and locally dissolve passive films. A pit then nucleates: " +
            "a tiny anode surrounded by a large cathode. The small " +
            "anode/large cathode geometry drives intense local current " +
            "density, and the pit digs fast and deep even while the " +
            "rest of the surface looks perfect.",
        },
        {
          kind: "para",
          text:
            "Passivation is therefore both the protection and the " +
            "trap. Where the film survives, corrosion is nil. Where it " +
            "fails - a scratch, a chloride attack, a too-oxidising " +
            "potential - the metal beneath is exposed, and if the anode " +
            "spot is small compared with the surrounding cathodic " +
            "surface, all of the cathodic current is funnelled into " +
            "that small wound. Pitting, crevice corrosion, and " +
            "stress-corrosion cracking all exploit exactly this " +
            "small-anode/large-cathode geometry.",
        },
      ],
    },
    {
      id: "types-and-protection",
      tone: "coral",
      title: "How corrosion appears, and how we fight it",
      minutes: 8,
      summary:
        "Uniform rust, pits, crevices, galvanic couples, and " +
        "differential aeration cells: corrosion has many costumes, but " +
        "every one breaks a four-leg cell. So does every protection.",
      keyPoints: [
        "Uniform corrosion wears a surface evenly; localised forms - pitting, crevice, galvanic, stress corrosion - concentrate the attack in one place.",
        "Differential aeration sets up cells wherever O2 concentration differs: under a droplet edge, in a crevice, at the waterline.",
        "Galvanic coupling means a noble metal connected to an active one in an electrolyte accelerates the active one's dissolution.",
        "Protection routes: coatings, inhibitors, galvanising, impressed current, and sacrificial anodes - each breaks one of the four requirements.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The corrosion you meet in a basement is usually honest: " +
            "uniform thinning over a whole surface. The corrosion that " +
            "sinks ships and bridges is the other kind - pits, " +
            "crevices, cracks - where a microscopic anode faces a vast " +
            "cathode and the attack digs instead of spreading. " +
            "Differential aeration is the most common cause: anywhere " +
            "the oxygen supply differs, the oxygen-rich region becomes " +
            "the cathode and the oxygen-starved region becomes the " +
            "anode. A waterline, a washer, or the rim of a droplet " +
            "each writes that cell onto the metal.",
        },
        {
          kind: "para",
          text:
            "Couple two metals and the same bookkeeping applies. " +
            "Connect copper to steel in sea water and the copper, the " +
            "more noble metal, becomes the cathode that drives " +
            "electrons into the steel, which becomes the anode and " +
            "dissolves faster. This is why bronze propellers carry " +
            "sacrificial zinc blocks: zinc is more active still, so it " +
            "becomes the anode and the propeller is spared. Whether a " +
            "coupling helps or ruins depends entirely on which metal " +
            "sits at the anodic end.",
        },
        {
          kind: "table",
          head: ["Protection method", "Which leg of the cell it removes", "Typical use"],
          widths: [1.8, 2.4, 2.4],
          rows: [
            ["Paint, enamel, plastic coating", "Blocks the electrolyte at the surface", "Bridges, tanks, car bodies"],
            ["Cathodic protection (sacrificial anode)", "Makes the protected metal the cathode", "Pipelines, ships, water heaters"],
            ["Impressed current protection", "Supplies external electrons, making the structure cathodic", "Long pipelines, tanks"],
            ["Inhibitors in the medium", "Poison the anodic or cathodic reaction", "Radiators, cooling water"],
            ["Galvanising (zinc coating)", "Both: barrier plus sacrificial anode", "Outdoor steel structures"],
          ],
        },
        {
          kind: "para",
          text:
            "Every protection on that list is the same corrosion-cell " +
            "logic run in reverse: break one of the four legs and the " +
            "cell cannot run. Galvanising is the most elegant, because " +
            "it works twice - as a physical barrier while intact, and " +
            "as a sacrificial anode once scratched. That is why a " +
            "scratched galvanised fence still holds, while a scratched " +
            "tin-plated can rust underneath the tin.",
        },
        {
          kind: "worked",
          title: "Corrosion current and metal loss",
          given:
            "A steel surface corrodes at i_corr = 10 uA/cm2 over a 10 cm2 area for one day. Iron dissolves as Fe2+ (n = 2, M = 55.85 g/mol). Mass lost?",
          steps: [
            String.raw`Q = i_{corr} A t = 10\times10^{-6} \times 10 \times 86400 = 8.64\ \mathrm{C}`,
            String.raw`m = \frac{Q M}{n F} = \frac{8.64 \times 55.85}{2 \times 96485}`,
            String.raw`m = 2.50\times10^{-3}\ \mathrm{g} \approx 2.5\ \mathrm{mg/day}`,
          ],
          result:
            "About 2.5 mg per day across that patch. Small currents, multiplied by area and time, add up to real structural loss over years.",
        },
        {
          kind: "worked",
          title: "Why a pit is so aggressive",
          given:
            "A crevice corrodes at 1 mA over a cathode area of 100 cm2, all supplied by a pit anode of 0.01 cm2. What is the local current density in the pit?",
          steps: [
            String.raw`j_{\text{pit}} = I/A_{\text{pit}} = 1\times10^{-3}/0.01`,
            String.raw`j_{\text{pit}} = 0.10\ \mathrm{A/cm^2} = 100\ \mathrm{mA/cm^2}`,
          ],
          result:
            "The same milliampere is ten thousand times more fiercely concentrated than an average 10 uA/cm2 cathode: the small-anode geometry is why pits dig deep while the rest of the surface looks fine.",
        },
      ],
      cta: {
        title: "Build something that does not corrode",
        body:
          "Corrosion is a cell nobody wanted. Lesson 14 is about cells " +
          "we design on purpose - batteries, fuel cells, supercapacitors " +
          "- and what their voltage-current-capacity accounting looks " +
          "like.",
        href: "/lessons/lesson-13/quiz",
        linkLabel: "Take the Lesson 13 quiz",
        secondaryHref: "/lessons/lesson-14",
        secondaryLabel: "Go to Lesson 14",
      },
    },
  ],
};
