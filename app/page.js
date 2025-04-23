import React from 'react'

import "./globals.css"
import Home from './components/3Home';
import About from './components/4About';
import Services from './components/5Services';
import Projects from './components/6Projects';
import Contact from './components/7Contact';
import ImageSlider from './components/ImageSlider';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
                <ImageSlider />  
            </section>
            <section>
                <Contact />
            </section>
        </main>
    )
}

