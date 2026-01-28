'use client'
import SectionHeader from '../components/SectionHeader';
import './style.css'
import Link from 'next/link'


// --- JSON DATA SOURCE ---
const PROJECT_DATA = [
  {
    id: 'AstroDash',
    path: '/projects/1frontendMastery/AstroDash',
    title: 'Astro Dash',
    buttonLabel: 'View Astro Dash',
  },
  {
    id: 'tictactoe',
    path: '/projects/1frontendMastery/TicTacToe',
    title: 'Minimax AI Tic-Tac-Toe',
    buttonLabel: 'View Tic Tac Toe',
  },
  {
    id: 'paws',
    path: '/projects/1frontendMastery/Paws',
    title: 'Paws Frontend Showcase',
    buttonLabel: 'View Paws Project',
  }

];

export default function Showcases() {

  return (
    <article className="colorBackgroundOpposite colorText opacity-100">
      {/* Section Header */}
      <SectionHeader title="Interactive UI/UX" highlight="Engineering Lab" />

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