// Lesson 7 - Measuring a potential.
//
// Source syllabus: Bagotsky ch.9 (Electron Work Functions and Volta
// Potentials) and ch.12 (Reference Electrodes, Potentiometry). The chapters
// set the coverage and the numbers; every sentence, formula and question here
// is original.

import type { Lesson } from "./types";
import { lesson7Mcq } from "./lesson-7.mcq";

export const lesson7: Lesson = {
  slug: "lesson-7",
  label: "Lesson 7",
  title: "Measuring a potential",
  summary:
    "A voltmeter never reads one electrode on its own. It reads the gap " +
    "between two interfaces. Behind that number sit the work function of a " +
    "metal, the potential jumps at every boundary between phases, and the " +
    "reference electrode that makes the answer repeatable. We start with " +
    "the outer and inner potentials of a phase, go through work functions " +
    "and Volta potentials, and finish with reference electrodes and the " +
    "potentiometric cell that turn the theory into a real measurement.",
  order: 7,
  minutes: 60,
  mcq: lesson7Mcq,
  intro: [
    {
      kind: "para",
      text:
        "In Lesson 3 we wrote down electrode potentials and subtracted " +
        "them to get a cell voltage. In Lesson 5 we used that voltage to " +
        "drive reactions. Both times we treated the potential as a number " +
        "that simply exists. This lesson asks the hard question behind " +
        "that number: what does a voltmeter actually read when its two " +
        "probes touch an electrochemical cell? The honest answer is that " +
        "it never reads one electrode. It reads a *difference* between two " +
        "complete interfaces, and each interface is built from a work " +
        "function, a surface potential, and a potential jump across the " +
        "metal-solution boundary.",
    },
    {
      kind: "para",
      text:
        "That sounds like a small detail until you try to compare your " +
        "number with someone else's. A potential of 0.25 V means nothing " +
        "on its own. It becomes a fact only when you say what it was " +
        "measured against. The whole apparatus of reference electrodes, " +
        "standard hydrogen electrodes and cell diagrams exists to make " +
        "that comparison possible. Following Bagotsky ch.9 and ch.12, we " +
        "first build the vocabulary of outer and inner potentials, work " +
        "functions and Volta potentials. Then we settle two famous " +
        "puzzles about where the cell voltage really sits. We finish with " +
        "the reference electrodes and the potentiometric circuit that " +
        "make a measurement trustworthy.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "Every electrochemical potential is a difference. So a " +
        "measurement always involves two interfaces, a defined reference, " +
        "and a circuit with high resistance that draws no current. The " +
        "theory of work functions and Volta potentials explains why that " +
        "difference takes the value it does.",
    },
  ],
  sections: [
    {
      id: "what-is-measured",
      tone: "azure",
      title: "What a voltmeter actually measures",
      minutes: 6,
      summary:
        "A voltmeter across a cell reads the gap between two electrode " +
        "interfaces, never a single absolute potential. This is why every " +
        "quoted potential needs a reference.",
      keyPoints: [
        "A voltmeter always reads a difference between two points, and an electrode potential is no exception.",
        "The emf of a cell is set by the difference in electrochemical potential of the electrons between its two terminals.",
        "You cannot measure the absolute potential of one electrode, because any probe creates a second interface with its own potential jump.",
        "An electrode potential is not complete until you know the reference electrode it was measured against.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Connect a voltmeter across a cell and it shows one number. " +
            "That number is not the potential of the left electrode and " +
            "not the potential of the right electrode. It is the " +
            "*difference* between two complete metal-solution interfaces. " +
            "Each interface has its own charge separation and its own " +
            "potential jump, and the meter only reports how the two " +
            "compare. This is not a fault in the instrument. A potential " +
            "is always defined between two points, and a meter has two " +
            "probes. There is nothing else for a voltage to be.",
        },
        {
          kind: "para",
          text:
            "What fixes that difference is the electron. In each metal " +
            "the electrons have an **electrochemical potential** - their " +
            "chemical energy combined with the local electric potential - " +
            "and electrons flow on their own from high electrochemical " +
            "potential to low. At open circuit, with no current flowing, " +
            "the cell settles until the difference between the electron " +
            "electrochemical potentials at the two terminals exactly " +
            "balances the chemical driving force of the cell reaction. " +
            "That balance, written as a voltage per unit charge, is the " +
            "emf. It is tied to the reaction free energy by the same " +
            "relation we met in Lesson 3:",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta G = -n F E, \qquad E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}`,
          caption:
            "Two ways of writing the same idea. The second line says " +
            "plainly that a cell voltage is the difference of two " +
            "electrode potentials. The first ties that difference to the " +
            "Gibbs energy of the cell reaction. Neither one gives the " +
            "potential of a single electrode on its own.",
        },
        {
          kind: "para",
          text:
            "The reason a single electrode potential cannot be measured " +
            "is physical, not just practical. To touch the solution and " +
            "read its potential you must push in a second conductor. The " +
            "moment you do, you create a second metal-solution interface " +
            "with its own unknown potential jump. The extra probe adds " +
            "exactly the unknown you were trying to measure. The same " +
            "argument blocks the way into the metal: to compare the " +
            "potential inside the metal with the potential inside the " +
            "solution you would need points in two different phases, and " +
            "no voltmeter can straddle a phase boundary without creating " +
            "one more boundary of its own.",
        },
        {
          kind: "para",
          text:
            "Thermodynamics makes the point strict. What a cell " +
            "measurement gives is only the *combination* of the potential " +
            "jumps at its interfaces, never any single jump. Because the " +
            "individual jumps cannot be split by measurement, their " +
            "absolute values are not thermodynamic quantities at all. " +
            "Only differences between complete cells are. Chemists turned " +
            "this into a rule. One electrode, the standard hydrogen " +
            "electrode, is given the value zero at all temperatures, and " +
            "every other potential is quoted against it. That one " +
            "arbitrary choice is what makes the electrochemical " +
            "literature comparable.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "The missing label",
          body:
            "An electrode potential written without its reference is not " +
            "a measurement. It is an ambiguous number. A calomel " +
            "electrode sits about 0.24 V positive of the standard " +
            "hydrogen electrode, so the same physical interface can be " +
            "quoted as +0.34 V or +0.10 V, depending on which reference " +
            "was used. Always read the subscript.",
        },
      ],
    },
    {
      id: "inner-outer-surface",
      tone: "indigo",
      title: "Outer, inner and surface potentials",
      minutes: 6,
      summary:
        "Three potentials describe a charged phase: the outer potential " +
        "just outside it, the inner (Galvani) potential inside it, and the " +
        "gap between them, the surface potential. Only the outer potential " +
        "can be measured directly.",
      keyPoints: [
        "The outer potential `ψ_ex` of a conductor is the potential at a point just outside its surface. It can be measured, because the test point and the reference point sit in the same phase.",
        "The inner (Galvani) potential `φ` is the potential at a point inside the conductor.",
        "The surface potential `χ = φ - ψ_ex` is the jump across the conductor's own surface layer, and it comes from a lopsided electron distribution or from dipoles that line up.",
        "The Galvani potential difference `φ_G` between two phases is the sum of their surface-potential difference and the interfacial potential `Φ`.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Before we can talk about work functions and Volta " +
            "potentials, we need exact names for the places where a " +
            "potential can be evaluated. Picture a conductor sitting in " +
            "vacuum with a reference point far away. Move a small test " +
            "charge from that reference point to a point `a` in the " +
            "vacuum just outside the conductor. You have to do " +
            "electrostatic work, because the conductor carries a net " +
            "surface charge and sets up a field around itself. The " +
            "potential at that point is the **outer potential**, written " +
            "`ψ_ex`.",
        },
        {
          kind: "para",
          text:
            "Now push the test charge from just outside into the " +
            "interior of the conductor. This takes extra work that the " +
            "long-range field does not explain, because the probe " +
            "crosses the conductor's own **surface layer**, where the " +
            "electron cloud dies away and any aligned dipoles sit. The " +
            "potential at a point inside is the **inner potential**, also " +
            "called the **Galvani potential**, written `φ`. The " +
            "difference between the two - `φ` minus the outer potential " +
            "- is the **surface potential** `χ`. It isolates the effect " +
            "of the surface layer alone:",
        },
        {
          kind: "formula",
          tex: String.raw`\chi = \varphi_{\mathrm{in}} - \psi_{\mathrm{ex}}, \qquad \psi_{\mathrm{ex}}^{(\alpha)} = \varphi_{\mathrm{in}}^{(\alpha)} + \text{Const}`,
          caption:
            "The definition of the surface potential. The first form is " +
            "exact. The second reminds us that the outer potential is " +
            "fixed once the phase's net charge is known, so the " +
            "interesting quantity - how the surface layer is organised - " +
            "is the difference `χ`.",
        },
        {
          kind: "para",
          text:
            "The three potentials differ sharply in what can be " +
            "measured. The outer potential is reachable, because its " +
            "test point and its reference point lie in the same phase, " +
            "so the work of carrying a charge between them is a " +
            "well-defined number. The inner potential and the surface " +
            "potential each need a test point in a different phase, and " +
            "that crossing carries a contribution you cannot measure. " +
            "Their difference, the surface potential, is therefore not " +
            "directly measurable either. This is the same difficulty in " +
            "small that we met in the last section: a phase boundary " +
            "hides its own potential jump.",
        },
        {
          kind: "para",
          text:
            "At an interface between two phases the story repeats. The " +
            "**Galvani potential difference** between phases `α` and `β` " +
            "is the difference of their inner potentials, and it splits " +
            "into a part that belongs to the interface itself plus the " +
            "two surface potentials of the phases. The measurable, " +
            "chemistry-carrying part of the interface - the part that " +
            "shows up in adsorption and in reaction rates - is the " +
            "potential drop in the transition zone between the surface " +
            "layers. This is exactly the region whose structure we " +
            "built in Lesson 6.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Galvani (inner) potential",
          body:
            "The electrostatic potential at a point inside a phase, " +
            "measured with a test charge of unit positive charge. The " +
            "difference of inner potentials between two phases is the " +
            "Galvani potential difference. It governs how charged " +
            "species settle across the interface, but it cannot be " +
            "measured on its own. The electrochemical potential splits " +
            "into a chemical part and this electrical part, which is " +
            "why the Galvani potential turns up in every equilibrium " +
            "expression for charged particles.",
        },
      ],
    },
    {
      id: "work-function-vacuum",
      tone: "violet",
      title: "The electron work function in vacuum",
      minutes: 6,
      summary:
        "The work function is the energy needed to pull one electron out " +
        "of a metal into the vacuum just outside it. It can be measured. " +
        "It changes with crystal face and with adsorption, and that change " +
        "is direct proof that surface potentials are real.",
      keyPoints: [
        "The electron work function is the least work needed to move one electron from inside a metal to a point just outside its surface, leaving it with no kinetic energy.",
        "It is quoted per electron and measured in electronvolts. For metals it is a few eV, and it is always positive.",
        "It equals the negative of the electron's chemical potential in the metal plus the surface-potential term, so it has a chemical part and an electrostatic part.",
        "It changes from one crystal face to another, and when species stick to the surface, because both change the surface potential. That is proof that surface potentials exist.",
        "It is measured by the photoelectric threshold, by thermionic emission, or by the contact potential between two metals.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A metal holds its electrons in a potential well. The " +
            "electron chemical potential measures how tightly they are " +
            "held, but near the surface the binding is not uniform, " +
            "because the electron cloud spills out and leaves a dipole " +
            "layer. The **electron work function** gathers all of this " +
            "into one measurable number: the total work an outside " +
            "agent must supply to take one electron from the metal to a " +
            "point in the vacuum just outside the surface, and deliver " +
            "it with essentially no kinetic energy. It is written `Φ` " +
            "(Bagotsky uses `λ`), it refers to a single electron, and " +
            "it is naturally given in electronvolts, where 1 eV is " +
            "about 1.6 times 10 to the minus 19 joules.",
        },
        {
          kind: "para",
          text:
            "Because the endpoint is a point in the vacuum, the work " +
            "function is a difference of electrochemical potentials " +
            "that includes the surface potential of the metal. Written " +
            "out, the work splits into a chemical term - the electron " +
            "chemical potential inside the metal - and an electrostatic " +
            "term proportional to the surface potential:",
        },
        {
          kind: "formula",
          tex: String.raw`\lambda = -\mu_{\mathrm{e}}^{(\mathrm{M})} + Q_0 \chi^{(\mathrm{M})}`,
          caption:
            "The work function for the metal-vacuum interface, per " +
            "electron. The first term is the chemical binding energy of " +
            "the electron in the metal. The second is the work against " +
            "the surface dipole layer. Only the total can be measured; " +
            "the two parts cannot be pulled apart in the lab.",
        },
        {
          kind: "para",
          text:
            "Because the surface term is there, the work function is " +
            "not a fixed property of an element. Different " +
            "single-crystal faces of the same metal pack their surface " +
            "atoms differently, so they have different surface dipoles, " +
            "and their work functions genuinely differ. Sticking a " +
            "foreign species onto the surface changes the surface " +
            "dipole too. These are among the clearest experimental " +
            "signs that a surface potential exists at all: the bulk " +
            "chemistry of the metal is unchanged, yet the energy needed " +
            "to take an electron out is not.",
        },
        {
          kind: "para",
          text:
            "Three families of experiment measure the work function. " +
            "In **photoemission**, light of frequency `ν` throws out " +
            "electrons when the quantum energy beats the work function. " +
            "The threshold frequency `ν₀` satisfies `hν₀ = Φ`, and above " +
            "the threshold the spare energy shows up as electron " +
            "kinetic energy. In **thermionic emission**, heating the " +
            "metal boils electrons off, and the saturation current " +
            "follows a law whose slope against inverse temperature gives " +
            "the work function. In the **contact-potential** (Kelvin) " +
            "method, two different metals forming a capacitor pick up a " +
            "charge set by their outer potential difference, and nulling " +
            "the field gives the work-function difference.",
        },
        {
          kind: "formula",
          tex: String.raw`h\nu = \Phi + E_{\mathrm{kin}}, \qquad h\nu_0 = \Phi, \qquad \ln\!\frac{I_{\mathrm{sat}}}{T^{2}} = \text{const} - \frac{\Phi}{kT}`,
          caption:
            "Two ways to read the work function. Photoemission gives it " +
            "straight from the threshold quantum energy `hν₀`. " +
            "Thermionic emission gives it from the slope of " +
            "`ln(I_sat/T²)` against `1/T`. Both determinations are per " +
            "electron.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Why the work function matters here",
          body:
            "The work function is the bridge between the electron's " +
            "energy inside a metal and the potential of the vacuum " +
            "outside. It can be measured for a metal in vacuum, and it " +
            "is what lets us connect what happens at a metal-vacuum " +
            "boundary with what happens at a metal-solution boundary. " +
            "The next two sections use that connection.",
        },
      ],
    },
    {
      id: "work-function-solution",
      tone: "rose",
      title: "The work function in solution",
      minutes: 6,
      summary:
        "When the receiving phase is an electrolyte instead of vacuum, " +
        "the work function changes. It also gains a simple and surprising " +
        "property: at a fixed electrode potential it is the same for every " +
        "metal, because the metal's own contribution cancels out.",
      keyPoints: [
        "The work function in solution `λ_E` is the work to move one electron from the metal into the electrolyte, where it becomes a solvated electron.",
        "It depends on the electrode potential through `λ_E = A + eE`, where `E` is measured on a reference scale such as the SHE.",
        "The constant `A` is about 3.10 eV against the standard hydrogen electrode, and it does not depend on which metal is used.",
        "So at a given electrode potential every metal has the same electron work function in solution - the metal's own chemical potential has cancelled.",
        "It is measured by photoelectron emission into solution, whose current follows the law of five halves.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Electrochemistry almost never takes an electron out into " +
            "vacuum. A cathodic reaction pulls an electron out of the " +
            "metal and into the solution; an anodic reaction sends it " +
            "back. The receiving phase is an electrolyte, and an " +
            "electron inside a liquid is a very different thing from an " +
            "electron in empty space: it polarises the solvent around " +
            "it and sits there as a **solvated electron**. The work " +
            "needed to move an electron from the metal into the " +
            "solution is a different work function, written `λ_E`, and " +
            "because the transfer crosses the whole metal-solution " +
            "Galvani potential, it depends on the electrode potential.",
        },
        {
          kind: "para",
          text:
            "Here is the neat part. Write the work function as the " +
            "difference of the electron's electrochemical potential in " +
            "the two phases. Then swap the unmeasurable Galvani " +
            "potential for the measured electrode potential, referred " +
            "to some reference electrode. The chemical potential of the " +
            "electron in the metal appears twice - once directly, once " +
            "inside the reference term - and cancels. What is left is a " +
            "relation in which the metal has vanished entirely:",
        },
        {
          kind: "formula",
          tex: String.raw`\lambda_{\mathrm{E}} = A + Q_0 E`,
          caption:
            "The work function of an electron in solution, with `E` the " +
            "electrode potential on the reference scale. The constant " +
            "`A` depends only on the chosen reference electrode, not on " +
            "the metal. The term `eE` is the electrical work of sitting " +
            "at that potential. It grows by one electronvolt for every " +
            "volt the electrode is made more negative.",
        },
        {
          kind: "para",
          text:
            "The cancelling is the striking part. The chemical " +
            "potential of the electrons in a metal is that metal's " +
            "fingerprint - caesium holds its electrons far more loosely " +
            "than platinum. Yet once the transfer is referred to a " +
            "common electrode potential, the fingerprint drops out, and " +
            "every metal has the same work function in solution. The " +
            "reason is that the electrode potential already contains " +
            "the metal's own contribution. Change the metal and you " +
            "change both the electron's energy inside it and the " +
            "potential at which it sits, and the two changes cancel " +
            "exactly.",
        },
        {
          kind: "para",
          text:
            "That cancellation is what makes the electrode-potential " +
            "scale universal. It means a statement such as *at this " +
            "potential an electron needs this much energy to enter the " +
            "solution* is a property of the solution and the potential, " +
            "not of the electrode material. The measurement that " +
            "reveals this is photoelectron emission into the solution. " +
            "Light of frequency `ν` throws electrons from the electrode " +
            "into the liquid, and the resulting current rises with the " +
            "spare energy according to a characteristic power law:",
        },
        {
          kind: "formula",
          tex: String.raw`I_{\mathrm{ph}} = C\,(h\nu - \lambda_{\mathrm{E}})^{5/2} = C\,(h\nu - A - eE)^{5/2}`,
          caption:
            "The law of five halves for photoelectron emission into " +
            "solution. The current disappears at a threshold potential " +
            "where `hν = λE`. Plot the 0.4 power of the photoemission " +
            "current against electrode potential and you get a straight " +
            "line. Its intercept locates the threshold, and so fixes " +
            "the constant `A`.",
        },
        {
          kind: "para",
          text:
            "Measurements of this kind give `A` = 3.10 ± 0.005 eV when " +
            "the standard hydrogen electrode is the reference. That " +
            "number is the energy an electron needs at the SHE " +
            "potential to cross from a metal into water. It is worth " +
            "pausing over the precision: a photoelectric measurement " +
            "with a liquid receiving phase pins down the electron's " +
            "energy scale in solution to a few millielectronvolts, and " +
            "it does so for every metal at once.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Why λE is metal-independent",
          body:
            "When the Galvani potential is written again in terms of " +
            "an electrode potential on a fixed reference scale, the " +
            "metal's electron chemical potential turns up twice with " +
            "opposite signs and cancels. The work function in solution " +
            "is therefore a property of the electrolyte and the " +
            "electrode potential alone, not of the electrode material " +
            "- and that is exactly what makes the electrode-potential " +
            "scale universal.",
        },
      ],
    },
    {
      id: "volta-potentials",
      tone: "coral",
      title: "Volta potentials",
      minutes: 6,
      summary:
        "Touch two different metals together and a potential difference " +
        "appears in the vacuum between them. This Volta potential can be " +
        "measured, and the difference of the two work functions fixes it.",
      keyPoints: [
        "The Volta (contact or outer) potential difference `φ_V` between two conductors is the difference of the outer potentials at points just outside each one.",
        "It can be measured, because both test points lie in the same phase (the vacuum). The Galvani potential and the surface potentials cannot.",
        "It splits as `φ_V(β,α) = χ(α) - χ(β) + φ_G(β,α)`: the Galvani potential plus the two surface potentials.",
        "For two metals in equilibrium the work functions and the Volta potential are linked by `λ(α) - λ(β) = -Q0 φ_V(β,α)`.",
        "A Kelvin capacitor measures the Volta potential through the charge that builds up between two dissimilar plates.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Bring two different metals into contact in vacuum and each " +
            "sets up its own outer potential in the space around it. " +
            "The difference between the outer potentials at points just " +
            "outside each metal is the **Volta potential difference**, " +
            "also called the outer or contact potential difference. It " +
            "is what makes a low-voltage contact seem to carry a " +
            "built-in voltage, and it is the first of the three " +
            "potential differences - Galvani, surface and Volta - that " +
            "we can actually measure.",
        },
        {
          kind: "para",
          text:
            "The measurement works because both endpoints sit in the " +
            "same medium. Carry a test charge from a point outside one " +
            "metal through the vacuum to a point outside the other and " +
            "you never cross a phase boundary, so you pick up no " +
            "unmeasurable surface term. Potential difference does not " +
            "depend on the path, so we can cut the journey into three " +
            "legs: from the point outside metal `α` to just inside it " +
            "(the surface potential of `α`), across the contact between " +
            "the two metals (the Galvani potential), and from just " +
            "inside metal `β` back out to the point outside it (minus " +
            "the surface potential of `β`):",
        },
        {
          kind: "formula",
          tex: String.raw`\phi_{\mathrm{V}}^{(\beta,\alpha)} = \chi^{(\alpha)} - \chi^{(\beta)} + \phi_{\mathrm{G}}^{(\beta,\alpha)}`,
          caption:
            "The Volta potential split into measurable and " +
            "unmeasurable parts. The Volta potential itself is " +
            "measurable, so this relation lets us probe combinations " +
            "of the surface and Galvani potentials that would " +
            "otherwise stay hidden.",
        },
        {
          kind: "para",
          text:
            "The Volta potential has a direct experimental handle: the " +
            "Kelvin capacitor. Make the two plates of a capacitor from " +
            "different metals and their charging is governed not by " +
            "the difference of inner potentials but by the Volta " +
            "potential between them, because the charge that collects " +
            "is set by the difference of the potentials in the gap. " +
            "Measure that charge, or null it with a backing voltage as " +
            "the vibrating capacitor version of the experiment does, " +
            "and you have the Volta potential directly.",
        },
        {
          kind: "para",
          text:
            "For two metals in equilibrium there is a tight link " +
            "between the Volta potential and the work functions. At " +
            "equilibrium the electrochemical potential of the electrons " +
            "is the same everywhere in the joined metals, so the " +
            "difference in work functions must be cancelled exactly by " +
            "the electrostatic energy difference between the two outer " +
            "points. The result lets a Volta-potential measurement give " +
            "one metal's work function once the other is known:",
        },
        {
          kind: "formula",
          tex: String.raw`\lambda^{(\alpha)} - \lambda^{(\beta)} = -Q_0\, \phi_{\mathrm{V}}^{(\beta,\alpha)}`,
          caption:
            "Volta potential and work functions, per electron. The " +
            "valley of the electron chemical potential differs between " +
            "the two metals, so equilibrium forces a compensating " +
            "outer-potential difference between them. A measured Volta " +
            "potential therefore gives one work function if you know " +
            "the other.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The three differences",
          body:
            "Keep the three names apart. The **Galvani** potential is " +
            "the inner-potential difference between two phases, and it " +
            "is not measurable. The **surface potential** is the jump " +
            "across one phase's own surface layer, and it is not " +
            "separately measurable. The **Volta potential** is the " +
            "outer-potential difference between two points in the same " +
            "medium, and you can measure it directly with a capacitor.",
        },
      ],
    },
    {
      id: "volta-problem",
      tone: "amber",
      title: "The Volta problem",
      minutes: 7,
      summary:
        "Volta and Nernst disagreed about where a cell's voltage is born: " +
        "at the metal-metal contact, or at the metal-solution interfaces. " +
        "The answer includes both, and it links the cell voltage to the " +
        "Volta potential.",
      keyPoints: [
        "Volta's physical theory put the cell voltage at the metal-metal junction. Nernst's chemical theory put it at the metal-solution interfaces, where the reactions happen.",
        "The evidence pointed both ways: cell voltages track metal-metal Volta potentials, yet they also depend strongly on solution composition.",
        "Frumkin and Gorodetzkaya settled the argument in 1928 by writing every Galvani potential as an interfacial part plus surface-potential corrections.",
        "The result is `E ≈ φ_V + Φ(2,E) - Φ(1,E)`: the open-circuit voltage is the metal-metal Volta potential, corrected by the two electrode-interface potentials.",
        "When both electrodes sit at their points of zero charge, the cell voltage reduces to the Volta potential between the two metals.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A cell of the form metal 1, electrolyte, metal 2, metal 1 " +
            "has three interfaces, and in the nineteenth century nobody " +
            "could prove which of them supplied the open-circuit " +
            "voltage. Alessandro Volta held that the whole voltage sat " +
            "at the metal-metal junction and that no potential " +
            "difference existed at a metal-electrolyte interface at all. " +
            "Walther Nernst held the opposite: the voltage came from " +
            "the two metal-electrolyte interfaces, where the electrode " +
            "reactions happen. The dispute became known as the **Volta " +
            "problem**.",
        },
        {
          kind: "para",
          text:
            "Each side had evidence. Nernst could point to the way the " +
            "open-circuit voltage depends on solution composition and " +
            "on the reaction Gibbs energy - exactly what an interface " +
            "reaction should do. Volta's supporters could point to " +
            "striking correlations: metal pairs that develop a large " +
            "Volta potential in vacuum also tend to make cells with a " +
            "large voltage, and the metal that is more negative in " +
            "vacuum is usually the more negative electrode in solution. " +
            "Both observations were real, and neither theory could " +
            "account for the other.",
        },
        {
          kind: "para",
          text:
            "The resolution, given by A. Frumkin and A. Gorodetzkaya " +
            "in 1928, is that every Galvani potential across an " +
            "interface is made of an interfacial part `Φ` plus two " +
            "surface-potential terms, and that the surface potential of " +
            "a metal differs slightly depending on whether the " +
            "neighbouring phase is vacuum or electrolyte. Put that " +
            "bookkeeping into the open-circuit voltage, assume no " +
            "specific adsorption and similar metal-solvent interactions " +
            "on both sides, and most of the correction terms drop away. " +
            "What is left is a clean relation:",
        },
        {
          kind: "formula",
          tex: String.raw`E^{(1,2)} \approx \phi_{\mathrm{V}}^{(1,2)} + \Phi^{(2,\mathrm{E})} - \Phi^{(1,\mathrm{E})}`,
          caption:
            "The Volta problem, resolved. The open-circuit voltage is " +
            "the metal-metal Volta potential plus the difference of " +
            "the two electrode-interface potential drops. The Volta " +
            "term explains the link with contact potentials; the " +
            "interface terms explain the dependence on solution " +
            "composition.",
        },
        {
          kind: "para",
          text:
            "Every quantity in that expression can be measured, which " +
            "is what turned the argument into a measurement. The " +
            "expression also predicts a lovely special case. Hold both " +
            "electrodes at their own points of zero charge and the " +
            "interfacial potential drops vanish by definition, so the " +
            "cell voltage is left equal to the Volta potential between " +
            "the two metals:",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E_{\mathrm{zc}}^{(1,2)} \approx \phi_{\mathrm{V}}^{(1,2)}`,
          caption:
            "The cell voltage between two electrodes, each at its " +
            "point of zero charge, equals the Volta potential between " +
            "the two metals. This is the sharpest test of the " +
            "resolution, and it agrees well with experiment in many " +
            "systems.",
        },
        {
          kind: "para",
          text:
            "The agreement is good but not perfect, and the gaps are " +
            "informative. Specific adsorption of ions, or clearly " +
            "different interactions of the two metals with the " +
            "solvent, bring back some of the correction terms that " +
            "were dropped. Comparing measured cell voltages with " +
            "measured Volta potentials therefore becomes a way of " +
            "probing how a metal really behaves at an electrolyte " +
            "surface. The old dispute did not end with one side " +
            "winning. It ended with a relation that lets experiment " +
            "decide how much each interface contributes.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Neither Volta nor Nernst was wholly right",
          body:
            "The metal-metal contact does contribute, and its " +
            "contribution is the Volta potential. The " +
            "electrode-electrolyte interfaces also contribute, and " +
            "theirs carry the dependence on solution composition. A " +
            "cell voltage is the sum of both, which is why the link " +
            "with Volta potentials is real but incomplete.",
        },
      ],
    },
    {
      id: "absolute-potential",
      tone: "emerald",
      title: "The problem of absolute potential",
      minutes: 6,
      summary:
        "The Galvani potential across one electrode interface cannot be " +
        "measured. It can be estimated from work functions and surface " +
        "potentials. For mercury in solution the estimate comes out near " +
        "1.6 V - a revealing but inexact number.",
      keyPoints: [
        "No single Galvani potential can be measured or worked out from thermodynamics. It can only be estimated from models outside thermodynamics.",
        "The starting point is the measurable outer (Volta) potential between electrode and solution, together with the two surface potentials.",
        "The metal surface potential follows from its measured work function and a modelled electron chemical potential; mercury gives about +2.2 V.",
        "The surface potential of water is about +0.13 V, positive because the water molecules line up in the surface layer.",
        "Put the pieces together and the absolute Galvani potential of mercury against the SHE is roughly 1.6 V, with low accuracy.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "If the absolute potential of a single electrode cannot be " +
            "measured, can it at least be calculated? People have " +
            "tried for a century, because an absolute electrode " +
            "potential would link electrochemistry straight to the " +
            "energy levels of solids and to the physics of " +
            "semiconductor junctions. The short answer is that it can " +
            "be *estimated*, but the estimate rests on models, not on " +
            "thermodynamics. Thermodynamics rules out an exact " +
            "determination, and no experiment has ever measured one " +
            "interface on its own.",
        },
        {
          kind: "para",
          text:
            "The estimate is built from three pieces. The first is " +
            "the outer potential between the electrode and the " +
            "solution, which *can* be measured by the same capacitor " +
            "methods used for metal-metal Volta potentials. That outer " +
            "potential is the sum of the Galvani potential across the " +
            "interface and the difference of the two surface " +
            "potentials, so once the surface potentials are known the " +
            "Galvani potential follows:",
        },
        {
          kind: "formula",
          tex: String.raw`\phi_V^{(\mathrm{M,E})} = \phi_G^{(\mathrm{M,E})} + \chi^{(\mathrm{E},0)} - \chi^{(\mathrm{M},0)}`,
          caption:
            "The measurable outer potential of an electrode-solution " +
            "interface, written as the Galvani potential plus the two " +
            "surface potentials. The Volta term on the left can be " +
            "measured. The three terms on the right have to be " +
            "separated by model assumptions.",
        },
        {
          kind: "para",
          text:
            "The second piece is the metal's surface potential. It " +
            "follows from the measured work function together with a " +
            "calculated electron chemical potential for the metal, " +
            "because the work function is the chemical binding energy " +
            "plus the surface dipole contribution. Modern theories of " +
            "metals supply the chemical term, but only approximately. " +
            "For mercury the surface potential obtained this way is " +
            "about +2.2 V.",
        },
        {
          kind: "para",
          text:
            "The third piece is the surface potential of water. You " +
            "can estimate it by comparing the measured real energy of " +
            "solvation of an ion with the value predicted by a model " +
            "of ion-dipole interaction, and it comes out at about " +
            "+0.13 V. The positive sign carries physical information: " +
            "it means that in the surface layer the water molecules " +
            "point their negative ends away from the bulk, that is, " +
            "with their positive hydrogen ends toward the interface.",
        },
        {
          kind: "para",
          text:
            "Put the three pieces together and you get the headline " +
            "number. For a mercury electrode held at the potential of " +
            "the standard hydrogen electrode, the Galvani potential " +
            "across the metal-solution interface is about 1.6 V. That " +
            "is a genuinely interesting result: it says the electric " +
            "potential difference between a metal and the solution " +
            "sitting on it is comparable to the voltage of a small " +
            "battery, dropped across a fraction of a nanometre. It is " +
            "also a number to handle gently. Every input except the " +
            "outer potential depends on a model, and there is no way " +
            "to check the answer directly. It is best taken as a " +
            "physically sensible estimate, not as a measurement.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Model, not measurement",
          body:
            "The absolute potential is not a thermodynamic quantity, " +
            "and you must never use it where a measurable potential " +
            "would do. Its value depends on the model you choose for " +
            "the metal surface and the solvent surface layer. Its " +
            "usefulness is conceptual - it tells us the size of the " +
            "potential drop - not analytical.",
        },
      ],
    },
    {
      id: "reference-electrodes",
      tone: "teal",
      title: "Reference electrodes",
      minutes: 8,
      summary:
        "A reference electrode turns a relative measurement into a number " +
        "you can repeat. The standard hydrogen electrode defines zero. " +
        "Calomel and silver-silver chloride electrodes bring that scale " +
        "into the lab.",
      keyPoints: [
        "A standard reference electrode is an agreed zero of the potential scale; for aqueous electrochemistry that is the standard hydrogen electrode.",
        "A practical reference electrode is a stable half-cell used in the lab; you convert its potential to the SHE scale by adding a known offset.",
        "The saturated calomel electrode sits at 0.2412 V against the SHE at 25 C. Its value is extremely reproducible but drifts with temperature by about 0.65 mV/K.",
        "Calomel values depend on KCl concentration: 0.3337 V at 0.1 M and 0.2801 V at 1 M, with the standard value 0.2676 V.",
        "The silver-silver chloride electrode gives about 0.2224 V; the mercury-mercurous sulfate electrode gives 0.6151 V.",
        "The reference must not interfere with the system: mercury poisons platinum, so calomel is avoided there, and chloride-sensitive systems need another reference.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Because a single electrode potential cannot be measured, " +
            "the literature fixes one by agreement. A **standard " +
            "reference electrode** is a half-cell whose potential is " +
            "*defined* as zero on its scale, so the potential of any " +
            "other electrode is simply the voltage of the cell it " +
            "forms with it. The standard hydrogen electrode holds that " +
            "role for aqueous electrochemistry: platinised platinum " +
            "bathed in hydrogen gas at one atmosphere, in contact with " +
            "hydrogen ions of unit activity. Its potential, and even " +
            "its temperature coefficient, are defined as zero at every " +
            "temperature.",
        },
        {
          kind: "para",
          text:
            "The hydrogen electrode is fussy to run, so laboratories " +
            "use simpler **practical reference electrodes**: stable " +
            "half-cells whose potential is reproducible and whose " +
            "offset from the standard hydrogen electrode is known. A " +
            "practical reference with potential `E_ref` on the SHE " +
            "scale turns a measured voltage into an SHE-referenced " +
            "potential by simple addition. The two workhorses are the " +
            "calomel electrode and the silver-silver chloride " +
            "electrode.",
        },
        {
          kind: "para",
          text:
            "The **calomel electrode** is an electrode of the second " +
            "kind. A pool of mercury sits under a KCl solution " +
            "saturated with calomel, the barely soluble salt " +
            "`Hg2Cl2`. The electrode reaction involves both mercury " +
            "and chloride, so the potential depends on chloride " +
            "activity through the Nernst relation - which is why the " +
            "KCl concentration must be fixed and stated. Three " +
            "concentrations are in common use:",
        },
        {
          kind: "formula",
          tex: String.raw`E = E^{\circ} - \frac{RT}{F}\ln a_{\mathrm{Cl^-}}, \qquad E^{\circ} = 0.2676\ \mathrm{V}`,
          caption:
            "The calomel potential on the SHE scale at 25 C. Because " +
            "the potential tracks chloride activity, the saturated " +
            "electrode is defined by its KCl concentration. The " +
            "standard value `E°` applies to unit chloride activity.",
        },
        {
          kind: "table",
          head: ["Reference electrode", "Conditions at 25 C", "Potential vs SHE"],
          rows: [
            ["Calomel, decimolar", "0.1 M KCl", "0.3337 V"],
            ["Calomel, molar", "1 M KCl", "0.2801 V"],
            ["Calomel, saturated (SCE)", "about 4.2 M KCl", "0.2412 V"],
            ["Silver-silver chloride", "defined KCl or HCl", "about 0.2224 V"],
            ["Mercury-mercurous sulfate", "H2SO4 or K2SO4, sat. Hg2SO4", "0.6151 V"],
          ],
          widths: [1.6, 1.8, 1.3],
        },
        {
          kind: "para",
          text:
            "The saturated calomel electrode is the most convenient of " +
            "these. It needs only an excess of solid KCl in the " +
            "solution, which holds the chloride activity fixed, and " +
            "its potential can be reproduced to about 0.1 mV. Its " +
            "weakness is temperature. The solubility of calomel " +
            "changes with temperature, so the saturated electrode has " +
            "a comparatively large temperature coefficient, roughly " +
            "0.65 mV per kelvin. A measurement aiming at 0.1 mV " +
            "therefore needs the cell thermostatted, or the " +
            "temperature coefficient applied on purpose.",
        },
        {
          kind: "para",
          text:
            "The **silver-silver chloride electrode** is made by " +
            "coating a silver wire with a thin layer of AgCl, usually " +
            "by making the silver the anode in chloride solution. It " +
            "is compact, robust and well suited to small and " +
            "solid-state cells, with a potential near 0.2224 V against " +
            "the SHE. Other systems serve special roles: the " +
            "mercury-mercurous sulfate electrode for sulfate media, " +
            "the mercury-mercuric oxide electrode for alkaline " +
            "solutions, and the cadmium-cadmium oxide electrode where " +
            "simplicity matters more than stability.",
        },
        {
          kind: "para",
          text:
            "Choosing a reference is a chemical decision as much as " +
            "an electrical one. Two things dominate. First, keep the " +
            "liquid-junction potential small, which favours a " +
            "reference electrolyte close in composition to the working " +
            "solution. Second, be chemically inert toward the system " +
            "under study. A calomel or other mercury-containing " +
            "electrode is a poor choice with a platinum working " +
            "electrode, because traces of mercury poison the platinum " +
            "surface. And any chloride-based reference is unsuitable " +
            "when the system is sensitive to chloride. The reference " +
            "must report the potential without joining the reaction.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Two questions for any reference",
          body:
            "What is its potential on the hydrogen scale, and does it " +
            "interfere with my system? The first decides how the " +
            "numbers convert; the second decides whether the " +
            "experiment means anything at all. A stable electrode " +
            "that does not interfere, with a well-known offset, is " +
            "the whole requirement.",
        },
      ],
    },
    {
      id: "potentiometry-and-limits",
      tone: "slate",
      title: "Potentiometry and its limits",
      minutes: 9,
      summary:
        "Potentiometry reads a cell voltage while drawing almost no " +
        "current. The cell, the voltmeter and the reference all have to " +
        "be right, because any current would change the very potential " +
        "being measured, and junction potentials would add an offset you " +
        "cannot see.",
      keyPoints: [
        "Potentiometry measures the open-circuit voltage of an electrochemical cell. The defining condition is that essentially no current flows.",
        "An ordinary moving-coil voltmeter draws enough current to polarise the electrodes and shift the reading by tens of millivolts; electronic voltmeters with input currents of `10⁻⁸ to 10⁻¹⁴ A` avoid this.",
        "In a three-electrode cell no current flows through the reference circuit, so the reference is not polarised and its potential stays fixed.",
        "A Luggin capillary brings the reference tip close to the working electrode to cut the ohmic potential drop included in the measured voltage.",
        "Liquid-junction potentials at boundaries between different electrolytes add an unknown offset; you reduce them by matching compositions or using a salt bridge.",
        "A reference electrode defines a scale, not an absolute potential: potentiometry always measures the difference between two interfaces.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "**Potentiometry** is measuring a cell voltage under " +
            "conditions of essentially zero current. It sounds like " +
            "the simplest experiment in electrochemistry, and in " +
            "concept it is. In practice the zero-current requirement " +
            "is what makes it delicate. The moment a measurement draws " +
            "current it drives the electrode reactions, changes the " +
            "concentrations at the surfaces, and alters the very " +
            "potential it set out to read. Accuracy of 0.1 to 1 mV is " +
            "routine for ordinary work, and 10 microvolts is needed " +
            "when the result feeds a thermodynamic calculation.",
        },
        {
          kind: "para",
          text:
            "The first requirement is therefore a voltmeter with a " +
            "very high input impedance. A moving-coil meter draws " +
            "currents of order `10⁻³ to 10⁻⁴ A`, and through a " +
            "circuit resistance of even 100 ohms that current " +
            "produces an ohmic drop of tens of millivolts - before you " +
            "count the polarisation it causes. Modern potentiometers " +
            "use electronic input stages whose current drain is " +
            "`10⁻⁸ to 10⁻¹⁴ A`, small enough that the cell is " +
            "effectively left alone. The measured voltage is then " +
            "close to the true open-circuit value.",
        },
        {
          kind: "formula",
          tex: String.raw`E_{\text{measured}} = E_{\text{WE}} - E_{\text{ref}} + E_{\text{junction}} - iR, \qquad i \approx 0`,
          caption:
            "What a potentiometric reading contains. With the current " +
            "negligible the ohmic term `iR` disappears, but the " +
            "liquid-junction potential `E_junction` stays. It is the " +
            "invisible extra term that limits the accuracy of every " +
            "practical cell.",
        },
        {
          kind: "para",
          text:
            "The cell design matters for the same reason. In the " +
            "simplest two-electrode arrangement the second electrode " +
            "both completes the circuit and acts as the reference, but " +
            "passing current through it polarises it. For " +
            "measurements that involve current, a **three-electrode " +
            "cell** is standard: a working electrode, an auxiliary " +
            "electrode that carries the current, and a separate " +
            "reference electrode through which no current flows. " +
            "Because the reference carries no current, it never " +
            "polarises and its potential stays at its calibrated " +
            "value.",
        },
        {
          kind: "para",
          text:
            "Even with no current through the reference, the " +
            "electrolyte between it and the working electrode is " +
            "crossed by the working current and adds an ohmic drop to " +
            "the measured voltage. To shrink that region, the " +
            "reference is connected through a tube drawn to a fine " +
            "tip - the **Luggin capillary** - brought as close to the " +
            "working electrode as possible without screening the " +
            "surface or disturbing the current distribution. There is " +
            "a real trade-off here: too far away leaves an ohmic " +
            "error, too close perturbs the measurement it is meant " +
            "to improve.",
        },
        {
          kind: "para",
          text:
            "The other offset you cannot avoid is the " +
            "**liquid-junction potential**. Wherever two electrolytes " +
            "of different composition meet, ions diffuse at different " +
            "rates and a small potential difference builds up across " +
            "the boundary. It adds straight onto the measured voltage " +
            "and is generally not known precisely. Two measures " +
            "reduce it. Matching the reference electrolyte to the " +
            "working solution makes the two compositions similar, so " +
            "the junction is mild. Failing that, a salt bridge filled " +
            "with concentrated KCl uses the nearly equal mobilities " +
            "of potassium and chloride ions to keep the junction " +
            "potential small and steady.",
        },
        {
          kind: "para",
          text:
            "These practical measures come back to the theoretical " +
            "point that opened the lesson. A reference electrode " +
            "does not make the potential of one interface measurable. " +
            "It makes the *difference* between two interfaces " +
            "reproducible. The measured voltage is always the working " +
            "electrode compared with a defined half-cell, plus " +
            "whatever junction and ohmic terms the cell adds. Knowing " +
            "each of those terms, and which can be reduced or " +
            "corrected, is what separates a trustworthy potential " +
            "from a number read off a dial.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The potentiometric rule",
          body:
            "Measure the voltage with a circuit that draws no " +
            "current. Compare against a reference whose potential on " +
            "the hydrogen scale is known. Account for the junction " +
            "potential between the two electrolytes. Meet those three " +
            "conditions and the reading is meaningful; drop any one " +
            "and an unknown offset creeps in.",
        },
      ],
      cta: {
        title: "From a reading to a number",
        body:
          "Lesson 7 started with an uncomfortable fact: a voltmeter " +
          "never reads a single electrode. We then built the machinery " +
          "that makes the difference meaningful - outer, inner and " +
          "surface potentials, work functions in vacuum and in " +
          "solution, Volta potentials and the resolution of the Volta " +
          "problem, the estimate of an absolute potential, and the " +
          "reference electrodes and potentiometric circuit that " +
          "deliver a number you can repeat. Next we put potentials and " +
          "currents to work together and study how an electrode " +
          "responds when a current is actually forced through it. " +
          "Test yourself on this lesson's bank first.",
        href: "/lessons/lesson-7/quiz",
        linkLabel: "Take the Lesson 7 questions",
        secondaryHref: "/lessons/lesson-6",
        secondaryLabel: "Recheck the double layer",
      },
    },
  ],
};
