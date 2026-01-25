# 🛰️ AstroDash: Mission Control Telemetry Dashboard

**AstroDash** is a high-fidelity, real-time telemetry monitoring interface designed for aerospace and robotics mission operations. Built with **React**, **Next.js**, and **Tailwind CSS**, it simulates a live uplink with an orbital satellite, focusing on data density, operator situational awareness, and system reliability.

---

## 🚀 Key Strategic Features

### 1. Real-Time Telemetry Engine
* **High-Frequency Stream:** Developed a custom React Hook (`useTelemetry`) to manage a 1Hz data stream, simulating live satellite packet reception.
* **Data Sanitization:** Implemented defensive programming patterns (`parseFloat` and logical fallbacks) to ensure UI stability against data "jitter" or malformed packets.

### 2. Intuitive Operator UX
* **Contextual Unit Switching:** Features a global state toggle for **Metric/Imperial/Kelvin** systems, allowing operators to switch contexts without losing data continuity—a critical requirement for international mission teams.
* **Signal Interpretation:** Translated raw dBm signal values into a 4-tier visual quality indicator, providing immediate "at-a-glance" status for communication links.

### 3. Safety-Critical Alerting
* **State-Driven Visual Interrupts:** Integrated a pulsing **Critical Alert Overlay** triggered by specific telemetry thresholds (e.g., Temperature > 30°C), ensuring operator attention during system anomalies.
* **Event Sequence Log (SOE):** A chronological buffer that captures and timestamps system events with unique collision-resistant IDs, crucial for post-mission analysis.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** React 18 / Next.js
* **Styling:** Tailwind CSS (Dark-mode optimized for control room environments)
* **State Management:** Functional State & Custom Hooks (Optimized for high-volume data)
* **Logic:** JavaScript (ES6+) with a focus on **encapsulation** and **reusable components**.

---

## 📂 Architecture Overview

The project follows a decoupled architecture to ensure the UI remains performant even during high-load data bursts:



* **`useTelemetry.js`**: The "Subsystem" layer. Handles interval logic, data math, and threshold detection.
* **`AstroDash.js`**: The "Operator Station." Handles the presentation, unit conversion, and user interactions.

---

## 💡 Engineering Challenges Solved

> **Challenge:** Handling high-frequency data updates without UI flickering or "NaN" errors during rapid state changes.
> 
> **Solution:** Implemented a functional state update pattern within `setInterval` to prevent stale closures. Used `useCallback` to memoize the logging function, preventing unnecessary re-renders of the telemetry feed.

---

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/arduino731/arduino731.github.io/tree/main/app/projects/1/AstroDash](https://github.com/arduino731/arduino731.github.io/tree/main/app/projects/1/AstroDash)