'use client'
import Image from 'next/image'
import './style.css'
import useHandleScroll from '../../hooks/HandleScroll'
import Link from 'next/link'

export default function Project1({ onProjectClick }) {
  const currentSection = useHandleScroll();

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <div className="flex items-center colorBackground pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10 ">Interactive Front-End Developer Showcase</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* GitHub and Live Link Section */}
      <div className="flex flex-wrap p-4 colorBackgroundOpposite text-center">
        <div className="w-1/3 p-2">
          <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 ">
            <p className="text-lg font-bold">Paws Frontend Showcase</p>
            <button
              onClick={() => onProjectClick()}
              className="hoverSpotlight colorText colorBackgroundOpposite  inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
            >
              🌐 View Project →
            </button>
          </div>

        </div>
        <div className="w-1/3 p-2">
          <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6">
            <p className="text-lg font-bold">Tetris Game</p>
            <button
              onClick={() => onProjectClick()}
              className="hoverSpotlight colorText colorBackgroundOpposite  inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
            >
              🌐 View Project →
            </button>
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6">Box 3</div>
        </div>
      </div>
    </article>
  )
}
