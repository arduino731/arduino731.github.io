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
                            className="" 
                            alt="logo"
                            width={100} 
                            height={100} 
                        /> 
                </Link>    
                    <button>
                        <Image 
                            src="/images/moon.png" 
                            className="" 
                            alt="logo"
                            width={50} 
                            height={50} 
                        />
                    </button>
                </div>

                <div className="bg-slate-700 font-semibold text-white p-2 m-2 rounded-md">
                    <div>
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
                        <p>Background: #121212 - a very dark grey, easier on the eyes than pure black.
Text: #FFFFFF - pure white, to maintain high contrast against the dark grey.
For the light theme (currently with a white background), a good combination would be:

Background: #FFFFFF - pure white, for a clean look.
Text: #1A1A1A - a dark grey, which can be softer than black and reduce glare, still providing high contrast.
These hex colors are compliant with the Web Content Accessibility Guidelines (WCAG) for color contrast.</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Nav