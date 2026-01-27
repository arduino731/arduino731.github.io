'use client'
import useHandleScroll from '../hooks/HandleScroll';
import Image from 'next/image';

const About = () => {
  const { visibleSection: currentSection } = useHandleScroll();

  return (
<section id="about" className="colorBackgroundOpposite py-16 px-6 md:px-20">
  <div className={`scrollHandle transition-opacity duration-1000 ease-in-out max-w-4xl mx-auto
    ${currentSection === 'About' ? 'opacity-100' : 'opacity-0'}`}
    data-id="About"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-center colorBackground colorTextOpposite rounded-md p-2 my-8 fadeIn">About Me</h2>

    {/* Changed md:items-start to md:items-center */}
    <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-8">
      
      {/* Image Container */}
      <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-slate-400 shadow-lg fadeIn shrink-0">
        <Image 
          src="/images/portfolio.jpeg" 
          alt="Brian van Vlymen" 
          width={160} 
          height={160} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Text Container */}
      <div className="flex-1 text-lg colorBackground colorTextOpposite rounded-md p-6 md:p-8 leading-relaxed fadeIn shadow-lg border border-slate-800/50">
  
        {/* Headline: Education + Mission */}
        <p className="mb-6 text-xl font-medium tracking-tight fadeIn">
          I am a <span className=" font-bold">UI/UX Engineer</span> with a Computer Science background from <span className="border-b-2 border-orange-500 pb-0.5">UTSA</span> and a deep commitment to digital inclusion.
        </p>
        
        {/* Specialization: Data & Performance */}
        <p className="mb-6 fadeIn">
          I maintain a dedicated UI/UX Engineering Lab where I stress-test frontend performance through real-time telemetry and AI-driven logic, while keeping my architectural skills sharp through Full-Stack and DevOps projects.
        </p>

        {/* The "Was" Certification / Accessibility Focus */}
        <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border-l-4 border-cyan-500 fadeIn">
          <p className="text-base leading-snug">
            As a certified <strong className="">Web Accessibility Specialist (WAS)</strong>, I believe the most powerful systems are the ones that everyone can use, regardless of ability or device. My goal is to build software that is as <strong>stable as it is accessible</strong>.
          </p>
        </div>

        {/* Technical Footer */}
        <p className="text-sm uppercase tracking-[0.2em] font-bold text-slate-500 fadeIn">
          React // Next.js // WCAG 2.1 // Minimax AI
        </p>
      </div>
    </div>
  </div>
</section>

  )}
  export default About