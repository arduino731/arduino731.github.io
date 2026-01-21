import { useState, useEffect } from 'react';

export const useTelemetry = () => {
  const [data, setData] = useState({
    battery: 85,
    temp: 22,
    signal: 98,
    status: "NOMINAL",
    timestamp: new Date().toLocaleTimeString()
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        // Randomly fluctuate values to simulate real-world physics
        const newBattery = Math.max(0, prev.battery - (Math.random() * 0.1));
        const newTemp = prev.temp + (Math.random() * 2 - 1);
        const newSignal = Math.min(100, Math.max(0, prev.signal + (Math.random() * 4 - 2)));
        
        return {
          battery: newBattery,
          temp: newTemp,
          signal: Math.floor(newSignal),
          status: newTemp > 35 ? "CRITICAL" : "NOMINAL",
          timestamp: new Date().toLocaleTimeString()
        };
      });
    }, 1000); // 1-second data refresh rate

    return () => clearInterval(interval);
  }, []);

  return data;
};