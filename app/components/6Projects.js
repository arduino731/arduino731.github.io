/* eslint-disable react/jsx-key */
"use client"
import Image from 'next/image'

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
        { name: "React", color: "blue" },
        { name: "D3.js", color: "green" },
        { name: "Tailwind", color: "purple" }
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
        { name: "Docker", color: "blue" },
        { name: "Teffaform", color: "purple" },
        { name: "Automation", color: "teal" },
        { name: "Monitoring", color: "yellow" },
        { name: "AWS", color: "amber" }
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
      image: "/images/surfIcon.png",
      url: "/projects/3",
      tags: [
        { name: "Next.js", color: "indigo" },
        { name: "Stripe", color: "green" },
        { name: "Prisma", color: "gray" }
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
};

  export default function ProjectsSection() {
    return (
      <div className="colorBackgroundOpposite">
        <div id="projects">
          <div id="projectsHandleScroll">
            <div className="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
              <h1 className="colorBackground colorTextOpposite rounded-md text-5xl p-2 text-center">PROJECTS</h1>
              
              {/* This is the key change: Using grid with responsive columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((item, index) => (
                  <div key={item.id} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="cursor-pointer w-full h-64 colorBackground flex items-center justify-center" onClick={() => window.location.href = item.url}>
                      <Image 
                        key={index}
                        src={item.image}
                        alt={`${item.title} project`}
                        className="w-full h-full object-contain"
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
      </div>
    );
  }

            {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
                {/* <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"> */}
                    {/* <img src="https://placekitten.com/400/300" alt="Image 1" class="w-full h-auto object-cover"/> */}
                {/* {projects.map((item, index) => (
                    <a href={item.url} >
                        <Image 
                            key={index}
                            src={`/images/${item.image}`} 
                            alt={`/images/${item.image}`} 
                            initial="top"
                            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
                            animate={{x:100 }}
                            transition={{ duration: 0.5 }}
                            width={200} 
                            height={200} 
                        />                                         
                    </a>
                ))} */}
                {/* </div> */}
            {/* </div> */}
                
            {/* <div className="flex justify-center items-center m-4">
                {projects.map((item, index) => (
                <a href={item.url} >
                    <Image 
                        key={index}
                        src={`/images/${item.image}`} 
                        alt={`/images/${item.image}`} 
                        initial="top"
                        className="" 
                        animate={{x:100 }}
                        transition={{ duration: 0.5 }}
                        width={200} 
                        height={200} 
                    />                                         
                </a>
                ))}
            </div> */}

//             <section class="bg-yellow-400 p-6">

//   <h1 class="text-3xl font-bold text-center mb-8">My Gallery</h1>

//   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/400/300" alt="Image 1" class="w-full h-auto object-cover"/>
//     </div>
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/401/300" alt="Image 2" class="w-full h-auto object-cover"/>
//     </div>
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/402/300" alt="Image 3" class="w-full h-auto object-cover"/>
//     </div>
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/403/300" alt="Image 4" class="w-full h-auto object-cover"/>
//     </div>
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/404/300" alt="Image 5" class="w-full h-auto object-cover"/>
//     </div>
//     <div class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//       <img src="https://placekitten.com/405/300" alt="Image 6" class="w-full h-auto object-cover"/>
//     </div>
//   </div>

// </section>

//         </div>       
//      );
//  }
  
//  export default Projects;