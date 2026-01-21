"use client"
import React, { useState, useEffect} from 'react'
import "../../globals.css"
import "./style.css"
import Showcases from './Showcases'
import PawsFrontendShowcase from './Paws/PawsFrontendShowcase'
import AstroDash from './AstroDash/AstroDash'
import TicTacToe from './TicTacToe/TicTacToeGame'



export default function Page() {
  const [view, setView] = useState('list');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]); // This runs every time 'view' changes

  return (
    <main>
      {/* 1. The Main List */}
      {view === 'list' && (
        <Showcases onProjectClick={(projectName) => setView(projectName)} />
      )}
      {/* 2. Paws Project */}
      {view === 'paws' && (
        <PawsFrontendShowcase onBack={() => setView('list')} />
      )}
      {/* 3. Astro Dash Project */}
      {view === 'AstroDash' && (
        <AstroDash onBack={() => setView('list')} />
      )}
      {/* 4. Tic Tac Toe Project */}
      {view === 'tictactoe' && (
        <TicTacToe onBack={() => setView('list')} />
      )}
    </main>   
  )
}


