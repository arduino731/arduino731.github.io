'use client'
import React, { useState, useEffect } from 'react'
import useHandleScroll from '../../../hooks/HandleScroll'
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function MernEcommerceProPage() {

return (
<article className="colorBackgroundOpposite colorText min-h-screen pb-12">

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <Link href="/projects/2systemArch" className="bg-white px-4 py-2 rounded shadow text-black hover:bg-slate-200 transition-colors font-medium">
            ← Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <SectionHeader title="MERN E-Commerce" highlight='Pro' />

      {/* 💡 Feature Breakdown Section */}
      <div className="border-slate-300 border md:mx-20 my-6 p-8 colorBackground rounded-xl shadow-lg colorText">
        <div className="text-center mb-10 colorTextOpposite">
          <h2 className="text-3xl font-bold mb-4">💡 Engineering Overview</h2>
          <p className="text-lg opacity-90">A high-performance, full-stack commerce engine focused on UX and security.</p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['MongoDB', 'Express', 'React', 'Node.js', 'Passport.js', 'Docker', 'AWS EC2'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-black/20 dark:bg-white/10 rounded-full text-xs font-mono border border-slate-400/30">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 colorTextOpposite">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🔐 Auth & Authorization</h3>
              <p className="text-base opacity-85 leading-relaxed">
                Implemented secure session-based authentication using <strong>Passport.js</strong>. Features granular <strong>Role-Based Access Control (RBAC)</strong> to distinguish between customer shoppers and administrative staff.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🛒 Product Architecture</h3>
              <p className="text-base opacity-85 leading-relaxed">
                Engineered a dynamic catalog supporting real-time inventory updates, persistent shopping carts, and a streamlined checkout flow.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">⭐ Engagement & UX</h3>
              <p className="text-base opacity-85 leading-relaxed">
                Integrated a custom review system with <strong>auto-scroll visibility</strong> and visual highlights. Optimized for user feedback using real-time toast notifications and responsive design patterns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🚀 DevOps & Deployment</h3>
              <p className="text-base opacity-85 leading-relaxed">
                Deployed via <strong>Docker</strong> on <strong>AWS EC2</strong>. Orchestrated using custom Bash scripts to automate image pulling from ECR and service restarts, ensuring 99.9% environment consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
        
      {/* 🏗️ Project Architecture & Deployment Summary */}
      <div className="md:mx-20 p-6 mb-8 colorBackground rounded-lg colorTextOpposite">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-400/30 pb-3 font-sans">🏗️ Infrastructure Detail</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400 colorTextOpposite">🐳 Containerized</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed opacity-90">
              <li><strong>Docker:</strong> Containerized stack ensuring 1:1 parity between local development and AWS production environments.</li>
              <li><strong>AWS ECR:</strong> Automated pipeline pushes versioned images to Elastic Container Registry for professional-grade management.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400 colorTextOpposite">☁️ AWS Cloud</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed opacity-90">
              <li><strong>AL2023:</strong> Hosted on the latest Amazon Linux 2023 EC2 instance for optimized performance.</li>
              <li><strong>Elastic IP:</strong> Static IP provisioning ensures reliable portfolio access during on-demand server wake-ups.</li>
              <li><strong>Security Groups:</strong> Tight ingress rules routing only essential Port 80 traffic to the Docker service.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className=" p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="colorTextOpposite text-xl font-bold mb-4 flex items-center gap-2 text-green-400">🔒 DevOps</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed opacity-90">
              <li><strong>SSH:</strong> High-security remote management using dedicated RSA (.pem) key pairs.</li>
              <li><strong>CI/CD:</strong> Custom Bash automation scripts handle full deployment lifecycle from laptop to cloud.</li>
              <li><strong>Production Env:</strong> Explicit <code className="bg-slate-800 text-slate-100 px-1 py-0.5 rounded text-xs">NODE_ENV</code> enforcement for database integrity.</li>
            </ul>
          </div>
        </div>
      </div>
        
      {/* GitHub and Live Link Section */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <div className="mx-auto max-w-xl text-center p-8 m-4 colorBackground colorTextOpposite rounded-2xl shadow-xl border-slate-300 border">
            <h4 className="text-2xl font-bold mb-2">🌐 Live Demo Terminal</h4>
            <p className="text-base mb-4 opacity-90 leading-relaxed">
            This project is currently hibernating on <strong>AWS</strong> to optimize cloud resources.
            </p>
            <div className="bg-black/10 dark:bg-white/10 p-4 rounded-lg mb-6 border border-slate-400/20">
              <p className="text-sm italic">
                "I am happy to spin up the production instance for your review. Please allow ~5 minutes for system wake-up."
              </p>
              <a 
                  href="mailto:Arduino731@gmail.com?subject=Requesting%20Live%20Demo%20Access%20-%20AWS%20Project" 
                  className="hoverSpotlight inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md transform hover:scale-105"
                  >
                  Request 1-Hour Access →
              </a>
            </div>
            <a
            href="http://34.207.221.50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold block"
            >
            🔗 View Direct IP (If active)
            </a>
        </div>

        <div className="mx-auto max-w-xl text-center p-8 colorBackground colorTextOpposite rounded-2xl shadow-xl border-slate-300 border mt-8">
            <h4 className="text-2xl font-bold mb-4">🔍 Source Code</h4>
            <p className="mb-6 opacity-90">Review the architecture, Dockerfiles, and deployment scripts on GitHub.</p>
            <a
            href="https://github.com/arduino731/MernEcommercePro"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorBackgroundOpposite colorText px-8 py-3 rounded-lg hover:bg-slate-900 transition-all inline-flex items-center gap-2 shadow-lg"
            >
             View on GitHub
            </a>
        </div>
      </div>
    </article>
      
  );
}