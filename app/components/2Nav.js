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
        <nav className="colorBackground md:px-16 px-8">
                <div className="flex justify-between items-center">
                    {/* wolfIcon.png */}
                    <Link href="/">
                        <Image 
                            src={Logo} 
                            className="colorBackgroundOpposite rounded-sm w-12 h-12 md:w-24 md:h-24" 
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




                <div className="flex items-center justify-center m-4 bg-slate-400">
                    <p class="colorText">Home, About, Portfolio, Services, Contact Us</p>
                </div>
            </nav>
    )
}
export default Nav