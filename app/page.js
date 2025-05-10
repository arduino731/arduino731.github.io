import React from 'react'

import "./globals.css"
import Home from './components/3Home';
import About from './components/4About';
import Services from './components/5Services';
import Projects from './components/6Projects';
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

            <section > 
                <Projects />   
            </section>
            <section > 
                <ImageSlider />  
            </section>
        </main>
    )
}

