"use client"
import React, { useState, useEffect} from 'react'
import "../../globals.css"
import "./style.css"
import Showcases from './Showcases'
import PawsFrontendShowcase from './PawsFrontendShowcase'
import TetrisGame from './Tetris-game'



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
      {/* 3. Tetris Project */}
      {view === 'tetris' && (
        <TetrisGame onBack={() => setView('list')} />
      )}
    </main>   
  )
}


