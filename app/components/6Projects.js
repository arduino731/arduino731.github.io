"use client"
import Image from 'next/image'
import useHandleScroll from '../hooks/HandleScroll';

// githubURL
// https://github.com/arduino731/jennifershows_Angular
// https://github.com/arduino731/van-vlymen-paws-portfolio


// Project data
const projects = [
    {
      id: 1,
      title: "Interactive Front-End Developer Showcase",
      description: "A responsive, animated portfolio showcasing front-end skills using Pug, Tailwind CSS, GSAP, and Express. Features scroll-triggered animations, mobile-first design, accessibility, and SEO. Built to demonstrate real-world UI/UX and modern web development practices.",
      image: "/images/secondPort.png",
      url: "/projects/1",
      tags: [
        { name: "HTML5/CSS3", color: "orange" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "Bootstrap", color: "indigo" },
        { name: "NPM Modules", color: "red" },
        { name: "LocalStorage", color: "yellow" },
        { name: "Image Optimization", color: "green" }
      ]
    },
    {
      id: 2,
      title: "DevOps Linux System Admin",
      description: "A full-stack Dockerized project deployed on AWS EC2 using Terraform, bash automation, and monitoring tools. Includes infrastructure as code, rsync-based deployment, daily cron logging, and fail2ban security.",
      image: "/images/DevOps-linux-system-admin.png",
      url: "/projects/2",
      tags: [
        { name: "Linux", color: "slate" },
        { name: "Container-Docker", color: "blue" },
        { name: "IaC-Terraform", color: "purple" },
        { name: "Automation", color: "teal" },
        { name: "Monitoring", color: "yellow" },
        { name: "AWS", color: "amber" }
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication with Passport.js, dynamic product listings, shopping cart functionality, user profiles, and product review submission. The platform includes role-based access, responsive UI design, and real-time feedback with toast notifications. Reviews are posted and automatically scrolled into view with visual highlights for seamless UX. Deployed on an AWS EC2 instance using Docker and automated with Bash scripting",
      image: "/images/ecommerce.png",
      url: "/projects/3",
      tags: [
        { name: "Next.js", color: "indigo" },
        { name: "Tailwind CSS", color: "teal" },
        { name: "API-Passport", color: "black" },
        { name: "API-Plaid", color: "white" },
        { name: "NOSQL", color: "green" },
        { name: "IaC-Terraform", color: "purple" },
        { name: "Docker", color: "blue" }
      ]
    }
  ];

const colorMap = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
  slate: "bg-slate-100 text-slate-800",
  teal: "bg-teal-100 text-teal-800",
  yellow: "bg-yellow-100 text-yellow-800",
  amber: "bg-amber-100 text-amber-800",
  indigo: "bg-indigo-100 text-indigo-800",
  gray: "bg-gray-100 text-gray-800",
  orange: "bg-orange-200 text-orange-900", 
  red: "bg-rose-100 text-rose-800", 
  white: "bg-gray-100 text-gray-800", 
  black: "bg-black text-gray-100", 
};

export default function ProjectsSection() {
  const currentSection = useHandleScroll();
  
  return (
    <div className="colorBackgroundOpposite ">
      <div id="projects" className="py-16 px-6 md:px-20">
        <div className={`scrollHandle transition-opacity duration-1000 ease-in-out flex flex-col gap-6 p-8 max-w-4xl mx-auto
        ${
        currentSection === 'Projects' ? 'opacity-100' : 'opacity-0'
        }`}
        data-id="Projects"
        >
          <h1 className="colorBackground colorTextOpposite rounded-md text-5xl p-2 text-center fadeIn">PROJECTS</h1>
          {/* This is the key change: Using grid with responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <div key={item.id} className=" overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center cursor-pointer" onClick={() => window.location.href = item.url}>
                  <Image 
                    key={index}
                    src={item.image}
                    alt={`${item.title} project`}
                    className="fadeIn w-full object-contain h-48 sm:h-56 md:h-64 lg:h-72 rounded-md"
                    width={400}
                    height={300}
                  />                                         
                </div>
                <div className="p-4 colorBackground h-full">
                  <h3 className="text-lg text-center font-semibold mb-2 colorTextOpposite">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 colorTextOpposite">{item.description}</p>
                  <div className="flex flex-wrap gap-2 ">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`inline-block text-xs px-2 py-1 rounded-full text-black
                        ${colorMap[tag.color]} `}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}