"use client"
import React, { useState, useEffect} from 'react'
import "../../globals.css"
import "./style.css"
import Showcases from './Showcases'
import PawsFrontendShowcase from './PawsFrontendShowcase'



export default function Page() {
  const [view, setView] = useState('list');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]); // This runs every time 'view' changes

  return (
    <main>
      {view === 'list' && (
        <Showcases onProjectClick={() => setView('pawsFrontendShowcase')} />
      )}
      
      {view === 'pawsFrontendShowcase' && (
        <PawsFrontendShowcase onBack={() => setView('list')} />
      )}
    </main>   
  )
}


