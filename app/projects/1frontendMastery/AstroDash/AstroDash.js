'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useTelemetry } from './useTelemetry';
import "./AstroDash.css";
import Link from 'next/link';

export default function AstroDash({ onBack }) {
  // --- STATE FOR GAME RESET & FLOW ---
  // We use a key to force the entire component to re-render (resetting the hook)
  const [gameKey, setGameKey] = useState(0); 

  return (
    <AstroDashGame 
      key={gameKey} 
      onBack={onBack} 
      onReset={() => setGameKey(prev => prev + 1)} 
    />
  );
}

// --- MAIN GAME COMPONENT ---
function AstroDashGame({ onBack, onReset }) {
  const [showBriefing, setShowBriefing] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isBoosting, setIsBoosting] = useState(false);
  
  // We pass 'isBoosting' and 'hasStarted' to the hook. 
  // Note: If your hook updates data automatically, it might start ticking immediately.
  const { data, logs, setLogs, boostAltitude } = useTelemetry(isBoosting, hasStarted);
  
  const boostTimerRef = useRef(null);
  const [isImperial, setIsImperial] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const prevAltitudeRef = useRef(data.altitude);

  // --- DERIVED STATE: GAME OVER ---
  const isGameOver = data.integrity <= 0 || data.status === 'DISCONNECTED';

  // --- LOGIC: THRUSTER CONTROLS ---
  const handleInteractionStart = () => {
    // 1. If Game Over -> Reset
    if (isGameOver) {
      onReset();
      return;
    }

    // 2. If Not Started -> Start
    if (!hasStarted) {
      setHasStarted(true);
      // Optional: Add a log indicating start
      setLogs(prev => [{
        id: Date.now(),
        time: new Date().toLocaleTimeString().split(' ')[0],
        msg: ">>> SYSTEM INITIALIZED. WAITING FOR PILOT INPUT...",
        type: 'success'
      }, ...prev]);
      return;
    }

    if (!hasStarted) {
      setHasStarted(true);
      return;
    }

    startBoosting();
  };

  const startBoosting = () => {
    // Block boosting if game hasn't started or is over
    if (!hasStarted || isGameOver || data.battery <= 0) return;
    
    setIsBoosting(true); 
    boostAltitude();
    boostTimerRef.current = setInterval(boostAltitude, 100); 
  };

  const stopBoosting = () => {
    setIsBoosting(false); 
    if (boostTimerRef.current) {
      clearInterval(boostTimerRef.current);
      boostTimerRef.current = null;
    }
  };
  
  // Accessibility: Spacebar Support
  useEffect(() => {
    if (prevAltitudeRef.current < 300000 && data.altitude >= 300000) {
      setShowSuccess(true);
      setLogs(prev => [{
        id: Date.now(),
        time: new Date().toLocaleTimeString().split(' ')[0],
        msg: ">>> SUCCESS: TARGET ORBIT ACHIEVED. STABILIZING...",
        type: 'success'
      }, ...prev]);
      setTimeout(() => setShowSuccess(false), 3000);
    }
    prevAltitudeRef.current = data.altitude;
  }, [data.altitude, setLogs]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Spacebar logic now checks for hasStarted and isGameOver
      if (e.code === 'Space' && !boostTimerRef.current && hasStarted && !isGameOver) {
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
  }, [data.battery, hasStarted, isGameOver]);

  const getSignalStrength = (signal) => {
    if (data.status === 'DISCONNECTED' || signal <= 0) return 0;
    // Math.ceil divides signal by 20 to get a 1-5 scale
    // 1-20% = 1 bar, 21-40% = 2 bars ... 81-100% = 5 bars
    return Math.ceil(signal / 20);
  };

  const signalBars = getSignalStrength(data.signal);


  return (
    <article className="crt-scanlines astro-grid-bg colorBackgroundOpposite colorText min-h-screen pb-20">
      {/* 0. MISSION BRIEFING MODAL */}
      {showBriefing && (
        <div className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-950 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-lg overflow-hidden relative">
            
            {/* Decorative Top Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900" />
            
            <div className="p-8 md:p-10 font-mono text-left relative">
              {/* Background grid effect for the modal */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />

              <h2 className="text-2xl md:text-3xl font-black text-cyan-500 tracking-[0.2em] mb-2 uppercase">
                Mission Briefing
              </h2>
              <p className="text-xs text-slate-500 tracking-widest uppercase mb-8 border-b border-slate-800 pb-4">
                Clearance Level: Top Secret // Operator: Commander
              </p>

              <div className="space-y-6 text-sm md:text-base text-slate-300 relative z-10 leading-relaxed">
                <p>
                  <strong className="text-white">OBJECTIVE:</strong> Pilot the probe to <span className="text-green-400 font-bold">300,000m</span> to achieve stable orbit.
                </p>

                <ul className="space-y-3 border-l-2 border-slate-800 pl-4 my-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">▶</span>
                    <div>
                      <strong className="text-white block text-xs uppercase tracking-wider mb-1">Controls</strong>
                      Click & Hold the <span className="text-cyan-400 bg-cyan-950/50 px-1 py-0.5 rounded border border-cyan-800/50 text-xs">THRUST</span> button or use <span className="text-cyan-400 bg-cyan-950/50 px-1 py-0.5 rounded border border-cyan-800/50 text-xs">SPACEBAR</span> to ascend.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">▶</span>
                    <div>
                      <strong className="text-white block text-xs uppercase tracking-wider mb-1">Gravity & Physics</strong>
                      Release thrust to conserve battery. The probe will fall when engines are off.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">▶</span>
                    <div>
                      <strong className="text-white block text-xs uppercase tracking-wider mb-1">Signal Warning</strong>
                      At <span className="text-red-400">400,000m</span>, you leave communication range. <br/>
                      <span className="text-red-500 font-bold text-xs uppercase">Signal loss = Mission Failure.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={() => setShowBriefing(false)}
                  className="group relative bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded-sm uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Acknowledge & Start
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
      {/* 1. CRITICAL OVERLAY (Visual Only) */}
      {data.status === 'CRITICAL' && !isGameOver && (
        <div className="fixed inset-0 z-[100] pointer-events-none border-[12px] border-red-600/30 animate-pulse shadow-[inset_0_0_100px_rgba(220,38,38,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-b-lg font-black text-[10px] tracking-[0.2em]">
            CRITICAL_SYSTEM_FAILURE_WARNING
          </div>
        </div>
      )}

      {/* 2. GAME OVER OVERLAY (Interactive) */}
      {isGameOver && (
        <div className="fixed inset-0 z-[120] bg-black/80 flex items-center justify-center backdrop-blur-sm">
             <div className="bg-slate-950 border-2 border-red-900 p-8 rounded-xl text-center shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h2 className="text-red-500 font-black text-2xl tracking-tighter mb-2 italic">SIGNAL_DISCONNECTED</h2>
                <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-6">
                  Hull Integrity Compromised.<br/>
                  Mission Failed.
                </p>
                <button 
                  onClick={onReset} // This calls setGameKey(prev => prev + 1)
                  className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full font-bold tracking-widest text-xs uppercase"
                >
                  RE-INITIALIZE SYSTEM
                </button>
             </div>
        </div>
      )}

      {/* 3. SUCCESS CELEBRATION OVERLAY */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] pointer-events-none border-[12px] border-green-500/40 animate-pulse shadow-[inset_0_0_100px_rgba(34,197,94,0.3)]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="bg-green-600 text-black px-10 py-3 rounded-sm font-black text-2xl tracking-[0.5em] animate-[bounce_0.5s_ease-in-out_infinite] shadow-[0_0_30px_rgba(34,197,94,0.6)]">
              ORBIT_STABILIZED
            </div>
            <p className="text-green-400 font-mono text-xs tracking-widest bg-black/80 px-4 py-1">
              ALTITUDE_ABOVE_THRESHOLD // 300,000M REACHED
            </p>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(34,197,94,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-full">
        <Link href="/projects/1frontendMastery" className="bg-white px-4 py-2 rounded shadow text-black">
           ← Back to Home
        </Link>
      </nav>

      <header className="relative flex flex-col items-center py-24 px-4 overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_15px_cyan]" />
        <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] colorText uppercase italic text-center">
          Astro<span className="not-italic">Dash</span>
        </h1>
        <p className="text-xs colorText mt-2 tracking-[0.5em] uppercase font-mono text-center">Remote_Telemetry_Control // Terminal_01</p>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-10">
        <section id="target-section" className="bg-slate-950 rounded-3xl p-4 md:p-10 shadow-2xl border border-slate-800 font-mono ring-4 ring-slate-900/50">
          
          {/* --- HEADER (Stays at the top) --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 tracking-tighter">ASTRO-DASH <span className="font-light text-slate-500 text-sm italic text-nowrap">v1.1.0</span></h2>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.3em]">Sector: Tera-7 Orbital Operations</p>
            </div>

          </div>

          {/* --- THE 3-1-3 GRID LAYOUT (Compact Desktop Version) --- */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            
            {/* === ROW 1: 3 CARDS === */}

            {/* 1. SIGNAL CARD */}
            <div className={`p-3 md:p-3 border-l-4 transition-all duration-500 rounded-r-xl backdrop-blur-sm flex flex-col justify-between
              ${data.status === 'DISCONNECTED' ? 'border-red-900 bg-red-950/20' : 'border-blue-500 bg-blue-500/5'}`}>

              <div className="flex justify-between items-start">
                <h3 className="text-[8px] md:text-[9px] font-bold text-blue-400 uppercase tracking-widest">Data_Stream</h3>
                
                {/* CONNECTION DOT */}
                <span className={`flex h-1.5 w-1.5 rounded-full ${data.status !== 'DISCONNECTED' ? 'bg-blue-500 animate-ping' : 'bg-red-600 shadow-[0_0_10px_red]'}`}></span>
              </div>

              <div className="flex items-end justify-between mt-1">
                {/* TEXT PERCENTAGE */}
                <p className="text-lg md:text-xl font-black text-white leading-none">
                  {data.status === 'DISCONNECTED' || data.integrity <= 0 ? '0' : Math.floor(data.signal)}
                  <span className="text-[10px] font-light text-slate-500 ml-0.5">%</span>
                </p>

                {/* 5-BAR VISUALIZER */}
                <div className="flex gap-0.5 items-end h-4 mb-0.5">
                  {[1, 2, 3, 4, 5].map((barIndex) => (
                    <div 
                      key={barIndex}
                      className={`w-1 rounded-sm transition-all duration-300 
                        ${barIndex <= signalBars 
                          ? (signalBars <= 2 ? 'bg-red-500' : 'bg-blue-400 shadow-[0_0_5px_#60a5fa]') 
                          : 'bg-slate-800'
                        }`}
                      // Ascending heights: 20%, 40%, 60%, 80%, 100%
                      style={{ height: `${barIndex * 20}%` }} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 2. PILOT STATUS CARD */}
            <div className={`p-3 md:p-3 border-l-4 transition-all duration-500 rounded-r-xl backdrop-blur-md overflow-hidden flex flex-col justify-center
              ${data.status === 'CRITICAL' ? 'border-red-500 bg-red-950/40' : 'border-cyan-500 bg-cyan-950/20'}`}>
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase truncate">Pilot_Stat</h3>
                <div className={`w-1.5 h-1.5 rounded-full ${isBoosting ? 'bg-orange-500 animate-ping' : 'bg-cyan-500'}`} />
              </div>
              <p className={`text-sm md:text-lg font-black tracking-tight truncate ${data.status === 'CRITICAL' ? 'text-red-500' : 'text-white'}`}>
                {isBoosting ? 'THRUST' : data.status === 'NOMINAL' ? 'ACTIVE' : 'EMERGENCY'}
              </p>
            </div>

            {/* 3. STABILITY CARD */}
            <div className={`p-3 md:p-3 border-l-2 transition-colors duration-500 rounded-r-lg overflow-hidden flex flex-col justify-center ${data.stability < 40 ? 'border-red-500 bg-red-500/10' : 'border-purple-500 bg-purple-500/5'}`}>
              <h3 className="text-[8px] md:text-[9px] text-purple-400 font-bold tracking-widest uppercase truncate">Stability</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-sm md:text-xl font-black text-white">{data.stability.toFixed(0)}%</p>
              </div>
              <div className="w-full h-0.5 bg-slate-800 mt-1 md:mt-2">
                <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${data.stability}%` }} />
              </div>
            </div>

            {/* === ROW 2: CENTER BUTTON (Interactive with States) === */}
            <div className="col-span-3 py-6 md:py-4 flex flex-col items-center justify-center border-y border-slate-900/50 bg-slate-900/10 rounded-2xl my-1 md:my-2">
              <button
                onMouseDown={handleInteractionStart}
                onMouseUp={stopBoosting}
                onMouseLeave={stopBoosting}
                onTouchStart={handleInteractionStart}
                onTouchEnd={stopBoosting}
                // Disable button if battery is 0 AND we aren't in a Game Over state (because Game Over needs click to reset)
                disabled={!isGameOver && data.battery <= 0} 
                className={`
                  relative group overflow-hidden px-6 md:px-16 py-3 md:py-3 rounded-xl font-black text-[10px] md:text-xs tracking-[0.3em] transition-all duration-500 uppercase z-10 w-11/12 md:w-auto text-center
                  ${isGameOver 
                    ? 'bg-red-900/50 text-red-200 shadow-[0_0_30px_rgba(220,38,38,0.4)] border-b-4 border-red-900 hover:bg-red-800 cursor-pointer animate-pulse'
                    : !hasStarted
                      ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] border-b-4 border-blue-800 hover:bg-blue-500 animate-pulse'
                      : data.battery <= 0
                        ? 'bg-slate-800 text-slate-500 border-b-4 border-slate-900 cursor-not-allowed' // <--- GRAYED OUT LOOK
                        : 'bg-cyan-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-500 border-b-4 border-cyan-800'
                  }
                `}
              >
                {/* Button Content (Icons/Text) */}
                <span className="relative z-20 flex items-center justify-center gap-2 md:gap-4">
                  {isGameOver ? (
                    // Game Over Icon
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  ) : data.battery <= 0 ? (
                    // NEW: No Power Icon (Battery with X)
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ) : (
                    // Normal Thrust Icon
                    <svg className={`w-4 h-4 ${data.battery > 0 ? 'animate-bounce' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  )}
                  
                  {/* Button Text */}
                  {isGameOver 
                    ? "SIGNAL LOST // REBOOT" 
                    : !hasStarted 
                      ? "INITIALIZE LAUNCH"
                      : data.battery <= 0 
                        ? "POWER DEPLETED" // <--- Explicit Text
                        : "ENGAGE THRUSTERS"
                  }
                </span>
              </button>
            </div>

            {/* === ROW 3: 3 CARDS === */}

            {/* 1. ALTITUDE CARD */}
            <div className="bg-slate-900/50 p-3 md:p-4 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-center">
              <h3 className="text-slate-500 text-[8px] md:text-[9px] font-bold mb-1 md:mb-2 tracking-widest uppercase truncate">Altitude</h3>
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                <span className="text-xl md:text-3xl font-black text-white">{Math.floor(data.altitude / 1000).toLocaleString()}</span>
                <span className="text-[10px] md:text-xs font-bold text-blue-400">KM</span>
              </div>
              <div className="mt-2 md:mt-3 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${(data.altitude / 400000) * 100}%` }} />
              </div>
            </div>

            {/* 2. INTEGRITY CARD */}
            <div className={`bg-slate-900/50 p-3 md:p-4 rounded-xl border transition-all overflow-hidden flex flex-col justify-center ${data.integrity < 50 ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-slate-800'}`}>
              <h3 className="text-slate-500 text-[8px] md:text-[9px] font-bold mb-1 md:mb-2 tracking-widest uppercase truncate">Integrity</h3>
              <div className="flex justify-between items-center">
                <span className={`text-xl md:text-3xl font-black ${data.integrity < 30 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{data.integrity.toFixed(0)}%</span>
                <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${data.integrity > 50 ? 'bg-green-500' : 'bg-red-500 animate-ping'}`} />
              </div>
            </div>

            {/* 3. POWER CARD */}
            <div className="bg-slate-900/50 p-3 md:p-4 rounded-xl border border-slate-800 relative overflow-hidden flex flex-col justify-center">
              <h3 className="text-slate-500 text-[8px] md:text-[9px] font-bold mb-1 md:mb-2 tracking-widest uppercase truncate">Power</h3>
              <span className="text-xl md:text-3xl font-black text-white">{data.battery.toFixed(0)}%</span>
              <div className="mt-2 md:mt-3 h-1.5 md:h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-1000 ${!boostTimerRef.current ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-cyan-600'}`} style={{ width: `${data.battery}%` }} />
              </div>
            </div>

          </div>

          {/* --- FOOTER LOGS (Below the Grid) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <footer className="lg:col-span-1 bg-black/80 p-5 rounded-xl border border-slate-800 text-green-500/90 text-[10px] h-48 overflow-hidden font-mono leading-relaxed shadow-inner">
              <div className="flex justify-between border-b border-green-900/30 mb-2 pb-1 opacity-50 uppercase">
                <span>SYSTEM_STATUS</span>
                <span>{data.timestamp}</span>
              </div>
              <p>{`> ALTITUDE: ${Math.floor(data.altitude).toLocaleString()}m`}</p>
              <p className={data.temp > 35 ? 'text-red-400' : ''}>{`> THERMAL: ${data.temp.toFixed(2)}`}</p>
              {!hasStarted && <p className="text-blue-400 animate-pulse"> &gt WAITING FOR INITIALIZATION...</p>}
            </footer>
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

      {/* GitHub Link Section */}
      <div className={`mx-auto max-w-xl text-center mt-10 p-6 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border`}>
        <h4 className="text-lg font-bold">AstroDash - Mission Control Telemetry Dashboard</h4>
        <p className="text-lg">🔍 Want to see the logic?<br />Check out the source on GitHub!</p>
        <a href="https://github.com/arduino731/arduino731.github.io/blob/main/app/projects/1frontendMastery/AstroDash" target="_blank" rel="noopener noreferrer" className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out">
          View Project Architecture on GitHub →
        </a>
      </div>
    </article>
  );
}