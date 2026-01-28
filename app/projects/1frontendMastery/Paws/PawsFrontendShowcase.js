'use client'
import Image from 'next/image'
import '../style.css'
import useHandleScroll from '../../../hooks/HandleScroll'
import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader';


export default function PawsFrontendShowcase() {
  const { visibleSection:currentSection, showScrollButton } = useHandleScroll();

  const scrollToContent = () => {
    const element = document.getElementById('target-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // This aligns the top of the section with the top of the screen
      });
    }
  };
  
  return (
    <article className="colorBackgroundOpposite colorText min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <Link href="/projects/1frontendMastery" className="bg-white px-4 py-2 rounded shadow text-black">
           ← Back to Home
        </Link>
        <button 
          onClick={scrollToContent} 
          className={`shadow-xl bg-cyan-500 text-white px-6 py-2 rounded-full transition-all duration-700 animate-bounce hover:scale-110 
            ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          ↓ Scroll Down
        </button>
      </nav>
      {/* Section Header */}
      <SectionHeader title="Paws Frontend" highlight='Showcase' />
      
      {/* Project Summary */}
      <div
        id="target-section"
        className={`scroll-mt-[150px] scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out 
          ${
          // Add "!currentSection ||" so it's visible by default
          !currentSection || currentSection === 'projectSummary' ? 'opacity-100' : 'opacity-0'
          }`}
        data-id="projectSummary"
      >
        <div className="flex flex-col gap-10">
          <p className="text-center text-2xl md:text-1xl fadeIn">
            While I am proficient in React, I chose to build this specific showcase using{" "}
            <span className="colorText colorBackgroundOpposite"> {/* Changed p to span */}
              <code className="colorBackground colorTextOpposite px-1 py-0.5 rounded text-lm font-bold">Vanilla JavaScript</code>,{" "}
              <code className="colorBackground colorTextOpposite px-1 py-0.5 rounded text-lm font-bold">Pug</code>, and{" "}
              <code className="colorBackground colorTextOpposite px-1 py-0.5 rounded text-lm font-bold">Express</code>
            </span>
          </p>

          <p className="text-center text-2xl md:text-1xl fadeIn py-5">
            My goal was to demonstrate a "Fundamentals-First" approach—mastering Direct DOM Manipulation, Server-Side Rendering (SSR), and Web Performance without the abstraction of a framework. This deep-dive into the core of the web ensures that I build React applications that are not just functional, but highly optimized and fully accessible from the ground up.
          </p>
        </div>
          {/* <!-- First Box with Background --> */}
        <div className="colorBackground flex flex-row md:flex-row w-3/4 m-auto p-6 items-center rounded-lg shadow-lg justify-around border-slate-300 border flex-wrap">
          <div className="mb-3 fadeIn flex flex-col items-center justify-center w-64 h-auto colorBackgroundOpposite colorText rounded-lg shadow-md ">
            <h2 className="text-lg font-bold">Mobile-like Design</h2>
            {/* <!-- Mobile-like Box (Placed Inside the Bottom of H2) --> */}
            <div className="m-5 relative w-auto md:w-56 h-[500px] bg-black rounded-[40px] shadow-xl border-[10px] border-gray-500 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-lg"></div>
              {/* <!-- Embedded YouTube Video --> */}
              <iframe 
                className="w-full h-full rounded-[30px] border-none" // added border-none
                src="https://www.youtube.com/embed/2vOmAAKTv74?autoplay=1&mute=1" // added &mute=1
                title="Mobile-like Design Portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
                allowFullScreen>
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
          <h2 className="text-3xl font-bold colorTextOpposite mb-2 fadeIn">🛠️ Technical Showcase</h2>
          <p className="colorTextOpposite text-lg fadeIn">
            An engineering-focused breakdown of my professional development background:
          </p>
        </div>

        {/* Section 1: Core Stack */}
        <h3 className="colorTextOpposite text-xl font-semibold text-left fadeIn mt-4">🏗️ Core Project Stack</h3>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg mb-4">
          <li className="fadeIn">Pug (Jade) & Vanilla JavaScript (ES6+)</li>
          <li className="fadeIn">Express.js & Node.js Backend Architecture</li>
          <li className="fadeIn">GSAP (TweenMax) for High-Performance Animations</li>
          <li className="fadeIn">Tailwind CSS & Bootstrap for Mobile-First Design</li>
          <li className="fadeIn">Google Analytics & SEO Performance Monitoring</li>
        </ul>

        {/* Section 2: Logic & Games */}
        <h3 className="colorTextOpposite text-xl font-semibold text-left fadeIn mt-4">🕹️ Logic & Game Development</h3>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg mb-4">
          <li className="fadeIn">Developed <strong>Tetris</strong> & <strong>Tic Tac Toe</strong> using DOM manipulation</li>
          <li className="fadeIn">Engineered <strong>Simon Game</strong> with jQuery sequence logic</li>
          <li className="fadeIn">Built functional <strong>Calculator</strong> using Angular 1.3</li>
          <li className="fadeIn">Utilized <strong>AJAX & JSON</strong> for dynamic API integration</li>
        </ul>

        {/* Section 3: Engineering Skills */}
        <h3 className="colorTextOpposite text-xl font-semibold text-left fadeIn mt-4">✨ Key Engineering Features</h3>
        <ul className="list-disc list-inside space-y-1 text-left colorTextOpposite text-base md:text-lg">
          <li className="fadeIn">Scroll-activated & hardware-accelerated animations</li>
          <li className="fadeIn">Cross-browser stability (Chrome, Safari, Firefox)</li>
          <li className="fadeIn">WebP Optimization & Lazy-loading for Core Web Vitals</li>
          <li className="fadeIn">Version Control (Git) & CI/CD deployment workflows</li>
          <li className="fadeIn">Accessibility-conscious design (ARIA labels & semantic HTML)</li>
        </ul>
      </div>

      {/* GitHub and Live Link Section */}
      <div
        className={`scrollHandle md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'gitHub' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="gitHub"
      >
        <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-6 colorTextOpposite fadeIn">
            🌐 Want to view the live demo?
            <br />
            Access the running project on AWS EC2:
          </p>
          <p className="text-md mt-2 colorTextOpposite fadeIn">
            <code className="colorBackgroundOpposite colorText font-extrabold px-1 py-0.5 rounded text-sm fadeIn">Note:</code> 
            Live demo currently unavailable due to server transition. Source code and full functionality can be reviewed on GitHub.</p>
          <a
            href="#"
            target=""
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite fadeIn inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            🌐 View Live Project →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold fadeIn">Paws Frontend Showcase</h4>
          <p className="text-lg fadeIn">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/paws-frontend-showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold fadeIn">Angular App</h4>
          <p className="text-lg fadeIn">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/jennifershows_Angular"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>
        {/* <div className="mx-auto max-w-xl text-center p-6 m-4 colorBackground fadeIn colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <h4 className="text-lg font-bold fadeIn">Full Stack Authentication App with Express, MongoDB, and EJS</h4>
          <p className="text-lg fadeIn">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/vanVlymenList"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div> */}
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
    </article>
  )
}
