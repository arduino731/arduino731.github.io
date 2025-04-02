import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer class="colorBackgroundOpposite colorText py-10">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        <div class=" text-center md:text-left mb-6 md:mb-0">
          <h2 class="text-2xl font-bold">Brian Van Vlymen</h2>
          <p class="text-sm">Creating beautiful & functional web experiences</p>
        </div>

        <ul class="flex flex-col md:flex-row gap-4 text-sm">
          <li><a href="#" class="hover:text-gray-100 transition">Home</a></li>
          <li><a href="#" class="hover:text-gray-100 transition">About</a></li>
          <li><a href="#" class="hover:text-gray-100 transition">Portfolio</a></li>
          <li><a href="#" class="hover:text-gray-100 transition">Services</a></li>
          <li><a href="#" class="hover:text-gray-100 transition">Contact</a></li>
        </ul>

        <div class="flex gap-4 mt-6 md:mt-0">

          <a href="#" class="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
          

          <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook text-xl"></i></a>
          <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter text-xl"></i></a>
          <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram text-xl"></i></a>
          <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-linkedin text-xl"></i></a>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-700 text-center pt-4 text-sm">
        © 2025 Brian Van Vlymen. All Rights Reserved.
      </div>
    </footer>

    
    
    
    
    
    
  )
}
