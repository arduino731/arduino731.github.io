'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function FirewallManagement() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Security" />
      
      {/* 1. Navigation / Header */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Firewall & Infrastructure</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-blue-600 transition-colors">
           ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12 ">

        {/* 2. The "Recruiter Friendly" High Level Summary (From your 1st Snippet) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-center text-3xl font-bold colorText mb-4">Security Group Strategy</h2>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg colorText mb-6">
              Allowing only ports <strong>22 (SSH)</strong>, <strong>80 (HTTP)</strong>, and <strong>443 (HTTPS)</strong> on AWS security groups is crucial for security and efficient resource management. 
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-green-800 font-medium">
                🛡️ <span className="font-bold">Why this matters:</span> By restricting access to these specific ports, you limit the attack surface of your AWS resources, prevent unnecessary traffic, and ensure only authorized services can communicate with them.
              </p>
            </div>
          </div>

          {/* Responsive Video Container */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mt-6">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtube.com/embed/KXs9xOmF8EI" 
              title="Security Group Explanation"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 3. The "Technical Deep Dive" (From your 2nd Snippet) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-3xl font-bold colorText mb-2">Launch an EC2 Instance</h2>
          <p className="colorText mb-8">Deploying a Node.js app from Windows → WSL → AWS EC2.</p>

          {/* EC2 vs Apache Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-slate-700">Apache (Web Server)</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✅ Easy to get started</li>
                <li>✅ Great for static sites</li>
                <li className="text-red-500">❌ Not scalable by itself</li>
                <li className="text-red-500">❌ Lacks built-in monitoring</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-xl mb-4 text-blue-900">AWS EC2 (Virtual Machine)</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>✅ Cloud VM — run anything on it</li>
                <li>✅ Supports scaling & snapshots</li>
                <li>✅ DevOps-ready</li>
                <li className="text-orange-600">❌ Steeper learning curve</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-yellow-800 italic">
            <strong>Simple Analogy:</strong> EC2 is the house. Apache is the kitchen. You install Apache inside EC2 to “cook” your web content.
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-10">
            <iframe 
               className="absolute top-0 left-0 w-full h-full"
               src="https://youtube.com/embed/htJAvtodxQQ"
               title="EC2 Deployment Tutorial"
               allowFullScreen
            ></iframe>
          </div>

          {/* Step by Step Guide */}
          <h3 className="text-2xl font-bold mb-6 border-b pb-2">Step-by-Step Deployment Guide</h3>
          
          <div className="space-y-8">
            <StepItem number="1" title="Test app locally">
              <CodeBlock code={`npm install\nnpm start`} />
              <p className="mt-2 text-sm colorText">Visit: http://localhost:5001</p>
            </StepItem>

            <StepItem number="2" title="Set up WSL & Rsync">
              <CodeBlock code={`wsl --install\nsudo apt update\nsudo apt install rsync`} />
            </StepItem>

            <StepItem number="3" title="Move SSH key to WSL">
              <CodeBlock code={`cp "/mnt/c/Users/Dell Inspiron/.ssh/ssh1.pem" ~/.ssh/\nchmod 400 ~/.ssh/ssh1.pem`} />
            </StepItem>

            <StepItem number="4" title="Deploy code with Rsync">
              <CodeBlock code={`rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \\\n-e "ssh -i ~/.ssh/ssh1.pem" \\\n. ubuntu@ec2-YOUR-IP.compute-1.amazonaws.com:~/app`} />
            </StepItem>
          </div>

        </section>

        {/* 4. The Automation Script Section */}
        <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">⚡ One-Click Deployment Script</h2>
          <p className="text-slate-400 mb-4">Automating the process with <code className="bg-slate-800 px-1 rounded">deploy.sh</code></p>
          
          <div className="mb-4">
             <h3 className="text-green-400 font-bold mb-2">The Script:</h3>
             <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm font-mono text-green-300 border border-slate-700">
{`#!/bin/bash

KEY_PATH="$HOME/.ssh/ssh1.pem"
REMOTE_USER="ubuntu"
REMOTE_HOST="ec2-YOUR-PUBLIC-IP.compute-1.amazonaws.com"
REMOTE_DIR="~/app"

echo "🚀 Starting deployment to $REMOTE_HOST"

rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \\
-e "ssh -i $KEY_PATH" \\
. $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

echo "✅ Code synced. Logging into EC2..."
ssh -i $KEY_PATH $REMOTE_USER@$REMOTE_HOST << 'EOF'
  cd ~/app
  npm install
  npm start
EOF`}
             </pre>
          </div>
          <p className="text-sm text-slate-400">Run with: <code className="text-white">./deploy.sh</code></p>
        </section>

      </main>
    </div>
  );
}

// Helper Components to keep code clean
function StepItem({ number, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-grow">
        <h4 className="font-bold text-lg colorText mb-2">{title}</h4>
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ code }) {
  return (
    <pre className="bg-slate-100 p-3 rounded-md border border-slate-200 overflow-x-auto text-sm text-slate-700 font-mono">
      {code}
    </pre>
  );
}