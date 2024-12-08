"use client"
import "./css/style.css"
import "./js/main.js"
import Image from 'next/image'
// import Script from "./js/main.js";


export default function Project3() {

  return (
    <div>
     <h1 class="bg-white text-3xl font-bold underline bg-slate-500 container">Surf Website || TailwindCSS </h1>
     <h1 class="bg-white">Project 3</h1>
     <h1 class="text-3xl font-bold underline bg-slate-500 container lobster-regular">Hello world! </h1>
     
     <section class="body3">
      <header id="navbar" class="bg-blue-950 fixed w-full left-0 z-50 top-0">
        <nav class="container flex items-center justify-between h-16 sm:h-20">
          <div className="font-Lobster sm:text-2xl">Surf Store</div>
          
          <div id="nav-menu" class="absolute top-0 left-0 min-h-[80vh] w-full 
          bg-blue-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden">
            <ul class="flex flex-col items-center gap-8">
              <li>
                <a href="#home" class="nav-link">Home</a>
              </li>
              <li>
                <a href="#about" class="nav-link">About</a>
              </li>
              <li>
                <a href="#popular" class="nav-link">Popular</a>
              </li>
              <li>
                <a href="#review" class="nav-link">Review</a>
              </li>
            </ul>

            <div class="absolute bottom-0 -right-10 opacity-90">
              <Image 
                src={`/images/projects/project3/surfIcon.png`} 
                alt={"surfIcon"} 
                initial="top"
                className="w-32" 
                animate={{x:100 }}
                transition={{ duration: 0.5 }}
                width={200} 
                height={200} 
              />
            </div>
            <div class="absolute -top-5 -left-5 rotate-90 opacity-90">
              <Image 
                src={`/images/projects/project3/surfIcon.png`} 
                alt={"surfIcon"} 
                initial="top"
                className="w-32" 
                animate={{x:100 }}
                transition={{ duration: 0.5 }}
                width={200} 
                height={200} 
              /> 
            </div>

            <div class="text-xl cursor-pointer z-50 ">
              <i class="ri-menu-4-line" id="hamburger"></i>
            </div>


          </div>
        </nav>
      </header>
     </section>

     {/* <Script></Script> */}

  
    </div>
  )
}
