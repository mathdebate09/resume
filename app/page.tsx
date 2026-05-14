import Image from 'next/image'
import { Mail, Phone, Globe, Download } from 'lucide-react'

export default function Resume() {
  return (
    <main className="min-h-screen bg-white text-black py-8 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-2 flex items-center justify-center gap-3">
            <h1 className="text-5xl font-serif font-bold">Jay Singh</h1>
            <a
              href="/jay-singh-resume.pdf"
              download="jay-singh-resume.pdf"
              className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-black"
            >
              <Download size={14} />
            </a>
          </div>
          <p className="text-sm text-gray-700 mb-4">Thane, Maharashtra 400605</p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="tel:+918928775989" className="flex items-center gap-1.5 text-gray-700 hover:text-black">
              <Phone size={14} />
              <span>8928775989</span>
            </a>
            <a href="mailto:work.jayssingh@gmail.com" className="flex items-center gap-1.5 text-gray-700 hover:text-black">
              <Mail size={14} />
              <span>work.jayssingh@gmail.com</span>
            </a>
            <a href="https://jayowiee.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 hover:text-black">
              <Globe size={14} />
              <span>jayowiee.com</span>
            </a>
            <a href="https://linkedin.com/in/jay-s-singh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 hover:text-black">
              <Image src="/linkedin.svg" alt="LinkedIn" width={14} height={14} />
              <span>in/jay-s-singh</span>
            </a>
            <a href="https://github.com/mathdebate09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 hover:text-black">
              <Image src="/github.svg" alt="GitHub" width={14} height={14} />
              <span>mathdebate09</span>
            </a>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Education</h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Thakur College of Engineering and Technology</h3>
              <p className="text-sm italic text-gray-700">Bachelor of Engineering in Information Technology</p>
            </div>
            <div className="text-right text-sm whitespace-nowrap ml-4">
              <p className="font-semibold">Aug. 2023 – Present</p>
              <p className="text-gray-700">CGPA - 9.25</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Technical Skills</h2>
          <div className="space-y-2 text-sm">
            <p><span className="font-bold">Languages:</span> <span className="text-gray-700">Javascript, C++, Python, SQL — HTML, CSS, YAML, Markdown</span></p>
            <p><span className="font-bold">Developer Tools:</span> <span className="text-gray-700">Figma, VS Code, Git, Android Studio, Docker, AWS</span></p>
            <p><span className="font-bold">Databases:</span> <span className="text-gray-700">MongoDB, PostgreSQL, Redis, MariaDB</span></p>
            <p><span className="font-bold">Technologies/Frameworks:</span> <span className="text-gray-700">Next.JS, Node.js, Nest.JS, Expo, Docusaurus, Auth0, GitHub Actions</span></p>
            <p><span className="font-bold">Coursework:</span> <span className="text-gray-700">Computer Networks, Computer Architecture, Operating Systems, DBMS, Data Structures</span></p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Experience</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">ThinkAct AI</h3>
              <span className="text-sm whitespace-nowrap ml-4">July 2025 – Jan 2026</span>
            </div>
            <p className="text-sm italic text-gray-700 mb-3">Fullstack Engineer Intern <span className="float-right">Remote – New Jersey, United States</span></p>
            <ul className="text-sm space-y-1 ml-4">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built role-based authentication using Auth0 with 10+ roles and custom per-role onboarding emails via SendGrid.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Implemented 8-language UI support alongside a WebSocket chat module with real-time translation synced across email.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built an internal note-taking tool with Python backend used in semantic search for LLM-based document retrieval.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Configured wildcard SAN SSL on EC2 for dynamic tenant domains boosting client brand visibility, Dockerized the full stack (Next.js, NestJS, Django + Ollama).</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">Vighnotech</h3>
              <span className="text-sm whitespace-nowrap ml-4">Sept 2024 – Jan 2025</span>
            </div>
            <p className="text-sm italic text-gray-700 mb-3">React Native Intern <span className="float-right">On-Site – Mumbai, India</span></p>
            <ul className="text-sm space-y-1 ml-4">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built a cross-platform Expo app from Figma designs with client-side PDF generation reducing server load and generating nightly builds for QA.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Set up OAuth2 login with Gmail read access via OAuth2 scope and fetched SMS history via Android API.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built a vendor CRM interface centralizing user-to-vendor data flow and worked on a separate project for Inventory Management.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">Open Source</h3>
              <span className="text-sm whitespace-nowrap ml-4">April 2024 – Present</span>
            </div>
            <p className="text-sm italic text-gray-700 mb-3">Maintainer NativeFlow, Top Contributor at TheOdinProject</p>
            <ul className="text-sm space-y-1 ml-4">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Followed the standard open-source practice to ensure atomicity in commits/pull-requests corresponding to issues, building a complete ecosystem of dev-tools instead of a standalone library.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Participated in Node:Revamp Project, while in parallel I also updated resources, project requirements and database issues on the TheOdinProject Website.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Projects</h2>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">NativeFlow</h3>
                <p className="text-sm text-gray-600">TypeScript, GitHub Actions, Docusaurus, React, Markdown, RTL, NPM</p>
              </div>
              <div className="text-right text-sm">
                <a href="https://github.com/nativeflowteam/nativeflowcss" className="text-blue-600 hover:underline">GitHub</a> <span className="text-gray-400">|</span> <a href="https://nativeflow.js.org" className="text-blue-600 hover:underline">Docs</a>
              </div>
            </div>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Developed a utility-first styling library for React Native, enabling Tailwind-like styling but using objects.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Wrote Docusaurus documentation with live Expo examples and made a VS Code Intellisense extension for dev-exp.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Benchmarked as the second-fastest styling library, only 8% slower than the native StyleSheet API.</span>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">SICK</h3>
                <p className="text-sm text-gray-600">React Native, TypeScript, GitHub Actions, Solana, Phantom/Tiplink Wallets, Gemini, Figma</p>
              </div>
              <div className="text-right text-sm">
                <a href="https://github.com/SICK-Solana" className="text-blue-600 hover:underline">GitHub</a> <span className="text-gray-400">|</span> <a href="https://youtu.be/m-T75VVZ3l4?si=XOlO8dCldRJGknNT" className="text-blue-600 hover:underline">Demo</a>
              </div>
            </div>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built a decentralized crypto investment app with copy trading, Phantom wallet and TipLink for wallet-less onboarding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Used CoinGecko and Jup.ag for live pricing with Gemini-based market analysis and a creator loyalty reward system.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Awarded a monetary grant from CoinDCX India via Superteam for onboarding 1000+ users on Web3.</span>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">BelieveScreener</h3>
                <p className="text-sm text-gray-600">React Native, Expo, TypeScript, Helius RPC, Figma</p>
              </div>
              <div className="text-right text-sm">
                <a href="https://github.com/mathdebate09/believescreener" className="text-blue-600 hover:underline">GitHub</a> <span className="text-gray-400">|</span> <a href="https://www.veed.io/view/e378e461-80bf-4fee-b0fe-a52577a5f72f?panel=share" className="text-blue-600 hover:underline">Demo</a>
              </div>
            </div>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Built real-time token price updates via Helius RPC WebSocket API.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Made a Believe Portfolio feature that filters user tokens with a custom brand identity and mascot inspired by believe.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Extended believe.fun&apos;s web functionality into a mobile app while keeping the UX as close to original version.</span>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Fill My Cycle</h3>
                <p className="text-sm text-gray-600">JavaScript, jQuery, HTML, CSS</p>
              </div>
              <div className="text-right text-sm">
                <a href="https://github.com/mathdebate09/fill-my-cycle" className="text-blue-600 hover:underline">GitHub</a> <span className="text-gray-400">|</span> <a href="https://fill-my-cycle.netlify.app/" className="text-blue-600 hover:underline">Live</a>
              </div>
            </div>
            <ul className="text-sm space-y-1 ml-4 mt-2">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Developed a lab evaluation calculator that auto-generates annual cycle entries for students.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>Achieved 500+ daily visits during semester peaks via SEO optimization.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Extracurricular */}
        <section>
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Extracurricular</h2>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold">Tech Writing</h3>
              <span className="text-sm whitespace-nowrap ml-4">May 2024 – Present</span>
            </div>
            <p className="text-sm italic text-gray-700 mb-3">Author of technical guides and documentation <span className="float-right">Online</span></p>
            <ul className="text-sm space-y-1 ml-4">
              <li className="flex gap-3">
                <span className="text-gray-600 shrink-0">–</span>
                <span>
                  Published articles on SEO-friendly HTML metadata and UI styling on{' '}
                  <a href="https://dev.to/mathdebate09" className="text-blue-600 hover:underline">dev.to</a>,{' '}
                  <a href="https://medium.com/mathdebate09" className="text-blue-600 hover:underline">Medium</a>, and{' '}
                  <a href="https://hackernoon.com/u/jayowiee" className="text-blue-600 hover:underline">HackerNoon</a>.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
