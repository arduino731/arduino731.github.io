'use client'
import React from 'react'
import useHandleScroll from '../../hooks/HandleScroll'

export default function TetrisGame({ onBack }) {
  // Use the hook to handle animations if needed
  const { visibleSection: currentSection, showScrollButton } = useHandleScroll();

  const scrollToContent = () => {
    const element = document.getElementById('tetris-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Fixed Navigation Buttons */}
      <button 
        onClick={onBack}
        className="fixed top-[100px] left-1/2 -translate-x-1/2 z-50 shadow-xl hover:scale-110 active:scale-95 bg-white text-black px-6 py-2 rounded-full border border-slate-200 transition-all"
      >
        ← Back to Showcase
      </button>

        <div className="fixed top-[250px] left-1/2 -translate-x-1/2 z-50">
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
      <div className="flex items-center colorBackground pb-2">
        <h1 className="p-4 colorTextOpposite text-3xl md:text-5xl font-medium my-10 w-full text-center">
          Vanilla JS Tic Tac Toe Game
        </h1>
      </div>

    {/* Project Summary */}
      <div 
        id="tetris-content" 
        className={`scroll-mt-[150px] scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out
            ${
            // Add "!currentSection ||" so it's visible by default
            !currentSection || currentSection === 'TicTacToeGame' ? 'opacity-100' : 'opacity-0'
            }`}
        data-id="TicTacToeGame"
      >
        <h2 className="text-2xl font-bold fadeIn">Project Overview</h2>
        <p className="fadeIn mt-4 text-xl">
          This Tetris game was built to demonstrate complex state logic and collision detection using pure JavaScript.
        </p>
      

      <div className="bg-gray-200 p-10 my-10 rounded-lg shadow-lg fadeIn">  
        <h2 className="text-2xl font-bold mb-4 colorText">Tic Tac Toe Game</h2>
        <iframe 
          src="https://your-tic-tac-toe-game-url.com" 
          title="Tic Tac Toe Game" 
          width="100%" 
          height="500px" 
          className="border-4 border-gray-400 rounded-lg shadow-lg"
        ></iframe>
      </div>    

      <div>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </div></div>
    </article>
  )
}