'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

export default function ContainerizationServices() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Containers" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Containerization & SSL</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-cyan-600 transition-colors">
           ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">Docker & Reverse Proxy Strategy</h2>
              <p className="text-lg colorText mb-4">
                Containerization ensures that applications run identically in development and production. By pairing <strong>Docker</strong> with an <strong>Nginx Reverse Proxy</strong>, we create a secure, scalable deployment pipeline.
              </p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4">
                 <p className="text-cyan-800 font-medium">
                   🐳 <strong>The Workflow:</strong> Build the app image → Run container → Expose securely via Nginx (HTTPS).
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Docker Core Section */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-cyan-500">Step 1:</span> Dockerize the Web App
          </h2>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/erdO_a98Lb4" title="Docker Tutorial 1" allowFullScreen></iframe>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/O3veCEQhWNI" title="Docker Tutorial 2" allowFullScreen></iframe>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">The Dockerfile Structure</h3>
          <p className="mb-4 colorText">This file contains instructions for building the Docker image.</p>
          
          <CodeBlock title="Dockerfile" language="docker" code={`FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]`} />

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
             <ul className="list-disc list-inside space-y-1">
               <li><strong>FROM:</strong> The base OS/image (Python, Node, etc).</li>
               <li><strong>WORKDIR:</strong> Sets the working folder inside the container.</li>
             </ul>
             <ul className="list-disc list-inside space-y-1">
               <li><strong>COPY:</strong> Moves your code from host to container.</li>
               <li><strong>CMD:</strong> The command that starts your app.</li>
             </ul>
          </div>

          <hr className="my-8 border-slate-200" />

          <h3 className="text-xl font-bold mb-4">Build & Run Commands</h3>
          <div className="space-y-4">
             <div>
                <p className="font-semibold text-slate-700 mb-2">1. Build the Image</p>
                <CodeBlock code={`docker build -t my-web-app .`} />
             </div>
             <div>
                <p className="font-semibold text-slate-700 mb-2">2. Run the Container</p>
                <CodeBlock code={`docker run -d -p 8080:5000 my-web-app`} />
                <p className="text-xs colorText mt-2">
                   <strong>-d:</strong> Detached (background) mode.<br/>
                   <strong>-p 8080:5000:</strong> Maps host port 8080 to container port 5000.
                </p>
             </div>
          </div>
        </section>

        {/* 4. Troubleshooting & Best Practices */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6">🛠️ Troubleshooting & Management</h2>
           
           <div className="grid lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h3 className="font-bold text-cyan-700 mb-2">Confirm File Paths</h3>
                 <p className="text-sm text-slate-600 mb-4">Get inside the container to debug:</p>
                 <CodeBlock code={`docker exec -it my_container bash\ncd /usr/src/app\nls`} />
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h3 className="font-bold text-purple-700 mb-2">Volume Mounting (Dev)</h3>
                 <p className="text-sm text-slate-600 mb-4">Sync local folder with container for live updates:</p>
                 <CodeBlock code={`docker run -d -p 8080:80 \\\n -v "$(pwd):/usr/share/nginx/html" \\\n nginx`} />
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h3 className="font-bold text-orange-700 mb-2">Copy File (Quick Fix)</h3>
                 <p className="text-sm text-slate-600 mb-4">Inject a file without rebuilding:</p>
                 <CodeBlock code={`docker cp index.html my_container:/path/`} />
              </div>
           </div>

           {/* Summary Table */}
           <div className="mt-8 overflow-x-auto">
             <table className="w-full text-sm text-left text-slate-500 bg-white rounded-lg shadow-sm">
               <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                 <tr>
                   <th className="px-6 py-3">Method</th>
                   <th className="px-6 py-3">Use Case</th>
                   <th className="px-6 py-3">Action Needed</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b">
                   <td className="px-6 py-4 font-bold">Rebuild</td>
                   <td className="px-6 py-4">Production / Permanent changes</td>
                   <td className="px-6 py-4"><code>docker build</code> + <code>run</code></td>
                 </tr>
                 <tr className="border-b">
                   <td className="px-6 py-4 font-bold">Volume Mount</td>
                   <td className="px-6 py-4">Active Development</td>
                   <td className="px-6 py-4">None (Updates Instantly)</td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 font-bold">docker cp</td>
                   <td className="px-6 py-4">Quick Patch</td>
                   <td className="px-6 py-4">Restart Service</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </section>

        {/* 5. Nginx & SSL Section (The "Install & Configure" part) */}
        <section className="colorBackgroundOpposite colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold colorText mb-2 flex items-center gap-2">
              <span className="text-green-400">Step 2:</span> Add Security (SSL/TLS)
           </h2>
           <p className="colorText mb-8">
              Never expose a container directly to the internet. Use Nginx as a <strong>Reverse Proxy</strong> to handle HTTPS encryption.
           </p>

           <div className="space-y-8">
              <div>
                 <h3 className="text-lg font-bold text-green-300 mb-2">1. Install Nginx</h3>
                 <CodeBlock code={`sudo apt update\nsudo apt install nginx\nsudo systemctl enable nginx`} />
              </div>

              <div>
                 <h3 className="text-lg font-bold text-green-300 mb-2">2. Configure Reverse Proxy</h3>
                 <p className="text-sm colorText mb-2">Edit default config: <code className="colorText font-bold">/etc/nginx/sites-available/default</code></p>
                 <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm font-mono text-green-100 border border-slate-700">
{`server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:8080; # Points to your Docker Container
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`}
                 </pre>
              </div>

              <div>
                 <h3 className="text-lg font-bold text-green-300 mb-2">3. Enable HTTPS (Let's Encrypt)</h3>
                 <p className="text-sm colorText mb-2">Use Certbot to automatically generate SSL certificates.</p>
                 <CodeBlock code={`sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx -d your-domain.com`} />
                 <p className="text-xs text-green-400 mt-2">✅ This automatically updates your Nginx config with the SSL keys.</p>
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