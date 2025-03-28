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
        <header className="md:px-16 px-8">
            <nav>
                <div className="p-6 flex justify-between items-center">
                    {/* wolfIcon.png */}
                    <Link href="/">
                        <Image 
                            src={Logo} 
                            className="dark:bg-slate-700 bg-slate-400 rounded-sm w-12 h-12 md:w-24 md:h-24" 
                            alt="logo"
                            width={100} 
                            height={100} 
                        /> 
                    </Link>    
                    <button 
                    className="rounded-lg dark:bg-slate-700 mt-4 bg-slate-400 w-12 h-12 md:w-24 md:h-24" onClick={() => 
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

                {/* <div className="dark:bg-slate-700 bg-slate-400 font-semibold text-white p-2 m-2 rounded-md"> */}
                    {/* <div className="flex items-end justify-end">
                        <p>Provide options for users to switch between light and dark modes to accommodate varying preferences and visual needs.</p>
                        
                        <Image 
                            src="/images/arrowUp.png" 
                            className="" 
                            alt="arrow up"
                            width={20} 
                            height={20} 
                        />
                    </div> */}



                    <div className="flex items-center justify-center m-4 bg-slate-400">
                    
                    <p>Home, About, Portfolio, Services, Contact Us</p>
                    </div>
                {/* </div> */}
            </nav>
        </header>
    )
}
export default Nav