'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';
import Image from 'next/image';


export default function VersionControlSystems() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Version Control" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Git & GitHub Strategy</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-blue-500 transition-colors">
           ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">Collaborative Development Workflow</h2>
              <p className="text-lg colorText mb-6">
                Version control is the backbone of modern software engineering. My strategy focuses on <strong>protecting the main branch</strong> using a "Feature Branch" workflow, ensuring that code is reviewed via Pull Requests before it ever touches production.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                 <p className="text-blue-800 font-medium">
                   🚀 <strong>The Strategy:</strong> Create Branch → Commit Changes → Open Pull Request → Merge to Main.
                 </p>
              </div>
            </div>
          </div>
          
          {/* Visualizing the Workflow */}
          <div className="mt-4 relative w-full h-[500px]">
            <Image 
            src="/images/VCS.png" 
            alt="Dashboard interface showing containerized services and real-time SSL status"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 800px"
            priority
            />
          </div>
        </section>

        {/* 3. The Technical Workflow (Step-by-Step) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-blue-500">Step 1:</span> Branching & Management
          </h2>
          <p className="colorText mb-8">
            Never work directly on the <code>main</code> branch. Here is the exact command-line workflow I use to manage features safely.
          </p>

          <div className="space-y-8">
             {/* Step A */}
             <div>
                <h3 className="text-xl font-bold colorText mb-2">1. Clone & Create Branch</h3>
                <p className="text-sm colorText mb-2">Download the repo and immediately isolate your work.</p>
                <CodeBlock title="Terminal" code={`git clone https://github.com/username/project-name.git
cd project-name
git checkout -b feature/login-page`} />
                <p className="text-xs colorText mt-2 opacity-75">
                  ✅ <code>-b</code> creates a new branch named "feature/login-page" and switches to it.
                </p>
             </div>

             {/* Step B */}
             <div>
                <h3 className="text-xl font-bold colorText mb-2">2. Stage & Commit</h3>
                <p className="text-sm colorText mb-2">Save changes locally with clear messages.</p>
                <CodeBlock title="Terminal" code={`git status
git add .
git commit -m "Added login form validation logic"`} />
             </div>

             {/* Step C */}
             <div>
                <h3 className="text-xl font-bold colorText mb-2">3. Push & Pull Request</h3>
                <p className="text-sm colorText mb-2">Upload the branch to GitHub for review.</p>
                <CodeBlock title="Terminal" code={`git push origin feature/login-page`} />
                <div className="mt-4 p-4 bg-slate-100 rounded-lg border border-slate-200">
                   <h4 className="font-bold text-slate-700 text-sm mb-1">What happens next?</h4>
                   <p className="text-sm text-slate-600">
                     I go to GitHub, open a <strong>Pull Request (PR)</strong>, and assign a reviewer. Once approved, we squash and merge into <code>main</code>.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 4. Advanced Scenarios (Troubleshooting) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6">🛠️ Troubleshooting & Recovery</h2>
           <p className="colorText mb-6">Real-world scenarios require knowing how to fix mistakes.</p>
           
           <div className="grid lg:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-red-600 mb-2">Undo Last Commit (Soft)</h3>
                 <p className="text-sm text-slate-600 mb-4">Keeps your changes but un-commits them.</p>
                 <CodeBlock code={`git reset --soft HEAD~1`} />
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-orange-600 mb-2">Discard Local Changes</h3>
                 <p className="text-sm text-slate-600 mb-4">Dangerous: Resets file to last commit.</p>
                 <CodeBlock code={`git checkout -- filename.js`} />
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-purple-600 mb-2">Sync with Remote</h3>
                 <p className="text-sm text-slate-600 mb-4">Update your local main branch before merging.</p>
                 <CodeBlock code={`git checkout main\ngit pull origin main`} />
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-blue-600 mb-2">View History</h3>
                 <p className="text-sm text-slate-600 mb-4">See a clean log of commits.</p>
                 <CodeBlock code={`git log --oneline --graph --all`} />
              </div>
           </div>
        </section>

        {/* 5. Best Practices Summary */}
        <section className="bg-slate-900 colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">Summary:</span> The Golden Rules
           </h2>
           <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <div className="text-3xl mb-2">🌿</div>
                 <h3 className="text-white font-bold mb-1">Branch Early</h3>
                 <p className="text-slate-400 text-sm">Never commit directly to main. Always create a feature branch.</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <div className="text-3xl mb-2">📝</div>
                 <h3 className="text-white font-bold mb-1">Commit Often</h3>
                 <p className="text-slate-400 text-sm">Small, atomic commits are easier to debug than massive ones.</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                 <div className="text-3xl mb-2">🤝</div>
                 <h3 className="text-white font-bold mb-1">Pull Requests</h3>
                 <p className="text-slate-400 text-sm">Code review is where learning and quality assurance happen.</p>
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
    <div className="relative group">
      {title && <div className="bg-slate-200 text-xs text-slate-600 px-3 py-1 rounded-t-md font-mono font-bold inline-block">{title}</div>}
      <pre className={`bg-black p-4 rounded-md ${title ? 'rounded-tl-none' : ''} overflow-x-auto text-sm text-green-100 font-mono border border-slate-700 shadow-inner`}>
        {code}
      </pre>
    </div>
  );
}