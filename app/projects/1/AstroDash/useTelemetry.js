import { useState, useEffect, useCallback } from 'react';

export const useTelemetry = () => {
  const [data, setData] = useState({
    battery: 85.0,
    temp: 22.0,
    signal: 98,
    status: "NOMINAL",
    timestamp: new Date().toLocaleTimeString()
  });

  const [logs, setLogs] = useState([
    { id: 1, time: new Date().toLocaleTimeString(), msg: "SYS_INITIALIZED", type: "info" }
  ]);

  const addLog = useCallback((msg, type) => {
    setLogs(prev => [{
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      time: new Date().toLocaleTimeString(),
      msg,
      type
    }, ...prev].slice(0, 50));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const currentTemp = parseFloat(prev.temp) || 0;
        const currentBattery = parseFloat(prev.battery) || 0;

        const newTemp = currentTemp + (Math.random() * 0.4 - 0.2);
        const newBattery = Math.max(0, currentBattery - 0.05);

        if (newTemp > 25 && prev.temp <= 25) {
          addLog("THERMAL_WARNING: TEMP EXCEEDED 25°C", "warn");
        }
        if (newBattery < 20 && prev.battery >= 20) {
          addLog("LOW_POWER_CRITICAL: BATTERY BELOW 20%", "error");
        }

        return {
          ...prev,
          battery: newBattery,
          temp: newTemp,
          status: newTemp > 30 ? "CRITICAL" : "NOMINAL",
          timestamp: new Date().toLocaleTimeString()
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [addLog]);

  return { data, logs, setLogs };
};