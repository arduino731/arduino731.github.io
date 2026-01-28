'use client'
import React from 'react'



export default function SectionHeader({ title, highlight }) {
  return (
    <div className="relative flex items-center justify-center py-10 colorBackground ">
      {/* Left Fade Line */}
      <div className="h-px w-12 md:w-32 bg-gradient-to-r from-transparent to-black opacity-50"></div>

      {/* Main Text */}
      <h1 className="mx-4 text-3xl md:text-5xl font-bold tracking-tight text-center uppercase colorTextOpposite ">
        {title} <span className="colorTextOpposite font-light">{highlight}</span>
      </h1>

      {/* Right Fade Line */}
      <div className="h-px w-12 md:w-32 bg-gradient-to-l from-transparent to-black opacity-50"></div>

      {/* Optional: Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent blur-xl -z-10"></div>
      
    </div>
    
  )
}