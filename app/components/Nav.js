'use client'
import { ThemeProvider } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './wolfIcon.png'

const Nav = () => {
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
                    <button>
                        <Image 
                            src="/images/moon.png" 
                            className="dark:bg-slate-700 bg-slate-400 rounded-md" 
                            alt="logo"
                            width={50} 
                            height={50} 
                        />
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