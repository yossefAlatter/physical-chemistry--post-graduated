// Lesson 10 - Hydrodynamic methods.
//
// Source syllabus: Bard & Faulkner ch.9 (hydrodynamic methods) and Bagotsky
// ch.4.4 (mass transfer with convection). The chapters set the coverage and
// the numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson10Mcq } from "./lesson-10.mcq";

export const lesson10: Lesson = {
  slug: "lesson-10",
  label: "Lesson 10",
  title: "Hydrodynamic methods",
  summary:
    "Lesson 9 swept the potential, but the solution sat still, and the " +
    "resulting current depended on whatever the fluid happened to be " +
    "doing. This lesson makes the solution move on purpose. Spin the " +
    "electrode and the flow carries away what you react and brings in " +
    "fresh material at a rate you can set: the rotating disk electrode. " +
    "Add a second ring and you can catch the intermediates of the " +
    "reaction as they fly past. Flow cells and channel electrodes do " +
    "the same job in flow-through geometry.",
  order: 10,
  minutes: 55,
  mcq: lesson10Mcq,
  intro: [
    {
      kind: "para",
      text:
        "In the earlier lessons the solution was quiescent. That made " +
        "the mathematics clean but the experiment fragile: a passing " +
        "vibration or a stray convection set the diffusion layer's " +
        "thickness. Hydrodynamic methods turn that weakness into a " +
        "dial. Move the solution past the electrode in a controlled " +
        "way and the mass-transfer coefficient becomes a known, " +
        "reproducible number instead of an accident.",
    },
    {
      kind: "para",
      text:
        "Following Bard & Faulkner ch.9 we first meet the rotating " +
        "disk electrode, the workhorse, and derive its Levich current. " +
        "Then we add a ring, a channel, or a pump and look at what " +
        "each geometry buys. The lesson ends with the Koutecký-Levich " +
        "analysis, the simple plot that separates kinetic currents " +
        "from transport currents - arguably the most used graph in " +
        "electrocatalysis.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "By forcing a known flow of solution past the electrode you " +
        "make the diffusion layer a controlled, reproducible " +
        "quantity - and the Koutecký-Levich plot then lets you pull " +
        "the electrode's intrinsic kinetics out from under the " +
        "mass-transfer ceiling.",
    },
  ],
  sections: [
    {
      id: "why-force-convection",
      tone: "azure",
      title: "Why force the solution to move",
      minutes: 6,
      summary:
        "In a still solution the diffusion layer grows freely and any " +
        "vibration changes it. Forced convection pins the layer at a " +
        "thickness set by the flow, making the limiting current a " +
        "reliable, settable quantity.",
      keyPoints: [
        "In unstirred solution the diffusion layer is an uncontrolled boundary condition; the limiting current floats.",
        "Moving the solution past the electrode fixes a thin, well-defined diffusion layer at the surface.",
        "The faster the flow, the thinner the layer and the bigger the limiting current.",
        "A controlled flow makes mass transfer reproducible enough to separate it from kinetics.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Every limiting current we have met so far lived inside an " +
            "uncontrolled environment. In a quiescent cell the diffusion " +
            "layer thickness is set by whatever the liquid happens to " +
            "be doing - drafts, thermal currents, the last time someone " +
            "touched the bench. Record a limiting current in such a " +
            "cell twice and you will get two numbers. That is useless " +
            "for kinetics, which is why forced convection exists.",
        },
        {
          kind: "para",
          text:
            "Push the solution past the electrode at a known, steady " +
            "rate and the picture changes. Fresh reactant is delivered " +
            "in a thin, well-mixed layer whose thickness is set by the " +
            "flow speed. The diffusion layer at the electrode is no " +
            "longer a slow-growing, poorly defined region; it is a " +
            "thin film of known thickness, and the limiting current " +
            "through it is fixed and reproducible.",
        },
        {
          kind: "para",
          text:
            "The trade is a new variable. Flow rate becomes something " +
            "you dial in, and the limiting current becomes a function " +
            "of that dial setting. Spin faster and the layer thins, so " +
            "the current rises; spin slower and it thickens. That " +
            "dependence is the whole point of the next sections: it " +
            "lets you separate the part of the current set by how fast " +
            "the electrode thinks from the part set by how fast the " +
            "solution delivers.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Convective-diffusion layer",
          body:
            "Two layers matter near a working electrode in flow: a " +
            "thick, well-stirred convective layer in which the " +
            "concentration is nearly uniform, and a thin diffusion " +
            "layer right at the surface across which the last bit of " +
            "transport is diffusional. All the current is set in the " +
            "second, tiny, layer.",
        },
      ],
    },
    {
      id: "rotating-disk",
      tone: "indigo",
      title: "The rotating disk electrode",
      minutes: 8,
      summary:
        "Spin a flat disk in the solution and the flow pattern is a " +
        "perfect axial pump: solution is drawn up toward the surface " +
        "and thrown outward. The resulting Levich current is the " +
        "standard meter of mass transfer.",
      keyPoints: [
        "A spinning disk acts like a pump: fluid is pulled toward the surface along the axis and flung outward along the face.",
        "The diffusion layer over the disk is uniform in thickness - every point on the surface sees the same transport conditions.",
        "The limiting current follows the Levich equation: proportional to D^{2/3}, C, A and the square root of the rotation rate.",
        "Uniform transport across the surface is why RDE results are so clean compared with a static electrode.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The rotating disk electrode (RDE) is a flat cylinder of " +
            "metal embedded in insulating resin, spun about its axis " +
            "through a chuck connected to a motor. Spin it in the " +
            "solution and the fluid near the face is dragged around " +
            "with it; centrifugal action throws that fluid outward, " +
            "and fresh solution is sucked up along the axis to replace " +
            "it. The result is an exact, axisymmetric flow field: every " +
            "point on the disk face experiences the same supply.",
        },
        {
          kind: "para",
          text:
            "Because the flow is the same everywhere, the diffusion " +
            "layer at the surface is of uniform thickness all over the " +
            "face. That is the RDE's great virtue: a static electrode " +
            "in a tidal cell has an edge that reacts differently from " +
            "its centre, but the RDE averages none of that away - " +
            "there is nothing to average. The limiting current then " +
            "takes a closed form, the Levich equation.",
        },
        {
          kind: "formula",
          tex: String.raw`i_L = 0.620\, n F A D^{2/3}\, C\, v^{-1/6}\, \omega^{1/2}`,
          caption:
            "Levich equation for the disk. The limiting current grows " +
            "as the square root of the angular rotation rate omega, the " +
            "two-thirds power of the diffusion coefficient, and the " +
            "inverse sixth power of the kinematic viscosity.",
        },
        {
          kind: "para",
          text:
            "Two things to notice. First, the current is *uniform* " +
            "and steady - a plateau on a voltammogram - because the " +
            "supply is steady. Second, unlike the quiescent cell, there " +
            "is no t^{-1/2} decay: this is a genuine steady-state " +
            "method, like the microelectrode of Lesson 8, but the " +
            "layer thickness is set by a knob you can turn. Measure at " +
            "several rotation rates and the square-root law is itself " +
            "a check that the system is really mass-transfer limited.",
        },
        {
          kind: "worked",
          title: "Levich current on a 5 mm disk",
          given:
            "Oxygen reduction, n = 4, A = pi (0.25 cm)^2 = 0.196 cm², " +
            "C = 1.2 mM = 1.2e-6 mol/cm³, D = 2.0e-5 cm²/s, omega = " +
            "1600 rpm = 168 rad/s, kinematic viscosity nu = 0.01 " +
            "cm²/s.",
          steps: [
            String.raw`D^{2/3} = (2.0\times10^{-5})^{2/3} = 7.4\times10^{-4},\quad \omega^{1/2} = 12.96,\quad \nu^{-1/6} = 2.15`,
            String.raw`i_L = 0.620 \times 4 \times 96485 \times 0.196 \times 7.4\times10^{-4} \times 1.2\times10^{-6} \times 2.15 \times 12.96`,
            String.raw`i_L \approx 0.620 \times 4 \times 96485 \times 0.196 \times 7.4\times10^{-4} \times 1.2\times10^{-6} \times 27.9 \approx 1.5\times10^{-4}\ \mathrm{A}`,
          ],
          result:
            "About 150 µA of steady oxygen-reduction current at 1600 " +
            "rpm - the kind of number that anchors a fuel-cell " +
            "measurement.",
        },
      ],
    },
    {
      id: "ring-disk",
      tone: "violet",
      title: "The rotating ring-disk electrode",
      minutes: 7,
      summary:
        "Add a second electrode, a ring around the disk, and you can " +
        "catch whatever the disk reaction throws off. That is how you " +
        "detect intermediates and measure their lifetimes in solution.",
      keyPoints: [
        "An RRDE is a disk surrounded by a concentric ring, electrically independent, set to a potential that detects species made at the disk.",
        "Whatever the disk generates and releases into solution is swept outward across the gap and over the ring, where it is detected.",
        "The fraction of disk product the ring catches is fixed by geometry - the collection efficiency N.",
        "A smaller-than-geometric collection efficiency means the intermediate decayed or adsorbed before reaching the ring.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The rotating ring-disk electrode (RRDE) keeps the disk " +
            "and adds a ring of the same material on a circle a short " +
            "gap away, insulated from the disk. Run the disk at a " +
            "potential where it makes a product, and hold the ring at " +
            "a potential where it detects that product. The flow field " +
            "throws everything the disk releases outward, so a fixed " +
            "fraction of it crosses the gap and passes over the ring, " +
            "where it shows up as a current.",
        },
        {
          kind: "para",
          text:
            "The ring current, normalised by the disk current, is the " +
            "collection efficiency `N` - a purely geometric number, " +
            "typically 0.2-0.4, fixed by the radii of disk and ring. " +
            "If the ring catches *less* than `N` times the disk's " +
            "production, some of the disk product never made it across " +
            "the gap. It must have been eaten by a homogeneous " +
            "reaction, adsorbed, or otherwise diverted. The deficit is " +
            "a direct count of those losses.",
        },
        {
          kind: "formula",
          tex: String.raw`N = \frac{i_{\text{ring}}}{i_{\text{disk}}} \times \frac{n_{\text{disk}}}{n_{\text{ring}}}, \qquad i_{\text{ring}} \approx N\, i_{\text{disk}} \ (\text{geometry only})`,
          caption:
            "Collection efficiency. For a stable product the ring " +
            "current is just N times the disk current. A deficit is " +
            "the signature of coupled chemistry happening in the gap.",
        },
        {
          kind: "para",
          text:
            "The classic use is oxygen reduction. On the disk you may " +
            "reduce O2 either all the way to water (four electrons) or " +
            "only to peroxide (two electrons). Hold the ring at a " +
            "potential that re-oxidises peroxide and the ring current " +
            "tells you how much peroxide escaped the disk - a direct, " +
            "quantitative measure of the reaction's pathway. The same " +
            "logic catches superoxide in aprotic media or metal-ion " +
            "intermediates in plating.",
        },
      ],
    },
    {
      id: "flow-cells",
      tone: "rose",
      title: "Channel and flow-through cells",
      minutes: 7,
      summary:
        "Pump the solution through a thin channel past the electrode, " +
        "and the current measures what gets converted before the fluid " +
        "leaves. These cells are how bulk electrolysis meets " +
        "controlled transport.",
      keyPoints: [
        "In a channel cell the electrode forms one wall of a thin rectangular channel through which solution is pumped.",
        "The diffusion layer is bounded by the channel height, so the limiting current depends on flow rate and channel geometry.",
        "Porous flow-through electrodes give enormous electroactive area per volume and push conversion toward completeness.",
        "Because residence time is a design variable, conversion can be traded against throughput.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A channel cell is exactly what it sounds like: two " +
            "plates a millimetre or less apart, the working electrode " +
            "making one wall, the counter electrode the other, and a " +
            "pump pushing the solution through. The physics is the " +
            "same as the RDE - a boundary layer forms next to the wall " +
            "- but the geometry now includes a finite gap, so the " +
            "boundary layer cannot grow forever and the limiting " +
            "current is set by the interplay of flow speed, channel " +
            "height and electrode length.",
        },
        {
          kind: "para",
          text:
            "That changes the experiment's meaning. In a batch cell " +
            "the current tells you how fast the electrode reacts what " +
            "reaches it. In a channel cell it also tells you how much " +
            "of the incoming reactant is consumed before it leaves. " +
            "Push the flow slowly and you convert nearly everything; " +
            "push it fast and most reactant escapes. Throughput and " +
            "conversion become two knobs on the same dial, which is " +
            "exactly the design question in an industrial reactor.",
        },
        {
          kind: "para",
          text:
            "Flow-through porous electrodes take the idea further: " +
            "instead of a flat wall, the fluid is pushed through a " +
            "thick, high-surface-area bed of electrode material. " +
            "Reactant then sees wall area from every side, and " +
            "because the area-to-volume ratio is enormous, even a fast " +
            "pump can be held up long enough for near-complete " +
            "conversion. Fuel cells, electrolysers and sensors all " +
            "exploit this format.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Residence time is the message",
          body:
            "In flow methods the experimental variable is how long " +
            "each parcel of fluid spends at the electrode. Current is " +
            "then a statement about conversion per pass, not just " +
            "about the surface.",
        },
      ],
    },
    {
      id: "koutecky-levich",
      tone: "coral",
      title: "Koutecký-Levich: separating kinetics from transport",
      minutes: 8,
      summary:
        "Measure the current at several rotation rates and plot the " +
        "reciprocal of the current against the reciprocal of the " +
        "square root of rotation rate. The intercept gives the " +
        "kinetic current; the slope gives the transport coefficient.",
      keyPoints: [
        "At any practical potential the measured current is the series combination of the kinetic current and the mass-transfer current, so 1/i = 1/i_k + 1/i_L.",
        "Because i_L rises as sqrt(omega), plotting 1/i against 1/sqrt(omega) is a straight line for a kinetics-limited component.",
        "The intercept is 1/i_k, the pure kinetic current; the slope contains n, D and C.",
        "This Koutecký-Levich analysis is the standard way to report electrocatalyst performance on an RDE.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "In Lesson 5 we said the observed current can be limited " +
            "by how fast the electron transfer runs or by how fast the " +
            "reactant arrives. The RDE turns that into geometry: spin " +
            "faster and the arrival rate improves, but the intrinsic " +
            "kinetic rate does not care how fast you spin. So the two " +
            "limits act like resistors in series - the current is " +
            "set by whichever is harder.",
        },
        {
          kind: "formula",
          tex: String.raw`\frac{1}{i} = \frac{1}{i_k} + \frac{1}{i_L} = \frac{1}{i_k} + \frac{1}{0.620\, n F A D^{2/3} C \nu^{-1/6} \omega^{1/2}}`,
          caption:
            "The Koutecký-Levich equation. The measured current is the " +
            "series combination of kinetic control (i_k, " +
            "spin-independent) and transport control (i_L, growing " +
            "as sqrt(omega)).",
        },
        {
          kind: "para",
          text:
            "The practical form is a plot. Take the measured current " +
            "`i` at a fixed potential and several rotation rates, and " +
            "plot `1/i` on the y-axis against `1/sqrt(omega)` on the " +
            "x-axis. Because `1/i_L` is linear in `1/sqrt(omega)`, the " +
            "data fall on a straight line. Its *slope* is set by the " +
            "Levich parameters `n F A D^{2/3} C nu^{-1/6}`; its " +
            "*intercept* is `1/i_k`, the pure kinetic current you " +
            "would measure if transport were infinitely fast.",
        },
        {
          kind: "para",
          text:
            "This is the most-used graph in electrocatalysis. Report a " +
            "catalyst as a single current at one rotation rate and a " +
            "skeptic can always say the number was really transport. " +
            "Report the Koutecký-Levich intercept and you have removed " +
            "transport from the claim: the intercept is the electrode's " +
            "honest kinetic rate at that potential. The same plot also " +
            "tells you how many electrons the reaction passes, because " +
            "the slope carries the factor `n` explicitly.",
        },
        {
          kind: "callout",
          variant: "warn",
          title: "Intercept, not slope, is the catalyst",
          body:
            "The slope of a Koutecký-Levich plot knows only the Levich " +
            "parameters: n, D, C. The intercept extrapolates to infinite " +
            "rotation, where transport is no longer limiting - it is " +
            "the only part of the plot that sees the catalyst's " +
            "intrinsic activity.",
        },
      ],
    },
    {
      id: "choosing-a-hydrodynamic-method",
      tone: "teal",
      title: "Choosing a hydrodynamic method",
      minutes: 5,
      summary:
        "RDE for clean kinetics, RRDE for intermediates, channel and " +
        "flow-through cells for conversion per pass. The flow regime " +
        "picks the tool.",
      keyPoints: [
        "Use the RDE when you want a uniform, settable mass-transfer coefficient and a Koutecký-Levich kinetic intercept.",
        "Use the RRDE to detect intermediates and measure their collection efficiency.",
        "Use channel and flow-through cells when the question is conversion, residence time, or industrial throughput.",
        "All share one logic: controlled flow makes mass transfer a known quantity instead of a nuisance.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "The three families differ less in physics than in what " +
            "they let you dial. The RDE fixes the transport coefficient " +
            "through the rotation rate; the RRDE adds a second, " +
            "independent detector on the same controlled flow; channel " +
            "and flow-through cells replace rotation with a pump and " +
            "make conversion per pass the headline number.",
        },
        {
          kind: "table",
          head: ["Method", "How flow is imposed", "What it is best at"],
          widths: [1.6, 2.2, 2.6],
          rows: [
            ["Rotating disk", "Spin the electrode", "Uniform surface transport; Koutecký-Levich kinetics"],
            ["Ring-disk", "Spin the electrode, second ring detector", "Intermediates, collection efficiency, pathway branching"],
            ["Channel/flow-through", "Pump through a thin channel or porous bed", "Conversion per pass, throughput, reactor design"],
          ],
        },
        {
          kind: "para",
          text:
            "A good workflow is usually RDE first: quantify the " +
            "limiting current, check the sqrt(omega) law, and take the " +
            "Koutecký-Levich intercept for the kinetics. Move to the " +
            "RRDE when a suspected intermediate needs catching, and " +
            "scale up to a channel or flow-through cell when the answer " +
            "has to survive contact with a real reactor.",
        },
        {
          kind: "worked",
          title: "Levich scaling on the disk",
          given:
            "On an RDE, i_L = 150 uA at 1600 rpm. What is i_L at 400 rpm?",
          steps: [
            String.raw`i_L \propto \omega^{1/2}`,
            String.raw`i_L(400) = 150\ \mu\mathrm{A} \times \sqrt{400/1600} = 150 \times 0.5`,
            String.raw`i_L(400) = 75\ \mu\mathrm{A}`,
          ],
          result:
            "75 uA. A fourfold cut in rotation halves the current: speed beats thickness in the diffusion layer.",
        },
        {
          kind: "worked",
          title: "Extracting i_k from a Koutecký-Levich line",
          given:
            "At one potential, 1/i against 1/sqrt(omega) is linear with intercept 1/i_k = 4.0e3 A^{-1} and slope such that at omega = 3200 rpm (181 rad/s), 1/i = 6.0e3 A^{-1}. Find i_k.",
          steps: [
            String.raw`\frac{1}{i} = \frac{1}{i_k} + \frac{1}{i_L}`,
            String.raw`i_k = 1/(4.0\times10^{3}) = 2.5\times10^{-4}\ \mathrm{A}`,
            String.raw`\text{At 3200 rpm: } i = 1/(6.0\times10^{3}) = 1.67\times10^{-4}\ \mathrm{A}`,
          ],
          result:
            "The pure kinetic current is 250 uA; at 3200 rpm it is held down to 167 uA by transport. That gap between the intercept and the measured current is the transport correction.",
        },
      ],
      cta: {
        title: "Make the cell sing",
        body:
          "Time-domain pulses, sweeps and steady flows all prod the " +
          "system directly. In Lesson 11 we nudge it with a small " +
          "alternating signal and listen to the response - impedance " +
          "spectroscopy.",
        href: "/lessons/lesson-10/quiz",
        linkLabel: "Take the Lesson 10 quiz",
        secondaryHref: "/lessons/lesson-11",
        secondaryLabel: "Go to Lesson 11",
      },
    },
  ],
};
