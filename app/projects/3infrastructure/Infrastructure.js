'use client'
import './style.css'
import SectionHeader from '../components/SectionHeader';
import Image from 'next/image'
import Link from 'next/link';

const infrastructureTools = [
  {
    category: "Security",
    projectStep: "Firewall Management",
    why: "Securing networks with iptables, UFW, and cloud-native security groups.",
    textColor: "text-green-500",
    hoverBorder: "hover:border-green-500",
    bgColor: "bg-green-500/10",
    hoverBg: "group-hover:bg-green-500/20",
    linkText: "Security Audit",
    path: "/projects/3infrastructure/1Security",
    svgD: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    extraStyles: ""
  },
  {
    category: "Containers",
    projectStep: "Containerization Services", 
    why: "Orchestrating scalable apps using Docker, Compose, and Kubernetes.",
    textColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500",
    bgColor: "bg-cyan-500/10",
    hoverBg: "group-hover:bg-cyan-500/20",
    linkText: "Registry Info",
    path: "/projects/3infrastructure/2Containers",
    svgD: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    extraStyles: ""
  },
  {
    category: "Version Control Systems",
    projectStep: "GitHub & README",
    why: "Git, SVN, and branching strategies for collaborative development.",
    textColor: "text-blue-500",
    hoverBorder: "hover:border-blue-500",
    bgColor: "bg-blue-500/10",
    hoverBg: "group-hover:bg-blue-500/20",
    linkText: "Documentation",
    path: "/projects/3infrastructure/3VCS",
    svgD: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    extraStyles: ""
  },
  {
    category: "Virtualization",
    projectStep: "Virtualization Technologies",
    why: "Managing Proxmox, VMware, and KVM hypervisor environments.",
    textColor: "text-purple-500",
    hoverBorder: "hover:border-purple-500",
    bgColor: "bg-purple-500/10",
    hoverBg: "group-hover:bg-purple-500/20",
    linkText: "Host Monitor",
    path: "/projects/3infrastructure/4Virtualization",
    svgD: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z",
    extraStyles: ""
  },
  {
    category: "Backups",
    projectStep: "Backup Solutions",
    why: "Offsite storage, snapshots, and 3-2-1 recovery strategies.",
    textColor: "text-red-500",
    hoverBorder: "hover:border-red-500",
    bgColor: "bg-red-500/10",
    hoverBg: "group-hover:bg-red-500/20",
    linkText: "Recover Data",
    path: "/projects/3infrastructure/5Backups",
    svgD: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    extraStyles: ""
  },
  {
    category: "Infrastructure as Code (IaC)",
    projectStep: "Automation",
    why: "Ansible playbooks, Terraform IaC, and CI/CD pipelines.",
    textColor: "text-orange-500",
    hoverBorder: "hover:border-orange-500",
    bgColor: "bg-orange-500/10",
    hoverBg: "group-hover:bg-orange-500/20",
    linkText: "View Specs",
    path: "/projects/3infrastructure/6Automation",
    svgD: "M13 10V3L4 14h7v7l9-11h-7z",
    extraStyles: ""
  },
  {
    category: "Scripting",
    projectStep: "Scripting Languages & Tools",
    why: "Bash, Python, and PowerShell for custom tooling and API hooks.",
    textColor: "text-yellow-500",
    hoverBorder: "hover:border-yellow-500",
    bgColor: "bg-yellow-500/10",
    hoverBg: "group-hover:bg-yellow-500/20",
    linkText: "Code Snippets",
    path: "/projects/3infrastructure/7Scripting",
    svgD: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z",
    extraStyles: "lg:col-span-3 lg:max-w-md lg:mx-auto w-full"
  }
]

