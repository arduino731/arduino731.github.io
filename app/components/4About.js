'use client'
import useHandleScroll from '../hooks/HandleScroll';
import Image from 'next/image';

const About = () => {
  const currentSection = useHandleScroll();

  return (
  <section id="about" className="colorBackgroundOpposite py-16 px-6 md:px-20">
    <div className={`scrollHandle transition-opacity duration-1000 ease-in-out max-w-4xl mx-auto
      ${currentSection === 'About' ? 'opacity-100' : 'opacity-0'}`}
      data-id="About"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center colorBackground colorTextOpposite rounded-md p-2 my-8 fadeIn">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-slate-400 shadow-lg fadeIn shrink-0">
          <Image 
            src="/images/portfolio.jpeg" 
            alt="Brian van Vlymen" 
            width={160} 
            height={160} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex-1 text-lg colorBackground colorTextOpposite rounded-md p-4 leading-relaxed fadeIn">
          <p className="mb-4 fadeIn">
            Frontend Developer with a deep technical foundation in Full-Stack logic and DevOps practices.
          </p>
          
          <p className="mb-4 fadeIn">
            I specialize in creating <strong>interactive, high-performance UIs</strong> using <strong>Next.js, Tailwind CSS, and GSAP</strong>. I am passionate about crafting seamless user experiences that are not only beautiful but also highly accessible and optimized for speed.
          </p>

          <p className="mb-4 fadeIn">
            While my primary focus is the Frontend, I bring a unique "Systems Thinking" approach to my code. My project experience includes managing <strong>Linux (WSL2)</strong> environments, containerizing applications with <strong>Docker</strong>, and deploying to <strong>AWS EC2</strong>. I understand how to build interfaces that talk efficiently to the backend.
          </p>

          <p className="mb-4 fadeIn italic border-l-4 border-slate-400 pl-4 text-base">
            I am currently looking for my first professional role where I can apply my side-project experience in automated deployments (CI/CD) and modern React development to solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  </section>

  )}
  export default About