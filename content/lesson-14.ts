// Lesson 14 - Batteries, fuel cells and devices.
//
// Source syllabus: Bagotsky ch.19-21. The chapters set the coverage and the
// numbers; every sentence, formula and question here is original.

import type { Lesson } from "./types";
import { lesson14Mcq } from "./lesson-14.mcq";

export const lesson14: Lesson = {
  slug: "lesson-14",
  label: "Lesson 14",
  title: "Batteries, fuel cells and devices",
  summary:
    "Corrosion was the cell we did not mean to build. This lesson turns " +
    "the entire pedagogy around and looks at cells we build on purpose: " +
    "batteries, which store reactants in a can, fuel cells, which feed " +
    "reactants across a membrane, and supercapacitors, which store " +
    "charge in the double layer itself. The lesson covers what each one " +
    "stores, how to count its capacity and energy, and what sets its " +
    "rate.",
  order: 14,
  minutes: 55,
  mcq: lesson14Mcq,
  intro: [
    {
      kind: "para",
      text:
        "A battery is a thermodynamic proposition with a delivery " +
        "schedule. Its open-circuit voltage is set by the chemistry of " +
        "the couple inside; its capacity is set by how much reactant " +
        "fits in the can; its lifetime is set by how well the couple " +
        "repeats. Get all three right and you have a device. Get one " +
        "wrong and you have a laboratory curiosity.",
    },
    {
      kind: "para",
      text:
        "Following Bagotsky ch.19-21 we first ask what a battery is " +
        "actually storing, then count capacity and energy like a " +
        "chemist, then survey the three families - primary, storage, " +
        "and lithium - plus supercapacitors, and close with fuel cells " +
        "and the sensors that turn the same interfacial physics into " +
        "measurement.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "The one-sentence summary of this lesson",
      body:
        "A battery is a confined cell, a fuel cell is a fed cell, and a " +
        "supercapacitor is a charged double layer: the same " +
        "thermodynamics and interfacial physics, packaged three " +
        "different ways.",
    },
  ],
  sections: [
    {
      id: "what-a-battery-stores",
      tone: "azure",
      title: "What a battery actually stores",
      minutes: 7,
      summary:
        "A battery is not a box of electrons. It is a box of chemical " +
        "free energy, packaged as two reactants separated by an " +
        "insulator, ready to run a cell reaction on demand.",
      keyPoints: [
        "A battery stores chemical free energy; its terminals are where that free energy is offered as voltage.",
        "A cell contains an anode reactant, a cathode reactant, and an electrolyte that carries ions but blocks electrons.",
        "Open-circuit voltage is the free energy of the cell reaction per unit charge; capacity is the total charge the reactants can deliver.",
        "A battery's energy density is limited by how much reactant mass and how much voltage its chemistry can combine.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Shake a dead battery and it is still full of material. " +
            "What left is the *ability* of that material to react " +
            "usefully. A battery stores free energy, not charge: the " +
            "charge in a phone battery's terminals is a rounding error. " +
            "What actually flows is electrons driven by the chemical " +
            "potential difference between two reactants that want very " +
            "different things - one to give electrons, one to take " +
            "them.",
        },
        {
          kind: "para",
          text:
            "A single cell has three parts. The **anode** holds the " +
            "reductant - the fuel; it gives up electrons when the " +
            "circuit is closed. The **cathode** holds the oxidant; it " +
            "accepts them. Between them is an **electrolyte** that " +
            "conducts ions but not electrons, so the electrons are " +
            "forced through the external circuit to get from anode to " +
            "cathode. That one design decision - ionic conduction, " +
            "electronic insulation - is what makes the battery a " +
            "battery.",
        },
        {
          kind: "para",
          text:
            "The open-circuit voltage is set by the two half-reactions " +
            "through ΔG = -nFE, exactly as Lesson 3 taught. The " +
            "capacity - how many coulombs the cell can deliver before " +
            "the reactants are used up - is set by the amount of " +
            "reactant packed in. The watt-hours of a battery are the " +
            "product of the two, which is why metals with a high " +
            "cell voltage *and* a light atomic mass, like lithium, " +
            "keep reappearing in the designs.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Energy = voltage × charge",
          body:
            "A battery is specified by three numbers: the voltage it " +
            "can sustain, the charge it can deliver (capacity), and " +
            "the rate at which it can deliver it (power). A small " +
            "battery can have huge power; a big one can be very slow. " +
            "The three together define the device.",
        },
      ],
    },
    {
      id: "capacity-rate-life",
      tone: "indigo",
      title: "Capacity, rate and life",
      minutes: 8,
      summary:
        "Three numbers describe any practical battery: how much charge " +
        "it can deliver, how fast, and how many times. Each comes from " +
        "a different corner of Lesson 4 and Lesson 5.",
      keyPoints: [
        "Capacity is the total charge deliverable, counted in ampere-hours; it is finite because the reactants are finite.",
        "Rate capability is where kinetics and mass transfer say how much of that capacity is available at a given discharge current.",
        "Cycle life is how many charge-discharge round trips before side reactions and mechanical strain erode the capacity.",
        "The C-rate normalises current: a 1C discharge empties the cell in one hour.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Ask a battery datasheet three questions. **Capacity**: how " +
            "many ampere-hours can it deliver before the voltage " +
            "collapses? That number is just the amount of reactant in " +
            "the can, expressed in coulombs. **Rate**: at what current " +
            "can it deliver that capacity? A cell that passes 2 A " +
            "cannot pass 20 A without its voltage sagging under " +
            "overpotential and mass-transfer limits. **Life**: how many " +
            "times can it be filled and emptied before it fades? Each " +
            "cycle leaks a little through side reactions, and a little " +
            "more through the mechanical breathing of the electrodes.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "C-rate: the speedometer",
          body:
            "Discharge current is best quoted as a C-rate: 1C empties " +
            "the nominal capacity in one hour, 2C in half an hour, C/2 " +
            "in two hours. It puts a phone cell and a grid-scale cell " +
            "on the same scale.",
        },
        {
          kind: "para",
          text:
            "Rate capability is where the earlier lessons return. A " +
            "cell's voltage under load is its open-circuit voltage " +
            "minus activation overpotentials at both electrodes, " +
            "minus the ohmic drop through the electrolyte, minus the " +
            "concentration gradients of Lesson 4. Drain the cell at 1C " +
            "and all four terms are small. Drain it at 10C and the " +
            "overpotentials balloon, the voltage collapses, and the " +
            "usable capacity plummets - even though the reactants are " +
            "still in there.",
        },
        {
          kind: "formula",
          tex: String.raw`V_{\text{battery}} = E_{\text{OCV}} - \eta_{\text{act}} - i R_{\Omega} - \eta_{\text{conc}}`,
          caption:
            "The voltage of a working battery is its open-circuit " +
            "voltage minus three losses. Better kinetics, lower " +
            "resistance and stronger stirring all raise the voltage at " +
            "a given rate - which is why electrode engineering is " +
            "battery engineering.",
        },
      ],
    },
    {
      id: "primary-storage-lithium",
      tone: "violet",
      title: "The three families of battery",
      minutes: 8,
      summary:
        "Primary cells run once and are discarded; storage cells are " +
        "designed to be reversed; lithium-ion cells do the same trick " +
        "with the lightest, most energetic alkali metal available.",
      keyPoints: [
        "Primary batteries deliver one discharge; the reaction is not designed to be driven backward.",
        "Secondary (storage) batteries are built so the reaction can be reversed: charge, discharge, repeat.",
        "Lithium-ion changes the mechanism: rather than dissolving, Li+ ions shuttle between two solid hosts and insert or remove themselves.",
        "Lithium's low equivalent weight and high cell voltage make it the densest practical storage chemistry.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "A primary battery is built to be spent. Alkaline AAs, " +
            "zinc-carbon torches, disposable lithium coin cells: the " +
            "reaction is chosen for cost and shelf life, not for " +
            "reversibility. That makes them cheap and long-lived on " +
            "the shelf, and unhelpful once they are flat.",
        },
        {
          kind: "para",
          text:
            "A secondary, or storage, battery is the same idea with " +
            "the arrow turned around. Lead-acid in a car, NiMH in a " +
            "drill, and Li-ion in a phone all accept charge back from " +
            "the charger and return it on demand. The chemistry must " +
            "therefore be *reversible*: the discharge products have to " +
            "stay where they formed, close enough to the electrode to " +
            "be converted back, cycle after cycle, without rebuilding " +
            "the cell.",
        },
        {
          kind: "para",
          text:
            "Lithium-ion made this reversibility elegant. In a Li-ion " +
            "cell there is no dissolving metal. Li+ ions sit inside two " +
            "solid host lattices - typically graphite at the anode and " +
            "a lithium metal oxide at the cathode. On discharge the " +
            "Li+ ions leave the graphite, cross the electrolyte, and " +
            "insert into the oxide; on charge, the electric field " +
            "pulls them back. The reaction is purely " +
            "'shuttling', and shuttling is very clean, which is why " +
            "the cells last hundreds of cycles.",
        },
        {
          kind: "callout",
          variant: "term",
          title: "Intercalation",
          body:
            "Inserting a guest ion into a host lattice is called " +
            "intercalation. The host keeps its structure; the guest " +
            "slides between its layers. That mechanical stability is " +
            "the deep reason lithium-ion cells survive so many " +
            "cycles - the electrode does not dissolve and re-grow " +
            "each time.",
        },
      ],
    },
    {
      id: "supercapacitors",
      tone: "rose",
      title: "Supercapacitors: the charged double layer, productised",
      minutes: 7,
      summary:
        "A supercapacitor is the double layer from Lesson 6 scaled " +
        "into a device: enormous area, tiny separation, and charge " +
        "stored electrostatically rather than chemically.",
      keyPoints: [
        "A supercapacitor stores charge in two double layers back-to-back across a porous carbon with surface area measured in square metres per gram.",
        "No chemical reaction means no degradation of the electrode: cycles in the hundreds of thousands are routine.",
        "It delivers power, not energy: it charges and discharges in seconds, but its watt-hours are a fraction of a battery's.",
        "Hybrid devices combine a battery's energy density with a supercapacitor's power and life.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Go back to the capacitor. Two plates, a dielectric, and " +
            "charge stored by keeping charges apart. A supercapacitor " +
            "is the same device with the separation shrunk to a " +
            "nanometre and the area blown up to hundreds of square " +
            "metres. The 'plates' are two electrodes of activated " +
            "carbon; the 'dielectric' is the double-layer structure of " +
            "Lesson 6; and the ionic electrolyte plays the role of the " +
            "material that dissipates into the gap. Because C grows " +
            "with area and shrinks with separation, both changes chase " +
            "capacitance upward.",
        },
        {
          kind: "formula",
          tex: String.raw`C = \frac{\varepsilon A}{d}`,
          caption:
            "Capacitance. Supercapacitors maximise it by combining a " +
            "huge effective area from a nanoporous carbon with a " +
            "separation set by the ion-size scale of the double layer.",
        },
        {
          kind: "para",
          text:
            "The physics buys two things. First, speed: charging a " +
            "double layer takes milliseconds, so a supercapacitor can " +
            "soak up a braking event or deliver a starting crank in " +
            "seconds - power, not energy. Second, life: because no " +
            "chemical bond is made or broken, nothing wears out. A " +
            "battery ages with every cycle; a supercapacitor barely " +
            "notices the count. What it lacks is energy density: it " +
            "holds perhaps a tenth of the watt-hours per kilogram of " +
            "a good lithium cell.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "Battery and supercapacitor are complements",
          body:
            "A battery is a slow, rich store; a supercapacitor is a " +
            "fast, shallow one. Hybrid packs - or systems that use " +
            "both - take the deep discharge from the battery and the " +
            "peaks from the capacitor, and each technology lasts " +
            "longer for the compromise.",
        },
      ],
    },
    {
      id: "fuel-cells",
      tone: "coral",
      title: "Fuel cells: a fed cell, not a stored one",
      minutes: 8,
      summary:
        "A fuel cell is the continuous-feed cousin of the battery: " +
        "reactants flow in, products flow out, and the cell runs as " +
        "long as the feed does.",
      keyPoints: [
        "A fuel cell never stores its reactants; hydrogen and oxygen are fed continuously, and the cell runs as long as they flow.",
        "Electricity is produced by a controlled, interfacial oxidation of the fuel and reduction of the oxidant across a membrane.",
        "PEM fuel cells use a proton-conducting polymer; direct methanol cells feed methanol instead of hydrogen.",
        "The theoretical voltage is limited by the same ΔG = -nFE as a battery, and real cells sag under the same overpotential budget.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Swap the battery's sealed can for a plumbing diagram and " +
            "you get a fuel cell. The two reactants - most often " +
            "hydrogen and oxygen - are fed across two porous " +
            "electrodes separated by a membrane, and the cell delivers " +
            "current for as long as the feed keeps flowing. Nothing in " +
            "the cell is 'spent'; the fuel is spent. That distinction " +
            "is the whole engineering content of the device.",
        },
        {
          kind: "para",
          text:
            "At the anode the fuel is oxidised: H2 splits into protons " +
            "and electrons. The protons cross the membrane; the " +
            "electrons are pushed around the external circuit - the " +
            "power stroke. At the cathode they meet again and reduce " +
            "oxygen to water. Every design choice - catalyst, " +
            "membrane, gas diffusion layer - is there to make those " +
            "three steps fast, selective, and watertight.",
        },
        {
          kind: "formula",
          tex: String.raw`\text{Anode: } H_2 \rightarrow 2H^+ + 2e^-, \qquad \text{Cathode: } \tfrac{1}{2}O_2 + 2H^+ + 2e^- \rightarrow H_2O`,
          caption:
            "The PEM fuel-cell half-reactions. Hydrogen is split at " +
            "the anode; the electrons travel through the circuit; " +
            "oxygen is reduced at the cathode using those electrons " +
            "and the protons that crossed the membrane.",
        },
        {
          kind: "para",
          text:
            "The thermodynamic ceiling is the same ΔG = -nFE as for a " +
            "battery - about 1.23 V for hydrogen and oxygen at standard " +
            "conditions. Real cells sit well below it, paying the " +
            "usual taxes: activation overpotential at both electrodes, " +
            "especially at the sluggish oxygen-reduction cathode, the " +
            "ohmic drop across the membrane, and concentration losses " +
            "when the gas supply lags. The clear parallel to the " +
            "battery voltage budget of Lesson 8 is no accident: it is " +
            "the same ledger.",
        },
      ],
    },
    {
      id: "sensors-and-transducers",
      tone: "amber",
      title: "Sensors and transducers",
      minutes: 6,
      summary:
        "The same interfacial physics, read backward, makes a sensor: " +
        "let the analyte set the potential or the current, and the " +
        "device reports its size.",
      keyPoints: [
        "A sensor converts a chemical amount into an electrical signal; the signal must be selective for one species.",
        "Amperometric sensors run a near-mass-transfer-limited current and report the limiting current as the concentration.",
        "Potentiometric sensors read the potential of an ion-selective membrane at zero current, as in the pH electrode.",
        "Selectivity comes from the same place it always comes from: the chemistry at the interface, tuned to one reaction.",
      ],
      blocks: [
        {
          kind: "para",
          text:
            "Every device in this lesson is an energy-conversion " +
            "device. A sensor is the quieter cousin: it converts a " +
            "chemical measurement into an electrical one, and the " +
            "battery of Lesson 7 runs backward. Hold the potential at " +
            "the limiting current and the current becomes a " +
            "concentration meter; hold the current at zero and the " +
            "potential becomes one.",
        },
        {
          kind: "para",
          text:
            "An amperometric sensor is the first case. Fix the " +
            "potential deep in the mass-transfer limit and the " +
            "steady current is - by Levich or Cottrell, depending on " +
            "geometry - proportional to the analyte concentration. " +
            "Blood-glucose strips work exactly this way: glucose " +
            "oxidises at the working electrode, and the charge passed " +
            "in a few seconds is the glucose count.",
        },
        {
          kind: "para",
          text:
            "A potentiometric sensor is the second case. Let an " +
            "ion-selective membrane set the surface concentration " +
            "ratio, and the open-circuit potential reports the analyte " +
            "activity through Nernst. The pH electrode of Lesson 7 is " +
            "the archetype: a glass membrane whose two faces see " +
            "different proton activities develops a potential " +
            "proportional to their ratio. Same physics, same " +
            "equilibrium, read as a measurement instead of a cell " +
            "voltage.",
        },
        {
          kind: "callout",
          variant: "key",
          title: "The interface is the sensing element",
          body:
            "A sensor is only as selective as the chemistry at its " +
            "working surface. Tuning that chemistry - a catalyst, a " +
            "membrane, a mediator - is the whole of sensor design.",
        },
        {
          kind: "worked",
          title: "Cell voltage under load",
          given:
            "A cell's OCV is 3.7 V. At 1C discharge it loses 60 mV activationally, 40 mV ohmically, and 30 mV to concentration. Terminal voltage?",
          steps: [
            String.raw`V = E_{OCV} - \eta_{act} - iR - \eta_{conc}`,
            String.raw`V = 3.7 - 0.060 - 0.040 - 0.030 = 3.57\ \mathrm{V}`,
          ],
          result:
            "3.57 V. Every kinetic or ohmic improvement shows up directly as terminal voltage - and the discharge stops early when that voltage slides below the electronics' cutoff.",
        },
        {
          kind: "worked",
          title: "Energy in a pack",
          given:
            "A 2.0 Ah lithium cell works at 3.6 V. What energy does it store, and at what power does it deliver that in two hours?",
          steps: [
            String.raw`E = V \times Q = 3.6 \times 2.0 = 7.2\ \mathrm{Wh}`,
            String.raw`P = E/t = 7.2/2.0 = 3.6\ \mathrm{W}`,
          ],
          result:
            "7.2 Wh, delivered at 3.6 W over two hours (a C/2 discharge). Watt-hours are the true 'size' of a battery; everything else is volts per cell and pack configuration.",
        },
      ],
      cta: {
        title: "Refine the surface",
        body:
          "Devices store or convert energy; surfaces decide how well. " +
          "Lesson 15 looks at the electrode surface itself - plating, " +
          "modified electrodes, and the techniques that watch them.",
        href: "/lessons/lesson-14/quiz",
        linkLabel: "Take the Lesson 14 quiz",
        secondaryHref: "/lessons/lesson-15",
        secondaryLabel: "Go to Lesson 15",
      },
    },
  ],
};
