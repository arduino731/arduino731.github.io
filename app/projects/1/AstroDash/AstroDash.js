'use client'
import React from 'react'
import useHandleScroll from '../../../hooks/HandleScroll'
import { useTelemetry } from './useTelemetry';

export default function AstroDash({ onBack }) {
  // Use the hook to handle animations if needed
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();
const telemetry = useTelemetry();
  const scrollToContent = () => {
    const element = document.getElementById('target-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Fixed Navigation Buttons */}
      <button 
        onClick={onBack}
        className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 shadow-xl hover:scale-110 active:scale-95 bg-white text-black px-6 py-2 rounded-full border border-slate-200 transition-all"
      >
        ← Back to Showcase
      </button>

        <div className="fixed top-[245px] left-1/2 -translate-x-1/2 z-50">
            <button 
                onClick={scrollToContent}
                className={`shadow-xl bg-white text-black px-6 py-2 rounded-full border border-slate-200 
                transition-all duration-700 animate-bounce hover:scale-110 active:scale-95
                ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                ↓ Scroll Down
            </button>
        </div>

    {/* Section Header */}
      <div className="flex items-center colorBackground ">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10">
          "Astro Dash" - Mission Control Telemetry Dashboard
        </h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Project Summary */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out">
        <h2 className="text-2xl font-bold ">Project Overview</h2>
        <p className=" mt-4 text-xl">
          An interactive dashboard simulating real-time space mission telemetry data.
        </p>
      </div>
      
      {/* Main Content Section */}
      <div 
        id="target-section" 
        className={`scroll-mt-[150px] scrollHandle md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out
            ${
            // Add "!currentSection ||" so it's visible by default
            !currentSection || currentSection === 'AstroDash' ? 'opacity-100' : 'opacity-0'
            }`}
        data-id="AstroDash"
      > 

        <div className="colorBackground p-10 my-5 rounded-lg shadow-lg fadeIn">  
          <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-mono">
          {/* Header Area */}
          <header className="flex justify-between items-center border-b border-slate-800 pb-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold tracking-widest text-cyan-400">ASTRO-DASH v1.0</h1>
              <p className="text-xs text-slate-500">MISSION: TERA-7 ORBITAL OPERATIONS</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">{telemetry.timestamp}</p>
              <span className={`text-xs px-2 py-1 rounded ${telemetry.status === 'NOMINAL' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400 animate-pulse'}`}>
                SYSTEM STATUS: {telemetry.status}
              </span>
            </div>
          </header>

        {/* Telemetry Grid */}
          <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Battery Card */}
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-xl text-center">
              <h3 className="text-slate-500 text-sm font-bold mb-4">POWER_CELL_A</h3>
              <div className="flex items-end gap-2">
                <span className="text-xl font-black text-white">{telemetry.battery.toFixed(1)}%</span>
                <div className="w-full h-4 bg-slate-800 rounded-full mb-2 overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 transition-all duration-1000" 
                    style={{ width: `${telemetry.battery}%` }}
                  />
                </div>
              </div>
            </div>

        {/* Temperature Card */}
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-xl text-center">
              <h3 className="text-slate-500 text-sm font-bold mb-4">THERMAL_CORE</h3>
              <div className="flex flex-col">
                <span className={`text-xl font-black transition-colors ${telemetry.temp > 30 ? 'text-orange-500' : 'text-white'}`}>
                  {Number(telemetry.temp).toFixed(1)}°C
                </span>
                <p className="text-xs mt-2 text-slate-400">THR_LIMIT: 45.0°C</p>
              </div>
            </div>

        {/* Signal Card */}
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 shadow-xl text-center">
              <h3 className="text-slate-500 text-sm font-bold mb-4">UPLINK_STRENGTH</h3>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white">{telemetry.signal} dBm</span>
                <p className="text-xs mt-2 text-slate-400 tracking-widest">
                  {telemetry.signal > 90 ? '● ● ● ● ●' : telemetry.signal > 50 ? '● ● ● ○ ○' : '● ○ ○ ○ ○'}
                </p>
              </div>
            </div>

          </main>

        {/* Mock Terminal Placeholder */}
          <footer className="mt-10 bg-black p-4 rounded border border-slate-800 text-green-500 text-sm h-32 overflow-hidden font-mono">
            <p className="">{`> SYSTEM_READY`}</p>
            <p className="">{`> UPLINK_ESTABLISHED AT ${telemetry.timestamp}`}</p>
            <p className="animate-pulse">{`> WAITING FOR COMMAND...`}</p>
          </footer>
          </div>
        </div>
        
      </div>
        {/* GitHub and Live Link Section */}
      <div
        className={`scrollHandle md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'gitHub' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="gitHub"
      >
        <div className="mx-auto max-w-xl text-center p-6 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold fadeIn">Astro Dash</h4>
          <p className="text-lg fadeIn">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/paws-frontend-showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>    
      </div>
      
    </article>
  )
}