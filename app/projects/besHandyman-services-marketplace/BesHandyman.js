'use client'
import React from 'react'
import Link from 'next/link'
import SectionHeader from '../components/SectionHeader'

const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'Stripe Connect',
  'Twilio',
  'Mapbox',
  'JWT',
  'AWS ECS',
  'AWS SES',
  'Docker',
]

const contributions = [
  {
    icon: '🔀',
    title: 'Two-Sided Marketplace Architecture',
    body: (
      <>
        Designed the platform around two distinct user types with separate flows, permissions, and
        lifecycles — customers requesting work and service providers fulfilling it — with the
        matching, booking, and payment layer sitting between them.
      </>
    ),
  },
  {
    icon: '💳',
    title: 'Stripe Connect Payments & Payouts',
    body: (
      <>
        Integrated <strong>Stripe Connect</strong> to handle marketplace payments: collecting from
        customers, splitting the platform fee, and paying out to provider accounts. Connect is what
        makes routing money to third parties possible without holding funds directly.
      </>
    ),
  },
  {
    icon: '📍',
    title: 'Mapbox Geolocation & Service Areas',
    body: (
      <>
        Used the <strong>Mapbox API</strong> for address lookup and location-aware matching, so job
        requests surface to the providers who actually cover that area rather than to everyone.
      </>
    ),
  },
  {
    icon: '📲',
    title: 'Twilio SMS Notifications',
    body: (
      <>
        Wired <strong>Twilio</strong> into the booking lifecycle for SMS notifications — the channel
        that actually reaches a tradesperson mid-job, where email does not.
      </>
    ),
  },
  {
    icon: '🔐',
    title: 'JWT Auth & Role-Based Access',
    body: (
      <>
        Built stateless authentication with <strong>JWT</strong>, with role-based authorization
        separating customer, provider, and administrator capabilities across every protected route.
      </>
    ),
  },
  {
    icon: '🛠️',
    title: 'Admin Console',
    body: (
      <>
        Built an administrative interface for managing users, providers, and bookings — the
        operational surface a marketplace needs to handle disputes, verification, and oversight.
      </>
    ),
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure on AWS',
    body: (
      <>
        Architected the deployment on <strong>AWS ECS</strong> with containerized services, plus
        <strong> SES</strong> for transactional email. Same infrastructure discipline as the rest of
        my cloud work: scoped IAM, secrets kept out of source control, and HTTPS end to end.
      </>
    ),
  },
]

export default function BesHandyman() {
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
      <SectionHeader title="besHandyman" highlight="Services Marketplace" />

      {/* Role & Status */}
      <div className="border-slate-300 border md:mx-20 my-6 p-8 colorBackground rounded-xl shadow-lg colorTextOpposite">
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-[0.15em] bg-amber-100 text-amber-800">
              Lead Full-Stack Developer &amp; Cloud Architect
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-[0.15em] bg-amber-100 text-amber-900">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" aria-hidden="true" />
              Build In Progress
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-[0.15em] bg-slate-900 text-slate-100">
              Private Repository
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">💡 Project Overview</h2>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed text-left md:text-center">
            besHandyman is an on-demand home services marketplace — a TaskRabbit-style platform
            connecting customers who need work done with vetted handyman professionals who can do
            it. I am the sole technical architect and lead developer, owning the product end to end:
            the two-sided data model, the payment and payout rails, the geolocation matching, the
            notification layer, and the AWS infrastructure it all runs on.
          </p>

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

      {/* Key Technical Contributions */}
      <div className="md:mx-20 p-6 mb-8 colorBackground rounded-lg colorTextOpposite">
        <h2 className="text-3xl font-bold mb-6 border-b border-slate-400/30 pb-3 font-sans">
          🔑 Architecture &amp; Key Contributions
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

      {/* Note on Code Availability */}
      <div className="md:mx-20 p-6 colorBackgroundOpposite rounded-lg colorText">
        <div className="mx-auto max-w-3xl text-center p-8 m-4 colorBackground colorTextOpposite rounded-2xl shadow-xl border-slate-300 border">
          <h4 className="text-2xl font-bold mb-4">🔒 Note on Code Availability</h4>
          <p className="text-base mb-6 opacity-90 leading-relaxed">
            besHandyman is an active commercial build, so the source is maintained in a private
            repository to protect the intellectual property and business logic.
          </p>
          <div className="bg-black/10 dark:bg-white/10 p-4 rounded-lg mb-6 border border-slate-400/20">
            <p className="text-sm italic">
              &quot;I am happy to walk through the marketplace data model, the Stripe Connect payout
              flow, and the AWS deployment architecture in detail during technical interviews.&quot;
            </p>
          </div>
          <a
            href="mailto:bvanvlymen.dev@gmail.com?subject=besHandyman%20Architecture%20Discussion"
            className="hoverSpotlight inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md transform hover:scale-105"
          >
            Discuss the Architecture →
          </a>
        </div>
      </div>
    </article>
  )
}
