"use client"
import "./css/style.css"
import Image from 'next/image'


export default function Project3() {

  return (
    <div>
     <h1 class="bg-white text-3xl font-bold underline bg-slate-500 container">Surf Website || TailwindCSS </h1>
     <h1 class="bg-white">Project 3</h1>
     <h1 class="text-3xl font-bold underline bg-slate-500 container lobster-regular">Hello world! </h1>
     


     {/* <Image 
                        // public\images\projects\project3\surfIcon.png
                        src={`/images/projects/project3/surfIcon.png`} 
                        alt={`/images/projects/project3/surfIcon.png`} 
                        initial="top"
                        className="" 
                        animate={{x:100 }}
                        transition={{ duration: 0.5 }}
                        width={200} 
                        height={200} 
                    />  */}
     <section>
      <header id="navbar">
        <nav>
          <div>
            <ul>
              <li>
                <a href="#" class="nav-link">Home</a>
              </li>
              <li>
                <a href="#" class="nav-link">About</a>
              </li>
              <li>
                <a href="#" class="nav-link">Popular</a>
              </li>
              <li>
                <a href="#" class="nav-link">Review</a>
              </li>
            </ul>

            <img src="/images/projects/project3/surfIcon.png"></img>
            
          </div>
        </nav>
      </header>
     </section>

  
    </div>
  )
}
