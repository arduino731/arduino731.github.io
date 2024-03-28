"use client"

import Image from 'next/image'
import React, {useState} from 'react'
import {useTheme} from 'next-themes'

const Button = () => {
  

}


export default function Project3() {
  const[color, setChangeColor] = useState();
  const[mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <section>
        <button className="bg-slate-500 rounded-md" onClick={() => setChangeColor(!color)}> {color ? "hehehe ghost" : "oh well you found me"}</button>
      </section>
      <section>
        <button className="bg-slate-500 rounded-md" onClick={() => setChangeColor(!color)}>
          {
          color ? 
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
      
      
      
      
      <section >
        <div className="text-sm  border m-2 p-2">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
      
    </div>
  )
}