export default function InfrastructurePage() {
  return (
    <article className="colorBackgroundOpposite colorText">
      {/* Section Header */}
      <SectionHeader title="Linux & DevOps" highlight="Admin" />
      {/* Project Summary */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <p className="text-center text-2xl font-bold mb-6">
          🚀 A full-stack Dockerized project deployed on AWS EC2 using Terraform, bash automation, and monitoring tools.
        </p>
        
        {/* Wrapper with a defined aspect ratio and overflow control */}
        <div className="colorBackground rounded-xl shadow-md border-slate-300 border overflow-hidden">
          <div className="relative w-full aspect-[16/9]"> 
            <Image 
              src="/images/DevOps-linux-system-admin.png"
              alt="Project Architecture Diagram"
              fill
              className="object-contain p-4" // 'object-contain' keeps the diagram visible, 'p-4' adds breathing room
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </div>
      
      
      <div className="border-slate-300 border md:mx-20  p-6 colorBackground rounded-lg colorText">
        {/* What I Built List */}
        <div className="mb-6 max-w-4xl mx-auto space-y-6 p-6"> 
          <div className="text-center mb-6 colorTextOpposite ">
            <h2 className=" text-3xl font-bold  mb-2">💡 What I Built</h2>
            <p className=" text-lg">Key DevOps & automation features of this project:</p>
          </div>
          <ul className="list-disc list-inside space-y-4 text-left text-base md:text-lg colorTextOpposite">
            <li className="">Provisioned AWS EC2 instance, security group, and Elastic IP using <strong>Terraform</strong>.</li>
            <li className="">
              Created reusable <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">deploy.sh</code> to automate code sync and container restart with <strong>rsync + SSH</strong>.
            </li>
            <li className="">Built and deployed frontend (Nginx) and backend (Node.js) apps using <strong>Docker Compose</strong>.</li>
            <li className="">Implemented <strong>CloudWatch Agent</strong> and a daily cron script to monitor uptime and disk space.</li>
            <li className="">Secured SSH access with <strong>fail2ban</strong> to block brute-force login attempts.</li>
            <li className="">
              Developed a <code className="colorBackgroundOpposite colorText px-1 py-0.5 rounded text-sm">backup.sh</code> strategy to archive Docker volumes and support restoration.
            </li>
          </ul>
        </div>
        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureTools.map((tool, index) => (
            <div 
              key={index} 
              className={`group bg-slate-800 p-8 rounded-2xl border border-slate-700 ${tool.hoverBorder} transition-all duration-300 shadow-xl ${tool.extraStyles || ""}`}
            >
              <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-6 ${tool.hoverBg}`}>
                <svg 
                  className={`w-6 h-6 ${tool.textColor}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={tool.svgD} 
                  />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{tool.category}</h3>
              <h5 className='text-xs font-bold text-white mb-2'>{tool.projectStep}</h5>
              <p className="text-slate-400 text-sm mb-6">{tool.why}</p>
              
              <Link 
                href={tool.path} 
                className={`${tool.textColor.replace('text-', 'text-')} font-medium hover:underline inline-flex items-center`}
              >
                {tool.linkText} →
              </Link>
            </div>
          ))}
        </div>







        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Firewall Management</h3>
              <p className="text-slate-400 text-sm mb-6">Securing networks with iptables, UFW, and cloud-native security groups.</p>
              <Link 
                href="/projects/3infrastructure/1FirewallManagement"
                className="text-green-400 font-medium hover:underline inline-flex items-center"
              >
                  Security Audit →
              </Link>
          </div>


          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-xl">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20">
                  <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Version Control Systems</h3>
              <p class="text-slate-400 text-sm mb-6">Git, SVN, and branching strategies for collaborative development.</p>
              <a href="#" class="text-blue-400 font-medium hover:underline inline-flex items-center">Documentation &rarr;</a>
          </div>

            

          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl">
              <div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20">
                  <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Containerization Services</h3>
              <p class="text-slate-400 text-sm mb-6">Orchestrating scalable apps using Docker, Compose, and Kubernetes.</p>
              <a href="#" class="text-cyan-400 font-medium hover:underline inline-flex items-center">Registry Info &rarr;</a>
          </div>

          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-xl">
              <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20">
                  <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Virtualization Technologies</h3>
              <p class="text-slate-400 text-sm mb-6">Managing Proxmox, VMware, and KVM hypervisor environments.</p>
              <a href="#" class="text-purple-400 font-medium hover:underline inline-flex items-center">Host Monitor &rarr;</a>
          </div>

          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all duration-300 shadow-xl">
              <div class="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20">
                  <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Backup Solutions</h3>
              <p class="text-slate-400 text-sm mb-6">Offsite storage, snapshots, and 3-2-1 recovery strategies.</p>
              <a href="#" class="text-red-400 font-medium hover:underline inline-flex items-center">Recover Data &rarr;</a>
          </div>

          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300 shadow-xl">
              <div class="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20">
                  <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Automation</h3>
              <p class="text-slate-400 text-sm mb-6">Ansible playbooks, Terraform IaC, and CI/CD pipelines.</p>
              <a href="#" class="text-orange-400 font-medium hover:underline inline-flex items-center">View Specs &rarr;</a>
          </div>

          <div class="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 shadow-xl lg:col-span-3 lg:max-w-md lg:mx-auto w-full">
              <div class="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20">
                  <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Scripting Languages & Tools</h3>
              <p class="text-slate-400 text-sm mb-6">Bash, Python, and PowerShell for custom tooling and API hooks.</p>
              <a href="#" class="text-yellow-400 font-medium hover:underline inline-flex items-center">Code Snippets &rarr;</a>
          </div>

        </div> */}
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
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded "
          >
            🌐 View Live Project →
          </a>
        </div>
        <div className="mx-auto max-w-xl text-center p-6 colorBackground colorTextOpposite rounded-lg shadow-md border-slate-300 border">
          <p className="text-lg mt-10 ">
            🔍 Want to see more source code?
            <br />
            Check out my GitHub!
          </p>
          <a
            href="https://github.com/arduino731/DevOps-Linux-System-Admin"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded"
          >
            View Project Architecture on GitHub →
          </a>
        </div>
      </div>
    </article>
  )
}
