// Lesson 15 - Surfaces and modified electrodes.
//
// Source syllabus: Bagotsky ch.16, 27 and Bard & Faulkner ch.14, 16-17.
// The chapters set the coverage and the numbers; every sentence, formula
// and question here is original.

import type { Lesson } from "./types";
import { lesson15Mcq } from "./lesson-15.mcq";

export const lesson15: Lesson = {
  slug: "lesson-15",
  label: "Lesson 15",
  title: "Surfaces and modified electrodes",
  summary:
    "A real electrode is not a flat metal plate; it is a surface with " +
    "layers, defects and coatings, and almost every useful property of " +
    "a cell comes from controlling what grows on it. This lesson is " +
    "about making those surfaces deliberately: plating a metal onto " +
    "an electrode, growing a functional film on it, and then looking " +
    "at it with the scanning probes and spectroscopy that let you see " +
    "the work.",
  order: 15,
  minutes: 55,
  mcq: lesson15Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Lessons 1 through 5 spoke of electrodes as if they were clean, " +
        "infinite plates. Real ones are none of those things. Their " +
        "faces are rough, contaminated, or deliberately coated; their " +
        "every useful property is set by the few atomic layers that " +
        "touch the solution. Controlling a device therefore means " +
        "controlling a surface.",
    },
    {
      kind: "para",
      text:
        "Following Bagotsky ch.16, 27 and Bard & Faulkner ch.14, 16-17 " +
        "we first look at how a surface is made - deposition, the " +
        "growth of oxide and salt layers - then at electrodes that " +
        "carry functional films, and finally at the scanning probes " +
        "and spectroscopies that let us watch a surface while it works.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "An electrode becomes a device when you choose what covers it: " +
        "plating, passive or functional films, and molecular layers; " +
        "the scanning probes and spectroscopies are the tools that let " +
        "you watch the surface you built.",
    },
  ],
  sections: [
    {
      id: "metal-deposition",
      tone: "azure",
      title: "Depositing a metal",
      minutes: 7,
      summary:
        "Reduce a metal ion at a cathode and it plates out, atom by " +
        "atom. How it plates - smooth films, dendrites, or powders - " +
        "is the first lesson in controlling a surface.",
      keyPoints: [
        "An applied cathodic potential drives M^n+ + ne^- → M, depositing a metal film on the electrode.",
        "Whether the deposit is smooth or dendritic depends on the competition between kinetics, mass transfer, and surface energy.",
        "A high overpotential smooths the film by making many nuclei; transport-limited deposition gives dendrites and powders.",
        "The same electrochemistry plates metals for industry, deposits catalysts, and fails as dendritic short-circuits in batteries.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Apply a sufficiently negative potential to a solution of " +
            "metal ions and the reverse of corrosion runs: the ions " +
            "step onto the electrode, atom by atom, and a metal film " +
            "grows. That is electrodeposition, and it is how " +
            "electroplating, refining, and most battery electrodes are " +
            "made.",
        },
        {
          kind: "formula",
          tex: String.raw`M^{n+} + n e^- \rightarrow M`,
          caption:
            "The plating half-reaction. Overpotential is the driving " +
            "force; mass transfer and nucleation jointly decide what " +
            "the new metal looks like.",
        },
        {
          kind: "para",
          text:
            "The shape of that film is the lesson. Push the potential " +
            "hard negative and the reaction starts everywhere at " +
            "once: a fine-grained, smooth, adherent coating. Run near " +
            "the limiting current and deposition is slow enough that " +
            "ions arrive preferentially at the high spots, and each " +
            "high spot grows into a needle: dendrites. Push further " +
            "and the needles detach as a powder. A smooth plate and a " +
            "tree of silver from a torch cell are the same chemistry, " +
            "separated by how hard you pushed it.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Dendrites: the failure mode that looks like a feature",
          body:
            "Dendritic lithium plates look impressive in a demo and " +
            "fatal in a battery: they short the cell, waste the " +
            "electrolyte, and can puncture the separator. Real " +
            "lithium cells are engineered to plate *smoothly* - " +
            "another argument for a clean, uniform interface.",
        },
      ],
    },
    {
      id: "surface-layers",
      tone: "indigo",
      title: "Surface layers: oxides, salts and films",
      minutes: 7,
      summary:
        "Before any deliberate coating lands, a surface already carries " +
        "what the solution and air left on it: oxide, hydroxide, " +
        "adsorbed water, salts. Knowing what is there changes what " +
        "you must do next.",
      keyPoints: [
        "Almost every 'clean' metal surface is covered by a native oxide a few angstroms thick, an adsorbed water layer, and sometimes hydroxide.",
        "Electrochemical reactions must often cross that layer, so its composition and thickness are part of the electrode's kinetics.",
        "Potentiodynamic polarisation in a CV can grow, reduce and map those layers, revealing the surface's electrochemical area.",
        "Small changes at the surface - a monolayer of adsorbate - can shift a peak or a rate by orders of magnitude.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Take a shiny piece of platinum out of the polish and " +
            "into air and it is instantly dressed: a layer of oxide, " +
            "a layer of adsorbed water, perhaps a trace of carbon. Put " +
            "it in solution and the water thickens into the double " +
            "layer of Lesson 6. None of this is visible, and all of it " +
            "matters: every electron that crosses the interface must " +
            "pass through, around, or under that few-angstrom film.",
        },
        {
          kind: "para",
          text:
            "That film is why an electrode 'remembers' its history. " +
            "Clean it one way and a reaction is fast; clean it " +
            "another and the same reaction is slow by a factor of a " +
            "hundred. A monolayer of adsorbed hydrogen, or an oxide " +
            "left over from the last sweep, can block the sites an " +
            "analyte needs. The electrode's true surface area is " +
            "therefore something to be measured, not assumed - the " +
            "hydrogen-adsorption peak area in an acid CV is one " +
            "classic way to do it.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "A surface is a history book",
          body:
            "Every potential excursion and every exposure leaves a " +
            "mark. Reproducible electrochemistry starts from " +
            "reproducible surface preparation; two labs can disagree " +
            "about a rate constant purely because they polished " +
            "differently.",
        },
      ],
    },
    {
      id: "modified-electrodes",
      tone: "violet",
      title: "Modified electrodes",
      minutes: 8,
      summary:
        "A modified electrode is a bare electrode plus a functional " +
        "layer designed to do one job: catalyse a reaction, pass one " +
        "ion, hold a molecule, or block a poison. The layer is part of " +
        "the electrode, and the electrode is part of the device.",
      keyPoints: [
        "A modified electrode carries a thin functional layer - polymer, catalyst, molecular film, or biological molecule - that defines its chemistry.",
        "The layer can catalyse a reaction, ion-selectively filter the solution, or immobilise a recognition element.",
        "Because the layer is thin, all of the currents and potentials of earlier lessons still apply - now to the layer-solution interface.",
        "Failure modes are mostly about the layer detaching or degrading, not about the metal.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Bare platinum is a good generalist and a mediocre " +
            "specialist. To make it selective, attach a layer: a " +
            "polymer film that only passes one ion, a monolayer of a " +
            "catalyst fast for hydrogen oxidation and slow for oxygen, " +
            "an enzyme that recognises exactly one analyte. The metal " +
            "underneath still supplies electrons and the structure; " +
            "the layer supplies the chemistry.",
        },
        {
          kind: "para",
          text:
            "Two broad strategies do most of the work. **Chemiresis-" +
            "tive layers** - a polymer or a small-molecule film that " +
            "changes resistance when it binds an analyte - and " +
            "**catalytic layers**, which speed up one target reaction " +
            "while leaving competitors alone. Either way, the layer " +
            "is thin by design: thick enough to carry the function, " +
            "thin enough that ions in the underlying solution can " +
            "reach it.",
        },
        {
          kind: "para",
          text:
            "The same Lesson 8-9-10 machinery then applies to the " +
            "layer. Its own impedance, its own peak shifts with analyte " +
            "concentration, its own scan-rate dependence: the layer is " +
            "a small electrochemical system in its own right, and its " +
            "failure modes are usually mechanical - swelling, " +
            "delamination, slow leaching - rather than the chemistry " +
            "wearing out.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The surface is the sensor",
          body:
            "A modified electrode moves the selectivity from the " +
            "measurement to the surface: the chemistry happens in a " +
            "pre-selected doorway before the electrode ever sees it.",
        },
      ],
    },
    {
      id: "nucleation-and-growth",
      tone: "amber",
      title: "Nucleation and growth",
      minutes: 7,
      summary:
        "A deposited metal does not spread evenly: it arrives as tiny " +
        "islands that nucleate, grow, and merge. The size of those " +
        "islands is set by how hard you drive the deposition, and " +
        "with it the grain size of the coating.",
      keyPoints: [
        "Deposition begins with nucleation: a small cluster of new atoms that must reach a critical size before it is stable.",
        "High overpotential gives a high nucleation rate, hence many small islands and a fine-grained film.",
        "Low overpotential gives few islands that grow large: a coarse film, or isolated crystallites.",
        "The grain size of the coating - fixed at nucleation - follows it through its whole life, and with it its strength and corrosion behaviour.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "When a metal ion is reduced at a cathode, the first few " +
            "atoms deposited do not yet form a crystal. A tiny cluster " +
            "pays the surface energy of its boundary before it earns " +
            "the bulk energy of the metal. That is why only clusters " +
            "above a critical size survive; below it they redissolve. " +
            "The overpotential decides that critical size.",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta G(r) = 4\pi r^{2}\gamma - \frac{4}{3}\pi r^{3}\,\frac{nF|\eta|}{V_m}`,
          caption:
            "Free energy of a spherical nucleus. Surface costs scale " +
            "as r², the bulk payoff as r³, and the payoff is funded " +
            "by the overpotential. Big η shrinks the critical radius, " +
            "so nucleation gets easy.",
        },
        {
          kind: "para",
          text:
            "Consequences follow. Push the potential hard: critical " +
            "nuclei form everywhere, often, and the surface fills " +
            "with a fine-grained, smooth film. Nudge the potential " +
            "gently: only the occasional cluster survives, and the " +
            "film grows as a few large, faceted islands that merge " +
            "late. The same chemistry that plated silver onto a " +
            "mirror in one cell can beard a dendrite tree in another, " +
            "depending on whether nucleation or growth rate wins the " +
            "competition for arrivals.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Nucleation rate is the dial",
          body:
            "Fine grain, smooth films, and dense coatings are " +
            "achieved by making nucleation frequent relative to " +
            "growth. Additive chemistry and pulsed deposition both " +
            "work by the same trick: momentarily raising the " +
            "overpotential to burst new nuclei.",
        },
      ],
    },
    {
      id: "adsorption-and-surface-thermodynamics",
      tone: "slate",
      title: "Adsorption and surface thermodynamics",
      minutes: 7,
      summary:
        "Molecules stick to surfaces, and the surface has an energy " +
        "budget just like a bulk phase. Adsorption isotherms and the " +
        "surface excess are how the adsorbed amount is measured and " +
        "related to the applied potential.",
      keyPoints: [
        "An adsorption isotherm relates the surface coverage θ to the bulk concentration or pressure of the adsorbate.",
        "Langmuir saturates at one monolayer; real systems show Freundlich or Temkin behaviour from lateral interactions.",
        "The surface excess - the Gibbs adsorption equation - connects how much adsorbs to how the surface tension changes.",
        "On an electrode the same accounting runs through the potential: adsorption and desorption give peaks in the CV, and their charge counts the covered area.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Molecules in solution have a finite lifetime of " +
            "indifference to a surface; once they touch, the surface's " +
            "electronic and geometric landscape decides whether they " +
            "stick. Coverage builds with concentration and falls with " +
            "thermal disorder, and the equilibrium between arrival " +
            "and escape is what an isotherm records.",
        },
        {
          kind: "formula",
          tex: String.raw`\theta = \frac{Kc}{1 + Kc}\quad(\text{Langmuir}),\qquad \Gamma = -\frac{1}{RT}\frac{d\gamma}{d\ln c}\quad(\text{Gibbs})`,
          caption:
            "Two bookkeeping relations. Langmuir: coverage rises with " +
            "concentration and saturates at one monolayer. Gibbs: the " +
            "surface excess of an adsorbate is proportional to how " +
            "much it lowers the surface tension.",
        },
        {
          kind: "para",
          text:
            "On an electrode, concentration and potential are linked " +
            "through the same thermodynamics. Hydrogen, oxygen, and " +
            "organic adsorbates each have a characteristic potential " +
            "window in which covering the surface costs energy and in " +
            "which it does not. Sweep through that window and the CV " +
            "traces an adsorption peak on the way in and a desorption " +
            "peak on the way out; integrate either peak and the charge " +
            "passed counts the adsorbed amount, one electron per site. " +
            "That is how a monolayer becomes a number.",
        },
      ],
    },
    {
      id: "scanning-probes",
      tone: "rose",
      title: "Scanning probe techniques",
      minutes: 8,
      summary:
        "Scanning probe microscopy puts a needle between you and the " +
        "surface and lets it trace the topography, the chemistry, or " +
        "the electronic properties, one point at a time.",
      keyPoints: [
        "Scanning tunnelling microscopy reads a tunnel current between an atomically sharp tip and the sample to map the surface with atomic resolution.",
        "Atomic force microscopy reads the force between tip and surface, so it works in insulators and in liquid.",
        "An electrochemical variant, EC-STM/AFM, does the same while an electrode reaction runs underneath.",
        "The technique trades speed for resolution: a map that once took hours is now a movie, but a point is still a point.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Optics cannot resolve atoms; a needle can. Scanning " +
            "tunnelling microscopy (STM) brings a tungsten or Pt-Ir " +
            "needle so close to a conducting surface that electrons " +
            "tunnel across the last ångström or two, and reads the " +
            "current. Scan the needle across the surface and the " +
            "current changes with the height: you have drawn the " +
            "surface, atom by atom.",
        },
        {
          kind: "formula",
          tex: String.raw`I \propto e^{-2\kappa d}`,
          caption:
            "Tunnel current falls exponentially with the tip-sample " +
            "gap d. A change of one ångström changes the current by " +
            "roughly an order of magnitude - which is why STM is " +
            "atomic.",
        },
        {
          kind: "para",
          text:
            "Atomic force microscopy (AFM) keeps the needle but drops " +
            "the current. Instead it reads the force between tip and " +
            "sample - a van der Waals push at a distance, a hard wall " +
            "at contact - and scans that. Because no current needs to " +
            "flow, it maps insulators, soft films, and living cells " +
            "almost as well as metals.",
        },
        {
          kind: "para",
          text:
            "Electrochemical STM and AFM do the same trick inside a " +
            "cell. Potentiostat the sample, put the tip in the same " +
            "electrolyte, and you can watch a copper deposit grow, an " +
            "oxide film form, or a bubble nucleate, one atomic row at " +
            "a time. It is the slowest way ever invented to take a " +
            "picture, and the sharpest.",
        },
      ],
    },
    {
      id: "spectroelectrochemistry",
      tone: "coral",
      title: "Spectroelectrochemistry: seeing while reacting",
      minutes: 7,
      summary:
        "Point a spectrometer at an electrode while it works and the " +
        "spectrum itself becomes a measurement: which species are " +
        "present, in what state, and how fast they change.",
      keyPoints: [
        "Spectroelectrochemistry couples an electrochemical cell to a spectroscopic readout - optical, infrared, Raman, or X-ray.",
        "Because the potential sets the population of oxidation states, scanning it lets you watch one species grow and another shrink.",
        "It identifies the intermediates of a reaction and counts them, turning a voltammogram from a curve into a story.",
        "The same logic underlies sensors, catalyst screening, and mechanistic assignments.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A voltammogram tells you that electrons moved; it does " +
            "not tell you what they did to the molecules. To find " +
            "out, watch the solution while the potential runs. Shine " +
            "UV-vis through a thin-layer cell and the colour changing " +
            "is the species changing; record an infrared spectrum and " +
            "the disappearance of a C=O stretch is a bond breaking. " +
            "The pair of measurements - current on one axis, spectrum " +
            "on the other - is spectroelectrochemistry.",
        },
        {
          kind: "para",
          text:
            "The power is in the coupling. Sweep the potential through " +
            "a peak and the spectrum at each point tells you what was " +
            "being reduced and what it became. See an isosbestic point " +
            "- a wavelength that never changes - and you know the " +
            "transformation is clean: one species in, one species out. " +
            "See a new band grow instead, and you have caught an " +
            "intermediate that the voltammogram alone would have " +
            "hidden inside a shoulder.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The electrode writes, the spectrometer reads",
          body:
            "Electrochemistry sets the stage; spectroscopy names the " +
            "actors. Together they answer the two questions every " +
            "mechanism must: how many electrons, and which molecules?",
        },
        {
          kind: "worked",
          title: "Langmuir saturation",
          given:
            "A surface adsorbs with K = 2000 L/mol. What fraction of sites is covered at 0.5 mM?",
          steps: [
            String.raw`\theta = Kc/(1+Kc)`,
            String.raw`Kc = 2000 \times 5\times10^{-4} = 1.0`,
            String.raw`\theta = 1.0/2.0 = 0.5`,
          ],
          result:
            "Half the sites are filled. Whenever Kc = 1 the coverage is exactly half - a Langmuir isotherm's half-saturation point.",
        },
        {
          kind: "worked",
          title: "Critical radius shrinks with overpotential",
          given:
            "For a deposit with surface energy gamma = 1.5 J/m2, molar volume V_m = 7.1e-6 m3/mol, n = 2, the critical radius at 10 mV of overpotential is about: use r* = 2 gamma V_m/(n F eta).",
          steps: [
            String.raw`r^* = \frac{2\gamma V_m}{n F |\eta|}`,
            String.raw`r^* = \frac{2 \times 1.5 \times 7.1\times10^{-6}}{2 \times 96485 \times 0.010}`,
            String.raw`r^* = \frac{2.13\times10^{-5}}{1.93\times10^{3}} \approx 1.1\times10^{-8}\ \mathrm{m} = 11\ \mathrm{nm}`,
          ],
          result:
            "About 11 nm. Double the overpotential and the critical nucleus halves - that is why a hard kick of potential suddenly nucleates a flood of small grains.",
        },
      ],
      cta: {
        title: "Beyond the basics",
        body:
          "We have a full course now - from ion motion to coupled " +
          "chemistry, from chronoamperometry to corrosion to fuel " +
          "cells. The last lesson is a guidepost to where the same " +
          "physics goes next: catalysis, photoelectrochemistry, " +
          "conductive polymers, solid-state devices, and " +
          "nanoelectrochemistry.",
        href: "/lessons/lesson-15/quiz",
        linkLabel: "Take the Lesson 15 quiz",
        secondaryHref: "/lessons/lesson-16",
        secondaryLabel: "Go to Lesson 16",
      },
    },
  ],
};
