"use client"
import Image from 'next/image'
import Link from 'next/link'
import useHandleScroll from '../hooks/HandleScroll';

// githubURL
// https://github.com/bvanvlymen/jennifershows_Angular
// https://github.com/bvanvlymen/van-vlymen-paws-portfolio


const projects = [
  {
    id: 2,
    title: "besHandyman — Services Marketplace",
    description: "Sole technical architect of a TaskRabbit-style on-demand home services marketplace. Two-sided platform with Stripe Connect direct charges and a 20% customer-facing service fee, MongoDB Atlas, Mapbox geolocation matching, Twilio SMS, JWT role-based auth, an admin console, and AWS ECS/SES infrastructure.",
    image: "/images/beshandyman.png",
    url: "/projects/besHandyman-services-marketplace",
    status: "Build in progress",
    tags: [
      { name: "Marketplace · Lead Architect", color: "amber" },
      { name: "Stripe Connect", color: "indigo" },
      { name: "Twilio/Mapbox", color: "purple" },
      { name: "MongoDB Atlas", color: "green" },
      { name: "JWT/Admin", color: "slate" },
      { name: "AWS ECS/SES", color: "orange" },
      { name: "Docker", color: "cyan" }
    ]
  },
  {
    id: 5,
    title: "a11y-auditor — WCAG Audit Service",
    description: "Flagship build: a serverless accessibility auditing service on AWS. Playwright and axe-core scans run on a queued Lambda worker, results land in DynamoDB and S3, and the Claude API explains each violation in plain English — all Terraform-managed for under $2/month.",
    image: "/images/a11y-auditor.png",
    url: "https://github.com/bvanvlymen/a11y-auditor",
    cta: "View on GitHub",
    status: "Still processing · M5",
    tags: [
      { name: "Cloud Architecture", color: "amber" },
      { name: "Lambda/SQS", color: "blue" },
      { name: "DynamoDB/S3", color: "green" },
      { name: "Terraform IaC", color: "purple" },
      { name: "Claude API", color: "indigo" },
      { name: "Playwright/axe", color: "cyan" }
    ]
  },
  {
    id: 4,
    title: "InterPicker — Full-Stack Startup Platform",
    description: "Sole technical architect and lead developer of a subscription-based SaaS platform, owning the full lifecycle alongside a digital-marketing lead — Next.js/React front end, Node.js/Express and MongoDB backend, Stripe subscription billing, and AWS cloud infrastructure.",
    image: "/images/interpicker.png",
    url: "/projects/Interpicker-full-stack-startup",
    tags: [
      { name: "Startup · Lead Architect", color: "amber" },
      { name: "Next.js/React", color: "blue" },
      { name: "Node.js/MongoDB", color: "green" },
      { name: "Stripe Billing", color: "indigo" },
      { name: "AWS ECS/EC2", color: "orange" },
      { name: "Auto Scaling", color: "teal" },
      { name: "Docker/Nginx", color: "cyan" }
    ]
  },
  {
    id: 1,
    title: "Interactive UI/UX Engineering Lab",
    description: "A specialized frontend suite focused on high-density data and complex logic. Includes AstroDash (Telemetry), Minimax AI (Algorithms), and Paws (Accessible E-commerce).",
    image: "/images/secondPort.png",
    url: "/projects/1frontendMastery",
    tags: [
      { name: "Frontend Mastery", color: "blue" },
      { name: "AstroDash", color: "cyan" },
      { name: "Minimax AI", color: "purple" },
      { name: "Paws Frontend", color: "orange" },
      { name: "WCAG Standards", color: "teal" }
    ]
  }
];

const colorMap = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
  slate: "bg-slate-100 text-slate-800",
  teal: "bg-teal-100 text-teal-800",
  yellow: "bg-yellow-100 text-yellow-800",
  amber: "bg-amber-100 text-amber-800",
  indigo: "bg-indigo-100 text-indigo-800",
  gray: "bg-gray-100 text-gray-800",
  orange: "bg-orange-200 text-orange-900", 
  red: "bg-rose-100 text-rose-800", 
  white: "bg-gray-100 text-gray-800", 
  black: "bg-slate-900 text-slate-100",
  cyan: "bg-cyan-100 text-cyan-900 shadow-sm shadow-cyan-500/20", 
  sky: "bg-sky-100 text-sky-800",
};

export default function ProjectsSection() {
  const { visibleSection: currentSection } = useHandleScroll();
  
return (
  <div className="colorBackgroundOpposite">
    <div id="projects" className="min-h-screen flex items-center py-20">
      {/* Changed max-w-4xl to max-w-6xl to give the 3-column grid more breathing room */}
      <div 
        className={`scrollHandle transition-opacity duration-1000 ease-in-out flex flex-col gap-10 p-2 max-w-6xl mx-auto
        ${currentSection === 'Projects' ? 'opacity-100' : 'opacity-0'}`}
        data-id="Projects"
      >
        <h1 className="colorBackground colorTextOpposite rounded-md text-5xl p-2 text-center fadeIn font-black tracking-tighter">
          PROJECTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 border border-slate-800/50 flex flex-col bg-slate-900/10">
              
              {/* Image Section — a real link so it is keyboard-reachable and
                  announced as a link (WCAG 2.1.1). Was a div with onClick. */}
              <Link
                href={item.url}
                className="relative block w-full aspect-video overflow-hidden group focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-inset"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm border-2 border-white px-4 py-2 rounded-full backdrop-blur-md">
                    {item.cta ?? "Explore Track"}
                  </span>
                </div>
              </Link>

              {/* Content Section */}
              <div className="p-6 colorBackground flex-grow border-t border-slate-800/50 flex flex-col text-center">
                
                {/* FOCUS AREA TAG - Grabs the first tag from your data */}
                <div className="mb-3">
                  <span className={`block w-fit mx-auto text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-[0.15em] ${colorMap[item.tags[0].color]}`}>
                    {item.tags[0].name}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 colorTextOpposite tracking-tight">
                  {item.title}
                </h3>

                {/* IN-PROGRESS STATUS - only on cards that declare one */}
                {item.status && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 w-fit mx-auto text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-[0.15em] bg-amber-100 text-amber-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      {item.status}
                    </span>
                  </div>
                )}

                {/* CONSISE DESCRIPTION */}
                <p className="text-sm opacity-80 mb-6 colorTextOpposite leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                {/* REMAINING TAGS (What's Inside) */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/30">
                  {item.tags.slice(1).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter opacity-90 text-black ${colorMap[tag.color]}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}