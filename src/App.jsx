import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Layout, Infinity } from 'lucide-react';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const skills = [
    { name: 'Figma', category: 'Design', icon: Palette },
    { name: 'HTML/CSS', category: 'Frontend', icon: Layout },
    { name: 'JavaScript', category: 'Frontend', icon: Code2 },
    { name: 'React', category: 'Frontend', icon: Code2 },
    { name: 'Bootstrap', category: 'Frontend', icon: Layout },
    { name: 'Tailwind CSS', category: 'Frontend', icon: Layout },
    { name: 'PHP', category: 'Backend', icon: Code2 },
    { name: 'SQL', category: 'Backend', icon: Database },
    { name: 'Python', category: 'Backend', icon: Code2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'SmartFund',
      type: 'Full-Stack Application',
      description: 'A comprehensive financial management platform featuring real-time transactions, AJAX-powered interactions, and an intuitive dashboard for tracking finances.',
      tags: ['PHP', 'JavaScript', 'SQL', 'AJAX'],
      images: 5,
      category: 'development',
      imagePath: '/preview/dashboard.png'
    },
    {
      id: 2,
      title: 'Fintech Mobile Dashboard',
      type: 'UI/UX Design',
      description: 'Modern mobile dashboard design for a fintech application, focusing on intuitive navigation and clear data visualization for financial insights.',
      tags: ['Figma', 'UI/UX', 'Mobile Design'],
      images: 1,
      category: 'design',
      imagePath: '/preview/Fintech.jpeg'
    },
    {
      id: 3,
      title: 'Laundry Service Platform',
      type: 'UI/UX Design',
      description: 'Clean and professional desktop interface for a laundry service business, emphasizing user-friendly booking flow and service management.',
      tags: ['Figma', 'UI/UX', 'Web Design'],
      images: 1,
      category: 'design',
      imagePath: '/preview/Laundry.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Portfolio
          </div> */}
          <div className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            <Infinity className="w-6 h-6 text-blue-400" /> {/* The Icon Component */ }
            Nicholas
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-6xl font-bold shadow-2xl shadow-blue-500/20">
              <img src="/avatar.png" alt='Avatar' className='w-44 h-44 rounded-full object-cover border-4 border-zinc-900'/> 
            </div>
          </div>
          <div className="flex-1">
            <div className="text-blue-400 text-sm font-semibold mb-2 tracking-wider">HELLO, I'M</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Nicholas
            </h1>
            <h2 className="text-2xl text-zinc-400 mb-6">Full-Stack Web Developer</h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              A full-stack developer who loves bringing clean design to life with solid code. 
              I manage the whole process, from sketching out intuitive interfaces in Figma to architecting
               robust backends using PHP and SQL. I thrive on creating digital experiences that are both functional
                and genuinely enjoyable to use.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium ">
                Get In Touch
              </a>
              <a href="#projects" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors font-medium">
                View Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-xl p-5 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-zinc-100">{skill.name}</div>
                  <div className="text-xs text-zinc-500 mt-1">{skill.category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-zinc-400 mb-12">A selection of my recent work</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border-b border-zinc-800">
                 {/* ⬅️ NEW IMAGE TAG */}
                  <img 
                    src={project.imagePath} 
                    alt={`Preview of ${project.title}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-blue-400 font-semibold mb-2">{project.type}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-400 text-sm font-medium hover:text-blue-300 flex items-center gap-2 group/btn">
                    View Details 
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
           I'm currently taking on new freelance projects and open to full-time roles.
            If you're looking for a dedicated developer to collaborate on a challenging project,
             I'd love to hear from you. Let's build something great.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:kesenenicholas@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/SacredDemon" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-kesene-4a9399310/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>© 2025 Kesene Nicholas. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}