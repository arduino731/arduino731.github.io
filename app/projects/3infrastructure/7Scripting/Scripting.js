'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function ScriptingTools() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Scripting & Automation" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Bash, Python & PowerShell</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-cyan-600 transition-colors">
            ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">The Glue of Infrastructure</h2>
              <p className="text-lg colorText mb-4">
                While tools like Terraform build the house, <strong>scripting</strong> handles the daily chores. I use a mix of languages to create custom tooling, automate API hooks, and handle system maintenance without human intervention.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                 <div className="bg-slate-800 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-green-400 font-medium text-sm">
                      💻 <strong>Bash:</strong><br/>
                      Server-side automation, log rotation, and cron jobs.
                    </p>
                 </div>
                 <div className="bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-400 font-medium text-sm">
                      🐍 <strong>Python:</strong><br/>
                      Complex logic, data parsing, and Cloud SDK integrations.
                    </p>
                 </div>
                 <div className="bg-slate-800 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-400 font-medium text-sm">
                      ⚙️ <strong>PowerShell:</strong><br/>
                      Cross-platform management and Azure automation.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bash Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-green-500">Tool 1:</span> Bash (The System Glue)
          </h2>
          <p className="colorText mb-6">
            Bash is my go-to for rapid interactions with the Linux kernel. It is perfect for piping commands together to solve immediate problems on a server.
          </p>
          
          <div className="bg-slate-100 p-4 rounded-lg mb-6 border border-slate-200">
             <h4 className="font-bold text-slate-700 text-sm mb-2">Real World Use Case: System Health Monitor</h4>
             <p className="text-xs text-slate-600">A script that checks disk usage and sends an alert if it exceeds 90%.</p>
          </div>

          <CodeBlock title="monitor.sh" language="bash" code={`#!/bin/bash

# Get the current disk usage percentage of root /
USAGE=$(df / | grep / | awk '{ print $5 }' | sed 's/%//g')
THRESHOLD=90

if [ "$USAGE" -gt "$THRESHOLD" ]; then
    echo "⚠️ WARNING: Disk space is critical at $USAGE%!"
    # In production, we pipe this to mail or Slack
    # echo "Disk Full" | mail -s "Alert" admin@example.com
else
    echo "✅ System Healthy: Disk usage at $USAGE%."
fi`} />
        </section>

        {/* 4. Python Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-yellow-500">Tool 2:</span> Python (Logic & APIs)
          </h2>
          <p className="colorText mb-6">
            When logic gets too complex for Bash (e.g., parsing JSON or interacting with REST APIs), I switch to Python. It is the industry standard for glue code in cloud environments.
          </p>

          <div className="bg-slate-100 p-4 rounded-lg mb-6 border border-slate-200">
             <h4 className="font-bold text-slate-700 text-sm mb-2">Real World Use Case: Automated Webhook Trigger</h4>
             <p className="text-xs text-slate-600">A script that queries an API and triggers a deployment if a specific condition is met.</p>
          </div>

          <CodeBlock title="deploy_hook.py" language="python" code={`import requests
import os

API_URL = "https://api.github.com/repos/my-user/my-repo/releases/latest"
DEPLOY_WEBHOOK = os.getenv("DEPLOY_WEBHOOK_URL")

def check_for_updates():
    response = requests.get(API_URL)
    data = response.json()
    
    latest_version = data['tag_name']
    print(f"Latest version found: {latest_version}")

    # Logic: If version is v2.0, trigger the pipeline
    if latest_version == "v2.0.0":
        print("🚀 Triggering Deployment Pipeline...")
        requests.post(DEPLOY_WEBHOOK, json={"event": "update_found"})

if __name__ == "__main__":
    check_for_updates()`} />
        </section>

        {/* 5. PowerShell Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
             <span className="text-blue-500">Tool 3:</span> PowerShell (Object Oriented)
           </h2>
           <p className="colorText mb-6">
             PowerShell isn't just for Windows anymore. I use PowerShell Core (pwsh) for its powerful object-oriented pipeline, which is often cleaner than text parsing in Bash.
           </p>

           <CodeBlock title="audit_users.ps1" language="powershell" code={`# Get all users, filter by 'LastLogon', and export to CSV
Get-LocalUser | 
  Select-Object Name, Enabled, LastLogon | 
  Where-Object { $_.Enabled -eq $true } | 
  Export-Csv -Path "./user_audit.csv" -NoTypeInformation

Write-Host "✅ User audit complete. Data saved to user_audit.csv" -ForegroundColor Green`} />
        </section>

        {/* 6. Comparison Table */}
        <section className="bg-slate-900 colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold text-white mb-6">⚡ When to use what?</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left text-slate-300">
               <thead className="text-xs text-slate-500 uppercase bg-slate-800 border-b border-slate-700">
                 <tr>
                   <th className="px-6 py-3">Language</th>
                   <th className="px-6 py-3">Best Use Case</th>
                   <th className="px-6 py-3">Avoid When...</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                   <td className="px-6 py-4 font-bold text-green-400">Bash</td>
                   <td className="px-6 py-4">Simple server tasks, file manipulation, piping commands.</td>
                   <td className="px-6 py-4">You need complex data structures (JSON/Arrays).</td>
                 </tr>
                 <tr className="border-b border-slate-800 hover:bg-slate-800/50">
                   <td className="px-6 py-4 font-bold text-yellow-400">Python</td>
                   <td className="px-6 py-4">API interactions, heavy logic, cross-platform scripts.</td>
                   <td className="px-6 py-4">You just need to run a quick one-liner command.</td>
                 </tr>
                 <tr className="hover:bg-slate-800/50">
                   <td className="px-6 py-4 font-bold text-blue-400">PowerShell</td>
                   <td className="px-6 py-4">Managing Azure resources, Active Directory, Object manipulation.</td>
                   <td className="px-6 py-4">Running simple scripts on a minimal Linux Alpine container.</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </section>

      </main>
    </div>
  );
}

// Helper Component for Code Blocks
function CodeBlock({ code, title }) {
  return (
    <div className="relative group text-left">
      {title && <div className="bg-slate-200 text-xs text-slate-600 px-3 py-1 rounded-t-md font-mono font-bold inline-block">{title}</div>}
      <pre className={`bg-black p-4 rounded-md ${title ? 'rounded-tl-none' : ''} overflow-x-auto text-sm text-green-100 font-mono border border-slate-700 shadow-inner`}>
        {code}
      </pre>
    </div>
  );
}