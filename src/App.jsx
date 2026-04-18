import React, { useState, useRef, useEffect } from 'react';
import {
  Github, Mail, Linkedin,
  Terminal, ArrowUpRight,
  ExternalLink, Cpu, Globe, Server, PenTool
} from 'lucide-react';

// --- SPOTLIGHT CARD ---
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
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- PROJECT PLACEHOLDER ---
const ProjectPlaceholder = ({ type }) => {
  if (type === 'code') {
    return (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <div className="text-zinc-700 font-mono text-[10px] p-4 leading-relaxed select-none">
          <span className="text-emerald-600">class</span> <span className="text-zinc-400">Project</span> <span className="text-emerald-600">extends</span> <span className="text-zinc-400">System</span> {'{'}
          <br />&nbsp;&nbsp;<span className="text-purple-500">public</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">build</span>() {'{'}
          <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600">return</span> <span className="text-orange-400">true</span>;
          <br />&nbsp;&nbsp;{'}'}
          <br />{'}'}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="relative w-32 h-24 border-2 border-[#A259FF] bg-zinc-800/50 rounded flex items-center justify-center">
        <div className="absolute -top-4 left-0 text-[8px] font-sans font-bold text-[#A259FF]">Frame 1</div>
        <PenTool className="w-8 h-8 text-zinc-600" />
        <div className="absolute -bottom-3 -right-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#A259FF" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PORTFOLIO ---
export default function Portfolio() {
  const [isDeckExpanded, setIsDeckExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'LaundryLogistics',
      role: 'Frontend Development',
      desc: 'Landing page for a laundry service business. Converted a Figma design into a production-ready React/TypeScript site.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      type: 'design',
      link: 'https://klaus-laundry.vercel.app/',
      isLive: true,
      image: '/preview/Laundry.webp',
    },
    {
      id: 2,
      title: 'Phiezek Logistics',
      role: 'Client Project',
      desc: 'Multi-page website built as a pitch for a Nigerian shipping business. Red/navy palette, fully static and responsive.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'code',
      link: 'https://phiezeklogistics.vercel.app/',
      isLive: true,
      image: '/preview/phiezekk.png',
    },
    {
      id: 3,
      title: 'OpeningForge',
      role: 'Full-Stack App',
      desc: 'Chess opening trainer with PGN import, a 3-level curriculum tree, mastery gating, coach annotations, and Stockfish integration.',
      tech: ['Next.js', 'TypeScript', 'Stockfish'],
      type: 'code',
      link: 'https://openingforge.vercel.app',
      isLive: true,
      image: '/preview/openingf.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

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

      {/* Hero */}
      <section
        className={`relative pt-32 pb-20 px-6 max-w-4xl mx-auto z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="/avatar.webp"
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
              Full-Stack Engineer based in Nigeria.<br />
              I build secure systems and pixel-perfect interfaces.
            </h2>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
          Pixel-perfect UI. <br />
          <span className="text-zinc-600">System-level Logic.</span>
        </h1>

        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10 border-l border-zinc-800 pl-6">
          I bridge the gap between <span className="text-white">React/Tailwind Aesthetics</span> and <span className="text-white">backend architecture</span>.
          I don't just build pages, I build tools.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 px-8 py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            View My Work <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:kesenenicholas@gmail.com"
            className="flex items-center gap-2 text-sm font-bold text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-lg transition-all"
          >
            <Mail className="w-4 h-4" /> Get In Touch
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 px-6 max-w-4xl mx-auto z-10 relative">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px bg-zinc-800 flex-grow"></div>
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System Capabilities</h2>
          <div className="h-px bg-zinc-800 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-5 h-5 text-emerald-500" />,
              label: 'Frontend',
              items: ['React.js / Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)'],
            },
            {
              icon: <Server className="w-5 h-5 text-emerald-500" />,
              label: 'Backend',
              items: ['PHP', 'MySQL / SQL', 'REST APIs', 'n8n Automation'],
            },
            {
              icon: <Cpu className="w-5 h-5 text-emerald-500" />,
              label: 'Design & Tools',
              items: ['Figma', 'Git / GitHub', 'VS Code', 'Vercel / Render'],
            },
          ].map(({ icon, label, items }) => (
            <div key={label} className="p-6 border border-zinc-800 bg-zinc-900/20 rounded-xl hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-white font-bold">{label}</h3>
              </div>
              <ul className="space-y-2 text-sm text-zinc-400 font-mono">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
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

        <div className={`relative transition-all duration-700 ${isDeckExpanded ? 'h-auto grid md:grid-cols-2 gap-6' : 'h-[400px] flex justify-center items-center'}`}>
          {projects.map((project, index) => {
            const rotation = isDeckExpanded ? 0 : (index - 1) * 3;
            const translation = isDeckExpanded ? 0 : (index - 1) * 8;
            const zIndex = isDeckExpanded ? 1 : 10 - index;
            const opacity = isDeckExpanded ? 1 : 1 - index * 0.1;

            return (
              <div
                key={project.id}
                onClick={() => setIsDeckExpanded(true)}
                style={{
                  transform: isDeckExpanded ? 'none' : `rotate(${rotation}deg) translateX(${translation}px) translateY(${Math.abs(translation)}px)`,
                  zIndex,
                  opacity,
                  position: isDeckExpanded ? 'relative' : 'absolute',
                  width: '100%',
                  maxWidth: isDeckExpanded ? 'none' : '400px',
                }}
                className="transition-all duration-500 ease-out cursor-pointer"
              >
                <SpotlightCard className="h-full bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-colors group">
                  <div className="flex flex-col h-full">

                    {/* Thumbnail */}
                    <div className="h-40 border-b border-white/5 relative bg-zinc-900">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <ProjectPlaceholder type={project.type} />
                      )}
                      {project.isLive && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-400 backdrop-blur-md">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                          LIVE
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        <span className="text-xs font-mono text-zinc-500">{project.role}</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto mb-4">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-zinc-400 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.isLive && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="w-full mt-2 py-2 text-xs font-bold text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-2"
                        >
                          OPEN LIVE DEMO <ExternalLink className="w-3 h-3" />
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
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:kesenenicholas@gmail.com" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
          Nicholas © 2026
        </p>
      </footer>

    </div>
  );
}