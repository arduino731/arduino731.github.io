'use client'
import React, { useState } from 'react'
import useHandleScroll from '../../../hooks/HandleScroll'
import { useTelemetry } from './useTelemetry';

export default function AstroDash({ onBack }) {
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();
  const { data, logs, setLogs } = useTelemetry();
  const [isImperial, setIsImperial] = useState(false);

  // --- Helper Functions ---
  const getSignalQuality = (signal) => {
    const s = Number(signal);
    if (s >= 80) return { label: 'EXCELLENT', color: 'text-green-400', bar: 'bg-green-500', count: 4 };
    if (s >= 60) return { label: 'GOOD', color: 'text-blue-400', bar: 'bg-blue-500', count: 3 };
    if (s >= 40) return { label: 'FAIR', color: 'text-yellow-400', bar: 'bg-yellow-500', count: 2 };
    return { label: 'POOR', color: 'text-red-500', bar: 'bg-red-500', count: 1 };
  };

  const formatTemp = (celsius) => {
    const c = Number(celsius) || 0;
    if (!isImperial) return `${c.toFixed(1)}°C`;
    const fahrenheit = (c * 9) / 5 + 32;
    return `${fahrenheit.toFixed(1)}°F`;
  };

  const scrollToContent = () => {
    const element = document.getElementById('target-section');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article className="colorBackgroundOpposite colorText min-h-screen pb-20">
      
      {/* CRITICAL OVERLAY: Shows when system status is CRITICAL */}
      {data.status === 'CRITICAL' && (
        <div className="fixed inset-0 z-[100] pointer-events-none border-[12px] border-red-600/30 animate-pulse shadow-[inset_0_0_100px_rgba(220,38,38,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-b-lg font-black text-[10px] tracking-[0.2em]">
            CRITICAL_SYSTEM_FAILURE_WARNING
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <button onClick={onBack} className="shadow-xl hover:scale-105 active:scale-95 bg-white text-black px-6 py-2 rounded-full border border-slate-200 transition-all font-bold text-sm">
          ← Back to Showcase
        </button>
        <button 
          onClick={scrollToContent} 
          className={`shadow-xl bg-cyan-500 text-white px-6 py-2 rounded-full transition-all duration-700 animate-bounce hover:scale-110 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          ↓ Live Telemetry
        </button>
      </nav>

      {/* Hero Header */}
      <header className="flex items-center colorBackground py-20 px-4">
        <div className="flex-grow border-t border-slate-700/30"></div>
        <h1 className="px-6 text-center text-3xl md:text-5xl font-black tracking-tighter colorTextOpposite uppercase">
          Astro Dash <span className="colorTextOpposite font-light">Mission Control</span>
        </h1>
        <div className="flex-grow border-t border-slate-700/30"></div>
      </header>

      {/* Content Container */}
      <div 
        id="target-section" 
        className={`max-w-6xl mx-auto p-4 md:p-10 scroll-mt-[100px] transition-opacity duration-1000 ${!currentSection || currentSection === 'AstroDash' ? 'opacity-100' : 'opacity-0'}`}
      >
        
        {/* Project Summary Card */}
        <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 mb-10">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-400 mb-2">Project Overview</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            An interactive dashboard simulating real-time space mission telemetry. Designed to demonstrate 
            <strong> high-frequency data handling</strong>, <strong>interpreting complex workflows</strong>, and <strong>responsive UI behaviors</strong> for mission-critical operations.
          </p>
        </section>

        {/* MOCK SATELLITE INTERFACE */}
        <div className="bg-slate-950 rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800 font-mono ring-4 ring-slate-900/50">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 tracking-tighter">ASTRO-DASH <span className="font-light text-slate-500 text-sm italic">v1.0.4</span></h2>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.3em]">Sector: Tera-7 Orbital Operations</p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Unit Toggle */}
              <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
                <button 
                  onClick={() => setIsImperial(!isImperial)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${!isImperial ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >METRIC</button>
                <button 
                  onClick={() => setIsImperial(!isImperial)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${isImperial ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >IMPERIAL</button>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-slate-300">{data.timestamp}</p>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${data.status === 'NOMINAL' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/20 text-red-500 border border-red-500/40 animate-pulse'}`}>
                  STATUS: {data.status}
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Battery */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-500 text-xs font-bold mb-4 tracking-widest uppercase">Power_Cell_A</h3>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-black text-white">{Number(data?.battery || 0).toFixed(1)}%</span>
                <div className="flex-grow h-3 bg-slate-800 rounded-full mb-1.5 overflow-hidden">
                  <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: `${data.battery}%` }} />
                </div>
              </div>
              <p className="text-[9px] text-slate-500">DISCHARGE_RATE: 0.05%/s</p>
            </div>

            {/* Temp */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-500 text-xs font-bold mb-4 tracking-widest uppercase">Thermal_Core</h3>
              <div className="flex flex-col">
                <span className={`text-4xl font-black transition-colors ${data.temp > 25 ? 'text-orange-500' : 'text-white'}`}>
                  {formatTemp(data.temp)}
                </span>
                <p className="text-[9px] text-slate-500 mt-2 italic">THR_LIMIT: {isImperial ? '113.0°F' : '45.0°C'}</p>
              </div>
            </div>

            {/* Signal */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-slate-500 text-xs font-bold tracking-widest uppercase">Uplink_Signal</h3>
                <span className={`text-[10px] font-bold ${getSignalQuality(data.signal).color}`}>{getSignalQuality(data.signal).label}</span>
              </div>
              <div className="flex items-end gap-3 h-10">
                <span className="text-4xl font-black text-white">{data.signal}<span className="text-sm font-light text-slate-500 ml-1">dBm</span></span>
                <div className="flex items-end gap-1 h-full pb-1">
                  {[1, 2, 3, 4].map((bar) => (
                    <div key={bar} className={`w-1.5 rounded-t-sm transition-all duration-500 ${bar <= getSignalQuality(data.signal).count ? getSignalQuality(data.signal).bar : 'bg-slate-800'}`} style={{ height: `${bar * 25}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Log */}
          <div className="mt-8 bg-black/40 rounded-xl border border-slate-800 flex flex-col h-64 overflow-hidden shadow-inner">
            <div className="bg-slate-900/80 px-4 py-2 flex justify-between items-center border-b border-slate-800">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Event_Sequence_Log</h3>
              <button 
                onClick={() => { if(window.confirm("PURGE BUFFER?")) setLogs([]); }}
                className="text-[9px] text-slate-500 hover:text-red-400 border border-slate-800 px-2 py-0.5 rounded transition-colors"
              >CLEAR_BUFFER</button>
            </div>
            <div className="p-4 overflow-y-auto font-mono text-xs space-y-1">
              {logs.map(log => (
                <div key={log.id} className="flex gap-4 border-b border-slate-800/30 pb-1 animate-fadeIn">
                  <span className="text-slate-600">[{log.time}]</span>
                  <span className={`font-bold ${log.type === 'error' ? 'text-red-500' : log.type === 'warn' ? 'text-orange-400' : 'text-green-500'}`}>
                    {log.msg}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Command Terminal Footer */}
          <footer className="mt-8 bg-black p-4 rounded-lg border border-slate-900 text-green-500/80 text-[11px] h-24 overflow-hidden font-mono leading-relaxed shadow-inner">
            <p className="">{`> SYSTEM_READY`}</p>
            <p className="">{`> UPLINK_ESTABLISHED_SECURE_CHANNEL_T7`}</p>
            <p className="animate-pulse">{`> WAITING_FOR_OPERATOR_INPUT...`}</p>
          </footer>
        </div>

        {/* GitHub Link */}
        <div className="mt-20 text-center">
          <a href="https://github.com/arduino731/paws-frontend-showcase" target="_blank" rel="noopener noreferrer" 
             className="inline-block bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-1">
            View Project Architecture on GitHub →
          </a>
        </div>

      </div>
    </article>
  )
}