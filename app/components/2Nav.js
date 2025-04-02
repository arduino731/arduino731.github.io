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
    const [isOpen, setIsOpen] = useState(false); // dropdown menu 

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
                        className="colorBackgroundOpposite hoverSpotlight rounded-sm w-12 h-12 md:w-24 md:h-24" 
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


            <nav className="colorBackgroundOpposite p-4 flex justify-center rounded-md">
                <div className="flex justify-between items-center">
                    {/* Hamburger Menu */}
                    <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden text-black text-2xl focus:outline-none"
                    >
                    ☰
                    </button>
                </div>
                {/* Navigation Buttons */}
                <div className={`flex lg:flex-row flex-col lg:gap-4 gap-2 mx-4 ${isOpen ? "block" : "hidden"} lg:flex`}>
                    <a href="#home"><button className="px-4 py-2 hoverSpotlight colorTextOpposite colorBackground">Home</button></a>
                    <a href="#aboutURL"><button className="px-4 py-2 hoverSpotlight colorTextOpposite colorBackground">About</button></a>
                    <a href="#services"><button className="px-4 py-2 hoverSpotlight colorTextOpposite colorBackground">Services</button></a>
                    <a href="#projects"><button className="px-4 py-2 hoverSpotlight colorTextOpposite colorBackground">Portfolio</button></a>
                    <a href="#contact"><button className="px-4 py-2 hoverSpotlight colorTextOpposite colorBackground">Contact</button></a>
                </div>
            </nav>
        </nav>
    )
}
export default Nav