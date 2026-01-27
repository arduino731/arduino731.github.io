'use client'
import React, { useState, useRef, useEffect } from 'react'
// import useHandleScroll from '../../../hooks/HandleScroll'
import { useTelemetry } from './useTelemetry';
import "./AstroDash.css";

export default function AstroDash({ onBack }) {
  // const { visibleSection: currentSection, showScrollButton } = useHandleScroll();
  const [isBoosting, setIsBoosting] = useState(false);
  const { data, logs, setLogs, boostAltitude } = useTelemetry(isBoosting);
  const boostTimerRef = useRef(null);
  const [isImperial, setIsImperial] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const prevAltitudeRef = useRef(data.altitude);
  

  // --- LOGIC: THRUSTER CONTROLS ---
  const startBoosting = () => {
    if (data.battery <= 0) return;
    setIsBoosting(true); // Tell the hook we are boosting!
    boostAltitude();
    boostTimerRef.current = setInterval(boostAltitude, 100); 
  };

  const stopBoosting = () => {
    setIsBoosting(false); // Tell the hook to start recharging!
    clearInterval(boostTimerRef.current);
    boostTimerRef.current = null;
  };
  

  // Accessibility: Spacebar Support
  useEffect(() => {
    if (prevAltitudeRef.current < 300000 && data.altitude >= 300000) {
      setShowSuccess(true);
      
      // Inject a celebration log
      setLogs(prev => [{
        id: Date.now(),
        time: new Date().toLocaleTimeString().split(' ')[0],
        msg: ">>> SUCCESS: TARGET ORBIT ACHIEVED. STABILIZING...",
        type: 'success' // You'll need to handle this color in your log mapper
      }, ...prev]);

      setTimeout(() => setShowSuccess(false), 3000);
    }
    prevAltitudeRef.current = data.altitude;
  }, [data.altitude, setLogs]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !boostTimerRef.current) {
        e.preventDefault();
        startBoosting();
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space') stopBoosting();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [data.battery]);

  // --- HELPERS ---
  const getSignalQuality = (signal) => {
    const s = Number(signal);
    // If status is disconnected or integrity is 0
    if (data.status === 'DISCONNECTED' || data.integrity <= 0) {
      return { label: 'LOST', color: 'text-red-600', bar: 'bg-slate-800', count: 0 };
    }
    
    if (s >= 75) return { label: 'EXCELLENT', color: 'text-green-400', bar: 'bg-green-500', count: 4 };
    if (s >= 50) return { label: 'GOOD', color: 'text-blue-400', bar: 'bg-blue-500', count: 3 };
    if (s >= 25) return { label: 'FAIR', color: 'text-yellow-400', bar: 'bg-yellow-500', count: 2 };
    if (s > 0)   return { label: 'POOR', color: 'text-orange-500', bar: 'bg-orange-500', count: 1 };
    
    return { label: 'LOST', color: 'text-red-600', bar: 'bg-slate-800', count: 0 };
  };

  const formatTemp = (celsius) => {
    const c = Number(celsius) || 0;
    if (!isImperial) return `${c.toFixed(1)}°C`;
    const fahrenheit = (c * 9) / 5 + 32;
    return `${fahrenheit.toFixed(1)}°F`;
  };

  return (
    <article className="crt-scanlines astro-grid-bg colorBackgroundOpposite colorText min-h-screen pb-20">
      
      {/* 1. CRITICAL OVERLAY */}
      {data.status === 'CRITICAL' && (
        <div className="fixed inset-0 z-[100] pointer-events-none border-[12px] border-red-600/30 animate-pulse shadow-[inset_0_0_100px_rgba(220,38,38,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-b-lg font-black text-[10px] tracking-[0.2em]">
            CRITICAL_SYSTEM_FAILURE_WARNING
          </div>
        </div>
      )}
      {/* 2. SUCCESS CELEBRATION OVERLAY */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] pointer-events-none border-[12px] border-green-500/40 animate-pulse shadow-[inset_0_0_100px_rgba(34,197,94,0.3)]">
          {/* Success Banner */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="bg-green-600 text-black px-10 py-3 rounded-sm font-black text-2xl tracking-[0.5em] animate-[bounce_0.5s_ease-in-out_infinite] shadow-[0_0_30px_rgba(34,197,94,0.6)]">
              ORBIT_STABILIZED
            </div>
            <p className="text-green-400 font-mono text-xs tracking-widest bg-black/80 px-4 py-1">
              ALTITUDE_ABOVE_THRESHOLD // 300,000M REACHED
            </p>
          </div>
          
          {/* Decorative Green Scanlines during success */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(34,197,94,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-full">
        <button onClick={onBack} className="shadow-xl bg-white text-black px-6 py-2 rounded-full border border-slate-200 transition-all font-bold text-sm hover:scale-105 active:scale-95">
          ← Back to Showcase
        </button>
      </nav>

      <header className="relative flex flex-col items-center py-24 px-4 overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_15px_cyan]" />
        <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] colorText uppercase italic text-center">
          Astro<span className="not-italic">Dash</span>
        </h1>
        <p className="text-xs colorText mt-2 tracking-[0.5em] uppercase font-mono text-center">Remote_Telemetry_Control // Terminal_01</p>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-10">
        
        {/* TOP LAYER: OBSERVATION (The Charts) */}
        <section id="target-section" className="bg-slate-950 rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800 font-mono ring-4 ring-slate-900/50">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 tracking-tighter">ASTRO-DASH <span className="font-light text-slate-500 text-sm italic text-nowrap">v1.1.0</span></h2>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.3em]">Sector: Tera-7 Orbital Operations</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
                <button onClick={() => setIsImperial(false)} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${!isImperial ? 'bg-cyan-500 text-white' : 'text-slate-500'}`}>METRIC</button>
                <button onClick={() => setIsImperial(true)} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${isImperial ? 'bg-cyan-500 text-white' : 'text-slate-500'}`}>IMPERIAL</button>
              </div>
            </div>
          </div>

          {/* Mini-Status Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">              
            {data.signal === 0 && (
                <div className="fixed inset-0 z-[120] bg-black/60 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-slate-950 border-2 border-red-900 p-8 rounded-xl text-center shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                    <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <h2 className="text-red-500 font-black text-2xl tracking-tighter mb-2 italic">SIGNAL_DISCONNECTED</h2>
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">
                      Altitude exceeds maximum uplink range.<br/>
                      Initiating automatic orbital decay...
                    </p>
                  </div>
                </div>
          )}
                {/* DATA STREAM ENGINE CARD */}
                <div className={`p-5 border-l-4 transition-all duration-500 rounded-r-xl backdrop-blur-sm 
                  ${data.status === 'DISCONNECTED' ? 'border-red-900 bg-red-950/20' : 'border-blue-500 bg-blue-500/5'}`}>
                  
                  <div className="flex justify-between items-start">
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-400">Data_Stream_Engine</h3>
                    <span className={`flex h-2 w-2 rounded-full ${data.status !== 'DISCONNECTED' ? 'bg-blue-500 animate-ping' : 'bg-red-600 shadow-[0_0_10px_red]'}`}></span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-xl font-black text-white tracking-tight">
                      {data.status === 'DISCONNECTED' ? '00' : Math.floor(data.signal)}
                      <span className="text-[10px] font-light text-slate-500 ml-1">%</span>
                    </p>
                    <span className={`text-[10px] font-bold uppercase ${getSignalQuality(data.signal).color}`}>
                      {data.status === 'DISCONNECTED' ? 'OFFLINE' : getSignalQuality(data.signal).label}
                    </span>
                  </div>

              {/* VISUAL SIGNAL BARS */}
              <div className="mt-3 flex items-end gap-1 h-4">
                {[1, 2, 3, 4].map((barIndex) => (
                  <div 
                    key={barIndex}
                    className={`w-2 rounded-t-sm transition-all duration-300 ${
                      barIndex <= getSignalQuality(data.signal).count 
                        ? getSignalQuality(data.signal).bar 
                        : 'bg-slate-800'
                    }`}
                    style={{ height: `${barIndex * 25}%` }}
                  />
                ))}
                
                {data.status === 'DISCONNECTED' && (
                  <span className="text-[9px] text-red-500 font-black ml-2 animate-pulse tracking-tighter">
                    LINK_SEVERED
                  </span>
                )}
              </div>
            </div>
            <div className={`p-5 border-l-4 transition-all duration-500 rounded-r-xl backdrop-blur-md 
              ${data.status === 'CRITICAL' ? 'border-red-500 bg-red-950/40' : 'border-cyan-500 bg-cyan-950/20'}`}>
              
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Pilot_Status</h3>
                {/* A small "Live" indicator for the pilot */}
                <div className={`w-1.5 h-1.5 rounded-full ${isBoosting ? 'bg-orange-500 animate-ping' : 'bg-cyan-500'}`} />
              </div>

              <p className={`text-xl font-black tracking-tight ${data.status === 'CRITICAL' ? 'text-red-500' : 'text-white'}`}>
                {isBoosting 
                  ? 'MANUAL_THRUST' 
                  : data.status === 'NOMINAL' ? 'ACTIVE_MONITORING' : 'EMERGENCY_PILOTING'}
              </p>

              {/* Dynamic Sub-text based on user action */}
              <p className="text-[9px] text-slate-500 mt-2 font-mono leading-tight uppercase tracking-tighter">
                {isBoosting 
                  ? ">> Consuming power for orbital correction" 
                  : data.status === 'CRITICAL' 
                    ? "!! Immediate intervention required !!" 
                    : "Standby: Solar panels deploying..."}
              </p>
            </div>
<div className={`p-4 border-l-2 transition-colors duration-500 rounded-r-lg ${data.stability < 40 ? 'border-red-500 bg-red-500/10' : 'border-purple-500 bg-purple-500/5'}`}>
  <h3 className="text-[10px] text-purple-400 font-bold tracking-widest uppercase">Mission_Stability</h3>
  <div className="flex items-baseline gap-2">
    <p className="text-lg font-black text-white">{data.stability.toFixed(0)}%</p>
    <span className="text-[8px] text-slate-500 uppercase font-mono">
      {data.stability > 80 ? 'STABLE' : data.stability > 40 ? 'DEGRADED' : 'CRITICAL'}
    </span>
  </div>
  {/* A tiny micro-bar for stability */}
  <div className="w-full h-0.5 bg-slate-800 mt-2">
    <div 
      className="h-full bg-purple-500 transition-all duration-500" 
      style={{ width: `${data.stability}%` }} 
    />
  </div>
</div>
          </div>

          {/* The Main 6 Telemetry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Altitude Card */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-500 text-xs font-bold mb-4 tracking-widest uppercase">Orbital_Altitude</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">{Math.floor(data.altitude / 1000).toLocaleString()}</span>
                <span className="text-sm font-bold text-blue-400">KM</span>
              </div>
              <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${(data.altitude / 400000) * 100}%` }} />
              </div>
            </div>

            {/* Integrity Card */}
            <div className={`bg-slate-900/50 p-6 rounded-xl border transition-all ${data.integrity < 50 ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-slate-800'}`}>
              <h3 className="text-slate-500 text-xs font-bold mb-4 tracking-widest uppercase">Hull_Integrity</h3>
              <div className="flex justify-between items-center">
                <span className={`text-4xl font-black ${data.integrity < 30 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{data.integrity.toFixed(1)}%</span>
                <div className={`w-3 h-3 rounded-full ${data.integrity > 50 ? 'bg-green-500' : 'bg-red-500 animate-ping'}`} />
              </div>
            </div>

            {/* Battery/Power Card */}
 {/* Update your Power_Level Card */}
<div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 relative overflow-hidden">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-slate-500 text-xs font-bold tracking-widest uppercase">Power_Level</h3>
    
    {/* RECHARGE INDICATOR */}
    {!boostTimerRef.current && data.battery < 100 && (
      <div className="flex items-center gap-1 text-[10px] text-cyan-400 animate-pulse font-black">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3V10H17L9 19V12H3L11 3Z" />
        </svg>
        SOLAR_RECHARGE_ACTIVE
      </div>
    )}
  </div>

  <span className="text-4xl font-black text-white">{data.battery.toFixed(1)}%</span>
  
  {/* The progress bar now "glows" when charging */}
  <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
    <div 
      className={`h-full transition-all duration-1000 ${!boostTimerRef.current ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-cyan-600'}`} 
      style={{ width: `${data.battery}%` }} 
    />
  </div>
</div>
            
          </div>

          {/* MIDDLE LAYER: INTERACTION (Action Layer) */}
          <div className="my-12 py-10 flex flex-col items-center justify-center border-y border-slate-900/50 bg-slate-900/10 rounded-2xl">
            <button
              onMouseDown={startBoosting}
              onMouseUp={stopBoosting}
              onMouseLeave={stopBoosting}
              onTouchStart={startBoosting}
              onTouchEnd={stopBoosting}
              disabled={data.battery <= 0}
              className={`
                relative group overflow-hidden px-12 py-5 rounded-xl font-black text-sm tracking-[0.3em] transition-all duration-500 uppercase z-10
                ${data.battery <= 0 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : data.altitude < 300000 
                    ? 'bg-orange-600 text-white shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:bg-orange-500 border-b-4 border-orange-800 animate-pulse' 
                    : 'bg-cyan-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-500 border-b-4 border-cyan-800'}
              `}
            >
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />
              <span className="relative z-20 flex items-center gap-4">
                <svg className={`w-6 h-6 ${data.battery > 0 ? 'animate-bounce' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                ENGAGE_EMERGENCY_THRUSTERS
              </span>
            </button>
            <div className="mt-4 text-center">
              <p className={`text-[10px] font-bold tracking-widest uppercase animate-pulse ${data.altitude < 300000 ? 'text-orange-500' : 'text-cyan-400'}`}>
                {data.battery <= 0 
                  ? "SYSTEM_POWER_DEPLETED" 
                  : data.altitude < 300000 
                    ? "LOW_ORBIT_RECOVERY_MODE" 
                    : "STABLE_ORBIT_MAINTENANCE"}
              </p>
              <p className="text-[9px] text-slate-600 mt-1 uppercase font-mono">
                {data.altitude < 300000 ? "Hold space to climb" : "Tap space to maintain"}
              </p>
            </div>
          </div>

          {/* BOTTOM LAYER: VERIFICATION (The Logs) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Real-time Terminal Style */}
            <footer className="lg:col-span-1 bg-black/80 p-5 rounded-xl border border-slate-800 text-green-500/90 text-[10px] h-48 overflow-hidden font-mono leading-relaxed shadow-inner">
               <div className="flex justify-between border-b border-green-900/30 mb-2 pb-1 opacity-50 uppercase">
                  <span>SYSTEM_STATUS</span>
                  <span>{data.timestamp}</span>
               </div>
               <p>{`> ALTITUDE_STATUS: ${Math.floor(data.altitude).toLocaleString()}m`}</p>
               <p className={data.temp > 35 ? 'text-red-400' : ''}>{`> THERMAL_LOAD: ${data.temp.toFixed(2)}`}</p>
               <p className="animate-pulse text-cyan-400">{`> LISTENING_FOR_BOOST_INPUT...`}</p>
            </footer>

            {/* Event Log Style */}
            <div className="lg:col-span-2 bg-black/40 rounded-xl border border-slate-800 flex flex-col h-48 overflow-hidden shadow-inner">
               <div className="bg-slate-900/80 px-4 py-2 flex justify-between items-center border-b border-slate-800">
                 <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mission_Event_History</h3>
               </div>
               <div className="p-4 overflow-y-auto text-[11px] space-y-1">
                 {[...logs].reverse().map(log => (
                   <div key={log.id} className="flex gap-4 border-b border-slate-800/20 pb-1">
                     <span className="text-slate-600 min-w-[60px]">[{log.time}]</span>
                     <span className={log.type === 'error' ? 'text-red-500' : log.type === 'warn' ? 'text-orange-400' : 'text-green-500'}>{log.msg}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </section>
      </main>
    </article>
  )
}