'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';
import Image from 'next/image';


export default function VirtualizationServices() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Virtualization" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Hypervisors & Cloud Infra</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-cyan-600 transition-colors">
           ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">Bare Metal to Cloud Strategy</h2>
              <p className="text-lg colorText mb-6">
                Before we have Docker, we need a place to run it. I manage <strong>Type-1 Hypervisors</strong> (like Proxmox and ESXi) to slice physical hardware into efficient Virtual Machines. This is the foundation of private cloud infrastructure.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                 <p className="text-purple-800 font-medium">
                   🏗️ <strong>The Stack:</strong> Hardware Server → Hypervisor (Proxmox/KVM) → Virtual Machine (Ubuntu) → Docker Engine.
                 </p>
              </div>
            </div>
          </div>

          {/* Diagram Placeholder for Recruiter Context */}
         <div className="mt-4 relative w-full h-[500px]">
            <Image 
            src="/images/Virtualization.png" 
            alt="Dashboard interface showing containerized services and real-time SSL status"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 800px"
            priority
            />
         </div>
        </section>

        {/* 3. Tech Stack Comparison */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6">Hypervisor Landscape</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 p-6 rounded-xl bg-slate-50">
                 <h3 className="font-bold text-orange-600 text-lg mb-2">Proxmox VE</h3>
                 <p className="text-sm text-slate-600 mb-4">Open-source enterprise virtualization. My preferred choice for home labs and private clouds.</p>
                 <ul className="text-xs text-slate-500 list-disc list-inside">
                    <li>Debian-based</li>
                    <li>Supports LXC Containers</li>
                    <li>Web GUI included</li>
                 </ul>
              </div>
              <div className="border border-slate-200 p-6 rounded-xl bg-slate-50">
                 <h3 className="font-bold text-blue-600 text-lg mb-2">VMware ESXi</h3>
                 <p className="text-sm text-slate-600 mb-4">The industry standard for large enterprises. Highly stable but expensive licensing.</p>
                 <ul className="text-xs text-slate-500 list-disc list-inside">
                    <li>Proprietary Kernel</li>
                    <li>vCenter Management</li>
                    <li>Corporate Standard</li>
                 </ul>
              </div>
              <div className="border border-slate-200 p-6 rounded-xl bg-slate-50">
                 <h3 className="font-bold text-green-600 text-lg mb-2">KVM (Linux)</h3>
                 <p className="text-sm text-slate-600 mb-4">Kernel-based Virtual Machine. This is what powers AWS and Google Cloud under the hood.</p>
                 <ul className="text-xs text-slate-500 list-disc list-inside">
                    <li>Built into Linux</li>
                    <li>Command-line focused</li>
                    <li>Maximum Performance</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* 4. Technical Workflow (CLI Management) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-purple-500">Step 1:</span> Managing VMs via CLI
          </h2>
          <p className="colorText mb-8">
            While GUIs are nice, efficient administration happens in the terminal. Here is how I manage resources using Proxmox CLI (`qm`) and KVM (`virsh`).
          </p>

          <div className="space-y-8">
             {/* Proxmox Section */}
             <div>
                <h3 className="text-xl font-bold colorText mb-2">Proxmox Management (qm)</h3>
                <p className="text-sm colorText mb-2">Creating and controlling VMs on a Proxmox host.</p>
                <CodeBlock title="Proxmox Shell" code={`# List all running VMs
qm list

# Stop a VM forcefully (VM ID 100)
qm stop 100

# Clone a template to create a new VM
qm clone 9000 101 --name docker-node-01`} />
             </div>

             {/* KVM/Libvirt Section */}
             <div>
                <h3 className="text-xl font-bold colorText mb-2">KVM/Virsh Commands</h3>
                <p className="text-sm colorText mb-2">Direct interaction with the Linux Kernel hypervisor.</p>
                <CodeBlock title="Linux Terminal" code={`# Check list of VMs
virsh list --all

# Start a VM
virsh start ubuntu-server

# Edit VM configuration (XML)
virsh edit ubuntu-server`} />
             </div>
          </div>
        </section>

        {/* 5. Integration with Docker */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-4">
              Connecting to Docker Infrastructure
           </h2>
           <p className="colorText mb-6">
              Virtualization is the "Parent" of Docker. In a production environment, we don't run Docker on the bare metal hypervisor. We run it inside the VMs we just created.
           </p>

           <div className="grid lg:grid-cols-2 gap-6">
              {/* Card 1: Provisioning */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-cyan-700 mb-2">1. Provision VM</h3>
                 <p className="text-sm text-slate-600 mb-4">Create a generic Ubuntu VM using Proxmox or KVM.</p>
                 <CodeBlock code={`qm create 102 --name "docker-host" --memory 4096 --net0 virtio,bridge=vmbr0`} />
              </div>

              {/* Card 2: Installing Docker */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-blue-700 mb-2">2. Install Engine</h3>
                 <p className="text-sm text-slate-600 mb-4">SSH into the new VM and set up the container runtime.</p>
                 <CodeBlock code={`ssh user@192.168.1.102\ncurl -fsSL https://get.docker.com | sh`} />
              </div>
           </div>

           
        </section>

        {/* 6. Troubleshooting */}
        <section className="bg-slate-900 colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold text-white mb-6">⚡ Troubleshooting Virtual Resources</h2>
           <div className="space-y-4">
              <div>
                 <h3 className="text-green-400 font-bold mb-1">VM Won't Start (Resource Lock)</h3>
                 <p className="text-slate-400 text-sm mb-2">Sometimes a backup leaves a lock on the VM configuration.</p>
                 <CodeBlock code={`qm unlock 100`} />
              </div>
              <div>
                 <h3 className="text-green-400 font-bold mb-1">Expand Disk Space</h3>
                 <p className="text-slate-400 text-sm mb-2">Increasing storage for a growing Docker registry.</p>
                 <CodeBlock code={`qm resize 100 scsi0 +20G\n# Then resize inside the VM OS`} />
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}

// Helper Component for Code Blocks (Matches your exact request)
function CodeBlock({ code, title }) {
  return (
    <div className="relative group">
      {title && <div className="bg-slate-200 text-xs text-slate-600 px-3 py-1 rounded-t-md font-mono font-bold inline-block">{title}</div>}
      <pre className={`bg-black p-4 rounded-md ${title ? 'rounded-tl-none' : ''} overflow-x-auto text-sm text-green-100 font-mono border border-slate-700 shadow-inner`}>
        {code}
      </pre>
    </div>
  );
}