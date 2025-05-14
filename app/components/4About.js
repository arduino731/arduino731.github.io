'use client'
// import { useState, useEffect } from "react";    // framer motion
import useHandleScroll from '../hooks/HandleScroll';

const About = () => {
  const currentSection = useHandleScroll();

  return (
      // <div
      //   className={
      //      `scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out 
      
      //     ${ currentSection === 'projectSummary' ? 'opacity-100' : 'opacity-0'
      //      }`}
      //   data-id="projectSummary"
      // ></div>
      <section id="about" className="colorBackgroundOpposite py-16 px-6 md:px-20">
        <div className={`scrollHandle opacity-0 transition-opacity duration-1000 ease-in-out max-w-4xl mx-auto
        ${
           currentSection === 'about' ? 'opacity-100' : 'opacity-0'
         }`}
         data-id="about"
      >
          <h2 className="text-4xl md:text-5xl font-bold text-center colorBackground colorTextOpposite rounded-md p-2 my-8 animate-fadeInUp">About Me</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-slate-400 shadow-lg animate-fadeInUp">
              <img src="/images/profile.jpg" alt="Brian van Vlymen" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-lg colorBackground colorTextOpposite rounded-md p-4 leading-relaxed animate-fadeInUp">
              <p className="mb-4">
                Hi, I'm <strong>Brian van Vlymen</strong> — a self-driven front-end developer with a passion for clean design and DevOps best practices. With a background in computer science, I specialize in creating engaging, accessible, and scalable web applications.
              </p>
              <p className="mb-4">
                I enjoy building fast, animated UIs using tools like <strong>Next.js, Tailwind CSS, GSAP</strong>, and deploying them with <strong>AWS EC2, Docker</strong>, and Terraform. Whether it's crafting responsive layouts or automating deployments, I'm excited about solving real-world problems with code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring automation, learning new tools, or growing blueberries under the Texas sun.
              </p>
            </div>
          </div>
        </div>
      </section>

  )}
  export default About