import React from 'react'

import "./index.css"
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';
import TernaryOperatorUseState from './components/TernaryOperatorUseState';
import ImageSlider from './components/ImageSlider';


export default function Page(){
    return(
        <main className="bg-slate-300 relative">
            <section className=""> 
                <Section />   
            </section>
            <section className="padding py-2"> 
                <About />   
            </section>
            <section className="py-5 bg-slate-500 ring-red-400 border-4 border-slate-800 rounded-sm"> 
                <Projects />   
            </section>
            <section className=""> 
                <TernaryOperatorUseState /> 
                <ImageSlider />  
            </section>
        </main>
    )
}

