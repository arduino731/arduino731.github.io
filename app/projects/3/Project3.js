"use client"

import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

export default function Project3() {
  const[color, setChangeColor] = useState();
  const[mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <section>
      The current theme is: {theme} <br/>
      </section>
      
      
      
      <section>
        <button 
          className="bg-slate-500 rounded-md" onClick={() => [setTheme(theme === 'light' ? 'dark' : 'light' ), setChangeColor(!color)]}>
            { color ?
              <Image 
              src="/images/moon.png" 
              className="" 
              alt="arrow up"
              width={20} 
              height={20} 
              /> : 
              <Image 
              src="/images/sun.png" 
              className="" 
              alt="arrow up"
              width={20} 
              height={20} 
              />
            }
        </button>
      </section>
      
    </div>
  )
}
