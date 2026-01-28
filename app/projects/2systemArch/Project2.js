'use client'
import SectionHeader from '../components/SectionHeader';

import Image from 'next/image'
import './style.css'


// --- JSON DATA SOURCE ---
const PROJECT_DATA = [
  {
    id: 'MernEcommercePro',
    title: 'MERN E-Commerce Pro',
    buttonLabel: 'View MERN E-Commerce Pro',
  },
  // {
  //   id: 'tictactoe',
  //   title: 'Minimax AI Tic-Tac-Toe',
  //   buttonLabel: 'View Tic Tac Toe',
  // },
  // {
  //   id: 'paws',
  //   title: 'Paws Frontend Showcase',
  //   buttonLabel: 'View Paws Project',
  // }

];

export default function Project2() {
  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <SectionHeader title="Full-Stack" highlight="Platform" />
      

      {/* Project Summary */}
      {/* <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <p className="text-center text-2xl font-bold">
          A full-stack E-commerce web application built with the MERN stack 
          <br></br>(🍃MongoDB, ⚡Express, ⚛️React, 🟢Node.js). 
        </p>
        <div className="colorBackground p-6 rounded-xl shadow-md mb-8 border-slate-300 border">
          <Image 
            src="/images/ecommerce.png"
            alt="E-Commerce Platform"
            className="rounded-md mx-auto w-1/2 "
            width= {800}
            height= {800}
          />
        </div>
      </div> */}
        
      {/* What I Built List */}
      <div 
        className=" border-slate-300 border md:mx-20 my-6 p-6 colorBackground rounded-lg colorText">
        <div className="text-center mb-6 colorTextOpposite ">
          <h2 className=" text-3xl font-bold  mb-2">💡 What I Built</h2>
          <p className=" text-lg">E-Commerce Platform features of this project:</p>
        </div>
        <ul className="list-disc list-inside space-y-4 text-left text-base md:text-lg colorTextOpposite">
          <li className="">A full-stack e-commerce web application built with the MERN stack  <strong>(🍃MongoDB, ⚡Express, ⚛️React, 🟢Node.js)</strong>.</li>
          <li className="">
            It features user authentication with <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">Passport.js, dynamic product listings, shopping cart functionality, user profiles, and product review submission.</code>
          </li>
          <li className="">The platform includes <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">role-based access, responsive UI design, and real-time feedback with toast notifications.</code> </li>
          
          <li className="">Reviews are posted and automatically scrolled into view with <u>visual highlights</u> for seamless <strong>UX.</strong> </li>
          <li className="">Deployed on an <strong>AWS EC2</strong> instance using <strong>Docker and automated with Bash scripting.</strong></li>
          {/* <li className="">
            Developed a <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">backup.sh</code> strategy to archive Docker volumes and support restoration.
          </li> */}
        </ul>
      </div>

      <div className="flex flex-wrap p-4 colorBackgroundOpposite text-center justify-center">
        {/* Map through JSON Data to create cards */}
        {PROJECT_DATA.map((project) => (
          <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="rounded-lg shadow-md border-slate-300 border colorBackground colorTextOpposite p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              <p className="text-xl font-bold">{project.title}</p>
              <button
                onClick={() => onProjectClick(project.id)}
                className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                🌐 {project.buttonLabel} →
              </button>
            </div>
          </div>
        ))}
      </div>




      {/* GitHub and Live Link Section */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
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
            className="hoverSpotlight colorText colorBackgroundOpposite  inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
          >
            🌐 View Live Project →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 colorBackground  colorTextOpposite rounded-lg shadow-md border-slate-300 border">
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
