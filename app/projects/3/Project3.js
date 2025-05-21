'use client'
import Image from 'next/image'
import useHandleScroll from '../../hooks/HandleScroll'
import './style.css'

export default function Project2() {
  const currentSection = useHandleScroll();
  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <div className=" flex items-center colorBackground pb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <h1 className="p-4 colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10">
          E-Commerce Platform
        </h1>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Project Summary */}
      <div
        className={`scrollHandle md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'ProjectSummary' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="ProjectSummary"
      >
        <p className="text-center text-2xl font-bold mb-6">
          A full-stack E-commerce web application built with the MERN stack 
          <br></br>(🍃MongoDB, ⚡Express, ⚛️React, 🟢Node.js). 
        </p>
        <div className="colorBackground p-6 rounded-xl shadow-md mb-8 border-slate-300 border">
          <Image 
            src="/images/ecommerce.png"
            alt="E-Commerce Platform"
            className="rounded-md mx-auto w-1/2 fadeIn"
            width= {800}
            height= {800}
          />
        </div>
      </div>

      {/* What I Built List */}
      <div 
        className={`scrollHandle border-slate-300 border md:mx-20 my-6 p-6 colorBackground rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          currentSection === 'built' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="built"
      >
        <div className="text-center mb-6 colorTextOpposite ">
          <h2 className="fadeIn text-3xl font-bold  mb-2">💡 What I Built</h2>
          <p className="fadeIn text-lg">E-Commerce Platform features of this project:</p>
        </div>
        <ul className="list-disc list-inside space-y-4 text-left text-base md:text-lg colorTextOpposite">
          <li className="fadeIn">A full-stack e-commerce web application built with the MERN stack  <strong>(🍃MongoDB, ⚡Express, ⚛️React, 🟢Node.js)</strong>.</li>
          <li className="fadeIn">
            It features user authentication with <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">Passport.js, dynamic product listings, shopping cart functionality, user profiles, and product review submission.</code>
          </li>
          <li className="fadeIn">The platform includes <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">role-based access, responsive UI design, and real-time feedback with toast notifications.</code> </li>
          
          <li className="fadeIn">Reviews are posted and automatically scrolled into view with <u>visual highlights</u> for seamless <strong>UX.</strong> </li>
          <li className="fadeIn">Deployed on an <strong>AWS EC2</strong> instance using <strong>Docker and automated with Bash scripting.</strong></li>
          {/* <li className="fadeIn">
            Developed a <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">backup.sh</code> strategy to archive Docker volumes and support restoration.
          </li> */}
        </ul>
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
            href="#"
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
            href="https://github.com/arduino731/MernEcommercePro"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            Visit My GitHub →
          </a>
        </div>
      </div>
    </article>
  )
}
