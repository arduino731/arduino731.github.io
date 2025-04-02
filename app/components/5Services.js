'use client'

import Image from 'next/image'


import { useState, useEffect } from "react";    // framer motion
import { motion } from "framer-motion";         // framer motion


const Services = () => {
  const [hidden, setHidden] = useState(false);  // framer motion  
  useEffect(() => {

    let lastScrollY = window.scrollY;
    // const handleScroll = () => {
    //   if (window.scrollY > lastScrollY) {
    //     setHidden(true); // Hide on scroll down
    //   } else {
    //     setHidden(false); // Show on scroll up
    //   }
    //   lastScrollY = window.scrollY;
    // };

    window.addEventListener("scroll", () => {
        let aboutMe= document.getElementById("aboutMe");
        if (window.scrollY > 335) {
          aboutMe.classList.add("opacity-100");
          aboutMe.classList.remove("opacity-0");
        } else {
          aboutMe.classList.add("opacity-0");
          aboutMe.classList.remove("opacity-100");
        }
    });
  });


  return (
       
    
      <div className="colorBackgroundOpposite">
        <motion.nav
          className="fixed top-44 left-0 w-full bg-gray-800 text-white p-4 shadow-lg"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: hidden ? 0 : 1, y: hidden ? -50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-center text-lg font-bold">Scrolling Navbar</h1>
        </motion.nav>






        <div id="aboutURL" className="flex items-center justify-center">
          <div id="aboutMe" className="opacity-0 transition-opacity duration-1000 ease-in-out">
            <div class="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
            <h1  className="colorBackground colorTextOpposite rounded-md px-10 text-5xl m-4 text-center">Services</h1>
            <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">I specialize in:</h2>












    <div class="flex items-center gap-4 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">📱</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Responsive Web Design –</span> Ensuring seamless experiences across all devices.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-green-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">💻</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Frontend & Backend Development –</span> Building interactive UIs with React, Tailwind CSS, and JavaScript.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-purple-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">⚡</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Performance Optimization –</span> Writing clean, efficient, and scalable code.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-red-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">🎨</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Web Animations & Effects –</span> Creating smooth and engaging user experiences.
        </p>
    </div>

    <div class="text-center mt-8">
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-300">
            💡 My goal? To bring ideas to life with code and create visually stunning, user-friendly websites that make an impact.
        </p>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Let's build something amazing together! 🚀💻
        </p>
    </div>
</div>

          </div>
        </div>




          
             
      </div> 
    )}
    
    
  export default Services