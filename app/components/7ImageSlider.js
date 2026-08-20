'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import useHandleScroll from '../hooks/HandleScroll';

const ImageSlider = () => {
  const { visibleSection: currentSection } = useHandleScroll();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prev) =>
      prev.map((i) => (i + 1) % 5)
    )
  }

  const findText = [
    {
      image: "/images/cloud.png",
      imageLight: "/images/cloud-light.png",
      title: "CLOUD-NATIVE",
      describe: "Production systems on AWS — ECS, Lambda, S3, SES — built to scale and stay inexpensive.",
    },
    {
      image: "/images/iac.png",
      imageLight: "/images/iac-light.png",
      title: "INFRASTRUCTURE AS CODE",
      describe: "Terraform-managed environments: reproducible, reviewable, and rebuilt on demand.",
    },
    {
      image: "/images/secure.png",
      imageLight: "/images/secure-light.png",
      title: "SECURE",
      describe: "Scoped IAM, secrets out of source control, TLS end to end, least privilege by default.",
    },
    {
      image: "/images/accessible.png",
      imageLight: "/images/accessible-light.png",
      title: "ACCESSIBLE",
      describe: "WCAG 2.1 AA verified by a certified Web Accessibility Specialist — measured, not assumed.",
    },
    {
      image: "/images/stack.png",
      imageLight: "/images/stack-light.png",
      title: "FULL-STACK",
      describe: "React and Next.js through Node.js APIs to the database and the infrastructure beneath it.",
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
  <div className={`scrollHandle transition-opacity duration-1000 ease-in-out colorBackground colorTextOpposite pt-10 sm:pt-16
  ${
  currentSection === 'slider' ? 'opacity-100' : 'opacity-0'
  }`}
  data-id="slider">
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
            {/* Line-art marks on a tile whose background flips with the
                theme, so the stroke color is swapped rather than fixed.
                Exactly one is displayed, so only one is announced. */}
            <Image
              src={item.imageLight}
              alt={item.title}
              fill
              className="fadeIn colorBackgroundOpposite object-contain rounded-xl border-2 border-white block dark:hidden"
            />
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="fadeIn colorBackgroundOpposite object-contain rounded-xl border-2 border-white hidden dark:block"
            />
          </motion.div>
        ))}
      </div>

      {/* Advance control sits directly under the marks, above the caption. */}
      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="fadeIn hoverSpotlight colorBackgroundOpposite colorText px-6 py-2 rounded-md shadow-md transition"
        >
          Next
        </button>
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
