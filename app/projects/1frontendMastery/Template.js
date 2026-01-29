'use client'
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';


export default function TicTacToeGame() {

  

  return (
    <article className="colorBackgroundOpposite colorText min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <Link href="/projects/1frontendMastery" className="bg-white px-4 py-2 rounded shadow text-black">
           ← Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <SectionHeader title="Minimax AI" highlight='Tic-Tac-Toe' />



      {/* GitHub Link Section */}
      <div
        className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <div className="mx-auto max-w-xl text-center mb-4 p-6 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold">Minimax AI Tic-Tac-Toe</h4>
          <p className="text-lg">
            🔍 Want to see the logic?
            <br />
            Check out the source on GitHub!
          </p>
          <a
            href="https://github.com/arduino731/arduino731.github.io/blob/main/app/projects/1frontendMastery/TicTacToe"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            View Project Architecture on GitHub →
          </a>
        </div>

        <div className="mx-auto max-w-xl text-center p-6 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold">Upcoming Features</h4>
          <p className="text-lg">
          <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Roadmap: Socket.io Multiplayer
          </span>  
          </p>
        </div>
      </div>
    </article>
  );
}