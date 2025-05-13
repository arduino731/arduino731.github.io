'use client'
import Image from 'next/image'
import './style.css'
import useHandleScroll from '../../hooks/HandleScroll'

export default function Project1() {
  const currentSection = useHandleScroll();

  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <div className="flex items-center colorBackground pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10 ">Interactive Front-End Developer Showcase</h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>


      {/* Project Summary */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'projectSummary' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="projectSummary"
      >
        <p className="text-center text-2xl font-bold mb-6 fadeIn">
        A dynamic, responsive portfolio built with modern web technologies to demonstrate front-end development expertise. Features mobile-first design, smooth GSAP animations, custom JS interactions, and accessibility best practices. Designed using Pug templates and styled with Tailwind CSS, this project highlights UI/UX principles, SEO optimization, and performance tuning for real-world production readiness.
        </p>
          {/* <!-- First Box with Background --> */}
        <div className="colorBackground flex flex-row md:flex-row w-3/4 m-auto p-6 items-center rounded-lg shadow-lg justify-around border-slate-300 border flex-wrap">
          <div className="fadeIn flex flex-col items-center justify-center w-64 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
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
          <div className="fadeIn flex flex-col items-center justify-center w-64 md:w-96 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
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
      {/* What I Built List */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackground rounded-lg shadow-md transition-opacity duration-1000 ease-in-out ${
          currentSection === 'built' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="built"
      >
        <div className="text-center mb-6 fadeIn">
          <h2 className="text-3xl font-bold colorTextOpposite mb-2 fadeIn">💡 What I Built</h2>
          <p className="colorTextOpposite text-lg fadeIn">Interactive Front-End Developer features of this project:</p>
        </div>
        <ul className="list-disc list-inside space-y-4 text-left colorTextOpposite text-base md:text-lg">
          <li>Provisioned AWS EC2 instance, security group, and Elastic IP using <strong>Terraform</strong>.</li>
          <li>
            Created reusable <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">deploy.sh</code> to automate code sync and container restart with <strong>rsync + SSH</strong>.
          </li>
          <li>Built and deployed frontend (Nginx) and backend (Node.js) apps using <strong>Docker Compose</strong>.</li>
          <li>Implemented <strong>CloudWatch Agent</strong> and a daily cron script to monitor uptime and disk space.</li>
          <li>Secured SSH access with <strong>fail2ban</strong> to block brute-force login attempts.</li>
          <li>
            Developed a <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">backup.sh</code> strategy to archive Docker volumes and support restoration.
          </li>
        </ul>
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

      {/* GitHub and Live Link Section */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'gitHub' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="gitHub"
      >
        <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-6 colorTextOpposite">
            🌐 Want to view the live demo?
            <br />
            Access the running project on AWS EC2:
          </p>
          <a
            href="https://github.com/arduino731/van-vlymen-paws-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite fadeIn inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            🌐 View Live Project →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-10 ">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/van-vlymen-paws-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
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
