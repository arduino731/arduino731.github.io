'use client'
import React from 'react'
import Link from 'next/link'
import SectionHeader from '../components/SectionHeader'

const techStack = [
  'Next.js',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Stripe API',
  'AWS ECS',
  'Auto Scaling',
  'Load Balancing',
  'AWS EC2',
  'AWS SES',
  'CloudWatch',
  'HTTPS/TLS',
  'Docker',
  'Nginx',
]

const scalingWork = [
  {
    icon: '📦',
    title: 'ECS Container Orchestration',
    body: (
      <>
        Migrating the containerized services onto <strong>AWS ECS</strong>, moving from
        single-instance deployment to managed task definitions and services — repeatable rollouts
        and self-healing containers in place of manual restarts.
      </>
    ),
  },
  {
    icon: '📈',
    title: 'Auto Scaling',
    body: (
      <>
        Configuring <strong>service auto scaling</strong> so task count tracks real demand, keeping
        the platform responsive under load spikes while holding idle cost down during quiet periods.
      </>
    ),
  },
  {
    icon: '⚖️',
    title: 'Load Balancing & Database Availability',
    body: (
      <>
        Fronting the ECS services with a <strong>load balancer</strong> to distribute traffic across
        healthy tasks, paired with database connection pooling so the data layer scales alongside
        the application tier.
      </>
    ),
  },
  {
    icon: '🔐',
    title: 'HTTPS & Secure Networking',
    body: (
      <>
        Terminating <strong>TLS</strong> at the load balancer with managed certificates, enforcing
        HTTPS end to end, and tightening security-group ingress so only the intended ports are
        reachable.
      </>
    ),
  },
  {
    icon: '📊',
    title: 'CloudWatch Monitoring',
    body: (
      <>
        Instrumenting the platform with <strong>Amazon CloudWatch</strong> — centralized container
        logs, service metrics, and alarms — so scaling behavior and production issues are observable
        rather than guessed at.
      </>
    ),
  },
]

const contributions = [
  {
    icon: '🏗️',
    title: 'End-to-End System Architecture',
    body: (
      <>
        Designed and implemented a decoupled architecture pairing a <strong>Next.js</strong> front
        end with a <strong>Node.js / MongoDB</strong> backend, ensuring fast server-side rendering
        and scalable data management.
      </>
    ),
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure & Security',
    body: (
      <>
        Architected the staging and production environments on <strong>AWS</strong>. Implemented
        secure API endpoints, managed environment variables outside of source control, and
        established protected routing for user data.
      </>
    ),
  },
  {
    icon: '💳',
    title: 'Automated Subscription Monetization',
    body: (
      <>
        Integrated the <strong>Stripe API</strong> to handle subscription tiers, free trials, and
        automated recurring billing. Engineered the backend logic to securely sync transaction data
        with user accounts in real time.
      </>
    ),
  },
  {
    icon: '📱',
    title: 'Responsive UI/UX Engineering',
    body: (
      <>
        Translated conceptual designs into a fully functional, mobile-responsive application using
        <strong> React</strong> components, prioritizing a seamless and intuitive user experience.
      </>
    ),
  },
  {
    icon: '🗄️',
    title: 'Database Schema Design',
    body: (
      <>
        Structured the <strong>MongoDB</strong> database to efficiently handle user profiles,
        session data, and financial transaction logs while maintaining strict data integrity.
      </>
    ),
  },
]

