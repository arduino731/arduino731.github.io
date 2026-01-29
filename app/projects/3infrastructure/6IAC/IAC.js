'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function InfrastructureAsCode() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Infrastructure as Code" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Ansible, Terraform & CI/CD</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-cyan-600 transition-colors">
            ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">Modern DevOps Strategy</h2>
              <p className="text-lg colorText mb-4">
                Manual server configuration is prone to error. By defining infrastructure as code (IaC), we can provision, configure, and deploy environments identically every time.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                 <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <p className="text-purple-800 font-medium text-sm">
                      🏗️ <strong>Terraform:</strong><br/>
                      Provisions the hardware (EC2, VPC, S3).
                    </p>
                 </div>
                 <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-800 font-medium text-sm">
                      ⚙️ <strong>Ansible:</strong><br/>
                      Configures the software (Nginx, Docker, Users).
                    </p>
                 </div>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-blue-800 font-medium text-sm">
                      🚀 <strong>CI/CD:</strong><br/>
                      Automates the testing and deployment pipeline.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Terraform Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-purple-500">Step 1:</span> Terraform (Provisioning)
          </h2>
          <p className="colorText mb-6">
            Instead of clicking buttons in the AWS Console, I use Terraform to define the entire cloud environment declaratively.
          </p>

          <CodeBlock title="main.tf" language="hcl" code={`provider "aws" {
  region = "us-east-1"
}

# 1. Create a Virtual Private Cloud (VPC)
resource "aws_vpc" "main_vpc" {
  cidr_block = "10.0.0.0/16"
}

# 2. Launch an EC2 Instance (Server)
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04
  instance_type = "t2.micro"
  
  tags = {
    Name = "Portfolio-WebServer"
  }
}

# 3. Output the Public IP
output "server_ip" {
  value = aws_instance.web_server.public_ip
}`} />

          <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-100">
             <h4 className="font-bold colorText text-sm mb-2">Key Benefits:</h4>
             <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
               <li><strong>State Management:</strong> Terraform remembers what is already deployed (`terraform.tfstate`).</li>
               <li><strong>Idempotency:</strong> Running the script twice won't create two servers; it ensures the state matches the code.</li>
             </ul>
          </div>
        </section>

        {/* 4. Ansible Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-red-500">Step 2:</span> Ansible (Configuration)
          </h2>
          <p className="colorText mb-6">
            Once the server exists, Ansible installs the software. It uses SSH to connect and run "Playbooks."
          </p>

          <CodeBlock title="playbook.yaml" language="yaml" code={`---
- name: Configure Web Server
  hosts: webservers
  become: true
  
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes

    - name: Install Nginx and Docker
      apt:
        name: 
          - nginx
          - docker.io
        state: present

    - name: Start Docker Service
      service:
        name: docker
        state: started
        enabled: yes

    - name: Copy Website Files
      copy:
        src: ./index.html
        dest: /var/www/html/index.html`} />
        </section>

        {/* 5. CI/CD Pipeline Section */}
        <section className="bg-slate-900 colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             <span className="text-blue-400">Step 3:</span> CI/CD Pipeline
           </h2>
           <p className="text-slate-300 mb-8">
             I use <strong>GitHub Actions</strong> to automatically test and deploy code whenever I push to the repository.
           </p>

           <div className="grid lg:grid-cols-2 gap-8 mb-8">
             <div>
                <h3 className="font-bold text-white mb-2 border-b border-slate-700 pb-2">🔄 The Workflow</h3>
                <ol className="relative border-l border-slate-700 ml-3 space-y-6 mt-4">
                  <li className="mb-4 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3 ring-8 ring-slate-900">
                      1
                    </span>
                    <h3 className="font-semibold text-white">Push Code</h3>
                    <p className="text-sm text-slate-400">Developer commits change to GitHub.</p>
                  </li>
                  <li className="mb-4 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full -left-3 ring-8 ring-slate-900">
                      2
                    </span>
                    <h3 className="font-semibold text-white">Test & Build</h3>
                    <p className="text-sm text-slate-400">GitHub Actions runs unit tests and builds Docker image.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-green-600 rounded-full -left-3 ring-8 ring-slate-900">
                      3
                    </span>
                    <h3 className="font-semibold text-white">Deploy</h3>
                    <p className="text-sm text-slate-400">If tests pass, SSH into server and update container.</p>
                  </li>
                </ol>
             </div>
             
             <div>
                <CodeBlock title=".github/workflows/deploy.yml" language="yaml" code={`name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Build Docker Image
      run: docker build -t my-app .

    - name: Deploy via SSH
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.HOST }}
        username: \${{ secrets.USERNAME }}
        key: \${{ secrets.SSH_KEY }}
        script: |
          docker pull my-user/my-app:latest
          docker stop web-app || true
          docker rm web-app || true
          docker run -d -p 80:80 --name web-app my-user/my-app:latest`} />
             </div>
           </div>
        </section>

      </main>
    </div>
  );
}

// Helper Component for Code Blocks
function CodeBlock({ code, title }) {
  return (
    <div className="relative group text-left">
      {title && <div className="bg-slate-200 text-xs text-slate-600 px-3 py-1 rounded-t-md font-mono font-bold inline-block">{title}</div>}
      <pre className={`bg-black p-4 rounded-md ${title ? 'rounded-tl-none' : ''} overflow-x-auto text-sm text-green-100 font-mono border border-slate-700 shadow-inner`}>
        {code}
      </pre>
    </div>
  );
}