"use client"
import Image from 'next/image'
import useHandleScroll from '../hooks/HandleScroll';

// githubURL
// https://github.com/arduino731/jennifershows_Angular
// https://github.com/arduino731/van-vlymen-paws-portfolio


const projects = [
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
  },
  {
    id: 2,
    title: "Full-Stack Platform",
    description: "Comprehensive MERN architecture featuring role-based access control, secure authentication via Passport.js, and real-time product feedback loops. Deployed via Dockerized microservices.",
    image: "/images/ecommerce.png",
    url: "/projects/2systemArch",
    tags: [
      { name: "System Architecture", color: "indigo" },
      { name: "Backend API", color: "black" },
      { name: "Database Design", color: "green" },
      { name: "User Auth", color: "slate" },
      { name: "MERN Stack", color: "teal" }
    ]
  },
  {
    id: 3,
    title: "Linux & DevOps Admin",
    description: "Cloud infrastructure management featuring automated deployments on AWS EC2. Implements IaC with Terraform, containerization with Docker, and fail-safe security protocols.",
    image: "/images/DevOps-linux-system-admin.png",
    url: "/projects/3infrastructure",
    tags: [
      { name: "Infrastructure", color: "slate" },
      { name: "AWS EC2", color: "amber" },
      { name: "Terraform/IaC", color: "purple" },
      { name: "Docker/WSL2", color: "blue" },
      { name: "CI/CD Pipelines", color: "teal" }
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
              
              {/* Image Section */}
              <div 
                className="relative w-full aspect-video overflow-hidden cursor-pointer group" 
                onClick={() => window.location.href = item.url}
              >
                <Image 
                  src={item.image}
                  alt={`${item.title} project`}
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm border-2 border-white px-4 py-2 rounded-full backdrop-blur-md">
                    Explore Track
                  </span>
                </div>
              </div>

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