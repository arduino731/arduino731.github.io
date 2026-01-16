import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="colorBackgroundOpposite border-t border-white/10 ">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Branding & Socials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold colorText mb-2">Brian Van Vlymen</h3>
              <p className="colorText opacity-80 text-lg leading-relaxed">
                Frontend Developer with a passion for <br className="hidden md:block" /> 
                Linux infrastructure & automated deployments.
              </p>
            </div>
            
            <div className="flex space-x-5">
              {/* GitHub */}
              <a href="https://github.com/arduino731" target="_blank" rel="noopener noreferrer" className="colorText hover:scale-110 transition-transform duration-200" aria-label="GitHub">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/vanvlymen/" target="_blank" rel="noopener noreferrer" className="colorText hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://x.com/vanvlymenpaws" target="_blank" rel="noopener noreferrer" className="colorText hover:scale-110 transition-transform duration-200" aria-label="Twitter">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.16 1.21 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold colorText">Get In Touch</h3>
            <p className="colorText opacity-80">
              Open to collaborations or professional opportunities. Reach out via <a href="mailto:Arduino731@gmail.com" className="underline hover:text-blue-400 transition-colors">Arduino731@gmail.com</a>
            </p>
            
            <form action="https://formspree.io/f/movdloyo" method="POST" className="group">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="px-5 py-3 flex-1 rounded-xl bg-black/10 border border-black/20 colorText placeholder:colorText focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
                />
                <button
                  type="submit"
                  className="bg-slate-200 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-white hover:scale-105 transition-all duration-200 active:scale-95"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center colorText opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Brian Van Vlymen. Designed & Built in Texas 🇺🇸</p>
          <p className="mt-1 font-mono tracking-tighter">Stack: Next.js 15 | WSL2 | Docker | GSAP</p>
        </div>
      </div>
    </footer>
  )
}