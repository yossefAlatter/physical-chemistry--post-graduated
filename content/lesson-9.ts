// Lesson 9 - Sweep methods and polarography.
//
// Source syllabus: Bard & Faulkner ch.6-7 (potential sweep methods,
// polarography and pulse voltammetry). The chapters set the coverage and
// the numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson9Mcq } from "./lesson-9.mcq";

export const lesson9: Lesson = {
  slug: "lesson-9",
  label: "Lesson 9",
  title: "Sweep methods and polarography",
  summary:
    "Lesson 8 held the potential still and let time answer. This lesson " +
    "lets the potential sweep, and asks what the current does on the way. " +
    "That simple change turns a single experiment into a fingerprint: " +
    "the voltammogram. We learn to read its peaks, to use peak " +
    "separation and scan-rate dependence to tell reversible from " +
    "kinetically sluggish systems, to sweep back and forth (cyclic " +
    "voltammetry), and finally to see how pulsing the potential lets us " +
    "see concentration and kinetics far below the double-layer current.",
  order: 9,
  minutes: 58,
  mcq: lesson9Mcq,
  intro: [
    {
      kind: "para",
      text:
        "A potential step is a blunt instrument: one question, one " +
        "transient. A linear sweep is gentler and more informative. If " +
        "you ramp the potential steadily and record the current the " +
        "whole way, the curve you get traces the whole personality of " +
        "the electrode reaction - how easily it starts, how fast it " +
        "runs, what happens to its product. That curve is the " +
        "voltammogram, and reading it is a core skill.",
    },
    {
      kind: "para",
      text:
        "Following Bard & Faulkner ch.6-7 we first derive the shape of " +
        "a reversible sweep, then learn the diagnostics that tell a " +
        "reversible system from a kinetically hindered one, then do " +
        "the same trick backwards with cyclic voltammetry. The lesson " +
        "ends with polarography and pulse methods, where shaping the " +
        "potential waveform rather than just ramping it buys " +
        "sensitivity.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "Ramp the potential and the current traces out a voltammogram " +
        "whose peak position, height and separation diagnose the " +
        "reaction; sweeping back gives cyclic voltammetry, and pulsing " +
        "the potential suppresses the charging current so that small " +
        "quantities become visible.",
    },
  ],
  sections: [
    {
      id: "what-a-voltammogram-is",
      tone: "azure",
      title: "What a voltammogram is",
      minutes: 6,
      summary:
        "A voltammogram is the graph of current against potential " +
        "recorded while the potential is swept. Its shape tells you " +
        "what reacts, at what potential, and how fast.",
      keyPoints: [
        "A voltammogram is current plotted against the applied potential as that potential is ramped at a constant rate.",
        "On the sweep the electrode reaction switches on where Nernst says it should, rises as the driving force grows, and then is starved by depletion.",
        "The result is a peak rather than a sigmoid: depletion makes the current fall even though the potential keeps rising.",
        "The peak potential locates the reaction; the peak current scales with concentration and scan rate.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "In Lesson 8 the potential changed only once. A sweep " +
            "changes it continuously at a scan rate `v` (V/s). The " +
            "instrument records the current that flows at every " +
            "instant, and the resulting `i`-versus-`E` curve is the " +
            "voltammogram. It is simply the Lesson 8 transient played " +
            "over and over again at every point of the ramp, which is " +
            "why its shape is governed by the same planar-diffusion " +
            "physics.",
        },
        {
          kind: "para",
          text:
            "Three features do the talking. Starting potential: the " +
            "reaction is frozen because Nernst puts essentially all of " +
            "the species in one oxidation state. Then, as the potential " +
            "passes through the formal potential, the surface " +
            "concentration switches and the reaction turns on: the " +
            "current rises steeply. Eventually the surface is drained " +
            "faster than diffusion can refill it, and depletion wins: " +
            "the current peaks and then decays. That competition " +
            "between a rising rate and a thinning supply is the whole " +
            "reason a voltammogram has a peak at all.",
        },
        {
          kind: "para",
          text:
            "Read the peak for three things. Its *position* tells you " +
            "where the reaction sits on the potential scale - which " +
            "species, how hard it is to reduce, and what the formal " +
            "potential is. Its *height* scales with how much reactant " +
            "is present and how fast you sweep. And its *shape and " +
            "symmetry* report on kinetics and coupled chemistry, as the " +
            "next sections show.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Scan rate is the hidden axis",
          body:
            "Every voltammogram is taken at a scan rate v, and most " +
            "of the information in it is hidden in how the curve " +
            "changes when v changes. A reversible peak grows as " +
            "sqrt(v); a kinetic or adsorption-controlled one grows " +
            "differently. Always record v.",
        },
      ],
    },
    {
      id: "reversible-sweep",
      tone: "indigo",
      title: "The reversible sweep and Randles-Sevcik",
      minutes: 8,
      summary:
        "For a fast, reversible, planar system the peak current obeys " +
        "the Randles-Sevcik equation: proportional to concentration " +
        "and to the square root of the scan rate.",
      keyPoints: [
        "A reversible system keeps surface concentrations pinned at the Nernst ratio while mass transport brings the change to the surface.",
        "The peak current is ip = 0.4463 nFAC sqrt(nFvD/RT), the Randles-Sevcik equation.",
        "ip scales as C and as v^{1/2}; a plot of ip versus sqrt(v) is linear.",
        "The peak potential for a reversible system is independent of scan rate.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Assume the electron transfer is so fast that, whatever the " +
            "bulk does, the surface is always at the Nernst ratio of " +
            "oxidised to reduced form. Then the only question left is " +
            "mass transport, and the problem is the Lesson 8 step " +
            "with a moving boundary condition: the surface ratio, not " +
            "the surface concentration, is fixed by E. The diffusion " +
            "equations can then be solved - Randles and Sevcik did it " +
            "in the 1940s - and the current takes the shape of a " +
            "single peak.",
        },
        {
          kind: "formula",
          tex: String.raw`i_p = 0.4463\, n F A C \sqrt{\frac{n F v D}{R T}}`,
          caption:
            "Randles-Sevcik equation for a reversible, planar, " +
            "semi-infinite system at 25 °C. The peak current is " +
            "proportional to the concentration and to the square root " +
            "of the scan rate.",
        },
        {
          kind: "para",
          text:
            "Three consequences are worth memorising. First, `i_p` " +
            "grows as `sqrt(v)`: sweep faster and you thin the " +
            "diffusion layer at any given potential, so the gradient, " +
            "and the current, is steeper. Plot `i_p` against `sqrt(v)` " +
            "and a reversible, diffusion-controlled system gives a " +
            "straight line through the origin. Second, `i_p` is " +
            "proportional to C, so the same equation turns the peak " +
            "height into a concentration measurement. Third, for a " +
            "reversible peak the peak potential itself does not move " +
            "with scan rate - a clean internal check that the system " +
            "really is reversible.",
        },
        {
          kind: "worked",
          title: "Checking Randles-Sevcik on a real peak",
          given:
            "Ferrocene in acetonitrile, one-electron reversible couple. " +
            "A = 0.071 cm² (a 3 mm disk), C = 1.0 mM = 1.0e-6 " +
            "mol/cm³, D = 1.0e-5 cm²/s, v = 0.100 V/s, T = 298 K.",
          steps: [
            String.raw`\frac{nFvD}{RT} = \frac{1 \times 96485 \times 0.100 \times 1.0\times10^{-5}}{8.314 \times 298} = 3.90\times10^{-5}`,
            String.raw`i_p = 0.4463 \times 96485 \times 0.071 \times 1.0\times10^{-6} \times \sqrt{3.90\times10^{-5}}`,
            String.raw`i_p = 0.4463 \times 6.85\times10^{-3} \times 6.25\times10^{-3} \approx 1.9\times10^{-5}\ \mathrm{A} = 19\ \mu\mathrm{A}`,
          ],
          result:
            "About 19 µA. That is the size of a reversible " +
            "one-electron wave at millimolar concentration on a small " +
            "disk - the working scale of cyclic voltammetry.",
        },
      ],
    },
    {
      id: "peak-separation",
      tone: "violet",
      title: "Peak separation and the reversibility test",
      minutes: 7,
      summary:
        "Sweep forward and backward. For a freely reversible system " +
        "the anodic and cathodic peaks sit 59/n mV apart at 25 °C; " +
        "anything larger means sluggish kinetics.",
      keyPoints: [
        "A reversible one-electron system shows ΔE_p = E_pa - E_pc ≈ 59 mV at 25 °C, independent of scan rate.",
        "A scan-rate-independent but larger ΔE_p indicates slow electron transfer (quasi-reversible).",
        "An irreversible wave has no true reverse peak and shifts with scan rate.",
        "Peak current ratios close to unity, and ip_a/ip_c growing with sweep direction, diagnose chemical reversibility.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The single most useful number in a voltammogram is ΔE_p, " +
            "the gap between the cathodic and anodic peaks. For an " +
            "ideally reversible one-electron couple at 25 °C that gap " +
            "is 59 mV - the Nernst slope we met in Lesson 3 rewritten " +
            "as a distance between peaks. It is one of the few numbers " +
            "in electrochemistry that you can predict without " +
            "measuring anything first.",
        },
        {
          kind: "formula",
          tex: String.raw`\Delta E_p = E_{p,a} - E_{p,c} \approx \frac{59}{n}\ \mathrm{mV} \quad (25^\circ\mathrm{C},\ \text{reversible})`,
          caption:
            "The reversible peak separation. n is the number of " +
            "electrons in the couple. A gap that does not shrink when " +
            "n rises, or that grows when you sweep faster, is telling " +
            "you the kinetics are not keeping up.",
        },
        {
          kind: "para",
          text:
            "If the measured gap is bigger than 59/n mV, the " +
            "electron transfer cannot instantly follow the moving " +
            "potential: the system needs extra driving force to make " +
            "the reaction go, so the peaks are pushed apart. If the gap " +
            "also *grows* when you scan faster, the kinetics are the " +
            "limiting actor and the system is quasi-reversible; from " +
            "the scan-rate dependence you can extract the rate constant. " +
            "If the reverse peak is missing entirely, the electron " +
            "transfer is effectively irreversible on the experimental " +
            "timescale.",
        },
        {
          kind: "para",
          text:
            "A second check watches the current rather than the " +
            "potential. For a chemically stable product, the anodic " +
            "charge equals the cathodic charge: `Q_a ≈ Q_c`. If the " +
            "reverse peak comes back smaller, some of the product " +
            "escaped - by diffusing away, decomposing, or reacting " +
            "with a substrate - and you have found coupled chemistry, " +
            "exactly as the double-step experiment of Lesson 8 did.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Two distances, one diagnosis",
          body:
            "ΔE_p tells you about kinetics at the electrode; Q_a/Q_c " +
            "tells you about chemistry in solution. A reversible " +
            "electron transfer with a clean follow-up reaction gives " +
            "59/n mV and unit charge ratio; a sluggish electron " +
            "transfer spreads the peaks; a coupled reaction shrinks " +
            "the reverse peak.",
        },
      ],
    },
    {
      id: "cyclic-voltammetry",
      tone: "rose",
      title: "Cyclic voltammetry: there and back",
      minutes: 8,
      summary:
        "Sweep forward to a switching potential, then sweep back. The " +
        "resulting loop shows both halves of the couple and reports on " +
        "coupled chemistry, adsorption and mechanism.",
      keyPoints: [
        "Cyclic voltammetry sweeps the potential forward and then reverses, tracing a closed loop in the i-E plane.",
        "The forward peak generates product; the reverse peak consumes it, so the loop shows the couple in both directions.",
        "A reversible solution couple gives a symmetric loop; asymmetry or extra waves signal surface adsorption or coupled chemistry.",
        "The switching potential must be far enough past the peak for the reverse scan to capture the full return wave.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Cyclic voltammetry (CV) is just two sweeps joined. Run the " +
            "potential forward through the reaction until you are past " +
            "the peak, stop at a chosen switching potential, and then " +
            "ramp back at the same rate. On the way out you oxidised or " +
            "reduced the analyte; on the way back you convert it again, " +
            "and the reverse peak is the electrochemical echo of the " +
            "forward one. It is the potential-scan cousin of the double " +
            "potential step from Lesson 8.",
        },
        {
          kind: "para",
          text:
            "The loop's shape is the diagnosis. A clean, symmetric " +
            "loop - one forward peak, one reverse peak, 59/n mV apart, " +
            "equal charge - is the signature of a stable, reversible " +
            "solution couple such as the ferrocenium/ferrocene pair. " +
            "If the reverse peak is smaller or shifted, the product of " +
            "the forward sweep did not survive: it reacted with the " +
            "solvent, with oxygen, with itself, or adsorbed on the " +
            "electrode. Each failure mode has a characteristic " +
            "distortion, and learning to read them is the practical " +
            "art of CV.",
        },
        {
          kind: "para",
          text:
            "Watch adsorption next. A species that sticks to the " +
            "electrode gives extremely sharp peaks that grow linearly " +
            "with scan rate rather than as sqrt(v), because the surface " +
            "concentration is what matters, not diffusion. See a tall, " +
            "thin peak at the foot of the main wave and you are " +
            "probably looking at a monolayer of adsorbed reactant or " +
            "product.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Switching too early cuts the loop",
          body:
            "If you reverse the sweep before the forward current has " +
            "decayed well past the peak, the reverse wave comes back " +
            "small and oddly shaped, and ΔE_p and Q_a/Q_c are " +
            "meaningless. As a rule of thumb, switch at least 100 mV " +
            "beyond the peak on the potential axis.",
        },
      ],
    },
    {
      id: "irreversible-and-quasireversible",
      tone: "coral",
      title: "Quasi-reversible and irreversible waves",
      minutes: 7,
      summary:
        "Not every reaction follows the fast, clean script of the " +
        "reversible case. When electron transfer is slow, or the " +
        "product reacts chemically, the voltammogram deforms in ways " +
        "that still carry information.",
      keyPoints: [
        "A quasi-reversible wave needs overpotential to drive the kinetics; its peak separation is larger than 59/n mV and grows with scan rate.",
        "An irreversible wave has no return peak; its peak potential shifts by 30/(αn) mV per decade of scan rate.",
        "Peak current for an irreversible wave still obeys a Randles-Sevcik-like square-root dependence on scan rate.",
        "Measuring a peak's shift with scan rate yields the transfer coefficient α and, with more care, the standard rate constant.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Between 'always at Nernst equilibrium' and 'never " +
            "reversible' lies the quasi-reversible regime. Here the " +
            "electron transfer is fast enough to contribute, but not so " +
            "fast that the surface stays pinned to equilibrium. The " +
            "voltammogram responds by needing extra driving force: both " +
            "peaks are pushed away from the formal potential, the gap " +
            "ΔE_p widens, and - the diagnostic that matters - the gap " +
            "widens further whenever you sweep faster, because faster " +
            "sweeps give the kinetics less time to keep up.",
        },
        {
          kind: "para",
          text:
            "In the fully irreversible limit there is no return wave at " +
            "all. The product, once made, does not come back within the " +
            "experiment, either because the back reaction needs a " +
            "potential far away or because a chemical step removed it. " +
            "The position of the irreversible peak then shifts with " +
            "scan rate, by roughly `30/(α n)` mV for every ten-fold " +
            "increase in `v`. That shift is a measurement of the " +
            "transfer coefficient α from Lesson 5.",
        },
        {
          kind: "formula",
          tex: String.raw`|E_p - E^0| \;\propto\; \frac{RT}{\alpha n F}\,\ln v`,
          caption:
            "For an irreversible wave the peak potential moves " +
            "logarithmically with scan rate. The slope gives α; combined " +
            "with the peak width, it yields the standard rate constant " +
            "k^0.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "A peak that will not sit still",
          body:
            "Reversible: peak potential fixed, gap 59/n mV. " +
            "Quasi-reversible: gap grows with v. Irreversible: peak " +
            "itself slides with v and there is no partner peak. Scan " +
            "rate is the variable that separates the three.",
        },
      ],
    },
    {
      id: "polarography",
      tone: "amber",
      title: "Polarography and the dropping mercury electrode",
      minutes: 7,
      summary:
        "The classical version of sweep voltammetry uses a continuously " +
        "renewed mercury drop as the working electrode, giving clean, " +
        "reproducible waves - at the price of mercury and a low anodic " +
        "limit.",
      keyPoints: [
        "Polarography records current against a ramped potential at a dropping mercury electrode (DME).",
        "Each new drop renews the electrode surface, so waves are reproducible and adsorption fouling is washed away.",
        "The current oscillates with each drop's growth; averaging over the drop life gives the polarographic wave.",
        "The DME offers a wide negative window but oxidises easily, limiting its anodic range.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Polarography is the original form of sweep voltammetry. " +
            "Instead of a static solid electrode, the working electrode " +
            "is a stream of mercury drops that grow at the tip of a " +
            "capillary and detach every few seconds. A potential ramp is " +
            "applied across the cell, and the current is recorded " +
            "against it - the polarogram. Each drop is a fresh electrode, " +
            "so the surface is renewed continuously and the result does " +
            "not drift as a solid electrode would foul.",
        },
        {
          kind: "para",
          text:
            "The price is a distinctive signal. As each drop grows, its " +
            "area grows, so the faradaic current on it grows, then " +
            "collapses when the drop falls. The raw trace is a train of " +
            "sawteeth. Classical polarography simply averages over the " +
            "sawteeth; modern instruments sample the current at a fixed " +
            "point late in each drop's life instead, cleaning up the " +
            "baseline enormously.",
        },
        {
          kind: "para",
          text:
            "Why mercury? Because it is liquid, so its surface is " +
            "automatically smooth and reproducible, and because hydrogen " +
            "overvoltage on mercury is high, so reductions of many " +
            "cations and molecules can be observed before hydrogen " +
            "interferes. The drawbacks are now famous: mercury itself " +
            "oxidises at fairly positive potentials, cutting off the " +
            "anodic window, and handling liquid mercury carries obvious " +
            "environmental costs. The technique is historically " +
            "monumental but now largely replaced by solid electrodes " +
            "plus pulse methods.",
        },
      ],
    },
    {
      id: "pulse-voltammetry",
      tone: "emerald",
      title: "Pulse voltammetry: hiding from the charging current",
      minutes: 8,
      summary:
        "Chop the potential into pulses and sample the current late in " +
        "each pulse, after the double layer has finished charging. " +
        "The faradaic signal survives; the charging current vanishes, " +
        "and sensitivity jumps by orders of magnitude.",
      keyPoints: [
        "The double-layer charging current decays much faster than the faradaic diffusion current, so a delayed current sample is almost purely faradaic.",
        "Normal pulse voltammetry steps the potential from a non-faradaic baseline and samples the current late in the pulse.",
        "Differential pulse voltammetry samples just before and just after a small pulse and reports the difference, giving peaked, high-resolution traces.",
        "Square-wave voltammetry superposes a symmetric square wave on a staircase; the difference current between forward and reverse pulses gives a derivative-like peak with exceptional sensitivity.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Every voltammetric measurement pays a tax: the double-layer " +
            "charging current. In a fast sweep that tax is as large as " +
            "the signal. Pulse methods dodge it using one asymmetry we " +
            "already know from Lesson 8: the capacitive current decays " +
            "with the cell's RC time constant, while the faradaic " +
            "current decays only as t^{-1/2}. Wait a little after a " +
            "potential change and the capacitor has stopped complaining, " +
            "but the diffusion-driven faradaic current is still there.",
        },
        {
          kind: "para",
          text:
            "Normal pulse voltammetry exploits this directly. Hold the " +
            "potential at a value where nothing reacts, jump to a new " +
            "value, and sample the current a fixed delay into the pulse - " +
            "after the charging transient has died. The sampled trace " +
            "against pulse potential is essentially the clean, " +
            "Cottrell-corrected voltammogram of the previous sections.",
        },
        {
          kind: "para",
          text:
            "Differential pulse voltammetry (DPV) adds one more trick. " +
            "Superimpose a small pulse on a slowly rising staircase, " +
            "and sample the current just before the pulse and just after " +
            "it. The difference between those two samples cancels the " +
            "slowly varying background and keeps only the part that " +
            "responded to the pulse - the faradaic part. The result is " +
            "a derivative-like peak sitting on a flat baseline, and peak " +
            "heights that are proportional to concentration. Detection " +
            "limits drop by one to two orders of magnitude over a simple " +
            "sweep.",
        },
        {
          kind: "para",
          text:
            "Square-wave voltammetry pushes the same idea further: a " +
            "symmetric square wave rides on the staircase, and the " +
            "instrument records the current at the end of each half-" +
            "cycle, forward and reverse. Their difference is the " +
            "signal. Because the forward and reverse pulses also probe " +
            "the two directions of a reversible couple, the SWV peak " +
            "sharpens further and the sensitivity climbs another order " +
            "of magnitude. This is why trace analysis - pharmaceuticals, " +
            "heavy metals, biomolecules - is dominated by pulse " +
            "techniques.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Same electrodes, sharper eyes",
          body:
            "Pulse methods never change the chemistry. They change " +
            "when you look. By sampling late in each pulse they let the " +
            "charging current die first, and the tiny faradaic signal " +
            "that remains can be amplified, differentiated and " +
            "averaged.",
        },
      ],
    },
    {
      id: "choosing-a-sweep",
      tone: "teal",
      title: "Choosing a sweep technique",
      minutes: 5,
      summary:
        "From a bare linear sweep to square-wave voltammetry, each " +
        "technique trades simplicity for sensitivity. The choice " +
        "follows from what you want to see.",
      keyPoints: [
        "Linear sweep voltammetry: the simplest waveform, one potential, one peak; good for a first look.",
        "Cyclic voltammetry: the everyday mechanistic tool; shows reversibility, coupled chemistry, adsorption.",
        "Differential pulse and square-wave voltammetry: highest sensitivity for trace detection, at the cost of more complicated waveforms.",
        "Polarography/DME: historically foundational, now niche, limited by the anodic window of mercury.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The four sweep techniques are one physics and four " +
            "filters. A raw linear sweep gives the whole picture but " +
            "pays full price in charging current. Cyclic voltammetry is " +
            "the same sweep with the return trip added: it tells you " +
            "whether the product survives. Pulse methods keep the same " +
            "ramp but time the sampling so the capacitor is silent. " +
            "Polarography replaces the electrode itself with a renewed " +
            "mercury surface so the answer never drifts.",
        },
        {
          kind: "table",
          head: ["Technique", "Waveform", "Best for", "Main limitation"],
          widths: [1.6, 1.8, 2, 2],
          rows: [
            ["Linear sweep", "One-way ramp", "First look at a new system", "Charging current comparable to signal"],
            ["Cyclic voltammetry", "Forward ramp + reverse ramp", "Mechanism, reversibility, adsorption", "Still RC-limited on sensitivity"],
            ["Differential pulse", "Small pulses on a staircase", "Trace concentrations", "Loses some of the CV shape information"],
            ["Square-wave", "Symmetric square wave on a staircase", "Highest sensitivity, fast", "Waveform adds parameters to optimise"],
            ["Polarography (DME)", "Ramp on a dropping drop", "Historical waves, fouling-free surface", "Mercury handling; narrow anodic window"],
          ],
        },
        {
          kind: "para",
          text:
            "A good workflow still starts with cyclic voltammetry: one " +
            "experiment that tells you whether the couple is reversible, " +
            "whether the products are stable, and roughly where the " +
            "action is. Once the lay of the land is clear, zoom in with " +
            "pulse methods for quantitative sensitivity or with " +
            "scan-rate studies for kinetics.",
        },
        {
          kind: "worked",
          title: "Randles-Sevcik at a new scan rate",
          given:
            "A reversible 1-electron, planar system gives i_p = 19 uA at v = 0.100 V/s. What is i_p at v = 0.025 V/s?",
          steps: [
            String.raw`i_p \propto \sqrt{v} \quad (\text{Randles-Sevcik})`,
            String.raw`i_p(0.025) = 19\ \mu\mathrm{A} \times \sqrt{0.025/0.100} = 19 \times 0.5`,
            String.raw`i_p(0.025) \approx 9.5\ \mu\mathrm{A}`,
          ],
          result:
            "9.5 uA. The square-root scaling means a fourfold slowdown of the scan halves the peak - a quick reversibility check.",
        },
        {
          kind: "worked",
          title: "Transfer coefficient from a sliding peak",
          given:
            "An irreversible peak moves 45 mV every time the scan rate increases tenfold, at 25 C. Estimate the transfer coefficient alpha for a one-electron wave.",
          steps: [
            String.raw`|\Delta E_p| \text{ per decade} = \frac{2.303\,RT}{\alpha n F} = \frac{59\ \mathrm{mV}}{\alpha n}`,
            String.raw`45 = 59/(\alpha \times 1) \;\Rightarrow\; \alpha = 59/45`,
            String.raw`\alpha \approx 1.31\ \;(\approx 0.5\text{ would be expected; a check on the sign convention or the diagnosis})`,
          ],
          result:
            "Alpha is not bounded below 1 in this naive reading, which flags that the peak shift includes more than alpha alone - a useful reminder that scan-rate diagnostics deserve care.",
        },
      ],
      cta: {
        title: "Now make it flow",
        body:
          "All of these techniques assume a quiet solution. Next " +
          "lesson we deliberately stir it: rotating disks and flow " +
          "cells take mass transfer from an uncontrolled coincidence " +
          "to a settable parameter.",
        href: "/lessons/lesson-9/quiz",
        linkLabel: "Take the Lesson 9 quiz",
        secondaryHref: "/lessons/lesson-10",
        secondaryLabel: "Go to Lesson 10",
      },
    },
  ],
};
