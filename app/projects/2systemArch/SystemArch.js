'use client'
import SectionHeader from '../components/SectionHeader';
import './style.css'
import Link from 'next/link'

// --- JSON DATA SOURCE ---
const PROJECT_DATA = [
  // {
  //   id: 'tictactoe',
  //   title: 'Minimax AI Tic-Tac-Toe',
  //   buttonLabel: 'View Tic Tac Toe',
  // },

];

export default function SystemArch() {
  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <SectionHeader title="Full-Stack" highlight="Platform" />

      <div className="flex flex-wrap p-4 colorBackgroundOpposite text-center justify-center">
        {/* Map through JSON Data to create cards */}
        {PROJECT_DATA.map((project) => (
          <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              <p className="text-xl font-bold">{project.title}</p>
              <Link 
                href={project.path}
                className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold"
              >
                  🌐 {project.buttonLabel} →
              </Link>
            </div>
          </div>
        ))}
      </div>










    </article>
  )
}
