import React from 'react'

import "./globals.css"
import Home from './components/3Home';
import About from './components/4About';
import Services from './components/5services';
import Projects from './components/Projects';
import TernaryOperatorUseState from './components/TernaryOperatorUseState';
import ImageSlider from './components/ImageSlider';


export default function Page(){
    return(
        <main >
            <section > 
                <Home />   
            </section>
            <section>
                <About />   
            </section>
            <section>
                <Services />   
            </section>


            <section className="p-5 bg-slate-500 border-2 border-slate-800 rounded-md container"> 
                <Projects />   
            </section>
            <section > 
                <TernaryOperatorUseState /> 
                <ImageSlider />  
            </section>
        </main>
    )
}

