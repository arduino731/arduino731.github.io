'use client'
import { useState, useEffect } from "react";


const Services = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
        const service = document.getElementById("services");
        const scrollHeight = service.scrollHeight; //732
        console.log(scrollHeight)
        if (window.scrollY > scrollHeight) {
          service.classList.add("opacity-100");
          service.classList.remove("opacity-0");
        } else {
          service.classList.add("opacity-0");
          service.classList.remove("opacity-100");
        }
    });
  });

  return (
      <div className="colorBackground">
        <div id="Services" className="flex items-center justify-center">
          <div id="services" className="opacity-0 transition-opacity duration-1000 ease-in-out">
            <div class="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
              <h1  className="colorBackgroundOpposite colorText rounded-md text-5xl p-2 text-center">Services</h1>
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
                <p class="text-xl font-semibold colorTextOpposite ">
                    💡 My goal? To bring ideas to life with code and create visually stunning, user-friendly websites that make an impact.
                </p>
                <p class="mt-3 text-lg colorTextOpposite ">
                    Let's build something amazing together! 🚀💻
                </p>
              </div>
            </div>
          </div>
        </div> {/* end serviceURL */}       
      </div> 
)}
    
    
export default Services