'use client'

import Image from 'next/image'


import { useState, useEffect } from "react";    // framer motion
import { motion } from "framer-motion";         // framer motion


const About = () => {
  const [hidden, setHidden] = useState(false);  // framer motion  
  useEffect(() => {

    let lastScrollY = window.scrollY;
    // const handleScroll = () => {
    //   if (window.scrollY > lastScrollY) {
    //     setHidden(true); // Hide on scroll down
    //   } else {
    //     setHidden(false); // Show on scroll up
    //   }
    //   lastScrollY = window.scrollY;
    // };

    window.addEventListener("scroll", () => {
        const aboutMe= document.getElementById("aboutMe");
        const scrollHeight = aboutMe.scrollHeight;
        console.log(scrollHeight)
        if (window.scrollY > scrollHeight + 250)  {
          aboutMe.classList.add("opacity-100");
          aboutMe.classList.remove("opacity-0");
        } else {
          aboutMe.classList.add("opacity-0");
          aboutMe.classList.remove("opacity-100");
        }
    });
    
  });


  return (
       
    
      <div className="colorBackgroundOpposite">
        {/* <motion.nav
          className="fixed top-44 left-0 w-full bg-gray-800 text-white p-4 shadow-lg"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: hidden ? 0 : 1, y: hidden ? -50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-center text-lg font-bold">Scrolling Navbar</h1>
        </motion.nav> */}






        <div id="about" className="flex items-center justify-center">
          <div id="aboutMe" className="opacity-0 transition-opacity duration-1000 ease-in-out">
            <div class="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
              <h1  className="colorBackground colorTextOpposite rounded-md text-5xl p-2 text-center">About Me</h1>

              <p className="break-normal">
                Suggested Structure for Your Portfolio:
              </p> 
              <p className="break-normal">
              About Me:

                A brief paragraph introducing yourself.

                Your background, interests, and passion for web development.
              </p>
            </div>
          </div>
        </div> 








    {/* <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">I specialize in:</h2>

    <div class="flex items-center gap-4 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">📱</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Responsive Web Design –</span> Ensuring seamless experiences across all devices.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-green-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">💻</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Frontend & Backend Development –</span> Building interactive UIs with React, Tailwind CSS, and JavaScript.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-purple-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">⚡</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Performance Optimization –</span> Writing clean, efficient, and scalable code.
        </p>
    </div>

    <div class="flex items-center gap-4 p-6 bg-red-500 text-white rounded-lg shadow-lg">
        <span class="text-3xl">🎨</span>
        <p class="text-lg font-medium">
            <span class="font-bold">Web Animations & Effects –</span> Creating smooth and engaging user experiences.
        </p>
    </div>

    <div class="text-center mt-8">
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-300">
            💡 My goal? To bring ideas to life with code and create visually stunning, user-friendly websites that make an impact.
        </p>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Let's build something amazing together! 🚀💻
        </p>
    </div>*/}




        {/* <div className="p-2 m-4 flex justify-center ">
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/fast.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="lg:text-3xl ">FAST</h1>
            <p className="sm:text-sm">Fast load times and lag free interaction, my highest priority.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/responsive.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="lg:text-3xl ">RESPONSIVE </h1>
            <p className="">My layouts will work on any device, big or small.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/intuitive.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="lg:text-3xl ">INTUITIVE</h1>
            <p className="">Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
          <div className=" w-1/4 text-center">
            <Image 
              src="/images/dynamic.png" 
              className="bg-slate-500 mx-auto block ring-1 ring-slate-900/5 shadow-xl rounded-lg border-slate-950 border-2" 
              alt="logo"
              width={100} 
              height={100} 
            />
            <h1 className="lg:text-3xl">DYNAMIC</h1>
            <p className="">Websites don&apos;t have to be static, I love making pages come to life.</p>
          </div>
        </div> */}




        {/* <p>
          When creating a portfolio for a full-stack development role, the primary focus should be on showcasing your skills, 
          projects, and relevant experience in the field of computer science and web development. Therefore, emphasizing your 
          educational background and technical expertise is usually more important than displaying professional pictures of 
          yourself.
        </p>        
          
        <ol className="list-decimal pl-4">
          <li className="mb-2"><span className="font-bold"> Relevance:</span> Your portfolio should primarily highlight your qualifications and experience that are directly related to the job you &apos;re applying for. Your computer science degree demonstrates your formal education in the field, which is highly relevant to full-stack development roles.</li>  
          <li className="mb-2"><span className="font-bold">Technical Skills:</span> Employers are generally more interested in your technical skills, coding abilities, and project work. Your portfolio should showcase your projects, coding proficiency, and problem-solving skills.</li>  
          <li className="mb-2"><span className="font-bold">Professionalism:</span> While it &apos; s important to have a professional appearance, including a professional photo of yourself on your portfolio can be a nice touch, but it should not be the primary focus. The emphasis should be on your work and accomplishments, not your appearance.</li>  
        </ol>  

        <p>
          That said, it &apos;s still important to maintain a professional appearance online, including on platforms like LinkedIn. You can have a professional photo on your LinkedIn profile and include a link to your portfolio there. However, your portfolio&apos;s primary focus should be on showcasing your skills, projects, and achievements in the field of computer science and web development.
          Remember, your portfolio is a tool to sell your technical abilities and experience to potential employers, 
          so make sure it effectively communicates your expertise in those areas.
        </p> */}
          
             
    </div> // end function 
  )}
    
    
  export default About