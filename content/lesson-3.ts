// Lesson 3 - Solution chemistry.
//
// Source syllabus: Bagotsky ch.5 (Phase Boundaries Between Miscible
// Electrolytes), ch.7 (Aqueous Electrolyte Solutions) and ch.8 (Nonaqueous
// Electrolytes). The framing of the medium as an active participant follows
// the course arc; the chapters set the coverage and the numbers, but every
// sentence, figure and question here is original.

import type { Lesson } from "./types";
import { lesson3Mcq } from "./lesson-3.mcq";

export const lesson3: Lesson = {
  slug: "lesson-3",
  label: "Lesson 3",
  title: "Solution chemistry",
  summary:
    "A solution is not just empty space for ions to drift through. How " +
    "electrolytes split apart and get wrapped in solvent, why real " +
    "solutions need activities instead of concentrations, how the push and " +
    "pull between ions gives the Debye-Hückel law, what happens where two " +
    "different solutions meet - diffusion potentials, membranes and " +
    "Donnan equilibria - and what is used instead of water: organic " +
    "solvents, melts and solid electrolytes.",
  order: 3,
  minutes: 60,
  mcq: lesson3Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Lessons 1 and 2 built the voltage machinery and set its " +
        "dials. All of it rested on one quiet assumption: that an " +
        "electrolyte solution simply supplies ions, and that their energy " +
        "answers to concentration in the plain ideal way. This lesson " +
        "takes that assumption apart. The medium is not a passive " +
        "container. It splits solutes into ions, wraps each ion in a shell " +
        "of solvent, and is full of electrostatic pushes between the ions " +
        "it holds. Following Bagotsky, this lesson covers the aqueous " +
        "solution (ch.7), the boundaries between electrolytes (ch.5), and " +
        "then the alternatives to water: organic solvents, melts and solid " +
        "electrolytes (ch.8).",
    },
    {
      kind: "para",
      text:
        "One thing to keep in mind. Lesson 2 used the activity " +
        "coefficient as a black box. This lesson opens that box. " +
        "**Activities are how a real solution pays for not being ideal, " +
        "and the bill is written by the push and pull between ions.** " +
        "Everything else here - diffusion potentials, membranes, solvents " +
        "other than water - is the same idea in different clothes.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "An electrolyte solution organises itself. Solutes split into " +
        "ions and get wrapped in solvent, the ions settle into clouds and " +
        "pairs that the activity coefficient reports, and wherever two " +
        "electrolytes touch, a junction, a membrane and a diffusion " +
        "potential appear. The Nernst machinery has to be told about all " +
        "of that before it can be trusted.",
    },
  ],
  sections: [
    {
      id: "dissociation",
      tone: "azure",
      title: "How electrolytes dissociate",
      minutes: 7,
      summary:
        "A dilute salt solution conducts well because the salt splits into " +
        "free ions on its own. The theory of electrolytic dissociation " +
        "explains that, and then runs into a question it cannot answer " +
        "yet: where does the energy for the split come from?",
      keyPoints: [
        "Colligative properties depend only on how many particles there are. Electrolytes give much larger values than expected, even when dilute - the van't Hoff factor i.",
        "Arrhenius (1887): the solute splits into ions on its own. The degree of dissociation α links conductivity to the extra colligative effect (α = Λ/Λ₀).",
        "Ostwald's dilution law ties α to concentration through a dissociation constant - and it fails for strong electrolytes.",
        "Ionophors already hold ions, e.g. NaCl; ionogens are molecules that become ions in the solvent, e.g. HCl. Solvation pays for the breakup.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about where the ions in a solution come " +
            "from. Lesson 1 treated the electrolyte solution as a " +
            "ready-made reservoir of ions, but nothing in chemistry " +
            "guarantees that. The answer - the ions arise on their own - " +
            "comes with an energy bill, and the next section explains it.",
        },
        {
          kind: "para",
          text:
            "The evidence came from **colligative properties**: osmotic " +
            "pressure, the lowering of vapour pressure, boiling-point " +
            "elevation and freezing-point depression. These respond only " +
            "to the *number* of dissolved particles, never to what the " +
            "particles are. In a dilute ideal solution the osmotic " +
            "pressure follows `Π = RT·c<sub>k</sub>` (van't Hoff), the " +
            "same shape as the ideal gas law. Non-electrolytes keep to " +
            "these relations down to about 10⁻² M. Electrolytes do not: " +
            "their colligative effects are clearly larger than the " +
            "concentration alone predicts, even in dilute solutions that " +
            "are otherwise ideal. These are the *anomalous colligative " +
            "properties*.",
        },
        {
          kind: "para",
          text:
            "The fix was a fudge factor. Van't Hoff put the **isotonic " +
            "coefficient** `i` into the osmotic-pressure equation: it is " +
            "the ratio of the real particle concentration to the nominal " +
            "concentration of the solute. For electrolytes in dilute " +
            "solution `i` comes close to small whole numbers between 2 " +
            "and 4, and it changes with the nature of the solute and its " +
            "concentration.",
        },
        {
          kind: "para",
          text:
            "Svante Arrhenius, in his 1883 dissertation and its " +
            "classical 1887 form, gave the theory that explains the " +
            "anomaly: **in an electrolyte solution the solute splits into " +
            "ions on its own, with no external field needed**. The degree " +
            "of dissociation `α` is not just a bookkeeping idea. It shows " +
            "up in the conductivity, `α = Λ/Λ₀` (where `Λ₀` is the molar " +
            "conductivity at complete dissociation), and in the " +
            "colligative excess, `i = 1 + α(τ − 1)` for a salt splitting " +
            "into `τ` ions. The two measurements agreed, and agreement " +
            "between quantities measured in two different ways was the " +
            "theory's first success.",
        },
        {
          kind: "para",
          text:
            "Wilhelm Ostwald (1888) added the chemical step: an " +
            "equilibrium between ions and undissociated molecules, set " +
            "by a **dissociation constant** `K<sub>diss</sub>`. For a " +
            "binary electrolyte the constant and the degree of " +
            "dissociation are linked by Ostwald's dilution law,",
        },
        {
          kind: "formula",
          tex: String.raw`K_{\mathrm{diss}} = \frac{\alpha^2\tau_+\tau_- c_k}{1-\alpha}, \qquad \alpha \to 1 \text{ as } c_k \to 0`,
          caption:
            "Ostwald's dilution law. Diluting pushes the degree of " +
            "dissociation towards complete splitting (α → 1); " +
            "concentrating pushes it down. The law describes weak " +
            "electrolytes well and strong ones hardly at all - the next " +
            "sections fix that.",
        },
        {
          kind: "para",
          text:
            "Two facts show where Arrhenius's frame stops working. " +
            "First, there are two families of solutes. **Ionophors** " +
            "(NaCl) are ionic crystals that already hold ions on lattice " +
            "sites; dissolving merely sets them free. **Ionogens** (HCl) " +
            "are covalently bonded molecules that become ions only " +
            "through chemical interaction with the solvent. Second, " +
            "Friedrich Kohlrausch (1900) showed that for strong " +
            "electrolytes, which are fully split at any concentration, " +
            "the molar conductivity falls as `Λ = Λ₀ − k√c<sub>k</sub>` " +
            "- a dependence that no dissociation equilibrium can " +
            "produce. Both facts point the same way: something other " +
            "than association is dragging on the ions, and it grows with " +
            "concentration. That something is the topic of Section 5. " +
            "The energy question - why splitting on its own does not " +
            "cost more than thermal motion can pay - is answered next.",
        },
      ],
    },
    {
      id: "solvation",
      tone: "indigo",
      title: "Solvation: who pays the dissolution bill",
      minutes: 7,
      summary:
        "Dissolving an ionic solid takes more energy than heat alone can " +
        "cover. The solvent pays the bill: ion-dipole forces hold solvent " +
        "molecules in shells around each ion, and the energy of those " +
        "shells settles the account. Protons, as always, play by their " +
        "own rules.",
      keyPoints: [
        "Ion-dipole forces hold solvent molecules in shells; the inner shell travels with the ion and makes it effectively bigger.",
        "Dissolving splits into two steps, breakup plus solvation: q(d) = q(b) + q(s). Solvation energies of hundreds of kJ/mol pay for breaking the lattice and the bonds.",
        "Born's continuum model gives the right size for the solvation energy but overshoots; models that add a structured inner shell do better.",
        "Small ions carry more solvent (Li⁺ 5-6, K⁺ 4, Cs⁺ 1-2), which evens out effective sizes. Protons form a covalent H₃O⁺ core and hop along chains of water.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about who pays for dissolving. The last " +
            "section ended with a debt. Turning NaCl into free ions in " +
            "the gas phase takes about 770 kJ/mol, splitting HCl takes " +
            "about 430 kJ/mol, and thermal motion can only spare perhaps " +
            "10 kJ/mol. The rest comes from the solvent itself. This " +
            "section puts a number on solvation, then meets its most " +
            "spectacular case: the behaviour of protons.",
        },
        {
          kind: "para",
          text:
            "Water is a polar molecule, and an ion pulls on it " +
            "electrically. The molecules nearest the ion form the " +
            "**primary (nearest) solvation sheath**. It is bound so " +
            "tightly that thermal motion cannot strip it, and the ion " +
            "carries the shell with it as it moves. Farther out, weaker " +
            "forces only line the solvent up in **secondary shells** " +
            "that fade into the bulk liquid. You can see the shells in " +
            "plain facts: dissolving sulfuric acid gives off heat, " +
            "evaporating a salt solution leaves crystal hydrates, and " +
            "what an ion's mobility actually feels is its effective " +
            "(solvated) radius, not its crystal radius.",
        },
        {
          kind: "para",
          text:
            "To put numbers on it, use a bookkeeping identity. The heat " +
            "of solution is the sum of two steps: pulling the solute " +
            "apart into free ions (breakup, `q(b)`) and then solvating " +
            "those ions (solvation, `q(s)`):",
        },
        {
          kind: "formula",
          tex: String.raw`q_{(d)} = q_{(b)} + q_{(s)}, \qquad q_{(d)} \in [-100,\, +40] \text{ kJ/mol}`,
          caption:
            "Heat of solution as breakup plus solvation. The heat of " +
            "solution is small and can be measured to about 0.1% by " +
            "calorimetry. The breakup term can be built up from a " +
            "Born-Haber cycle or estimated from electrostatics (Born's " +
            "lattice-energy formula gives 762 kJ/mol for NaCl, close to " +
            "the cycle's 722-773 kJ/mol).",
        },
        {
          kind: "para",
          text:
            "The gap is enormous, and it settles the question from the " +
            "last section. Solvation energies run to **several hundred " +
            "kJ/mol per mole of ions**, comfortably more than the " +
            "breakup cost of ionophors and ionogens. The ion-dipole " +
            "interaction that the Arrhenius picture ignored pays the " +
            "bill. The idea was first pressed by Mendeleev's chemical " +
            "theory of solutions and sharpened by Kablukov (1891), and " +
            "it is exactly what makes splitting on its own " +
            "energetically possible.",
        },
        {
          kind: "formula",
          tex: String.raw`w_{(s)} = \frac{(zQ_0)^2}{8\pi\varepsilon_0\varepsilon r_j}`,
          caption:
            "Born's continuum model (1920): the work of moving an ion " +
            "into a dielectric continuum. It captures most of the " +
            "effect, and because it treats the ion as a charged sphere " +
            "sitting in the medium's unchanged permittivity, it " +
            "overshoots. Better models wrap a structured inner shell - " +
            "each molecule's dipole counted explicitly - around the " +
            "Born continuum for the rest.",
        },
        {
          kind: "para",
          text:
            "The shape of the shell is reported by the **solvation " +
            "number** `h<sub>j</sub>`, the number of molecules in the " +
            "primary sheath. It is measured through transport numbers, " +
            "Stokes radii, or the drop in compressibility - the " +
            "*electrostriction* of the water. Small ions cling to the " +
            "most solvent: Li⁺ carries 5-6, Na⁺ 6-7, K⁺ about 4, Cs⁺ " +
            "barely 1-2. The result is a famous levelling: a bigger " +
            "crystal radius means a smaller sheath, so **the effective " +
            "sizes of different ions tend to match up**, and their " +
            "mobilities and diffusion coefficients end up strikingly " +
            "similar. Large organic ions such as N(C₄H₉)₄⁺ are proud " +
            "exceptions, with hydration numbers near zero.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The proton does not behave like other ions",
          body:
            "A proton in water is not a small bare ion. It binds one " +
            "water molecule covalently into **H₃O⁺** (hydroxonium), " +
            "which adds about 712 kJ/mol to a total hydration energy " +
            "near 1100 kJ/mol, and a further shell is often written " +
            "H₉O₄⁺. What really sets it apart is how it moves: the " +
            "proton hops from molecule to molecule along chains of water " +
            "that are lined up - Grotthuss's 1806 mechanism, " +
            "rehabilitated - so protons travel two to four times faster " +
            "than ordinary ions, and hydroxyl does the same in reverse. " +
            "That is why H⁺ and OH⁻ dominate liquid-junction potentials, " +
            "as Section 6 will use.",
        },
      ],
    },
    {
      id: "activity-measurement",
      tone: "violet",
      title: "Measuring activity: the cell without transference",
      minutes: 6,
      summary:
        "Real solutions will not take the simple link to concentration, " +
        "so chemists measure activity itself. There are two routes: go " +
        "through the solvent, or go straight at the solute. One of them " +
        "uses the EMF gear of Lesson 2 on a cell with no liquid junction.",
      keyPoints: [
        "Activity a = f·c carries all the non-ideality; the chemical potential is μ = μ⁰ + RT ln a.",
        "Route one: measure the solvent (vapour pressure, freezing point) and convert with the Gibbs-Duhem equation. It works best in concentrated solutions.",
        "Route two: a cell without transference (e.g. Pt,H₂ | HCl(c₁) | calomel). Its EMF is a direct function of the mean ionic activity.",
        "Extrapolation: plot E with the concentration term added against √c. The intercept at c → 0 (where f± → 1) gives E⁰, and from there every f±.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section is about how you actually *get* an activity. " +
            "Lesson 2 used `a = f·c` and promised that the coefficient " +
            "would be dealt with later. Later is now. The shortest " +
            "answer uses the EMF apparatus you already own, as long as " +
            "the cell has no junction to spoil the reading.",
        },
        {
          kind: "para",
          text:
            "The need comes from thermodynamics, not from taste. The " +
            "chemical potential of a real component is `μ = μ⁰ + RT ln " +
            "a`, and putting `c` in its place quietly assumes `f = 1`. " +
            "For electrolytes that is false even in dilute solution. " +
            "There are two families of technique. **Solvent route:** " +
            "measure something about the solvent - the saturation vapour " +
            "pressure (tedious, and good only above roughly 0.1-0.5 M), " +
            "or the freezing-point depression and boiling-point " +
            "elevation (the temperature has to be read to about 0.0001 K, " +
            "and this is good to about 1 M) - then turn it into the " +
            "solute's activity with the Gibbs-Duhem equation,",
        },
        {
          kind: "formula",
          tex: String.raw`n_0\, d\ln a_0 + n_k\, d\ln a_k = 0`,
          caption:
            "Gibbs-Duhem for a two-component solution: the solvent's " +
            "activity gives the solute's, and the other way round. The " +
            "conversion is exact, and the only practical limit is how " +
            "well the solvent activity is known.",
        },
        {
          kind: "para",
          text:
            "**Solute route:** pick an equilibrium whose constants " +
            "depend on the solute's activity - distribution coefficients, " +
            "equilibrium constants, or EMFs - measure it at many " +
            "concentrations, and extrapolate to the limit where activity " +
            "and concentration coincide. The cleanest tool is a cell " +
            "without transference. For HCl that is the hydrogen " +
            "electrode against calomel: `Pt, H₂ | HCl(c₁) | Hg₂Cl₂·Hg, " +
            "Pt`. Its EMF is set by the acid's activity, `E = E⁰ − " +
            "(RT/F) ln a(HCl)`, and `a(HCl) = a±²` with `a± = f±·c₁` " +
            "for a 1:1 electrolyte, so the working line is",
        },
        {
          kind: "formula",
          tex: String.raw`E + \frac{2RT}{F}\ln c_1 = E^0 - \frac{2RT}{F}\ln f_\pm`,
          caption:
            "The extrapolation line. The left side is built from the " +
            "measured E and the known c₁. Plotted against √c₁ it falls " +
            "on a straight line in dilute solution, and its intercept at " +
            "c₁ → 0 (where ln f± → 0) is E⁰.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Why √c, not c",
          body:
            "Extrapolate against concentration and the data curve away " +
            "from the origin. Plot against **√c** and the dilute points " +
            "sit on a straight line that you can draw to the axis with " +
            "real confidence. The square-root variable is no whim: the " +
            "Debye-Hückel theory of Section 5 shows that the activity " +
            "coefficient really does vary as log f± ∝ √c in the dilute " +
            "limit. The habit and the theory agree.",
        },
      ],
    },
    {
      id: "activity-coefficients",
      tone: "rose",
      title: "Activity coefficients and ionic strength",
      minutes: 7,
      summary:
        "A map of how far real electrolytes stray: coefficients from 0.017 " +
        "up to nearly 1500. In the dilute region every electrolyte of the " +
        "same charge type behaves alike, and the one parameter that " +
        "organises the whole map is the ionic strength.",
      keyPoints: [
        "Mean ionic activity coefficients cover a huge range, from 0.0168 (2.5 m CdCl₂) to 1457 (5.5 m UO₂(ClO₄)₂).",
        "In dilute solution log f± is a straight line against √c, and curves of the same charge type lie on top of each other: which ions you use does not matter.",
        "The organising variable is the ionic strength, I = ½ Σ cⱼ zⱼ². In dilute solution the same I means the same f±.",
        "Physically, RT ln f is an interaction energy. Repulsion pushes f above 1 and attraction pulls it below; solvation sits in the standard state, not in the coefficient.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section maps what is out there: how far real " +
            "coefficients stray from 1, what structures the dilute end " +
            "of the map, and what the number f± actually *is*. The last " +
            "section showed how to measure a coefficient.",
        },
        {
          kind: "para",
          text:
            "Tabulated mean ionic activity coefficients look alarming " +
            "at first glance. The lowest among strong electrolytes is " +
            "about **0.0168** for 2.5 m CdCl₂, and the highest ever is " +
            "**1457** for 5.5 m UO₂(ClO₄)₂. Between those two every " +
            "shape turns up: a steady fall, a steady climb, and the " +
            "common pattern of a fall to a minimum and then a rise. " +
            "This is the world the simple ideal equation never suspects.",
        },
        {
          kind: "para",
          text:
            "Below that individual chaos, though, the dilute end is " +
            "oddly well ordered. Plot `log f±` against √c and the points " +
            "of *every* electrolyte of a given charge type land on one " +
            "line. At a fixed dilute concentration the coefficient " +
            "depends only on the charge type, never on which ions you " +
            "used. G. N. Lewis and Merle Randall (1923) found the " +
            "variable that explains it: the **ionic strength**, the " +
            "half-sum of `cⱼzⱼ²` over all ionic species,",
        },
        {
          kind: "formula",
          tex: String.raw`I_c = \tfrac{1}{2}\sum_j c_j z_j^2`,
          caption:
            "Ionic strength (mol/L). Only real ion concentrations " +
            "count, never undissociated molecules. For a 1:1 " +
            "electrolyte I ≡ cₖ; for 1:2 and 2:2 types it is 3cₖ and " +
            "4cₖ.",
        },
        {
          kind: "para",
          text:
            "Lewis and Randall's rule is the working skeleton of the " +
            "whole field: in dilute solution, the activity coefficient " +
            "of a given strong electrolyte is the same in *all* " +
            "solutions of the same ionic strength. Brønsted (1922) gave " +
            "it a formula, `−log f± = z₊z₋·h·√I` with a near-universal " +
            "`h ≈ 0.50 (L/mol)^½`. It is valuable because the same rule " +
            "then applies to mixtures of many components, where a " +
            "two-component coefficient would mean nothing.",
        },
        {
          kind: "para",
          text:
            "Now the physics. Write the chemical potential as `μ = μ⁰ " +
            "+ RT ln c + RT ln f`. The last term is the **interaction " +
            "energy** `w<sub>int</sub> = RT ln f`: the price of putting " +
            "a particle into a real solution that already has particles " +
            "in it. Repulsions make that price positive, so `f > 1`; " +
            "attractions lower it, so `f < 1`. Solvation, crucially, " +
            "does **not** belong here. An ion is solvated at every " +
            "concentration, so its solvation energy goes into the " +
            "standard chemical potential `μ⁰` and never shows up in the " +
            "coefficient. What `f±` reports, then, is first and " +
            "foremost the **electrostatic push and pull between ions**. " +
            "That is why dilute coefficients are all below 1 " +
            "(attraction wins at short range), and why they climb again " +
            "only when solvation itself starts changing at high " +
            "concentration.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Molality vs molarity in the tables",
          body:
            "Handbook tables give coefficients against **molality** - " +
            "moles per kilogram of solvent - precisely because it does " +
            "not drift with temperature and volume the way molarity " +
            "does. The two differ by the density of the solution, and " +
            "in thermodynamic derivations the molal scale keeps the " +
            "standard state clean. When you copy a number into a Nernst " +
            "expression, know which scale it came from.",
        },
      ],
    },
    {
      id: "debye-huckel",
      tone: "coral",
      title: "Ion-ion interaction and the Debye-Hückel law",
      minutes: 7,
      summary:
        "The story behind the coefficients: every ion wears a cloud of " +
        "opposite charge, the ionic atmosphere, and the size of that cloud " +
        "- the Debye length - controls everything. From it comes the first " +
        "law of physical chemistry derived from first principles: log f± " +
        "∝ −|z₊z₋|√I.",
      keyPoints: [
        "Every ion is wrapped in an ionic atmosphere: a spread-out excess of opposite charge that cancels the ion's own. It exists only in the ion's own moving frame.",
        "The thickness of the atmosphere is the Debye length r_D = 1/κ, about 0.3, 3 and 30 nm at I = 1, 10⁻² and 10⁻⁴ M.",
        "The Debye-Hückel limiting law, log f± = −D|z₊z₋|√I with D = 0.51 in water at 25 °C, holds for 1:1 salts up to about 10⁻² M.",
        "Giving ions a real size (the 1 + aB√I denominator) and adding a linear salt term extend the fit. The atmosphere also drags on conductivity (electrophoretic and relaxation effects), and ion pairs take over at high concentration.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section supplies the mechanism behind the " +
            "square-root law. The empirical law of Brønsted and " +
            "Kohlrausch hung over the last two sections unexplained. In " +
            "1923 Peter Debye and Erich Hückel combined electrostatics " +
            "and statistics and got the first quantitative equation of " +
            "state for a real system with no adjustable constants - the " +
            "landmark of the whole theory of solutions.",
        },
        {
          kind: "para",
          text:
            "Here is the picture. Pick one ion and call it the central " +
            "one. Around it, electrostatic forces and thermal motion " +
            "settle into a compromise: on average, an excess of " +
            "oppositely charged ions clouds the neighbourhood. That " +
            "cloud, the **ionic atmosphere**, carries a charge exactly " +
            "equal and opposite to the central ion's, smeared out over " +
            "a blurred, time-averaged volume. Its key measure is the " +
            "**Debye length** `r_D`, the thickness that would hold all " +
            "that opposite charge on one shell:",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{1}{\kappa} = r_D =
            \left(\frac{\varepsilon_0\varepsilon k_B T}{2N_A e_0^2 I}\right)^{1/2}
            \approx \frac{0.304\ \text{nm}}{\sqrt{I/(\text{mol L}^{-1})}}`,
          caption:
            "Debye length. It depends on ionic strength as an inverse " +
            "square root: 0.3 nm at I = 1 M, 3 nm at 10⁻² M, 30 nm at " +
            "10⁻⁴ M. In a very dilute solution the atmosphere is " +
            "enormous on the molecular scale.",
        },
        {
          kind: "para",
          text:
            "From the atmosphere's potential at the central ion, Debye " +
            "and Hückel calculated the electrostatic interaction " +
            "energy `w<sub>e</sub>` and from it the coefficient. The " +
            "result for the mean ionic activity coefficient is the " +
            "**Debye-Hückel limiting law**,",
        },
        {
          kind: "formula",
          tex: String.raw`\log f_\pm = -D\,|z_+ z_-|\,\sqrt{I_c},
            \qquad D = 0.51\ (\text{L mol}^{-1})^{1/2} \text{ at } 25\,^{\circ}\text{C in water}`,
          caption:
            "The limiting law. It reproduces Brønsted's h and explains " +
            "why curves of a charge type coincide. The historical " +
            "triumph is that it came from molecular models with no " +
            "fitted constants. Its range is stark: about 10⁻² M for 1:1 " +
            "salts, and less for higher charge types.",
        },
        {
          kind: "para",
          text:
            "The theory grew by relaxing its own assumptions. The " +
            "**first approximation** treated ions as point charges. " +
            "The **second** gave ions a finite size `a`, which moves " +
            "the adjustable constant into a denominator `1 + aB√I`. " +
            "Fit `a ≈ 0.3-0.4 nm` (a softened, semi-empirical distance " +
            "of closest approach) and the data hold to about 0.1 M. " +
            "The **third** adds a linear term `bI` that copies the " +
            "salting behaviour of nonelectrolytes, with `b ≈ " +
            "0.1|z₊z₋|` L/mol; NaCl then obeys the equation up to 4 M. " +
            "Extensions built around hydration - which binds a lot of " +
            "solvent at high concentration - keep the programme going.",
        },
        {
          kind: "para",
          text:
            "The same atmosphere explains Kohlrausch's conductivity " +
            "slope. An ion moving in a field drags against two " +
            "mechanisms, and both punish it. The **electrophoretic " +
            "effect**: the atmosphere carries the opposite charge, moves " +
            "the other way, and tows the solvent with it - a brake that " +
            "Stokes's law puts a number on (about 60-70% of the loss). " +
            "The **relaxation effect**, worked out rigorously by " +
            "Onsager (1927): the cloud needs a finite time " +
            "`t<sub>rel</sub>` to rebuild, so it lags behind the moving " +
            "ion, stops being spherical, and the displaced charge pulls " +
            "back on the ion (the rest of the loss). The square-root law " +
            "is the sum of the two. Extreme conditions break the cloud " +
            "up: very large fields (>10⁶-10⁷ V/m, the Wien effect) and " +
            "very high frequencies (>1 MHz, the Debye-Falkenhagen " +
            "dispersion) let the ion outrun its own atmosphere, and " +
            "`Λ` climbs back towards `Λ₀`.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Ion pairs: what takes over at high concentration",
          body:
            "At short range the attraction can beat thermal motion " +
            "completely: two ions of opposite sign start to travel " +
            "together, held by plain electrostatics and no chemical " +
            "bond. Bjerrum (1926) put the turning point at `r_cr = " +
            "|z₊z₋| · 0.357 nm` in water at 25 °C: an ion pair forms " +
            "when the closest-approach distance is smaller than that. " +
            "Pairs cut the free-ion count, lower conductivity and " +
            "transport numbers, grow with concentration, and explode in " +
            "nonaqueous media with low permittivity - exactly the " +
            "anomalies of Section 8.",
        },
      ],
    },
    {
      id: "diffusion-potentials",
      tone: "amber",
      title: "Liquid junctions and diffusion potentials",
      minutes: 6,
      summary:
        "Where two different solutions meet, ions that diffuse at " +
        "different speeds pull the junction apart electrically. The " +
        "diffusion potential that results is small when the ions are well " +
        "matched, big with H⁺ and OH⁻, and easy to suppress with a " +
        "saturated KCl salt bridge.",
      keyPoints: [
        "A stable boundary between two electrolytes needs some mechanical help (a solid, immiscible layers, or a porous diaphragm). The main class is the 'liquid junction'.",
        "In the transition layer the ions' different mobilities separate the charge and build a diffusion potential φd of a millivolt to tens of millivolts.",
        "H⁺ and OH⁻ dominate: their mobility is several times that of ordinary ions, giving junction potentials such as -33 mV for an HCl concentration cell, with the concentrated side negative.",
        "To suppress it: salts whose ion mobilities match (KCl, NH₄NO₃) at high concentration, such as the classic saturated-KCl salt bridge. The leftovers still defeat precise thermodynamics.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section opens the box that Lesson 2 left shut. " +
            "Lesson 2 met the liquid junction as a source of noise - a " +
            "`φᵍ(E₂,E₁)` term inside the OCV that had to be subtracted. " +
            "Here is what physically happens at the boundary between " +
            "two different electrolyte solutions, and how big the " +
            "potential it produces is.",
        },
        {
          kind: "para",
          text:
            "Two liquids that mix pressed together start to blend, and " +
            "the boundary disappears. To keep a boundary alive you have " +
            "to protect it: make one phase solid, layer immiscible " +
            "liquids on top of each other by density, or separate the " +
            "solutions with a **porous diaphragm** that blocks " +
            "convection but still lets ions migrate. Three kinds of " +
            "boundary matter: between *similar* electrolytes (same " +
            "solvent, different composition - the classical **liquid " +
            "junction**), between *different but mutually soluble* " +
            "media, and between *immiscible* liquids. This section " +
            "takes the first; the second leads into membranes next.",
        },
        {
          kind: "para",
          text:
            "At such a junction a transition layer forms. Each ion's " +
            "concentration shades from its value on one side to its " +
            "value on the other, and the ions diffuse through that " +
            "layer - at *different* speeds, because mobilities and " +
            "diffusion coefficients differ from ion to ion. The fast " +
            "ions outrun the slow ones, charge separates, and an " +
            "electric field springs up to hold them together. That " +
            "field, added up across the layer, is the **diffusion " +
            "potential** `φ_d = ψ(β) − ψ(α)`. The theory is old and " +
            "well respected: Nernst's equation (1888), Planck's (1890), " +
            "and the general multi-component form of Henderson (1907). " +
            "For two two-component solutions that share a common ion, " +
            "the result collapses to the Lewis-Sargent form,",
        },
        {
          kind: "formula",
          tex: String.raw`\varphi_d = \frac{RT}{zF}\ln\frac{u_{K^+}+u_{A^-}}{u_{M^+}+u_{A^-}}`,
          caption:
            "Lewis-Sargent diffusion potential for two 1:1 " +
            "electrolytes, KA and MA, that share the anion A⁻. The " +
            "potential is a logarithm of a mobility ratio: it depends " +
            "entirely on how well the ions keep pace with one another.",
        },
        {
          kind: "para",
          text:
            "The sizes are the lesson. With ordinary ions whose " +
            "diffusion coefficients are similar, the diffusion " +
            "potential stays under about **10 mV**: 1.3 mV for NaCl | " +
            "LiCl, and a few millivolts for KCl | NaCl. The moment H⁺ " +
            "or OH⁻ join in, everything scales up. Their mobilities are " +
            "several times those of other ions, so junction potentials " +
            "jump to tens of millivolts: about 26 mV measured for a " +
            "0.1 M HCl | 0.1 M KCl boundary, and −33 mV for an HCl " +
            "concentration cell, where **the side with the more " +
            "concentrated HCl charges negative** (OH⁻ systems reverse " +
            "the sign). Calculations of exactly this kind, checked " +
            "against the measured values, are how the whole structure " +
            "is validated.",
        },
        {
          kind: "para",
          text:
            "Engineers then set about suppressing the noise. Salts " +
            "whose anion and cation mobilities are nearly equal - " +
            "**KCl** and **NH₄NO₃** - add almost nothing at a " +
            "boundary, and the more concentrated they are, the more " +
            "their ions take over the transition layer and the smaller " +
            "the foreign potential. The classic device puts a third " +
            "solution in the way, **saturated KCl (about 4.2 M)**: the " +
            "salt bridge. When both outer solutions are acids (or both " +
            "are bases), the two leftover junction potentials point " +
            "opposite ways and mostly cancel. That is plenty for " +
            "everyday measurement, and explicitly **not** enough for " +
            "the precisely corrected OCV values that a thermodynamic " +
            "calculation demands. That is exactly why the purest " +
            "measurements use cells without transference, as in " +
            "Section 3.",
        },
      ],
    },
    {
      id: "membranes-donnan",
      tone: "emerald",
      title: "Membranes, Donnan potentials and transference cells",
      minutes: 6,
      summary:
        "Put a selective wall into a solution boundary and you get a " +
        "membrane potential. It is the same physics as a diffusion " +
        "potential, now held at equilibrium. Donnan's 1911 law fixes how " +
        "the ions spread out, and cells with transference show the " +
        "potential sitting inside the measured OCV.",
      keyPoints: [
        "A membrane is a thin layer between two liquids that conducts ions and lets some species through but not others. A fully selective one is permselective.",
        "The membrane (transmembrane) potential is two jumps in Galvani potential at the interfaces plus a diffusion potential inside the membrane.",
        "Donnan equilibria (1911): for ions the membrane lets through, the concentrations spread out as c(α)/c(β) = λ^z, giving a measurable Donnan potential (RT/F) ln(c(α)/c(β)) per unit charge.",
        "Cells with transference carry their junction term in the open: OCV = E* + φ(E). Once they truly equilibrate, symmetric cells read zero.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section installs a filter and lets equilibrium settle. " +
            "The last section dealt with boundaries where everything " +
            "passes through and nothing is at equilibrium. Here we put a " +
            "membrane in the way and ask what happens to the potential " +
            "once equilibrium is *allowed* to settle. The answer, worked " +
            "out by Donnan, is one of the cornerstones of both biology " +
            "and electrochemistry.",
        },
        {
          kind: "para",
          text:
            "A **membrane** is a thin layer that conducts ions - " +
            "usually solid, sometimes a liquid - and separates two " +
            "similar liquid phases. It is selective: some species cross " +
            "and some do not. A membrane that is fully selective is " +
            "**permselective**. (A layer that lets every component " +
            "through equally is just a **diaphragm**.) Where the outer " +
            "phases differ in composition, the membrane slows down the " +
            "full mixing, and a potential difference appears between " +
            "points on either side: the **membrane (or transmembrane) " +
            "potential** `φ_m = ψ(β) − ψ(α)`. It has three parts: the " +
            "Galvani jumps across the two membrane interfaces, plus a " +
            "diffusion potential `φ_d` inside the membrane while " +
            "equilibrium is still forming. Because the outer phases are " +
            "similar, this is one of the few electrolyte-interface " +
            "potentials you can measure directly.",
        },
        {
          kind: "para",
          text:
            "When equilibrium is reached, every ion that can cross " +
            "obeys the same distribution law. For similar outer phases " +
            "the standard chemical potentials cancel, `κⱼ = 1`, and " +
            "Donnan's law (1911) fixes the ratios of the concentrations " +
            "of the ions the membrane lets through: `cⱼ(α)/cⱼ(β) = " +
            "λ^z`, with one common constant `λ` for all of them. The " +
            "matching potential is the **Donnan potential**,",
        },
        {
          kind: "formula",
          tex: String.raw`\varphi_m = \frac{RT}{F}\ln\frac{c_j^{(\alpha)}}{c_j^{(\beta)}}`,
          caption:
            "Donnan potential for a membrane between similar phases. " +
            "The electrochemical potential of each ion that can cross " +
            "must be the same on both sides; that one condition sets " +
            "this single potential at equilibrium for every such ion, " +
            "in exact analogy with the electrode potential of a " +
            "permeable membrane electrode.",
        },
        {
          kind: "para",
          text:
            "A worked picture makes it concrete. Take a membrane that " +
            "passes cations and blocks anions completely, between " +
            "solutions of MA and KA. The membrane must hold fixed " +
            "negative charges of its own to stay neutral, and those " +
            "fixed charges force electroneutrality on each neighbouring " +
            "layer: the positive-ion concentration in each outer phase " +
            "simply mirrors its own load of fixed anions. The ratio of " +
            "cations between the two phases then sets the membrane " +
            "potential directly. The same algebra, applied to the " +
            "*membrane surfaces* in chemical equilibrium with the " +
            "solutions next to them, handles the off-equilibrium " +
            "**quasiequilibrium** cells used in practice, where each " +
            "surface layer is equilibrated but the inside of the " +
            "membrane is not.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Where the membrane term shows up in a cell",
          body:
            "A cell built as `M | (α) ¦ (β) | M`, with an electrode " +
            "that is reversible to an ion present in both electrolytes, " +
            "is a **cell with transference**. Its OCV carries its " +
            "junction out in the open: `OCV = E* + φ(E)`, the sum of " +
            "the corrected electrode difference and the " +
            "electrolyte-interface term. Let such a cell equilibrate " +
            "and the story closes itself. The interface disappears " +
            "(symmetric cell), or the junction term exactly cancels the " +
            "electrode difference (different but mutually soluble), and " +
            "the OCV returns to zero: no net chemistry, no net Gibbs " +
            "change. Nonequilibrium and quasiequilibrium cells keep a " +
            "nonzero reading, which is precisely Lesson 2's warning in " +
            "another costume - a quiet voltmeter is not proof of " +
            "equilibrium.",
        },
      ],
    },
    {
      id: "nonaqueous-solvents",
      tone: "teal",
      title: "Solvents beyond water",
      minutes: 7,
      summary:
        "Water is wonderful until the process runs too hot, an alkali " +
        "metal drops in, or a device has to be sealed. Then organic " +
        "solvents, nonaqueous solutions and the chemistries built around " +
        "lithium take over, each with its own rules and its own oddities.",
      keyPoints: [
        "Nonaqueous electrolytes exist because water fails: processes above 180-200 °C, alkali-metal electrodes (lithium batteries), and sealed or tiny devices.",
        "Solvents come in three grades: protic (protolytic, ε ≳ 20), aprotic polar (ε > 15), and aprotic low-polarity (ε < 15, useless for salts).",
        "Higher polarity usually means better splitting - but not always. HCN beats water on dipole moment and is worse; HCl is strong in ethanol but weak in nitrobenzene, which has nearly the same ε.",
        "Walden's rule, u⁰·η ≈ const, holds for ions that are hardly solvated. In low-ε solvents, ion pairing distorts conductance curves and even transport numbers.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section asks what to do when water is not available. " +
            "So far everything has lived in water. Water may be too " +
            "hot, too reactive or too leaky. Here is a map of the " +
            "solvents that take its place, the rules that govern them, " +
            "and the lithium technology they made possible.",
        },
        {
          kind: "para",
          text:
            "Water's failures are few and decisive. **Temperature:** " +
            "electrolytic processes above about 180-200 °C find water " +
            "useless, and aluminium is won electrolytically near 1000 " +
            "°C. **Alkali metals:** lithium and its neighbours react " +
            "with water, so any battery with a lithium negative " +
            "electrode needs another medium. **Sealing and " +
            "miniaturisation:** a sealed device cannot shrug off " +
            "electrolyte leakage, evaporation (which drifts the " +
            "concentration), or the corrosive spray of a cell that " +
            "evolves gas. Each failure opened a market for the " +
            "alternatives this section catalogues.",
        },
        {
          kind: "para",
          text:
            "The solvent list is sorted by the two properties that make " +
            "water what it is: high polarity `ε = 78.5`, and acid-base " +
            "reactivity. **Protic** solvents (water, liquid ammonia, " +
            "methanol, acetic acid) have both. They are polar, they " +
            "solvate strongly, and they can act as acid-base agents " +
            "through autoprotolysis, `2SH ⇌ SH₂⁺ + S⁻`, which gives " +
            "the lyonium and lyate partners of H₃O⁺ and OH⁻. " +
            "**Aprotic polar** solvents (acetonitrile, ε ≈ 36; " +
            "propylene carbonate, ε ≈ 66; dimethylformamide) are polar " +
            "but do not give up protons, and they keep alkali metals " +
            "stable. **Aprotic low-polarity** solvents (ε < 15, e.g. " +
            "hydrocarbons) barely dissolve or split salts, and they do " +
            "not matter for electrochemistry.",
        },
        {
          kind: "formula",
          tex: String.raw`2\,\mathrm{SH} \rightleftharpoons \mathrm{SH}_2^+ + \mathrm{S}^-`,
          caption:
            "Autoprotolysis of a protic solvent. The lyonium cation " +
            "and lyate anion play the parts that hydronium and " +
            "hydroxyl play in water. How far the solvent splits still " +
            "sets the acid-base equilibria in that medium.",
        },
        {
          kind: "para",
          text:
            "The rule of thumb - the higher ε, the better the " +
            "splitting - was known by the 1890s, and it is broken in " +
            "instructive ways. Hydrocyanic acid beats water on dipole " +
            "moment (1.5×) yet dissolves most salts *worse*, because " +
            "rearranging the solvent around an ion costs more there. " +
            "And splitting is not about polarity alone. HCl is close " +
            "to a strong electrolyte in ethanol, thanks to the " +
            "solvent's power to accept protons, but it is a *weak* " +
            "electrolyte in nitrobenzene, which has nearly the same ε " +
            "and accepts protons poorly. The solvent is a chemical " +
            "partner, not just a dielectric constant.",
        },
        {
          kind: "para",
          text:
            "Ionic transport follows Walden's rule (1905-1906): the " +
            "product of an ion's limiting mobility and the solvent's " +
            "viscosity is roughly constant, `u⁰ⱼ·η ≈ const`, which is " +
            "Stokes's law in different clothes. It holds cleanly for " +
            "large, poorly solvated ions such as N(C₂H₅)₄⁺, and for " +
            "temperature sweeps in one solvent. It breaks whenever ions " +
            "solvate differently and so change their effective radii. " +
            "And the oddities breed. In low-ε solvents, ion-pair and " +
            "triplet equilibria can send the curve of molar " +
            "conductivity against concentration through maxima and " +
            "minima (AgNO₃ in pyridine is the textbook figure), and " +
            "ionic transport numbers may wander outside [0, 1]. Every " +
            "one of these curiosities traces back to the ionic " +
            "atmospheres and ion pairs of Section 5, only now without " +
            "water's damping.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The lithium battery's quiet enabler",
          body:
            "In an aprotic solvent lithium does not corrode, because " +
            "there are no protons to give up as hydrogen. So a lithium " +
            "negative electrode can store its enormous energy instead " +
            "of losing it to the solvent. Simple salts barely dissolve " +
            "there, so practical electrolytes use large anions that " +
            "cling loosely: LiClO₄, LiAlCl₄ and LiAsF₆ reach " +
            "solubilities of 1-2 M and sit at the heart of modern " +
            "batteries. Lesson 14 returns with the engineering.",
        },
      ],
    },
    {
      id: "melts-solids",
      tone: "slate",
      title: "Melts and solid electrolytes",
      minutes: 7,
      summary:
        "The last of the electrolyte gallery: molten salts with 25 M of " +
        "free ions that conduct by hopping through holes, and solids where " +
        "ions crawl through point defects, up to the superionic " +
        "conductors that carry one-way current in batteries.",
      keyPoints: [
        "Molten salts are solutions of pure ions at about 25 M. Ionic melts conduct past 100 S/m; covalent melts (AlCl₃, TiCl₄) stay below 0.1 S/m.",
        "Conduction in a melt is a hop into a neighbouring hole, driven by heat (Arrhenius). Diffusion stays near 10⁻⁵ cm²/s, so the Nernst link between mobility and diffusion fails.",
        "Solid electrolytes conduct through point defects - Frenkel (1926) and Schottky (1929) defects, helped along by vacancies from impurities. Pure crystals are poor conductors.",
        "Superionic conductors (α-AgI, RbAg₄I₅, β-alumina) run a disordered cation 'fluid' through a rigid anion lattice, often with strictly one-way conduction. That is the trick behind the sodium-sulfur battery.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "This section covers two media at the extremes: one with " +
            "*no* solvent at all, and one that is not even a liquid. " +
            "After the solvents, a molten salt and a solid electrolyte " +
            "remain. Both are ordinary engineering, and both get their " +
            "conduction from mechanisms the water world never needed.",
        },
        {
          kind: "para",
          text:
            "A **molten salt** is the cleanest idea of an electrolyte. " +
            "Heat an ionic crystal until its lattice melts and you have " +
            "a liquid of free ions at a concentration near **25 M**. " +
            "Conductivity jumps the moment it melts, sometimes past " +
            "100 S/m, higher than the best aqueous solutions. Not every " +
            "melt qualifies: covalent crystals such as AlCl₃ or TiCl₄ " +
            "melt without splitting and stay below 0.1 S/m. The melts " +
            "that matter in practice are halides, nitrates and " +
            "carbonates, melted on their own or as mixtures that pull " +
            "the melting point down to its lowest. They carry the " +
            "high-temperature processes - aluminium and the alkali " +
            "metals - that water forbids.",
        },
        {
          kind: "para",
          text:
            "How does a liquid of ions conduct? Melting swells the " +
            "volume by 10-20% without making the ions any bigger, so " +
            "the liquid is full of **holes**, roughly one to two " +
            "interionic distances across, born and dying by thermal " +
            "jiggling. Conduction is a relay: an ion hops into a " +
            "neighbouring hole, leaving a hole behind for the next ion, " +
            "and so on. Every hop has a barrier to get over, so " +
            "conductivity is driven by heat,",
        },
        {
          kind: "formula",
          tex: String.raw`\sigma = B\,\exp\!\left(-\frac{A_\sigma}{RT}\right)`,
          caption:
            "Arrhenius temperature law for conduction in melts and " +
            "solid electrolytes. Activation energies in melts run " +
            "about 5-20 kJ/mol. The same law governs defect-dominated " +
            "solids, with much larger A_σ.",
        },
        {
          kind: "para",
          text:
            "Some melt facts that surprise anyone used to aqueous " +
            "solution: ionic *mobilities* are low, because the crowd of " +
            "neighbours gets in the way, yet diffusion coefficients " +
            "match the aqueous ~10⁻⁵ cm²/s, so the Nernst link between " +
            "mobility and diffusion simply fails. Uncharged ion pairs " +
            "diffuse without carrying any current. Because the whole " +
            "liquid is packed with ions of similar size, the distances " +
            "between ions barely change from melt to melt, so activity " +
            "differences stay small. And because everything is hot, " +
            "reactions are fast - exchange currents of 10³-10⁴ mA/cm² " +
            "- so melts are ruled by thermodynamics rather than " +
            "kinetics. The practical costs show up elsewhere: melts are " +
            "corrosive, deposited metals react with them (`Ca + CaCl₂ " +
            "→ 2CaCl`, draining the current yield), and poorly wetting " +
            "anodes collect a skin of gas that sparks dramatically in " +
            "the *anode effect*.",
        },
        {
          kind: "para",
          text:
            "At the other pole, **solid electrolytes** conduct while " +
            "frozen. Faraday caught a glimpse of it in 1833; Tubandt " +
            "and Ioffe mapped it over the following century. The " +
            "carriers are lattice **point defects**: an ion missing " +
            "from its site (a **Schottky defect**, an entirely removed " +
            "pair) or squeezed into an in-between position (a " +
            "**Frenkel defect**), both in thermal balance with the " +
            "lattice. Conduction is the relay of ions hopping into " +
            "vacancies. Purity matters, because impurity ions of a " +
            "foreign charge force vacancies to balance them. Pure " +
            "crystals are miserable conductors (10⁻¹²-10⁻⁴ S/cm), and " +
            "they climb steeply with temperature and with dopant. The " +
            "classic *ionic semiconductors* are AgBr and PbCl₂, each " +
            "with a cation transport number close to 1, and zirconia " +
            "`ZrO₂·Y₂O₃`, a pure O²⁻ conductor that reaches about " +
            "0.012 S/cm at 1000 °C - the working muscle of the oxygen " +
            "sensor.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Superionic conductors",
          body:
            "A few structures blow up the defect economics. Silver " +
            "iodide passes through a phase transition at 147 °C into " +
            "α-AgI and its conductivity jumps four orders of magnitude " +
            "(10⁻⁴ → 1 S/cm). In the champion RbAg₄I₅ the easy " +
            "conduction starts at −155 °C and survives past 200 °C, " +
            "giving 26 S/m at room temperature - equal to 7% KOH " +
            "solution. The mechanism is the same everywhere: a " +
            "**rigid, immobile anion sublattice** carrying a " +
            "**disordered mobile cation sublattice**, a half-melted " +
            "'cation fluid' in which almost every site is an " +
            "acceptable home. β-alumina (Na₂O·nAl₂O₃) is the sodium " +
            "member: 0.5 S/m at 25 °C, 10 S/m at 300 °C, and strictly " +
            "one-way - current that never changes the electrolyte's " +
            "composition.",
        },
        {
          kind: "para",
          text:
            "One-way conduction is the crown jewel. A liquid " +
            "electrolyte always carries current with both signs of " +
            "ion, piling concentration changes up at the electrodes " +
            "that a sealed device has to swallow. A solid whose only " +
            "mobile carrier is, say, Na⁺ never moves anything else. If " +
            "Na⁺ is exactly the ion the electrode chemistry uses up, " +
            "current flows with no change in composition at all. That " +
            "symmetry is what the **sodium-sulfur battery** exploits: " +
            "β-alumina at about 300 °C, sodium oxidised at one " +
            "electrode, sulfur reduced at the other, and the " +
            "electrolyte untouched. It is also why solid electrolytes, " +
            "rather than exotic liquids, power some of the boldest " +
            "storage devices ever built.",
        },
      ],
      cta: {
        title: "The medium mapped",
        body:
          "Lesson 3 opened the black box that Lesson 2 sealed shut. " +
          "Electrolytes split apart, get wrapped in solvent and push on " +
          "each other, and every departure from ideal solution " +
          "behaviour now has a name and a theory. Lesson 4 moves from " +
          "what the solution *is* to what it *does under load*: mass " +
          "transfer and limiting currents, the Fick and Nernst-Planck " +
          "laws, and why a supporting electrolyte tames migration. Test " +
          "yourself on this lesson's bank first.",
        href: "/lessons/lesson-3/quiz",
        linkLabel: "Take the Lesson 3 questions",
        secondaryHref: "/lessons/lesson-2",
        secondaryLabel: "Recheck Lesson 2",
      },
    },
  ],
};
