'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import './style.css'
import useHandleScroll from '../../hooks/HandleScroll'

export default function Project1() {
  const handleScroll = useHandleScroll(['gitHub', 'keyFeatures','keyFeatures2'])
    // const [sectionInView, setSectionInView] = useState(null)
  
    // useEffect(() => {
    //   const sections = ['gitHub', 'keyFeatures','keyFeatures2']

    //   const handleScroll = () => {
    //     for (let id of sections) {
    //       const el = document.getElementById(id)
    //       if (!el) continue
    
    //       const rect = el.getBoundingClientRect()

    //         if (rect.top >= 0 && rect.bottom <= window.innerHeight){
    //           if (id === 'keyFeatures') {
    //             const boldEls = el.querySelectorAll('.keyFeatures')
    //             boldEls.forEach((bold, index) => {
    //               setTimeout(() => {
    //                 bold.classList.add('animate')
    //               }, index * 200) // delay by 200ms each
    //             })
    //           }

    //         setSectionInView(id)
    //         break
    //         } else if (id === 'keyFeatures') {
    //           const boldEls = el.querySelectorAll('.keyFeatures')
    //           boldEls.forEach((bold) => bold.classList.remove('animate'))
    //         }
    //     }
    //   }
    //   window.addEventListener('scroll', handleScroll)
    //   handleScroll() // run on first load
    //   return () => window.removeEventListener('scroll', handleScroll)
    // }, []) 

  return (
    <article>
      <div className="flex items-center colorBackgroundOpposite pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorBackground colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10 ">Featured Project</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="p-8" style={{ background: 'linear-gradient(90deg, rgba(184,204,220,1) 0%, rgba(41,52,64,1) 35%, rgba(158,182,203,1) 100%)' }}>
        <div className="dark:bg-slate-700 bg-slate-400 flex flex-row md:flex-row w-3/4 m-auto p-6 items-center rounded-lg shadow-lg justify-around border-gray-300 border-8 flex-wrap">
          {/* <!-- First Box with Background --> */}
          <div className="flex flex-col items-center justify-center w-64 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
            <h2 className="text-lg font-bold">Mobile-like Design</h2>
            {/* <!-- Mobile-like Box (Placed Inside the Bottom of H2) --> */}
            <div className="m-5 relative w-auto md:w-56 h-[500px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-lg"></div>
              {/* <!-- Embedded YouTube Video --> */}
              <iframe  
                className="w-full h-full rounded-[30px]" 
                src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1" 
                title="Mobile-like Design Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        {/* <!-- Second Box with Background --> */}
        <div className="flex flex-col items-center justify-center w-64 md:w-96 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
          <h2 className="text-lg font-bold ">Desktop-like Design</h2>
          {/* <!-- Mobile-like Box with YouTube Iframe --> */}
          <div className="m-5 relative md:w-80 w-auto h-[300px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-10 bg-gray-800 flex items-center px-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            {/* <!-- Embedded YouTube Video --> */}
            <iframe  
              className="w-full h-full rounded-[30px]" 
              src="https://www.youtube.com/embed/gUfnJ_Gykg0?autoplay=1" 
              title="Desktop-like Design Portfolio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameborder="0" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        </div>
      </div> 
      <div className="colorBackground" style={{ position: 'relative', height: '300px' }} >
        <Image 
            src="/images/ScreenshotRWD.png" 
            alt="ScreenshotRWD"
            className="p-6 h-auto rounded-md" 
            quality={100}
            fill
            style={{
              objectFit: 'contain',
            }}
        />
      </div>

        <div>

        <div 
          className={`duration-1000 ease-in-out transition-opacity text-2xl m-5 p-10 text-center   
            ${handleScroll === 'gitHub' ? 'opacity-100' : 'opacity-0'}`}
          id="gitHub">
          <p className="text-lg ">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          
          <a
          href="https://github.com/arduino731/van-vlymen-paws-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverSpotlight colorTextOpposite colorBackground inline-block mt-4 px-6 py-2  rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>


        <div 
          className={`md:mx-20 my-6 p-6 colorBackground rounded-lg colorTextOpposite duration-1000 ease-in-out transition-opacity 
            ${handleScroll === 'keyFeatures' ? 'opacity-100' : 'opacity-0'}`} 
        
          id="keyFeatures">
          <h2 className="text-center text-5xl font-bold mb-6 ">Key Features</h2>
          
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row items-start">
              <span className="font-bold keyFeatures">🐾 Animated Cat Paws:</span>
              <span>Moving upwards with a fading opacity effect.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold keyFeatures">📱 Responsive Design:</span>
              <span>A mobile phone and a desktop monitor with arrows indicating adaptability.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold keyFeatures">⚙️ GSAP Animations: </span>
              <span>A gear with motion lines, representing heavy-duty animations.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold keyFeatures">🚀 Performance & Accessibility:</span>
              <span>A combination of a performance speedometer and an accessibility symbol.</span>
            </div>
          </div>
        </div>

        <div 
          className={`md:mx-20 my-6 p-6 colorBackground rounded-lg colorTextOpposite duration-1000 ease-in-out transition-opacity 
            ${handleScroll === 'keyFeatures2' ? 'opacity-100' : 'opacity-0'}`} 
        
          id="keyFeatures2">
          <h2 className="text-center text-5xl font-bold mb-6 ">Key Features</h2>
          
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row items-start">
              <span className="font-bold">🐾 Animated Cat Paws:</span>
              <span>Moving upwards with a fading opacity effect.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold">📱 Responsive Design:</span>
              <span>A mobile phone and a desktop monitor with arrows indicating adaptability.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold">⚙️ GSAP Animations: </span>
              <span>A gear with motion lines, representing heavy-duty animations.</span>
            </div>
            <div className="flex flex-row items-start">
              <span className="font-bold">🚀 Performance & Accessibility:</span>
              <span>A combination of a performance speedometer and an accessibility symbol.</span>
            </div>
          </div>
        </div>
      </div>




          <div class="flex mx-2">
            <div class="w-1/4 px-2">
              <h2 className="text-center text-lg">Animated Dog Paws</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/wolf_paw_Right1.png" 
                  alt="wolf paw right" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                </div>
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/wolfpawLeft1.png" 
                  alt="wolf paw left" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
              <h2 className="text-center text-lg">Responsive Design</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/responsive.png" 
                  alt="responsive" 
                  // className="rounded-full" 
                  quality={100}
                  // priority={true}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
            <h2 className="text-center text-lg">GSAP Animations</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/greensock.png" 
                  alt="greensock" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
            <div class="w-1/4 px-2">
            <h2 className="text-center text-lg">Performance & Accessibility</h2>
              <div class="flex flex-row items-center justify-center">
                <div class="w-1/4 relative h-full" style={{position:"relative", height: "100px"}}>
                  <Image 
                  src="/images/access.png" 
                  alt="access" 
                  quality={100}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  /> 
                
                </div>
              </div>
            </div>
          </div>
      
      
      <div className="flex flex-col w-1/2 text-left mx-auto">
        <div className="p-5 text-lg rounded-md border-2 border-solid border-slate-400 dark:bg-slate-700 bg-slate-400 ">
          <p className='mb-3'>Get ready to be amazed by the second major project in my portfolio! This project is not just a website; it's an experience. Developed using the Pug template engine (formerly known as Jade), this project showcases my expertise in creating dynamic and engaging web applications.</p>
          <p className='mb-3'>Here's the exciting part: every time you refresh the browser page, you'll witness two adorable paws in motion, gracefully moving from the bottom to the top of your screen. These paws don't just appear; they fade in with a captivating opacity effect that changes every second, adding a touch of whimsy to the user experience.</p>
          <p className='mb-3'>But that's not all! This project is a masterclass in responsiveness and cross-browser compatibility. Whether you're on a mobile device or a desktop, the images resize seamlessly, ensuring a flawless experience across all platforms. And yes, it's built with jQuery, but it's versatile enough to work with vanilla JavaScript too.</p>
          <p className='mb-3'>Now, let's talk about the animations. My full name isn't just displayed; it's animated, bringing some HTML elements to life with the power of GSAP. This isn't just any animation; it's heavy-duty, with transforms and transforms galore. But fear not, for GSAP handles it all with ease, proving itself as a powerful library for all your animation needs.</p>
          <p className='mb-3'>And there's more! This project is packed with features like Express, NPM modules, Google Analytics, and the TweenMax library. But it's not just about the bells and whistles; it's also about accessibility enhancements and performance optimization, ensuring that everyone can enjoy this digital masterpiece.</p>
          <p className='mb-3'>In summary, this project is a testament to my coding proficiency, showcasing my ability to solve problems, animate elements, and optimize performance, all while creating an engaging and accessible user experience. Get ready to be wowed!</p>
        </div>
      </div>

    </article>
  )
}
