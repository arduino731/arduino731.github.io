'use client'
import React from 'react'
import useHandleScroll from '../../../hooks/HandleScroll'

export default function AstroDash({ onBack }) {
  // Use the hook to handle animations if needed
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();

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

        <div className="bg-gray-200 p-10 my-10 rounded-lg shadow-lg fadeIn">  
            <h2 className="text-2xl font-bold colorTextOpposite">Hello World</h2>
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