import { useState, useEffect, useCallback } from 'react';

export const useTelemetry = (isBoosting) => {
  const [data, setData] = useState({
    battery: 85.0,
    temp: 22.0,
    signal: 98,
    altitude: 300000, // Starting altitude in meters (LEO Orbit)
    integrity: 100,   // Structural integrity percentage
    stability: 100,
    status: "NOMINAL",
    timestamp: new Date().toLocaleTimeString()
  });

  const [logs, setLogs] = useState([
    { id: 1, time: new Date().toLocaleTimeString(), msg: "SYS_INITIALIZED: ORBIT_STABLE", type: "info" }
  ]);

  const addLog = useCallback((msg, type) => {
    setLogs(prev => [{
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      time: new Date().toLocaleTimeString(),
      msg,
      type
    }, ...prev].slice(0, 50));
  }, []);

  const boostAltitude = useCallback(() => {
    setData(prev => ({
      ...prev,
      altitude: Math.min(400000, prev.altitude + 2000), // Boosts by 2km
      battery: Math.max(0, prev.battery - 0.1),       // Thrusters consume extra power
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        let calculatedSignal = 100 - (prev.altitude / 400000 * 100);
  
        // Clamp between 0 and 100
        calculatedSignal = Math.max(0, Math.min(100, calculatedSignal));

        // Add a tiny "Real-time interference" flicker (+/- 1.5%)
        const interference = calculatedSignal > 0 ? (Math.random() * 3 - 1.5) : 0;
        const newSignal = Math.max(0, Math.min(100, calculatedSignal + interference));

        // 1. Altitude Decay (Decreases by 5000m every second)
        const newAltitude = Math.max(0, prev.altitude - 5000);
        
        // 2. Heat Calculation: As altitude drops below 100km, friction increases temp
        const atmosphereEntry = 100000;
        let frictionHeat = 0;
        if (newAltitude < atmosphereEntry) {
          frictionHeat = (atmosphereEntry - newAltitude) / 800; 
        }

        const newTemp = prev.temp + frictionHeat + (Math.random() * 0.4 - 0.2);
        const drainRate = 0.25;
        const rechargeRate = 0.08; // Recharges slower than it drains
        let newBattery = prev.battery;
        if (isBoosting) {
          newBattery = Math.max(0, prev.battery - drainRate);
        } else {
          newBattery = Math.min(100, prev.battery + rechargeRate);
        }
        
        // 3. Structural Integrity Logic
        // Integrity drops if temp is above 40°C
        let integrityDamage = 0;
        if (newTemp > 40) {
          integrityDamage = (newTemp - 40) * 0.05;
        }
        const newIntegrity = Math.max(0, prev.integrity - integrityDamage);

        // 4. Log Logic (Edge Case Detection)
        if (newTemp > 35 && prev.temp <= 35) {
          addLog("THERMAL_CRITICAL: RE-ENTRY FRICTION DETECTED", "error");
        }
        if (newIntegrity < 90 && prev.integrity >= 90) {
          addLog("HULL_ALERT: STRUCTURAL_INTEGRITY_COMPROMISED", "warn");
        }
        if (newBattery < 20 && prev.battery >= 20) {
          addLog("POWER_ALERT: EMERGENCY_RESERVE_ACTIVE", "error");
        }

        let newStatus = "NOMINAL";
        if (prev.altitude >= 400000) {
          newStatus = "DISCONNECTED";
        } else if (newTemp > 45 || newIntegrity < 50) {
          newStatus = "CRITICAL";
        } else if (newTemp > 30 || newIntegrity < 80) {
          newStatus = "CAUTION";
        }

        // Calculate a weighted Stability Score
        // We give Battery and Integrity the most importance
        const batteryWeight = (newBattery / 100) * 40;     // Max 40 points
        const integrityWeight = (newIntegrity / 100) * 40; // Max 40 points
        const signalWeight = (newSignal / 100) * 20;       // Max 20 points

        const calculatedStability = batteryWeight + integrityWeight + signalWeight;


        return {
          ...prev,
          signal: newSignal, 
          battery: newBattery,
          temp: newTemp,
          altitude: newAltitude,
          integrity: newIntegrity,
          status: newStatus, 
          stability: calculatedStability,
          timestamp: new Date().toLocaleTimeString(),
          stability: calculatedStability, 
          integrity: newIntegrity,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [addLog, isBoosting]);

  return { data, logs, setLogs, boostAltitude };
};