export default function InterPickerStartup() {
  return (
    <article className="colorBackgroundOpposite colorText min-h-screen pb-12">

      {/* Navigation */}
      <nav className="fixed top-[95px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        <Link
          href="/#projects"
          className="bg-white px-4 py-2 rounded shadow text-black hover:bg-slate-200 transition-colors font-medium"
        >
          ← Back to Projects
        </Link>
      </nav>

      {/* Hero Header */}
      <SectionHeader title="InterPicker" highlight="Startup Platform" />

      {/* Role & Status */}
      <div className="border-slate-300 border md:mx-20 my-6 p-8 colorBackground rounded-xl shadow-lg colorTextOpposite">
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-[0.15em] bg-amber-100 text-amber-800">
              Lead Full-Stack Developer &amp; Technical Architect
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-[0.15em] bg-slate-900 text-slate-100">
              Proprietary Startup Build · Private Repository
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">💡 Project Overview</h2>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed text-left md:text-center">
            As the sole technical architect and lead developer for InterPicker, I engineered a
            scalable full-stack web application from the ground up. Partnering with a
            digital-marketing lead, I owned the entire technical lifecycle of the platform — from
            initial database design and cloud infrastructure deployment to frontend execution and
            payment gateway integration. The goal was to build a highly responsive,
            subscription-based Software-as-a-Service (SaaS) application capable of supporting secure
            user transactions and scalable growth.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-black/20 dark:bg-white/10 rounded-full text-xs font-mono border border-slate-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Technology Stack */}
      <div className="md:mx-20 p-6 mb-8 colorBackground rounded-lg colorTextOpposite">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-400/30 pb-3 font-sans">
          🧰 Core Technology Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">🎨 Frontend</h3>
            <p className="text-sm leading-relaxed opacity-90">Next.js, React</p>
          </div>

          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">⚙️ Backend</h3>
            <p className="text-sm leading-relaxed opacity-90">Node.js, Express</p>
          </div>

          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">🗄️ Database</h3>
            <p className="text-sm leading-relaxed opacity-90">MongoDB</p>
          </div>

          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">💳 Monetization</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Stripe API — subscription billing routing and automated payouts
            </p>
          </div>

          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">☁️ Infrastructure</h3>
            <p className="text-sm leading-relaxed opacity-90">
              AWS cloud deployment (EC2, SES) behind Nginx with Docker, plus secure API routing
            </p>
          </div>

          <div className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">🤝 Team</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Sole technical lead, partnered with a digital-marketing lead
            </p>
          </div>
        </div>
      </div>

      {/* Key Technical Contributions */}
      <div className="md:mx-20 p-6 mb-8 colorBackground rounded-lg colorTextOpposite">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-400/30 pb-3 font-sans">
          🔑 Key Technical Contributions &amp; Architecture
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contributions.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {item.icon} {item.title}
              </h3>
              <p className="text-base opacity-85 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Scaling & Reliability — in progress */}
      <div className="md:mx-20 p-6 mb-8 colorBackground rounded-lg colorTextOpposite">
        <div className="flex flex-wrap items-center gap-3 mb-6 border-b border-slate-400/30 pb-3">
          <h2 className="text-3xl font-bold font-sans">☁️ Cloud Scaling &amp; Reliability</h2>
          <span className="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-[0.15em] bg-cyan-100 text-cyan-900 shadow-sm shadow-cyan-500/20">
            In Progress
          </span>
        </div>

        <p className="text-base opacity-85 leading-relaxed mb-6 max-w-4xl">
          Current workstream: evolving the platform from a single-instance deployment into a
          horizontally scalable, observable production system on AWS.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scalingWork.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl shadow-md border border-slate-400/30 bg-black/5 dark:bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {item.icon} {item.title}
              </h3>
              <p className="text-base opacity-85 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note on Code Availability */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <div className="mx-auto max-w-3xl text-center p-8 m-4 colorBackground colorTextOpposite rounded-2xl shadow-xl border-slate-300 border">
          <h4 className="text-2xl font-bold mb-4">🔒 Note on Code Availability</h4>
          <p className="text-base mb-6 opacity-90 leading-relaxed">
            Because InterPicker was developed as a proprietary startup platform, the source code is
            maintained in a private repository to protect the intellectual property and business
            logic.
          </p>
          <div className="bg-black/10 dark:bg-white/10 p-4 rounded-lg mb-6 border border-slate-400/20">
            <p className="text-sm italic">
              "I am available to discuss the high-level architecture, database schema decisions, and
              API integration strategies in detail during technical interviews."
            </p>
          </div>
          <a
            href="mailto:bvanvlymen.dev@gmail.com?subject=InterPicker%20Architecture%20Discussion"
            className="hoverSpotlight inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md transform hover:scale-105"
          >
            Discuss the Architecture →
          </a>
        </div>
      </div>
    </article>
  )
}
