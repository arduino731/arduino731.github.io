'use client'
// import { ThemeProvider } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './wolfIcon.png'
import React, {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

const Nav = () => {
    const[color, setChangeColor] = useState()
    const[mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    return (
        <header className="padding-x">
            <nav>
                <div className="p-2 flex justify-between">
                <Link href="/">
                        <Image 
                            src={Logo} 
                            className="dark:bg-slate-700 bg-slate-400 rounded-sm" 
                            alt="logo"
                            width={100} 
                            height={100} 
                        /> 
                </Link>    
                <button 
                className="rounded-lg dark:bg-slate-700 bg-slate-400" onClick={() => 
                    [
                        setTheme(theme === 'light' ? 'dark' : 'light' ), 
                        setChangeColor(!color)
                    ]}>
                    { color ?
                    <Image 
                    src="/images/moon.png" 
                    className="" 
                    alt="arrow up"
                    width={100} 
                    height={100} 
                    /> : 
                    <Image 
                    src="/images/sun.png" 
                    className="" 
                    alt="arrow up"
                    width={100} 
                    height={100} 
                    />
                    }
                </button>
                </div>

                <div className="dark:bg-slate-700 bg-slate-400 font-semibold text-white p-2 m-2 rounded-md">
                    <div className="flex items-end justify-end">
                        <p>Provide options for users to switch between light and dark modes to accommodate varying preferences and visual needs.</p>
                        <Image 
                            src="/images/arrowUp.png" 
                            className="" 
                            alt="arrow up"
                            width={20} 
                            height={20} 
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Nav