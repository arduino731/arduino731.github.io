'use client'

import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4])
    const handleNext = () => {
            setPositionIndexes((prevIndexes) => {
              const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
              return updatedIndexes;
            });
    };
    

    const findFileImage = ["images/dynamic.png", "images/fast.png", "images/intuitive.png", "images/responsive.png","images/stack.png"];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5, rotate: 0},
      left1: { x: "-50%", scale: 0.7, zIndex: 3, rotate: -45 },
      left: { x: "-90%", scale: 0.5, zIndex: 2, rotate: -180},
      right: { x: "90%", scale: 0.5, zIndex: 1, rotate: 90 },
      right1: { x: "50%", scale: 0.7, zIndex: 3, rotate: 45},
    };

  return (
    <div >
        <h1>ImageSlider</h1>
        <div className="flex items-center flex-col justify-center bg-slate-500 h-screen ">
        {findFileImage.map((image, index) => (
            <motion.img 
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px] bg-red-600 border-solid border-2 border-black"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "25vw",height: "50vh", position: "absolute" }}
            />
        ))}
            <div className="flex flex-row gap-3">
                <button
                className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4 z-10"
                onClick={handleNext}
                >
                Next
                </button>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider