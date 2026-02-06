import React, { useState, useRef } from 'react';
import { 
  Github, Mail, Linkedin,
  Terminal, Layout, ArrowUpRight, 
  ExternalLink, Code2, Database,
  Cpu, Globe, Server, PenTool, GitBranch
} from 'lucide-react';

// --- SPOTLIGHT CARD COMPONENT ---
const SpotlightCard = ({ children, className = "", onClick }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      className={`relative rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- PLACEHOLDER IMAGE COMPONENT ---
// --- PLACEHOLDER IMAGE COMPONENT (Upgraded) ---
// --- PLACEHOLDER IMAGE COMPONENT (Upgraded for All 3) ---
const ProjectPlaceholder = ({ type, title }) => {
  
  // 1. TITAN UI (The CSS/Frontend Snippet)
  if (type === 'code' && title.includes('Titan')) {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <div className="text-zinc-700 font-mono text-[10px] p-4 leading-relaxed">
           <span className="text-purple-400">.titan-card</span> {'{'} <br/>
           &nbsp;&nbsp;<span className="text-emerald-400">backdrop-filter</span>: <span className="text-orange-400">blur(12px)</span>; <br/>
           &nbsp;&nbsp;<span className="text-emerald-400">border</span>: <span className="text-blue-400">1px solid var(--glass)</span>; <br/>
           &nbsp;&nbsp;<span className="text-emerald-400">display</span>: <span className="text-orange-400">flex</span>; <br/>
           {'}'}
        </div>
      </div>
    );
  }
  
  // 2. SMARTFUND (The PHP/Backend Snippet)
  if (type === 'code') {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <div className="text-zinc-700 font-mono text-[10px] p-4 leading-relaxed">
           <span className="text-emerald-600">class</span> <span className="text-zinc-400">SmartFund</span> <span className="text-emerald-600">extends</span> <span className="text-zinc-400">System</span> {'{'} <br/>
           &nbsp;&nbsp;<span className="text-purple-500">public</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">secure</span>() {'{'} <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600">return</span> <span className="text-orange-400">true</span>; <br/>
           &nbsp;&nbsp;{'}'}<br/>
           {'}'}
        </div>
      </div>
    );
  }

  // 3. LAUNDRY / DESIGN (The Figma Canvas Look)
  return (
    <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center relative overflow-hidden">
      {/* Figma Grid Background */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* The "Selected Frame" Visual */}
      <div className="relative w-32 h-24 border-2 border-[#A259FF] bg-zinc-800/50 rounded flex items-center justify-center">
        {/* The Frame Label */}
        <div className="absolute -top-4 left-0 text-[8px] font-sans font-bold text-[#A259FF]">Frame 1</div>
        
        {/* The Icon */}
        <PenTool className="w-8 h-8 text-zinc-600" />

        {/* The Mouse Cursor */}
        <div className="absolute -bottom-3 -right-3">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#A259FF" stroke="white" strokeWidth="2"/>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isDeckExpanded, setIsDeckExpanded] = useState(false);

 const projects = [
    {
      id: 1,
      title: 'SmartFund',
      role: 'Full-Stack Logic',
      desc: 'A financial tracking engine built to enforce data persistence. Uses a custom PHP/MySQL architecture.',
      tech: ['PHP', 'MySQL', 'Logic'],
      type: 'code',
      link: 'https://smartfund-demo.rf.gd/?i=1',
      isLive: true,
      image: null // No image, uses Code Placeholder
    },
    {
      id: 2,
      title: 'Titan UI',
      role: 'Frontend Architecture',
      desc: 'A custom frontend library. I built interactive UI components using raw CSS and Vanilla JS.',
      tech: ['Advanced CSS', 'JavaScript', 'UI/UX'],
      type: 'code',
      link: '#',
      isLive: false,
      image: null // No image, uses Code Placeholder
    },
    {
      id: 3,
      title: 'LaundryLogistics',
      role: 'Product Design',
      desc: 'Prototype for a logistics system. I mapped the entire user journey in Figma to solve race conditions.',
      tech: ['Figma', 'UX Logic'],
      type: 'design',
      link: '#',
      isLive: false,
      image: '/preview/Laundry.jpg' // <--- ADD YOUR IMAGE PATH HERE
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-sm font-bold tracking-widest text-emerald-500 flex items-center gap-2">
            <Terminal className="w-4 h-4" /> NICHOLAS_KESENE
          </div>
          <div className="flex gap-6 text-xs font-mono text-zinc-500">
            <a href="#work" className="hover:text-emerald-400 transition-colors">/WORK</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">/SKILLS</a>
            <a href="mailto:kesenenicholas@gmail.com" className="hover:text-emerald-400 transition-colors">/CONTACT</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto z-10">
        
        {/* 1. THE AVATAR & INTRO */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
           {/* Avatar Placeholder */}
           <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="../public/avatar.png" 
                alt="Nicholas Kesene" 
                className="relative w-24 h-24 rounded-full object-cover border-2 border-black bg-zinc-800"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-4 border-black rounded-full" title="Online & Available"></div>
           </div>

           <div className="pt-2">
             <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm mb-2">
               <span className="w-2 h-0.5 bg-emerald-500"></span>
               Hi, I'm Nicholas.
             </div>
             <h2 className="text-zinc-400 text-lg max-w-lg">
               Full-Stack Engineer based in Nigeria. <br/>
               I build secure systems and pixel-perfect interfaces.
             </h2>
           </div>
        </div>

        {/* 2. THE BIG HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
          Pixel-perfect UI. <br />
          <span className="text-zinc-600">System-level Logic.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10 border-l border-zinc-800 pl-6">
          I bridge the gap between <span className="text-white">React/Tailwind Aesthetics</span> and <span className="text-white">PHP/MySQL Architecture</span>. 
          I don't just build pages; I build tools.
        </p>

        {/* 3. THE HIGH CONTRAST CTAs */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 border border-transparent px-8 py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            View My Work <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
          </button>
          
          <a 
            href="mailto:kesenenicholas@gmail.com"
            className="flex items-center gap-2 text-sm font-bold text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-lg transition-all"
          >
            <Mail className="w-4 h-4"/> Get In Touch
          </a>
        </div>
      </section>

      {/* --- NEW SKILLS SECTION (SYSTEM CAPABILITIES) --- */}
      <section id="skills" className="py-12 px-6 max-w-4xl mx-auto z-10 relative">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px bg-zinc-800 flex-grow"></div>
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System Capabilities</h2>
          <div className="h-px bg-zinc-800 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-emerald-500" />
              <h3 className="text-white font-bold">Frontend</h3>
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-mono">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>React.js</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Tailwind CSS</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>HTML5 / CSS3</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-5 h-5 text-emerald-500" />
              <h3 className="text-white font-bold">Backend</h3>
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-mono">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>PHP</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>MySQL / SQL</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>REST APIs</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Authentication</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-5 h-5 text-emerald-500" />
              <h3 className="text-white font-bold">Design & Tools</h3>
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-mono">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Figma</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Git / GitHub</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>VS Code</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-600 rounded-full"></div>Command Line</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-24 px-6 max-w-4xl mx-auto relative z-10 min-h-[600px]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Deployed Assets</h2>
            <p className="text-zinc-500 text-sm">Click the deck to unveil details.</p>
          </div>
          
          <button 
            onClick={() => setIsDeckExpanded(!isDeckExpanded)}
            className="text-xs font-mono text-emerald-500 hover:underline cursor-pointer"
          >
            {isDeckExpanded ? '[ COLLAPSE STACK ]' : '[ EXPAND GRID ]'}
          </button>
        </div>

        {/* THE DECK CONTAINER */}
        <div className={`relative transition-all duration-700 ease-spring ${isDeckExpanded ? 'h-auto grid md:grid-cols-2 gap-6' : 'h-[400px] flex justify-center items-center'}`}>
          
          {projects.map((project, index) => {
            const rotation = isDeckExpanded ? 0 : (index - 1) * 3;
            const translation = isDeckExpanded ? 0 : (index - 1) * 8;
            const zIndex = isDeckExpanded ? 1 : 10 - index;
            const opacity = isDeckExpanded ? 1 : 1 - (index * 0.1);

            return (
              <div 
                key={project.id}
                onClick={() => setIsDeckExpanded(true)}
                style={{
                  transform: isDeckExpanded 
                    ? 'none' 
                    : `rotate(${rotation}deg) translateX(${translation}px) translateY(${Math.abs(translation)}px)`,
                  zIndex: zIndex,
                  opacity: opacity,
                  position: isDeckExpanded ? 'relative' : 'absolute',
                  width: isDeckExpanded ? '100%' : '100%',
                  maxWidth: isDeckExpanded ? 'none' : '400px',
                }}
                className="transition-all duration-500 ease-out cursor-pointer"
              >
                <SpotlightCard className="h-full bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-colors group">
                  <div className="flex flex-col h-full">
                    
                    {/* Project Image Area */}
                   {/* Project Image Area */}
<div className="h-40 border-b border-white/5 relative bg-zinc-900 group-hover:opacity-100 transition-opacity">
  
  {/* LOGIC: If image exists, show it. If not, show Placeholder. */}
  {project.image ? (
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
    />
  ) : (
    <ProjectPlaceholder type={project.type} title={project.title} />
  )}
  
  {/* LIVE INDICATOR (Keep this here) */}
  {project.isLive && (
     <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-400 backdrop-blur-md">
       <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
       LIVE
     </div>
  )}
</div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        <span className="text-xs font-mono text-zinc-500">{project.role}</span>
                      </div>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto mb-4">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-zinc-400 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* LIVE LINK BUTTON */}
                      {project.isLive && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full mt-2 py-2 text-xs font-bold text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-2"
                        >
                          OPEN LIVE DEMO <ExternalLink className="w-3 h-3"/>
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 text-center relative z-10 bg-[#050505]">
        <div className="flex justify-center gap-6 mb-8">
           <a href="https://github.com/SacredDemon" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
             <Github className="w-5 h-5"/>
           </a>
           <a href="mailto:kesenenicholas@gmail.com" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
             <Mail className="w-5 h-5"/>
           </a>
           <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
             <Linkedin className="w-5 h-5"/>
           </a>
        </div>
        <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
           Nicholas © 2026
        </p>
      </footer>

    </div>
  );
}