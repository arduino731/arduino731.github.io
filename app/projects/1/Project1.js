import Image from 'next/image'


export default function Project1() {
  return (
    <article>
      <div class="flex items-center my-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <h1 class="mx-4 text-white text-3xl md:text-5xl font-medium my-10 ">Featured Project</h1>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <div style={{ background: 'linear-gradient(90deg, rgba(184,204,220,1) 0%, rgba(41,52,64,1) 35%, rgba(158,182,203,1) 100%)' }}>
        <div class="dark:bg-slate-700 bg-slate-400 flex flex-row md:flex-row w-3/4 m-auto p-6 items-center rounded-lg shadow-lg justify-around border-gray-300 border-8 flex-wrap">
          {/* <!-- First Box with Background --> */}
          <div class="flex flex-col items-center justify-center w-64 h-auto bg-gray-400 text-white rounded-lg shadow-md  border-2 border-gray-500 border-solid">
            <h2 class="text-lg font-bold">Mobile-like Design</h2>
            {/* <!-- Mobile-like Box (Placed Inside the Bottom of H2) --> */}
            <div class="m-5 relative w-auto md:w-56 h-[500px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-lg"></div>
              {/* <!-- Embedded YouTube Video --> */}
              <iframe  
                class="w-full h-full rounded-[30px]" 
                src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1" 
                title="Mobile-like Design Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        {/* <!-- Second Box with Background --> */}
        <div class="flex flex-col items-center justify-center w-64 md:w-96 h-auto bg-gray-800 text-white rounded-lg shadow-md ">
          <h2 class="text-lg font-bold">Desktop-like Design</h2>
          {/* <!-- Mobile-like Box with YouTube Iframe --> */}
          <div class="m-5 relative md:w-80 w-auto h-[300px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-10 bg-gray-800 flex items-center px-4">
                    <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            {/* <!-- Embedded YouTube Video --> */}
            <iframe  
              class="w-full h-full rounded-[30px]" 
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

      <div className="my-2" style={{ position: 'relative', height: '300px' }} >
        <Image 
            src="/images/ScreenshotRWD.png" 
            alt="ScreenshotRWD"
            className="border-solid border-2 border-slate-100 py-2 h-auto rounded-md" 
            quality={100}
            fill
            style={{
              objectFit: 'contain',
            }}
        />
      </div>

      <div className="m-5 p-10 text-2xl text-center">
        <a href="https://github.com/arduino731/van-vlymen-paws-portfolio" target="_blank"> 
          <button>GITHUB</button>
        </a>
      </div>

      <div className="md:mx-20 my-3 p-5">
        <h2 className="text-center text-2xl font-bold mb-4">Key Features</h2>
        <p><span className="font-bold">Animated Cat Paws:</span> Moving upwards with a fading opacity effect.</p>
        <p><span className="font-bold">Responsive Design:</span> A mobile phone and a desktop monitor with arrows indicating adaptability.</p>
        <p><span className="font-bold">GSAP Animations:</span> A gear with motion lines, representing heavy-duty animations.</p>
        <p><span className="font-bold">Performance & Accessibility:</span> A combination of a performance speedometer and an accessibility symbol.</p>
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
      
      <div className="text-xs m-5 ">
      <p><span className="font-bold">Portfolio:</span> This section should be the core of your site. For each project, include:
      A brief description of the project, your role, and the problem it solved.
      Technologies used, showcasing your coding proficiency.
      Links to the live project and code repositories.
      A video demo for complex projects, highlighting key features and your problem-solving approach.
      High-quality images of the project interfaces.</p>
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
