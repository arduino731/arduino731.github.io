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
    
    const findText =[
        {
            image: "images/fast.png",
            title: "FAST", 
            describe: "Fast load times and lag free interaction, my highest priority."
        },{
            image: "images/responsive.png",
            title: "RESPONSIVE", 
            describe: "My layouts will work on any device, big or small."
        },{
            image: "images/intuitive.png",
            title: "INTUITIVE", 
            describe: "Strong preference for easy to use, intuitive UX/UI."
        },{
            image: "images/dynamic.png",
            title: "DYNAMIC", 
            describe: "Websites don't have to be static, I love making pages come to life."
        },{
            image: "images/stack.png",
            title: "FULL-STACK", 
            describe: "Both user-facing and server-side aspects of web applications."
        }

    ]

    const findFileImage = ["images/dynamic.png", "images/fast.png", "images/intuitive.png", "images/responsive.png","images/stack.png"];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5, rotate: 0},
      left1: { x: "-50%", scale: 0.7, zIndex: 3, rotate: -45 },
      left: { x: "-90%", scale: 0.5, zIndex: 2, rotate: -180},
      right: { x: "90%", scale: 0.5, zIndex: 1, rotate: 90 },
      right1: { x: "50%", scale: 0.7, zIndex: 3, rotate: 45},
    };

    const textVariants = {
        center: { opacity: 1},
        left1: {  opacity: 0 },
        left: {  opacity: 0},
        right: {  opacity: 0 },
        right1: {  opacity: 0},
      };

  return (
    <div >
        <h1 className=" bg-slate-500 items-center justify-center flex text-5xl">About</h1>
        <div className="flex items-center flex-col justify-center bg-slate-500 h-screen ">
        
        {findText.map((item, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={textVariants}
          style={{width: "25vw",height: "50vh",marginBottom:"200px", position: "absolute"}}
        >
        <h2 className="text-3xl text-center">{item.title}</h2>
        <p className="text-2xl text-center">{item.describe}</p>
        </motion.div>

        ))}

        {findText.map((item, index) => (
            <motion.img 
            key={index}
            src={item.image}
            alt={item.image}
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
                className="text-white mt-[500px] bg-indigo-400 rounded-md py-2 px-4 z-10"
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