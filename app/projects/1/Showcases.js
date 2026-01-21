'use client'
import Image from 'next/image'
import './style.css'
import useHandleScroll from '../../hooks/HandleScroll'
// import Link from 'next/link'

export default function Showcases({ onProjectClick }) {
  const { visibleSection: currentSection } = useHandleScroll();

  return (
    <article className="colorBackgroundOpposite colorText opacity-100">
      {/* Section Header */}
      <div className="flex items-center colorBackground pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10 w-full text-center">Interactive Front-End Developer Showcase</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* GitHub and Live Link Section */}
<div className="flex flex-wrap p-4 colorBackgroundOpposite text-center justify-center">
  {/* Each Item Container */}
  {/* w-full = Mobile (1 column) | md:w-1/2 = Tablet (2 columns) | lg:w-1/3 = Desktop (3 columns) */}
  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
    <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <p className="text-xl font-bold">Paws Frontend Showcase</p>
      <button
        onClick={() => onProjectClick('paws')}
        className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        🌐 View Paws Project →
      </button>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
    <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <p className="text-xl font-bold">Minimax AI Tic-Tac-Toe</p>
      <button
        onClick={() => onProjectClick('tictactoe')}
        className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        🌐 View Tic Tac Toe →
      </button>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
    <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <p className="text-xl font-bold">Astro Dash</p>
      <button
        onClick={() => onProjectClick('AstroDash')}
        className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        🌐 View Astro Dash →
      </button>
    </div>
  </div>


  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
    <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <p className="text-xl font-bold">Chess Game</p>
      <button
        onClick={() => onProjectClick('chess')}
        className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        🌐 View Project →
      </button>
    </div>
  </div>
</div>
    </article>
  )
}
