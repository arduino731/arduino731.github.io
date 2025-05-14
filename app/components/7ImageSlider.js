'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import useHandleScroll from '../hooks/HandleScroll';

const ImageSlider = () => {
  const currentSection = useHandleScroll();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prev) =>
      prev.map((i) => (i + 1) % 5)
    )
  }

  const findText = [
    {
      image: "/images/fast.png",
      title: "FAST",
      describe: "Fast load times and lag free interaction, my highest priority.",
    },
    {
      image: "/images/responsive.png",
      title: "RESPONSIVE",
      describe: "My layouts will work on any device, big or small.",
    },
    {
      image: "/images/intuitive.png",
      title: "INTUITIVE",
      describe: "Strong preference for easy to use, intuitive UX/UI.",
    },
    {
      image: "/images/dynamic.png",
      title: "DYNAMIC",
      describe: "Websites don't have to be static, I love making pages come to life.",
    },
    {
      image: "/images/stack.png",
      title: "FULL-STACK",
      describe: "Both user-facing and server-side aspects of web applications.",
    },
  ]

  const positions = ["center", "left1", "left", "right", "right1"]

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, rotate: 0 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3, rotate: -45 },
    left: { x: "-90%", scale: 0.5, zIndex: 2, rotate: -180 },
    right: { x: "90%", scale: 0.5, zIndex: 2, rotate: 180 },
    right1: { x: "50%", scale: 0.7, zIndex: 3, rotate: 45 },
  }

  const textVariants = {
    center: { opacity: 1 },
    left1: { opacity: 0 },
    left: { opacity: 0 },
    right: { opacity: 0 },
    right1: { opacity: 0 },
  }

  return (
  <div className={`scrollHandle transition-opacity duration-1000 ease-in-out colorBackground colorTextOpposite 
  ${
  currentSection === 'slider' ? 'opacity-100' : 'opacity-0'
  }`}
  data-id="slider">
    <div className="flex justify-center p-5">
        <button
        onClick={handleNext}
        className="fadeIn hoverSpotlight colorBackgroundOpposite colorText px-6 py-2 rounded-md shadow-md transition"
        >
        Next
        </button>
    </div>
    <div className="relative flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] flex-col gap-6">

      {/* Image animations */}
      <div className="relative w-40 h-40 sm:w-64 sm:h-64">
        {findText.map((item, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            className=" absolute w-full h-full"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="fadeIn colorBackgroundOpposite object-contain rounded-xl border-2 border-white"
            />
          </motion.div>
        ))}
      </div>

      {/* Text overlays */}
      <div className="relative h-32 w-full flex items-center justify-center">
        {findText.map((item, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={textVariants}
            transition={{ duration: 0.4 }}
            className="absolute text-center max-w-xs sm:max-w-md"
          >
            <h2 className="fadeIn text-xl sm:text-3xl font-bold mb-2">{item.title}</h2>
            <p className="fadeIn text-sm sm:text-lg">{item.describe}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ImageSlider
