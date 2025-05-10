'use client'
import { useState, useEffect } from "react";    // framer motion

const About = () => {
  const [hidden, setHidden] = useState(false);  // framer motion  
  useEffect(() => {

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const aboutHandleScroll= document.getElementById("aboutHandleScroll");
        const scrollHeight = aboutHandleScroll.scrollHeight;
        console.log(scrollHeight)
        if (window.scrollY > scrollHeight + 250)  {
          aboutHandleScroll.classList.add("opacity-100");
          aboutHandleScroll.classList.remove("opacity-0");
        } else {
          aboutHandleScroll.classList.add("opacity-0");
          aboutHandleScroll.classList.remove("opacity-100");
        }
    });
  });

  return (
    <div className="colorBackgroundOpposite">
      <div id="about" className="flex items-center justify-center">
        <div id="aboutHandleScroll" className="opacity-0 transition-opacity duration-1000 ease-in-out">
          <div class="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
            <h1  className="colorBackground colorTextOpposite rounded-md text-5xl p-2 text-center">About Me</h1>

            <p className="break-normal colorText">
            <b>About Me:</b> a self-driven front-end developer with a strong interest in DevOps and system automation. I have a background in computer science and hands-on experience building responsive, animated web applications using tools like Next.js, Tailwind CSS, and GSAP. My passion lies in creating smooth user experiences and deploying full-stack apps using modern DevOps practices like Docker, AWS EC2, and Terraform. I enjoy blending design with functionality, and I’m constantly exploring new ways to optimize performance, ensure accessibility, and build scalable systems. When I’m not coding, I enjoy tinkering with automation scripts and growing plants in the Texas sun.
            </p> 
          </div>
        </div>
      </div>             
    </div>
  )}
  export default About