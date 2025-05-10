'use client'
import Image from 'next/image'
import useHandleScroll from '../../hooks/HandleScroll'
import './style.css'

export default function Project2() {
  const handleScroll = useHandleScroll(['gitHub', 'keyFeatures', 'keyFeatures2'])

  return (
    <section className="colorBackground colorText">
      {/* Section Header */}
      <div className="flex items-center colorBackgroundOpposite pb-2">
        <div className="flex-grow border-t border-gray-300" />
        <h1 className="p-4 colorBackground colorTextOpposite rounded-md text-3xl md:text-5xl font-medium my-10">
          DevOps Linux System Admin
        </h1>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Project Summary */}
      <div
        id="keyFeatures"
        className={`md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg colorText transition-opacity duration-1000 ease-in-out ${
          handleScroll === 'keyFeatures' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-center text-2xl font-bold mb-6">
          🚀 A full-stack Dockerized project deployed on AWS EC2 using Terraform, bash automation, and monitoring tools.
          Includes infrastructure as code, rsync-based deployment, daily cron logging, and fail2ban security.
        </p>
        <div className="colorBackground p-6 rounded-xl shadow-md mb-8">
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
        id="keyFeatures2"
        className={`md:mx-20 my-6 p-6 colorBackgroundOpposite rounded-lg shadow-md transition-opacity duration-1000 ease-in-out ${
          handleScroll === 'keyFeatures2' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold colorText mb-2">💡 What I Built</h2>
          <p className="colorText text-lg">Key DevOps & automation features of this project:</p>
        </div>
        <ul className="list-disc list-inside space-y-4 text-left colorText text-base md:text-lg">
          <li>Provisioned AWS EC2 instance, security group, and Elastic IP using <strong>Terraform</strong>.</li>
          <li>
            Created reusable <code className="colorBackground colorTextOpposite px-1 py-0.5 rounded text-sm">deploy.sh</code> to automate code sync and container restart with <strong>rsync + SSH</strong>.
          </li>
          <li>Built and deployed frontend (Nginx) and backend (Node.js) apps using <strong>Docker Compose</strong>.</li>
          <li>Implemented <strong>CloudWatch Agent</strong> and a daily cron script to monitor uptime and disk space.</li>
          <li>Secured SSH access with <strong>fail2ban</strong> to block brute-force login attempts.</li>
          <li>
            Developed a <code className="colorBackground colorTextOpposite px-1 py-0.5 rounded text-sm">backup.sh</code> strategy to archive Docker volumes and support restoration.
          </li>
        </ul>
      </div>

      {/* GitHub and Live Link Section */}
      <div
        id="gitHub"
        className={`duration-1000 ease-in-out transition-opacity text-2xl p-10 text-center ${
          handleScroll === 'gitHub' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-lg mt-6 colorTextOpposite">
          🌐 Want to view the live demo?
          <br />
          Access the running project on AWS EC2:
        </p>
        <a
          href="http://ec2-3-86-244-173.compute-1.amazonaws.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
        >
          🌐 View Live Project →
        </a>

        <p className="text-lg mt-10 colorTextOpposite">
          🔍 Want to see more source code?
          <br />
          Check out my GitHub!
        </p>
        <a
          href="https://github.com/arduino731/DevOps-Linux-System-Admin"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverSpotlight colorText colorBackgroundOpposite inline-block mt-4 px-6 py-2 rounded transition-all duration-500 ease-in-out"
        >
          Visit My GitHub →
        </a>
      </div>
    </section>
  )
}
