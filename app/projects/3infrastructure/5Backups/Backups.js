'use client'
import React from 'react';
import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';
import Image from 'next/image';

export default function BackupAutomation() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 colorBackground colorText">
      <SectionHeader title="Backup & Recovery" />
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 colorBackgroundOpposite shadow-sm border-b border-slate-200 px-8 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold colorText">Automated S3 Backups</h1>
        <Link href="/projects/3infrastructure" className="text-sm font-medium colorText hover:text-cyan-600 transition-colors">
           ← Back to Dashboard
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-10 space-y-12">

        {/* 2. Intro / Recruiter Summary */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold colorText mb-4">Disaster Recovery Strategy</h2>
              <p className="text-lg colorText mb-4">
                Data loss is not a matter of "if," but "when." My strategy involves the <strong>3-2-1 Backup Rule</strong>: 3 copies of data, 2 different media types, and 1 off-site copy.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                 <p className="text-yellow-800 font-medium">
                   🛡️ <strong>The Automation:</strong> A Bash script compresses Docker volumes → Uploads to AWS S3 → Scheduled via Cron (Automated).
                 </p>
              </div>
            </div>
          </div>
          
          {/* Architecture Diagram Placeholder */}
          <div className="mt-4 relative w-full h-[450px]">
            <Image 
              src="/images/BackupAutomation.png" 
              alt="Dashboard interface showing containerized services and real-time SSL status"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 800px"
              priority
            />
          </div>
        </section>

        {/* 3. The Bash Script */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-yellow-500">Step 1:</span> The Backup Script
          </h2>
          <p className="colorText mb-6">
            I wrote this <code>backup.sh</code> script to automate the process. It compresses the data, uploads it to the cloud, and cleans up old local files to save disk space.
          </p>

          <CodeBlock title="backup.sh" language="bash" code={`#!/bin/bash

# --- Configuration ---
SOURCE_DIR="/var/lib/docker/volumes/my-app-data"
BACKUP_DIR="/home/admin/backups"
BUCKET_NAME="s3://my-portfolio-backups"
DATE=$(date +%F)
FILE_NAME="backup-$DATE.tar.gz"

# 1. Create Backup Directory if not exists
mkdir -p $BACKUP_DIR

# 2. Compress the Data (Tarball)
echo "📦 Compressing data..."
tar -czf $BACKUP_DIR/$FILE_NAME $SOURCE_DIR

# 3. Upload to AWS S3
echo "☁️ Uploading to S3..."
aws s3 cp $BACKUP_DIR/$FILE_NAME $BUCKET_NAME

# 4. Cleanup: Remove local backups older than 7 days
echo "🧹 Cleaning up old files..."
find $BACKUP_DIR -type f -name "*.tar.gz" -mtime +7 -delete

echo "✅ Backup Complete!"`} />

          <div className="mt-6 grid md:grid-cols-2 gap-4">
             <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <h4 className="font-bold colorText text-sm mb-1">Why use `tar`?</h4>
                <p className="text-xs text-slate-600">It preserves file permissions and reduces upload size significantly.</p>
             </div>
             <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <h4 className="font-bold colorText text-sm mb-1">Why `mtime +7`?</h4>
                <p className="text-xs text-slate-600">This prevents the server storage from filling up by deleting week-old local files automatically.</p>
             </div>
          </div>
        </section>

        {/* 4. Scheduling with Cron */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6 flex items-center gap-2">
            <span className="text-blue-500">Step 2:</span> Automating with Cron
           </h2>
           <p className="colorText mb-4">
             We don't run backups manually. We use the Linux <strong>Cron Daemon</strong> to schedule the job.
           </p>

           <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
              <div className="flex items-center gap-4 text-white font-mono text-lg mb-4">
                 <span className="text-yellow-400">0 2 * * 1</span>
                 <span>/home/admin/scripts/backup.sh</span>
              </div>
              
              {/* Cron Breakdown Visual */}
              <div className="grid grid-cols-5 gap-2 text-center text-xs text-slate-400">
                 <div className="flex flex-col items-center">
                    <span className="font-bold text-white mb-1">0</span>
                    <span>Minute (0)</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="font-bold text-white mb-1">2</span>
                    <span>Hour (2 AM)</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="font-bold text-white mb-1">*</span>
                    <span>Day of Month</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="font-bold text-white mb-1">*</span>
                    <span>Month</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="font-bold text-white mb-1">1</span>
                    <span>Day (Monday)</span>
                 </div>
              </div>
           </div>

           <div className="mt-6">
              <h3 className="font-bold colorText mb-2">How to install:</h3>
              <CodeBlock code={`crontab -e\n# Paste the line above at the bottom of the file`} />
           </div>
        </section>

        {/* 5. Prerequisites (AWS CLI) */}
        <section className="colorBackgroundOpposite p-8 rounded-2xl shadow-sm border border-slate-200">
           <h2 className="text-2xl font-bold colorText mb-6">⚙️ Configuration Requirements</h2>
           <div className="grid lg:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-orange-600 mb-2">AWS IAM User</h3>
                 <p className="text-sm text-slate-600 mb-4">
                    Created a dedicated user with <code>AmazonS3FullAccess</code> policy strictly for backups.
                 </p>
                 <CodeBlock title="Security Best Practice" code={`access_key = AKIAIOSFODNN7EXAMPLE\nsecret_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`} />
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-purple-600 mb-2">Install AWS CLI</h3>
                 <p className="text-sm text-slate-600 mb-4">
                    The script relies on the CLI tool to communicate with S3.
                 </p>
                 <CodeBlock code={`sudo apt install awscli\naws configure`} />
              </div>
           </div>
        </section>

        {/* 6. Restoration Plan (Closing the loop) */}
        <section className="bg-slate-900 colorText p-8 rounded-2xl shadow-xl">
           <h2 className="text-2xl font-bold text-white mb-4">🔄 The Restoration Plan</h2>
           <p className="text-slate-300 mb-6">
              A backup is only as good as its ability to be restored. If the server fails, here is the recovery command:
           </p>
           
           <CodeBlock code={`# 1. Download from S3
aws s3 cp s3://my-portfolio-backups/backup-2023-10-23.tar.gz .

# 2. Extract Data
tar -xzvf backup-2023-10-23.tar.gz -C /var/lib/docker/volumes/`} />
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