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

                <div className="bg-slate-700 font-semibold text-white p-2 m-2">
                    <p>Provide options for users to switch between light and dark modes to accommodate varying preferences and visual needs.</p>
                </div>
            </nav>
        </header>
    )
}
export default Nav