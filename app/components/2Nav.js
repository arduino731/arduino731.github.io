'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Logo from './wolfIcon.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [color, setChangeColor] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 colorBackgroundOpposite transition-all duration-300 ease-in-out ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Logo"
            width={isScrolled ? 40 : 64}
            height={isScrolled ? 40 : 64}
            className="rounded-sm transition-all duration-300 ease-in-out"
          />
        </Link>

        {/* Centered nav buttons */}
        <div
          className={`hidden lg:flex gap-4 transition-all duration-300 ease-in-out ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}
        >
        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((label, index) => {
            let href = '#';
            switch (label) {
                case 'Home':
                href = '/';
                break;
                case 'About':
                href = '/#about';
                break;
                case 'Projects':
                href = '/#projects';
                break;
                case 'Services':
                href = '/#services'; 
                break;
                case 'Contact':
                href = '/#contact'; 
                break;
                default:
                href = '/';
            }

            return (
                <Link href={href} key={index}>
                <button className="px-3 py-2 hoverSpotlight colorTextOpposite colorBackground rounded">
                    {label}
                </button>
                </Link>
            );
        })}

        </div>

        {/* Moon/Sun toggle */}
        <button
          className="rounded-lg dark:bg-slate-700 bg-slate-400 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            setChangeColor(!color)
          }}
        >
          <Image
            src={color ? '/images/moon.png' : '/images/sun.png'}
            alt="toggle theme"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile dropdown nav */}
      <div className="lg:hidden mt-2 px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
        {isOpen && (
          <div className="flex flex-col gap-2 mt-2 transition-all duration-300 ease-in-out items-center">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((label, index) => {
                let href = '#';

                switch (label) {
                    case 'Home':
                    href = '/';
                    break;
                    case 'About':
                    href = '/#about';
                    break;
                    case 'Projects':
                    href = '/#projects';
                    break;
                    case 'Services':
                    href = '/#services'; // still anchor link if it's a section
                    break;
                    case 'Contact':
                    href = '/#contact'; // same here
                    break;
                    default:
                    href = '/';
                }

                return (
                    <Link href={href} key={index}>
                    <button className="px-3 py-2 hoverSpotlight colorTextOpposite colorBackground rounded">
                        {label}
                    </button>
                    </Link>
                );
            })}

          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
