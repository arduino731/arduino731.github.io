'use client'
import useHandleScroll from '../hooks/HandleScroll';

const Services = () => {
    const { visibleSection: currentSection } = useHandleScroll();

  return (
      <div className="colorBackground ">
        <div id="services" className="flex items-center justify-center py-16 px-6 md:px-20">
          <div className={`scrollHandle transition-opacity duration-1000 ease-in-out 
          ${
            currentSection === 'Services' ? 'opacity-100' : 'opacity-0'
          }`}
          data-id="Services"
          >
            <div className="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
              <h1  className="colorBackgroundOpposite colorText rounded-md text-5xl p-2 text-center ">Services</h1>
              <div className="flex items-center gap-4 p-6 bg-cyan-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">♿</span>
                <p className="text-lg font-medium">
                    <span className="font-bold">Accessibility Audits (WAS-Certified) –</span> WCAG 2.1 AA audits and remediation by a certified Web Accessibility Specialist — reducing ADA legal risk and opening your product to the 1 in 4 adults with a disability.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-blue-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">☁️</span>
                <p className="text-lg font-medium">
                    <span className="font-bold">Cloud Infrastructure & Deployment –</span> Deploying highly-available production apps on AWS (ECS, S3, SES) utilizing Docker, Nginx, and strict IAM security policies.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-green-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">🧩</span>
                <p className="text-lg font-medium">
                    <span className="font-bold ">Full-Stack Engineering –</span> End-to-end products with React, Next.js, Node.js, and MongoDB — from decoupled API design to responsive, accessible UIs.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-purple-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">⚙️</span>
                <p className="text-lg font-medium">
                    <span className="font-bold ">DevOps & Infrastructure as Code (IaC) –</span> Automated CI/CD pipelines with GitHub Actions and Terraform to establish immutable, reproducible cloud environments.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-red-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">🔐</span>
                <p className="text-lg font-medium">
                    <span className="font-bold ">Reliability & Security –</span> Hardened systems with strict SSL/TLS cryptographic protocols, CloudWatch monitoring, and automated disaster recovery backups.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-amber-700 text-white rounded-lg shadow-lg fadeIn">
                <span className="text-3xl">🚀</span>
                <p className="text-lg font-medium">
                    <span className="font-bold ">Technical Leadership –</span> Lead Architect at InterPicker (startup) — owning the full technical build, API integration, and cloud infrastructure.
                </p>
              </div>
              <div className="text-center mt-8 fadeIn">
                <p className="text-xl font-semibold colorTextOpposite  ">
                    I build and ship production systems end-to-end — with AI-assisted speed, and WAS-certified judgment verifying everything that ships.
                </p>
              </div>
            </div>
          </div>
        </div>        
      </div> 
)}
    
    
export default Services