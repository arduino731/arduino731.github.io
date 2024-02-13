"use client"

import React, { useState } from 'react'
import {motion} from 'framer-motion'
// import project1 from '/images/sun.png'

const TernaryOperatorUseState = () => {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(5); // Initialize the state

    const itemStyle = {
        flex: 1,
        margin: '5px',
        padding: '10px',
        border: '1px solid #ccc',
      };

    return (
    <div className="flex items-center justify-center">
        <div style={itemStyle}>
            <h1>Example 1: Toggle Visibility</h1>
        <h1>{isHappy ? "I am so happy!" : "oh well blah"}</h1>
        <button className="bg-slate-500 rounded-md" onClick={() => setIsHappy(!isHappy)}> Change Mood</button>
        </div>

        <div style={itemStyle}>
            <h1>Example 2: Changing Text Based on Condition</h1>
        <p>You clicked {count} times</p>
        <button className ="bg-slate-600" onClick={() => setCount(count + 1)}> +1 </button>
        <button className ="bg-red-600" onClick={() => setCount(count - 1)}> -1 </button>
        </div>
    </div>
  )
}

export default TernaryOperatorUseState