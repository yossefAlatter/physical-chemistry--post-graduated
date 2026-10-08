// Lesson 11 - Impedance.
//
// Source syllabus: Bard & Faulkner ch.10. The chapter sets the coverage and
// the numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson11Mcq } from "./lesson-11.mcq";

export const lesson11: Lesson = {
  slug: "lesson-11",
  label: "Lesson 11",
  title: "Electrochemical impedance spectroscopy",
  summary:
    "Every earlier method pushed the cell hard and watched what happened. " +
    "Impedance spectroscopy pushes it very gently: a small alternating " +
    "voltage at one frequency, the resulting current's amplitude and phase " +
    "lag. Sweep that frequency and the cell's complex impedance traces a " +
    "curve. From one such curve you read the solution resistance, the " +
    "double-layer capacitance, the charge-transfer resistance, and whether " +
    "species are diffusing. That curve, and how to read it, is this " +
    "lesson.",
  order: 11,
  minutes: 55,
  mcq: lesson11Mcq,
  intro: [
    {
      kind: "para",
      text:
        "Large perturbations are useful, but they change the cell: " +
        "kinetics leave their linear range, concentrations drift, and the " +
        "answer mixes several processes. Electrochemical impedance " +
        "spectroscopy (EIS) does the opposite. Apply a small alternating " +
        "voltage, just a few millivolts, so the cell responds " +
        "linearly - and ask not one question but a whole family of them, " +
        "one for each frequency.",
    },
    {
      kind: "para",
      text:
        "A small signal still sees the same structure: the solution " +
        "resistor, the double-layer capacitor, the charge-transfer " +
        "resistor, and the diffusion of reactants. But each of those " +
        "elements answers a different way at a different frequency, so " +
        "sweeping the frequency separates what a DC measurement " +
        "crumples together. Following Bard & Faulkner ch.10 we build " +
        "that picture from the small-signal response of an electrode, " +
        "through equivalent circuits, to the Nyquist and Bode plots in " +
        "which real cells are reported.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "A tiny AC voltage, swept across frequency, makes the cell's " +
        "resistances and capacitances each speak at their own frequency; " +
        "the resulting impedance spectrum reads the interfacial processes " +
        "one by one.",
    },
  ],
  sections: [
    {
      id: "why-small-signal-ac",
      tone: "azure",
      title: "Why small signals, why AC",
      minutes: 6,
      summary:
        "A large push mixes the cell's processes together and leaves its " +
        "linear regime. A small alternating push keeps the response " +
        "linear and frequency-dependent - and frequency is the lever " +
        "that pulls the processes apart.",
      keyPoints: [
        "A small perturbation keeps the current-voltage relation locally linear, so the response is a clean single frequency.",
        "Different interfacial processes relax at different speeds, and therefore dominate the response at different frequencies.",
        "The measured quantity is a complex impedance: a magnitude and a phase lag at each frequency.",
        "The frequency of the response always equals the frequency of the perturbation; only the amplitude and phase carry information.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A DC measurement asks: if I hold this and wait, what happens? " +
            "Sometimes that is exactly what you want. But a real " +
            "electrode is a stack of processes - charge crossing, double " +
            "layer charging, ions diffusing - and a steady current feeds " +
            "them all at once. AC does the separation for you. Apply a " +
            "small sinusoidal voltage and measure the current that comes " +
            "back: it is sinusoidal at the same frequency, with an " +
            "amplitude and a phase that depend on the processes in the " +
            "cell.",
        },
        {
          kind: "para",
          text:
            "Why *small*? Because the current-voltage relation of an " +
            "electrode is exponential, and exponential curves are only " +
            "straight when you look at a tiny window. Wiggle a few " +
            "millivolts around a working point and the response is " +
            "linear - double the input and you double the output. " +
            "Wiggle a volt and the output stops being proportional and " +
            "starts picking up higher harmonics, which is a sign that " +
            "the assumption has broken.",
        },
        {
          kind: "para",
          text:
            "Why a *range* of frequencies? Because each process in the " +
            "cell has a natural relaxation speed. The double-layer " +
            "capacitor charges and discharges quickly; diffusion across " +
            "the boundary layer is slow. At high frequencies only the " +
            "fast processes have time to respond within a cycle; at low " +
            "frequencies even the slow ones keep up. The spectrum is the " +
            "same cell photographed at different shutter speeds.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Frequency is the scalpel",
          body:
            "A DC measurement folds the whole cell into one number. An " +
            "AC spectrum at many frequencies unfolds it: each process " +
            "appears where its relaxation rate says it should.",
        },
      ],
    },
    {
      id: "complex-impedance",
      tone: "indigo",
      title: "Impedance: magnitude and phase",
      minutes: 8,
      summary:
        "A resistor answers in phase with the voltage; a capacitor " +
        "answers with the current leading by 90°. Their combination is " +
        "a complex number at each frequency - the impedance Z(ω).",
      keyPoints: [
        "For a sinusoidal voltage E = E0 sin(ωt), the current is I = I0 sin(ωt + φ), and the impedance is Z = E/I, a complex quantity.",
        "A pure resistor has a purely real, frequency-independent impedance; a pure capacitor has Z = 1/(jωC), purely imaginary and shrinking with frequency.",
        "The real part of Z is the resistance-like response in phase with the voltage; the imaginary part is the reactive, 90°-shifted part.",
        "Impedances in series add; in parallel, their reciprocals add - the same rules as resistors, applied to complex numbers.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Ohm's law for a steady state is simply R = V/I. For an " +
            "alternating signal the current may not follow the voltage " +
            "in step: a capacitor takes a moment to charge, so its " +
            "current leads its voltage by a quarter cycle. To keep the " +
            "analogue of Ohm's law honest, we let the ratio itself " +
            "become a complex number:",
        },
        {
          kind: "formula",
          tex: String.raw`E(t) = E_0 \sin(\omega t), \qquad I(t) = I_0 \sin(\omega t + \phi), \qquad Z(\omega) = \frac{E_0}{I_0} e^{-j\phi} = Z' + j Z''`,
          caption:
            "Voltage, current and impedance for a small sinusoidal " +
            "perturbation. `Z` has a real part Z' (in-phase, " +
            "resistance-like) and an imaginary part Z'' (90° out of " +
            "phase, capacitive or inductive).",
        },
        {
          kind: "para",
          text:
            "A resistor ignores this: it is V = IR at every instant, " +
            "so its impedance is just R, real and constant. A capacitor " +
            "is the opposite extreme: current flows only as the charge " +
            "on it changes, and I = C dV/dt, so for a sine wave the " +
            "current leads the voltage by exactly 90° and its " +
            "impedance carries a factor 1/ω:",
        },
        {
          kind: "formula",
          tex: String.raw`Z_R = R, \qquad Z_C = \frac{1}{j\omega C}, \qquad |Z_C| = \frac{1}{\omega C}`,
          caption:
            "The two building blocks. The capacitor's opposition to " +
            "current shrinks linearly with frequency - at high enough " +
            "frequency it is practically a wire, and at DC a wall.",
        },
        {
          kind: "para",
          text:
            "Series and parallel combinations work just like DC " +
            "resistors, except you add the complex values. That one " +
            "rule is enough to build every circuit model in electrochemistry.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "j is the 90° shifter",
          body:
            "Multiplication by j rotates a phasor by a quarter turn. " +
            "So the capacitor's 1/j is exactly its 90° current lead, and " +
            "the sign of Z'' tells you whether the element is behaving " +
            "like a capacitor (negative Z'' on the usual plot " +
            "convention) or an inductor.",
        },
      ],
    },
    {
      id: "equivalent-circuit",
      tone: "violet",
      title: "The electrode as a circuit",
      minutes: 8,
      summary:
        "A working electrode can be drawn as resistors and capacitors: " +
        "solution resistance in series, then the parallel combination " +
        "of double-layer capacitance and the faradaic branch.",
      keyPoints: [
        "The uncompensated solution resistance Rs sits in series with everything the interface does.",
        "At the interface, the double layer acts as a capacitance Cdl in parallel with the faradaic impedance.",
        "The faradaic branch is the charge-transfer resistance Rct in series with the Warburg diffusion impedance.",
        "The Randles cell is the canonical minimal circuit for a redox electrode in solution.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "An electrode in solution is not one element; it is a " +
            "network. Ions must first cross the bulk of the solution to " +
            "reach the interface - that is the solution resistance " +
            "`R_s`, and it does not care about frequency. Once at the " +
            "interface, the incoming current splits: part charges the " +
            "double layer (the capacitance `C_dl`), and part forces a " +
            "faradaic reaction (the charge-transfer resistance " +
            "`R_ct`, with diffusion tailing behind it).",
        },
        {
          kind: "formula",
          tex: String.raw`Z(\omega) = R_s + \left( j\omega C_{dl} + \frac{1}{R_{ct} + Z_W} \right)^{-1}`,
          caption:
            "The Randles cell. Solution resistance in series with the " +
            "parallel combination of double-layer capacitance and the " +
            "faradaic branch (charge-transfer resistance plus Warburg " +
            "diffusion).",
        },
        {
          kind: "para",
          text:
            "Each element speaks at its own tempo. At very high " +
            "frequency the double-layer capacitor is a near-short, so " +
            "the faradaic branch is bypassed and the impedance is " +
            "essentially `R_s`. In the middle of the range, the " +
            "charge-transfer resistance and the capacitance share the " +
            "current and produce the famous semicircle. At very low " +
            "frequency the capacitor is effectively open, and if the " +
            "reaction is reversible the diffusion tail takes over, " +
            "bending the curve into the Warburg line.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The same cell, three tempers",
          body:
            "High frequency: only Rs responds. Intermediate: Rct and " +
            "Cdl battle, giving a semicircle. Low frequency: Rct alone " +
            "or the Warburg tail. Frequency is how the spectrum sorts " +
            "them.",
        },
      ],
    },
    {
      id: "real-and-frequency-parts",
      tone: "rose",
      title: "R_ct, C_dl and the Warburg tail",
      minutes: 8,
      summary:
        "Each parameter in the equivalent circuit maps to a physical " +
        "process. R_ct is the kinetic ease of electron transfer, C_dl " +
        "is the interfacial charge store, and the Warburg element is " +
        "the 45° signature of semi-infinite diffusion.",
      keyPoints: [
        "The charge-transfer resistance R_ct is the small-signal analogue of the activation overpotential from Lesson 5: a faster reaction gives a smaller R_ct.",
        "The double-layer capacitance C_dl reports the interfacial charge storage of Lesson 6; its value diagnoses the electrode/electrolyte pair.",
        "The Warburg impedance comes from Fick's law under an oscillating boundary condition and appears as a 45° line at low frequency.",
        "Reading Z' and Z'' across frequency lets you extract R_s, R_ct, C_dl and the diffusion coefficient from one experiment.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "R_s is just the geometry and the electrolyte of the cell - " +
            "it appears as a high-frequency x-intercept on a Nyquist " +
            "plot. The interesting elements sit at the interface. " +
            "R_ct is the slope of the current-overpotential curve, " +
            "linearised at the working point: a fast, reversible couple " +
            "with a large exchange current gives a small R_ct and a " +
            "small semicircle, and a sluggish one a large R_ct and a " +
            "big semicircle. So the semicircle's width is a kinetic " +
            "measurement.",
        },
        {
          kind: "para",
          text:
            "C_dl is the double-layer capacitor from Lesson 6. In an " +
            "impedance spectrum it sets the *position* of the " +
            "semicircle's top: the time constant of the parallel R_ct-" +
            "C_dl combination is R_ct C_dl, so a bigger capacitance or " +
            "a bigger resistance pushes the semicircle's maximum to a " +
            "lower frequency. A damaged or contaminated electrode often " +
            "shows up first as a distorted capacitance.",
        },
        {
          kind: "formula",
          tex: String.raw`Z_W = \sigma (1-j)\, \omega^{-1/2}`,
          caption:
            "The Warburg element for semi-infinite linear diffusion. " +
            "Its real and imaginary parts are equal in magnitude and " +
            "both shrink as ω^{-1/2}, which is why it plots as a 45° " +
            "line at low frequency on a Nyquist plot.",
        },
        {
          kind: "para",
          text:
            "The Warburg impedance is the same diffusion physics as the " +
            "Cottrell tail, only oscillating. Push a concentration wave " +
            "into the solution and the faradaic current answers with a " +
            "characteristic square-root-of-frequency response: " +
            "|Z_W| falls as ω^{-1/2} and its phase sits at 45°. See a " +
            "45° tail at low frequency and you are looking at " +
            "diffusion-controlled chemistry, exactly as the t^{-1/2} " +
            "tail of Lesson 8 said in the time domain.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Time and frequency carry the same news",
          body:
            "The Cottrell t^{-1/2} decay and the Warburg ω^{-1/2} tail " +
            "are Fourier twins: they describe the same semi-infinite " +
            "diffusion, one as the response to a step, one as the " +
            "response to a sine wave.",
        },
      ],
    },
    {
      id: "nyquist-and-bode",
      tone: "coral",
      title: "Nyquist and Bode plots",
      minutes: 8,
      summary:
        "Two drawings of the same spectrum. The Nyquist plot plots " +
        "`-Z''` against `Z'`, turning the equivalent circuit into a " +
        "semicircle plus a tail; the Bode plot draws |Z| and phase " +
        "against frequency.",
      keyPoints: [
        "A Nyquist plot draws -Z'' (the capacitive part) against Z' at each frequency; a Randles cell gives one semicircle plus, for a reversible system, a 45° Warburg tail.",
        "The high-frequency x-intercept of the Nyquist plot is R_s; the diameter of the semicircle is R_ct.",
        "A Bode plot shows |Z| and the phase angle as separate curves against frequency; the phase is where the capacitive processes show up as a peaks.",
        "Real electrodes often show a depressed semicircle, modelled by a constant-phase element (CPE) instead of an ideal capacitor.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The impedance spectrum is a list of complex numbers, one " +
            "per frequency. To see it, people draw it two ways. The " +
            "Nyquist plot throws away frequency as an axis and instead " +
            "plots the imaginary part against the real part - one " +
            "point per frequency. The Bode plot keeps frequency on the " +
            "x-axis and draws two curves: the magnitude and the phase " +
            "as separate y-axes.",
        },
        {
          kind: "para",
          text:
            "On a Nyquist plot the Randles cell traces a single " +
            "semicircle sitting on the real axis, from R_s on the " +
            "left to R_s + R_ct on the right. Read the left intercept " +
            "and you have the solution resistance; measure the " +
            "semicircle's width and you have the charge-transfer " +
            "resistance. After the semicircle, for a reversible couple, " +
            "the trace continues as a straight 45° line - the Warburg " +
            "tail of diffusion.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{Nyquist: } -Z''\ \text{vs}\ Z',\qquad \omega\to\infty:\ Z'=R_s,\qquad \omega\to 0:\ Z' \to R_s + R_{ct} + Z_W`,
          caption:
            "Reading a Nyquist plot. High frequency collapses the " +
            "capacitor to a short and reports only the solution " +
            "resistance; low frequency opens the capacitor and the " +
            "full faradaic path appears.",
        },
        {
          kind: "para",
          text:
            "Bode plots separate the magnitude and the phase. The " +
            "magnitude |Z| at high frequency is just R_s, flat and " +
            "real. As the frequency drops into the semicircle region, " +
            "|Z| rises and the phase angle develops a broad maximum " +
            "near -45° to -90° - the signature of the R_ct||C_dl " +
            "time constant. Further down in frequency the Warburg " +
            "element pulls the phase toward -45° again. The two plots " +
            "carry the same information; Nyquist is geometric and " +
            "intuitive, Bode is better when you want to read off " +
            "characteristic frequencies directly.",
        },
        {
          kind: "para",
          text:
            "Real electrodes rarely give a perfect semicircle. " +
            "Surface roughness, inhomogeneous layers, and distributed " +
            "time constants squash the semicircle's top downward: a " +
            "depressed semicircle. The standard fix is to replace the " +
            "ideal capacitor with a constant-phase element,",
        },
        {
          kind: "formula",
          tex: String.raw`Z_{\text{CPE}} = \frac{1}{Q (j\omega)^{\alpha}}, \qquad 0 < \alpha \le 1`,
          caption:
            "The constant-phase element interpolates between a " +
            "resistor (α = 0) and a capacitor (α = 1). Fitting α " +
            "back toward 1 tells you how closely the real interface " +
            "approaches the ideal.",
        },
      ],
    },
    {
      id: "interpreting-a-spectrum",
      tone: "amber",
      title: "Interpreting a real spectrum",
      minutes: 7,
      summary:
        "A spectrum is only as good as its equivalent circuit. Start " +
        "from the physics, fit the smallest circuit that reproduces " +
        "the data, and beware of circuits that fit perfectly but make " +
        "no physical sense.",
      keyPoints: [
        "Begin with the Randles cell for a simple redox couple; add elements only when the data demand them.",
        "The diameter of the semicircle gives R_ct; the frequency of its top gives R_ct C_dl; the low-frequency tail diagnoses diffusion or surface films.",
        "A perfect fit is necessary but not sufficient: chemically different circuits can produce identical spectra.",
        "Improving the fit by adding elements must always be justified by an independent physical change in the cell.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Faced with a spectrum, the temptation is to throw a big " +
            "circuit at it until the residuals vanish. Resist that. A " +
            "bigger circuit almost always fits better, and often " +
            "better fits mean less understanding. The honest workflow " +
            "runs the other way: start from what you know about the " +
            "cell, choose the smallest circuit consistent with it, and " +
            "ask what each fitted parameter says about the physics.",
        },
        {
          kind: "para",
          text:
            "For a clean one-electron couple in a well-supported " +
            "solution that circuit is the Randles cell. Read off R_s " +
            "from the high-frequency intercept, R_ct from the " +
            "semicircle's width, and C_dl from the peak-top frequency " +
            "`ω_max = 1/(R_ct C_dl)`. If the semicircle is depressed, " +
            "swap in a CPE. If a second semicircle grows when a " +
            "surface layer forms, that layer is a real new element: add " +
            "it, and name it.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Beware of equivalent-circuit overfitting",
          body:
            "Two different circuits can share the same spectrum. Fit " +
            "only what an independent experimental change supports, " +
            "and when you add an element you should be able to say " +
            "what in the cell it belongs to.",
        },
        {
          kind: "para",
          text:
            "Impedance's real power is differential. Compare spectra " +
            "before and after a treatment - a catalyst degraded, a " +
            "film deposited, an electrolyte changed - and the change " +
            "in one element is the change in one interfacial process. " +
            "That is how EIS watches degradation in batteries, detects " +
            "the onset of corrosion, and certifies that a coating " +
            "still protects. The spectrum itself is the photograph; " +
            "the difference between two spectra is the story.",
        },
      ],
    },
    {
      id: "about-frequencies",
      tone: "teal",
      title: "Frequencies and what you can claim",
      minutes: 5,
      summary:
        "The frequency window you measure sets what you can resolve. " +
        "Very high frequencies see wires and solution; very low " +
        "frequencies see slow diffusion and corrosion films; the " +
        "middle sees the kinetics.",
      keyPoints: [
        "High frequencies (kHz–MHz): solution resistance, cell geometry, inductance from cabling.",
        "Mid frequencies (Hz–kHz): double-layer charging and charge-transfer kinetics.",
        "Low frequencies (mHz–Hz): diffusion tails, slow reactions, corrosion and film evolution.",
        "No single spectrum covers everything; a complete picture often needs data from a wide band.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "An impedance measurement is only as complete as its " +
            "frequency range. At the top of the range the cell has no " +
            "time to charge its double layer or push ions; you see the " +
            "solution's resistance, the geometry, and unfortunately " +
            "the stray inductance of your cables. The kinetic " +
            "resistance and capacitance live in the middle, where the " +
            "semicircle is drawn. At the bottom of the range the " +
            "slowest actors - diffusion across a boundary layer, a " +
            "growing corrosion product, a relaxing adsorbed layer - " +
            "finally get their turn.",
        },
        {
          kind: "para",
          text:
            "So choose the frequency window to match the claim. Want " +
            "R_s? A few high-frequency points will do. Want R_ct? " +
            "Span the semicircle. Want the diffusion coefficient from " +
            "the Warburg tail? You must go low, and you must wait: a " +
            "10 mHz point takes a minute and a half to measure. EIS is " +
            "a trade of time for resolution, and a good spectrum is " +
            "never faster than the slowest process it contains.",
        },
        {
          kind: "worked",
          title: "R_ct from the semicircle, C_dl from its top",
          given:
            "A Randles spectrum has R_s = 30 ohm, a semicircle diameter of 120 ohm, and its maximum at 80 Hz. Find R_ct and C_dl.",
          steps: [
            String.raw`R_{ct} = \text{diameter} = 120\ \Omega`,
            String.raw`\omega_{\max} = 2\pi \times 80 = 503\ \mathrm{rad/s},\quad \omega_{\max} = 1/(R_{ct} C_{dl})`,
            String.raw`C_{dl} = 1/(120 \times 503) = 1.66\times10^{-5}\ \mathrm{F} \approx 17\ \mu\mathrm{F}`,
          ],
          result:
            "R_ct = 120 ohm, C_dl about 17 uF - a plausible double-layer value for a small electrode. Measuring the top of the semicircle is a capacitance measurement.",
        },
        {
          kind: "worked",
          title: "Spotting diffusion in the tail",
          given:
            "The low-frequency end of a spectrum lies on a straight line at 45 degrees, whose magnitude falls as sigma/sqrt(omega). What physical process is this, and what happens to its slope if D doubles?",
          steps: [
            String.raw`Z_W = \sigma(1-j)/\sqrt{\omega}\; \Rightarrow\; |Z_W| = \sqrt{2}\,\sigma/\sqrt{\omega}`,
            String.raw`\sigma = \frac{RT}{n^2 F^2 A}\left(\frac{1}{D_O^{1/2}C_O} + \frac{1}{D_R^{1/2}C_R}\right)`,
            String.raw`D \to 2D \Rightarrow \sigma \to \sigma/\sqrt{2}`,
          ],
          result:
            "It is the Warburg signature of semi-infinite diffusion. Doubling D shrinks the slope by sqrt(2) - bigger D means a weaker diffusion overpotential.",
        },
      ],
      cta: {
        title: "Put the reaction on the record",
        body:
          "We have now met almost every way to prod an interfacial " +
          "reaction. Lesson 12 asks what those reactions are when they " +
          "are not alone - coupled chemical steps, catalytic cycles, " +
          "and the full-scale business of turning current into product.",
        href: "/lessons/lesson-11/quiz",
        linkLabel: "Take the Lesson 11 quiz",
        secondaryHref: "/lessons/lesson-12",
        secondaryLabel: "Go to Lesson 12",
      },
    },
  ],
};
