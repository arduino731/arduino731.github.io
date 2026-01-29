# 🛰️ AstroDash: Mission Control Telemetry Dashboard

**AstroDash** is a high-fidelity, real-time telemetry monitoring interface designed for aerospace mission operations. Built with **React**, **Next.js**, and **Tailwind CSS**, it simulates a live uplink with an orbital satellite, focusing on data density, pilot situational awareness, and reactive environmental physics.

---

## 🚀 Key Strategic Features

### 1. Dynamic Orbital Physics Engine
* **Orbital Decay Simulation:** Developed a custom React Hook (`useTelemetry`) to manage a complex state machine that simulates constant gravitational pull (3,000m/s decay).
* **Propulsion Mechanics:** Integrated a high-frequency (100ms) manual thruster override that allows pilots to counteract gravity at the cost of battery reserves.
* **Atmospheric Friction:** Implemented thermal logic where dropping below 120km triggers logarithmic heat increases, simulating re-entry friction.

### 2. Intuitive Operator UX
* **Contextual Unit Switching:** Features a global state toggle for **Metric/Imperial** systems, allowing operators to switch contexts without losing data continuity.
* **4-Tier Signal Interpretation:** Translates raw signal data into a visual quality indicator (Excellent to Lost), including a total "Data Stream" blackout (0%) upon mission failure.
* **State-Driven Visual Interrupts:** A pulsing **Critical Alert Overlay** triggers automatically when the satellite drops below the **275km safety threshold**.

### 3. Resilience & Failure Management
* **Mission-End Sequence:** Hard-coded failure states for hull breach (Integrity 0%) or ground impact (Altitude 0m), which severs the telemetry link and requires a system re-initialization.
* **Event Sequence Log (SOE):** A chronological, auto-scrolling buffer that captures and timestamps system events with unique, collision-resistant IDs.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React 18 / Next.js
* **Styling:** Tailwind CSS (Optimized with CRT scanline effects for "Control Room" aesthetics)
* **State Management:** Functional Hooks & Memoized Callbacks (`useCallback`, `useMemo`)
* **Logic:** JavaScript (ES6+) with a focus on **asynchronous timing synchronization**.

---

## 📂 Architecture Overview

The system utilizes a decoupled "Subsystem/Station" architecture to ensure UI performance during high-load data bursts.



* **`useTelemetry.js` (The Subsystem):** Acts as the "Physics Engine." It manages the `setInterval` logic, environmental math, and threshold detection.
* **`AstroDash.js` (The Operator Station):** The presentation layer. It consumes the telemetry stream and handles user inputs (Spacebar/Touch).

---

## 💡 Engineering Challenges Solved

> **Challenge:** Synchronizing manual thruster input with automatic environmental decay without causing UI "jitter" or state race conditions.
>  
> **Solution:** Orchestrated a dual-timing model. A high-frequency interval handles the "burst" of thrust, while a steady 1Hz "heartbeat" handles environmental constants like gravity and cooling. Used functional state updates (`setData(prev => ...)`) to ensure the telemetry never references stale data during rapid-fire inputs.

---

## 📊 Mission Parameters & Thresholds

| System | Nominal Range | Warning Threshold | Failure Point |
| :--- | :--- | :--- | :--- |
| **Altitude** | 300km - 450km | < 275km (Red Alert) | 0km (Impact) |
| **Thermal** | 20°C - 35°C | > 45°C (Hull Stress) | > 80°C (Critical Melt) |
| **Integrity** | 100% | < 75% (Hull Warning) | 0% (De-orbit) |
| **Power** | 20% - 100% | < 20% (Emergency Res.) | 0% (System Dead) |

---

## 🕹️ Instructions for Ground Control

1. **Initialize:** Click "INITIALIZE LAUNCH SEQUENCE" to establish the satellite uplink.
2. **Maintain Orbit:** Hold the **Spacebar** or the **"ENGAGE THRUSTERS"** button to increase altitude.
3. **Power Management:** Release thrusters to allow the solar arrays to recharge the battery.
4. **Recovery:** If the signal is lost, click "RE-INITIALIZE SYSTEM" to deploy a replacement satellite.
