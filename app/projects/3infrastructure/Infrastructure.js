'use client'
import './style.css'
import SectionHeader from '../components/SectionHeader';
import Image from 'next/image'


export default function InfrastructurePage() {
  return (
    <article className="colorBackgroundOpposite colorText">
    {/* Section Header */}
    <SectionHeader title="Linux & DevOps" highlight="Admin" />
       {/* Project Summary */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <p className="text-center text-2xl font-bold mb-6">
          🚀 A full-stack Dockerized project deployed on AWS EC2 using Terraform, bash automation, and monitoring tools.
          Includes infrastructure as code, rsync-based deployment, daily cron logging, and fail2ban security.
        </p>
        <div className="colorBackground p-6 rounded-xl shadow-md border-slate-300 border">
          <Image 
            src="/images/DevOps-linux-system-admin.png"
            alt="Project Architecture Diagram"
            className="rounded-md mx-auto w-1/2"
            width= {800}
            height= {800}
          />
        </div>
      </div>
      
            {/* What I Built List */}
      <div 
        className="border-slate-300 border md:mx-20  p-6 colorBackground rounded-lg colorText"
      >
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
