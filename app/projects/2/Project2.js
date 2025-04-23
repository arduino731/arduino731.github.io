import Image from 'next/image'


export default function Project2() {
  return (
    <div class="bg-gray-100 text-gray-800 font-sans">
      <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold text-blue-600 mb-4 text-center">🚀 Deploy Node.js on AWS EC2</h1>
          <div className="my-2" style={{ position: 'relative', height: '300px' }} >
            <Image 
                src="/images/ec2.png" 
                alt="ec2"
                className="border-solid border-2 border-slate-100 py-2 h-auto rounded-md" 
                quality={100}
                fill
                style={{
                  objectFit: 'contain',
                }}
            />
          </div>
        <p class="mb-2 text-center">Deploying a Node.js app from <strong>Windows → WSL → AWS EC2</strong>, step-by-step, clearly and cleanly.</p>
        <p class="mb-4">Reference: 
          <a href="https://www.sammeechward.com/deploying-full-stack-js-to-aws-ec2#rsync" 
            target="_blank" 
            class="text-blue-500 underline hover:text-blue-700">
            Sam Meech-Ward’s Guide
          </a>
        </p>

        <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded">
          💡 <strong>Pro Tip:</strong> If you’ve used other AWS services (like Route 53, CloudFront, Lambda, RDS), list them in your resume or project to show off your experience!
        </div>

        <h2 class="text-2xl font-semibold mb-2">Why Choose EC2 Over Apache?</h2>

        <h3 class="text-xl font-medium mt-4 mb-1">TL;DR:</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Learn Apache</strong> for basic web server setup and personal projects.</li>
          <li><strong>Learn EC2</strong> for production-ready, scalable, DevOps-style deployments.</li>
        </ul>

        <h3 class="text-xl font-medium mt-4 mb-1">EC2 vs Apache</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold text-green-600 mb-2">Apache:</h4>
            <ul class="list-disc ml-6">
              <li>✅ Easy to get started</li>
              <li>✅ Great for static sites or small apps</li>
              <li>❌ Not scalable by itself</li>
              <li>❌ Lacks built-in tools (monitoring, backups, etc.)</li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-blue-600 mb-2">EC2:</h4>
            <ul class="list-disc ml-6">
              <li>✅ Cloud VM — run anything on it</li>
              <li>✅ Supports scaling, snapshots, monitoring, IAM, etc.</li>
              <li>✅ DevOps-ready</li>
              <li>❌ Steeper learning curve</li>
              <li>❌ You still need to configure Apache, Node.js, etc.</li>
            </ul>
          </div>
        </div>

        <p class="mt-4 italic text-sm">💡 Simple Analogy: <strong>EC2 is the house. Apache is the kitchen.</strong> You install Apache inside EC2 to “cook” your web content.</p>

        <hr class="my-8 border-gray-300"/>

        <h2 class="text-2xl font-semibold mb-4">📦 Deployment Goal</h2>
        <p class="mb-6">Deploy your local Node.js app (port 5001) to AWS EC2 using WSL and <code class="bg-gray-200 px-1 rounded">rsync</code>.</p>

        <h2 class="text-2xl font-semibold mb-4">📘 Step-by-Step Deployment Guide</h2>

        <ol class="list-decimal ml-6 space-y-6">
          <li>
            <strong>Test app locally:</strong>
            <pre class="bg-gray-200 p-3 rounded mt-1"><code>npm install
    npm start</code></pre>
            <p>Visit: <code class="bg-gray-100 px-1">http://localhost:5001</code></p>
          </li>

          <li>
            <strong>Set up WSL:</strong>
            <pre class="bg-gray-200 p-3 rounded mt-1"><code>wsl --install</code></pre>
            <p>Then restart and install rsync:</p>
            <pre class="bg-gray-200 p-3 rounded"><code>sudo apt update
    sudo apt install rsync</code></pre>
          </li>

          <li>
            <strong>Go to your Node.js folder in WSL:</strong>
            <pre class="bg-gray-200 p-3 rounded"><code>cd "/mnt/c/Users/Dell Inspiron/Documents/GitHub/node-express-ec2"</code></pre>
          </li>

          <li>
            <strong>Move your SSH key to WSL:</strong>
            <pre class="bg-gray-200 p-3 rounded"><code>cp "/mnt/c/Users/Dell Inspiron/.ssh/ssh1.pem" ~/.ssh/
    chmod 400 ~/.ssh/ssh1.pem</code></pre>
          </li>

          <li>
            <strong>Run rsync to upload app to EC2:</strong>
            <pre class="bg-gray-200 p-3 rounded"><code>rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
    -e "ssh -i ~/.ssh/ssh1.pem" \
    . ubuntu@ec2-YOUR-PUBLIC-IP.compute-1.amazonaws.com:~/app</code></pre>
          </li>

          <li>
            <strong>SSH into EC2:</strong>
            <pre class="bg-gray-200 p-3 rounded"><code>ssh -i ~/.ssh/ssh1.pem ubuntu@ec2-YOUR-PUBLIC-IP.compute-1.amazonaws.com</code></pre>
          </li>

          <li>
            <strong>Set up Node.js environment:</strong>
            <pre class="bg-gray-200 p-3 rounded"><code>cd ~/app
    sudo apt update
    sudo apt install -y nodejs npm
    npm install
    npm start</code></pre>
          </li>

          <li>
            <strong>Access from browser:</strong>
            <p>Update Inbound Rules in EC2 to allow port 5001, then visit:</p>
            <pre class="bg-gray-200 p-3 rounded"><code>http://EC2_PUBLIC_IP:5001</code></pre>
          </li>
        </ol>

        <h2 class="text-2xl font-semibold mt-10 mb-2">⚙️ One-Click Deployment Script (Optional)</h2>

        <h3 class="text-lg font-medium mt-4">1. Create Script</h3>
        <pre class="bg-gray-200 p-3 rounded"><code>nano deploy.sh</code></pre>
        <p>Paste this:</p>
        <pre className="bg-gray-200 p-4 rounded overflow-x-auto text-sm">
      <code>
        {`#!/bin/bash

    KEY_PATH="$HOME/.ssh/ssh1.pem"
    REMOTE_USER="ubuntu"
    REMOTE_HOST="ec2-YOUR-PUBLIC-IP.compute-1.amazonaws.com"
    REMOTE_DIR="~/app"

    echo "🚀 Starting deployment to $REMOTE_HOST"

    rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \\
    -e "ssh -i $KEY_PATH" \\
    . $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

    echo "✅ Code synced. Logging into EC2..."
    ssh -i $KEY_PATH $REMOTE_USER@$REMOTE_HOST << 'EOF'
      cd ~/app
      npm install
      npm start
    EOF`}
      </code>
    </pre>


        <h3 class="text-lg font-medium mt-4">2. Make Script Executable</h3>
        <pre class="bg-gray-200 p-3 rounded"><code>chmod +x deploy.sh</code></pre>

        <h3 class="text-lg font-medium mt-4">3. Deploy</h3>
        <pre class="bg-gray-200 p-3 rounded"><code>./deploy.sh</code></pre>
      </div>



    </div>
  )
}
