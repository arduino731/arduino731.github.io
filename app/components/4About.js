'use client'
import { useState, useEffect } from "react";    // framer motion

const About = () => {
  const [hidden, setHidden] = useState(false);  // framer motion  
  useEffect(() => {

    let lastScrollY = window.scrollY;

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
    </div>
  )}
  export default About