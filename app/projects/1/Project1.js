import Image from 'next/image'


export default function Project1() {
  return (
    <article>
      <div style={{ background: 'linear-gradient(90deg, rgba(184,204,220,1) 0%, rgba(41,52,64,1) 35%, rgba(158,182,203,1) 100%)' }}>
        {/* <div className="flex justify-center h-screen/2"> */}
        <div className="my-2" style={{ position: 'relative', height: '300px' }} >
          <Image 
              src="/images/ScreenshotRWD.png" 
              alt="ScreenshotRWD"
              // width={1000} 
              // height={1000} 
              className="border-solid border-2 border-slate-100 py-2 h-auto rounded-md" 
              quality={100}
              // priority={true}
              fill
              style={{
                objectFit: 'contain',
              }}
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="m-5">Featured Project</h1>
        <div className="m-5">
          <a href="https://github.com/arduino731/van-vlymen-paws-portfolio" target="_blank"> GITHUB</a>
        </div>
      </div>

      <div class="px-2">
        
          <h2 className="text-center w-screen">
            <p>Animated Cat Paws: Moving upwards with a fading opacity effect.</p>
            <p>Responsive Design: A mobile phone and a desktop monitor with arrows indicating adaptability.</p>
            <p>GSAP Animations: A gear with motion lines, representing heavy-duty animations.</p>
            <p>Performance & Accessibility: A combination of a performance speedometer and an accessibility symbol.</p>
          </h2>
          <div class="flex -mx-2">
            <div class="w-1/4 px-2">
            <div class="bg-slate-800 w-full relative">
              {/* <img className="rounded " src="/images/dogPawsEffect.webp"/> */}
              <Image 
              src="/images/dogPawsEffect.webp" 
              alt="dogPawsEffect"
              // width={1000} 
              // height={1000} 
              className=" h-auto rounded-full" 
              quality={100}
              // priority={true}
              fill
              style={{
                objectFit: 'contain',
              }}
          /> 
              <h1 className="text-center text-lg">Animated Dog Paws</h1>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 w-full h-full"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-400 w-full h-full"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-400 w-full h-full"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
        </div>
      </div>
      
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 w-full h-full"><img src="/images/ScreenshotRWD.png"/> </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-500 w-full h-full"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 w-full h-full"><img src="/images/ScreenshotRWD.png" /> </div>
          </div>
        </div>
      </div>

      <div className="text-xs">
      <h2>LatestNews</h2>
      <h1>Pages & Routes</h1>
      <h2>Client Components </h2>
      <p>Portfolio: This section should be the core of your site. For each project, include:
      A brief description of the project, your role, and the problem it solved.
      Technologies used, showcasing your coding proficiency.
      Links to the live project (if available) and code repositories.
      A video demo for complex projects, highlighting key features and your problem-solving approach.
      High-quality images of the project interfaces.</p>
      </div>
      
      <div className="flex flex-col w-1/2 text-left mx-auto">
        <div className="text-lg bg-slate-200 rounded-md border-2 border-solid border-slate-400 ">
          <p className='mb-3'>Get ready to be amazed by the second major project in my portfolio! This project is not just a website; it's an experience. Developed using the Pug template engine (formerly known as Jade), this project showcases my expertise in creating dynamic and engaging web applications.</p>
          <p className='mb-3'>Here's the exciting part: every time you refresh the browser page, you'll witness two adorable paws in motion, gracefully moving from the bottom to the top of your screen. These paws don't just appear; they fade in with a captivating opacity effect that changes every second, adding a touch of whimsy to the user experience.</p>
          <p className='mb-3'>But that's not all! This project is a masterclass in responsiveness and cross-browser compatibility. Whether you're on a mobile device or a desktop, the images resize seamlessly, ensuring a flawless experience across all platforms. And yes, it's built with jQuery, but it's versatile enough to work with vanilla JavaScript too.</p>
          <p className='mb-3'>Now, let's talk about the animations. My full name isn't just displayed; it's animated, bringing some HTML elements to life with the power of GSAP. This isn't just any animation; it's heavy-duty, with transforms and transforms galore. But fear not, for GSAP handles it all with ease, proving itself as a powerful library for all your animation needs.</p>
          <p className='mb-3'>And there's more! This project is packed with features like Express, NPM modules, Google Analytics, and the TweenMax library. But it's not just about the bells and whistles; it's also about accessibility enhancements and performance optimization, ensuring that everyone can enjoy this digital masterpiece.</p>
          <p className='mb-3'>In summary, this project is a testament to my coding proficiency, showcasing my ability to solve problems, animate elements, and optimize performance, all while creating an engaging and accessible user experience. Get ready to be wowed!</p>
        </div>
      </div>
      <iframe className="w-full aspect-video" width="250" height="315" src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="250" height="315" src="https://www.youtube.com/embed/gUfnJ_Gykg0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="315" height="560" src="https://www.youtube.com/embed/2vOmAAKTv74" title="portfolio2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Image 
          src="/images/UX.webp" 
          alt="UX"
          width={1000} 
          height={1000} 
          className="" 
          quality={100}
          // style={{height:"auto"}}
      />

    </article>
  )
}
