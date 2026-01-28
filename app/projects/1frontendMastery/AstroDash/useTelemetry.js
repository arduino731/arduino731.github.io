import { useState, useEffect, useCallback } from 'react';

export const useTelemetry = (isBoosting, isSystemActive) => {
  const [data, setData] = useState({
    battery: 50.0,
    temp: 22.0,
    signal: 98,
    altitude: 300000, 
    integrity: 100,   
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

  // --- MANUAL BOOST ---
  // This is called by your button interval (every 100ms)
  const boostAltitude = useCallback(() => {
    setData(prev => {
      // If dead or disconnected, stop boosting
      if (prev.status === "DISCONNECTED") {
             return prev;
        }
      
      if (prev.integrity <= 0) {
            return { ...prev, status: "DISCONNECTED", signal: 0 };
        }

      return {
        ...prev,
        // Boost by 1.2km per click (since this runs 10x a second)
        altitude: Math.min(450000, prev.altitude + 1200), 
        battery: Math.max(0, prev.battery - 0.15), 
      };
    });
  }, []);

  // --- AUTOMATIC TICK (GRAVITY & DECAY) ---
  useEffect(() => {
    // If this is false, the "Tick" will never appear in console
    if (!isSystemActive) {
      console.log("System Idle: Waiting for Initialization");
      return; 
    }
    
    const interval = setInterval(() => {
      setData(prev => {
        // Stop all logic if integrity is gone
        if (prev.status === "DISCONNECTED") {
             return prev;
        }
        // 1. Calculate Decay (The "Fall")
        // If we are boosting, we don't fall. If idle, we drop 3000m.
        const decay = isBoosting ? 0 : 50000;
        const newAltitude = Math.max(0, prev.altitude - decay);

        // console.log("Tick: Altitude is now", newAltitude); // This should now appear
        // 1. ALTITUDE DECAY (Gravity)
        // If NOT boosting, the ship falls. If boosting, we stay level or climb.
        // We drop 1000m every second naturally.
        
        // 2. SIGNAL CALCULATION
        let calculatedSignal = 100 - (newAltitude / 400000 * 100);
        calculatedSignal = Math.max(0, Math.min(100, calculatedSignal));
        const interference = calculatedSignal > 0 ? (Math.random() * 3 - 1.5) : 0;
        const newSignal = Math.max(0, Math.min(100, calculatedSignal + interference));

        // 1. New Status Logic: Trigger Warning under 275,000 meters
        let newStatus = "NOMINAL";
        
        if (newSignal <= 0) {
           newStatus = "DISCONNECTED"; // <--- THIS FIXES THE 400KM ISSUE
        }
        // Check altitude for Warning (275km = 275000m)
        if (newAltitude < 275000) {
          newStatus = "CRITICAL"; // This triggers the red pulse overlay
        } 

        // Force Disconnect if Signal is lost (Out of Range)
        if (newSignal <= 0) {
           newStatus = "DISCONNECTED";
        }
        
        // If integrity is gone, override everything to DISCONNECTED
        if (prev.integrity <= 0 ) {
          newStatus = "DISCONNECTED";
        } 

        // 2. Signal Handling
        // If DISCONNECTED, force signal to 0
        const currentSignal = newStatus === "DISCONNECTED" ? 0 : newSignal;
        // 3. HEAT & FRICTION
        // Friction starts below 120km
        const atmosphereEntry = 120000;
        let frictionHeat = 0;
        if (newAltitude < atmosphereEntry) {
          frictionHeat = (atmosphereEntry - newAltitude) / 1000; 
        }
        // Natural cooling if high up, heating if low
        const cooling = newAltitude > atmosphereEntry ? -0.1 : 0;
        const newTemp = Math.max(20, prev.temp + frictionHeat + cooling + (Math.random() * 0.4 - 0.2));

        // 4. BATTERY LOGIC
        const rechargeRate = 0.15; 
        let newBattery = prev.battery;
        if (!isBoosting) {
          newBattery = Math.min(100, prev.battery + rechargeRate);
        }
        
        // 5. INTEGRITY DAMAGE
        let integrityDamage = 0;
        if (newTemp > 45) integrityDamage = (newTemp - 45) * 0.1;
        if (newAltitude <= 0) integrityDamage = 100; // Immediate destruction on ground hit
        
        const newIntegrity = Math.max(0, prev.integrity - integrityDamage);

        if (newIntegrity <= 0) {
            // Priority 1: Hull Destroyed
            newStatus = "DISCONNECTED";
        } 
        else if (newAltitude >= 400000 || newSignal <= 0) {
            // Priority 2: Out of Range (High Altitude)
            // This forces the Game Over screen
            newStatus = "DISCONNECTED";
        } 
        else if (newAltitude < 275000) {
            // Priority 3: Low Altitude Warning
            newStatus = "CRITICAL";
        }

        // 7. LOGS
        if (newStatus === "DISCONNECTED" && prev.status !== "DISCONNECTED") {
            if (newAltitude >= 400000) addLog("FATAL: SIGNAL_LOST_DEEP_SPACE", "error");
            else addLog("FATAL: HULL_INTEGRITY_FAILURE", "error");
        }
        else if (newTemp > 45 && prev.temp <= 45) addLog("CRITICAL: HULL_MELT_PROXIMITY", "error");
        else if (newAltitude < 50000 && prev.altitude >= 50000) addLog("WARNING: LOW_ORBIT_GRAVITY_LOCK", "warn");

        // 8. STABILITY
        const calculatedStability = ((newBattery * 0.3) + (newIntegrity * 0.5) + (newSignal * 0.2));

        return {
          ...prev,
          signal: newStatus === "DISCONNECTED" ? 0 : newSignal, 
          battery: newBattery,
          temp: newTemp,
          altitude: newAltitude,
          integrity: newIntegrity,
          status: newStatus, 
          stability: calculatedStability,
          timestamp: new Date().toLocaleTimeString(),
        };
      });

      // console.log("Tick:", data.altitude)
    }, 1000); // Run every second 

    return () => clearInterval(interval);
  }, [isBoosting, isSystemActive, addLog]);

  return { data, logs, setLogs, boostAltitude };
};