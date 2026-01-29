'use client'
import React, { useState, useEffect } from 'react'
import useHandleScroll from '../../../hooks/HandleScroll'
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function MernEcommerceProPage() {

return (
<article className="colorBackgroundOpposite colorText min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <Link href="/projects/2systemArch" className="bg-white px-4 py-2 rounded shadow text-black">
           ← Back to Home
        </Link>
      </nav>

    {/* Hero Header */}
      <SectionHeader title="MERN E-Commerce" highlight='Pro' />
        <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
            <div>This project is going to be using different server  </div>
            <div>hello world </div>
            <div>hello world </div>
            <div>hello world </div>
            <div>hello world </div>
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
            View Project Architecture on GitHub →
            </a>
        </div>
        </div>
    </article>
      
);
}